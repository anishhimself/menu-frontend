import React from 'react';

interface UtilityWindowProps {
    selectedUtility: string | null;
}

const UtilityWindow: React.FC<UtilityWindowProps> = ({ selectedUtility }) => {
    return (
        <main className="p-6 flex-grow flex justify-center items-center">
            {selectedUtility && (
                <div className="bg-white dark:bg-gray-800 p-6 rounded-md shadow-md w-full max-w-4xl">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{selectedUtility} Content</h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                        Here you can display controls for the selected utility. Customize this section for each utility.
                    </p>

                    {/* Conditional rendering for different utilities */}
                    {selectedUtility === 'upgrade' && (
                        <div>
                            <p>Upgrade utility content goes here.</p>
                        </div>
                    )}

                    {selectedUtility === 'changeOutlets' && (
                        <div>
                            <p>Change Outlets utility content goes here.</p>
                        </div>
                    )}

                    {selectedUtility === 'orderHistory' && (
                        <div>
                            <p>Order History utility content goes here.</p>
                        </div>
                    )}

                    {selectedUtility === 'bookings' && (
                        <div>
                            <p>Bookings utility content goes here.</p>
                        </div>
                    )}

                    {selectedUtility === 'addMenu' && (
                        <div>
                            <p>Add Menu utility content goes here.</p>
                        </div>
                    )}
                </div>
            )}
        </main>
    );
};

export default UtilityWindow;
