import Link from 'next/link'
import Image from 'next/image';
import React from 'react'
import { FaShoppingCart, FaStar } from 'react-icons/fa';
import { MdOutlineSell } from 'react-icons/md';
import Search from './options/search';

export default function Products({ products }: { products: Products[] }) {

  // console.log(process.env.IMGS_DOMAIN)
  return (
    <div className='relative max-w-fit mx-auto top-20 py-20 pb-40'>
      <div className='flex flex-col md:flex-row gap-6 text-white'>
        <div>
          <Search />
        </div>
        <ul className='flex flex-wrap gap-4 p-3 w-full justify-center'>
          {products.map((pre, index) => {
            return (
              <li key={index} className="group relative bg-opacity-30 bg-second py-5 rounded-lg overflow-hidden shadow-lg transition-all hover:shadow-xl cursor-pointer">
                <span className='absolute z-30 text-white font-bold flex items-center top-1 left-1 bg-primer justify-center rounded-full h-10 w-10'>-5%</span>
                <div>
                  <div>
                    <Link href={`products/${pre._id}`} className='flex justify-center relative w-60 h-60 mx-auto overflow-hidden'>
                      <Image width={200} height={200} src={`${process.env.IMGS_DOMAIN}${pre.primaryImage}`} alt='' className='object-cover transition-all group-hover:scale-110' />
                      <span className="absolute inset-0 flex items-center justify-center text-white text-sm opacity-0 group-hover:opacity-100 transition duration-300">
                        <h1 className='rounded-2xl bg-primer text-md py-2 px-1.5'>View Product</h1>
                      </span>
                    </Link>
                    <div className='grid grid-rows-[50px_minmax(0px,_1fr)] pt-5 px-5'>
                      <Link href={`#`} className='transition-all text-white text-md font-bold line-clamp-2 text-sm overflow-hidden text-ellipsis hover:text-primer'>
                        {pre.title}
                      </Link>
                      <div>
                        <div className='flex items-end'>
                          <p className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500 font-bold text-2xl'>{pre.lowPrice} DA</p>
                          <p className='text-white line-through'>25000 DA</p>
                        </div>
                        <div className='flex justify-between gap-3 pt-2'>
                          <p className='flex items-center text-white gap-1 text-xl font-bold'><FaStar className='text-primer' /> 4.7</p>
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
          })}
        </ul>
        {/* <section className="flex flex-col shadow-lg rounded-lg">
          <Link href={`#`} className="bg-forth">
            <Image width={100} height={100} src="/images/promos/promo8.jpg" alt="" className="object-scale-down w-full h-60" />
          </Link>

          <Link href={`#`} className="transition-all text-white text-md font-bold line-clamp-2 text-sm overflow-hidden text-ellipsis hover:text-primer">
            Produit ta3 ch3ar dayar ki chkoupi
          </Link>
          <div className='flex items-end'>
            <p className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500 font-bold text-2xl'>2000 DA</p>
            <p className='text-white line-through'>2500 DA</p>
          </div>
          <div className="flex justify-between mt-3 px-5 pb-2">
            <div className="flex items-center">
              <FaStar className="text-primer" />
              <p className="text-slate-500">4.7</p>
            </div>
            <div className='flex justify-between gap-3 pt-2'>
              {/* <p className='flex items-center text-white gap-1 text-xl font-bold'><FaStar className='text-primer' /> 4.7</p> */}
        {/* <div className='flex items-center gap-2'>
            <span className='bg-primer text-2xl text-white p-2 rounded-md cursor-pointer hover:bg-second'><FaShoppingCart /></span>
            <Link href="#" className='flex gap-1 items-end bg-primer text-white font-bold text-xl rounded-md p-2 hover:bg-second'>Buy now <MdOutlineSell /></Link>
          </div>
      </div>
    </div>
        </section > */}
      </div >
    </div >
  )
}
