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
    const [videonotCaptured, setVideoNotCaptured] = useState(true);

    // const [time, setTime] = useState({ s: 0, m: 2 });
    // const [interv, setInterv] = useState();

    const {
        status,
        previewStream,
        startRecording,
        stopRecording,
        pauseRecording,
        mediaBlobUrl
    } = useReactMediaRecorder({
        video: true,
        audio: true,
        echoCancellation: true
    });

    const navigate = useNavigate();

    const handleStartRecording = () => {
        if (!isActive) {
            startRecording();
        } else {
            pauseRecording();
        }

        setIsActive(!isActive);
        // run();
        // setInterv(setInterval(run, 1000));
        document.getElementById("instruction").innerHTML = isActive ? "Paused" : "Started";
    }

    const handleStopRecording = () => {
        stopRecording();
        setIsActive(isActive);
        setVideoNotCaptured(false);
        pauseRecording();
        // clearInterval(interv);
        document.getElementById("instruction").innerHTML = "Saved";
        document.getElementById("note").innerHTML = "Your answer is Saved";
        // document.getElementById("instruction").innerHTML = "Stopped";
    }

    // var updatedS = time.s, updatedM = time.m;

    // const run = () => {
    //     if (updatedM === 0 && updatedS === 0) {
    //         // stopRecording();
    //         handleStopRecording();
    //         document.getElementById("instruction").innerHTML = "Saved";
    //         return;
    //     }
    //     if (updatedS === 0) {
    //         updatedM--;
    //         updatedS = 60;
    //     }
    //     updatedS--;
    //     return setTime({ m: updatedM, s: updatedS });
    // }

    return (
        <>
            <Box p={2}>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={12} md={12} lg={5}>
                        <Card sx={{ backgroundColor: "#F7F8F9", marginBottom: "1rem" }}>
                            <CardContent>
                                <Stack p={1} sx={{ display: "block", width: '100%' }}>

                                    <Typography mb={2} variant="h6" color='primary'>Hint : Speak about your educational background, skills, experience, etc.</Typography>
                                    <Box mb={1} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Button my={2} onClick={handleStartRecording} variant="contained" color={isActive ? 'warning' : 'success'} size='small'>{isActive ? "Pause" : "Answer"}</Button>
                                        {
                                            isActive && (
                                                <Box sx={{ display: "flex", gap: "0.5rem" }}>
                                                    <Button my={2} onClick={() => window.location.reload()} variant="outlined" color='secondary' size='small'>Retake Answer</Button>
                                                    <Button my={2} onClick={handleStopRecording} variant="contained" color='secondary' size='small'>Save Answer</Button>
                                                </Box>
                                            )
                                        }
                                    </Box>
                                    <Divider ></Divider>
                                    <Box mt={2} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Button variant="outlined" size='small'>Back</Button>
                                        <Button onClick={() => navigate('/form/audio-question')} variant="contained" size='small'>Next</Button>
                                    </Box>
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
                                        <Typography variant="subtitle1">{time.m >= 10 ? time.m : "0" + time.m}&nbsp;:&nbsp;{time.s >= 10 ? time.s : "0" + time.s}</Typography>
                                    </Box> */}
                                </Box>

                                <Typography variant="h6">Tell me about yourself ?</Typography>

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
