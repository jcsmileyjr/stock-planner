import { Schema, model, models } from "mongoose";
import stockType from "../types/stockType";
import Stock from './Stock';
import StockType from "../types/stockType";

const stocksSchema2 = new Schema({
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
    stocks: [stocksSchema2],
});

const Investment = models.Investment2 || model("Investment2", investmentSchema);

export default Investment;