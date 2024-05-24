import Image from 'next/image'
import Header from './components/header/header';
import ExecutiveSummary from './components/executiveSummary/executiveSummary';
import CurrentInvestments from './components/currentInvestments/currentInvestments';
import ScoutInvestments from './components/scoutInvestments/scoutInvestments';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <div className='grid md:grid-cols-2 md:grid-rows-2'>
        <ExecutiveSummary />
        <CurrentInvestments />
        <ScoutInvestments />
      </div>
    </main>
  )
}
