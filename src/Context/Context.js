import React, { createContext, useEffect, useState } from 'react';

import LoadingScreen from '../Components/LoadingScreen';

const Context = createContext();

const ContextProvider = ({ children }) => {

    const [loading, setLoading] = useState(false);

    const initialize = async () => {
        try {
            setLoading(true);
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    };

    useEffect(() => {
        initialize();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const values = {
        login,
        logout,
    }

    return (
        <Context.Provider value={values}>
            {loading ? <LoadingScreen /> : children}
        </Context.Provider>
    )
}


export default { Context, ContextProvider };