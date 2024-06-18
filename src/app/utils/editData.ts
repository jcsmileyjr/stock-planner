'use server';
import { revalidatePath } from 'next/cache';
import connectDb from '../config/db';
import Investment from '../models/Investment';
import StockType from '../types/stockType';

const editData = async (data : StockType) => {
    try {
        await connectDb(); // connect to database
        const serverData = await Investment.find({}); // get data from database
        const content = serverData[0]; // Extract data from server's array
        
        /*
        //content.stocks.push(data); // Add new stock to array
        1. Find the stock symbol that needs to be edited
        2. Find the index of the stock symbol
        3. Replace the information in it
        4. Save the updated investment
        */

        const index = content.stocks.findIndex((stock: StockType) => stock.symbol === data.symbol);
        const stock_id = content.stocks[index]._id;
        content.stocks[index] = data;
        content.stocks[index]._id = stock_id;


        const investments = new Investment(content); // Create new investment with updated investment information
        console.log("investments created in saved data", investments);
        await investments.save(); // Save updated investment
    } catch (error) {
        console.error('Error saving data:', error);
    }

    revalidatePath('/');
};

export default editData;