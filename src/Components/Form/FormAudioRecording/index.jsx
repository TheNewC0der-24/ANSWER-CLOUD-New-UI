import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Recorder } from "react-voice-recorder";
// import "react-voice-recorder/dist/index.css";

import {
  Container,
  Alert,
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

  return (
    <>
      <Container mb={3} maxWidth="lg">
        <Card component={Stack} p={2} sx={{ backgroundColor: "#ffc106" }}>
          <CardContent sx={{ display: 'flex' }} direction={{ xs: 'column', sm: 'row', md: "row" }}>
            <Stack p={2} sx={{ display: "block", width: '100%' }}>
              <Typography variant="h6">1/4</Typography>
              <Typography variant="h6">What is Axios ?</Typography>
              <Typography mb={2} variant="h6">Hint : react library</Typography>
              <Divider my={2}></Divider>
              <Button variant="contained" size='small' onClick={() => setActive(!active)}>Answer</Button>
              <Box my={2} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button variant="contained" size='small'>Back</Button>
                <Button onClick={() => navigate('/form/mcq')} variant="contained" size='small'>Next</Button>
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </Container>
      <Box mt={3} sx={{ display: 'flex' }} direction={{ xs: 'column', sm: 'row', md: "row" }}>
        <Card component={Stack} p={1} sx={{ width: '100%', height: '100%' }}>
          <CardContent sx={{ backgroundColor: "#ffc106", display: 'flex' }} direction={{ xs: 'column', sm: 'row', md: "row" }}>
            <Stack p={2} sx={{ display: "block", width: '100%' }}>
              <Typography variant="h6">Audio Context</Typography>
              <audio controls preload="none">
                <source
                  src="https://pwdown.com/10203/Yeh Ishq Hai - Rangoon (Arijit Singh) 320Kbps.mp3"
                  type="audio/mpeg"
                />
              </audio>
            </Stack>
          </CardContent>
        </Card>
        <Card component={Stack} p={1} sx={{ width: '100%', height: '100%' }}>
          <CardContent sx={{ backgroundColor: "#ffc106", display: 'flex' }} direction={{ xs: 'column', sm: 'row', md: "row" }}>
            <Stack p={2} sx={{ display: "block", width: '100%' }}>
              <Typography variant="h6">Answer Box</Typography>
              <Alert severity="error">Answer recording starts after you hit "Answer" button above.</Alert>
              {active && (
                <div>
                  <Recorder
                    record={true}
                    hideHeader
                    uploadButtonDisabled={true}
                    clearButtonDisabled={true}
                    audioURL={state.audioDetails.url}
                    showUIAudio
                    handleAudioStop={(data) => handleAudioStop(data)}
                    handleCountDown={(data) => handleCountDown(data)}
                    handleReset={() => handleReset()}
                    mimeTypeToUseWhenRecording={`audio/webm`}
                  />
                  <Typography align='center' variant="contained">
                    Press the "Microphone" to record your audio
                  </Typography>
                </div>
              )}
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </>
  )
}

export default FromAudioRecording
