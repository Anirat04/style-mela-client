"use client"
import React, { useEffect } from 'react';
import { initFlowbite } from 'flowbite';
import Image from 'next/image';
import ToggleTheme from '../ToggleTheme/ToggleTheme';
import { HiMagnifyingGlass } from "react-icons/hi2";
import { SlBasket } from "react-icons/sl";
import { CiLogin } from "react-icons/ci";

const NavBar = () => {
    useEffect(() => {
        initFlowbite();
    }, []);



    return (
        <div>
            <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
                <div className="max-w-[1600px] flex flex-wrap items-center justify-between mx-auto p-4 2xl:px-0">
                    <div className='flex items-center w-2/4'>
                        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <span className="self-center text-[40px] font-semibold whitespace-nowrap dark:text-white">Style Mela</span>
                        </a>
                        <div className='bg-black dark:bg-white h-[25px] w-[1px] mx-5'></div>
                        {/* <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button> */}
                        <div className="hidden w-full md:block md:w-full">
                            <div className='relative'>
                                <label htmlFor="search" className='absolute top-1/2 -translate-y-1/2 left-2'><HiMagnifyingGlass className='text-[22px]'></HiMagnifyingGlass></label>
                                <input
                                    name='search'
                                    type="text"
                                    className='border border-black min-w-full h-[32px] rounded-xl pl-8 outline-0'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <div>
                            <ToggleTheme></ToggleTheme>
                        </div>
                        <div className='bg-black dark:bg-white h-[25px] w-[1px] mx-5'></div>
                        <div className='relative flex gap-3 items-center'>
                            <SlBasket className='text-[25px] dark:text-white'></SlBasket>
                            <span className="absolute -top-2 left-3 bg-[#fa8c16] p-[2px] w-[20px] h-[20px] text-[12px] text-white font-semibold rounded-full flex items-center justify-center">11</span>
                            <div>
                                <p className='font-medium dark:text-white'>Basket</p>
                            </div>
                        </div>
                        <div className='bg-black dark:bg-white h-[25px] w-[1px] mx-5'></div>
                        <div className='flex items-center gap-2'>
                            <CiLogin className='text-[27px] dark:text-white'></CiLogin>
                            <p className='dark:text-white'>Login</p>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default NavBar;