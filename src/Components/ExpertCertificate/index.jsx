import React, { useRef } from 'react';
import styles from './Certificate.module.css';

import { exportComponentAsPNG } from "react-component-export-image";

import brandLogo from '../../assets/Images/coachCloud.svg';
import expert from '../../assets/Images/expert.svg'

import {
    Container,
    Box,
    Typography,
    Divider,
    Button,
    Grid,
} from '@mui/material';

const ExpertCertificate = () => {

    const expertCertificateRef = useRef();

    return (
        <>
            <Container maxWidth="lg">
                <Box mt={2} mb={2} sx={{ display: "flex", justifyContent: "end" }}>
                    <Button onClick={() => exportComponentAsPNG(expertCertificateRef)} variant='contained' color='secondary'>
                        Download Certificate
                    </Button>
                </Box>
                <Divider />
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Box ref={expertCertificateRef} mt={2} mb={3} p={3} className={styles.certificate}>
                        <Typography mt={3} mb={5} color='secondary' align='center' variant='h2'>Candidate Name</Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12} md={6} lg={6} sx={{ margin: "auto" }}>
                                <img src={expert} alt="expert" style={{ width: '70%' }} />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6} sx={{ margin: "auto" }}>
                                <Typography variant='h5' align='end'>
                                    Congratulations, you are awarded a business <span style={{ color: "#1976d2" }}>Expert</span> level recognition for consistently completing 50+ workplace simulations.
                                    You can review your progress in the detailed reports
                                </Typography>
                            </Grid>
                        </Grid>

                        <Box mt={5} sx={{ display: "flex", justifyContent: "end", marginLeft: "auto" }}>
                            <Box align='end'>
                                <Typography variant='subtitle1' sx={{ fontStyle: "italic" }}>Powered by</Typography>
                                <img src={brandLogo} alt="brand" style={{ width: '70%', transform: 'translateX(6px)' }} />
                            </Box>
                        </Box>
                        <Typography color='error' mt={5} variant='body1' sx={{ fontStyle: "italic" }} align='center'>
                            This is system generated certificate and can be validated by an appropriate authority. No signature is required.
                        </Typography>
                    </Box>
                </Box>

            </Container>
        </>
    )
}

export default ExpertCertificate;