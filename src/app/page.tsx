import Header from './components/header/header';
import ExecutiveSummary from './components/executiveSummary/executiveSummary';
import CurrentInvestments from './components/currentInvestments/currentInvestments';
import ScoutInvestments from './components/scoutInvestments/scoutInvestments';
import TestData from './data/testData.json';
import stockType from './types/stockType';
import dataType from './types/dataType';
import getStockNames  from './utils/getStockNames';
import Footer from './components/footer/footer';

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
 * Refines the current investments by filtering stocks that are purchased.
 * @param {dataType} data - The data object containing stock information.
 * @return {stockType[]} An array of stocks that are currently invested.
 */
const refineCurrentInvestment = (data : dataType) : stockType[] => {
  let initialStockArray: stockType[] = data.stocks;
  let stocks: stockType[] = [];
  initialStockArray.forEach((stock) => {
    if (stock.status === 'purchased') {
      stocks.push(stock);
    }
  })

  return stocks;
}

/**
 * Filters the given data array to include only stocks with a status of 'scouted'.
 * @param {dataType} data - The data object containing an array of stocks.
 * @return {stockType[]} An array of stocks with a status of 'scouted'.
 */
const refineScoutInvestment = (data : dataType) : stockType[] => {
  let initialStockArray: stockType[] = data.stocks;
  let stocks: stockType[] = [];
  initialStockArray.forEach((stock) => {
    if (stock.status === 'scouted') {
      stocks.push(stock);
    }
  })

  return stocks;
}

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
      return {
        ...oldStock, 
        currentPrice: oldStock.status === 'sold' ? oldStock.currentPrice : foundStock.price,
      }
    } else {
      return oldStock
    }
  })
  
  return revisedData;
}


export default async function Home() {
  let data = TestData // fOR TESTING    
  
  if(process.env.NODE_ENV !== "development"){
    data = await calculateData(); // Production
  } 

  const currentStocks = await refineCurrentInvestment(data);
  const scoutStocks = await refineScoutInvestment(data);

  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <div className='grid grid-cols-1 laptop:grid-cols-3 laptop:grid-rows-2 gap-x-4 px-2 md:px-48 laptop:pl-4 laptop:pr-0'>
        <ExecutiveSummary content={data} />
        <CurrentInvestments content={currentStocks} />
        <ScoutInvestments content={scoutStocks} />
      </div>
      <Footer />
    </main>
  )
}
