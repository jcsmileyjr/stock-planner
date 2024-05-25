import Image from 'next/image'
import Info from '../../images/info.png'

export default function ExecutiveSummary() {
    return (
        <section className=" col-span-1 md:px-4 mb-8">
            <h1 className="underline font-bold uppercase text-2xl">Executive Summary</h1>
            <div className="flex flex-row justify-between">
                <p className='flex flex-row'>Total Investments  <Image src={Info} alt="info" width={20} height={50} className='h-4 mx-2 self-center' />   :</p>
                <p>$2500 (Initial: $1750)</p>
            </div>
            <div className="flex flex-row justify-between">
                <p className='flex flex-row'>Profits (made/loss) <Image src={Info} alt="info" width={20} height={50} className='h-4 mx-2 self-center' />   :</p>
                <p>$750</p>
            </div>  
            <div className="flex flex-row justify-between">
                <p className='flex flex-row'>Winning Stocks  <Image src={Info} alt="info" width={20} height={50} className='h-4 mx-2 self-center' />   :</p>
                <p>#4</p>
            </div>  
            <div className="flex flex-row justify-between">
                <p className='flex flex-row'>Losing Stocks  <Image src={Info} alt="info" width={20} height={50} className='h-4 mx-2 self-center' />   :</p>
                <p>#2</p>
            </div>                                
        
        </section>
    )
}