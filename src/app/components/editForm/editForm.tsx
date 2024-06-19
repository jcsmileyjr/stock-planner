"use client"
import { useState} from 'react';
import Link from 'next/link';
import { InvestmentProvider, useInvestments } from '../../contexts/stocksContext';
import InputText from "../inputText/inputText";
import InputNumber from "../inputNumber/inputNumber";
import InputStatus from "../inputStatus/inputStatus";
import SubmitButton from '../submitbutton/submitButton';
import InputPickStock from '../inputPickStock/inputPickStock';
import dataType from '@/app/types/dataType';
import stockType from '@/app/types/stockType';
import genericStock from '../../data/genericStock.json'


export default function EditForm ({content}: {content: dataType}) {
    const [password, setPassword] = useState("");
    const [currentStockSymbol, setCurrentStockSymbol] = useState("");
    const [currentStock, setCurrentStock] = useState(genericStock as stockType);

    const updateStock = (symbol: string) => {
        // console.log("updateStock symbol", symbol);
        setCurrentStockSymbol(symbol);
        const stockIndex: number = content.stocks.findIndex((stock: stockType) => stock.symbol === symbol);
        // console.log("updateStock stock", content.stocks[stockIndex]);
        if(stockIndex !== -1) {
            setCurrentStock(content.stocks[stockIndex]);
        }
    }

    return (
        <section className="sm:w-1/2  md:w-1/3 laptop:w-1/4 sm:mx-auto">
            <InvestmentProvider>
                <InputPickStock label="Pick a Stock" stocks={content.stocks} getStock={updateStock} />
                <InputText label="Symbol" property="symbol" data={currentStock["symbol"]} />
                <InputStatus label="Status" property="status" data={currentStock["status"]} />
                <InputNumber label="Target Sell Price" property="targetSellPrice" />
                <InputNumber label="Target Buy Price" property="targetBuyPrice" />
                <InputNumber label="Purchased Price" property="purchasedPrice" />
                <InputNumber label="Quantity" property="quantity" />
                <div className="flex flex-col mb-2">
                    <label htmlFor="password" className="font-bold">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        aria-label="password"
                        onChange={(e) => setPassword(e.target.value)}
                        className="border-2 border-slate-500 rounded-md p-2"
                        />
                </div>
                <SubmitButton pwd={password} type="editInvestment" />
                <div className='flex justify-center align-center mt-4'>
                    <Link href='/' className="text-red-600 underline hover:text-indigo-700 text-center">Back</Link>
                </div>
            </InvestmentProvider>
        </section>
    )
}