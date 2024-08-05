"use client"
import { useState} from 'react';
import Link from 'next/link';
import Header from "../components/header/header";
import { InvestmentProvider, useInvestments } from '../contexts/stocksContext';
import InputText from "../components/inputText/inputText";
import InputNumber from "../components/inputNumber/inputNumber";
import InputStatus from "../components/inputStatus/inputStatus";
import InputDate from '../components/inputDate/inputDate';
import SubmitButton from '../components/submitbutton/submitButton';
import dayjs from 'dayjs';

export default function PurchaseInvestments () {
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState(false);

    const resetPassword = (results: boolean) => {
        setPassword("");
        if (results) {
            setPasswordError(true);
        } else {
            setPasswordError(false);
        }
    }

    return (
        <main className="flex min-h-screen flex-col mx-4">
            <Header />
            <h2 className="uppercase text-xl laptop:text-2xl font-bold underline text-center mb-4">Purchase Investment Setup</h2>
            <section className="sm:w-1/2  md:w-1/3 laptop:w-1/4 sm:mx-auto">
                <InvestmentProvider>
                    <InputText label="Symbol" property="symbol" data="" />
                    <InputStatus label="Status" property="status" data="" />
                    <InputNumber label="Target Sell Price" property="targetSellPrice" data={0} />
                    <InputNumber label="Target Buy Price" property="targetBuyPrice" data={0} />
                    <InputNumber label="Purchased Price" property="purchasedPrice" data={0} />
                    <InputNumber label="Quantity" property="quantity" data={0} />
                    <InputDate label="Purchase Date" data={dayjs().format("MM/DD/YYYY")}/>
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
                    <SubmitButton pwd={password} type="purchaseInvestment" cleanUp={resetPassword} error={passwordError} />
                    <div className='flex justify-center align-center mt-4'>
                        <Link href='/' className="text-red-600 underline hover:text-indigo-700 text-center">Back</Link>
                    </div>
                </InvestmentProvider>
            </section>
        </main>
    )
}