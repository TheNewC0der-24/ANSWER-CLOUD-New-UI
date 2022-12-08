import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import {
    Container,
    Card,
    CardContent,
    Paper,
    Stack,
    Typography,
    Button
} from '@mui/material';

import loginImg from '../../../assets/Images/login.svg';

const Work = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        // navigate
    };

    return (
        <>
        <Container maxWidth="lg">
        <Card component={Stack} p={2} sx={{ backgroundColor: "#ffc106" }}>
            <CardContent display={{ xs: 'flex', sm: 'flex', md: 'flex' }} direction={{ xs: 'column', sm: 'row', md: "row" }}>
                <Stack display={{ xs: 'none', sm: 'none', md: "block" }} width={{ xs: '100%', sm: '100%', md: "40%" }}><img src={loginImg} alt="login" style={{ width: '100%', height: '100%' }} /></Stack>
                <Stack display={{ xs: 'none', sm: 'none', md: "block" }} width={{ xs: '100%', sm: '100%', md: "60%" }}><Typography variant="h4">How it works?</Typography>
                    <Typography mb={2} variant="h6">It's really easy. Interactions have been prepared for you in advance, and you are simply required to record your answers to them using the camera and microphone of your computer, tablet, or phone</Typography>
                    <Typography mb={2} variant="h6">Don't worry if something goes wrong during the recording, these things happen. The good news is you can always completely start afresh using the original link provided.</Typography>
                    <Button variant="contained" size='small' onClick={() => navigate('/form/recording')}>Next</Button></Stack>
            </CardContent>
        </Card>
    </Container>
        </>
    )
}

export default Work;