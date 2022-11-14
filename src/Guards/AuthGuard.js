import { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

import useAuth from "../Hooks/useAuth";

import Login from "../Components/Login";

export default function AuthGuard({ children }) {
    const { user } = useAuth();
    const { pathname } = useLocation();

    const [requestLocation, setRequestLocation] = useState(null);

    if (!user) {
        if (pathname !== '/login') {
            setRequestLocation(pathname);
        }
        return <Login />
    }

    if (requestLocation && pathname !== requestLocation) {
        setRequestLocation(null);
        return <Navigate to={requestLocation} />
    }

    return (
        <>
            {children}
        </>
    )
}