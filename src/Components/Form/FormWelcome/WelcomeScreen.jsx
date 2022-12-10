import React from 'react';
import { useNavigate } from 'react-router-dom'

import {
    // Paper,
    Stack,
    Grid,
    Typography,
    Button,
    Card,
    CardContent,
    Container
} from '@mui/material';

import welcomeImg from '../../../assets/Images/welcome.svg';

const WelcomeScreen = () => {
    const navigate = useNavigate();

    return (
        <>
            <Container maxWidth="lg">
                <Card mt={5} mb={3} component={Stack} p={2} sx={{ backgroundColor: "#F7F8F9" }}>
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12} md={6}>
                                <Stack p={2} sx={{ backgroundColor: "#1976d2" }}>
                                    <img src={welcomeImg} alt="welcome" style={{ width: '100%', height: '100%' }} />
                                </Stack>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6}>
                                <Stack p={2}>
                                    <Typography variant="h4">Welcome</Typography>
                                    <Typography mb={2} variant="h6">This interaction is designed to provide you a simulated experience.</Typography>
                                    <Button variant="contained" size='small' onClick={() => navigate('/form/work')}>Next</Button>
                                </Stack>
                            </Grid>
                        </Grid>


                    </CardContent>
                </Card>
            </Container>
        </>
    )
}

export default WelcomeScreen;