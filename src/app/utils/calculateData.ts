import dataType from "../types/dataType";
import getStockPrices from "./getStockPrices";
import getFlag from "./getFlag";
import getParsedDollarAmount from "./getParsedDollarAmount";
//import TestData from "../data/testData.json";
import stockType from '../types/stockType';
import getData from "./getData";
/**
 * Asynchronously calculates the revised data by fetching stock prices and updating the current price for each stock.
 * If the stock has been sold, then price is not updated.
 * @return {Promise<dataType>} A Promise that resolves to the revised data object with updated current prices.
 */
export default async function calculateData () {
    const response = await getData();
    const content = await response.json();
    const TestData = content[0]
    let revisedData: dataType = {
        initialInvestment: TestData.initialInvestment,
        stocks: []
    };

    if (process.env.NODE_ENV !== "development") {
        const stockPrices = await getStockPrices();

        revisedData.stocks = TestData.stocks.map((oldStock:stockType) => {
            const foundStock = stockPrices.find((stock:stockType) => stock.symbol === oldStock.symbol);
    
            if (foundStock) {
            let flagType = getFlag(oldStock);
            return {
                ...oldStock, 
                name: foundStock.name,
                currentPrice: oldStock.status === 'sold' ? getParsedDollarAmount(oldStock.currentPrice) : getParsedDollarAmount(foundStock.price),
                purchasedPrice: getParsedDollarAmount(oldStock.purchasedPrice),
                flag: flagType
            }
            } else {
            return oldStock
            }
        })
    } else {
        revisedData.stocks = TestData.stocks.map((oldStock: stockType) => {
            return {
            ...oldStock, 
            currentPrice: getParsedDollarAmount(oldStock.currentPrice),
            purchasedPrice: getParsedDollarAmount(oldStock.purchasedPrice),
            flag: getFlag(oldStock)
            }
        }); 

    }

    return revisedData;
}