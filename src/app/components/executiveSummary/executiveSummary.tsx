import Image from 'next/image';
import Info from '../../images/info.png';
import dataType from '../../types/dataType';


/**
 * Determines the number of winners based on the given data.
 *
 * @param {data} data - The data object containing stock information.
 * @return {number} The count of winners.
 */
const determineWinners = (data: dataType) => {
    let count = 0;
    data.stocks.forEach((stock) => {
        if(stock.profitMargin > 0 && stock.status === 'sold') {
            count++;
        }
    })
    return count;
}


/**
 * Determines the number of losers based on the given data.
 *
 * @param {data} data - The data object containing stock information.
 * @return {number} The count of losers.
 */
const determineLosers = (data: dataType) => {
    let count = 0;
    data.stocks.forEach((stock) => {
        if(stock.profitMargin < 0 && stock.status === 'sold') {
            count++;
        }
    })
    return count;
}

export default function ExecutiveSummary({content}: {content: dataType}) {
    return (
        <section className=" col-span-1 md:px-4 pb-4 mb-4 border-solid border-b-2 border-slate-500">
            <h1 className="underline font-bold uppercase text-2xl mb-2">Executive Summary</h1>
            <div className="flex flex-row justify-between mb-2">
                <p className='flex flex-row'>Total Investments  <Image src={Info} alt="info" width={20} height={50} className='h-4 mx-2 self-center' />   :</p>
                <p>${content.totalInvestment} <span className='text-nowrap'>&#40; Initial: ${content.initialInvestment} &#41;</span></p>
            </div>
            <div className="flex flex-row justify-between mb-2">
                <p className='flex flex-row'>Profits (made/loss) <Image src={Info} alt="info" width={20} height={50} className='h-4 mx-2 self-center' />   :</p>
                <p>${content.totalInvestment - content.initialInvestment}</p>
            </div>  
            <div className="flex flex-row justify-between mb-2">
                <p className='flex flex-row'>Winning Stocks  <Image src={Info} alt="info" width={20} height={50} className='h-4 mx-2 self-center' />   :</p>
                <p>#{determineWinners(content)}</p>
            </div>  
            <div className="flex flex-row justify-between mb-2">
                <p className='flex flex-row'>Losing Stocks  <Image src={Info} alt="info" width={20} height={50} className='h-4 mx-2 self-center' />   :</p>
                <p>#{determineLosers(content)}</p>
            </div>                                
        
        </section>
    )
}