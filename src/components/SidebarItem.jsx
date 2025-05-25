import React from 'react'

const SidebarItem = ({ item }) => {
    const Icon = item.icon;

    return (
        <a
            href="#"
            className={`flex items-center pr-3 py-2 text-sm font-medium rounded-lg transition-colors ${item.active
                    ? ' text-[#3635A9]'
                    : 'text-gray-400'
                }`}
        >
            <Icon className={`mr-3 h-5 w-5 ${item.active ? 'text-[#3635A9]' : 'text-gray-400'}`} />
            <span>{item.name}</span>
        </a>
    );
}

export default SidebarItem