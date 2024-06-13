'use server';
import { revalidatePath } from 'next/cache';
import connectDb from '../config/db';
import Investment from '../models/Investment';
import dataType from '../types/dataType';

const saveData = async (data : dataType) => {
    try {
        await connectDb();
        console.log("data pass in saveData", data);
        const investments = new Investment(data);
        console.log("investments created in saved data", investments);
        await investments.save();
    } catch (error) {
        console.error('Error saving data:', error);
    }

    revalidatePath('/');
};

export default saveData;