import stockType from "../types/stockType";

export default function calculateProfitMargin (stock: stockType) {
    let calculatedPrice = stock.currentPrice - stock.purchasedPrice;
    return parseFloat((calculatedPrice * stock.quantity).toFixed(2));
}