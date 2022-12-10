import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import {
    Box,
    Stack,
    Grid,
    Typography,
    Button,
    Card,
    CardContent,
    // Container
} from '@mui/material';

import confirmImg from '../../../assets/Images/confuse.png';

const FormConfirm = () => {

    const navigate = useNavigate();

    const style = {
        backgroundColor: "#1976d2",
        width: "auto",
    }

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', margin: "auto" }} p={6} maxWidth="lg">
            <Card component={Stack} p={2} sx={{ backgroundColor: "#F7F8F9" }}>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={6}>
                            <Stack p={2} style={style} display={{ xs: 'none', sm: 'none', md: "block" }}>
                                <img src={confirmImg} alt="confirm" />
                            </Stack>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <Stack p={2}>
                                <Typography variant="h4">Was the recording successful?</Typography>
                                <Typography mb={2} variant="h6">Do you see and hear yourself ? When recording for the first time on some devices,
                                    there may be problems with video or sound, in which case, repeat the recording.</Typography>
                                <Box gap={1} mb={5} sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Button variant="contained" color='warning' size='small' onClick={() => navigate('/form/trouble')}>Having Trouble</Button>
                                    <Button variant="contained" size='small' color='success' onClick={() => navigate('/form/check')}>Re-record</Button>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: "wrap" }}>
                                    <Button variant="outlined" size='small' onClick={() => navigate('/form/check')}>&#60; STEP 1: Let's check your device</Button>
                                    <Button variant="contained" size='small' onClick={() => navigate('/form/letStart')}>Next</Button>
                                </Box>
                            </Stack>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    )
}

export default FormConfirm
