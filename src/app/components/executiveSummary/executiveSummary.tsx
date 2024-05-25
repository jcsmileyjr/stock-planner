import Image from 'next/image';
import Info from '../../images/info.png';
import dataType from '../../types/dataType';
import stockType from '../../types/stockType';


/**
 * Determines the number of winners based on the given data.
 *
 * @param {data} data - The data object containing stock information.
 * @return {number} The count of winners.
 */
const calculateWinners = (data: dataType) => {
    let count = 0;
    data.stocks.forEach((stock) => {
        if (stock.profitMargin > 0 && stock.status === 'sold') {
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
const calculateLosers = (data: dataType) => {
    let count = 0;
    data.stocks.forEach((stock) => {
        if (stock.profitMargin < 0 && stock.status === 'sold') {
            count++;
        }
    })
    return count;
}

/**
 * Calculates the total investments purchased based on the given data.
 *
 * @param {dataType} data - The data object containing stock information.
 * @return {number} The total amount of investments.
 */
const calculateTotalInvestments = (data: dataType) => {
    let amount = 0;
    data.stocks.forEach((stock) => {
        if (stock.status === 'purchased') {
            amount += stock.purchasedPrice * stock.quantity;
        }
    })

    return amount;
}

/**
 * Calculates the total profit made from selling stocks based on the given data.
 *
 * @param {dataType} data - The data object containing stock information.
 * @return {number} The total profit made from selling stocks.
 */
const calculateProfit = (data: dataType) => {
    let profits = 0;
    data.stocks.forEach((stock) => {
        if (stock.status === 'sold') {
            profits += calculateSoldStockProfitMargin(stock);
        }
    })

    return profits;
}

/**
 * Calculates the profit margin of a sold stock by subtracting the purchased price from the current price,
 * multiplying it by the quantity of stocks, and returning the result.
 *
 * @param {stockType} stock - The stock object containing information about the stock.
 * @return {number} The profit margin of the sold stock.
 */
const calculateSoldStockProfitMargin = (stock: stockType) => {
    return (stock.currentPrice - stock.purchasedPrice) * stock.quantity;
}

export default function ExecutiveSummary({content}: {content: dataType}) {
    const totalInvestments = calculateTotalInvestments(content);
    return (
        <section className=" col-span-1 pb-4 mb-4 border-solid border-b-2 border-slate-500">
            <h1 className="underline font-bold uppercase text-2xl mb-2">Executive Summary</h1>
            <div className="flex flex-row justify-between mb-2">
                <p className='flex flex-row'>Total Investments  <Image src={Info} alt="info" width={20} height={50} className='h-4 mx-2 self-center' />   :</p>
                <p>${totalInvestments}</p>
            </div>
            <div className="flex flex-row justify-between mb-2">
                <p className='flex flex-row'>Initial Investments  <Image src={Info} alt="info" width={20} height={50} className='h-4 mx-2 self-center' />   :</p>
                <p>${content.initialInvestment}</p>
            </div>
            <div className="flex flex-row justify-between mb-2">
                <p className='flex flex-row'>Profits (made/loss) <Image src={Info} alt="info" width={20} height={50} className='h-4 mx-2 self-center' />   :</p>
                <p>${calculateProfit(content)}</p>
            </div>  
            <div className="flex flex-row justify-between mb-2">
                <p className='flex flex-row'>Winning Stocks  <Image src={Info} alt="info" width={20} height={50} className='h-4 mx-2 self-center' />   :</p>
                <p>#{calculateWinners(content)}</p>
            </div>  
            <div className="flex flex-row justify-between mb-2">
                <p className='flex flex-row'>Losing Stocks  <Image src={Info} alt="info" width={20} height={50} className='h-4 mx-2 self-center' />   :</p>
                <p>#{calculateLosers(content)}</p>
            </div>                                
        
        </section>
    )
}