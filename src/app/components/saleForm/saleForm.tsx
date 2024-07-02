"use client"
import { useState} from 'react';
import Link from 'next/link';
import { InvestmentProvider, useInvestments } from '../../contexts/stocksContext';
import calculateProfitMargin from '@/app/utils/calculateProfitMargin';
import InputText from "../inputText/inputText";
import SubmitButton from '../submitbutton/submitButton';
import InputPickStock from '../inputPickStock/inputPickStock';
import dataType from '@/app/types/dataType';
import stockType from '@/app/types/stockType';
import genericStock from '../../data/genericStock.json';

export default function SaleForm ({content}: {content: dataType}) {
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState(false);
    const [currentStockSymbol, setCurrentStockSymbol] = useState("");
    const [currentStock, setCurrentStock] = useState(genericStock as stockType);

    const updateStock = (symbol: string) => {
        setCurrentStockSymbol(symbol);
        const stockIndex: number = content.stocks.findIndex((stock: stockType) => stock.symbol === symbol);
        if(stockIndex !== -1) {
            setCurrentStock(content.stocks[stockIndex]);
        }
    }

    const cleanUp = (results: boolean) => {
        setPassword("");
        setCurrentStockSymbol("");
        setCurrentStock(genericStock as stockType);
        if (results) {
            setPasswordError(true);
        } else {
            setPasswordError(false);
        }
    }

    return (
        <section className="sm:w-1/2  md:w-1/3 laptop:w-1/4 sm:mx-auto">
            <InvestmentProvider>
                <InputPickStock label="Pick a Stock" stocks={content.stocks} getStock={updateStock} isSale={true} />
                <InputText label="Quantity" property="quantity" data={String(currentStock["quantity"])} />

                <p className='font-bold'>Details</p>
                <p>Current Price: ${currentStock["currentPrice"]}</p>
                <p>Target Sell Price: ${currentStock["targetSellPrice"]}</p>
                <p>Purchase Price: ${currentStock["purchasedPrice"]}</p>
                <p>Profit Margin: ${calculateProfitMargin(currentStock) }</p>

                <div className="flex flex-col mb-2 mt-12">
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
                <SubmitButton pwd={password} type="saleInvestment" cleanUp={cleanUp} error={passwordError} />
                <div className='flex justify-center align-center mt-4'>
                    <Link href='/' className="text-red-600 underline hover:text-indigo-700 text-center">Back</Link>
                </div>
            </InvestmentProvider>
        </section>
    )


}