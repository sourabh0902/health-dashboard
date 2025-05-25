import React, { useState } from 'react'
import Sidebar from './Sidebar';
import Menu from '../../assets/menu.png'

const DashboardLayout = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen overflow-hidden">
            {/* Mobile menu button */}
            <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden fixed bottom-4 right-4 z-50 bg-indigo-600 text-white p-3 rounded-full shadow-lg"
            >
                <img src={Menu} className="h-6 w-6" />
            </button>

            {/* Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-gray-500 opacity-50 z-20 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div
                className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    } fixed inset-y-0 h-full left-0 z-30 w-56 bg-[#F6FAFF] transform transition-transform duration-200 ease-in-out lg:relative lg:translate-x-0`}
            >
                <Sidebar />
            </div>

            {/* Main content */}
            <div className="flex flex-col flex-1 overflow-hidden ">
                <main className="flex-1 overflow-y-auto bg-gray-50">
                    {children}
                </main>
            </div>

        </div>
    )
}

export default DashboardLayout