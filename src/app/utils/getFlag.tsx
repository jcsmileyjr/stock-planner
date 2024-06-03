import stockType from '../types/stockType';

/**
 * Determines the flag for a given stock based on its status and price ratios.
 *
 * @param {stockType} stock - The stock object containing information about the stock.
 * @return {string} The flag for the stock, indicating whether to buy, sell, or wait.
 */
export default function getFlag (stock: stockType) {
    let flag: string = "";

    const purchaseRatio: number = (stock.currentPrice / stock.targetSellPrice)*100;
    const negativepurchaseRatio: number = stock.purchasedPrice - (stock.purchasedPrice * .1) ;
    if(stock.status === "purchased") {
        if (negativepurchaseRatio > stock.currentPrice) flag = "Dump";
        else if (purchaseRatio > 100) flag = "Sell Now";    
        else if (purchaseRatio >= 95) flag = "Sell Soon";
        else flag = "Wait";
    }

    const scoutedRatio: number = (stock.targetBuyPrice / stock.currentPrice)*100;
    if(stock.status === "scouted") {
        if (scoutedRatio > 100) flag = "Buy Now";
        else if (scoutedRatio >= 97) flag = "Buy Soon";
        else flag = "Wait";
    }

    return flag;
}