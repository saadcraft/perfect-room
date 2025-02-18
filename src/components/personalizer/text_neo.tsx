"use client"

import React, { useEffect, useRef, useState } from "react";

// import Image from "next/image";
import { Lexend, Yellowtail, Tourney, Monoton } from "next/font/google";
import localFont from "next/font/local";

const lexend = Lexend({
    subsets: ["latin"],
    weight: "400",
    display: "swap",
});
const tourney = Tourney({
    subsets: ["latin"],
    weight: "400",
    display: "swap",
});

const monoton = Monoton({
    subsets: ["latin"],
    weight: "400",
    display: "swap",
});

const yellowtail = Yellowtail({
    subsets: ["latin"],
    weight: "400",
    display: "swap",
});
const juliusSansOne = localFont({
    src: "../../app/fonts/JuliusSansOne-Regular.ttf", // Path to your font file
    display: "swap",
});
const meowScript = localFont({
    src: "../../app/fonts/MeowScript-Regular.ttf", // Path to your font file
    display: "swap",
})

// const colors = [
//     { id: "blue", colors: ["#0800ff", "#cbc9ff"], label: "Blue" },
//     { id: "green", colors: ["#00ff44", "#dbffe5"], label: "Vert" },
//     { id: "red", colors: ["#ff000d", "#fcc2c5"], label: "Rouge" },
//     { id: "white", colors: ["#fff", "#fff"], label: "Blanc" },
//     { id: "yellow", colors: ["#fcdb03", "#fff3a3"], label: "Jaune" },
//     { id: "orange", colors: ["#ff9100", "#ffd296"], label: "Orange" },
//     { id: "pink", colors: ["#f200fa", "#fee6ff"], label: "Rose" },
// ]

export default function NeonSign() {
    const [text, setText] = useState("Custom Neon");
    const [textColor, setTextColor] = useState<string[]>(["#0800ff", "#cbc9ff"]);
    const [font, setFont] = useState<string>("Courier New");
    const [range, setRange] = useState<number>(5);
    const [svgHeight, setSvgHeight] = useState<number | null>(null); // State to store SVG height
    const [svgWidth, setSvgWidth] = useState<number | null>(null); // State to store SVG height
    const [count, setCount] = useState<number[]>([0, 0])
    const [fontSize, setFontSize] = useState<number>(50); // State for dynamic font size

    const svgRef = useRef<SVGSVGElement>(null); // Ref to the SVG element

    const l = ((count[1] * 8) / 96 * 2.54 * range);
    const h = ((count[0] * 5) / 96 * 2.54 * range);

    useEffect(() => {
        const handleResize = () => {
            if (svgRef.current) {
                const bbox = svgRef.current.getBBox();
                if (window.innerWidth < 768) {
                    setFontSize(25); // Smaller font size on small screens
                    setCount([bbox.height * 2.03, bbox.width * 2]);
                    setSvgHeight(bbox.height);
                    setSvgWidth(bbox.width);
                } else {
                    setFontSize(50); // Default font size on larger screens
                    setCount([bbox.height, bbox.width]);
                    setSvgHeight(bbox.height);
                    setSvgWidth(bbox.width);
                }
            };
        }

        // Initial check
        handleResize();

        // Add event listener for window resize
        window.addEventListener("resize", handleResize);

        // Cleanup event listener
        return () => window.removeEventListener("resize", handleResize);
    }, [text, font, range, textColor]);

    const fonts = {
        Courier: "Courier New",
        Tourney: tourney.className,
        JuliusSansOne: juliusSansOne.className,
        Yellowtail: yellowtail.className, // Google Font
        MeowScript: meowScript.className,
        Monoton: monoton.className,
        Lexend: lexend.className,
    };

    const calculateArea = () => {
        const lengthInMeters = (l || 0) / 100;
        const heightInMeters = (h || 0) / 100;
        console.log("mafhamt walo", lengthInMeters)
        console.log("mafhamt walo2", heightInMeters)
        return ((lengthInMeters * heightInMeters) * 6700).toFixed(2);
    };

    return (
        <div className="relative md:top-0 flex md:flex-row flex-col mb-2 items-start gap-4 md:justify-between min-h-screen md:p-4">
            <div className="relative w-full h-72 md:h-screen top-0">
                <div
                    className="fixed md:absolute z-40 top-20 bottom-0 right-0 left-0 rounded-b-2xl md:rounded-2xl w-full h-1/3 md:h-5/6 py-3"
                    style={{
                        backgroundImage: 'url(/images/wall.jpg)', // Set the background image
                        backgroundSize: 'cover', // Ensure the image covers the entire div
                        backgroundPosition: 'bottom', // Center the image
                        backgroundRepeat: 'no-repeat', // Prevent the image from repeating
                    }}
                >
                    {/* Transparent SVG Neon Text with Separate Glow Color */}
                    <div className="md:mt-20 mt-10 w-full overflow-auto">
                        <svg ref={svgRef} width={svgWidth ? svgWidth + 20 : "auto"} height={svgHeight ? svgHeight + 20 : "auto"} className="max-w-7xl mx-auto">
                            <defs>
                                <filter id="neon-glow">
                                    {/* Create the glow effect using a separate glow color */}
                                    <feDropShadow dx="0" dy="0" stdDeviation={5} floodColor={textColor[0]} />
                                </filter>
                            </defs>
                            <text
                                x="50%"
                                y="50%"
                                fontSize={fontSize}
                                textAnchor="middle"
                                dominantBaseline="middle"
                                fill={textColor[1]}
                                filter="url(#neon-glow)"
                                className="neon-text"
                                style={{ fontFamily: font }}
                            >
                                {text}
                            </text>
                        </svg>
                    </div>
                    <div className="absolute w-full md:bottom-40 bottom-0 p-4 flex items-end justify-between">
                        <div className="flex gap-3 pb-1.5 text-white md:text-lg text-sm">
                            <p className="text-center mt-4">L: {l.toFixed(2)}cm</p>
                            <p className="text-center mt-4">H: {h.toFixed(2)}cm</p>
                        </div>
                        <p className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500 font-bold text-lg md:text-3xl'>{calculateArea()} DA</p>
                    </div>
                </div>
            </div>
            {/* Controls */}
            <form className="relative md:top-10 pb-6 top-4 mb-2 flex flex-col rounded-2xl text-white items-center w-full md:w-auto gap-4 md:mt-6 bg-slate-800 px-4 py-2">
                {/* Text Input */}

                <p>Entre le text</p>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText((e.target.value))}
                    placeholder="Enter text"
                    className="text-black px-3 py-2 w-full rounded-md border border-gray-300"
                />

                {/* select color */}
                <p>sélectionné couleurs</p>
                <div className="grid md:grid-cols-3 grid-cols-4 gap-3">
                    <div>
                        <input type="radio" value="blue" id="blue" defaultChecked name="color" onChange={() => setTextColor(["#0800ff", "#cbc9ff"])} className="peer hidden" />
                        <label htmlFor="blue" className='w-14 flex items-center justify-center cursor-pointer border rounded-lg text-slate-400 peer-checked:text-[#0800ff] peer-checked:border-[#0800ff] p-2'> Blue</label>
                    </div>

                    <div>
                        <input type="radio" value="green" id="green" name="color" onChange={() => setTextColor(["#00ff44", "#dbffe5"])} className="peer hidden" />
                        <label htmlFor="green" className='w-14 flex items-center justify-center cursor-pointer border rounded-lg text-slate-400 peer-checked:text-[#00ff44] peer-checked:border-[#00ff44] p-2'> Vert</label>
                    </div>
                    <div>
                        <input type="radio" value="red" id="red" name="color" onChange={() => setTextColor(["#ff000d", "#fcc2c5"])} className="peer hidden" />
                        <label htmlFor="red" className='w-14 flex items-center justify-center cursor-pointer border rounded-lg text-slate-400 peer-checked:text-[#ff000d] text-nowrap peer-checked:border-[#ff000d] p-2'> Rouge</label>
                    </div>
                    <div>
                        <input type="radio" value="white" id="white" name="color" onChange={() => setTextColor(["#fff", "#fff"])} className="peer hidden" />
                        <label htmlFor="white" className='w-14 flex items-center justify-center cursor-pointer border rounded-lg text-slate-400 peer-checked:text-[#fff] text-nowrap peer-checked:border-[#fff] p-2'> blanc</label>
                    </div>
                    <div>
                        <input type="radio" value="yellow" id="yellow" name="color" onChange={() => setTextColor(["#fcdb03", "#fff3a3"])} className="peer hidden" />
                        <label htmlFor="yellow" className='w-14 flex items-center justify-center cursor-pointer border rounded-lg text-slate-400 peer-checked:text-[#fcdb03] text-nowrap peer-checked:border-[#fcdb03] p-2'> Jaune</label>
                    </div>
                    <div>
                        <input type="radio" value="orange" id="orange" name="color" onChange={() => setTextColor(["#ff9100", "#ffd296"])} className="peer hidden" />
                        <label htmlFor="orange" className='w-14 flex items-center justify-center cursor-pointer border rounded-lg text-slate-400 peer-checked:text-[#ff9100] text-nowrap peer-checked:border-[#ff9100] p-2'> Orange</label>
                    </div>
                    <div>
                        <input type="radio" value="pink" id="pink" name="color" onChange={() => setTextColor(["#f200fa", "#fee6ff"])} className="peer hidden" />
                        <label htmlFor="pink" className='w-14 flex items-center justify-center cursor-pointer border rounded-lg text-slate-400 peer-checked:text-[#f200fa] text-nowrap peer-checked:border-[#f200fa] p-2'> Rose</label>
                    </div>
                </div>

                <p>sélectionné matière</p>
                <div className="flex gap-2">
                    <div>
                        <input type="radio" value="pmma" id="pmma" name="materiel" className="peer hidden" />
                        <label htmlFor="pmma" className='w-14 flex items-center justify-center cursor-pointer border rounded-lg text-slate-400 peer-checked:text-indigo-500 text-nowrap peer-checked:border-indigo-500 p-2'> PMMA</label>
                    </div>
                    <div>
                        <input type="radio" value="forex" id="forex" name="materiel" className="peer hidden" />
                        <label htmlFor="forex" className='w-14 flex items-center justify-center cursor-pointer border rounded-lg text-slate-400 peer-checked:text-indigo-500 text-nowrap peer-checked:border-indigo-500 p-2'> Forex</label>
                    </div>
                </div>

                <p>sélectionné font</p>
                <select
                    className="text-black px-3 py-2 rounded-md border border-gray-300 w-full"
                    value={font}
                    onChange={(e) => setFont(e.target.value)}
                >
                    {Object.keys(fonts).map((fontName) => (
                        <option key={fontName} value={fontName}>
                            {fontName}
                        </option>
                    ))}
                </select>
                <p>sélection range</p>
                <input type="range" value={range} min={1} max={10} onChange={(e) => setRange(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mb-5 dark:bg-gray-700" />
                {/* Glow Intensity Slider */}

                <button className="bg-primer p-2 w-full rounded-lg hover:bg-second">Commander</button>

            </form>
        </div>
    );
}
