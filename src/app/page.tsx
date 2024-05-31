import Header from './components/header/header';
import ExecutiveSummary from './components/executiveSummary/executiveSummary';
import CurrentInvestments from './components/currentInvestments/currentInvestments';
import ScoutInvestments from './components/scoutInvestments/scoutInvestments';
import TestData from './data/testData.json';
import stockType from './types/stockType';
import dataType from './types/dataType';
import getStockNames  from './utils/getStockNames';
import calculateProfitMargin from './utils/calculateProfitMargin';

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

// TODO: function that refine the data for Current Investments. 
// Only include purchased stocks.
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

// TODO: function that refine the data for Scout Investments
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

async function getStockPrices () {
  const stockNames = getStockNames(TestData);
  const response = await fetch(`https://financialmodelingprep.com/api/v3/quote-short/${stockNames}?apikey=${process.env.FINANCIALMODELINGPREP_API_KEY}`, { cache: 'no-store' });
  const data = await response.json();
  return data;
}

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
  // let data = TestData // fOR TESTING    
  
  // if(process.env.NODE_ENV !== "development"){
  // } 
  let data = await calculateData(); // Production

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
    </main>
  )
}
