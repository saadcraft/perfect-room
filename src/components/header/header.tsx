"use client"

import React ,{ useState, useEffect } from 'react'
import Image from 'next/image'
import {LinkStyle, SmallLinkStyle } from '../style-component/link-style'
import { FaRegUser, FaShoppingCart, FaArrowUp } from 'react-icons/fa'
import { usePathname } from 'next/navigation'
import Category from './categories'

export default function Header() {

    const pathname = usePathname();
    // const searchParams = useSearchParams();

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCategoryOpen , setIsCategoryOpen] = useState(false);

    const closeAll = () => {
        setIsMenuOpen(false);
        setIsCategoryOpen(false);
    };
    const toggleMenu = () => isMenuOpen ? closeAll() : setIsMenuOpen(!isMenuOpen);
    const toggleCategory = () => setIsCategoryOpen(!isCategoryOpen);

    useEffect(() => {
        closeAll();
    }, [pathname]);

    const Categories = Object.entries(Category).map(([category, items], index) =>{
        return (
            <div className='flex flex-col px-10 border-l-2' key={index}>
                <h1 className='text-gray-500 text-xl font-bold mb-2'>{category}</h1>
                {items.map(item =>{
                    return (
                        <SmallLinkStyle href="#" key={item.id}>{item.name}</SmallLinkStyle>
                    )
                })}
            </div>
        );
    });

    return (
        <div className='fixed w-full'>
            <div className='max-w-7xl px-5 mx-auto'>
                <div className='flex justify-between items-center'>
                    <LinkStyle href="#">
                        <Image className='w-20' width={100} height={100} src="/images/perfect.png" alt="Perfect-room Logo"/>
                    </LinkStyle>
                    <div>
                        <input type='text' name='search' placeholder='Search 🔍' className='outline-none p-2 border w-40 md:w-60 rounded-lg' />
                    </div>
                    <div className='md:flex gap-5 items-center hidden'>
                        <div onMouseEnter={toggleCategory} onMouseLeave={closeAll} className='group'>
                            <div className='flex items-center transition-all duration-500 gap-1 cursor-pointer font-semibold text-lg text-black group-hover:text-primer'>
                                <p>Categories</p>
                                <i className='text-sm transition-transform group-hover:rotate-180'><FaArrowUp/></i>
                            </div>
                            <div className={`fixed top-14 left-0 right-0 transition-all px-10 overflow-hidden ${isCategoryOpen ? 'max-h-full' : 'max-h-0'}`}>
                                <div className='grid grid-cols-4 max-w-7xl rounded-lg shadow-lg bg-opacity-10 bg-primer mt-9 py-10 px-10 mx-auto'>
                                    {Categories}
                                </div>
                            </div>
                        </div>
                        <LinkStyle href="#">Products</LinkStyle>
                        <LinkStyle href="#">About us</LinkStyle>
                        <LinkStyle href='#'><FaRegUser /></LinkStyle>
                        <LinkStyle href='#'><FaShoppingCart /></LinkStyle>
                    </div>
                    <div onClick={toggleMenu} className='relative flex flex-col justify-center gap-y-1  w-6 h-5 cursor-pointer md:hidden'>
                        <div className={`relative w-full h-1 bg-primer transition-all duration-500 ${isMenuOpen ? 'top-2 -rotate-45' : ''} `}></div>
                        <div className={`w-full h-1 bg-primer transition-all duration-500 ${isMenuOpen ? ' -rotate-45' : ''} `}></div>
                        <div className={`relative w-full h-1 bg-primer transition-all duration-500 ${isMenuOpen ? '-top-2  rotate-45' : ''} `}></div>
                    </div>
                </div>
            </div>
            <div className={`md:hidden transition-all duration-500 bg-white w-full shadow-[0px_7px_5px_0px] shadow-primer overflow-auto max-h-0 ${isMenuOpen ? "max-h-screen p-5" : ""} flex flex-col items-center gap-y-6`}>
                <div>
                    <div onClick={toggleCategory} className='flex items-center justify-center mx-auto hover:text-primer'>
                        <h1>Categories</h1>
                        <i className={`text-sm font-light ${isCategoryOpen ?  "rotate-180" : ""}`}><FaArrowUp/></i>
                    </div>
                    <div className={`overflow-hidden transition-all duration-500 pt-3 ${isCategoryOpen ? "max-h-screen" : "max-h-0"}`}>
                        {Categories}
                    </div>
                </div>
                <SmallLinkStyle href='#'>Products</SmallLinkStyle>
                <SmallLinkStyle href='#'>About us</SmallLinkStyle>
                <div className='flex gap-x-5'>
                    <LinkStyle href='#'><FaRegUser /></LinkStyle>
                    <LinkStyle href='#'><FaShoppingCart /></LinkStyle>
                </div>
            </div>
        </div>
    )
}
