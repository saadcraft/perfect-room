"use client"

import type React from "react"

import { MdOutlineClose } from "react-icons/md";
import { redirect } from "next/navigation";
import { addOrder } from "@/lib/endpoint/order";

interface OrderConfirmationModalProps {
    onClose: () => void
    data: { [key: string]: unknown }
}

// interface OrderFormData {
//     fullName: string
//     phoneNumber: string
//     address: string
//     notes: string
// }

export default function PersonalizerConfirmationModal({ onClose, data }: OrderConfirmationModalProps) {
    // const [formData, setFormData] = useState<OrderFormData>({
    //     fullName: "",
    //     phoneNumber: "",
    //     address: "",
    //     notes: "",
    // })



    // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    //     const { name, value } = e.target
    //     setFormData((prev) => ({ ...prev, [name]: value }))
    // }

    // const handleSubmit = (e: React.FormEvent) => {
    //     e.preventDefault()
    //     onSubmit(formData)
    // }

    // if (!isOpen) return null

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget)
        const formObject = Object.fromEntries(formData.entries())
        // text, h, l, font, textColor, materiel
        console.log(data)

        const response = {
            ...formObject,
            orders: [
                {
                    parsonalizer: {
                        height: data.h,
                        Width: data.l,
                        font: data.font,
                        text: data.text,
                        color: Array.isArray(data.textColor) && data.textColor[0],
                        materiel: data.materiel,
                    },
                    quantity: data.count,
                    price: (data as { calculateArea: () => number }).calculateArea()
                }
            ]
        }

        const process = await addOrder(response)

        if (process) {
            redirect(`/tracking?num=${formObject.phoneNumber}`)
        }

    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70" onClick={onClose} />

            {/* Modal */}
            <div className="relative w-full max-w-md bg-neutral-900 rounded-xl shadow-xl p-6 m-4 z-10">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-white">Confirm Your Order</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-white transition-colors duration-200"
                        aria-label="Close modal"
                    >
                        <MdOutlineClose size={24} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-1">
                            Nom et prénom
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullname"
                            // value={}
                            // onChange={}
                            required
                            className="w-full bg-black/20 border border-neutral-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primer/50 focus:border-primer/50 transition-colors"
                            placeholder="Enter your full name"
                        />
                    </div>

                    <div>
                        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-300 mb-1">
                            Télephone
                        </label>
                        <input
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            // value={formData.phoneNumber}
                            // onChange={handleChange}
                            required
                            className="w-full bg-black/20 border border-neutral-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primer/50 focus:border-primer/50 transition-colors"
                            placeholder="Entre Le numéro de télephone"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                            Email (Optional)
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            // value={formData.phoneNumber}
                            // onChange={handleChange}
                            className="w-full bg-black/20 border border-neutral-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primer/50 focus:border-primer/50 transition-colors"
                            placeholder="Entre Le Email"
                        />
                    </div>

                    <div className="flex justify-between items-center gap-3">
                        <span className="text-gray-300">Wilaya/algerie</span>
                        <select name="wilaya"
                            className="w-full bg-gray-800 sm:w-auto text-gray-300 py-2 px-4 rounded-lg"
                        >
                            <option value="">Selectioné Wilaya</option>
                            <option value="Tlemcen">Tlemcen</option>
                            <option value="Oran">Oran</option>
                            <option value="Alger">Alger</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="adresse" className="block text-sm font-medium text-gray-300 mb-1">
                            Adresse de livraison
                        </label>
                        <textarea
                            id="adresse"
                            name="adresse"
                            // value={formData.address}
                            // onChange={handleChange}
                            required
                            rows={2}
                            className="w-full bg-black/20 border border-neutral-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primer/50 focus:border-primer/50 transition-colors resize-none"
                            placeholder="Enter your delivery address"
                        />
                    </div>

                    <div>
                        <label htmlFor="notes" className="block text-sm font-medium text-gray-300 mb-1">
                            Notes supplémentaires (Optional)
                        </label>
                        <textarea
                            id="notes"
                            name="notes"
                            // value={formData.notes}
                            // onChange={handleChange}
                            rows={2}
                            className="w-full bg-black/20 border border-neutral-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primer/50 focus:border-primer/50 transition-colors resize-none"
                            placeholder="Any special instructions for delivery"
                        />
                    </div>

                    <div className="flex gap-4 pt-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 px-4 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg transition-colors duration-200"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="flex-1 px-4 py-2.5 bg-primer hover:bg-primer/90 text-white font-medium rounded-lg transition-colors duration-200"
                        >
                            Place Order
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
