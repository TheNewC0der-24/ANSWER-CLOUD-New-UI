import React from 'react';
import { useNavigate } from 'react-router-dom'

import {
    Box,
    Stack,
    Typography,
    Button,
    Card,
    CardContent,
    Divider,
    Grid,
    ListItem,
    ListItemText,
    ListItemButton
} from '@mui/material';

import troubleImg from '../../../assets/Images/trouble.svg';

const systemInstructionOptions = [
    {
        value: "1. Check the quality of your Internet connection, if you are using proxy servers - turn them off",
    },
    {
        value: "2. Close applications that may affect the quality of data transfer (online video and audio services, etc.)",
    },
    {
        value: "3. When using a cell phone or tablet - close all other applications except the browser",
    },
    {
        value: "4. If you don't hear the sound of the recorded video, check that the sound on your device is turned on",
    },
    {
        value: "5. Try to close all browser tabs (including the current one) and then click on the interaction link again",
    },
];

const FormTrouble = () => {
    const navigate = useNavigate();
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center', margin: "auto" }} p={6} maxWidth="lg">
                <Card component={Stack} p={2} sx={{ backgroundColor: "#F7F8F9" }}>
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12} md={6}>
                                <Stack p={2} sx={{ backgroundColor: "#1976d2" }} display={{ xs: 'none', sm: 'none', md: "block" }}>
                                    <img src={troubleImg} alt="trouble" style={{ width: '100%', height: '100%' }} />
                                </Stack>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6}>
                                <Stack p={2}>
                                    <Typography align='center' variant="h4">Having trouble with recording?</Typography>
                                    {systemInstructionOptions.map((item) => (
                                        <ListItem key={item.value} component="div" disablePadding>
                                            <ListItemButton>
                                                <ListItemText primary={item.value} />
                                                <Divider />
                                            </ListItemButton>
                                        </ListItem>
                                    ))}
                                    <Box mt={3}>
                                        <Button fullWidth variant="contained" size='small' onClick={() => navigate('/form/confirm')}>Back</Button>
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

export default FormTrouble
