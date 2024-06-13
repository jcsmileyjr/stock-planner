import { NextResponse } from "next/server";
import connectDb from './db';
import Investment from '../models/Investment';
import TestData from '../data/testData.json'

// GET /api/parts
export const GET = async () => {
    try {
    await connectDb();

    const investments = await Investment.find({});

    // This works to save data
    // const investments = new Investment(TestData)
    // await investments.save()

    console.log("testing", investments[0]);
    return NextResponse.json(investments);
    } catch (error) {
    console.error("GET request failed", error);
    return new Response("GET request failed", { status: 500 });
    } 
};