import React from 'react';
import { useNavigate } from 'react-router-dom'

import {
    Stack,
    Typography,
    Button,
    Card,
    CardContent,
    Container,
    ListItem,
    ListItemText,
    ListItemButton
} from '@mui/material';

import loginImg from '../../../assets/Images/login.svg';

const systemInstructionOptions = [
    {
        value: "1. Please make sure you are in center of camera.",
    },
    {
        value: "2. Make sure you have good lighting.",
    },
    {
        value: "3. Use professional dress while recording.",
    },
    {
        value: "4. Not ready for video yet? Toggle video off to record responses as audio.",
    },
    {
        value: "5. You will have a preview of video before you finalize.",
    },
    {
        value: "6. Limit your answers to two minutes, timer will guide you.",
    },
    {
        value: "7. And lastly smile more, smile often. Good Luck!",
    },
];

const FormTrouble = () => {
    const navigate = useNavigate();
    return (
        <>
            <Container maxWidth="lg">
                <Card component={Stack} p={2} sx={{ backgroundColor: "#ffc106" }}>
                    <CardContent sx={{ display: 'flex' }} direction={{ xs: 'column', sm: 'row', md: "row" }}>
                        <Stack p={2} display={{ xs: 'none', sm: 'none', md: "block" }}><img src={loginImg} alt="login" style={{ width: '100%', height: '100%' }} /></Stack>
                        <Stack p={6}><Typography align='center' variant="h4">Having trouble with recording ?</Typography>
                            {systemInstructionOptions.map((item) => (
                                <ListItem key={item.value} component="div" disablePadding>
                                    <ListItemButton>
                                        <ListItemText primary={item.value} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                            <Button variant="contained" size='small' onClick={() => navigate('/form/recording')}>&#60; STEP 1: Let's check your device</Button></Stack>
                    </CardContent>
                </Card>
            </Container>
        </>
    )
}

export default FormTrouble
