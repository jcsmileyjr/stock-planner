'use server';
import { revalidatePath } from 'next/cache';
import connectDb from '../config/db';
import Investment from '../models/Investment';
import StockType from '../types/stockType';
import dayjs from 'dayjs';

const saveData = async (data : StockType) => {
    try {
        await connectDb(); // connect to database
        const serverData = await Investment.find({}); // get data from database
        const content = serverData[0]; // Extract data from server's array
        
        if(data.status === "") {
            data.status = "scouted";
        }
        data.saleDate = "1/1/2024"; // set sale date
        content.stocks.push(data); // Add new stock to array

        const investments = new Investment(content); // Create new investment with updated investment information
        //console.log("investments created in saved data", investments);
        await investments.save(); // Save updated investment
    } catch (error) {
        console.error('Error saving data:', error);
    }

    revalidatePath('/');
};

export default saveData;