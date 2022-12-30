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
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box p={2} sx={{ display: 'flex' }}>
            <Typography color='white' variant="h5">
              Live Session
            </Typography>
            <Badge color='error' className={styles.color} badgeContent="">{circle}</Badge>
          </Box>
          <Box p={1} sx={{ display: "flex", gap: "0.5rem", alignItems: "center", marginRight: "1rem" }}>
            <Typography color='white' variant="h4">00:00</Typography>
          </Box>
        </Box>
      </AppBar>

      <Box p={2}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Card sx={{ backgroundColor: "#F7F8F9", height: "100%" }}>
              <CardContent>
                <Typography variant="h4">Case Study</Typography>
                <Typography variant="subtitle1">This is a audio question. You will be asked to record a audio of yourself answering the question.</Typography>
              </CardContent>
              {/* <CardContent>
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

                <Button variant="contained" color='success' size='small' onClick={() => setActive(!active)}>Record</Button>
              </CardContent> */}
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Card sx={{ backgroundColor: "#F7F8F9", height: "100%" }}>
              <CardContent>
                <Typography variant="h4">Hint</Typography>
                <Typography variant="subtitle1">Hint Speak about your educational background, skills, experience, etc.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Card sx={{ height: '100%', backgroundColor: "#F7F8F9" }}>
              <CardContent>
                <Typography mb={3} variant="h4">Media Context</Typography>
                <Box p={2} sx={{ backgroundColor: "#1976d2" }}>
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

      {/* If any of 2 cards */}
      {/* <Box p={2}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Card sx={{ backgroundColor: "#F7F8F9", marginBottom: "1rem", height: "100%" }}>
              <CardContent>
                <Typography variant="h4">Case Study</Typography>
                <Typography variant="subtitle1">This is a video question. You will be asked to record a video of yourself answering the question.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Card sx={{ backgroundColor: "#F7F8F9", marginBottom: "1rem", height: "100%" }}>
              <CardContent>
                <Typography variant="h4">Hint</Typography>
                <Typography variant="subtitle1">Speak about your educational background, skills, experience, etc.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box> */}


      {/* If only 1 card */}
      {/* <Box p={2}>
        <Card sx={{ backgroundColor: "#F7F8F9", marginBottom: "1rem", height: "100%" }}>
          <CardContent>
            <Typography variant="h4">Case Study</Typography>
            <Typography variant="subtitle1">This is a video question. You will be asked to record a video of yourself answering the question.</Typography>
          </CardContent>
        </Card>
      </Box> */}

      <Box p={2}>
        <Card sx={{ backgroundColor: "#F7F8F9" }}>
          <CardContent>
            <Typography variant="h4">1/4</Typography>
            <Typography mb={2} variant="h6">What is Axios ?</Typography>

            <Button variant="contained" color='success' size='small' onClick={() => setActive(!active)}>Record</Button>
            <Box mt={1} mb={2}>
              <Divider />
            </Box>
            <Box my={2} sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button variant="outlined" size='small'>Back</Button>
              <Button onClick={() => navigate('/form/mcq')} variant="contained" size='small'>Next</Button>
            </Box>

            {
              !active && (
                <Alert severity="info">The recording starts after you hit the "Record" button above.</Alert>
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
      </Box>
    </>
  )
}

export default FromAudioRecording;
