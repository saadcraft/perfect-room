import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { SmallLinkStyle } from '../style-component/link-style'

export default function Footer() {
  return (
    <div className='border-t'>
        <div className='max-w-7xl mx-auto pt-16 pb-5 px-5'>
            <div className='flex items-center md:items-start flex-col md:flex-row justify-between gap-y-14 text-center md:text-left'>
                <div className='w-full max-w-80 text-white'>
                    <Link href="#" className='flex justify-center md:justify-start'>
                        <Image width={100} height={100} src="/images/perfect.png" alt="Perfect-room Logo" className='py-4 w-32'/>
                    </Link>
                    <p>Notre mission est de vous offrir des néons de la meilleure qualité au meilleur prix en Algérie</p>
                </div>
                <div className='grid grid-cols-3 md:gap-x-20 md:gap-y-20 gap-x-6 gap-y-6'>
                    <div className='flex flex-col'>
                        <div className='text-slate-400 text-sm font-light mb-3'>General</div>
                        <SmallLinkStyle href='#'>Home</SmallLinkStyle>
                        <SmallLinkStyle href='#'>Products</SmallLinkStyle>
                        <SmallLinkStyle href='#'>Account</SmallLinkStyle>
                        <SmallLinkStyle href='#'>Reviews</SmallLinkStyle>
                        <SmallLinkStyle href='#'>Questions</SmallLinkStyle>
                    </div>
                    <div className='flex flex-col'>
                        <div className='text-slate-400 text-sm font-light mb-3'>Categories</div>
                        <SmallLinkStyle href='#'>Foods</SmallLinkStyle>
                        <SmallLinkStyle href='#'>Fêtes</SmallLinkStyle>
                        <SmallLinkStyle href='#'>Médical</SmallLinkStyle>
                        <SmallLinkStyle href='#'>Beauty</SmallLinkStyle>
                        <SmallLinkStyle href='#'>Sport</SmallLinkStyle>
                        <SmallLinkStyle href='#'>Gaming</SmallLinkStyle>
                    </div>
                    <div className='flex flex-col'>
                        <div className='text-slate-400 text-sm font-light mb-3'>Support</div>
                        <SmallLinkStyle href="#">Help center</SmallLinkStyle>
                    </div>
                </div>
            </div>
            <div className='border-t flex justify-between items-center flex-col sm:flex-row pt-6 mt-14'>
                <p className='text-slate-400 font-light text-sm'>© 2024 - Perfect-room. All rights reserved</p>
                <div className='flex items-center justify-start gap-x-3 gap-y-3 text-slate-400 font-light text-sm'>
                    <Link href="#">Privacy Policy</Link>
                    <p>|</p>
                    <Link href="#">Terms & Conditions</Link>
                </div>
            </div>
        </div>
    </div>
  )
}
