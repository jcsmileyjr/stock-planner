"use client"
import Header from "../components/header/header";
import { InvestmentProvider, useInvestments } from '../contexts/stocksContext';
import InputText from "../components/inputText/inputText";
import InputNumber from "../components/inputNumber/inputNumber";

export default function PurchaseInvestments () {
    return (
        <main className="flex min-h-screen flex-col">
            <Header />
            <InvestmentProvider>
                <InputText label="Symbol" property="symbol" />
                <InputNumber label="Target Sell Price" property="targetSellPrice" />
                <InputNumber label="Target Buy Price" property="targetBuyPrice" />
                <InputNumber label="Purchased Price" property="purchasedPrice" />
                <InputNumber label="Quanity" property="quanity" />
            </InvestmentProvider>
            <h1>hello</h1>
        </main>
    )
}