import { useInvestments } from "./../../contexts/stocksContext";
import submitInvestment from "@/app/utils/submitInvestments";
import { useRouter } from 'next/navigation'

export default function SubmitButton ({pwd}: {pwd: string}) {
    const { state, dispatch } = useInvestments();
    const router = useRouter() //  Use to relocate user to another page

    return (
        <button onClick={() => submitInvestment("purchaseInvestment", pwd, state, dispatch, router)} className="w-full bg-slate-500 hover:bg-black focus:bg-black text-white font-bold p-2 rounded-md">Invest</button>
    )
} 