"use client";

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Logging in with:', { email, password });
        router.push('/admin/dashboard');  // Redirect after login
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-sm flex flex-col justify-center items-center">
                <h2 className="text-center text-2xl font-bold mb-6">Restaurant Login</h2>
                <form onSubmit={handleLogin} className="w-full space-y-4">
                    <Input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full"
                    />
                    <Input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full"
                    />
                    <Button type="submit" 
                    className="w-full bg-gradient-to-r from-orange-500 to-yellow-500
                    text-white font-semibold py-3 rounded-lg shadow-lg 
                    transform transition-all duration-300 
                    hover:scale-105 hover:shadow-xl 
                    focus:outline-none focus:ring-2
                    focus:ring-orange-600">Login
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
