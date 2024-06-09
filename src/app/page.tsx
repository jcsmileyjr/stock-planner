import Header from './components/header/header';
import ExecutiveSummary from './components/executiveSummary/executiveSummary';
import CurrentInvestments from './components/currentInvestments/currentInvestments';
import ScoutInvestments from './components/scoutInvestments/scoutInvestments';
import Footer from './components/footer/footer';
import refineInvestments from './utils/refineInvestments';
import calculateData from './utils/calculateData';

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

export default async function Home() {
  let data = await calculateData();

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
