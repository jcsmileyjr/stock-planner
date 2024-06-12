import { Schema, model, models } from "mongoose";

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
        required: true,
    },

    quantity: {
        type: Number,
        required: true,
    },

    profitMargin: {
        type: Number,
        required: true,
    },  
});

// Investment Schema
const investmentSchema = new Schema({
    initialInvestment: {
        type: Number,
        required: true,
    },
    stocks: [
        {        
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
            required: true,
        },
    
        quantity: {
            type: Number,
            required: true,
        },
    
        profitMargin: {
            type: Number,
            required: true,
        }
        }
    ],
});

const Investment = models.Investment || model("Investment", investmentSchema);

export default Investment;