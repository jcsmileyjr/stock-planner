import { Schema, model, models } from "mongoose";
import stockType from "../types/stockType";
import Stock from './Stock';
import StockType from "../types/stockType";

const stocksSchema = new Schema({
    symbol: {
        type: String,
        required: true,
    },

    name: {
        type: String,
        required: true,
    },  

    status: {
        type: String,
        required: true,
    },  

    currentPrice: { 
        type: Number,
        required: true,
    },

    targetSellPrice: {
        type: Number,
        required: true,
    },  

    targetBuyPrice: {
        type: Number,
        required: true,
    },

    purchasedPrice: {
        type: Number,
        required: true,
    },

    flag: {
        type: String,
    },

    quantity: {
        type: Number,
        required: true,
    },

    profitMargin: {
        type: Number,
        required: true,
    },
    
    purchaseDate: {
        type: String,
        required: true,
    },

    saleDate: {
        type: String,
        required: true,
    },
});

// Investment Schema
const investmentSchema = new Schema({
    initialInvestment: {
        type: Number,
        required: true,
    },
    stocks: [stocksSchema],
});

const Investment = models.Investment || model("Investment", investmentSchema);

export default Investment;