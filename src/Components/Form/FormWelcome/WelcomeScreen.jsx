import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import {
    Paper,
    Stack,
    Typography,
    Button
} from '@mui/material';

const WelcomeScreen = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        // navigate
    };

    return (
        <>
            <Paper component={Stack} p={3} direction={{ xs: 'column', sm: 'row', md: "row" }}>
                {/*************** Internal Bot ***************/}
                <Stack display={{ xs: 'none', sm: 'none', md: "block" }} width={{ xs: '100%', sm: '100%', md: "40%" }}>A</Stack>
                <Stack display={{ xs: 'none', sm: 'none', md: "block" }} width={{ xs: '100%', sm: '100%', md: "60%" }}>C</Stack>
                <Typography variant="h4">Welcome</Typography>
                <Typography mb={2} variant="h6">This interaction is designed to provide you a simulated experience.</Typography>
                <Button variant="contained" size='small' onClick={handleNext}>Next</Button>
            </Paper>
        </>
    )
}

export default WelcomeScreen;