import Header from './components/header/header';
import ExecutiveSummary from './components/executiveSummary/executiveSummary';
import CurrentInvestments from './components/currentInvestments/currentInvestments';
import ScoutInvestments from './components/scoutInvestments/scoutInvestments';
import TestData from './data/testData.json';
import Stock from './types/stock';

// TODO: function that refine the data for Current Investments

// TODO: function that refine the data for Scout Investments

export default function Home() {
  const data = TestData;
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <div className='grid md:grid-cols-3 md:grid-rows-2 px-4'>
        <ExecutiveSummary content={data} />
        <CurrentInvestments />
        <ScoutInvestments />
      </div>
    </main>
  )
}
