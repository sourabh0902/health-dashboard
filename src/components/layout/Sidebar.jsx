import React from 'react'
import { navigationData } from '../../data/navigationData';
import SidebarItem from '../SidebarItem';

const Sidebar = () => {
    return (
        <aside className="w-56 bg-[#F6FAFF] overflow-y-auto">
            <div className="flex flex-col h-[100svh] md:h-[100vh] p-6">
                <div className="mb-8">
                    <h1 className="text-xl font-semibold">
                        <span className="text-cyan-500">Health</span>
                        <span className="text-gray-800">care.</span>
                    </h1>
                </div>

                <div className="space-y-8 h-full">
                    <div>
                        <div>
                            <h2 className="text-[12px] font-medium text-gray-300 tracking-wider mb-3">
                                General
                            </h2>
                            <nav className="space-y-1">
                                {navigationData
                                    .filter(item => item.section === 'general')
                                    .map((item, index) => (
                                        <SidebarItem key={index} item={item} />
                                    ))}
                            </nav>
                        </div>

                        <div className='mt-8'>
                            <h2 className="text-[12px] font-medium text-gray-300 tracking-wider mb-3">
                                Tools
                            </h2>
                            <nav className="space-y-1">
                                {navigationData
                                    .filter(item => item.section === 'tools')
                                    .map((item, index) => (
                                        <SidebarItem key={index} item={item} />
                                    ))}
                            </nav>
                        </div>
                    </div>
                </div>

                <div>
                    <nav className="space-y-1">
                        {navigationData
                            .filter(item => item.section === 'settings')
                            .map((item, index) => (
                                <SidebarItem key={index} item={item} />
                            ))}
                    </nav>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar