import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

export default function GuestGuard({ children }) {
    const { user } = useAuth();

    if (user) {
        return <Navigate to="/dashboard" />
    }

    return (
        <>
            {children}
        </>
    )
}