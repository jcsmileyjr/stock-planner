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
        
        const index = content.stocks.findIndex((stock: StockType) => stock.symbol === data.symbol);        
        const stock_id = content.stocks[index]._id;        
        content.stocks[index] = data;
        content.stocks[index]._id = stock_id;

//console.log("Stock updated - editData:", content.stocks[index]);
        const investments = new Investment(content); // Create new investment with updated investment information        
        await investments.save(); // Save updated investment
    } catch (error) {
        console.error('Error saving data:', error);
    }

    revalidatePath('/');
};

export default editData;