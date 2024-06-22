"use client"
import { useState} from 'react';
import StockType from '@/app/types/stockType';

export default function InputPickStock ({label, stocks, getStock}: {label: string, stocks: StockType[], getStock: Function}) {
    const [value, setValue] = useState("");

    const updateStock = (stockSymbol: string) => {
        getStock(stockSymbol);
        setValue(stockSymbol);
    }

    return (
        <div className="flex flex-col mb-2">
            <label htmlFor={label} className="font-bold">{label}</label>
            <select value={value} className="border-2 border-slate-500 rounded-md p-2" name={label} id={label} onChange={(e) => updateStock(e.target.value)}>
                <option value="">Select a Stock</option>
                {stocks.map((stock: StockType) => (
                    <option key={stock.symbol} value={stock.symbol}>{stock.symbol}</option>
                ))}
            </select>
        </div>
    )
}
