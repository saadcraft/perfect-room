"use client"

import React, { useState } from "react"
import Image from "next/image"
import { MdOutlineClose } from "react-icons/md";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useCartStore } from "@/lib/store/cartStore"
import OrderConfirmationModal from "../windows/complet_order";

export default function CartPage() {

    const [isOpen, setIsOpen] = useState<boolean>(false)
    // Sample cart data
    const { cart, removeFromCart, addQty } = useCartStore()


    // console.log(cart)

    // Handle quantity change

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget)
        const formObject = Object.fromEntries(formData.entries())

        console.log(formObject);
    }


    return (
        <div className="relative top-20 min-h-screen mb-20 text-white p-4">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

                {cart.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-16">
                        <p className="text-2xl text-gray-300 mb-8">Votre panier est vide 😔</p>
                    </div>
                ) : (
                    <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                        {/* Cart Items - Takes 2/3 of the space on desktop */}
                        <div className="lg:col-span-2">
                            <div className="space-y-6">
                                {cart.map((item) => (
                                    <div key={item.id} className="bg-neutral-900 rounded-xl p-4 relative">
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="absolute top-4 right-4 text-gray-400 hover:text-white transition duration-200"
                                            aria-label={`Remove ${item.name} from cart`}
                                        >
                                            <MdOutlineClose size={20} />
                                        </button>

                                        <div className="flex flex-col md:items-center sm:flex-row gap-4">
                                            {/* Product Image */}
                                            <div className="w-20 h-20 flex-shrink-0">
                                                <Image
                                                    src={process.env.IMGS_DOMAIN + item.image || "/placeholder.svg"}
                                                    alt={item.name}
                                                    width={80}
                                                    height={80}
                                                    className="h-full w-full object-cover object-center rounded-md"
                                                />
                                            </div>

                                            {/* Product Details */}
                                            <div className="flex-grow">
                                                <h3 className="text-lg font-medium">{item.name}</h3>

                                                {/* Product Options */}
                                                <div className="mt-1 text-sm text-gray-400">
                                                    {Object.entries(item.options).map(([key, value]) => (
                                                        <span key={key} className="mr-4">
                                                            {key}: {value}
                                                        </span>
                                                    ))}
                                                </div>

                                                <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                                    {/* Price */}
                                                    <div className="text-gray-300">{item.price.toFixed(2)} DA</div>

                                                    {/* Quantity Controls */}
                                                    <div className="flex items-center">
                                                        <button
                                                            onClick={() => addQty({ id: item.id, quantity: item.quantity > 1 ? item.quantity - 1 : 1 })}
                                                            className="w-8 h-8 flex items-center justify-center bg-neutral-800 hover:bg-neutral-700 rounded-l-md transition duration-200"
                                                            aria-label="Decrease quantity"
                                                        >
                                                            <FaMinus size={16} />
                                                        </button>
                                                        <div className="w-10 h-8 flex items-center justify-center bg-neutral-800 text-center">
                                                            {item.quantity}
                                                        </div>
                                                        <button
                                                            onClick={() => addQty({ id: item.id, quantity: item.quantity + 1 })}
                                                            className="w-8 h-8 flex items-center justify-center bg-neutral-800 hover:bg-neutral-700 rounded-r-md transition duration-200"
                                                            aria-label="Increase quantity"
                                                        >
                                                            <FaPlus size={16} />
                                                        </button>
                                                    </div>

                                                    {/* Subtotal */}
                                                    <div className="font-medium">{(item.price * item.quantity).toFixed(2)} DA</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Order Summary - Takes 1/3 of the space on desktop */}
                        <div className="mt-8 lg:mt-0">
                            <div className="bg-neutral-800 rounded-xl p-6 lg:sticky lg:top-24">
                                <h2 className="text-xl font-bold mb-6">Order Summary</h2>

                                <div className="space-y-4">
                                    <div className="flex justify-between">
                                        <span className="text-gray-300">Items ({totalItems})</span>
                                        <span>{totalPrice.toFixed(2)} DA</span>
                                    </div>

                                    <div className="flex justify-between">
                                        <span className="text-gray-300">Shipping</span>
                                        <span>Free</span>
                                    </div>

                                    <div className="border-t border-neutral-700 my-4 pt-4">
                                        <div className="flex justify-between font-bold">
                                            <span>Total</span>
                                            <span>{totalPrice.toFixed(2)} DA</span>
                                        </div>
                                    </div>

                                    <button onClick={() => setIsOpen(true)} className="w-full bg-white text-black hover:bg-gray-200 font-medium py-3 px-4 rounded-lg transition duration-300 ease-in-out">
                                        Place Order
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            {isOpen &&
                <OrderConfirmationModal handleSubmit={handleSubmit} onClose={() => setIsOpen(false)} />
            }
        </div>
    )
}
