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
    Container
} from '@mui/material';

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


const FormQuestion = () => {
    const [isActive, setIsActive] = useState(false);
    const [videonotcaptured, setVideoNotCaptured] = useState(true);

    const [time, setTime] = useState({ s: 0, m: 2 });
    const [interv, setInterv] = useState();

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
        run();
        setInterv(setInterval(run, 1000));
        document.getElementById("instruction").innerHTML = isActive ? "Paused" : "Started";
    }

    const handleStopRecording = () => {
        stopRecording();
        setIsActive(isActive);
        setVideoNotCaptured(false);
        pauseRecording();
        clearInterval(interv);
        document.getElementById("instruction").innerHTML = "Saved";
        document.getElementById("note").innerHTML = "Your answer is Saved";
        // document.getElementById("instruction").innerHTML = "Stopped";
    }

    var updatedS = time.s, updatedM = time.m;

    const run = () => {
        if (updatedM === 0 && updatedS === 0) {
            // stopRecording();
            handleStopRecording();
            document.getElementById("instruction").innerHTML = "Saved";
            return;
        }
        if (updatedS === 0) {
            updatedM--;
            updatedS = 60;
        }
        updatedS--;
        return setTime({ m: updatedM, s: updatedS });
    }

    return (
        <>
            <Box gap={2} sx={{ display: 'flex' }} p={2} direction={{ xs: 'column', sm: 'row', md: "row" }} >
                <Box sx={{ display: 'flex', flexDirection: 'column' }} width={{ xs: '100%', sm: '50%', md: "50%" }}>
                    <Card component={Stack} p={1} sx={{ backgroundColor: "#F7F8F9" }}>
                        <CardContent sx={{ display: 'flex' }} direction={{ xs: 'column', sm: 'row', md: "row" }}>
                            <Stack p={1} sx={{ display: "block", width: '100%' }}>
                                <Typography variant="h6">1/4</Typography>
                                <Typography variant="h6">Tell me about yourself ?</Typography>
                                <Typography mb={2} variant="h6" color='primary'>Hint : Speak about your educational background, skills, experience, etc.</Typography>
                                <Box mb={1} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Button my={2} onClick={handleStartRecording} variant="contained" color='success' size='small'>{isActive ? "Pause" : "Answer"}</Button>
                                {
                                    isActive && (
                                        <Button my={2} onClick={handleStopRecording} variant="contained" size='small'>Save Answer</Button>
                                        
                                        )
                                    }
                                <Button my={2} onClick={() => window.location.reload()} variant="contained" size='small'>Retake Answer</Button>
                                </Box>
                                <Divider ></Divider>
                                <Box mt={2} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Button variant="outlined" size='small'>Back</Button>
                                    <Button onClick={() => navigate('/form/audio-question')} variant="contained" size='small'>Next</Button>
                                </Box>
                            </Stack>
                        </CardContent>
                    </Card>
                    <Card my={2} component={Stack} p={1} sx={{ width: '100%', backgroundColor: "#F7F8F9" }}>
                        <CardContent>
                            <Typography variant="h4">Video Context</Typography>
                            <video
                                // src={video1}
                                title="YouTube video"
                                controls
                                autoPlay
                            ></video>
                        </CardContent>
                    </Card>
                </Box>
                <Box sx={{ width: '100%', height: '100%' }}>
                    <Card component={Stack} p={1} sx={{ backgroundColor: "#F7F8F9", width: '100%' }}>
                        <CardContent sx={{ display: 'flex' }} direction={{ xs: 'column', sm: 'row', md: "row" }}>
                            <Stack sx={{ width: '100%' }} p={3}><Typography variant="h4">Answer Box</Typography>
                                <Typography mb={2} variant="h6">time remaining for this question</Typography><Typography variant="h4">{time.m >= 10 ? time.m : "0" + time.m}&nbsp;:&nbsp;{time.s >= 10 ? time.s : "0" + time.s}</Typography>
                                <Alert severity="error">Answer recording starts after you hit "Answer" button above.</Alert>
                                {
                                    isActive && (
                                        <div className="ratio ratio-16x9">
                                            {status !== "stopped" ? (
                                                <VideoPreview stream={previewStream} />
                                            ) : (
                                                <video src={mediaBlobUrl} controls />
                                            )}
                                        </div>
                                    )
                                }
                            </Stack>
                        </CardContent>
                    </Card>
                </Box>
            </Box>
        </>
    )
}

export default FormQuestion
