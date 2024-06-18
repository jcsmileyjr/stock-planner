"use client"
import { useState} from 'react';
import Link from 'next/link';
import Header from "../components/header/header";
import { InvestmentProvider, useInvestments } from '../contexts/stocksContext';
import InputText from "../components/inputText/inputText";
import InputNumber from "../components/inputNumber/inputNumber";
import InputStatus from "../components/inputStatus/inputStatus";
import SubmitButton from '../components/submitbutton/submitButton';
import InputPickStock from '../components/inputPickStock/inputPickStock';

export default function EditInvestments () {
    const [password, setPassword] = useState("");

    return (
        <main className="flex min-h-screen flex-col mx-4">
            <Header />
            <h2 className="uppercase text-xl laptop:text-2xl font-bold underline text-center mb-4">Edit Investment Setup</h2>
            <section className="sm:w-1/2  md:w-1/3 laptop:w-1/4 sm:mx-auto">
                <InvestmentProvider>
                    <InputPickStock label="Pick a Stock" />
                    <InputText label="Symbol" property="symbol" />
                    <InputStatus label="Status" property="status" />
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
        </main>
    )
}