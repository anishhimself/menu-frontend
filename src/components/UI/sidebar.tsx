import React, { useState } from 'react';
import { FiStar, FiLogOut, FiCalendar, FiClipboard, FiShoppingCart, FiSettings } from 'react-icons/fi';

interface SidebarProps {
    darkMode: boolean;
    onUtilityClick: (utility: string) => void;
}

const Sidebar = ({ darkMode, onUtilityClick }: SidebarProps) => {
    const [openUtility, setOpenUtility] = useState<string | null>(null);

    const handleUtilityClick = (utility: string) => {
        if (openUtility === utility) {
            setOpenUtility(null); // Close the currently open utility
        } else {
            setOpenUtility(utility); // Open the new utility
        }
        onUtilityClick(utility);
    };

    return (
        <div className={`${darkMode ? 'bg-gray-900' : 'bg-white'} w-64 text-white h-screen p-4 flex flex-col transition-all duration-300 ease-in-out`}>
            {/* Profile Picture/Logo */}
            <div className="flex items-center mb-6">
                <img
                    src="https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/341265269_1292277798030638_5959688510672324639_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=DhGu2WAGEgMQ7kNvgEjNNCV&_nc_zt=23&_nc_ht=scontent.fktm3-1.fna&_nc_gid=AYwhIpE2uz76j5JE-4os8qH&oh=00_AYDT0r7QX936KHYM4ks1smrdEYw5eVPIGD9Ir5t_EgVPSw&oe=6732B50B"
                    alt="Profile"
                    className="w-12 h-12 rounded-full object-cover mr-3"
                />
                <span className={`${darkMode ? 'text-white' : 'text-gray-900'} text-lg font-semibold`}>
                    Bajeko Sekuwa
                </span>
            </div>

            <nav className="flex flex-col space-y-6 flex-1">
                {/* Accordion Buttons */}
                <button
                    className="flex items-center space-x-2 hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded-md transition-all duration-300"
                    onClick={() => handleUtilityClick('upgrade')}
                >
                    <FiStar className={`${darkMode ? 'text-white' : 'text-gray-900'}`} />
                    <span className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>Upgrade</span>
                </button>


                <button
                    className="flex items-center space-x-2 hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded-md transition-all duration-300"
                    onClick={() => handleUtilityClick('changeOutlets')}
                >
                    <FiShoppingCart className={`${darkMode ? 'text-white' : 'text-gray-900'}`} />
                    <span className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>Change Outlets</span>
                </button>


                <button
                    className="flex items-center space-x-2 hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded-md transition-all duration-300"
                    onClick={() => handleUtilityClick('orderHistory')}
                >
                    <FiClipboard className={`${darkMode ? 'text-white' : 'text-gray-900'}`} />
                    <span className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>Order History</span>
                </button>


                <button
                    className="flex items-center space-x-2 hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded-md transition-all duration-300"
                    onClick={() => handleUtilityClick('bookings')}
                >
                    <FiCalendar className={`${darkMode ? 'text-white' : 'text-gray-900'}`} />
                    <span className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>Bookings</span>
                </button>


                <button
                    className="flex items-center space-x-2 hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded-md transition-all duration-300"
                    onClick={() => handleUtilityClick('addMenu')}
                >
                    <FiSettings className={`${darkMode ? 'text-white' : 'text-gray-900'}`} />
                    <span className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>Add Menu</span>
                </button>
            </nav>

            {/* Logout Button */}
            <button
                className="flex items-center space-x-2 hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded-md transition-all duration-300 focus:outline-none"
            >
                <FiLogOut className={`${darkMode ? 'text-white' : 'text-gray-900'}`} />
                <span className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>Logout</span>
            </button>
        </div>
    );
};

export default Sidebar;
