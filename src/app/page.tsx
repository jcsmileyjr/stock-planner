import Header from './components/header/header';
import ExecutiveSummary from './components/executiveSummary/executiveSummary';
import CurrentInvestments from './components/currentInvestments/currentInvestments';
import ScoutInvestments from './components/scoutInvestments/scoutInvestments';
import TestData from './data/testData.json';
import stockType from './types/stockType';
import dataType from './types/dataType';

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
  const data = TestData;
  const currentStocks = refineCurrentInvestment(data);
  const scoutStocks = refineScoutInvestment(data);

  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <div className='grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-x-4 px-2 md:px-48 lg:px-0'>
        <ExecutiveSummary content={data} />
        <CurrentInvestments content={currentStocks} />
        <ScoutInvestments content={scoutStocks} />
      </div>
    </main>
  )
}
