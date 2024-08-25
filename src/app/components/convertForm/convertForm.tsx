"use client";
import { useState} from 'react';
import Link from 'next/link';
import { InvestmentProvider} from '../../contexts/stocksContext';
import InputText from "../inputText/inputText";
import InputNumber from "../inputNumber/inputNumber";
import InputDate from '../inputDate/inputDate';
import SubmitButton from '../submitbutton/submitButton';
import InputPickStock from '../inputPickStock/inputPickStock';
import StockType from '@/app/types/stockType';
import stockType from '@/app/types/stockType';
import genericStock from '../../data/genericStock.json'

export default function ConvertForm ({content}: {content: StockType[]}) {
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState(false);
    const [currentStockSymbol, setCurrentStockSymbol] = useState("");
    const [currentStock, setCurrentStock] = useState(genericStock as stockType);

    const updateStock = (symbol: string) => {
        setCurrentStockSymbol(symbol);
        const stockIndex: number = content.findIndex((stock: stockType) => stock.symbol === symbol);
        if(stockIndex !== -1) {
            setCurrentStock(content[stockIndex]);
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
                <InputPickStock description='Pick a stock in the portfolio that is designated as a scout' label="Pick a Stock" stocks={content} getStock={updateStock} isSale={false} />
                <InputText description='Investment stock symbol (e.g., NFLX for Netflix)' label="Symbol" property="symbol" data={currentStock["symbol"]} />
                <InputNumber description='Minimum price for "Sale Now" alert' label="Target Sell Price" property="targetSellPrice" data={currentStock["targetSellPrice"]} disableInput={false} />
                <InputNumber description='Minimum price for "Buy Now" alert' label="Target Buy Price" property="targetBuyPrice" data={currentStock["targetBuyPrice"]} disableInput={false} />
                <InputNumber description='Purchase price of the stock' label="Purchased Price" property="purchasedPrice" data={currentStock["purchasedPrice"]} disableInput={false} />
                <InputNumber description='Quantity of shares purchased' label="Quantity" property="quantity" data={currentStock["quantity"]} disableInput={false} />
                <InputDate description='Date stock was added to the app' label="Purchase Date" property='purchaseDate' data={currentStock["purchaseDate"]} />
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
                <p className="text-sm text-red-600 font-bold mb-2">For Demo week, any password will work</p>
                <SubmitButton pwd={password} type="convertInvestment" cleanUp={cleanUp} error={passwordError} />
                <div className='flex justify-center align-center mt-4'>
                    <Link href='/' className="text-red-600 underline hover:text-indigo-700 text-center">Back</Link>
                </div>
            </InvestmentProvider>
        </section>
)}