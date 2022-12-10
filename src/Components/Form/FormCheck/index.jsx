import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { ReactMediaRecorder } from "react-media-recorder";
import styles from './FormCheck.module.css';

import {
    Box,
    Stack,
    Grid,
    Typography,
    Button,
    Card,
    CardContent,
    // Container
} from '@mui/material';

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
        return <video ref={videoRef} className={styles.video} height={300} autoPlay />;
    };

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center', margin: "auto" }} p={6} maxWidth="lg">
                <Card component={Stack} p={2} sx={{ backgroundColor: "#F7F8F9" }}>
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12} md={6}>
                                <Stack p={2}>
                                    <ReactMediaRecorder
                                        video={{
                                            aspectRatio: 0.75
                                        }}
                                        render={({ previewStream, status, startRecording, stopRecording, mediaBlobUrl }) => (
                                            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                                                {status !== "stopped" ? (
                                                    <VideoPreview stream={previewStream} />
                                                ) : (
                                                    <video className={styles.video} src={mediaBlobUrl} autoPlay loop height={200} controls />
                                                )}
                                                <Box mx={2} my={3} gap={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                                                    <Button variant="outlined" onClick={startRecording} color='secondary'>Start Recording</Button>
                                                    <Button variant="contained" onClick={stopRecording} color='secondary'>Stop Recording</Button>
                                                </Box>
                                            </Box>
                                        )}
                                    />
                                </Stack>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6}>
                                <Stack p={2}>
                                    <Typography variant="h4">STEP 1: Let's check your device</Typography>
                                    <Typography mb={2} variant="h6">On your device, please grant access to your camera and/or microphone. Run a test recording to ensure you can see and hear yourself clearly.</Typography>
                                    <Typography mb={2} variant="h6">Don't worry, this is just a test recording, and won't be shared with anyone else.</Typography>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Button variant='outlined' size='small' onClick={() => navigate('/form/work')}>&#60; How it Works?</Button>
                                        <Button variant="contained" size='small' onClick={() => navigate('/form/confirm')}>Next</Button>
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

export default FormRecording;