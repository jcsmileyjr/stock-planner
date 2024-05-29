import exp from 'constants';
import Data from '../data/testData.json'; // Mock data
import dataType from '../types/dataType';

export default function getStockNames(data: dataType) {
    let stockNames: string[] = [];
    data.stocks.forEach((stock) => {
        stockNames.push(stock.symbol);
    });
    return stockNames;
}