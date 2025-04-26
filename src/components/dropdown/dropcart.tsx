import React from 'react'
import { MdOutlineClose } from "react-icons/md";
import Image from "next/image"

interface CartDropdownProps {
    cart: CartItem[]
    onRemoveItem: (id: string) => void
}

export default function DropCart({ cart, onRemoveItem }: CartDropdownProps) {

    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

    return (
        <div className="relative">

            {/* Dropdown Menu */}
            <div className="p-4 border-b border-neutral-800">
                <h3 className="text-lg font-medium text-white">Your Cart</h3>
            </div>

            <div className="max-h-96 overflow-y-auto">
                {cart.length === 0 ? (
                    <div className="py-12 px-4 text-center">
                        <p className="text-gray-300">Your cart is empty</p>
                    </div>
                ) : (
                    <ul className="py-2">
                        {cart.map((item) => (
                            <li key={item.id} className="px-4 py-3 hover:bg-neutral-800 transition-colors duration-200">
                                <div className="flex items-center gap-3">
                                    <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-neutral-700">
                                        <Image
                                            src={process.env.SERVER_DOMAIN + item.image || "/placeholder.svg"}
                                            alt={item.name}
                                            width={64}
                                            height={64}
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className="text-sm font-medium text-white truncate">{item.name}</h4>
                                        <p className='text-sm text-gray-300'>{item.sku}</p>
                                        <div className='flex items-center gap-3'>
                                            <p className="text-sm text-gray-300">{item.price.toFixed(2)} DA</p>
                                            <p className="text-xs text-gray-400">Qty: {item.quantity}</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => onRemoveItem(item.id)}
                                        className="text-gray-400 hover:text-white transition-colors duration-200"
                                        aria-label={`Remove ${item.name} from cart`}
                                    >
                                        <MdOutlineClose className="h-5 w-5" />
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {cart.length > 0 && (
                <div className="p-4 border-t border-neutral-800">
                    <div className="flex justify-between text-white mb-4">
                        <span>Total</span>
                        <span>{totalPrice.toFixed(2)} DA</span>
                    </div>
                    <button
                        className="w-full bg-neutral-800 hover:bg-neutral-700 text-white py-2 px-4 rounded-lg transition duration-300 ease-in-out"
                    >
                        Go to Cart
                    </button>
                </div>
            )}
        </div>
    )
}
