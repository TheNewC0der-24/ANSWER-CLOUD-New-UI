import React from 'react';
import {
    Box,
    Typography,
    // Avatar,
    // Grid,
    // Card,
    // CardActionArea,
    // CardContent,
    // CardMedia,
    // CardActions,
    Button,
    Divider
} from '@mui/material';

import styles from './Workspace.module.css';

// Icons
import AddIcon from '@mui/icons-material/Add';


import noPreview from '../../assets/Images/NoPreview.svg';

import Moment from 'moment';

import { useNavigate } from 'react-router-dom';

const Workspace = () => {

    const date = Moment().format("Do MMM YYYY");
    const weekday = Moment().format("dddd");

    const navigate = useNavigate();

    return (
        <>
            <Box>
                <Box className={styles.header}>
                    <Typography variant='h5'>
                        My Workspace
                    </Typography>
                    <Typography sx={{ fontWeight: "bold", display: "flex", flexWrap: "wrap", float: "right", fontSize: { xs: "13px", sm: "16px", md: "18px" }, textAlign: "end" }} color="secondary" variant='h6'>
                        {date}, {weekday}
                    </Typography>
                </Box>

                <Box mt={2} mb={2}>
                    <Button size='small' variant="contained" className={styles.createButton} onClick={() => navigate('/account/internal-bot')}><AddIcon /> Create interaction</Button>
                </Box>

                <Divider />

                <Box mt={5} className={styles.container}>
                    <img className={styles.noPreviewImg} src={noPreview} alt="no preview" />
                    <Typography mt={3} variant='h5'>Come on in, <span className={styles.name}>Bhavya</span></Typography>
                    <Typography variant='subtitle1'>No interaction created yet! Let's get started</Typography>
                    <Typography mb={2} variant='subtitle1'>to create something special.</Typography>
                    <Button size='small' variant="contained" className={styles.createButton} onClick={() => navigate('/account/internal-bot')}><AddIcon /> Create interaction</Button>
                </Box>
            </Box>
        </>
    )
}

export default Workspace;