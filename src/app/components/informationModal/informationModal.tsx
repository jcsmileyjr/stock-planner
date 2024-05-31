"use client"
import {useState} from 'react';
import Image from 'next/image';
import Info from '../../images/info.png';
export default function InformationModal({prompt}: {prompt: string}) {
    const [openInformationModal, setOpenInformationModal] = useState(false);
    
    return (
        <>
            <Image onClick={() => setOpenInformationModal(!openInformationModal)} src={Info} alt="info" width={20} height={50} className='h-4 mx-2 self-center relative' />
            {openInformationModal &&
                <span onClick={() => setOpenInformationModal(!openInformationModal)} className='absolute left-0 top-0 w-full h-30 bg-black opacity-100 text-white text-xl px-2 flex justify-center items-center font-bold'>
                    {prompt === "totalInvestment" && <p>Cumulative value of investments based on their current worth.</p>}
                    {prompt === "initialInvestment" && <p>Total sum of funds deposited into investment accounts.</p>}
                    {prompt === "profits" && <p>Net amount determined by the outcomes of both favorable and unfavorable investment sales.</p>}
                    {prompt === "winners" && <p>Stocks that, upon being sold, generated a positive net yield.</p>}
                    {prompt === "losers" && <p>Stocks that, upon being sold, generated a negative net yield.</p>}
                </span>
            }
        </>
    )
}
                
                
                
//</div>onClick={() => setOpenInformationModal(!openInformationModal)}