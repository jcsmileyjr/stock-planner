import stockType from "../types/stockType";

/**
 * Calculates the number of days between the current date and the purchase date of a stock.
 *
 * @param {stockType} stock - The stock object containing the purchase date.
 * @return {number} The number of days between the current date and the purchase date.
 */
export default function calculateDaysInvested (stock: stockType) {
    // if (stock.status === "scouted") {
    //     return 0;
    // }

    let currentDate = new Date(); // Create a new date object for today's date
    let purchaseDate = new Date(stock.purchaseDate); // Create a new date object for the purchase date
    let difference = currentDate.getTime() - purchaseDate.getTime(); // Get the difference in milliseconds
    let days = Math.ceil(difference / (1000 * 3600 * 24)); // Convert the difference to days
    
    return days;
}