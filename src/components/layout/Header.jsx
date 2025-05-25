import React from 'react'
import { Search, Bell, Plus } from 'lucide-react';

const Header = () => {
    return (
        <header className="w-full flex items-center justify-between gap-4 md:gap-2 h-16 md:p-0">

            <div className="block flex-1 w-full max-w-lg mx-auto">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full px-10 py-2 shadow-2xs rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all text-base"
                    />
                    <Search className="absolute left-3 top-2.5 text-gray-400 h-5 w-5" />
                </div>
            </div>

            <div className="flex items-center space-x-2 md:space-x-4">
                <div className="relative">
                    <Bell className="h-6 w-6 cursor-pointer fill-[#3635A9] outline-none border-none" />
                </div>
            </div>

            <div className='w-1/3 md:w-full h-auto flex md:hidden justify-end gap-3'>
                <div className="h-8 w-8 md:h-10 md:w-10 rounded-xl bg-cyan-100 flex items-center justify-center overflow-hidden">
                    <img
                        src="https://randomuser.me/api/portraits/men/32.jpg"
                        alt="User profile"
                        className="h-full w-full object-cover"
                    />
                </div>

                <button className="h-8 w-8 md:h-10 md:w-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white hover:bg-indigo-700 transition-colors">
                    <Plus className="h-5 w-5" />
                </button>
            </div>
        </header>
    )
}

export default Header