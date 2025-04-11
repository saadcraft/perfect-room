import React from 'react'
import { MdSearch } from "react-icons/md";

export default function Search() {
    return (
        <aside className="w-full md:w-64 space-y-6 px-5">
            <div>
                <h3 className="font-semibold mb-4">Rechercher</h3>
                <div className="relative">
                    <MdSearch className="absolute left-2.5 top-2.5 text-xl text-gray-600 font-bold" />
                    <input
                        className="flex pl-8 h-10 w-full rounded-md border border-gray-400 bg-transparent px-3 py-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:text-sm"
                        placeholder="Search products..." />
                </div>
            </div>

            <div>
                <h3 className="font-semibold mb-4">Catégories</h3>
                <div className="space-y-2">
                    {/* {categories.map((category) => ( */}
                    <label className="flex items-center space-x-2">
                        <input name='categorie' type="radio" />
                        <span>All</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input name='categorie' type="radio" />
                        <span>gaming</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input name='categorie' type="radio" />
                        <span>sport</span>
                    </label>
                    {/* ))} */}
                </div>
            </div>

            <div>
                <button className='flex gap-1 items-end bg-primer float-right md:w-full text-white font-bold text-xl rounded-md p-2 hover:bg-second'>Recharcher</button>
            </div>
        </aside>
    )
}
