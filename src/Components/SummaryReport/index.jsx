import React, { useRef } from 'react';
import styles from './SummaryReport.module.css';

import ReactToPrint from 'react-to-print';

import {
    Container,
    Box,
    Typography,
    Divider,
    Button,
} from '@mui/material';

// Icon
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const SummaryReport = () => {

    const summaryReportRef = useRef();

    return (
        <>
            <Box mt={3}>
                <Container maxWidth='lg'>
                    <Typography variant='h5' mb={2}>Summary Report</Typography>
                    <Box mb={2}>
                        <ReactToPrint
                            trigger={() => {
                                return (
                                    <Button
                                        color='secondary'
                                        size='small'
                                        variant='contained'
                                    >
                                        <FileDownloadIcon />Download Report
                                    </Button>
                                );
                            }}
                            content={() => summaryReportRef.current}
                        />
                    </Box>
                    <Divider />
                </Container>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Box ref={summaryReportRef} mt={3} p={2} className={styles.a4}>
                    <Typography mb={2} variant='h5'>Summary Report</Typography>
                    <Divider />
                </Box>
            </Box>
        </>
    )
}

export default SummaryReport;