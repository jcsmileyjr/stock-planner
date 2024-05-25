import Stock from "./stockType"

export default interface dataType {
    initialInvestment: number
    totalInvestment: number
    winners: number
    losers: number
    stocks: Stock[]
}