"use client"
import {useState} from 'react';
import Data from '../../data/testData.json';
import Stock from '../../types/stock';
import GenericStock from '../../data/genericStock.json';

const refineCurrentInvestment = (data: Stock) => {
    let refinedData: {[key: string]: string|number} = {}
    for (const property in data) {
        if(property === 'purchasedPrice' || property === 'quantity' || property === 'profitMargin' || property === 'targetSellPrice' || property === 'currentPrice' || property === 'symbol' || property === 'flag') {
            refinedData[property] = data[property];
        } 
    }
    console.log(refinedData)
    return refinedData;
}

export default function StockToggle() {
    const [openStock, setOpenStock] = useState(false);
    const testStock = refineCurrentInvestment(Data.stocks[0]);
    
    return (
        <div className="flex flex-row">
            <details className='w-full' open={openStock} onToggle={() => setOpenStock(!openStock)}>
                <summary className='flex flex-row'>
                    {Object.keys(testStock).map((key) => {
                        if(key === 'purchasedPrice' || key === 'quantity' || key === 'profitMargin') {
                            return (
                                <p key={`${testStock['symbol']}-${key}`} className="hidden lg:block lg:w-1/6 font-bold lg:font-normal">{testStock[key]}</p>
                            )
                        } else if (key === 'symbol') {
                            return (
                                <p key={`${testStock['symbol']}-${key}`} className="w-1/5 lg:w-1/6 font-bold">{testStock[key]}</p>
                            )
                        } else if (key === 'currentPrice') {
                            return (
                                <p key={`${testStock['symbol']}-${key}`} className="w-1/3 lg:w-1/6">{testStock[key]}</p>
                            )
                        } else {
                            return (
                                <p key={`${testStock['symbol']}-${key}`} className='w-1/4 lg:w-1/6'>{testStock[key]}</p>
                            )
                        }
                    })}
                </summary>
                More tests
            </details>
        </div>
    )
}