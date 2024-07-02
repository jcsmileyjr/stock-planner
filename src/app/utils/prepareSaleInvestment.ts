import StockType from '../types/stockType';
export default function prepareSaleInvestment(data: StockType, state:any, dispatch:any) {
    let content = state.investment;

    content.symbol = data.symbol;
    content.targetSellPrice = data.targetSellPrice;
    content.targetBuyPrice = data.targetBuyPrice;
    content.purchasedPrice = data.purchasedPrice;
    content.status = "purchased";
    console.log("prepared sale content", content);
    dispatch({type:"currentInvestment", content: content});
}