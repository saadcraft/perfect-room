import Link from 'next/link'
import Image from 'next/image';
import React from 'react'
import { FaShoppingCart, FaStar } from 'react-icons/fa';
import { MdOutlineSell } from 'react-icons/md';

export default function Products() {
  return (
    <div className='relative max-w-7xl mx-auto top-20 py-20'>
      <div className='text-white flex items-center gap-2 pb-20'>
        <ul className='grid lg:grid-cols-4 md:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-4 p-3 w-full justify-center'>
          <li className="relative bg-opacity-30 bg-second py-5 rounded-lg">
            <span className='absolute text-white font-bold flex items-center top-1 left-1 bg-primer justify-center rounded-full h-10 w-10'>-5%</span>
            <div className='slide_carte'>
              <div>
                <Link href='#'>
                  <Image width={200} height={200} src="/images/promos/promo8.jpg" alt='' className='object-scale-down w-full h-60' />
                </Link>
                <div className='grid grid-rows-[50px_minmax(0px,_1fr)] pt-5 px-5'>
                  <Link href={`#`} className='transition-all text-white text-md font-bold line-clamp-2 text-sm overflow-hidden text-ellipsis hover:text-primer'>
                    Led test1
                  </Link>
                  <div>
                    <div className='flex items-end'>
                      <p className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500 font-bold text-2xl'>2000 DA</p>
                      <p className='text-white line-through'>2500 DA</p>
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
          <li className="relative bg-opacity-30 bg-second py-5 rounded-lg">
            <span className='absolute text-white font-bold flex items-center top-1 left-1 bg-primer justify-center rounded-full h-10 w-10'>-5%</span>
            <div className='slide_carte'>
              <div>
                <Link href='#'>
                  <Image width={200} height={200} src="/images/promos/promo8.jpg" alt='' className='object-scale-down p w-full h-60' />
                </Link>
                <div className='grid grid-rows-[50px_minmax(0px,_1fr)] pt-5 px-5'>
                  <Link href={`#`} className='transition-all text-white text-md font-bold line-clamp-2 text-sm overflow-hidden text-ellipsis hover:text-primer'>
                    Led test1
                  </Link>
                  <div>
                    <div className='flex items-end'>
                      <p className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500 font-bold text-2xl'>2000 DA</p>
                      <p className='text-white line-through'>2500 DA</p>
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
          <li className="relative bg-opacity-30 bg-second py-5 rounded-lg">
            {/* <span className='absolute text-white font-bold flex items-center top-1 left-1 bg-primer justify-center rounded-full h-10 w-10'>-5%</span> */}
            <div className='slide_carte'>
              <div>
                <Link href='#'>
                  <Image width={200} height={200} src="/images/promos/promo8.jpg" alt='' className='object-scale-down p w-full h-60' />
                </Link>
                <div className='grid grid-rows-[50px_minmax(0px,_1fr)] pt-5 px-5'>
                  <Link href={`#`} className='transition-all text-white text-md font-bold line-clamp-2 text-sm overflow-hidden text-ellipsis hover:text-primer'>
                    Led test1
                  </Link>
                  <div>
                    <div className='flex items-end'>
                      <p className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500 font-bold text-2xl'>2000 DA</p>
                      <p className='text-white line-through'>2500 DA</p>
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
          <li className="relative bg-opacity-30 bg-second py-5 rounded-lg">
            <span className='absolute text-white font-bold flex items-center top-1 left-1 bg-primer justify-center rounded-full h-10 w-10'>-5%</span>
            <div className='slide_carte'>
              <div>
                <Link href='#'>
                  <Image width={200} height={200} src="/images/promos/promo8.jpg" alt='' className='object-scale-down p w-full h-60' />
                </Link>
                <div className='grid grid-rows-[50px_minmax(0px,_1fr)] pt-5 px-5'>
                  <Link href={`#`} className='transition-all text-white text-md font-bold line-clamp-2 text-sm overflow-hidden text-ellipsis hover:text-primer'>
                    Led test1
                  </Link>
                  <div>
                    <div className='flex items-end'>
                      <p className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500 font-bold text-2xl'>2000 DA</p>
                      <p className='text-white line-through'>2500 DA</p>
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
