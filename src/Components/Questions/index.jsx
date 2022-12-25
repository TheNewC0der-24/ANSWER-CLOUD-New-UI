import React from 'react';

import {
    Box,
    AppBar,
    Divider,
    Stack,
    Grid,
    Typography,
    Button,
    Card,
    CardContent,
} from '@mui/material';

import video from '../../assets/Videos/Video-1.mp4';

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

            <Box p={2}>
                {/* If all 3 cards */}
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <Card sx={{ backgroundColor: "#F7F8F9", marginBottom: "1rem", height: "100%" }}>
                            <CardContent>
                                <Box p={2} sx={{ bgcolor: "#1976d2" }}>
                                    <Typography color='white' variant="h4">Description</Typography>
                                </Box>
                                <Typography mt={2} variant="subtitle1">This is a video question. You will be asked to record a video of yourself answering the question.</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <Card sx={{ backgroundColor: "#F7F8F9", marginBottom: "1rem", height: "100%" }}>
                            <CardContent>
                                <Box p={2} sx={{ bgcolor: "#1976d2" }}>
                                    <Typography color='white' variant="h4">Hint</Typography>
                                </Box>
                                <Typography mt={2} variant="subtitle1">Hint Speak about your educational background, skills, experience, etc.</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <Card sx={{ backgroundColor: "#F7F8F9", height: "100%" }}>
                            <CardContent>
                                <Box p={2} mb={2} sx={{ bgcolor: "#1976d2" }}>
                                    <Typography color='white' variant="h4">Video/Audio Context</Typography>
                                </Box>
                                <video
                                    src={video}
                                    controls
                                // autoPlay
                                ></video>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

                {/* If any of 2 cards */}
                {/* <Grid container spacing={1}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Card sx={{ backgroundColor: "#F7F8F9", marginBottom: "1rem", height: "100%" }}>
                            <CardContent>
                                <Typography variant="h4">Description</Typography>
                                <Typography variant="subtitle1">This is a video question. You will be asked to record a video of yourself answering the question.</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Card sx={{ backgroundColor: "#F7F8F9", marginBottom: "1rem", height: "100%" }}>
                            <CardContent>
                                <Stack p={1} sx={{ display: "block", width: '100%' }}>
                                    <Typography variant="h4">Hint</Typography>
                                    <Typography variant="subtitle1">Speak about your educational background, skills, experience, etc.</Typography>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid> */}


                {/* If only 1 card */}
                {/* <Card sx={{ backgroundColor: "#F7F8F9", marginBottom: "1rem", height: "100%" }}>
                    <CardContent>
                        <Typography variant="h4">Description</Typography>
                        <Typography variant="subtitle1">This is a video question. You will be asked to record a video of yourself answering the question.</Typography>
                    </CardContent>
                </Card> */}



                <Box mt={2}>
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
                </Box>
            </Box>
        </>
    )
}

export default Questions;
