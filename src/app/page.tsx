import Header from './components/header/header';
import ExecutiveSummary from './components/executiveSummary/executiveSummary';
import CurrentInvestments from './components/currentInvestments/currentInvestments';
import ScoutInvestments from './components/scoutInvestments/scoutInvestments';
import Footer from './components/footer/footer';
import refineInvestments from './utils/refineInvestments';
import calculateData from './utils/calculateData';

export default async function Home() {
  let data = await calculateData();
  const currentStocks = await refineInvestments(data, 'purchased'); 
  const scoutStocks = await refineInvestments(data, 'scouted'); 

  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <div className='grid grid-cols-1 laptop:grid-cols-3 laptop:grid-rows-3 laptop:gap-x-4 px-2 md:px-48 laptop:px-4'>
        <ExecutiveSummary content={data} />
        <ScoutInvestments content={scoutStocks} />
        <CurrentInvestments content={currentStocks} />
        <Footer />
      </div>
    </main>
  )
}
