import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import {
    Paper,
    Stack,
    Typography,
    Button
} from '@mui/material';

const Work = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        // navigate
    };

    return (
        <>
            <Paper component={Stack} p={3} direction={{ xs: 'column', sm: 'row', md: "row" }}>
                {/*************** Internal Bot ***************/}
                <Stack display={{ xs: 'none', sm: 'none', md: "block" }} width={{ xs: '100%', sm: '100%', md: "40%" }}>A</Stack>
                <Stack display={{ xs: 'none', sm: 'none', md: "block" }} width={{ xs: '100%', sm: '100%', md: "60%" }}>C</Stack>
                <Typography variant="h4">How it works?</Typography>
                <Typography mb={2} variant="h6">It's really easy. Interactions have been prepared for you in advance, and you are simply required to record your answers to them using the camera and microphone of your computer, tablet, or phone</Typography>
                <Typography mb={2} variant="h6">Don't worry if something goes wrong during the recording, these things happen. The good news is you can always completely start afresh using the original link provided.</Typography>
                <Stack sx={{ display: 'flex', justifyContent: 'space-between'}}></Stack>
                <Button variant="contained" size='small' onClick={handleNext}>Next</Button>
            </Paper>
        </>
    )
}

export default Work;