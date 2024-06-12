import { NextResponse } from "next/server";
import connectDb from './db';
import Investment from '../models/Investment';

// GET /api/parts
export const GET = async () => {
    try {
    await connectDb();

    const investments = await Investment.find({});
    console.log("testing", investments);
    return NextResponse.json(investments);
    } catch (error) {
    console.error("GET request failed", error);
    return new Response("GET request failed", { status: 500 });
    } 
};