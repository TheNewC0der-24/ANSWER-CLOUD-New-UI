import React, { createContext, useEffect, useState } from 'react';

import LoadingScreen from '../Components/LoadingScreen';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);

    const initialize = async () => {
        try {
            setLoading(true);
        } catch (error) {
            console.log(error);
            setUser(null);
        }
        setLoading(false);
    };

    useEffect(() => {
        initialize();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const login = async ({ email, password }) => {
        try {
            setLoading(true);
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    }

    const logout = async () => {
        setUser(null);
    }

    const values = {
        login,
        logout,
    }

    return (
        <AuthContext.Provider value={values}>
            {loading ? <LoadingScreen /> : children}
        </AuthContext.Provider>
    )
}


export { AuthContext, AuthProvider };