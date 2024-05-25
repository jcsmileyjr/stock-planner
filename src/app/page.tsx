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

export default function Home() {
  const data = TestData;
  const currentStocks = refineCurrentInvestment(data);

  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <div className='grid md:grid-cols-3 md:grid-rows-2 px-4'>
        <ExecutiveSummary content={data} />
        <CurrentInvestments content={currentStocks} />
        <ScoutInvestments />
      </div>
    </main>
  )
}
