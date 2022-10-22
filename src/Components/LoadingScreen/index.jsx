import React from 'react';

import {
    Stack,
    Box,
    LinearProgress
} from "@mui/material";

const LoadingScreen = () => {

    return (
        <Box sx={{ width: '100vw', height: '100vh' }}>
            <Box sx={{
                width: '15rem', height: '15rem',
                position: 'absolute',
                top: '30%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
            }}>
                <img src="/brand.png" alt="logo" />

                <Stack pl={2} pr={2}>
                    <LinearProgress />
                </Stack>
            </Box>
        </Box>
    );
}

export default LoadingScreen;