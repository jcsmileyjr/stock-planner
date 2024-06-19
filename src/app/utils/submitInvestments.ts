import editData from "./editData";
import saveData from "./saveData";
const submitInvestment = async (type: string, pwd: string, state: any, dispatch: any, router: any) => {
    if (pwd === process.env.NEXT_PUBLIC_PASSWORD) { 
        let data = state.investment;
        if ( type === 'purchaseInvestment') {
            await saveData(data);
        } else if (type === 'editInvestment') {
            await editData(data);
        } else {
            console.log("submitInvestment(): wrong type")
        }

        dispatch({ type: type, content: data });
        router.push('/')
    } else {
        // Throw error
        console.log("Wrong password")
    }
}

export default submitInvestment;