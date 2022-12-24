import React from 'react';

import {
    Box,
    AppBar,
    Divider,
    Container,
    Typography,
    Button,
    Card,
    CardContent,
} from '@mui/material';



const Questions = () => {

    return (
        <>
            <AppBar position="static">
                <Box p={2} sx={{ display: 'flex' }}>
                    <Typography color='white' variant="h5">
                        Session
                    </Typography>
                </Box>
            </AppBar>

            <Container maxWidth='lg' sx={{ marginTop: "5rem" }}>
                <Card sx={{ backgroundColor: "#F7F8F9" }}>
                    <CardContent>
                        <Typography variant="h4">1/4</Typography>
                        <Typography mb={2} variant="h6">Tell me about yourself ?</Typography>
                        <Divider ></Divider>
                        <Box mt={2} mb={2} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Button variant="outlined" size='small'>Back</Button>
                            <Button variant="contained" size='small'>Next</Button>
                        </Box>
                    </CardContent>
                </Card>
            </Container>
        </>
    )
}

export default Questions;
