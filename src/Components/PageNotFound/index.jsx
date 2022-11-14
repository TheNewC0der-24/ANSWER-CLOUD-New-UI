import React from 'react';
import styles from "./PageNotFound.module.css";

import { useNavigate } from 'react-router-dom';

import {
    Box,
    Typography,
    Button
} from '@mui/material';

import pnf from "../../assets/Images/404.svg";

const PageNotFound = () => {

    const navigate = useNavigate();

    return (
        <Box className={styles.container}>
            <img className={styles.img} src={pnf} alt="opps!!" />
            <Typography variant='h4'>There's NOTHING here...</Typography>
            <Typography mb={3} variant='subtitle1'>...maybe the page you're looking for is not there or never existed.</Typography>
            <Button variant="contained" onClick={() => navigate("/dashboard")}>Back to Dashboard</Button>
        </Box>
    )
};

export default PageNotFound;