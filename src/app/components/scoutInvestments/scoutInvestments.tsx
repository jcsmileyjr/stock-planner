import StockToggle from "../stockToggle/stockToggle";
import stockType from '../../types/stockType';

export default function ScoutInvestments({content}: {content: stockType[]}) {
    return (
        <section className="col-span-1 md:px-4">
            <h1 className="underline font-bold uppercase text-2xl mb-2">Scout Investments</h1>
            <div className="flex flex-row mb-2">
                <p className="w-1/5 lg:w-1/5 font-bold">Symbol</p>
                <p className="w-1/3 lg:w-1/3  font-bold">Current Price</p>
                <p className="w-1/4 lg:w-1/4  font-bold">Buy Price</p>
                <p className="w-1/5 lg:w-1/4  font-bold">Flag</p>
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