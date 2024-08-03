export default interface StockType {
    [key: string]: string | number;
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
    purchaseDate: string
    saleDate: string
}