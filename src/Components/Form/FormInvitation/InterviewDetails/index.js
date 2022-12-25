import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Box,
  Card,
  CardContent,
  Typography,
  Divider,
  Button,
  CssBaseline
} from '@mui/material';

import { createTheme, ThemeProvider } from '@mui/material/styles';


const InterviewDetails = () => {

  const navigate = useNavigate();

  const theme2 = createTheme({
    palette: {
      primary: {
        main: "#f5f5f5"
      },
      secondary: {
        main: '#585858 ',
      },
    },
    typography: {
      button: {
        fontWeight: 700,
      },
    }
  });

  return (
    <ThemeProvider theme={theme2}>
      <CssBaseline />
      <Card
        sx={{
          border: "none",
          boxShadow: "none",
        }}
      >
        <CardContent>
          <Typography
            variant="h6"
            gutterBottom
          >
            Interaction Details
          </Typography>
          <Divider sx={{ mb: 3 }} />
          <Typography sx={{ mb: 3 }}><b>Interaction Type: </b>Audio/Video</Typography>
          <Typography sx={{ mb: 3 }}><b>Expiration (if any): </b>NA</Typography>
          <Typography sx={{ mb: 3 }}><b>Title: </b>Frontend</Typography>
          <Box sx={{ display: "flex", gap: "0.5rem" }}>
            <Button color="warning" variant='contained'
              onClick={() => navigate('/form/welcome')}
              sx={{
                py: 2, px: 5,
                borderRadius: 0,
                mb: 3,
                textTransform: 'none',
              }}>
              Check System
            </Button>

            <Button color="secondary" variant='contained'
              onClick={() => navigate('/form/start')}
              sx={{
                py: 2, px: 5,
                borderRadius: 0,
                mb: 3,
                textTransform: 'none',
              }}>
              Launch Interaction
            </Button>
          </Box>

          {/* <Typography sx={{ mb: 5, fontStyle: 'italic' }} variant='subtitle2' gutterBottom>This interview will take approximately 12 minutes and will not start until you are completely ready.</Typography>
          <Typography
            variant="h6"
            gutterBottom
          >
            Job Description
          </Typography>
          <Divider sx={{ mb: 3 }} />
          <Typography>Abc</Typography> */}
        </CardContent>
      </Card>
    </ThemeProvider>
  );
}

export default InterviewDetails;