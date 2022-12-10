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

import thanksImg from '../../../assets/Images/thankForm.svg';


const FormThankyou = () => {
    return (
        <>
            <Box p={3} sx={{ display: 'flex', justifyContent: 'center', margin: 'auto' }} maxWidth="lg">
                <Card sx={{ backgroundColor: "#F7F8F9" }}>
                    <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Box my={2}>
                            <img src={thanksImg} alt="ThankYou" width={200} />
                        </Box>
                        <Typography mb={3} align='center' variant='h2'>Thank You!</Typography>
                        <Typography align='center' variant='h5'>The interaction is now complete. This will now be analyzed by our AI
                            models (and coaches/HR managers, if applicable). You or your administrator will receive a
                            detailed feedback on the same within next 72 hours.</Typography>
                        <Typography mt={3} variant='h6'>Now you can close this window!!</Typography>
                    </CardContent>
                </Card>
            </Box>

        </>
    )
}

export default FormThankyou
