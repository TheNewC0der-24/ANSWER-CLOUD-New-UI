import React from 'react';

import styles from './ThankYou.module.css';

import {
    Box,
    Typography,
    Button,
} from '@mui/material';

// Icon
import CheckIcon from '@mui/icons-material/Check';

const BotThankYou = () => {
    return (
        <>
            <Box className={styles.center}>
                <Typography variant='h1'>Thank You!</Typography>
                <Box>
                    <CheckIcon color="success" sx={{ fontSize: "10rem" }} />
                </Box>
                <Typography variant='h5'>You have successfully created the interaction.</Typography>
                <Typography variant='h5'>The interaction response link is below.</Typography>
                <Box mt={3} sx={{ display: "flex", justifyContent: "center", gap: '0.5rem' }}>
                    <Button color='secondary' variant='outlined'>Link</Button>
                    <Button color='secondary' variant='contained'>Check Answer Bot</Button>
                </Box>
            </Box>
        </>
    )
}

export default BotThankYou;
