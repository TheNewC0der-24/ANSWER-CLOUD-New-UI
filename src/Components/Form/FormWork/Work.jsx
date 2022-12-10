import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import {
    Container,
    Card,
    Grid,
    CardContent,
    // Paper,
    Stack,
    Typography,
    Button
} from '@mui/material';

import workImg from '../../../assets/Images/how-it-works.svg';

const Work = () => {
    const navigate = useNavigate();

    return (
        <>
            <Container maxWidth="lg">
                <Card mt={5} mb={3} component={Stack} p={2} sx={{ backgroundColor: "#F7F8F9" }}>
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12} md={6}>
                                <Stack p={2} sx={{ backgroundColor: "#1976d2" }}>
                                    <img src={workImg} alt="work" style={{ width: '100%', height: '100%' }} />
                                </Stack>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6}>
                                <Stack p={2}>
                                    <Typography variant="h4">How it works?</Typography>
                                    <Typography mb={2} variant="h6">It's really easy. Interactions have been prepared for you in advance, and you are simply required to record your answers to them using the camera and microphone of your computer, tablet, or phone</Typography>
                                    <Typography mb={2} variant="h6">Don't worry if something goes wrong during the recording, these things happen. The good news is you can always completely start fresh using the original link provided.</Typography>
                                    <Button variant="contained" size='small' onClick={() => navigate('/form/check')}>Next</Button>
                                </Stack>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Container>
        </>
    )
}

export default Work;