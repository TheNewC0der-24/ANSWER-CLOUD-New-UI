import React, { useRef } from 'react';
import styles from './DetailedReport.module.css';

import ReactToPrint from 'react-to-print';

import {
    Container,
    Box,
    Typography,
    Divider,
    Rating,
    Button,
    Link,
    Chip
} from '@mui/material';

// Icon
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const DetailedReport = () => {

    const detailedReportRefOne = useRef();

    return (
        <>
            <Box mt={3}>
                <Container maxWidth='xl'>
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

            <Container maxWidth='xl'>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Box ref={detailedReportRefOne} mt={3} mb={3} p={2} className={styles.a4}>
                        <Box mt={5} sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Typography sx={{ fontWeight: "bold" }} variant='subtitle1'>Name: <span style={{ color: "#1976d2" }}>Bhavya Khurana</span>
                            </Typography>
                            {/* <Typography sx={{ fontWeight: "bold" }} variant='subtitle1'>Team Name: <span style={{ color: "#1976d2" }}>Frontenders</span></Typography> */}
                            <Link variant='subtitle1' href="https://www.mycloudcoaches.com/feedback" target="_blank">Feedback Rubric</Link>
                        </Box>
                        <Typography sx={{ fontWeight: "bold" }} variant='subtitle1'>Date: <span style={{ color: "#1976d2" }}>04-12-2022</span></Typography>
                        <Typography sx={{ fontWeight: "bold" }} variant='subtitle1'>Title: <span style={{ color: "#1976d2" }}>Sample title (via company)</span></Typography>
                        <Typography sx={{ fontWeight: "bold" }} mb={2} variant='subtitle1'>Coach Name: <span style={{ color: "#1976d2" }}>Deb Ghosh</span></Typography>
                        <table className={styles.table}>
                            <tr>
                                <th className={styles.th}>Overall Ratings</th>
                                <th className={styles.th}>
                                    <Rating name="size-small" defaultValue={4} readOnly size="small" />
                                </th>
                                <th className={styles.th}>
                                    <Typography color='primary'>Cohort B
                                    </Typography>
                                </th>
                            </tr>
                        </table>

                        {/* <Typography sx={{ color: "#ED6C02" }} mt={1} mb={3} variant='body1'>Overall rating of the interaction including content. Score used for any leaderboard but screening may be based on any parameter listed in the report.</Typography> */}
                        <Typography mb={1} sx={{ fontWeight: "bold" }} variant='subtitle1'>Rating Snapshot:</Typography>
                        <table className={styles.table}>
                            <tr>
                                <th className={styles.th}>Power Skill</th>
                                <th className={styles.th}>Star Rating</th>
                                <th className={styles.th}>Cohort Rating</th>
                                <th className={styles.th}>Indicator/How to Improve</th>
                            </tr>
                            {/* <tr>
                                <td className={styles.td}>Trust (Video Only)</td>
                                <td className={styles.td}>
                                    <Rating name="size-small" defaultValue={0} readOnly size="small" />
                                </td>
                                <td className={styles.td}>NA</td>
                                <td className={styles.td}>Improve by being intentional.</td>
                            </tr> */}
                            <tr>
                                <td className={styles.td}>Clarity</td>
                                <td className={styles.td}>
                                    <Rating name="size-small" defaultValue={5} readOnly size="small" />
                                </td>
                                <td className={styles.td}>A</td>
                                <td className={styles.td}>Correct grammar, style and word usage leads to clarity in speech.</td>
                            </tr>
                            <tr>
                                <td className={styles.td}>Energy</td>
                                <td className={styles.td}>
                                    <Rating name="size-small" defaultValue={4} readOnly size="small" />
                                </td>
                                <td className={styles.td}>B</td>
                                <td className={styles.td}>
                                    Respond with voice modulation,higher  pitch range and to sound “high energy”.
                                </td>
                            </tr>
                            <tr>
                                <td className={styles.td}>Confidence</td>
                                <td className={styles.td}>
                                    <Rating name="size-small" defaultValue={3} readOnly size="small" />
                                </td>
                                <td className={styles.td}>C</td>
                                <td className={styles.td}>Remove filler words & repetitions to sound more confident in approach.</td>
                            </tr>
                            <tr>
                                <td className={styles.td}>Fluency</td>
                                <td className={styles.td}>
                                    <Rating name="size-small" defaultValue={3} readOnly size="small" />
                                </td>
                                <td className={styles.td}>C</td>
                                <td className={styles.td}>Remove pauses and gaps in speech to sound fluent and improve scores.</td>
                            </tr>
                        </table>

                        <Typography mt={3} mb={1} sx={{ fontWeight: "bold" }} variant='subtitle1'>Unrated Variables:</Typography>
                        <table className={styles.table}>
                            <tr>
                                <td className={styles.td}>Pace</td>
                                {/* <td className={styles.td}>XX compared to an ideal  140-160 words/minute. Word Cloud : &lt;&lt;URL&gt;&gt;</td> */}
                                <td className={styles.td}>XX compared to an ideal  140-160 words/minute.</td>
                                <td className={styles.td}>Rate of speech and word frequency by the participant in the interaction.</td>
                            </tr>
                            {/* <tr>
                                <td className={styles.td}>Gesture (Video Only)</td>
                                <td className={styles.td}>Rated B ( Among four possible ratings with highest being A)</td>
                                <td className={styles.td}>Only available for video. Higher score shows effective use of body language.</td>
                            </tr> */}
                            <tr>
                                <td className={styles.td}>Sentimental Rating</td>
                                <td className={styles.td}>Happy (AI model rated)</td>
                                <td className={styles.td}>Overall sentiment displayed in the interaction.</td>
                            </tr>
                        </table>

                        <Typography mt={3} mb={1} sx={{ fontWeight: "bold" }} variant='subtitle1'>Content Rating:</Typography>
                        <Typography mb={1} variant='body1'>The table below illustrates the content ratings for each answer, in percentage terms. The rating of 75% or higher demonstrates great authority on the candidate over the subject matter.</Typography>
                        <table className={styles.table}>
                            <tr>
                                <td className={styles.td}>Ques-1</td>
                                <td className={styles.td}>Ques-2</td>
                                <td className={styles.td}>Ques-3</td>
                                <td className={styles.td}>Ques-4</td>
                                <td className={styles.td}>Ques-5</td>
                                <td className={styles.td}>Ques-6</td>
                                <td className={styles.td}>Ques-7</td>
                                <td className={styles.td}>Ques-8</td>
                                <td className={styles.td}>Ques-9</td>
                                <td className={styles.td}>Ques-10</td>
                            </tr>
                            <tr>
                                <td className={styles.td}>70%</td>
                                <td className={styles.td}>65%</td>
                                <td className={styles.td}>100%</td>
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
                        <Box sx={{ marginTop: "3rem" }}>
                            <Typography mb={3} sx={{ fontWeight: "bold" }} variant='subtitle1'>Transcript & Detailed Feedback</Typography>
                            <Typography mb={1} sx={{ fontWeight: "bold" }} variant='subtitle1'>Coach Feedback: <span style={{ color: "#1976d2" }}>NA</span></Typography>
                            {/* Question One */}
                            <Box p={1} sx={{ border: "1px solid #dddddd" }}>
                                <Chip label="#1" sx={{ borderRadius: "0" }} />
                                <Typography mt={1} variant='body2'>Oues-1 What is the tenure of health insurance plans?</Typography>
                            </Box>
                            <Box p={1} sx={{ border: "1px solid #dddddd" }}>
                                <Typography variant='body2' sx={{ color: "#1976d2" }}>Ans: The tenure of our health insurance plans in between 1 to 5 years. You can select any duration depending upon your needs. </Typography>
                            </Box>
                            <Box p={1} mb={3} sx={{ border: "1px solid #dddddd" }}>
                                <Typography sx={{ color: "#E34935" }} variant='body2'>Model Feedback: The response is accurate and to the point. In the context of sales, you may want to keep discovering the needs and ask questions on what levels of the tenure is desired and why. </Typography>
                            </Box>

                            {/* Question Two */}
                            <Box p={1} sx={{ border: "1px solid #dddddd" }}>
                                <Chip label="#2" sx={{ borderRadius: "0" }} />
                                <Typography mt={1} variant='body2'>Oues-2: What is the frequency of premium payment for health insurance?</Typography>
                            </Box>
                            <Box p={1} sx={{ border: "1px solid #dddddd" }}>
                                <Typography sx={{ color: "#1976d2" }} variant='body2'>Ans: The premium payments can be made lump sum one time or they can be made on fixed intervals - monthly or quarterly. Most of our customers choose to make monthly payments. </Typography>
                            </Box>
                            <Box p={1} mb={3} sx={{ border: "1px solid #dddddd" }}>
                                <Typography sx={{ color: "#E34935" }} variant='body2'>Model Feedback: This is a good answer. Although the answer may be contextual, you can specify in the answer what kind of insurance plans are being discussed.</Typography>
                            </Box>

                            {/* Question Three */}
                            <Box p={1} sx={{ border: "1px solid #dddddd" }}>
                                <Chip label="#3" sx={{ borderRadius: "0" }} />
                                <Typography mt={1} variant='body2'>Oues-3: When does one get the critical illness benefit from health insurance plans?</Typography>
                            </Box>
                            <Box p={1} sx={{ border: "1px solid #dddddd" }}>
                                <Typography sx={{ color: "#1976d2" }} variant='body2'>Ans: Our benefits are paid in actual whenever they are required - after the diagnosis of the critical illness. The illness should also be covered by the health insurance plans.</Typography>
                            </Box>
                            <Box p={1} mb={3} sx={{ border: "1px solid #dddddd" }}>
                                <Typography sx={{ color: "#E34935" }} variant='body2'>Model Feedback: Great, this is a good answer! Please add some details about what is defined as a critical illness. Direct them to the policy documents where they can find more details about the same.</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default DetailedReport;