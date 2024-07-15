"use client";
// import dataType from '@/app/types/dataType';
import StockType from '@/app/types/stockType';

export default function ConvertForm ({content}: {content: StockType[]}) {
    return (
        <section className="sm:w-1/2  md:w-1/3 laptop:w-1/4 sm:mx-auto">
            Convert Form  - Number of stocks: {content.length}
        </section>
    )
}