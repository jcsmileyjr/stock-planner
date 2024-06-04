import Header from './components/header/header';
import ExecutiveSummary from './components/executiveSummary/executiveSummary';
import CurrentInvestments from './components/currentInvestments/currentInvestments';
import ScoutInvestments from './components/scoutInvestments/scoutInvestments';
import Footer from './components/footer/footer';
import stockType from './types/stockType';
import dataType from './types/dataType';
import getStockNames  from './utils/getStockNames';
import refineInvestments from './utils/refineInvestments';
import getParsedDollarAmount from './utils/getParsedDollarAmount';
import getFlag from './utils/getFlag';
import TestData from './data/testData.json';

/**
 * TODO: Get stock data from a API or JSON file
 * ✅ Get stored investments, AKA the testData.json (initially) but later from localstorage & later from an CMS
 * ✅ Formally list all stock symbols based on saved investments.
 * ✅ Update test data with real stocks
 * ✅ Get stock data from API or JSON file
 * - Get prices for each stock and update/calculate investments
 * ✅ Convert raw stock data into an array of stock objects to display
 * ✅ Update variables on this page to use the new stock objects
 * - Save investments to local storage
 * - Enable investments to be called from local storage
 */

/**
 * Asynchronously fetches stock prices from the FinancialModelingPrep API.
 * @return {Promise<any>} A Promise that resolves to the JSON response from the API.
 */
async function getStockPrices () {
  const stockNames = getStockNames(TestData);
  const response = await fetch(`https://financialmodelingprep.com/api/v3/quote-short/${stockNames}?apikey=${process.env.NEXT_PUBLIC_FINANCIALMODELINGPREP_API_KEY}`, { cache: 'no-store' });
  const data = await response.json();
  return data;
}

/**
 * Asynchronously calculates the revised data by fetching stock prices and updating the current price for each stock.
 * If the stock has been sold, then price is not updated.
 * @return {Promise<dataType>} A Promise that resolves to the revised data object with updated current prices.
 */
async function calculateData () {
  const stockPrices = await getStockPrices();

  let revisedData: dataType = {
    initialInvestment: TestData.initialInvestment,
    stocks: []
  };
  
  revisedData.stocks = TestData.stocks.map((oldStock) => {
    const foundStock = stockPrices.find((stock:any) => stock.symbol === oldStock.symbol);

    if (foundStock) {
      let flagType = getFlag(oldStock);
      return {
        ...oldStock, 
        currentPrice: oldStock.status === 'sold' ? getParsedDollarAmount(oldStock.currentPrice) : getParsedDollarAmount(foundStock.price),
        purchasedPrice: getParsedDollarAmount(oldStock.purchasedPrice),
        flag: flagType
      }
    } else {
      return oldStock
    }
  })
  
  return revisedData;
}

/**
 * Calculates the revised data by copying the initial investment and mapping over the stocks in TestData.
 * For each stock, it adds a flag based on the result of the getFlag function.
 *
 * @return {dataType} The revised data object with updated flags.
 */
const calculateTestData = () => {
  let revisedData: dataType = {
    initialInvestment: TestData.initialInvestment,
    stocks: []
  };

  revisedData.stocks = TestData.stocks.map((oldStock) => {
    return {
      ...oldStock, 
      currentPrice: getParsedDollarAmount(oldStock.currentPrice),
      purchasedPrice: getParsedDollarAmount(oldStock.purchasedPrice),
      flag: getFlag(oldStock)
    }
  }); 
  
  return revisedData;
}

export default async function Home() {
  let data = calculateTestData() // fOR TESTING    
  
  if(process.env.NODE_ENV !== "development"){
    data = await calculateData(); // Production
  } 

  const currentStocks = await refineInvestments(data, 'purchased'); 
  const scoutStocks = await refineInvestments(data, 'scouted'); 

  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <div className='grid grid-cols-1 laptop:grid-cols-3 laptop:grid-rows-3 laptop:gap-x-4 px-2 md:px-48 laptop:px-4'>
        <ExecutiveSummary content={data} />
        <CurrentInvestments content={currentStocks} />
        <ScoutInvestments content={scoutStocks} />
        <Footer />
      </div>
    </main>
  )
}
