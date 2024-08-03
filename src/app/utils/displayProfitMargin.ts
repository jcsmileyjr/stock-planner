// return `-$${Math.abs(amount)}`
import calculateProfitMargin from "./calculateProfitMargin";
import stockType from "../types/stockType";
export default function displayProfitMargin (stock: stockType) {
    let amount = calculateProfitMargin(stock);
    if(amount < 0) {
        return `-$${Math.abs(amount)}`;
    } else {
        return `$${amount}`
    }
}