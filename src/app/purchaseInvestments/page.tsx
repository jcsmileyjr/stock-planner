"use client"
import Header from "../components/header/header";
import { InvestmentProvider, useInvestments } from '../contexts/stocksContext';
import InputText from "../components/inputText/inputText";
import InputNumber from "../components/inputNumber/inputNumber";

export default function PurchaseInvestments () {
    return (
        <main className="flex min-h-screen flex-col mx-4">
            <Header />
            <h2 className="uppercase text-xl laptop:text-2xl font-bold underline text-center mb-4">Purchase Investment Setup</h2>
            <section className="sm:w-1/2  md:w-1/3 laptop:w-1/4 sm:mx-auto">
                <InvestmentProvider>
                    <InputText label="Symbol" property="symbol" />
                    <InputNumber label="Target Sell Price" property="targetSellPrice" />
                    <InputNumber label="Target Buy Price" property="targetBuyPrice" />
                    <InputNumber label="Purchased Price" property="purchasedPrice" />
                    <InputNumber label="Quantity" property="quantity" />
                </InvestmentProvider>
            </section>
        </main>
    )
}