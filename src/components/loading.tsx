import React from 'react'

export default function LoadingFirst() {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
            <div
                className="absolute animate-spin h-[16rem] w-[16rem] shadow-xl shadow-red-500 rounded-full  border-t-4 border-b-4 border-red-500 ">
            </div>
            <div
                className="absolute animate-spin h-[14rem] w-[14rem] shadow-xl shadow-indigo-500 rounded-full border-t-4 border-b-4 border-purple-500 ">
            </div>
            <div
                className="absolute animate-spin h-[12rem] w-[12rem] shadow-xl shadow-pink-500 rounded-full  border-t-4 border-b-4 border-pink-500 ">
            </div>
            <div
                className="absolute animate-spin h-[10rem] w-[10rem] shadow-xl shadow-yellow-500 rounded-full border-t-4 border-b-4 border-yellow-500">
            </div>
            <div
                className="absolute animate-spin h-[8rem] w-[8rem] shadow-xl shadow-green-500 rounded-full border-t-4 border-b-4 border-green-500">
            </div>
            <div
                className="absolute animate-spin h-[6rem] w-[6rem] shadow-xl shadow-blue-500 rounded-full border-t-4 border-b-4 border-blue-500">
            </div>
            <div
                className="rounded-full h-28 w-28 animate-bounce flex items-center justify-center text-gray-400 font-semibold text-xl dark:text-white">
                Loading...</div>
        </div>
    )
}
