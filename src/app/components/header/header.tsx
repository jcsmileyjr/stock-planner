"use client"
import Link from 'next/link';
import {useState} from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header className="w-full text-center py-4 flex flex-col laptop:flex-row">
            <div className='flex items-center justify-end self-center flex-2'>
                <h1 className="uppercase text-xl lg:text-3xl lg:mb-4">Buy Low 📉 Sell High 📈</h1>
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} type="button" className="laptop:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg"  width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M4 6l16 0" />
                        <path d="M4 12l16 0" />
                        <path d="M4 18l16 0" />
                    </svg>
                    <span className="text-base sr-only">MENU</span>
                </button>
            </div>
            <div className='hidden laptop:block laptop:self-center flex-1'>
                <Link href='/purchaseInvestments' className="text-cyan-700 underline hover:text-indigo-700">Purchase Investment</Link>
            </div>
            
            {isMenuOpen &&
                <div className='self-center laptop:hidden'>
                    <Link href='/purchaseInvestments' className="text-cyan-700 underline hover:text-indigo-700">Purchase Investment</Link>
                </div>
            }
            
        </header>
    )
}