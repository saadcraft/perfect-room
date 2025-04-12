"use client"

import React, { useEffect, useState } from 'react'
import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';
import Image from "next/image";
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { handleInputNumChange } from '@/lib/tools/tool'

export default function SingleProduct({ product }: { product: Products }) {

    console.log(product)

    console.log(((product.rate ? product.rate : 0) * 100) / 5)

    const [count, setCount] = useState(1);

    const handleIncrement = () => setCount(preCount => preCount + 1);
    const handleDecrement = () => {
        if (count > 1) {
            setCount(preCount => preCount - 1);
        }
    }
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleInputNumChange(e)
        const value = Number(e.target.value);
        if (!isNaN(value) && value > 0) {
            setCount(value);
        }
    }

    useEffect(() => {

        const main = new Splide('#main-slider', {
            type: 'fade',
            heightRatio: 0.8,
            pagination: false,
        });
        const thumbnails = new Splide('#thumbnail-slider', {
            rewind: true,
            fixedWidth: 80,
            fixedHeight: 80,
            isNavigation: true,
            gap: 10,
            focus: 'center',
            pagination: false,
            cover: true,
            arrows: false,
            dragMinThreshold: {
                mouse: 4,
                touch: 10,
            },
            breakpoints: {
                640: {
                    fixedWidth: 66,
                    fixedHeight: 66,
                },
            },
        });

        main.sync(thumbnails);
        main.mount();
        thumbnails.mount();

    }, [])

    return (
        <div className="pt-20">
            <div className='max-w-7xl mr-auto ml-auto py-10 px-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                    <div>
                        <div className="splide" id="main-slider">
                            <div className="splide__track">
                                <ul className="splide__list">
                                    {product.images.map((pre, index) => {
                                        return (
                                            <li key={index} className="splide__slide bg-forth">
                                                <Image width={500} height={500} src={`${process.env.IMGS_DOMAIN}${pre}`} alt="" className='w-full h-full object-contain' />
                                            </li>
                                        )
                                    })
                                    }
                                </ul>
                            </div>
                        </div>
                        <div id="thumbnail-slider" className="splide">
                            <div className="splide__track">
                                <ul className="splide__list opacity-50">
                                    {product.images.map((pre, index) => {
                                        return (
                                            <li key={index} className="splide__slide bg-forth">
                                                <Image width={500} height={500} src={`${process.env.IMGS_DOMAIN}${pre}`} alt="" className='w-full h-full object-contain' />
                                            </li>
                                        )
                                    })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='grid md:grid-rows-3 text-white'>
                        <div>
                            <h1 className='text-xl font-semibold line-clamp-5'>{product.title}</h1>
                            <div className='flex flex-col items-left gap-x-2 md:flex-row md:items-center'>
                                <div>
                                    <p className='text-white text-2xl'>★★★★★</p>
                                </div>
                                <div className='absolute'>
                                    <div className='overflow-hidden' style={{ width: `${((product.rate ? product.rate : 0) * 100) / 5}%` }}>
                                        <p className='text-primer text-2xl'>★★★★★</p>
                                    </div>
                                </div>
                                <div className='flex gap-2'>
                                    {product.rate}
                                    <p className='text-slate-400'>({`3`} costumer reviews)</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex'>
                            <p className='text-slate-400'>Brand:</p>perfect
                        </div>
                        <div>
                            <span className='flex items-end'>
                                <p className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500 font-bold text-2xl'>{product.promotion ? (product.lowPrice - ((product.lowPrice * product.promotion / 100))) : product.lowPrice} DA</p>
                                {product.promotion || product.promotion === 0 ?
                                    <p className='text-white line-through'>{product.lowPrice} DA</p> : null
                                }
                            </span>
                        </div>
                        <div className='flex flex-wrap items-center gap-2'>
                            {product.variants.some(variant => 'reference' in variant) &&
                                <>
                                    Réferance :
                                    {product.variants.map((pre, index) => {
                                        return (
                                            <div key={index}>
                                                <input type="radio" value={pre._id} id={pre.reference} defaultChecked name="color" className="peer hidden" />
                                                <label htmlFor={pre.reference} className='flex items-center justify-center cursor-pointer border rounded-lg text-slate-400 peer-checked:text-primer peer-checked:border-primer p-2'> {pre.reference}</label>
                                            </div>
                                        )
                                    })

                                    }
                                </>
                            }
                        </div>
                        <div className='flex flex-wrap items-center gap-2'>
                            {product.variants.some(variant => 'color' in variant) &&
                                <>
                                    Color :
                                    {product.variants.map((pre, index) => {
                                        return (
                                            <div key={index}>
                                                <input type="radio" value={pre._id} id={pre.color} defaultChecked name="color" className="peer hidden" />
                                                <label htmlFor={pre.color} className='flex items-center justify-center cursor-pointer border rounded-lg text-slate-400 peer-checked:text-primer peer-checked:border-primer p-2'> {pre.color}</label>
                                            </div>
                                        )
                                    })

                                    }
                                </>
                            }
                        </div>
                        <div className='flex flex-wrap items-center gap-2'>
                            {product.variants.some(variant => 'resolution' in variant) &&
                                <>
                                    Color :
                                    {product.variants.map((pre, index) => {
                                        return (
                                            <div key={index}>
                                                <input type="radio" value={pre._id} id={pre.resolution} defaultChecked name="color" className="peer hidden" />
                                                <label htmlFor={pre.resolution} className='flex items-center justify-center cursor-pointer border rounded-lg text-slate-400 peer-checked:text-primer peer-checked:border-primer p-2'> {pre.resolution}</label>
                                            </div>
                                        )
                                    })

                                    }
                                </>
                            }
                        </div>
                        <div className="flex items-center gap-x-2">
                            <span className="text-white bg-second rounded-md p-2 hover:text-third cursor-pointer">
                                <FaHeart />
                            </span>
                            <p className='text-slate-400'>Wishlist</p>
                        </div>
                        <div className='flex items-center mt-2 gap-x-3'>
                            <div className="py-2 px-3 bg-white border border-gray-200 rounded-lg">
                                <div className="flex items-center justify-center gap-x-1.5">
                                    <button
                                        className="size-6 text-sm font-medium rounded-md border border-gray-200 text-gray-800 shadow-sm hover:bg-gray-50"
                                        onClick={handleDecrement}
                                    >
                                        -
                                    </button>
                                    <input type="text" className="p-0 w-6 bg-transparent border-0 text-gray-800 focus:ring-0 text-center" value={count} onChange={handleInputChange} />
                                    <button
                                        className="size-6 text-sm font-medium rounded-md border border-gray-200 text-gray-800 shadow-sm hover:bg-gray-50"
                                        onClick={handleIncrement}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                            <p className='text-slate-400'>available</p>
                        </div>
                        <div className='flex mt-5 gap-3 items-end'>
                            <button className='bg-primer border-0 rounded-lg py-2 px-5 text-white hover:bg-third hover:shadow-lg'>Buy Now</button>
                            <button className='bg-second border-0 rounded-lg py-2 px-5 text-white hover:text-primer hover:shadow-lg text-2xl'><FaShoppingCart /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
