'use client';

import Link from "next/link";
import {cartPath, homePath, loginPath, ordersPath, signupPath} from "@/utils/Routes";
import Image from "next/image";
import {gradient} from "@/utils/Theme";
import {useTheme} from "next-themes";

function Navbar() {
    const {theme, setTheme} = useTheme();

    return (
        <header className={`sticky top-0 z-50 ${gradient} body-font text-white`}>
            <div className={'container flex flex-col md:flex-row flex-wrap mx-auto items-center p-3'}>
                <Link href={homePath} className={'flex font-extrabold items-center uppercase text-gray-100'}>
                    <Image src={'../pizza.svg'} alt={'Navbar Logo'} height={60} width={60}/>
                    <p className={'leading-5 text-xl mx-2'}>Pizza Wizza</p>
                </Link>

                <nav className={'flex flex-wrap items-center justify-center text-base md:ml-auto'}>
                    {/** cart */}
                    <Link href={cartPath} className={'flex items-center text-white mr-5 hover:text-gray-200'}>
                        Cart
                        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-5 h-5 mx-1'>
                            <path strokeLinecap='round' strokeLinejoin='round'
                                  d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'/>
                        </svg>
                        <span
                            className={'inline-flex items-center bg-red-50 py-1 px-2 rounded-full text-xs font-medium text-red-600 shadow-[0_0_15px_1px_rgba(220,38,38) ring-1 ring-inset ring-red-600/10]'}>
                            0
                        </span>
                    </Link>

                    {/** orders */}
                    <Link href={ordersPath} className={'flex items-center text-white mr-5 hover:text-gray-200'}>
                        My Orders
                        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-5 h-5 mx-1'>
                            <path strokeLinecap='round' strokeLinejoin='round'
                                  d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'/>
                        </svg>
                        <span
                            className={'inline-flex items-center bg-red-50 py-1 px-2 rounded-full text-xs font-medium text-red-600 shadow-[0_0_15px_1px_rgba(220,38,38) ring-1 ring-inset ring-red-600/10]'}>
                            0
                        </span>
                    </Link>

                    {/** login */}
                    <Link href={loginPath} className={'flex items-center text-white mr-5 hover:text-gray-200'}>
                        Login
                        <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 mx-1' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
                            <path strokeLinecap='round' strokeLinejoin='round' d='M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1'/>
                        </svg>
                    </Link>

                    {/** signup */}
                    <Link href={signupPath} className={'flex items-center text-white mr-5 hover:text-gray-200'}>
                        Signup
                        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='size-6'>
                            <path strokeLinecap='round' strokeLinejoin='round'
                                  d='M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z'/>
                        </svg>
                    </Link>
                </nav>

                <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className={'flex items-center px-3 py-1 bg-black rounded-full dark:text-black dark:bg-white'}>
                    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-4 h-4'>
                        <path strokeLinecap='round' strokeLinejoin='round'
                              d='M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z'/>
                    </svg>
                    {' '}/
                    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-5 h-5'>
                        <path strokeLinecap='round' strokeLinejoin='round'
                              d='M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z'/>
                    </svg>
                </button>
            </div>
        </header>
    );
}

export default Navbar;
