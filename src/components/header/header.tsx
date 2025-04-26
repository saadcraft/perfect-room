"use client"

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { LinkStyle, SmallLinkStyle } from '../style-component/link-style'
import { FaRegUser, FaShoppingCart, FaArrowUp } from 'react-icons/fa'
import { usePathname } from 'next/navigation'
import Category from './categories'
import { useCartStore } from '@/lib/store/cartStore';
import DropCart from '../dropdown/dropcart'
import LoadingFirst from '../loading'

export default function Header() {


    const pathname = usePathname();
    // const searchParams = useSearchParams();
    const { cart, removeFromCart } = useCartStore()
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false)
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    const closeAll = () => {
        setIsMenuOpen(false);
        setIsCategoryOpen(false);
    };
    const toggleMenu = () => isMenuOpen ? closeAll() : setIsMenuOpen(!isMenuOpen);
    const toggleCategory = () => setIsCategoryOpen(!isCategoryOpen);

    useEffect(() => {
        closeAll();
        if (isLoading) {
            setIsOpen(false);
            setIsLoading(false);
        }
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setIsOpen(false);
                setIsMenuOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const Categories = Object.entries(Category).map(([category, items], index) => {
        return (
            <div className='flex flex-col px-10 border-l-2' key={index}>
                <h1 className='text-gray-500 text-xl font-bold mb-2'>{category}</h1>
                {items.map(item => {
                    return (
                        <SmallLinkStyle href="#" key={item.id}>{item.name}</SmallLinkStyle>
                    )
                })}
            </div>
        );
    });

    return (
        <div ref={dropdownRef} className={`fixed z-50 w-full transition-all duration-400 ${isScrolled ? "bg-black shadow-[0px_7px_5px_0px] shadow-primer" : ""}`}>
            <div className='max-w-7xl px-5 mx-auto'>
                <div className='flex justify-between items-center'>
                    <LinkStyle href="./">
                        <Image className='w-20' width={100} height={100} src="/images/perfect.png" alt="Perfect-room Logo" />
                    </LinkStyle>
                    {/* <div>
                        <input type='text' name='search' placeholder='Search 🔍' className='outline-offset-1 shadow-[inset_0_2px_2px_0] shadow-indigo-600 p-2 bg-black text-white border w-40 md:w-60 rounded-lg' />
                    </div> */}
                    <div className='md:flex gap-5 items-center hidden'>
                        <LinkStyle href="/">Home</LinkStyle>
                        <div onMouseEnter={toggleCategory} onMouseLeave={closeAll} className='group'>
                            <div className='flex items-center transition-all duration-500 gap-1 cursor-pointer font-semibold text-lg text-white group-hover:text-primer'>
                                <p>Categories</p>
                                <i className='text-sm transition-transform group-hover:rotate-180'><FaArrowUp /></i>
                            </div>
                            <div className={`fixed z-50 top-10 left-0 right-0 transition-all px-10 overflow-hidden ${isCategoryOpen ? 'max-h-full pb-10' : 'max-h-0'}`}>
                                <div className='grid lg:grid-cols-6 grid-cols-3 max-w-7xl rounded-lg shadow-md bg-black shadow-primer mt-9 py-10 px-10 mx-auto'>
                                    {Categories}
                                </div>
                            </div>
                        </div>
                        <LinkStyle href="/products">Products</LinkStyle>
                        <LinkStyle href="#">About us</LinkStyle>
                        <LinkStyle href="/#faq">FAQ</LinkStyle>
                    </div>
                    <div className='md:flex items-center gap-3 hidden'>
                        <LinkStyle href='#'>
                            <div className='bg-primer px-5 py-2 hover:bg-white transition-all rounded-xl'>
                                <FaRegUser />
                            </div>
                        </LinkStyle>
                        <div className='relative'>
                            <div onClick={() => setIsOpen(pre => !pre)} className='relative border-2 text-white cursor-pointer border-white px-2 py-2 hover:text-primer hover:border-primer transition-all rounded-xl'>
                                {cart.length !== 0 &&
                                    <span className='absolute z-50 -top-2 -right-2 bg-primer w-5 h-5 rounded-full flex justify-center items-center text-white'>{cart.length}</span>
                                }
                                <FaShoppingCart />
                            </div>
                            <div className={`absolute right-0 mt-4 w-80 bg-neutral-900 rounded-xl shadow-primer shadow-sm z-50 transform transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
                                }`}>
                                <DropCart cart={cart} onRemoveItem={removeFromCart} load={() => setIsLoading(true)} />
                            </div>
                        </div>
                    </div>
                    <div onClick={toggleMenu} className='relative flex flex-col justify-center gap-y-1  w-6 h-5 cursor-pointer md:hidden'>
                        <div className={`relative w-full h-1 bg-primer transition-all duration-500 ${isMenuOpen ? 'top-2 -rotate-45' : ''} `}></div>
                        <div className={`w-full h-1 bg-primer transition-all duration-500 ${isMenuOpen ? ' -rotate-45' : ''} `}></div>
                        <div className={`relative w-full h-1 bg-primer transition-all duration-500 ${isMenuOpen ? '-top-2  rotate-45' : ''} `}></div>
                    </div>
                </div>
            </div>
            <div className={`md:hidden transition-all duration-500 bg-black w-full shadow-[0px_7px_5px_0px] shadow-primer overflow-auto max-h-0 ${isMenuOpen ? "max-h-screen p-5" : ""} flex flex-col items-center gap-y-6`}>
                <div>
                    <div onClick={toggleCategory} className='flex items-center justify-center text-white mx-auto hover:text-primer'>
                        <h1>Categories</h1>
                        <i className={`text-sm font-light ${isCategoryOpen ? "rotate-180" : ""}`}><FaArrowUp /></i>
                    </div>
                    <div className={`overflow-hidden transition-all duration-500 pt-3 ${isCategoryOpen ? "max-h-[1000px]" : "max-h-0"}`}>
                        {Categories}
                    </div>
                </div>
                <SmallLinkStyle href='/products'>Products</SmallLinkStyle>
                <SmallLinkStyle href='#'>About us</SmallLinkStyle>
                <SmallLinkStyle href='/#faq'>FAQ</SmallLinkStyle>
                <div className='flex gap-x-5 items-center'>
                    <LinkStyle href='#'>
                        <div className='bg-primer px-5 py-2 hover:bg-white transition-all rounded-xl'>
                            <FaRegUser />
                        </div>
                    </LinkStyle>
                    <LinkStyle href='#'>
                        <div className='relative border-2 border-white px-2 py-2 hover:border-primer transition-all rounded-xl'>
                            <span className='absolute z-50 -top-2 -right-2 bg-primer w-5 h-5 rounded-full flex justify-center items-center text-white'>2</span>
                            <FaShoppingCart />
                        </div>
                    </LinkStyle>
                </div>
            </div>
            {isLoading &&

                <LoadingFirst />

            }
        </div>
    )
}
