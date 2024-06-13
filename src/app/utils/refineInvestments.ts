import stockType from '../types/stockType';
import dataType from '../types/dataType';

/**
 * Refines the current investments by filtering stocks that are purchased or scouted.
 * @param {dataType} data - The data object containing stock information.
 * @return {stockType[]} An array of stocks that are currently invested.
 */
export default function refineInvestments (data : dataType, type : string) : stockType[] {
    let initialStockArray: stockType[] = data.stocks;
    let stocks: stockType[] = [];
    initialStockArray.forEach((stock) => {
        if (stock.status === type) {
        stocks.push(stock);
        }
    })

    // Sort stocks by flag
    stocks.sort((a, b) => a.flag < b.flag ? -1 : a.flag > b.flag ? 1 : 0);

    return stocks;
}