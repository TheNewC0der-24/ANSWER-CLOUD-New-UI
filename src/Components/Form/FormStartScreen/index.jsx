import React from 'react';
import { useNavigate } from 'react-router-dom'

import {
    Box,
    Stack,
    Typography,
    Button,
    Card,
    CardContent,
    Container
} from '@mui/material';

import loginImg from '../../../assets/Images/login.svg';


const FormStartScreen = () => {
    const navigate = useNavigate();
    return (
        <>
            <Container maxWidth="lg">
                <Card component={Stack} p={2} sx={{ backgroundColor: "#ffc106" }}>
                    <CardContent sx={{ display: 'flex' }} direction={{ xs: 'column', sm: 'row', md: "row" }}>
                        <Stack p={2} display={{ xs: 'none', sm: 'none', md: "block" }}><img src={loginImg} alt="login" style={{ width: '100%', height: '100%' }} /></Stack>
                        <Stack p={6}><Typography align='center' variant="h4">Ready to get started?</Typography>
                            <Typography align="justify" mb={2} variant="h6">Great, everything is ready for you to record your interaction.</Typography>
                            <Typography align="justify" mb={2} variant="h6">After clicking the "Start" button below, the camera and microphone will turn on & you'll see questions throughout the interaction that you'll need to answer.</Typography>
                            <Typography align="justify" mb={2} variant="h6">Please note, you may need to grant permission on your device again to use your camera and microphone.</Typography>
                            <Typography align="center" mb={2} variant="h6">Best of Luck!</Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
                                <Button variant="contained" size='small' onClick={() => navigate('/form/recording')}>&#60; STEP 1: Let's check your device</Button>
                                <Button variant="contained" size='small' onClick={() => navigate('/form/question')}>Start</Button>
                            </Box>
                        </Stack>
                    </CardContent>
                </Card>
            </Container>
        </>
    )
}

export default FormStartScreen
