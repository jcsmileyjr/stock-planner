
export default function updateState(e:any, property:string, state:any, dispatch:any) {
    let content = state.investment;
    if (property === "symbol"){
        content.symbol = e.target.value;
    } else if (property === "quantity"){
        content.quantity = e.target.value;            
    } else if (property === "targetSellPrice"){
        content.targetSellPrice = e.target.value;
    } else if (property === "targetBuyPrice"){
        content.targetBuyPrice = e.target.value;
    } else if (property === "purchasedPrice"){
        content.purchasedPrice = e.target.value;
    } else if (property === "status"){
        content.status = e.target.value;
    }
    dispatch({type:"currentInvestment", content: content});
}