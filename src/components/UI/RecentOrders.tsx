// src/assets/components/UI/RecentOrders.tsx
import React from 'react';

const RecentOrders = () => {
    const orders = [
        { table: 5, items: 'Pizza, Pasta', time: '12:30 PM' },
        { table: 7, items: 'Burger, Fries', time: '1:00 PM' },
    ];

    return (
        <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Recent Orders</h3>
            <ul>
                {orders.map((order, index) => (
                    <li key={index} className="mb-3">
                        <span className="font-bold">Table {order.table}</span> - {order.items} at {order.time}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecentOrders;
