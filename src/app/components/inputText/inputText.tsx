"use client"
import { useState} from 'react';
import { useInvestments } from "@/app/contexts/stocksContext"
import updateState from '@/app/utils/updateInvestment';
export default function InputText ({label, property, data}: {label: string, property: string, data: string}) {
    const { state, dispatch } = useInvestments();
    const [content, setContent] = useState(data);
    /**
     * TODO: Do I really need the variable or function "content" here?
    */

    return (
        <div className="flex flex-col mb-2">    
            <label htmlFor={label} className="font-bold">{label}</label>
            <input
                type="text"
                name={label}
                value={data}
                aria-label={label}
                onChange={(e) => updateState(e, property, state, dispatch, setContent)}
                className="border-2 border-slate-500 rounded-md p-2"
            />
        </div>
    )
}