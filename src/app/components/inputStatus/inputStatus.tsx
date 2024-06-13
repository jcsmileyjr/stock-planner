"use client"
import { useState} from 'react';
import { useInvestments } from "@/app/contexts/stocksContext"
import updateState from '@/app/utils/updateInvestment';
export default function InputStatus ({label, property}: {label: string, property: string}) {
    const { state, dispatch } = useInvestments();
    const [value, setValue] = useState("Scouted");

    return (
        <div className="flex flex-col mb-2">    
            <label htmlFor={label} className="font-bold">{label}</label>
            <select value={value} className="border-2 border-slate-500 rounded-md p-2" name={label} id={label} onChange={(e) => updateState(e, property, state, dispatch, setValue)}>
                <option value="Scouted">Scouted</option>
                <option value="Purchased">Purchased</option>
            </select>
        </div>
    )
}