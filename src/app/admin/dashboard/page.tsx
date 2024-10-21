"use client";

import React from 'react';

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Navbar */}
            <header className="bg-white shadow-sm">
                <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-gray-800">Restaurant Admin</h1>
                    <nav>
                        <ul className="flex space-x-6">
                            <li><a href="#" className="text-gray-600 hover:text-gray-800">Dashboard</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-800">Orders</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-800">Menu</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-800">Settings</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Main content */}
            <div className="container mx-auto px-4 py-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Dashboard Overview</h2>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {/* Card components */}
                    <DashboardCard title="Today's Orders" value="24" color="bg-green-500" />
                    <DashboardCard title="Total Sales" value="$1,200" color="bg-blue-500" />
                    <DashboardCard title="Active Menu Items" value="45" color="bg-yellow-500" />
                    <DashboardCard title="Pending Orders" value="5" color="bg-red-500" />
                </div>

                {/* Recent Orders */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Orders</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-gray-50 text-left">
                                    <th className="py-3 px-4 font-semibold text-gray-600">Time</th>
                                    <th className="py-3 px-4 font-semibold text-gray-600">Order ID</th>
                                    <th className="py-3 px-4 font-semibold text-gray-600">Table ID</th>
                                    <th className="py-3 px-4 font-semibold text-gray-600">Total</th>
                                    <th className="py-3 px-4 font-semibold text-gray-600">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <OrderRow time="39s" orderId="#1001" tableId="Table 1" total="$50.00" status="Completed" />
                                <OrderRow time="1m" orderId="#1002" tableId="Table 2" total="$35.00" status="Pending" />
                                {/* Add more rows as needed */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

// ... existing code ...

const DashboardCard = ({ title, value, color }: { title: string; value: string; color: string }) => (
    <div className={`${color} rounded-lg shadow-md p-6 text-white`}>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-3xl font-bold">{value}</p>
    </div>
);

const OrderRow = ({ time, orderId, tableId, total, status }: { time: string; orderId: string; tableId: string; total: string; status: string }) => (
    <tr className="border-b border-gray-200 hover:bg-gray-50">
        <td className="py-3 px-4 text-gray-800">{time}</td>
        <td className="py-3 px-4 text-gray-800">{orderId}</td>
        <td className="py-3 px-4 text-gray-800">{tableId}</td>
        <td className="py-3 px-4 text-gray-800">{total}</td>
        <td className="py-3 px-4">
            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                status === 'Completed' ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'
            }`}>
                {status}
            </span>
        </td>
    </tr>
);

export default Dashboard;