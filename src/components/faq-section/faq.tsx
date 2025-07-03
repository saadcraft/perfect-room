"use client"

import React, {useState} from 'react'
import Questions from './question';

export default function Faq() {

    const [isFaqOpen, setIsFaqOpen] = useState(Array(Questions.length).fill(false));

    function handleClick(index: number) {
        setIsFaqOpen((prevExpanded) => prevExpanded.map((isExpanded, i) => (i === index ? !isExpanded : isExpanded))
        );
    }

    const Faq = Questions.map((faq , index) => {
        return (
            <div onClick={() => handleClick(index)} className={`tansition-all duration-300 border border-solid ${isFaqOpen[index] ? 'border-primer' : 'border-slate-300'}  rounded-lg py-3.5 px-5 text-white`} key={index}>
                <div className='cursor-pointer flex justify-between items-center'>
                    <p>{faq.req}</p>
                    <div className='relative flex justify-center items-center w-3.5 h-3.5'>
                        <div className='bg-primer w-full h-1'></div>
                        <div className={`bg-primer w-1 h-full absolute transition-all ${isFaqOpen[index] ? 'rotate-90' : ''}`}></div>
                    </div>
                </div>
                <p className={`transition-all duration-500 text-sm overflow-hidden ${isFaqOpen[index] ? "max-h-screen mt-2" : "max-h-0"}`}>{faq.res}</p>
            </div>
        )
    })

  return (
    <div id="faq" className='py-24 px-10 max-w-7xl mx-auto'>
        <h1 className='text-center text-4xl text-white font-semibold mb-20'>Retailers Experience</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-5 items-start'>
            {Faq}
        </div>
    </div>
  )
}
