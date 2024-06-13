import getStockNames from "./getStockNames";
import TestData from "../data/testData.json";

export default async function getStockPrices () {
    //const stockNames = getStockNames(TestData);
    let url = 'http://localhost:3000/config'
    if (process.env.NODE_ENV !== "development") {
        url = 'https://smileyinvestmentplanner.netlify.app/config'
    }
    const rawData = await fetch(url).then((res) => res.json())
    const content= rawData[0]
    const stockNames = getStockNames(content);
    const response = await fetch(`https://financialmodelingprep.com/api/v3/quote-short/${stockNames}?apikey=${process.env.NEXT_PUBLIC_FINANCIALMODELINGPREP_API_KEY}`, { cache: 'no-store' });
    const data = await response.json();
    return data;
}