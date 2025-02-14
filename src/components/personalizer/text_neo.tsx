"use client"

import React, { useEffect, useRef, useState } from "react";

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

export default function NeonSign() {
    const [text, setText] = useState("Custom Neon");
    const [textColor, setTextColor] = useState<string[]>(["#0800ff", "#cbc9ff"]);
    const [font, setFont] = useState<string>("Courier New");
    const [range, setRange] = useState<number>(10);
    const [svgHeight, setSvgHeight] = useState<number | string>("auto"); // State to store SVG height
    const [svgWidth, setSvgWidth] = useState<number | string>("auto"); // State to store SVG height

    const svgRef = useRef<SVGSVGElement>(null); // Ref to the SVG element

    const fonts = {
        Courier: "Courier New",
        Tourney: tourney.className,
        JuliusSansOne: juliusSansOne.className,
        Yellowtail: yellowtail.className, // Google Font
        MeowScript: meowScript.className,
        Monoton: monoton.className,
        Lexend: lexend.className,
    };

    useEffect(() => {
        if (svgRef.current) {
            const bbox = svgRef.current.getBBox();
            setSvgHeight(bbox.height);
            setSvgWidth(bbox.width);
        }
    }, [text, font, range]);

    return (
        <div className="relative top-20 md:top-0 flex md:flex-row flex-col items-center gap-4 md:justify-between min-h-screen p-4">
            <div className="md:w-2/3 w-full">
                {/* Transparent SVG Neon Text with Separate Glow Color */}
                <div className="md:-top-20 w-full mx-auto overflow-auto">
                    <svg ref={svgRef} width={Number(svgWidth) + 20 || "auto"} height={Number(svgHeight) + 20 || "auto"} className="max-w-7xl mx-auto">
                        <defs>
                            <filter id="neon-glow">
                                {/* Create the glow effect using a separate glow color */}
                                <feDropShadow dx="0" dy="0" stdDeviation={10} floodColor={textColor[0]} />
                            </filter>
                        </defs>
                        <text
                            x="50%"
                            y="50%"
                            fontSize="50"
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
                <div className="text-white">
                    <p className="text-center mt-4">Largeur: {((Number(svgWidth) * 9) / 96 * 2.54 * range).toFixed(2)}cm</p>
                    <p className="text-center mt-4">Hauteur: {((Number(svgHeight) * 6) / 96 * 2.54 * range).toFixed(2)}cm</p>
                </div>
            </div>
            {/* Controls */}
            <form className="flex flex-col text-white items-center gap-7 mt-6">
                {/* Text Input */}

                <p>Entre le text</p>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter text"
                    className="text-black px-3 py-2 rounded-md border border-gray-300"
                />

                {/* select color */}
                <p>sélection couleurs</p>
                <div className="grid grid-cols-3 gap-y-6">
                    <div>
                        <input type="radio" value="blue" id="blue" defaultChecked name="color" onChange={() => setTextColor(["#0800ff", "#cbc9ff"])} className="peer hidden" />
                        <label htmlFor="blue" className='w-24 cursor-pointer border rounded-lg text-slate-400 peer-checked:text-[#0800ff] peer-checked:border-[#0800ff] p-2'> Blue</label>
                    </div>

                    <div>
                        <input type="radio" value="green" id="green" name="color" onChange={() => setTextColor(["#00ff44", "#dbffe5"])} className="peer hidden" />
                        <label htmlFor="green" className='h-2 w-11 cursor-pointer border rounded-lg text-slate-400 peer-checked:text-[#00ff44] peer-checked:border-[#00ff44] p-2'> Vert</label>
                    </div>
                    <div>
                        <input type="radio" value="red" id="red" name="color" onChange={() => setTextColor(["#ff000d", "#fcc2c5"])} className="peer hidden" />
                        <label htmlFor="red" className='cursor-pointer border rounded-lg text-slate-400 peer-checked:text-[#ff000d] text-nowrap peer-checked:border-[#ff000d] p-2'> Rouge</label>
                    </div>
                    <div>
                        <input type="radio" value="white" id="white" name="color" onChange={() => setTextColor(["#fff", "#fff"])} className="peer hidden" />
                        <label htmlFor="white" className='cursor-pointer border rounded-lg text-slate-400 peer-checked:text-[#fff] text-nowrap peer-checked:border-[#fff] p-2'> blanc</label>
                    </div>
                    <div>
                        <input type="radio" value="yellow" id="yellow" name="color" onChange={() => setTextColor(["#fcdb03", "#fff3a3"])} className="peer hidden" />
                        <label htmlFor="yellow" className='cursor-pointer border rounded-lg text-slate-400 peer-checked:text-[#fcdb03] text-nowrap peer-checked:border-[#fcdb03] p-2'> Jaune</label>
                    </div>
                    <div>
                        <input type="radio" value="orange" id="orange" name="color" onChange={() => setTextColor(["#ff9100", "#ffd296"])} className="peer hidden" />
                        <label htmlFor="orange" className='cursor-pointer border rounded-lg text-slate-400 peer-checked:text-[#ff9100] text-nowrap peer-checked:border-[#ff9100] p-2'> Orange</label>
                    </div>
                    <div>
                        <input type="radio" value="pink" id="pink" name="color" onChange={() => setTextColor(["#f200fa", "#fee6ff"])} className="peer hidden" />
                        <label htmlFor="pink" className='cursor-pointer border rounded-lg text-slate-400 peer-checked:text-[#f200fa] text-nowrap peer-checked:border-[#f200fa] p-2'> Rose</label>
                    </div>
                </div>

                <p>sélection font</p>
                <select
                    className="text-black px-3 py-2 rounded-md border border-gray-300"
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
                <input type="range" value={range} onChange={(e) => setRange(Number(e.target.value) || 1)} />
                {/* Glow Intensity Slider */}

            </form>
        </div>
    );
}
