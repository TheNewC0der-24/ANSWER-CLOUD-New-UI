import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
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
            Interview Details
          </Typography>
          <Divider sx={{ mb: 3 }} />
          <Typography sx={{ mb: 3 }}><b>Interview Type: </b>One-Way Interview</Typography>
          <Typography sx={{ mb: 3 }}><b>Due by: </b>Saturday,November 5,2022 at 11:00 PM GMT+5:30</Typography>
          <Typography sx={{ mb: 3 }}><b>Job Title: </b>Frontend</Typography>
          <Typography sx={{ mb: 3 }}><b>Location: </b>Remote</Typography>
          <Button color="secondary" variant='contained'
            onClick={() => navigate('/form/start')}
            sx={{
              py: 2, px: 5,
              borderRadius: 0,
              mb: 3,
              textTransform: 'none',
            }}>
            Go to your interview
          </Button>
          <Typography sx={{ mb: 5, fontStyle: 'italic' }} variant='subtitle2' gutterBottom>This interview will take approximately 12 minutes and will not start until you are completely ready.</Typography>
          <Typography
            variant="h6"
            gutterBottom
          >
            Job Description
          </Typography>
          <Divider sx={{ mb: 3 }} />
          <Typography>Abc</Typography>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
}

export default InterviewDetails;