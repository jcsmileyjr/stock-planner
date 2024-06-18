"use client"
import { useState} from 'react';
import { useInvestments } from "@/app/contexts/stocksContext";
import getData from '@/app/utils/getData';
import updateState from '@/app/utils/updateInvestment';
import StockType from '@/app/types/stockType';
import dataType from '@/app/types/dataType';
import TestData from '@/app/data/testData.json';


export default async function InputPickStock ({label}: {label: string}) {
    // const serverData = await getData();
    // const convertedData = await serverData.json();
    // const content:dataType = convertedData[0];
    const content: dataType = TestData;

    const { state, dispatch } = useInvestments();
    const [value, setValue] = useState("");
    return (
        <div className="flex flex-col mb-2">
            <label htmlFor={label} className="font-bold">{label}</label>
            <select value={value} className="border-2 border-slate-500 rounded-md p-2" name={label} id={label} onChange={(e) => console.log(e.target.value)}>
                <option value="">Select a Stock</option>
                {content.stocks.map((stock: StockType) => (
                    <option key={stock.symbol} value={stock.symbol}>{stock.symbol}</option>
                ))}
            </select>
        </div>
    )
}
