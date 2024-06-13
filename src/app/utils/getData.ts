import connectDb from '../config/db';
import Investment from '../models/Investment';
import { NextResponse } from "next/server";

export default async function getData () {
    'use server';
    await connectDb(); // connect to database
    const investments = await Investment.find({}); // get data from database
    //const content = serverData[0]; // Extract data from server's array

    return NextResponse.json(investments);
}