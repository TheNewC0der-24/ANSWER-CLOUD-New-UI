import React, { useRef } from 'react';
import styles from './DetailedReport.module.css';

import ReactToPrint from 'react-to-print';

import {
    Container,
    Box,
    Typography,
    Divider,
    Button,
    Link,
    Chip
} from '@mui/material';

// Icon
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const DetailedReport = () => {

    const detailedReportRefOne = useRef();
    const detailedReportRefTwo = useRef();

    return (
        <>
            <Box mt={3}>
                <Container maxWidth='lg'>
                    <Typography variant='h5' mb={2}>Detailed Report</Typography>
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
                            content={() => detailedReportRefOne.current}
                            documentTitle="ANSWER CLOUD"
                            pageStyle='{margin:5px}'
                        />
                    </Box>
                    <Divider />
                </Container>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Box ref={detailedReportRefOne} mt={3} mb={3} p={2} className={styles.a4}>
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Typography sx={{ fontWeight: "bold" }} variant='subtitle1'>Name: <span style={{ color: "#1976d2" }}>Bhavya Khurana</span></Typography>
                        <Link variant='subtitle1' href="https://www.talentsumo.co/feedback" target="_blank">Feedback Rubric</Link>
                    </Box>
                    <Typography sx={{ fontWeight: "bold" }} variant='subtitle1'>Date: <span style={{ color: "#1976d2" }}>04-12-2022</span></Typography>
                    <Typography sx={{ fontWeight: "bold" }} mb={3} variant='subtitle1'>Title: <span style={{ color: "#1976d2" }}>Sample title (via company)</span></Typography>
                    <Typography mb={1} sx={{ fontWeight: "bold" }} variant='subtitle1'>Overall Ratings: <span style={{ color: "#1976d2" }}>Cohort B</span></Typography>
                    <Box p={1} mb={3} sx={{ border: "1px solid #000", backgroundColor: "#fff" }}>
                        <Typography variant='body2'>Overall rating of the interaction including content. Score used for any leaderboard but screening may be based on any parameter listed in the report.</Typography>
                    </Box>
                    <Typography mb={1} sx={{ fontWeight: "bold" }} variant='subtitle1'>Rating Snapshot:</Typography>
                    <table className={styles.table}>
                        <tr>
                            <th className={styles.th}>Power Skill</th>
                            <th className={styles.th}>Cohort Rating</th>
                            <th className={styles.th}>Indicator/How to Improve</th>
                        </tr>
                        <tr>
                            <td className={styles.td}>Likeability & Trust (Video Only)</td>
                            <td className={styles.td}>NA</td>
                            <td className={styles.td}>A mix of smile and composure enhances likeability. Improve by being intentional.</td>
                        </tr>
                        <tr>
                            <td className={styles.td}>Clarity</td>
                            <td className={styles.td}>A</td>
                            <td className={styles.td}>Correct grammar, style and word usage leads to clarity in speech.</td>
                        </tr>
                        <tr>
                            <td className={styles.td}>Energy</td>
                            <td className={styles.td}>B</td>
                            <td className={styles.td}>Respond with voice modulation,higher  pitch range and to sound “high energy”</td>
                        </tr>
                        <tr>
                            <td className={styles.td}>Confidence</td>
                            <td className={styles.td}>C</td>
                            <td className={styles.td}>Remove filler words & repetitions to sound more confident in approach.</td>
                        </tr>
                        <tr>
                            <td className={styles.td}>Fluency</td>
                            <td className={styles.td}>C</td>
                            <td className={styles.td}>Remove pauses and gaps in speech to sound fluent and improve scores.</td>
                        </tr>
                    </table>

                    <Typography mt={3} mb={1} sx={{ fontWeight: "bold" }} variant='subtitle1'>Unrated Variables:</Typography>
                    <table className={styles.table}>
                        <tr>
                            <td className={styles.td}>Pace and word cloud</td>
                            <td className={styles.td}>XX compared to an ideal  140-160 words/minute. Word Cloud : &lt;&lt;URL&gt;&gt;</td>
                            <td className={styles.td}>Rate of speech and word frequency by the participant in the interaction</td>
                        </tr>
                        <tr>
                            <td className={styles.td}>Gesture (Video Only)</td>
                            <td className={styles.td}>Rated B ( Among four possible ratings with highest being A)</td>
                            <td className={styles.td}>Only available for video. Higher score shows effective use of body language.</td>
                        </tr>
                        <tr>
                            <td className={styles.td}>Sentimental Rating</td>
                            <td className={styles.td}>Happy (AI model rated)</td>
                            <td className={styles.td}>Overall sentiment displayed in the interaction.</td>
                        </tr>
                    </table>

                    <Typography mt={3} mb={1} sx={{ fontWeight: "bold" }} variant='subtitle1'>Content Rating:</Typography>
                    <Typography mb={1} variant='body1'>The table below illustrates the content ratings for each answer, in percentage terms. The 80% or a rating of 8 out of 10, demonstrates great authority on the content by the candidate.</Typography>
                    <table className={styles.table}>
                        <tr>
                            <td className={styles.td}>1</td>
                            <td className={styles.td}>2</td>
                            <td className={styles.td}>3</td>
                            <td className={styles.td}>4</td>
                            <td className={styles.td}>5</td>
                            <td className={styles.td}>6</td>
                            <td className={styles.td}>7</td>
                            <td className={styles.td}>8</td>
                            <td className={styles.td}>9</td>
                            <td className={styles.td}>10</td>
                        </tr>
                        <tr>
                            <td className={styles.td}></td>
                            <td className={styles.td}></td>
                            <td className={styles.td}></td>
                            <td className={styles.td}></td>
                            <td className={styles.td}></td>
                            <td className={styles.td}></td>
                            <td className={styles.td}></td>
                            <td className={styles.td}></td>
                            <td className={styles.td}></td>
                            <td className={styles.td}></td>
                        </tr>
                    </table>
                    <Box mt={5}>
                        <Divider />
                    </Box>
                    <Box sx={{ marginTop: "7rem" }}>
                        <Typography mb={3} sx={{ fontWeight: "bold" }} variant='subtitle1'>Transcript & Detailed Feedback:</Typography>
                        <Typography mb={1} sx={{ fontWeight: "bold" }} variant='subtitle1'>Mentor Feedback: <span style={{ color: "#1976d2" }}>NA</span></Typography>
                        <Box p={1} sx={{ border: "1px solid #000", backgroundColor: "#fff" }}>
                            <Chip label="#1" sx={{ borderRadius: "0" }} />
                            <Typography mt={1} variant='body2'>Oues:</Typography>
                        </Box>
                        <Box p={1} sx={{ border: "1px solid #000", backgroundColor: "#fff" }}>
                            <Typography variant='body2'>Ans:</Typography>
                        </Box>
                        <Box p={1} mb={3} sx={{ border: "1px solid #000", backgroundColor: "#fff" }}>
                            <Typography variant='body2'>Model Feedback:</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default DetailedReport;