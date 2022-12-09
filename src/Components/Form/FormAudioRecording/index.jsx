import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Recorder } from "react-voice-recorder";
import "react-voice-recorder/dist/index.css";

import {
  Container,
  Card,
  CardContent,
  Box,
  Typography,
  Divider,
  Button,
  Stack
} from '@mui/material';

const FromAudioRecording = () => {
  const navigate = useNavigate();

  const [active, setActive] = useState(false);

  const [state, setState] = useState({
    audioDetails: {
      url: null,
      blob: null,
      chunks: null,
      duration: {
        h: 0,
        m: 0,
        s: 0,
      },
    },
  });

  const handleAudioStop = (data) => {
    // console.log(data);
    setState({ audioDetails: data });
  };

  const handleCountDown = (data) => {
    // console.log(data);
  };

  function handleReset() {
    const reset = {
      url: null,
      blob: null,
      chunks: null,
      duration: {
        h: 0,
        m: 0,
        s: 0,
      },
    };
    setState({ audioDetails: reset });
  }

  // const handleClickStart = () => {
  //   if (!isActive) {
  //     startRecording();
  //   } else {
  //     pauseRecording();
  //   }

  //   setIsActive(!isActive);
  // }

  // const handleClickStop = () => {
  //   pauseRecording();
  //   stopRecording();
  //   setIsActive(!isActive);
  // }

  // const [second, setSecond] = useState("00");
  // const [minute, setMinute] = useState("00");
  // const [isActive, setIsActive] = useState(false);
  // const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   let intervalId;

  //   if (isActive) {
  //     intervalId = setInterval(() => {
  //       const secondCounter = counter % 60;
  //       const minuteCounter = Math.floor(counter / 60);

  //         String(secondCounter).length === 1
  //           ? `0${secondCounter}`
  //           : secondCounter;
  //       let computedMinute =
  //         String(minuteCounter).length === 1
  //           ? `0${minuteCounter}`
  //           : minuteCounter;


  //       let computedSecond =
  //       setSecond(computedSecond);
  //       setMinute(computedMinute);

  //       setCounter((counter) => counter + 1);
  //     }, 650);
  //   }

  //   return () => clearInterval(intervalId);
  // }, [isActive, counter]);

  // function stopTimer() {
  //   setIsActive(false);
  //   setCounter(0);
  //   setSecond("00");
  //   setMinute("00");
  // }

  // const {
  //   startRecording,
  //   stopRecording,
  //   pauseRecording,
  //   mediaBlobUrl
  // } = useReactMediaRecorder({
  //   video: false,
  //   audio: true,
  //   echoCancellation: true
  // });

  const handleAnswer = () => {
    setActive(!active);
  };

  const handleNext = () => {
    navigate("/mcq");
  };

  return (
    <>
      <Container maxWidth="lg">
        <Card component={Stack} p={2} sx={{ backgroundColor: "#ffc106" }}>
          <CardContent sx={{ display: 'flex' }} direction={{ xs: 'column', sm: 'row', md: "row" }}>
            <Stack p={2} sx={{ display: "block" }}>
              <Typography variant="h6">1/4</Typography>
              <Typography variant="h6">What is Axios ?</Typography>
              <Typography mb={2} variant="h6">Hint : react library</Typography>
              <Divider my={2}></Divider>
              {/* <Button my={2} onClick={handleStartRecording} variant="contained" size='small'>{isActive ? "Pause" : "Answer"}</Button> */}
              {/* {
                isActive && (
                  <Button my={2} onClick={handleStopRecording} variant="contained" size='small'>Save Answer</Button>

                )
              } */}
              <Button my={2} onClick={() => window.location.reload()} variant="contained" size='small'>Retake Answer</Button>
              <Divider my={2}></Divider>
              <Box my={2} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button variant="contained" size='small'>Back</Button>
                <Button onClick={() => navigate('/form/audiorecording')} variant="contained" size='small'>Next</Button>
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </Container>
      {/* <Box mb={3} sx={{ display: 'flex' }} direction={{ xs: 'column', sm: 'row', md: "row" }}>
        <Card my={2} component={Stack} p={2} sx={{ width: '100%' }}>
          <CardContent sx={{ backgroundColor: "#ffc106" }}>
            <Typography variant="h4">Video Context</Typography>
            <video
              // src={video1}
              title="YouTube video"
              controls
              autoPlay
            ></video>
          </CardContent>
        </Card>
        <Card my={2} component={Stack} p={2} sx={{ backgroundColor: "#ffc106", width: '100%' }}>
          <CardContent sx={{ backgroundColor: "#ffc106", display: 'flex' }} direction={{ xs: 'column', sm: 'row', md: "row" }}>
            <Stack p={6}><Typography variant="h4">Answer Box</Typography>
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
      </Box> */}

    </>
  )
}

export default FromAudioRecording
