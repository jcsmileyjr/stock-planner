import Stock from "./stock"

export default interface data {
    initialInvestment: number
    totalInvestment: number
    winners: number
    losers: number
    stocks: Stock[]
}