"use client"
import {useState} from 'react';
import Data from '../../data/testData.json';
import stockType from '../../types/stockType';

const refineCurrentInvestment = (data: stockType) => {
    let refinedData: {[key: string]: string|number} = {}
    for (const property in data) {
        if(property === 'purchasedPrice' || property === 'quantity' || property === 'profitMargin' || property === 'targetSellPrice' || property === 'currentPrice' || property === 'symbol' || property === 'flag') {
            refinedData[property] = data[property];
        } 
    }
    return refinedData;
}

const calculatePurchaseStockProfitMargin = (stock: stockType) => {
    return (stock.currentPrice - stock.purchasedPrice) * stock.quantity;
}

export default function StockToggle({stock}: {stock: stockType}) {
    const [openStock, setOpenStock] = useState(false);
    // const stock = refineCurrentInvestment(Data.stocks[0]);
    
    return (
        <div className="flex flex-row">
            <details className='w-full my-2' open={openStock} onToggle={() => setOpenStock(!openStock)}>
                <summary className='flex flex-row'>
                    {Object.keys(stock).map((key) => {
                        if((key === 'purchasedPrice' || key === 'quantity' || key === 'profitMargin') && stock['status'] === 'purchased') {
                            return (
                                <p key={`${stock['symbol']}-${key}`} className="hidden lg:block lg:w-1/6 font-bold lg:font-normal">{key === 'quantity' ? "#":"$"}{stock[key]}</p>
                            )
                        } else if (key === 'symbol') {
                            return (
                                <p key={`${stock['symbol']}-${key}`} className={`${stock['status'] === 'scouted' ? 'w-1/5 lg:w-1/5' : 'w-1/5 lg:w-1/6'} font-bold`} >{stock[key]}</p>
                            )
                        } else if (key === 'currentPrice') {
                            return (
                                <p key={`${stock['symbol']}-${key}`} className={`${stock['status'] === 'scouted' ? 'w-1/3 lg:w-1/3' : 'w-1/3 lg:w-1/6'} `}>${stock[key]}</p>
                            )
                        } else if (key === 'flag' || (key === 'targetSellPrice' && stock['status'] === 'purchased') || (key === 'targetBuyPrice' && stock['status'] === 'scouted')) {
                            return (
                                <p key={`${stock['symbol']}-${key}`} className={`${(key === 'flag' && stock['status'] === 'scouted') ? ' indent-2 lg:indent-0 lg:w-1/4' : 'lg:w-1/6'}  ${key === 'targetBuyPrice' ? 'indent-2 lg:indent-0 lg:w-1/4' : 'lg:w-1/6'} w-1/4 `}>{key === 'targetSellPrice' || key === 'targetBuyPrice' ? '$' : ''}{stock[key]}</p>
                            )
                        }
                    })}
                </summary>
                {
                    Object.keys(stock).map((key) => {
                        if(key === 'purchasedPrice' || key === 'quantity' || key === 'profitMargin') {
                            return (
                                <div className='flex flex-row' key={`${stock['symbol']}-${key}`}>
                                    <p className="flex lg:hidden font-medium indent-4 flex-1">{key === 'profitMargin' ? 'Profit Margin' : key==='quantity' ? 'Quantity' : 'Purchased Price'}:</p>
                                    { key === 'profitMargin' && <p className="flex lg:hidden font-normal flex-1">${calculatePurchaseStockProfitMargin(stock)}</p> }
                                    { key !== 'profitMargin' && <p className="flex lg:hidden font-normal flex-1">{key === 'quantity' ? "#":"$"}{stock[key]}</p> }
                                </div>
                            )
                        }
                    })
                }
            </details>
        </div>
    )
}