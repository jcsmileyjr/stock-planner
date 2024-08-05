import StockType from '../types/stockType';

/**
 * Prepares a sale investment by updating the investment state with the provided data.
 * This is used on the SaleForm component when the user picks a stock to sell.
 *
 * @param {StockType} data - The data containing the details of the sale investment.
 * @param {any} state - The current state of the investment.
 * @param {any} dispatch - The dispatch function to update the state.
 * @return {void} This function does not return anything.
 */
export default function prepareSaleInvestment(data: StockType, state:any, dispatch:any) {
    let content = state.investment;

    content.currentPrice = data.currentPrice;
    content.symbol = data.symbol;
    content.quantity = data.quantity;
    content.targetSellPrice = data.targetSellPrice;
    content.targetBuyPrice = data.targetBuyPrice;
    content.purchasedPrice = data.purchasedPrice;
    content.purchaseDate = data.purchaseDate;
    content.saleDate = data.saleDate;
    content._id = data._id;
    content.status = "sold";
    //console.log("prepared sale content", content);
    dispatch({type:"currentInvestment", content: content});
}