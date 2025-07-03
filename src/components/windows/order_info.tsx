"use client"
import { GetFullOrder } from '@/lib/endpoint/order';
import { FormatDate } from '@/lib/tools/tool';
import React, { useEffect, useState } from 'react'
import { TbLoader3 } from 'react-icons/tb';
import Image from "next/image"

export default function OrderInfo({ stat, colie, onClose }: {
    stat: ({ status }: {
        status: string;
    }) => React.JSX.Element,
    colie: OrderInfo,
    onClose: () => void
}) {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [orderInfo, setOrderInfo] = useState<OrderInfo | null>(null)

    useEffect(() => {
        const fatchAllOrder = async () => {
            const fetch = await GetFullOrder(colie._id)
            if (fetch) {
                setOrderInfo(fetch)
                setIsLoading(false)
            } else {
                setIsLoading(false)
            }
        }
        fatchAllOrder();
    }, [])

    console.log(colie)

    const sum = colie.orders.reduce((total, order) => total + (order.price) * order.quantity, 0)


    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div onClick={onClose} className="fixed inset-0"></div>

            <div className="bg-gray-900 rounded-lg shadow-xl w-full max-w-2xl mx-4 relative overflow-hidden">

                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white focus:outline-none z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="px-6 py-4 border-b border-gray-700">
                    <h3 className="text-xl font-semibold text-white">Order Details</h3>
                    <p className="text-gray-400 text-sm">Order #{colie._id}</p>
                </div>

                <div className="max-h-[70vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-500">
                    <div className="p-6 border-b border-gray-700">
                        <div className="flex flex-col md:flex-row gap-6">
                            {/* <div className="w-full md:w-1/3">
                                <div className="aspect-square bg-gray-800 rounded-lg overflow-hidden">
                                    <img src="https://via.placeholder.com/300" alt="Product" className="w-full h-full object-cover" />
                                </div>
                            </div> */}

                            <div className="w-full md:w-2/3">
                                <h4 className="text-lg font-medium flex gap-3 text-white mb-2">Tracking : {colie.tracking ||
                                    <span className='flex items-center'><TbLoader3 className="animate-spin text-2xl" /> En attendant ...</span>}</h4>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-gray-400 text-sm">Date</p>
                                        <p className="text-gray-200">{FormatDate(colie.updatedAt)}</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">Status</p>
                                        {stat({ status: colie.status })}
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">Adresse de livraison</p>
                                        <p className="text-gray-200">{colie.adresse}</p>
                                    </div>
                                    {/* <div>
                                        <p className="text-gray-400 text-sm">Payment Method</p>
                                        <p className="text-gray-200">Visa ending in 4242</p>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 relative">
                        <h4 className="text-lg font-medium text-white mb-4">Order Items</h4>
                        {isLoading ?

                            <div className={`absolute top-0 left-0 right-0 bottom-0 bg-forth text-white bg-opacity-50 text-xl flex justify-center items-center gap-3`}>
                                <TbLoader3 className="animate-spin text-2xl" /> Loading ...
                            </div>

                            :

                            orderInfo ?

                                orderInfo.orders.map((pre, index) => (
                                    pre.variant ?

                                        <div key={index} className="flex items-start space-x-4 py-4 border-b border-gray-700">
                                            <div className="h-20 w-20 flex-shrink-0 bg-gray-800 rounded overflow-hidden">
                                                <Image width={100} height={100} src={process.env.IMGS_DOMAIN + pre.variant.product.primaryImage} alt="Product 1" className="w-full h-full object-cover" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-white font-medium">{pre.variant.product.title}</p>
                                                <p className="text-gray-400 mt-1">{pre.variant.sku}</p>
                                                <div className="flex justify-between mt-2">
                                                    <p className="text-gray-400">Qty: {pre.quantity}</p>
                                                    <p className="text-white font-medium">{pre.price} DA</p>
                                                </div>
                                            </div>
                                        </div>
                                        :
                                        <div key={index} className="flex items-start space-x-4 py-4 border-b border-gray-700">
                                            <div className={`h-20 w-20 flex-shrink-0 bg-[${pre.parsonalizer?.color}] rounded overflow-hidden`}>
                                                {/* <span className={`w-full h-full bg-[${pre.parsonalizer?.color}]`} /> */}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-white font-medium">{pre.parsonalizer?.text}</p>
                                                <p className="text-gray-400 mt-1">{pre.parsonalizer?.font}</p>
                                                <div className="flex justify-between mt-2">
                                                    <div className='flex flex-col md:flex-row gap-2'>
                                                        <p className="text-gray-400">taille: {pre.parsonalizer?.height.toFixed(2)}cm X {pre.parsonalizer?.Width.toFixed(2)}cm</p>
                                                        <p className="text-gray-400">Qty: {pre.quantity}</p>
                                                    </div>

                                                    <p className="text-white font-medium">{pre.price} DA</p>
                                                </div>
                                            </div>
                                        </div>
                                ))
                                :
                                <p>nothing</p>

                        }

                        <div className="mt-6 space-y-2">
                            <div className="flex justify-between">
                                <p className="text-gray-400">Total Articles</p>
                                <p className="text-gray-200">{sum} DA</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-gray-400">Prix de livraison</p>
                                <p className="text-gray-200">0 DA</p>
                            </div>
                            {/* <div className="flex justify-between">
                                <p className="text-gray-400">Tax</p>
                                <p className="text-gray-200">$35.20</p>
                            </div> */}
                            <div className="flex justify-between pt-4 border-t border-gray-700">
                                <p className="text-white font-medium">Total</p>
                                <p className="text-white font-bold">{sum} DA</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-6 py-4 bg-gray-800 flex justify-end">
                    <button onClick={onClose} className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-800">
                        Close
                    </button>
                </div>
            </div>
        </div>
    )
}
