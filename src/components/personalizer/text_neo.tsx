"use client"

import React, { useState } from "react";

export default function NeonSign() {
    const [text, setText] = useState("Custom Neon");
    const [textColor, setTextColor] = useState<string[]>(["#0800ff", "#cbc9ff"]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            {/* Transparent SVG Neon Text with Separate Glow Color */}
            <svg width="100%" height="200">
                <defs>
                    <filter id="neon-glow">
                        {/* Create the glow effect using a separate glow color */}
                        <feDropShadow dx="0" dy="0" stdDeviation={5} floodColor={textColor[0]} />
                    </filter>
                </defs>
                <text
                    x="50%"
                    y="50%"
                    fontSize="80"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill={textColor[1]}
                    filter="url(#neon-glow)"
                    className="neon-text"
                >
                    {text}
                </text>
            </svg>

            {/* Controls */}
            <form className="flex flex-col items-center gap-4 mt-6">
                {/* Text Input */}
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter text"
                    className="text-black px-3 py-2 rounded-md border border-gray-300"
                />

                {/* Text Color Picker */}
                {/* <label className="flex items-center gap-2">
                    Text Color:
                    <input
                        type="color"
                        value={textColor}
                        onChange={(e) => setTextColor(e.target.value)}
                        className="w-10 h-10 border-none"
                    />
                </label> */}

                {/* Glow Color Picker */}
                {/* <label className="flex items-center gap-2">
                    Glow Color:
                    <input
                        type="color"
                        value={glowColor}
                        onChange={(e) => setGlowColor(e.target.value)}
                        className="w-10 h-10 border-none"
                    />
                </label> */}
                <div className="flex gap-3">
                    <div className="w-full">
                        <input type="radio" value="blue" id="blue" defaultChecked name="color" onChange={() => setTextColor(["#0800ff", "#cbc9ff"])} className="peer hidden" />
                        <label htmlFor="blue" className='cursor-pointer border rounded-lg text-slate-400 peer-checked:text-[#0800ff] text-nowrap peer-checked:border-[#0800ff] p-2'> Blue</label>
                    </div>

                    <div>
                        <input type="radio" value="green" id="green" name="color" onChange={() => setTextColor(["#00ff44", "#dbffe5"])} className="peer hidden" />
                        <label htmlFor="green" className='h-2 w-11 cursor-pointer border rounded-lg text-slate-400 peer-checked:text-[#00ff44] text-nowrap peer-checked:border-[#00ff44] p-2'> Vert</label>
                    </div>
                    <div>
                        <input type="radio" value="red" id="red" name="color" onChange={() => setTextColor(["#ff000d", "#fcc2c5"])} className="peer hidden" />
                        <label htmlFor="red" className='cursor-pointer border rounded-lg text-slate-400 peer-checked:text-[#ff000d] text-nowrap peer-checked:border-[#ff000d] p-2'> Rouge</label>
                    </div>
                </div>

                {/* Glow Intensity Slider */}

            </form>
        </div>
    );
}
