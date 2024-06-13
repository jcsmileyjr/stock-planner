// 'use server'
// import { redirect } from 'next/navigation';
// import { revalidatePath } from 'next/cache';
import dataType from "../types/dataType";
import { NextResponse } from "next/server";
import connectDb from '../config/db';
import Investment from '../models/Investment';
import saveData from "./saveData";
const submitInvestment = async (type: string, pwd: string, state: any, dispatch: any, router: any) => {
    if (pwd === process.env.NEXT_PUBLIC_PASSWORD) { 
        let data = state.investment;
        await saveData(data);
        dispatch({ type: type, content: data });
        router.push('/')
    } else {
        // Throw error
        console.log("Wrong password")
    }
}

export default submitInvestment;