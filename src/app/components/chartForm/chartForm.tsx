"use client";
import dataType from "@/app/types/dataType";
import calculatePotentialInvestmentsProfitMargin  from '@/app/utils/calculatePotentialInvestmentsProfitMargin';
import calculateTotalInvestmentsProfitMargin from '@/app/utils/calculateTotalInvestmentsProfitMargin';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    Tooltip,
    PointElement,
    LineElement,
    BarController,
    BarElement,
    Title, 
    Legend
} from "chart.js";
import { useEffect, useState } from "react";
import { Line, Bar } from "react-chartjs-2";

// Register ChartJS components using ChartJS.register
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    BarController,
    BarElement,
    Title, 
    Legend
); 


const ChartForm = ({content}: {content: dataType}) => {
    const potentialProfitMargin = calculatePotentialInvestmentsProfitMargin(content);
    const totalProfitMargin = calculateTotalInvestmentsProfitMargin(content);
    console.log("totalProfitMargin", totalProfitMargin);

    const data = {
        labels: ['Current Profit Margin vs Potential Profit Margin'],
        datasets: [{
            label: 'Current Profit Margin',
            data: [totalProfitMargin],
            borderThickness: 10,
            backgroundColor: 'red',
            borderColor: 'black',
        },
        {
            label: 'Potential Profit Margin',
            data: [potentialProfitMargin],
            borderThickness: 10,
            backgroundColor: 'green',
        }]
    } 

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
                align: 'start' as const,
            },
            title: {
                text: 'Profit Margin',
                display: true,
                font: {
                    size: 20
                }
            }
        },
        maintainAspectRatio: false,
        elemnts: {
            bar : {
                barPercentage: 10,
                categoryPercentage: 100
            }
        }
    }

    if (!potentialProfitMargin || !totalProfitMargin) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="animate-spin rounded-full border-4 border-solid border-current border-r-transparent h-12 w-12"></div>
            </div>
        );
    }
    
    return (
        <section className="w-1/2 sm:mx-auto">
            {/* <Line data={data} /> */}
            <Bar data={data} height={300} width={500} options={options} />
        </section>  
    );
}

export default ChartForm;