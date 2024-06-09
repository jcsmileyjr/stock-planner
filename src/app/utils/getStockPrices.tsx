import getStockNames from "./getStockNames";
import TestData from "../data/testData.json";

export default async function getStockPrices () {
    const stockNames = getStockNames(TestData);
    const response = await fetch(`https://financialmodelingprep.com/api/v3/quote-short/${stockNames}?apikey=${process.env.NEXT_PUBLIC_FINANCIALMODELINGPREP_API_KEY}`, { cache: 'no-store' });
    const data = await response.json();
    return data;
}