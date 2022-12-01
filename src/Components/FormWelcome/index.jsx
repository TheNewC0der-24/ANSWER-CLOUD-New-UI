import React from 'react';

import InterviewNotice from './InterviewNotice/index';
import InterviewDetails from './InterviewDetails/index';
import InterviewPreparation from './InterviewPreparation/index';

import {
    Grid,
    Container
} from '@mui/material';

const Welcome = () => {
    return (
        <>
            <InterviewNotice />
            <Container maxWidth='lg'>
                <Grid container sx={{ mb: 2 }}>
                    <Grid item sm={12} md={7}>
                        <InterviewDetails />
                    </Grid>
                    <Grid item sm={12} md={5}>
                        <InterviewPreparation />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Welcome;