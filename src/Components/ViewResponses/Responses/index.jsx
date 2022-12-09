import React, { useState } from 'react';
import { Video, ReactAudio } from "reactjs-media";

import {
    Container,
    Box,
    Card,
    CardContent,
    Typography,
    Divider,
    Grid,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Button,
} from '@mui/material';

import video from '../../../assets/Videos/Video-1.mp4';
import audio from '../../../assets/Audios/Audio-1.mp3';


const Responses = () => {

    const [open, setOpen] = useState(false);
    const [openAudio, setOpenAudio] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickOpenAudio = () => {
        setOpenAudio(true);
    };

    const handleCloseAudio = () => {
        setOpenAudio(false);
    };

    return (
        <>
            <Container maxWidth="lg">
                <Box mt={3}>
                    <Card sx={{ backgroundColor: "#f6f6f6", borderTop: '5px solid #1976d2' }}>
                        <CardContent>
                            <Typography mt={2} mb={3} variant="h5">Interaction Title : <span style={{ color: "#1976d2" }}>Frontend Development</span></Typography>
                            <Typography mb={3} variant="h5">Candidate Name : <span style={{ color: "#1976d2" }}>Talent Sumo</span></Typography>
                            <Typography variant="h5">Candidate Id : <span style={{ color: "#1976d2" }}>Id-2235</span></Typography>
                        </CardContent>
                    </Card>
                </Box>

                <Box mt={5}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={6} lg={4}>
                            <Card sx={{ backgroundColor: "#f6f6f6", borderTop: '5px solid #1976d2' }}>
                                <CardContent>
                                    <Typography mb={2} variant="h5">Question-1</Typography>
                                    <Box>
                                        <Typography variant="subtitle1">What is React?</Typography>
                                    </Box>
                                    <Divider />
                                    <Box mt={2} sx={{ display: 'flex', justifyContent: "end" }}>
                                        <Button variant="outlined" onClick={handleClickOpen}>
                                            Play Video
                                        </Button>
                                    </Box>
                                    <Dialog
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="alert-dialog-title"
                                        aria-describedby="alert-dialog-description"
                                    >
                                        <DialogTitle id="alert-dialog-title">
                                            {"What is React?"}
                                        </DialogTitle>
                                        <DialogContent>
                                            <DialogContentText id="alert-dialog-description">
                                                <Video
                                                    src={video}
                                                    primaryColor="#1976d2"
                                                />
                                            </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                            {/* <Button onClick={handleClose}>Disagree</Button> */}
                                            <Button onClick={handleClose} autoFocus>
                                                Close
                                            </Button>
                                        </DialogActions>
                                    </Dialog>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={4}>
                            <Card sx={{ backgroundColor: "#f6f6f6", borderTop: '5px solid #1976d2' }}>
                                <CardContent>
                                    <Typography mb={2} variant="h5">Question-1</Typography>
                                    <Box>
                                        <Typography variant="subtitle1">What is axios?</Typography>
                                    </Box>
                                    <Divider />
                                    <Box mt={2} sx={{ display: 'flex', justifyContent: "end" }}>
                                        <Button variant="outlined" onClick={handleClickOpenAudio}>
                                            Play Audio
                                        </Button>
                                    </Box>
                                    <Dialog
                                        open={openAudio}
                                        onClose={handleCloseAudio}
                                        aria-labelledby="alert-dialog-title"
                                        aria-describedby="alert-dialog-description"
                                    >
                                        <DialogTitle id="alert-dialog-title">
                                            {"What is axios?"}
                                        </DialogTitle>
                                        <DialogContent>
                                            <DialogContentText id="alert-dialog-description">
                                                <ReactAudio
                                                    src={audio}
                                                    poster="/poster.png"
                                                />
                                            </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={handleCloseAudio} autoFocus>
                                                Close
                                            </Button>
                                        </DialogActions>
                                    </Dialog>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={4}>
                            <Card sx={{ backgroundColor: "#f6f6f6", borderTop: '5px solid #1976d2' }}>
                                <CardContent>
                                    <Typography mb={2} variant="h5">Question-1</Typography>
                                    <Divider />
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Container>

        </>
    )
}

export default Responses;