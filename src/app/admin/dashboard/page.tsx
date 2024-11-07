"use client"; // Add this line at the top

import React, { useState, useEffect } from 'react';
import Sidebar from '../../../components/ui/sidebar';
import TopBar from '../../../components/ui/topbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
    const [darkMode, setDarkMode] = useState(false);
    const [selectedUtility, setSelectedUtility] = useState<string | null>(null);

    // Save dark mode preference in localStorage
    useEffect(() => {
        const savedDarkMode = localStorage.getItem('darkMode');
        if (savedDarkMode) {
            setDarkMode(JSON.parse(savedDarkMode));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }, [darkMode]);

    const handleUtilityClick = (utility: string) => {
        setSelectedUtility(utility); // Set the selected utility
    };

    return (
        <div className={`${darkMode ? 'dark' : 'light'} min-h-screen flex`}>
            {/* Sidebar */}
            <Sidebar darkMode={darkMode} onUtilityClick={handleUtilityClick} />

            {/* Main Content Area */}
            <div className="flex-grow flex flex-col">
                {/* TopBar */}
                <TopBar darkMode={darkMode} setDarkMode={setDarkMode} />

                {/* Utility Window (Main Content) */}
                <main className="p-6 flex-grow flex justify-center items-center">
                    {selectedUtility && (
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-md shadow-md w-full max-w-4xl">
                            {/* Render the selected utility content */}
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{selectedUtility} ddddContent</h2>
                            <p>Here you can display controls for the selected utility.</p>
                            {children}
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default Layout;
