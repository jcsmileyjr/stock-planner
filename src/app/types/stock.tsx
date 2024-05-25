export default interface Stock {
    symbol: string
    name: string
    status: string
    currentPrice: number
    targetSellPrice: number
    targetBuyPrice: number
    purchasedPrice: number
    flag: string
    quantity: number
    profitMargin: number
}