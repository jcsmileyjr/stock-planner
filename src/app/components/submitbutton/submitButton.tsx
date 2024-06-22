import { useInvestments } from "./../../contexts/stocksContext";
import submitInvestment from "@/app/utils/submitInvestments";
import { useRouter } from 'next/navigation'

export default function SubmitButton ({pwd, type, cleanUp, error}: {pwd: string, type: string, cleanUp: Function, error: boolean}) {
    const { state, dispatch } = useInvestments();
    const router = useRouter() //  Use to relocate user to another page

    return (
        <div>
            <button onClick={() => submitInvestment(type, pwd, state, dispatch, router, cleanUp)} className="w-full bg-slate-500 hover:bg-black focus:bg-black text-white font-bold p-2 rounded-md">Invest</button>
            {error && <p className="text-amber-700">Incorrect Password</p>}
        </div>
    )
} 