"use client"
import Link from 'next/link';
import {useState} from 'react';
import Image from 'next/image';
import Hamburger from '../../images/hamburger.png';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header className="w-full text-center py-4 flex flex-col laptop:flex-row">
            <div className='flex items-center justify-end self-center flex-2'>
                <h1 className="uppercase text-xl laptop:text-3xl laptop:mb-4">Buy Low 📉 Sell High 📈</h1>
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} type="button" className="laptop:hidden">
                    <Image src={Hamburger} className='h-4' alt="menu" width={20} height={50} />
                    <span className="text-base sr-only">MENU</span>
                </button>
            </div>
            <div className='hidden laptop:block laptop:self-center flex-1 laptop:mb-4'>
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