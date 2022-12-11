import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useReactMediaRecorder } from "react-media-recorder";

import {
    Box,
    Alert,
    Divider,
    Stack,
    Typography,
    Button,
    Card,
    CardContent,
    Grid,
} from '@mui/material';

import video from '../../../assets/Videos/Video-1.mp4';

import styles from './FormQuestion.module.css';

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
    return <video className={styles.video} ref={videoRef} height={300} autoPlay />;
};


const FormQuestion = () => {
    const [isActive, setIsActive] = useState(false);
    // const [second, setSecond] = useState("00");
    // const [minute, setMinute] = useState("00");
    // const [counter, setCounter] = useState(0);
    const [videoNotCaptured, setVideoNotCaptured] = useState(true);

    const {
        status,
        previewStream,
        startRecording,
        stopRecording,
        resumeRecording,
        clearBlobUrl,
        pauseRecording,
        mediaBlobUrl
    } = useReactMediaRecorder({
        video: true,
        audio: true,
        echoCancellation: true
    });

    const navigate = useNavigate();

    // useEffect(() => {
    //     let intervalId;

    //     if (isActive) {
    //         intervalId = setInterval(() => {
    //             const secondCounter = counter % 60;
    //             const minuteCounter = Math.floor(counter / 60);

    //             let computedSecond =
    //                 String(secondCounter).length === 1
    //                     ? `0${secondCounter}`
    //                     : secondCounter;
    //             let computedMinute =
    //                 String(minuteCounter).length === 1
    //                     ? `0${minuteCounter}`
    //                     : minuteCounter;

    //             setSecond(computedSecond);
    //             setMinute(computedMinute);

    //             setCounter((counter) => counter + 1);
    //         }, 1000);
    //     }

    //     return () => clearInterval(intervalId);
    // }, [isActive, counter]);

    const handleStartRecording = () => {
        if (!isActive) {
            startRecording();
        } else {
            pauseRecording();
        }

        setIsActive(!isActive);
    }

    const handleStopRecording = () => {
        stopRecording();
        // setCounter(0);
        // setSecond("00");
        // setMinute("00");
        setIsActive(isActive);
        setVideoNotCaptured(false);
        pauseRecording();
    }

    const handleRetake = () => {
        clearBlobUrl();
        setVideoNotCaptured(true);
        setIsActive(false);
    }

    return (
        <>
            <Box p={2}>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={12} md={12} lg={5}>
                        <Card sx={{ backgroundColor: "#F7F8F9", marginBottom: "1rem" }}>
                            <CardContent>
                                <Stack p={1} sx={{ display: "block", width: '100%' }}>
                                    <Typography variant="h6" color='primary'>Hint : Speak about your educational background, skills, experience, etc.</Typography>
                                </Stack>
                            </CardContent>
                        </Card>

                        <Card sx={{ backgroundColor: "#F7F8F9", marginBottom: "1rem" }}>
                            <CardContent>
                                <Typography variant="h4">Description</Typography>
                                <Typography variant="subtitle1">This is a video question. You will be asked to record a video of yourself answering the question.</Typography>
                            </CardContent>
                        </Card>

                        <Card sx={{ backgroundColor: "#F7F8F9" }}>
                            <CardContent>
                                <Typography variant="h4">Video Context</Typography>
                                <video
                                    src={video}
                                    controls
                                // autoPlay
                                ></video>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={7}>
                        <Card sx={{ backgroundColor: "#F7F8F9" }}>
                            <CardContent>
                                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                    <Typography variant="h4">1/4</Typography>
                                    {/* <Box sx={{ display: "flex", gap: "0.5rem" }}>
                                        <Typography variant="subtitle1">time remaining for this question</Typography>
                                        <Typography variant="subtitle1">{minute}:{second}</Typography>
                                    </Box> */}
                                </Box>

                                <Typography mb={2} variant="h6">Tell me about yourself ?</Typography>
                                <Box mb={1} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Button my={2} onClick={handleStartRecording} variant="contained" color={isActive ? 'warning' : 'success'} size='small'>{isActive ? "Pause" : "Answer"}</Button>
                                    {
                                        isActive && (
                                            <Box sx={{ display: "flex", gap: "0.5rem" }}>
                                                <Button onClick={handleRetake} variant="outlined" color='secondary' size='small'>Retake Answer</Button>
                                                <Button onClick={handleStopRecording} variant="contained" color='secondary' size='small'>Save Answer</Button>
                                            </Box>
                                        )
                                    }
                                </Box>
                                <Divider ></Divider>
                                <Box mt={2} mb={2} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Button variant="outlined" size='small'>Back</Button>
                                    <Button onClick={() => navigate('/form/audio-question')} variant="contained" size='small'>Next</Button>
                                </Box>

                                {
                                    !isActive && (
                                        <Alert severity="info">Answer recording starts after you hit "Answer" button above.</Alert>
                                    )
                                }
                                {
                                    isActive && (
                                        <Box>
                                            {status !== "stopped" ? (
                                                <Box p={3} sx={{ backgroundColor: "#1976d2" }}>
                                                    <VideoPreview className={styles.video} stream={previewStream} />
                                                </Box>
                                            ) : (
                                                <Box p={3} sx={{ backgroundColor: "#1976d2" }}>
                                                    <video className={styles.video} src={mediaBlobUrl} controls />
                                                </Box>
                                            )}
                                        </Box>
                                    )
                                }
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default FormQuestion;
