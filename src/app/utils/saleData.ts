'use server';
import { revalidatePath } from 'next/cache';
import connectDb from '../config/db';
import Investment from '../models/Investment';
import StockType from '../types/stockType';
import dayjs from 'dayjs';

/**
 * Updates the stock data (as sold) in the database with the provided data.
 *
 * @param {StockType} data - The stock data to be updated.
 * @return {Promise<void>} A promise that resolves after updating the database.
 */
const saleData = async (data : StockType) => {
    try {
        await connectDb(); // connect to database
        const serverData = await Investment.find({}); // get data from database
        const content = serverData[0]; // Extract data from server's array
console.log("serverData for SaleData", content);        
        const index = content.stocks.findIndex((stock: StockType) => stock.symbol === data.symbol);  
        data.saleDate = dayjs().format("MM/DD/YYYY"); // set sale date to today's date
// data.schema_version = "2";      
        content.stocks[index] = data;

        const investments = new Investment(content); // Create new investment with updated investment information        
        await investments.save(); // Save updated investment
    } catch (error) {
        console.error('Error saving data:', error);
    }

    revalidatePath('/');
};

export default saleData;