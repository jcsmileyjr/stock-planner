"use client"
import { useState, useEffect} from 'react';
import { useInvestments } from "@/app/contexts/stocksContext"
import updateState from '@/app/utils/updateInvestment';
export default function InputStatus ({label, property, data = "scouted"}: {label: string, property: string, data: string}) {
    const { state, dispatch } = useInvestments();
    const [value, setValue] = useState("");

    useEffect(() => {
        setValue(data);
        updateState(data, property, state, dispatch);
    }, [data]);

    return (
        <div className="flex flex-col mb-2">    
            <label htmlFor={label} className="font-bold">{label}</label>
            <select value={value} className="border-2 border-slate-500 rounded-md p-2" name={label} id={label} onChange={(e) => {updateState(e.target.value, property, state, dispatch), setValue(e.target.value)}}>
                <option value="scouted">Scouted</option>
                <option value="purchased">Purchased</option>
            </select>
        </div>
    )
}