"use client"

import React, { useEffect, useRef, useState } from "react";

import { Lexend, Yellowtail, Tourney, Monoton } from "next/font/google";
import localFont from "next/font/local";
import toast from "react-hot-toast";

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
    const [count, setCount] = useState<number[]>([0, 0])
    const [fontSize, setFontSize] = useState<number>(50); // State for dynamic font size

    const svgRef = useRef<SVGSVGElement>(null); // Ref to the SVG element

    useEffect(() => {
        const handleResize = () => {
            if (svgRef.current) {
                const bbox = svgRef.current.getBBox();
                if (window.innerWidth < 768) {
                    setFontSize(25); // Smaller font size on small screens
                    setCount([bbox.height * 2.03, bbox.width * 2]);
                } else {
                    setFontSize(50); // Default font size on larger screens
                    setCount([bbox.height, bbox.width]);
                }
            };
        }

        // Initial check
        handleResize();

        // Add event listener for window resize
        window.addEventListener("resize", handleResize);

        // Cleanup event listener
        return () => window.removeEventListener("resize", handleResize);
    }, [text, font, range]);

    const fonts = {
        Courier: "Courier New",
        Tourney: tourney.className,
        JuliusSansOne: juliusSansOne.className,
        Yellowtail: yellowtail.className, // Google Font
        MeowScript: meowScript.className,
        Monoton: monoton.className,
        Lexend: lexend.className,
    };

    return (
        <div className="relative md:top-0 flex md:flex-row flex-col items-center gap-4 md:justify-between min-h-screen md:p-4">
            <div className="fixed md:relative z-40 md:w-2/3 w-full h-1/3 md:h-auto md:mt-20 mt-16 bg-black py-3">
                {/* Transparent SVG Neon Text with Separate Glow Color */}
                <div className="w-full md:-mt-44 mt-5 mx-auto overflow-auto">
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
                <p className='absolute bottom-3 right-3 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500 font-bold text-2xl'>1000 DA</p>
                <div className="absolute left-3 bottom-3 flex gap-3 text-white">
                    <p className="text-center mt-4">L: {((count[1] * 9) / 96 * 2.54 * range).toFixed(2)}cm</p>
                    <p className="text-center mt-4">H: {((count[0] * 6) / 96 * 2.54 * range).toFixed(2)}cm</p>
                </div>
            </div>
            {/* Controls */}
            <form className="mt-72 flex flex-col text-white items-center gap-7 md:mt-6">
                {/* Text Input */}

                <p>Entre le text</p>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText((e.target.value))}
                    placeholder="Enter text"
                    className="text-black px-3 py-2 rounded-md border border-gray-300"
                />

                {/* select color */}
                <p>sélection couleurs</p>
                <div className="grid grid-cols-3 gap-y-6">
                    {[
                        { id: "blue", colors: ["#0800ff", "#cbc9ff"], label: "Blue" },
                        { id: "green", colors: ["#00ff44", "#dbffe5"], label: "Vert" },
                        { id: "red", colors: ["#ff000d", "#fcc2c5"], label: "Rouge" },
                        { id: "white", colors: ["#fff", "#fff"], label: "blanc" },
                        { id: "yellow", colors: ["#fcdb03", "#fff3a3"], label: "Jaune" },
                        { id: "orange", colors: ["#ff9100", "#ffd296"], label: "Orange" },
                        { id: "pink", colors: ["#f200fa", "#fee6ff"], label: "Rose" },
                    ].map((color) => (
                        <div key={color.id}>
                            <input
                                type="radio"
                                value={color.id}
                                id={color.id}
                                name="color"
                                onChange={() => setTextColor(color.colors)}
                                className="peer hidden"
                            />
                            <label
                                htmlFor={color.id}
                                className={`w-24 cursor-pointer border rounded-lg text-slate-400 peer-checked:text-[${color.colors[0]}] peer-checked:border-[${color.colors[0]}] p-2`}
                            >
                                {color.label}
                            </label>
                        </div>
                    ))}
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
                <input type="range" value={range} onChange={(e) => setRange(Number(e.target.value) || 1)} className="mb-5" />
                {/* Glow Intensity Slider */}

            </form>
        </div>
    );
}
