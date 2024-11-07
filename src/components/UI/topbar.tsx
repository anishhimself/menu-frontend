import React, { useState, useEffect, useRef } from 'react';
import { FiBell, FiSun, FiMoon, FiX } from 'react-icons/fi';

const TopBar = ({ darkMode, setDarkMode }: { darkMode: boolean; setDarkMode: (darkMode: boolean) => void }) => {
    const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
    const notificationBoxRef = useRef<HTMLDivElement>(null); // Reference for the notification box

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        // Close notification box if clicked outside
        const handleClickOutside = (event: MouseEvent) => {
            if (notificationBoxRef.current && !notificationBoxRef.current.contains(event.target as Node)) {
                setIsNotificationsOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [darkMode]);

    const toggleNotifications = () => {
        setIsNotificationsOpen(prevState => !prevState);
    };

    return (
        <header className="flex items-center justify-between p-4 shadow-md bg-white dark:bg-gray-900 overflow-visible transition-colors duration-300 relative">
            <input
                type="text"
                placeholder="Search..."
                className="rounded-full p-2 px-4 border w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            />
            <div className="flex items-center space-x-4 relative">
                {/* Notification Button */}
                <button
                    className="relative p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors duration-300"
                    onClick={toggleNotifications}
                >
                    <FiBell className="text-xl text-gray-700 dark:text-white" />
                    <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full" />
                </button>

                {/* Notification Dropdown */}
                {isNotificationsOpen && (
                    <div
                        ref={notificationBoxRef}
                        className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-lg rounded-lg p-2 z-50 border border-gray-300 dark:border-gray-600"
                    >
                        <div className="flex justify-between items-center">
                            <span className="font-semibold text-sm">Notifications</span>
                            <button
                                onClick={() => setIsNotificationsOpen(false)}
                                className="text-gray-500 dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
                            >
                                <FiX />
                            </button>
                        </div>
                        <ul>
                            <li className="flex items-center space-x-2 p-2 border-b dark:border-gray-600">
                                <span className="text-sm">New comment on your post</span>
                            </li>
                            <li className="flex items-center space-x-2 p-2 border-b dark:border-gray-600">
                                <span className="text-sm">You have a new follower</span>
                            </li>
                            <li className="flex items-center space-x-2 p-2 border-b dark:border-gray-600">
                                <span className="text-sm">Server maintenance completed</span>
                            </li>
                            <li className="flex items-center space-x-2 p-2">
                                <span className="text-sm">Your profile was updated</span>
                            </li>
                        </ul>
                    </div>
                )}

                {/* Dark Mode Toggle Button */}
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
                >
                    {darkMode ? (
                        <FiSun className="text-xl text-yellow-500" />
                    ) : (
                        <FiMoon className="text-xl text-gray-700 dark:text-white" />
                    )}
                </button>

                <span className="text-gray-800 dark:text-white text-sm font-medium">Hello, Admin</span>
            </div>
        </header>
    );
};

export default TopBar;
