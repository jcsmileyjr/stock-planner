"use client"
import {useState} from 'react';
import Data from '../../data/testData.json';
import stockType from '../../types/stockType';
import calculateProfitMargin from '../../utils/calculateProfitMargin';

const calculatePurchaseStockProfitMargin = (stock: stockType) => {
    return (stock.currentPrice - stock.purchasedPrice) * stock.quantity;
}

export default function StockToggle({stock}: {stock: stockType}) {
    const [openStock, setOpenStock] = useState(false);
    
    return (
        <div className="flex flex-row">
            <details className='w-full my-2' open={openStock} onToggle={() => setOpenStock(!openStock)}>
                <summary className='flex flex-row'>
                    {Object.keys(stock).map((key) => {
                        if((key === 'purchasedPrice' || key === 'quantity' || key === 'profitMargin') && stock['status'] === 'purchased') {
                            return (
                                <p key={`${stock['symbol']}-${key}`} className="hidden laptop:block flex-1 font-bold laptop:font-normal">{key === 'quantity' ? "#":"$"}{key === 'profitMargin' ? calculateProfitMargin(stock) : stock[key]}</p>
                            )
                        } else if (key === 'symbol') {
                            return (
                                <p key={`${stock['symbol']}-${key}`} className={`flex-1 font-bold`} >{stock[key]}</p>
                            )
                        } else if (key === 'currentPrice') {
                            return (
                                <p key={`${stock['symbol']}-${key}`} className={`flex-1 `}>${stock[key]}</p>
                            )
                        } else if (key === 'flag' || (key === 'targetSellPrice' && stock['status'] === 'purchased') || (key === 'targetBuyPrice' && stock['status'] === 'scouted')) {
                            return (
                                <p key={`${stock['symbol']}-${key}`} className={` flex-1 `}>{key === 'targetSellPrice' || key === 'targetBuyPrice' ? '$' : ''}{stock[key]}</p>
                            )
                        }
                    })}
                </summary>
                {
                    Object.keys(stock).map((key) => {
                        if(key === 'purchasedPrice' || key === 'quantity' || key === 'profitMargin') {
                            return (
                                <div className='flex flex-row' key={`${stock['symbol']}-${key}`}>
                                    <p className="flex laptop:hidden font-medium indent-4 flex-1">{key === 'profitMargin' ? 'Profit Margin' : key==='quantity' ? 'Quantity' : 'Invest Price'}:</p>
                                    { key === 'profitMargin' && <p className="flex laptop:hidden font-normal flex-1">${calculateProfitMargin(stock)}</p> }
                                    { key !== 'profitMargin' && <p className="flex laptop:hidden font-normal flex-1">{key === 'quantity' ? "#":"$"}{stock[key]}</p> }
                                </div>
                            )
                        }
                    })
                }
            </details>
        </div>
    )
}