import React, { useState } from 'react';
import styles from './QA.module.css';

import {
    Paper,
    Stack,
    Box,
    TextField,
    Typography,
    Card,
    CardContent,
    Button,
    Divider,
    IconButton,
} from '@mui/material';

import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';

import { message } from 'antd';

import { CopyToClipboard } from 'react-copy-to-clipboard';

const QAGenerator = () => {

    const [generateQuestions, setGenerateQuestions] = useState(false);
    const [generateAnswers, setGenerateAnswers] = useState(false);

    const [text, setText] = useState("");
    const [copiedQuestion, setCopiedQuestion] = useState(false);
    const [copiedAnswer, setCopiedAnswer] = useState(false);


    const handleShowQuestion = () => {
        setGenerateQuestions(true);
    }

    const handleShowAnswer = () => {
        setGenerateAnswers(true);
    }

    const handleCopy = () => {
        message.success('Copied to clipboard');
        setCopiedQuestion(true);

        setTimeout(() => {
            setCopiedQuestion(false);
        }, 2000);
    }

    const handleCopyAnswer = () => {
        message.success('Copied to clipboard');
        setCopiedAnswer(true);

        setTimeout(() => {
            setCopiedAnswer(false);
        }, 2000);
    }

    return (
        <>
            <Paper component={Stack} p={2} sx={{ backgroundColor: "#f6f6f6" }}>
                <Typography variant='h5'>Q & A Generator</Typography>

                <Box component={Stack} spacing={2} mt={3} mb={3}>
                    <TextField
                        fullWidth
                        label='Add Topics or Subject Areas'
                    />
                    <Box mt={2}>
                        <Button onClick={handleShowQuestion} variant='contained'>{generateQuestions ? "Regenerate" : "Generate Questions"}</Button>
                    </Box>
                </Box>

                {
                    generateQuestions && (
                        <Card className={styles.card}>
                            <CardContent>
                                <Typography variant='h6'>Generated Questions</Typography>
                                <Divider />

                                <Paper sx={{ backgroundColor: "#E9F2FF" }} component={Stack} spacing={2} p={2} mt={3} mb={3}>
                                    <Box sx={{ display: 'flex', justifyContent: "space-between", alignItems: "center" }}>
                                        <Typography variant='body1'>1. What is the difference between a class and an object?</Typography>
                                        <CopyToClipboard text={"What is the difference between a class and an object?"}>
                                            <IconButton onClick={handleCopy}>
                                                {
                                                    copiedQuestion ? (
                                                        <DownloadDoneIcon color='success' />
                                                    ) : (
                                                        <ContentCopyIcon color='warning' />
                                                    )
                                                }
                                            </IconButton>
                                        </CopyToClipboard>
                                    </Box>
                                </Paper>
                            </CardContent>
                        </Card>
                    )
                }
            </Paper>

            <Paper mt={3} component={Stack} p={2} sx={{ backgroundColor: "#f6f6f6" }}>
                <TextField
                    fullWidth
                    label='Enter your questions'
                />
                <Box mt={2} mb={3}>
                    <Button onClick={handleShowAnswer} variant='contained'>Generate Answer</Button>
                </Box>

                {
                    generateAnswers && (
                        <Card className={styles.card}>
                            <CardContent>
                                <Typography variant='h6'>Generated Answer</Typography>
                                <Divider />

                                <Paper sx={{ backgroundColor: "#E9F2FF" }} component={Stack} spacing={2} p={2} mt={3} mb={3}>
                                    <Box sx={{ display: 'flex', justifyContent: "space-between", alignItems: "center" }}>
                                        <Typography variant='body1'>1. An object is an instance of a class. When a class is created, no memory is allocated. Objects are allocated memory space whenever they are created.</Typography>
                                        <CopyToClipboard text={"An object is an instance of a class. When a class is created, no memory is allocated. Objects are allocated memory space whenever they are created."}>
                                            <IconButton onClick={handleCopyAnswer}>
                                                {
                                                    copiedAnswer ? (
                                                        <DownloadDoneIcon color='success' />
                                                    ) : (
                                                        <ContentCopyIcon color='warning' />
                                                    )
                                                }
                                            </IconButton>
                                        </CopyToClipboard>
                                    </Box>
                                </Paper>
                            </CardContent>
                        </Card>
                    )
                }
            </Paper>
        </>
    )
}

export default QAGenerator;