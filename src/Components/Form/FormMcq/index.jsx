import React from 'react';
import { useNavigate } from "react-router-dom";

import styles from './FormMcq.module.css';

import {
  Grid,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  Card,
  Badge,
  AppBar,
  CardContent,
  Box,
  Typography,
  Button,
} from '@mui/material';

const shapeStyles = { bgcolor: 'primary.main', width: '40', height: '40' };
// const shapeCircleStyles = { borderRadius: '50%' };
const circle = (
  <Box component="span" sx={{ ...shapeStyles }} />
);

const FormMcq = () => {

  const navigate = useNavigate();

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
          <Box p={1} sx={{ display: "flex", gap: "0.5rem", alignItems: "center", marginRight: "1rem", bgcolor: "white" }}>
            <Typography color='primary' variant="h4">00:00</Typography>
          </Box>
        </Box>
      </AppBar>
      <Box p={3} sx={{ display: "flex", justifyContent: "center", margin: "auto" }} maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6}>
            <Card sx={{ backgroundColor: "#F7F8F9" }}>
              <CardContent>
                <Typography variant="h4">1/4</Typography>
                <Typography variant="h6">Tell me about yourself ?</Typography>
                <Typography mb={2} color='primary' variant="h6">
                  Hint : Speak about your educational background, skills,
                  experience, etc.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Card sx={{ width: '100%', height: '100%', backgroundColor: "#F7F8F9" }}>
              <CardContent>
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">Your Answer Options</FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
                    <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
                    <FormControlLabel value="option3" control={<Radio />} label="Option 3" />
                    <FormControlLabel value="option4" control={<Radio />} label="Option 4" />
                  </RadioGroup>
                </FormControl>
                <Box mt={3} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Button variant="outlined" size='small'>Back</Button>
                  <Button onClick={() => navigate('/form/thankyou')} variant="contained" size='small'>Next</Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default FormMcq
