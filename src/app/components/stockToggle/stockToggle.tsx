"use client"
import {useState} from 'react';
import stockType from '../../types/stockType';
import displayProfitMargin from '../../utils/displayProfitMargin';
import calculateDaysInvested from '@/app/utils/calculateDaysInvested';
import StockFlag from '../stockFlag/stockFlag';

/**
 * Renders a stock toggle component that displays stock information and allows the user to expand or collapse the details.
 *
 * @param {Object} props - The props object.
 * @param {Object} props.stock - The stock object containing information about the stock.
 * @param {string} props.stock.symbol - The symbol of the stock.
 * @param {string} props.stock.name - The name of the stock.
 * @param {string} props.stock.status - The status of the stock ("purchased" or "scouted").
 * @param {number} props.stock.currentPrice - The current price of the stock.
 * @param {number} props.stock.targetSellPrice - The target sell price of the stock.
 * @param {number} props.stock.targetBuyPrice - The target buy price of the stock.
 * @param {number} props.stock.purchasedPrice - The purchased price of the stock.
 * @param {number} props.stock.quantity - The quantity of the stock.
 * @param {number} props.stock.profitMargin - The profit margin of the stock.
 * @return {JSX.Element} The stock toggle component.
 */
export default function StockToggle({stock}: {stock: stockType}) {
    const [openStock, setOpenStock] = useState(false);
    let liveUpdateLink = `https://digital.fidelity.com/prgw/digital/research/quote/dashboard/summary?symbol=${stock['symbol']}`;
    
    return (
        <div className="flex flex-row">
            <details className='w-full my-2' open={openStock} onToggle={() => setOpenStock(!openStock)}>
                <summary className='flex flex-row'>
                    <a className="flex-1 font-bold underline text-blue-800" href={liveUpdateLink} target="_blank" rel="noopener">{stock['symbol']}</a>
                    <p  className={`flex-1 `}>${stock['currentPrice']}</p>
                    {stock['status'] === 'purchased' &&
                        <p  className={` flex-1 `}>${stock['targetSellPrice']}</p>
                    }
                    {stock['status'] === 'scouted' &&
                        <>
                            <p  className={` flex-1 `}>${stock['targetBuyPrice']}</p>
                            <p  className={` hidden laptop:block flex-1 font-bold laptop:font-normal `}>{calculateDaysInvested(stock)}</p>                        
                        </>
                    } 
                    {stock['status'] === 'purchased' && 
                        <>
                            <p  className={`hidden laptop:block flex-1 font-bold laptop:font-normal`}>${stock['purchasedPrice']}</p> 
                            <p  className="hidden laptop:block flex-1 font-bold laptop:font-normal">{displayProfitMargin(stock) }</p>  
                            <p  className="hidden laptop:block flex-1 font-bold laptop:font-normal">#{stock['quantity']}</p>
                            <p  className="hidden laptop:block flex-1 font-bold laptop:font-normal">{calculateDaysInvested(stock)}</p>
                        </>
                    }
                    <StockFlag stock={stock} key={`${stock['symbol']}-flag`} />                 
                </summary>
                {
                    Object.keys(stock).map((key) => {     
                        if (key === 'purchasedPrice' || key === 'quantity' || key === 'profitMargin') {
                            return (
                                <div className='flex flex-row' key={`${stock['symbol']}-${key}`}>
                                    <p className="flex laptop:hidden font-medium indent-4 flex-1">{key === 'profitMargin' ? 'Profit Margin' : key==='quantity' ? 'Quantity' : 'Invest Price'}:</p>
                                    { key === 'profitMargin' && <p className="flex laptop:hidden font-normal flex-1">{displayProfitMargin(stock)}</p> }
                                    { key === 'purchasedPrice' && <p className="flex laptop:hidden font-normal flex-1">${stock[key]}</p> }
                                    { key === 'quantity' && <p className="flex laptop:hidden font-normal flex-1">#{stock[key]}</p> }

                                </div>
                            )
                        } else if (key === 'status' && stock['status'] === 'scouted') {
                            return (
                                <div className='flex flex-row' key={`${stock['symbol']}-${key}`}>
                                    <p className="flex laptop:hidden font-medium indent-4 flex-1">Days Scouted:</p>
                                    <p className="flex laptop:hidden font-normal flex-1">{calculateDaysInvested(stock)}</p>
                                </div>
                            )
                        } else if (key === 'status' && stock['status'] === 'purchased') {
                            return (
                                <div className='flex flex-row' key={`${stock['symbol']}-${key}`}>
                                    <p className="flex laptop:hidden font-medium indent-4 flex-1">Days Purchased:</p>
                                    <p className="flex laptop:hidden font-normal flex-1">{calculateDaysInvested(stock)}</p>
                                </div>
                            )
                        } 
                    })
                }
            </details>
        </div>
    )
}