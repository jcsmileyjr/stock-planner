import { Schema, model, models } from "mongoose";

// Stock Schema
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

    purchasedDate: {
        type: String,
        required: true,
    },

    saleDate: {
        type: String,
        required: true,
    },
});

const Stock = models.stocksSchema || model("Stock", stocksSchema);

export default Stock;