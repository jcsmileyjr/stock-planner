import Header from './components/header/header';
import ExecutiveSummary from './components/executiveSummary/executiveSummary';
import CurrentInvestments from './components/currentInvestments/currentInvestments';
import ScoutInvestments from './components/scoutInvestments/scoutInvestments';
import TestData from './data/testData.json';
import stockType from './types/stockType';
import dataType from './types/dataType';
import getStockNames  from './utils/getStockNames';

/**
 * TODO: Get stock data from a API or JSON file
 * - Get stored investments, AKA the testData.json (initially) but later from localstorage & later from an CMS
 * - Formally list all stock symbols based on saved investments.
 * - Get stock data from API or JSON file
 * - Get prices for each stock and update/calculate investments
 * - Convert raw stock data into an array of stock objects to display
 * - Update variables on this page to use the new stock objects
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

export default function Home() {
  const stockNames = getStockNames(TestData);
  console.log(stockNames)
  const data = TestData;
  const currentStocks = refineCurrentInvestment(data);
  const scoutStocks = refineScoutInvestment(data);

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
