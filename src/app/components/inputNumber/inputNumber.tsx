"use client"
import { useState, useEffect} from 'react';
import { useInvestments } from "@/app/contexts/stocksContext"
import updateState from '@/app/utils/updateInvestment';
export default function InputNumber ({label, property, data}: {label: string, property: string, data: number}) {
    const { state, dispatch } = useInvestments();
    const [value, setValue] = useState("");
    
    useEffect(() => {
        setValue(String(data));
        updateState(data, property, state, dispatch);
    }, [data]);

    return (
        <div className="flex flex-col mb-2">    
            <label htmlFor={label} className="font-bold">{label}</label>
            <input
                type="number"
                name={label}
                value={value}
                aria-label={label}
                onChange={(e) => {updateState(e.target.value, property, state, dispatch), setValue(e.target.value)}}
                className="border-2 border-slate-500 rounded-md p-1"
            />
        </div>
    )
}