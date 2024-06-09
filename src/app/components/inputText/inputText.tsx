"use client"
import { useState} from 'react';
import { useInvestments } from "@/app/contexts/stocksContext"
import updateState from '@/app/utils/updateInvestment';
export default function InputText ({label, property}: {label: string, property: string}) {
    const { state, dispatch } = useInvestments();
    const [value, setValue] = useState("");

    return (
        <div className="flex flex-col mb-2">    
            <label htmlFor={label} className="font-bold">{label}</label>
            <input
                type="text"
                name={label}
                value={value}
                aria-label={label}
                onChange={(e) => updateState(e, property, state, dispatch, setValue)}
                className="border-2 border-slate-500 rounded-md p-2"
            />
        </div>
    )
}