
export default function updateState(e:any, property:string, state:any, dispatch:any, setter: any) {
    setter(e.target.value);
    let content = state.investment;
    if (property === "symbol"){
        content.symbol = e.target.value;
    } else if (property === "quantity"){
        content.quantity = e.target.value;            
    }
    dispatch({type:"currentInvestment", content: content});
}