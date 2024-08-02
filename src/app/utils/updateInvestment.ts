
export default function updateState(input:any, property:string, state:any, dispatch:any) {
    let content = state.investment;
    if (property === "symbol"){
        content.symbol = input;
    } else if (property === "quantity"){
        content.quantity = input;            
    } else if (property === "targetSellPrice"){
        content.targetSellPrice = input;
    } else if (property === "targetBuyPrice"){
        content.targetBuyPrice = input;
    } else if (property === "purchasedPrice"){
        content.purchasedPrice = input;
    } else if (property === "status"){
        content.status = input;
    } else if (property === "purchaseDate"){
        content.purchaseDate = input;
    } else if (property === "saleDate"){
        content.saleDate = input;
    }
    dispatch({type:"currentInvestment", content: content});
}