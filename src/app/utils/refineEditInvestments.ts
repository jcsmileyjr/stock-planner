import stockType from '../types/stockType';
import dataType from '../types/dataType';

/**
 * Refines the current investments by filtering out stocks that are sold.
 * @param {dataType} data - The data object containing stock information.
 * @return {stockType[]} An array of stocks that are currently invested.
 */
export default function refineEditInvestments (data : dataType) : stockType[] {
    let initialStockArray: stockType[] = data.stocks;
    let stocks: stockType[] = [];
    initialStockArray.forEach((stock) => {
        if (stock.status !== "sold") {
        stocks.push(stock);
        }
    })

    // Sort stocks by symbol
    stocks.sort((a, b) => a.symbol < b.symbol ? -1 : a.symbol > b.symbol ? 1 : 0);

    return stocks;
}