import React, { useState } from 'react';

import LoadingScreen from '../Components/LoadingScreen';

const Context = ({ children }) => {

    const [loading, setLoading] = useState(true);

    return (
        <div>
            {loading ? <LoadingScreen /> : children}
        </div>
    )
}

export default Context;