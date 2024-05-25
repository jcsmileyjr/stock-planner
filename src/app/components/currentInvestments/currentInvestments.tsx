import StockToggle from "../stockToggle/stockToggle";
import stockType from '../../types/stockType';

export default function CurrentInvestments({content}: {content: stockType[]}) {
    return (
        <section className="col-span-2 pb-4 mb-4 border-solid border-b-2 border-slate-500 lg:border-none">
            <h1 className="underline font-bold uppercase text-2xl mb-2">Current Investments</h1>
            <div className="flex flex-row mb-2">
                <p className="w-1/5 lg:w-1/6 font-bold">Symbol</p>
                <p className="w-1/3 lg:w-1/6  font-bold">Current Price</p>
                <p className="w-1/4 lg:w-1/6  font-bold">Sell Price</p>
                <p className="hidden lg:flex lg:w-1/6  font-bold">Purchased Price</p>
                <p className="hidden lg:flex lg:w-1/6  font-bold">Profit Margin</p>
                <p className="hidden lg:flex lg:w-1/6  font-bold">Quantity</p>
                <p className="w-1/4 lg:w-1/6  font-bold">Flag</p>
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