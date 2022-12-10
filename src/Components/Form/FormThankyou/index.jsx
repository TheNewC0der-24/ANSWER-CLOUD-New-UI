import React from 'react';

// import styles from './ThankYou.module.css';

import {
    Box,
    Container,
    Card,
    CardContent,
    Stack,
    Typography,
} from '@mui/material';

import loginImg from '../../../assets/Images/login.svg';


const FormThankyou = () => {
    return (
        <>
            <Container maxWidth="lg">
                <Card component={Stack} p={2} sx={{ backgroundColor: "#ffc106" }}>
                    <CardContent sx={{ display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Box my={2} sx={{ width: "20%" }}>
                            <img src={loginImg} alt="login" style={{ width: '100%', height: '100%' }} />
                        </Box>
                        <Typography variant='h1'>Thank You!</Typography>
                        <Typography variant='h5'>The interaction is now complete. This will now be analyzed by our AI
                            models (and coaches/HR managers, if applicable). You or your administrator will receive a
                            detailed feedback on the same within next 72 hours.</Typography>
                        <Typography variant='h6'>Now you can close this window!!</Typography>
                    </CardContent>
                </Card>
            </Container>

        </>
    )
}

export default FormThankyou
