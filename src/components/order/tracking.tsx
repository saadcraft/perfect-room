"use client"

import type React from "react"

import { useState } from "react"
import { MdSearch } from "react-icons/md";
import { FormatDate, handleInputNumChange } from "@/lib/tools/tool"
import { useSearchLoader } from "../products/options/useSearchLoader";
import LoadingFirst from "../loading";
import OrderInfo from "../windows/order_info";

export default function ColiesTable({ colis, totalColis }: { colis: OrderInfo[], totalColis: number }) {
    const [colies, setColies] = useState<OrderInfo | null>(null)
    // const [sortField, setSortField] = useState("")
    // const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")
    const [isOpen, setIsOpen] = useState<boolean>(false);
    // const [searchTerm, setSearchTerm] = useState("")

    const { isLoading, handleSearch } = useSearchLoader(['num']);

    // console.log(colis)

    // Handle sorting
    // const handleSort = (field: string) => {
    //   const isAsc = sortField === field && sortDirection === "asc"
    //   setSortDirection(isAsc ? "desc" : "asc")
    //   setSortField(field)

    //   const sortedColies = [...colies].sort((a, b) => {
    //     if (a[field as keyof typeof a] < b[field as keyof typeof b]) {
    //       return sortDirection === "asc" ? -1 : 1
    //     }
    //     if (a[field as keyof typeof a] > b[field as keyof typeof b]) {
    //       return sortDirection === "asc" ? 1 : -1
    //     }
    //     return 0
    //   })

    //   setColies(sortedColies)
    // }

    // Handle search
    // const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    //   e.preventDefault()
    // const term = e.target.value
    // setSearchTerm(term)

    // if (term.trim() === "") {
    //   setColies(mockColies)
    //   return
    // }

    // const filteredColies = mockColies.filter(
    //   (colie) =>
    //     colie.id.toLowerCase().includes(term.toLowerCase()) ||
    //     colie.packageId.toLowerCase().includes(term.toLowerCase()) ||
    //     colie.location.toLowerCase().includes(term.toLowerCase()) ||
    //     colie.status.toLowerCase().includes(term.toLowerCase()),
    // )

    // setColies(filteredColies)
    // }

    // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    //   event.preventDefault();

    //   const formData = new FormData(event.currentTarget)
    //   const formObject = Object.fromEntries(formData.entries())

    //   console.log(formObject);
    // }

    // const Selection = {
    //     en_attente: 'En attente',
    //     en_ramassage: 'En ramassage',
    //     livre: 'Livré',
    //     enregistré: "Enregistré",
    //     en_transit: "En transit",
    //     en_livraison: "en livraison",
    //     retourne: "Retour",
    //     annule: "Annuler"
    // }

    // Status badge component
    const StatusBadge = ({ status }: { status: string }) => {
        let bgColor = ""
        let textColor = ""
        let text = ""

        switch (status) {
            case "Livré":
                bgColor = "bg-green-100 dark:bg-green-900/30"
                textColor = "text-green-800 dark:text-green-300"
                text = "Livré"
                break
            case "En route":
                bgColor = "bg-blue-100 dark:bg-blue-900/30"
                textColor = "text-blue-800 dark:text-blue-300"
                text = "En route"
                break
            case "En attente":
                bgColor = "bg-yellow-100 dark:bg-yellow-900/30"
                textColor = "text-yellow-800 dark:text-yellow-300"
                text = "En attent"
                break
            case "Accepté":
                bgColor = "bg-purple-100 dark:bg-purple-900/30"
                textColor = "text-purple-800 dark:text-purple-300"
                text = "Accepté"
                break
            case "Retour":
                bgColor = "bg-red-100 dark:bg-red-900/30"
                textColor = "text-red-800 dark:text-red-300"
                text = "Retour"
                break
            case "Annulé":
                bgColor = "bg-gray-100 dark:bg-gray-900/30"
                textColor = "text-gray-800 dark:text-gray-300"
                text = "Annuler"
                break
            case "enregistré":
                bgColor = "bg-[#9af5f5] dark:bg-[#29e6e6]/30"
                textColor = "text-[#4e8080] dark:text-[#29e6e6]"
                text = "Enregistré"
                break
            default:
                bgColor = "bg-gray-100 dark:bg-gray-700"
                textColor = "text-gray-800 dark:text-gray-300"
        }

        return <span className={`px-2 py-1 text-xs font-medium rounded-full ${bgColor} ${textColor}`}>{text}</span>
    }

    // Sort indicator component
    // const SortIndicator = ({ field }: { field: string }) => {
    //   if (sortField !== field) return null

    //   return sortDirection === "asc" ? <ChevronUp className="w-4 h-4 ml-1" /> : <ChevronDown className="w-4 h-4 ml-1" />
    // }



    // Improve table responsiveness for mobile
    return (
        <section className="relative top-28 bg-gray-800 rounded-lg shadow-sm border border-gray-700 overflow-hidden">
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-bold text-gray-800 dark:text-white">Colies</h2>
                <div className='flex lg:flex-row flex-col items-center justify-between gap-5'>
                    <form onSubmit={handleSearch} className='mt-2 flex flex-col lg:flex-row items-center gap-5'>
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <MdSearch className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                            </div>
                            <input
                                type="search"
                                name="num"
                                className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Rechercher un colis..."
                                // value={searchTerm}
                                onChange={handleInputNumChange}
                            />
                        </div>
                        {/* <select
                            name="status"
                            className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                            <option value="">All</option>
                            {Object.entries(Selection).map(([key, value], index) => (<option key={index} value={key}>{value}</option>))}
                        </select> */}
                        <button className='bg-blue-500 w-full font-semibold hover:bg-third text-white p-2 rounded-lg'>Recherche</button>
                    </form>
                    {/* <div className='p-2'>
                        <button onClick={() => setIsOpen(true)} className='bg-blue-500 disabled:bg-opacity-20 px-4 py-2 text-white rounded-lg font-semibold'>Ajouter</button>
                    </div> */}
                </div>
            </div>

            {/* Mobile view - card layout */}
            <div className="md:hidden">
                {colis.length > 0 ? (
                    <div className="divide-y divide-gray-200 dark:divide-gray-700">
                        {colis.map((colie, index) => (
                            <div key={index} className="p-4">
                                <div className="flex justify-between items-start mb-2">
                                    <div className="font-medium text-gray-900 dark:text-gray-400">Track ID {colie.tracking || (<span>En attente ...</span>)}</div>
                                    <StatusBadge status={colie.status} />
                                </div>
                                <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                                    <span className="font-medium">Package:</span> ({colie.orders.length}) items
                                </div>
                                <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                                    <span className="font-medium">Location:</span> {colie.wilaya}
                                </div>
                                <div className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                                    <span className="font-medium">Updated:</span> {FormatDate(colie.updatedAt)}
                                </div>
                                <div className="flex justify-end space-x-3">
                                    <button onClick={() => setColies(colie)} className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">Détail</button>
                                    {/* <button className="text-sm font-medium text-red-600 dark:text-red-500 hover:underline">Delete</button> */}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="p-4 text-center text-gray-500 dark:text-gray-400">No colies found</div>
                )}
            </div>

            {/* Desktop view - table layout */}
            <div className="hidden md:block overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3 cursor-pointer">
                                <div className="flex items-center">
                                    Tracking ID
                                    {/* <SortIndicator field="id" /> */}
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3 cursor-pointer">
                                <div className="flex items-center">
                                    Packages
                                    {/* <SortIndicator field="packageId" /> */}
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3 cursor-pointer">
                                <div className="flex items-center">
                                    Location
                                    {/* <SortIndicator field="location" /> */}
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3 cursor-pointer" >
                                <div className="flex items-center">
                                    Status
                                    {/* <SortIndicator field="status" /> */}
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3 cursor-pointer" >
                                <div className="flex items-center">
                                    Last Updated
                                    {/* <SortIndicator field="lastUpdated" /> */}
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3 text-right">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {colis.length > 0 ? (
                            colis.map((colie, index) => (
                                <tr
                                    key={index}
                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                                >
                                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{colie.tracking || (<span>En attente ...</span>)}</td>
                                    <td className="px-6 py-4">{colie.orders.length} Items</td>
                                    <td className="px-6 py-4">{colie.wilaya}</td>
                                    <td className="px-6 py-4">
                                        <StatusBadge status={colie.status} />
                                    </td>
                                    <td className="px-6 py-4">{FormatDate(colie.updatedAt)}</td>
                                    <td className="px-6 py-4 text-right">
                                        <button onClick={() => setColies(colie)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Détail</button>
                                        {/* <button className="font-medium text-red-600 dark:text-red-500 hover:underline ml-4">Delete</button> */}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={6} className="px-6 py-4 text-center">
                                    No colies found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <div className="px-4 md:px-6 py-3 pt-5 flex flex-col sm:flex-row items-center justify-between border-t border-gray-200 dark:border-gray-700">
                <div className="mb-3 sm:mb-0">
                    <p className="text-sm text-gray-700 dark:text-gray-400">
                        Affichage de <span className="font-medium">{colis.length}</span> des{" "}
                        <span className="font-medium">{totalColis}</span> colies
                    </p>
                </div>
                <div className="flex items-center space-x-2 pb-7">

                </div>
            </div>
            {colies &&
                <OrderInfo stat={StatusBadge} colie={colies} onClose={() => setColies(null)} />
            }
            {isLoading &&
                <LoadingFirst />
            }
        </section>
    )
}
