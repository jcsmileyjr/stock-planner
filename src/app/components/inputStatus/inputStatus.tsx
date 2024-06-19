"use client"
import { useState} from 'react';
import { useInvestments } from "@/app/contexts/stocksContext"
import updateState from '@/app/utils/updateInvestment';
export default function InputStatus ({label, property, data}: {label: string, property: string, data: string}) {
    const { state, dispatch } = useInvestments();
    const [value, setValue] = useState("Scouted");
    
    /**
     * TODO: Do I really need the variable or function "content" here?
    */

    return (
        <div className="flex flex-col mb-2">    
            <label htmlFor={label} className="font-bold">{label}</label>
            <select value={data} defaultValue={data} className="border-2 border-slate-500 rounded-md p-2" name={label} id={label} onChange={(e) => updateState(e, property, state, dispatch, setValue)}>
                <option value="scouted">Scouted</option>
                <option value="purchased">Purchased</option>
            </select>
        </div>
    )
}