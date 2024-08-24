"use client";
import dataType from "@/app/types/dataType";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    Tooltip,
    PointElement,
    LineElement,
} from "chart.js";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

// Register ChartJS components using ChartJS.register
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip
);

const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
    }]
}  


const ChartForm = ({content}: {content: dataType}) => {
    if (!data) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="animate-spin rounded-full border-4 border-solid border-current border-r-transparent h-12 w-12"></div>
            </div>
        );
    }
    
    return (
        <section className="sm:w-1/2  md:w-1/3 laptop:w-1/4 sm:mx-auto">
            <Line data={data} />
        </section>  
    );
}

export default ChartForm;