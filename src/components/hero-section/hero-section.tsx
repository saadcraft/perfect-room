"use client"
import react , {useEffect, useRef} from 'react'
import Image from "next/image"
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/splide/dist/css/splide.min.css';



export default function HeroSection() {

  const splideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    
  if (splideRef.current) {

    const calculatePerPage = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth < 768) {
          return 1;
        } else if (screenWidth < 992) {
          return 2;
        }
        return 3;
      };

  const splide = new Splide( splideRef.current, {
        type: 'loop',
        drag: 'free',
        perPage: calculatePerPage(),  // This will show 3 slides at once
        gap: '1rem', // Add some space between slides
        autoScroll: {
          speed: 4,
        },
        pagination: false,
        arrows: false,
        autoplay: true,
        interval: 3000,
  } );

splide.mount()

  const handleResize = () => {
    // Update perPage dynamically without destroying the instance
    splide.options = {
      ...splide.options,
      perPage: calculatePerPage()
    };
  };
  
  window.addEventListener('resize', handleResize);
  // Cleanup function to destroy Splide when component unmounts
  return () => {
    window.removeEventListener('resize', handleResize);
    splide.destroy();
  };
}

}, []);

  const image = ["/images/hero1.jpeg", "/images/hero2.jpeg", "/images/hero3.jpeg", "/images/hero4.jpeg", "/images/hero5.jpeg", "/images/hero6.jpeg", "/images/hero7.jpeg", "/images/hero8.jpeg"]

  const images = image.map((src, index) => {
      return (
        <li className="splide__slide" key={index}>
          <Image width={800} height={800} className="h-[500px] object-cover aspect-square" src={src} alt='hero photos'/>
        </li>
      )
  });

  return (
    <div className="bg-black w-screen h-screen">
        <div className="relative z-0 top-20 max-w-7xl animate-wiggle overflow-hidden mx-auto bg-black text-white"> 
            <div className="absolute z-10 right-2 w-2.5 h-full animate-pulse bg-pink-200 border-4 rounded-md border-pink-500 shadow-[0_0_10px_0] shadow-pink-500 "></div>
            <div className="absolute z-10 left-2 w-2.5 h-full animate-pulse bg-second border-4 rounded-md border-primer shadow-[0_0_20px_0] shadow-primer"></div>
            <div className="flex w-11/12 mx-auto whitespace-nowrap justify-center font-bold text-4xl lg:text-9xl  md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">POWER OF LED</div>
            <div ref={splideRef} className="relative w-11/12 mx-auto splide">
              <div className="splide__track">
                <ul className="splide__list">
                  {images}
                </ul>
              </div>
              <div className='absolute bottom-10 w-full text-center'>
                <button className='p-3 text-xl rounded-lg whitespace-nowrap trasition-all shadow-lg hover:bg-pink-600 hover:shadow-pink-200 shadow-violet-950 bg-primer'>Browse our Products</button>
              </div>
            </div>
        </div>
    </div>
  )
}
