import dataType from '../types/dataType';
import calculateProfitMargin from './calculateProfitMargin';
/**
 * Calculates the total profit margin from all purchased stocks in the given data.
 *
 * @param {dataType} data - The data object containing stock information.
 * @return {string} The total profit margin as a string with two decimal places.
 */
const calculateTotalInvestmentsProfitMargin = (data: dataType, ifUnformated: boolean) => {
    let profitMargin = 0;
    data.stocks.forEach((stock) => {
        if (stock.status === 'purchased') {
            profitMargin += calculateProfitMargin(stock);
        }
    })

    if (ifUnformated) {
        return profitMargin.toFixed(2);
    }

    if(profitMargin < 0) {
        return `-$${(Math.abs(profitMargin)).toFixed(2)}`;
    } else {
        return `$${profitMargin.toFixed(2)}`
    }
}

export default calculateTotalInvestmentsProfitMargin;