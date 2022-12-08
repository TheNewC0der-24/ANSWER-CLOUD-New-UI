import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { ReactMediaRecorder } from "react-media-recorder";

import {
    Box,
    Stack,
    Typography,
    Button,
    Card,
    CardContent,
    Container
} from '@mui/material';

// import loginImg from '../../../assets/Images/login.svg';

const FormRecording = () => {
    const navigate = useNavigate();
    const VideoPreview = ({ stream }) => {
        const videoRef = useRef(null);

        useEffect(() => {
            if (videoRef.current && stream) {
                videoRef.current.srcObject = stream;
            }
        }, [stream]);
        if (!stream) {
            return null;
        }
        return <video ref={videoRef} className="w-100" height={300} autoPlay />;
    };

    return (
        <>
            <Container maxWidth="lg">
                <Card component={Stack} p={2} sx={{ backgroundColor: "#ffc106" }}>
                    <CardContent sx={{ display: 'flex' }} direction={{ xs: 'column', sm: 'row', md: "row" }}>
                        <Stack p={2} display={{ xs: 'none', sm: 'none', md: "block" }}>
                            <ReactMediaRecorder
                                video={{
                                    aspectRatio: 0.75
                                }}
                                render={({ previewStream, status, startRecording, stopRecording, mediaBlobUrl }) => (
                                    <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                                        {status !== "stopped" ? (
                                            <VideoPreview stream={previewStream} />
                                        ) : (
                                            <video sx={{ width: '100%' }} src={mediaBlobUrl} autoPlay loop height={300} controls />
                                        )}
                                        <Box mx={2} my={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                                            <button onClick={startRecording} className="btn btn-outline-light">Start Recording</button>
                                            <button onClick={stopRecording} className="btn btn-outline-light">Stop Recording</button>
                                        </Box>
                                    </Box>
                                )}
                            /></Stack>

                        <Stack p={6}>
                            <Typography variant="h4">STEP 1: Let's check your device</Typography>
                            <Typography mb={2} variant="h6">On your device, please grant access to your camera and/or microphone. Run a test recording to ensure you can see and hear yourself clearly.</Typography>
                            <Typography mb={2} variant="h6">Don't worry, this is just a test recording, and won't be shared with anyone else.</Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Button variant="contained" size='small' onClick={() => navigate('/form/work')}>&#60; How it Works?</Button>
                                <Button variant="contained" size='small' onClick={() => navigate('/form/confirm')}>Next</Button>
                            </Box>
                        </Stack>
                    </CardContent>
                </Card>
            </Container>
        </>
    )
}

export default FormRecording;