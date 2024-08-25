"use client"
import { useState, useEffect} from 'react';
import { useInvestments } from "@/app/contexts/stocksContext"
import updateState from '@/app/utils/updateInvestment';
export default function InputNumber ({label, property, data, disableInput = false}: {label: string, property: string, data: number, disableInput:boolean}) {
    const { state, dispatch } = useInvestments();
    const [value, setValue] = useState("");
    
    useEffect(() => {
        setValue(String(data));
        updateState(data, property, state, dispatch); // Set the global investment state based on the local stock data
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    // Update the global investment state & element state to zero if disableInput is true
    useEffect(() => {
        if (disableInput) {
            updateState(0, property, state, dispatch);
            setValue("0");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [disableInput]);

    return (
        <div className="flex flex-col mb-2">    
            <label htmlFor={label} className="font-bold">{label}</label>
            <input
                type="number"
                name={label}
                value={ value}
                aria-label={label}
                onChange={(e) => {updateState(e.target.value, property, state, dispatch), setValue(e.target.value)}}
                className={`border-2 border-slate-500 rounded-md p-1 ${disableInput ? "bg-slate-500 text-slate-500 " : "bg-white text-black"}`}
                disabled={disableInput}
            />
        </div>
    )
}