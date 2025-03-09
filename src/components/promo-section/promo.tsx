'use client'

import React, { useEffect } from 'react'
import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';
import Product from './products-promo';
import Image from 'next/image';
import Link from 'next/link';
import { FaStar, FaShoppingCart } from "react-icons/fa"
import { MdOutlineSell } from "react-icons/md"

export default function Promo() {

  useEffect(() => {

    const createSplide = () => {
      const screenWidth = window.innerWidth;
      let perPage = 4;

      if (screenWidth < 560) {
        perPage = 1;
      } else if (screenWidth < 850) {
        perPage = 2;
      } else if (screenWidth < 1150) {
        perPage = 3;
      }

      return new Splide('#splide', {
        perPage: perPage,
        type: 'loop',
        autoplay: true,
        arrows: false,
        gap: 30,
      }).mount();
    };

    let splide = createSplide();

    const handleResize = () => {
      splide.destroy(); // Destroy the current instance
      splide = createSplide(); // Recreate with updated settings
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      splide.destroy(); // Clean up on unmount
    };

  }, []);

  const mappedPromo = Product.map((pre, index) => {
    console.log(pre.product_photo);
    return (
      <li className="splide__slide bg-opacity-30 bg-second py-5 rounded-lg" key={index}>
        <span className='absolute text-white font-bold flex items-center justify-center top-1 left-1 bg-primer rounded-full h-10 w-10'>-{pre.promotion}%</span>
        <div className='slide_carte'>
          <div>
            <Link href='#'>
              <Image width={200} height={200} src={pre.product_photo} alt='' className='object-scale-down w-full h-60' />
            </Link>
            <div className='grid grid-rows-[50px_minmax(0px,_1fr)] pt-5 px-5'>
              <p className='text-white text-md font-bold overflow-hidden text-ellipsis line-clamp-2'>{pre.name}</p>
              <div>
                <div className='flex items-end'>
                  <p className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500 font-bold text-2xl'>{pre.price - (pre.price * pre.promotion / 100)} {pre.currency}</p>
                  <p className='text-white line-through'>{pre.price} {pre.currency}</p>
                </div>
                <div className='flex justify-between pt-2'>
                  <p className='flex items-center text-white gap-1 text-xl font-bold'><FaStar className='text-primer' /> {pre.star_rating}</p>
                  <div className='flex items-center gap-2'>
                    <span className='bg-primer text-2xl text-white p-2 rounded-md cursor-pointer hover:bg-second'><FaShoppingCart /></span>
                    <Link href="#" className='flex gap-1 items-end bg-primer text-white font-bold text-xl rounded-md p-2 hover:bg-second'>Buy now <MdOutlineSell /></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    )
  })

  return (
    <div className='relative max-w-7xl mx-auto mt-20 py-20'>
      <div className='text-white flex items-center gap-2 pb-20'>
        <div className='text-2xl font-bold whitespace-nowrap'>Our Promotion - until -40%</div>
        <div className='h-0.5 w-full bg-white'></div>
      </div>
      <div id="splide" className='splide pb-20 px-5'>
        <div className="splide__track">
          <ul className="splide__list">
            {mappedPromo}
          </ul>
        </div>
      </div>
    </div>
  )
}
