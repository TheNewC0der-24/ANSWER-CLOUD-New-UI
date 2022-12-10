import React from 'react';
import { useNavigate } from 'react-router-dom'

import {
    Box,
    Stack,
    Typography,
    Grid,
    Card,
    CardContent,
    Button,
} from '@mui/material';

import startImg from '../../../assets/Images/start.svg';


const FormStartScreen = () => {
    const navigate = useNavigate();
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center', margin: "auto" }} p={6} maxWidth="lg">
                <Card component={Stack} p={2} sx={{ backgroundColor: "#F7F8F9" }}>
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12} md={6}>
                                <Stack p={2} sx={{ backgroundColor: "#1976d2" }}>
                                    <img src={startImg} alt="let's-Start" style={{ width: '100%', height: '100%' }} />
                                </Stack>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6}>
                                <Stack p={2}>
                                    <Typography variant="h4">Ready to get started?</Typography>
                                    <Typography mb={2} variant="h6">Great, everything is ready for you to record your interaction.</Typography>
                                    <Typography mb={2} variant="h6">After clicking the "Start" button below, the camera and microphone will turn on & you'll see questions throughout the interaction that you'll need to answer.</Typography>
                                    <Typography mb={2} variant="h6">Please note, you may need to grant permission on your device again to use your camera and microphone.</Typography>
                                    <Typography mb={2} variant="h6">Best of Luck!</Typography>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: "wrap" }}>
                                        <Button variant="outlined" size='small' onClick={() => navigate('/form/check')}>&#60; STEP 1: Let's check your device</Button>
                                        <Button variant="contained" size='small' onClick={() => navigate('/form/video-question')}>Start</Button>
                                    </Box>
                                </Stack>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Box>
        </>
    )
}

export default FormStartScreen
