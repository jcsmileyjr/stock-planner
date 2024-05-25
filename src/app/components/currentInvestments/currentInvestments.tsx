import StockToggle from "../stockToggle/stockToggle"

export default function CurrentInvestments() {
    return (
        <section className="col-span-2 md:px-4 pb-4 mb-4 border-solid border-b-2 border-slate-500">
            <h1 className="underline font-bold uppercase text-2xl mb-2">Current Investments</h1>
            <div className="flex flex-row mb-2">
                <p className="w-1/5">Name</p>
                <p className="w-1/3">Current Price</p>
                <p className="w-1/4">Sell Price</p>
                <p className="hidden md:block">Purchased Price</p>
                <p className="hidden md:block">Profit Margin</p>
                <p className="hidden md:block">Quantity</p>
                <p className="w-1/4">Flag</p>
            </div>
            <div>
                <StockToggle />
            </div>
        
        </section>
    )
}