import { useContext } from 'react';
import AuthContext from '../Context/Context';

const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) throw new Error('Auth must be used within an AuthProvider');

    return context;

}

export default useAuth;