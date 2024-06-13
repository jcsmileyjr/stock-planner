import getStockNames from "./getStockNames";
import getData from "./getData";

export default async function getStockPrices () {
    const serverData = await getData();
    const convertedData = await serverData.json();
    const content= convertedData[0]
    const stockNames = getStockNames(content);
    const response = await fetch(`https://financialmodelingprep.com/api/v3/quote-short/${stockNames}?apikey=${process.env.NEXT_PUBLIC_FINANCIALMODELINGPREP_API_KEY}`, { cache: 'no-store' });
    const data = await response.json();
    return data;
}