import StockToggle from "../stockToggle/stockToggle";
import stockType from '../../types/stockType';

export default function ScoutInvestments({content}: {content: stockType[]}) {
    return (
        <section className="col-span-1 laptop:col-span-2 border-solid border-t-2 border-slate-500 lg:border-none pt-8 lg:pt-0">
            <h1 className="underline font-bold uppercase text-2xl mb-2">Scout Investments</h1>
            <div className="flex flex-row mb-2">
                <p className="flex-1 lg:w-1/5 font-bold">Symbol</p>
                <p className="flex-1 lg:w-1/3  font-bold">Live Price</p>
                <p className="flex-1 lg:w-1/4  font-bold">Buy Price</p>
                <p className="hidden laptop:flex flex-1 font-bold">Days Scouted</p>
                <p className="flex-1 lg:w-1/4  font-bold">Flag</p>
            </div>
            <div className="divide-y mb-8">
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