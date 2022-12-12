import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Recorder } from "react-voice-recorder";
import "react-voice-recorder/dist/index.css";

import styles from './Audio.module.css';

import {
  Alert,
  Grid,
  Card,
  AppBar,
  Badge,
  CardContent,
  Box,
  Typography,
  Divider,
  Button,
  Container
} from '@mui/material';

const shapeStyles = { bgcolor: 'primary.main', width: '40', height: '40' };
// const shapeCircleStyles = { borderRadius: '50%' };
const circle = (
  <Box component="span" sx={{ ...shapeStyles }} />
);

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
      <AppBar position="static">
        <Box p={2} sx={{ display: 'flex' }}>
          <Typography color='white' variant="h5">
            Live Session
          </Typography>
          <Badge color='error' className={styles.color} badgeContent="">{circle}</Badge>
        </Box>
      </AppBar>
      <Box p={3} sx={{ display: "flex", justifyContent: "center", margin: "auto" }} maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6}>
            <Card sx={{ backgroundColor: "#F7F8F9" }}>
              <CardContent>
                <Typography variant="h4">1/4</Typography>
                <Typography variant="h6">What is Axios ?</Typography>
                <Typography mb={2} color='primary' variant="h6">Hint : react library</Typography>

                <Box my={2} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Button variant="outlined" size='small'>Back</Button>
                  <Button onClick={() => navigate('/form/mcq')} variant="contained" size='small'>Next</Button>
                </Box>
                <Box mb={2}>
                  <Divider />
                </Box>

                <Button variant="contained" color='success' size='small' onClick={() => setActive(!active)}>Answer</Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Card sx={{ width: '100%', height: '100%', backgroundColor: "#F7F8F9" }}>
              <CardContent>
                <Typography mb={5} variant="h4">Audio Context</Typography>
                <Box p={3} sx={{ backgroundColor: "#1976d2" }}>
                  <audio className={styles.audio} controls preload="none">
                    <source
                      src="https://pwdown.com/10203/Yeh Ishq Hai - Rangoon (Arijit Singh) 320Kbps.mp3"
                      type="audio/mpeg"
                    />
                  </audio>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Container maxWidth="lg">
        <Card sx={{ backgroundColor: "#F7F8F9" }}>
          <CardContent>
            <Typography mb={2} variant="h4">Answer Box</Typography>
            {/* <Box p={1} mb={3} sx={{ border: "2px solid #000" }}> */}
            <Typography mb={2} variant="h5">Description</Typography>

            {/* </Box> */}
            {
              !active && (
                <Alert severity="info">Answer recording starts after you hit "Answer" button above.</Alert>
              )
            }

            {active && (
              <Box>
                <Alert severity="info">
                  Press the "Microphone" to record your audio
                </Alert>
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
              </Box>
            )}
          </CardContent>
        </Card>
      </Container>
    </>
  )
}

export default FromAudioRecording;
