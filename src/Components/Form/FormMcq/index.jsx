import React from 'react';
import { useNavigate } from "react-router-dom";

import {
  Container,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  Card,
  CardContent,
  Box,
  Typography,
  Divider,
  Button,
  Stack
} from '@mui/material';


const FormMcq = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container mb={3} maxWidth="lg">
        <Card component={Stack} p={2} sx={{ backgroundColor: "#ffc106" }}>
          <CardContent sx={{ display: 'flex' }} direction={{ xs: 'column', sm: 'row', md: "row" }}>
            <Stack p={2} sx={{ display: "block", width: '100%' }}>
              <Typography variant="h6">1/4</Typography>
              <Typography variant="h6">Tell me about yourself ?</Typography>
              <Typography mb={2} variant="h6">Hint : Speak about your educational background, skills,
                experience, etc.</Typography>
              <Divider my={2}></Divider>
            </Stack>
            <Stack p={2} sx={{ display: "block", width: '100%' }}>
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
              <Box my={2} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button variant="contained" size='small'>Back</Button>
                <Button onClick={() => navigate('/form/thankyou')} variant="contained" size='small'>Next</Button>
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </>
  )
}

export default FormMcq
