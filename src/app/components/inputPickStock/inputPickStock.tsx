"use client"
import { useState} from 'react';
import StockType from '@/app/types/stockType';
import prepareSaleInvestment from '@/app/utils/prepareSaleInvestment';
import { useInvestments } from "@/app/contexts/stocksContext"

export default function InputPickStock ({label, stocks, getStock, isSale}: {label: string, stocks: StockType[], getStock: Function, isSale: boolean}) {
    const { state, dispatch } = useInvestments();
    const [value, setValue] = useState("");

    const updateStock = (stockSymbol: string) => {
        getStock(stockSymbol);
        setValue(stockSymbol);

        if (isSale) {
            prepareSale(stockSymbol);
        }
    }

    const prepareSale = (symbol: string) => {
        const stockIndex: number = stocks.findIndex((stock: StockType) => stock.symbol === symbol);
        prepareSaleInvestment(stocks[stockIndex], state, dispatch);
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
