
const submitInvestment = (type: string, pwd: string, state: any, dispatch: any, router: any) => {
    if (pwd === process.env.NEXT_PUBLIC_PASSWORD) { 
        let data = state.investment;
        dispatch({ type: type, content: data });
        router.push('/')
    } else {
        // Throw error
        console.log("Wrong password")
    }
}

export default submitInvestment;