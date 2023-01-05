import React, { useRef } from 'react';
import styles from './Certificate.module.css';

import { exportComponentAsPNG } from "react-component-export-image";

import brandLogo from '../../assets/Images/coachCloud.svg';

import {
    Container,
    Box,
    Stack,
    Typography,
    Divider,
    Button,
} from '@mui/material';

const Certificate = () => {

    const certificateRef = useRef();

    return (
        <>
            <Container maxWidth="lg">
                <Box mt={2} mb={2} sx={{ display: "flex", justifyContent: "end" }}>
                    <Button onClick={() => exportComponentAsPNG(certificateRef)} variant='contained' color='secondary'>
                        Download Certificate
                    </Button>
                </Box>
                <Divider />
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Box ref={certificateRef} mt={2} mb={3} p={3} className={styles.certificate}>
                        <Typography mt={3} mb={5} color='primary' align='center' variant='h4'>Company Name</Typography>
                        {/* <Box>
                            <img src="" alt="" className="" />
                        </Box> */}
                        {/* <Typography mt={3} variant='h3'>Certificate of Excellence</Typography> */}
                        {/* <Typography variant='h5' sx={{ fontStyle: "italic" }}>Awarded to</Typography> */}
                        <Typography mt={5} mb={2} color='secondary' align='center' variant='h2'>Candidate Name</Typography>
                        <Typography variant='h5' align='center'>
                            is here by awarded the certificate of Interaction Title for <br />
                            the successful completion of
                        </Typography>
                        <Typography mt={2} variant='h4' color='secondary' align='center'>
                            Interaction Title
                        </Typography>
                        <Box mt={5} sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Box>
                                <Typography variant='subtitle1'>Date of Interaction: 10-12-2022</Typography>
                            </Box>
                            <Box align='end'>
                                <Typography variant='subtitle1' sx={{ fontStyle: "italic" }}>Powered by</Typography>
                                <img src={brandLogo} alt="brand" style={{ width: '70%', transform: 'translateX(6px)' }} />
                            </Box>
                        </Box>
                        <Typography color='error' mt={5} variant='body1' sx={{ fontStyle: "italic" }} align='center'>
                            This is system generated certificate and can be validated by appropriate authority. No signature required.
                        </Typography>
                    </Box>
                </Box>

            </Container>
        </>
    )
}

export default Certificate;