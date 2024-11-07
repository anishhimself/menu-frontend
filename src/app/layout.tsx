"use client";

import React, { useState } from 'react';
import './global/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const [darkMode] = useState(false);

    return (
        <html lang="en">
            <body className={`min-h-screen ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
                <main className="flex-1 p-6">{children}</main>
            </body>
        </html>
    );
}
