import React, { createContext, useState, useContext } from 'react';


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, SetToken] = useState(null);

    const login = (token) => {
        localStorage.setItem('token', token);
        SetToken(token);
        alert(token)
    };



    return (
        <AuthContext.Provider value={{ login }}>
            {children}
        </AuthContext.Provider>
    );
};
