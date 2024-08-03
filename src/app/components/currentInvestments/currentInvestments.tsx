import StockToggle from "../stockToggle/stockToggle";
import stockType from '../../types/stockType';

export default function CurrentInvestments({content}: {content: stockType[]}) {
    return (
        <section className="col-span-1 laptop:col-span-3 pb-4 mb-4 border-solid border-t-2 border-slate-500">
            <h1 className="underline font-bold uppercase text-2xl mb-2 pt-8">Current Investments</h1>
            <div className="flex flex-row mb-2">
                <p className="flex-1 font-bold">Symbol</p>
                <p className="flex-1 font-bold">Live Price</p>
                <p className="flex-1 font-bold">Sell Price</p>
                <p className="hidden laptop:flex flex-1 font-bold">Invest Price</p>
                <p className="hidden laptop:flex flex-1 font-bold">Profit Margin</p>
                <p className="hidden laptop:flex flex-1 font-bold">Quantity</p>
                <p className="hidden laptop:flex flex-1 font-bold">Days Invested</p>
                <p className="flex-1 font-bold">Flag</p>
            </div>
            <div className="divide-y">
                {
                    content.map((stock) => {
                        return (
                            <StockToggle key={`${stock['symbol']}-${stock['status']}`} stock={stock} />
                        )
                    })
                }
            </div>
        
        </section>
    )
}