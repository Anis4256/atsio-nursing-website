import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check if user is logged in on app start
        const token = localStorage.getItem('adminToken');
        const userData = localStorage.getItem('adminUser');

        if (token && userData) {
            setUser(JSON.parse(userData));
        }
        setLoading(false);
    }, []);

    const login = async (username, password) => {
        try {
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                return {
                    success: false,
                    message: errorData.message || `HTTP ${response.status}: ${response.statusText}`
                };
            }

            const data = await response.json();

            if (data.success && data.access_token) {
                localStorage.setItem('adminToken', data.access_token);
                localStorage.setItem('adminUser', JSON.stringify(data.user));
                setUser(data.user);
                return { success: true };
            } else {
                return {
                    success: false,
                    message: data.message || 'Login failed. Please check your credentials.'
                };
            }
        } catch (error) {
            console.error('Login error:', error);
            return {
                success: false,
                message: 'Network error. Please check your connection and try again.'
            };
        }
    };

    const logout = () => {
        localStorage.removeItem('adminToken');
        localStorage.removeItem('adminUser');
        setUser(null);
    };

    const isAuthenticated = () => {
        return user !== null;
    };

    const makeAuthenticatedRequest = async (url, options = {}) => {
        const token = localStorage.getItem('adminToken');

        const defaultHeaders = {};

        if (token) {
            defaultHeaders['Authorization'] = `Bearer ${token}`;
        }

        if (!(options.body instanceof FormData)) {
            defaultHeaders['Content-Type'] = 'application/json';
        }

        const response = await fetch(url, {
            ...options,
            headers: {
                ...defaultHeaders,
                ...options.headers,
            },
        });

        if (response.status === 401) {
            // Token expired or invalid, logout user
            logout();
            throw new Error('Authentication expired. Please login again.');
        }

        return response;
    };

    const value = {
        user,
        login,
        logout,
        isAuthenticated,
        loading,
        makeAuthenticatedRequest,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
