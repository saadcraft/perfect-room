"use client"

import React, { useState } from "react";

export default function NeonSign() {
    const [text, setText] = useState("Custom Neon");
    const [textColor, setTextColor] = useState("#ff00ff");
    const [glowColor, setGlowColor] = useState("#ff00ff");
    const [glow, setGlow] = useState(10);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            {/* Transparent SVG Neon Text with Separate Glow Color */}
            <svg width="100%" height="200">
                <defs>
                    <filter id="neon-glow">
                        {/* Create the glow effect using a separate glow color */}
                        <feDropShadow dx="0" dy="0" stdDeviation={glow} floodColor={glowColor} />
                    </filter>
                </defs>
                <text
                    x="50%"
                    y="50%"
                    fontSize="80"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill={textColor}
                    filter="url(#neon-glow)"
                    className="neon-text"
                >
                    {text}
                </text>
            </svg>

            {/* Controls */}
            <div className="flex flex-col items-center gap-4 mt-6">
                {/* Text Input */}
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter text"
                    className="text-black px-3 py-2 rounded-md border border-gray-300"
                />

                {/* Text Color Picker */}
                <label className="flex items-center gap-2">
                    Text Color:
                    <input
                        type="color"
                        value={textColor}
                        onChange={(e) => setTextColor(e.target.value)}
                        className="w-10 h-10 border-none"
                    />
                </label>

                {/* Glow Color Picker */}
                <label className="flex items-center gap-2">
                    Glow Color:
                    <input
                        type="color"
                        value={glowColor}
                        onChange={(e) => setGlowColor(e.target.value)}
                        className="w-10 h-10 border-none"
                    />
                </label>

                {/* Glow Intensity Slider */}
                <input
                    type="range"
                    min="1"
                    max="20"
                    value={glow}
                    onChange={(e) => setGlow(Number(e.target.value))}
                    className="w-40"
                />
            </div>
        </div>
    );
}