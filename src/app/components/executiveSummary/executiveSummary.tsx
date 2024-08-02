import dataType from '../../types/dataType';
import InformationModal from '../informationModal/informationModal';
import calculateProfitMargin from '../../utils/calculateProfitMargin';

/**
 * Determines the number of winners based on the given data.
 *
 * @param {data} data - The data object containing stock information.
 * @return {number} The count of winners.
 */
const calculateWinners = (data: dataType) => {
    let count = 0;
    data.stocks.forEach((stock) => {
        if (calculateProfitMargin(stock) > 0 && stock.status === 'sold') {
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
        if (calculateProfitMargin(stock) < 0 && stock.status === 'sold') {
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

    return amount.toFixed(2);
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
            profits += calculateProfitMargin(stock);
        }
    })

    return profits.toFixed(2);
}

export default function ExecutiveSummary({content}: {content: dataType}) {
    const totalInvestments = calculateTotalInvestments(content);
    return (
        <section className=" col-span-1 pb-4 mb-4 border-solid border-b-2 border-slate-500">
            <h1 className="underline font-bold uppercase text-2xl mb-2">Executive Summary</h1>
            <div className="flex flex-row justify-between mb-2">
                <div className='flex flex-row items-center'><p>Total Investments</p> <InformationModal prompt='totalInvestment' />:</div>
                <p>${totalInvestments}</p>
            </div>
            <div className="flex flex-row justify-between mb-2">
                <p className='flex flex-row'>Initial Investments  <InformationModal prompt='initialInvestment' />:</p>
                <p>${content.initialInvestment}</p>
            </div>
            <div className="flex flex-row justify-between mb-2">
                <p className='flex flex-row'>Profits (wins/losses) <InformationModal prompt='profits' />:</p>
                <p>${calculateProfit(content)}</p>
            </div>  
            <div className="flex flex-row justify-between mb-2">
                <p className='flex flex-row'> Winning Stocks  <InformationModal prompt='winners' />:</p>
                <p>#{calculateWinners(content)}</p>
            </div>  
            <div className="flex flex-row justify-between mb-2">
                <p className='flex flex-row'>Losing Stocks  <InformationModal prompt='losers' />:</p>
                <p>#{calculateLosers(content)}</p>
            </div>                                
        
        </section>
    )
}