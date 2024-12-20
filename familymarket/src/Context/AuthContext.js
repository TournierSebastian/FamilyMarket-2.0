import React, { createContext, useState, useContext, useEffect } from 'react';
import { jwtDecode } from "jwt-decode";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, SetToken] = useState(null);
    const [role, setRole] = useState(null);


    const HandleSetrole = (token) => {
        const decodedToken = jwtDecode(token);
        const { role } = decodedToken;
        setRole(role);
    }


    const login = (token) => {
        localStorage.setItem('token', token);
        SetToken(token);
        HandleSetrole(token)
    };

    const logout = () => {
        window.localStorage.removeItem('token');
        SetToken(null);
        setRole(null);
        window.location.href = "/";

    };
    useEffect(() => {
        const token1 = window.localStorage.getItem('token')
        const isExpired = isTokenExpired(token1);
        if (token1) {
            SetToken(token1)
            HandleSetrole(token1);
        }
        if (isExpired) {
            logout()
        }
    }, [])


    function isTokenExpired(token) {
        if (token) {
            const tokenData = JSON.parse(atob(token.split('.')[1]));
            const tokenExpirationTime = tokenData.exp * 1000;
            const currentTime = Date.now();

            return currentTime > tokenExpirationTime;
        }
    }

    return (
        <AuthContext.Provider value={{ login, logout, role }}>
            {children}
        </AuthContext.Provider>
    );
};
