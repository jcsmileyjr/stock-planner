import stockType from '../../types/stockType';

/**
 * Renders a stock flag based on the status and price ratios of the given stock.
 *
 * @param {Object} props - The props object.
 * @param {Object} props.stock - The stock object containing information about the stock.
 * @param {string} props.stock.symbol - The symbol of the stock.
 * @param {string} props.stock.name - The name of the stock.
 * @param {string} props.stock.status - The status of the stock ("purchased" or "scouted").
 * @param {number} props.stock.currentPrice - The current price of the stock.
 * @param {number} props.stock.targetSellPrice - The target sell price of the stock.
 * @param {number} props.stock.targetBuyPrice - The target buy price of the stock.
 * @param {number} props.stock.purchasedPrice - The purchased price of the stock.
 * @return {JSX.Element} The stock flag component.
 */
export default function StockFlag ({stock}: {stock: stockType}) {
    let flag: string = "";

    const purchaseRatio: number = (stock.currentPrice / stock.targetSellPrice)*100;
    const negativepurchaseRatio: number = stock.purchasedPrice - (stock.purchasedPrice * .1) ;
    if(stock.status === "purchased") {
        if (negativepurchaseRatio > stock.currentPrice) flag = "Dump";
        else if (purchaseRatio > 100) flag = "Sell Now";    
        else if (purchaseRatio >= 95) flag = "Sell Soon";
        else flag = "Wait";
    }
    
    const scoutedRatio: number = (stock.targetBuyPrice / stock.currentPrice)*100;
    if(stock.status === "scouted") {
        if (scoutedRatio > 100) flag = "Buy Now";
        else if (scoutedRatio >= 97) flag = "Buy Soon";
        else flag = "Wait";
    }
    return (
        flag === "Sell Now" && <p className={` flex-1 flex `}><span className='bg-green-200 text-black font-bold px-2 flex-1'>{flag}</span></p>
        || flag === "Sell Soon" && <p className={` flex-1 flex `}><span className='bg-orange-200 text-black font-bold px-2 flex-1'>{flag}</span></p>
        || flag === "Buy Now" && <p className={` flex-1 flex `}><span className='bg-green-200 text-black font-bold px-2 flex-1'>{flag}</span></p>
        || flag === "Buy Soon" && <p className={` flex-1 flex `}><span className='bg-orange-200 text-black font-bold px-2 flex-1'>{flag}</span></p>
        || flag === "Dump" && <p className={` flex-1 flex `}><span className='bg-red-700 text-white font-bold px-2 flex-1'>{flag}</span></p>
        || flag === "Wait" && <p className={` flex-1 flex`}><span className='bg-black text-white font-bold px-2 flex-1'>{flag}</span></p>
        
    );
}