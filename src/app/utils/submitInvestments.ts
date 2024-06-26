import editData from "./editData";
import saveData from "./saveData";
const submitInvestment = async (type: string, pwd: string, state: any, dispatch: any, router: any, cleanUp: Function) => {
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
        cleanUp(false); // Clean up state like the password
    } else {
        // Throw error
        console.log("Wrong password")
        cleanUp(true); // Clean up state like the password
    }
}

export default submitInvestment;