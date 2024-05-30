import dataType from '../types/dataType';

export default function getStockNames(data: dataType) {
    let listOfStocks: string = "";
    data.stocks.forEach((stock) => {
        listOfStocks += `${stock.symbol},`;
    });
    return listOfStocks;
}