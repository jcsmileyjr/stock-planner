import dataType from '../../types/dataType';
import InformationModal from '../informationModal/informationModal';
import calculateProfitMargin from '../../utils/calculateProfitMargin';
import calculatePotentialInvestmentsProfitMargin from '@/app/utils/calculatePotentialInvestmentsProfitMargin';
import calculateTotalInvestmentsProfitMargin from '@/app/utils/calculateTotalInvestmentsProfitMargin';

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
        <section className=" col-span-1 mb-8">
            <h1 className="underline font-bold uppercase text-2xl mb-2">Executive Summary</h1>
            <div className="flex flex-row justify-between mb-2">
                <div className='flex flex-row items-center'>Total Investments <InformationModal prompt='totalInvestment' />:</div>
                <p>${totalInvestments}</p>
            </div>
            <div className="flex flex-row justify-between mb-2">
                <div className='flex flex-row'><p>Initial Investments</p> <InformationModal prompt='initialInvestment' />:</div>
                <p>${content.initialInvestment}</p>
            </div>
            <div className="flex flex-row justify-between mb-2">
                <div className='flex flex-row items-center'>Current Total Profit Margin <InformationModal prompt='totalInvestment' />:</div>
                <p>{calculateTotalInvestmentsProfitMargin(content, false)}</p>
            </div>
            <div className="flex flex-row justify-between mb-2">
                <div className='flex flex-row items-center'>Potential Total Profit Margin <InformationModal prompt='totalInvestment' />:</div>
                <p>{calculatePotentialInvestmentsProfitMargin(content, false)}</p>
            </div>
            <div className="flex flex-row justify-between mb-2">
                <div className='flex flex-row'>Profits (wins/losses) <InformationModal prompt='profits' />:</div>
                <p>${calculateProfit(content)}</p>
            </div>  
            <div className="flex flex-row justify-between mb-2">
                <div className='flex flex-row'> Winning Stocks  <InformationModal prompt='winners' />:</div>
                <p>#{calculateWinners(content)}</p>
            </div>  
            <div className="flex flex-row justify-between mb-2">
                <div className='flex flex-row'>Losing Stocks  <InformationModal prompt='losers' />:</div>
                <p>#{calculateLosers(content)}</p>
            </div>                                
        
        </section>
    )
}