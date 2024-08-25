import dataType from "../types/dataType";

/**
 * Calculates the total potential profit margin from all purchased stocks in the given data.
 *
 * @param {dataType} data - The data object containing stock information.
 * @return {string} The total potential profit margin as a string with two decimal places.
 */
const calculatePotentialInvestmentsProfitMargin = (data: dataType) => {
    let potentialProfitMargin = 0;
    data.stocks.forEach((stock) => {
        if (stock.status === 'purchased') {
            let calculatedPrice = stock.targetSellPrice - stock.purchasedPrice;
            potentialProfitMargin += parseFloat((calculatedPrice * stock.quantity).toFixed(2));
        }
    })

    return potentialProfitMargin.toFixed(2);
}

export default calculatePotentialInvestmentsProfitMargin;