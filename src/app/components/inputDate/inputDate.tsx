"use client"
import { useState, useEffect} from 'react';
import { useInvestments } from "@/app/contexts/stocksContext"
import updateState from '@/app/utils/updateInvestment';
import dayjs from 'dayjs';

export default function InputDate ({label, property, data}: {label: string, property: string, data: string}) {
    const { state, dispatch } = useInvestments();
    const [value, setValue] = useState("");
    
    useEffect(() => {
        setValue(dayjs(data).format("YYYY-MM-DD"));
        updateState(data, property, state, dispatch);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    return (
        <div className="flex flex-col mb-2">    
            <label htmlFor={label} className="font-bold">{label}</label>
            <input
                type="date"
                name={label}
                value={value}
                aria-label={label}
                onChange={(e) => {updateState(dayjs(e.target.value).format("MM/DD/YYYY"), property, state, dispatch), setValue(e.target.value)}}
                className="border-2 border-slate-500 rounded-md p-1"
            />
        </div>
    )
}