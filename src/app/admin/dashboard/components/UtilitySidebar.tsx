import React from 'react';

interface SidebarProps {
    utilities: string[];
    onUtilitySelect: (utility: string) => void;
}

const UtilitySidebar: React.FC<SidebarProps> = ({ utilities, onUtilitySelect }) => {
    return (
        <div className="w-64 bg-gray-800 text-white p-4">
            <h2 className="text-lg font-semibold mb-4">Utilities</h2>
            <ul>
                {utilities.map((utility) => (
                    <li
                        key={utility}
                        className="mb-2 cursor-pointer hover:bg-gray-700 p-2 rounded"
                        onClick={() => onUtilitySelect(utility)}
                    >
                        {utility}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UtilitySidebar;
