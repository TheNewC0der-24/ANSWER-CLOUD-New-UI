import React, { useState } from 'react';
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

const FormConfirm = () => {
    const navigate = useNavigate();
    return (
        <Container maxWidth="lg">
            <Card component={Stack} p={2} sx={{ backgroundColor: "#ffc106" }}>
                <CardContent sx={{ display: 'flex' }} direction={{ xs: 'column', sm: 'row', md: "row" }}>
                    <Stack p={2} display={{ xs: 'none', sm: 'none', md: "block" }}><img src={loginImg} alt="login" style={{ width: '100%', height: '100%' }} /></Stack>
                    <Stack p={6}><Typography variant="h4">Was the recording successful?</Typography>
                        <Typography mb={2} variant="h6">Do you see and hear yourself ? When recording for the first time on some devices,
                            there may be problems with video or sound, in which case, repeat the recording.</Typography>
                        <Box gap={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Button mx={3} variant="contained" size='small' onClick={() => navigate('/form/trouble')}>Having Trouble</Button>
                            <Button mx={3} variant="contained" size='small' onClick={() => navigate('/form/recording')}>Re-record</Button>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent:'space-between'}}>
                            <Button variant="contained" size='small' onClick={() => navigate('/form/recording')}>&#60; STEP 1: Let's check your device</Button>
                            <Button variant="contained" size='small' onClick={() => navigate('/form/startscreen')}>Next</Button>
                        </Box>
                    </Stack>//
                </CardContent>
            </Card>
        </Container>
    )
}

export default FormConfirm
