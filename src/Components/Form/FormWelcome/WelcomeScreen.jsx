import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import {
    Paper,
    Stack,
    Typography,
    Button,
    Card,
    CardContent,
    Container
} from '@mui/material';

import loginImg from '../../../assets/Images/login.svg';

const WelcomeScreen = () => {
    const navigate = useNavigate();

    return (
        <>
            <Container maxWidth="lg">
                <Card component={Stack} p={2} sx={{ backgroundColor: "#ffc106" }}>
                    <CardContent sx={{ display: 'flex' }} direction={{ xs: 'column', sm: 'row', md: "row" }}>
                        <Stack p={2} display={{ xs: 'none', sm: 'none', md: "block" }}><img src={loginImg} alt="login" style={{ width: '100%', height: '100%' }} /></Stack>
                        <Stack p={6}><Typography variant="h4">Welcome</Typography>
                            <Typography mb={2} variant="h6">This interaction is designed to provide you a simulated experience.</Typography>
                            <Button variant="contained" size='small' onClick={() => navigate('/form/work')}>Next</Button></Stack>
                    </CardContent>
                </Card>
            </Container>

            {/* <Paper component={Stack} p={3} direction={{ xs: 'column', sm: 'row', md: "row" }}>
            </Paper> */}
        </>
    )
}

export default WelcomeScreen;