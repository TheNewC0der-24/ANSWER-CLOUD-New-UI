import React, { useState } from 'react';

import {
    Box,
    InputLabel,
    Stack,
    FormControl,
    Select,
    Typography,
    Paper,
    Alert,
    TextField,
    TextareaAutosize,
    Button,
    Divider,
    Grid,
    Card,
    CountUp,
    LoadAnimation,
    MaterialTable,
    CardContent
} from '@mui/material';

import { styled } from '@mui/material/styles';

import styles from './Addquestion.module.css';

// Routing
import { useNavigate, Link } from 'react-router-dom';

// Components
import LoadingScreen from '../LoadingScreen';

// Validation
import { useFormik, FormikProvider, Form } from 'formik';
import * as Yup from 'yup';

// Icons
import AddIcon from '@mui/icons-material/Add';

const Addquestion = () => {
    const [loading, setLoading] = useState(false);
    const [noOfRows, setNoOfRows] = useState(1);

    const questionSchema = Yup.object().shape({
        // companyname: Yup.string().min(2).required('It must be least 2 characters'),
    });

    const formik = useFormik({
        initialValues: {
            // companyname: '',
        },
        validationSchema: questionSchema,
        onSubmit: async (values, { setErrors, resetForm }) => {
            try {
                setLoading(true);
                setLoading(false);
                // navigate('/dashboard');
                resetForm();
            } catch (error) {
                setErrors({ afterSubmit: error.message });
                resetForm();
            }
        }
    });

    const { errors, touched, values, handleSubmit, getFieldProps } = formik;


    const navigate = useNavigate();
    return (
        <>
            <FormikProvider value={formik}>
                <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                    <Paper component={Stack} p={3} mt={3} spacing={2} elevation={10} >
                        {errors.afterSubmit && <Alert severity="error">{errors.afterSubmit}</Alert>}

                        <Stack spacing={2} direction={{ xs: 'row', sm: 'row', md: "row" }}>
                            <Typography variant='subtitle1' sx={{ fontWeight: 'bold', fontFamily: "Public Sans,sans-serif", color: '#971b8b', width: '100%' }}>Question:</Typography>
                            <Typography variant='subtitle1' sx={{ fontWeight: 'bold', fontFamily: "Public Sans,sans-serif", color: '#971b8b', width: '100%' }}>Media Context:</Typography>
                            <Typography variant='subtitle1' sx={{ fontWeight: 'bold', fontFamily: "Public Sans,sans-serif", color: '#971b8b', width: '100%' }}>Hints/Description:</Typography>
                            <Typography variant='subtitle1' sx={{ fontWeight: 'bold', fontFamily: "Public Sans,sans-serif", color: '#971b8b', width: '100%' }}>Ideal Answer:</Typography>

                        </Stack>
                        {[...Array(noOfRows)].map((index) => {
                            return (
                                <Stack spacing={1} direction={{ xs: 'row', sm: 'row', md: "row" }}>
                                    <Stack sx={{ width: '100%' }}>
                                        <TextareaAutosize
                                            fullWidth
                                            size='small'
                                            maxRows={2}
                                            aria-label="maximum height"
                                            placeholder="Add Question"
                                            // {...getFieldProps('generalfeedback')}
                                            // error={Boolean(touched.generalfeedback && errors.generalfeedback)}
                                            // helperText={touched.generalfeedback && errors.generalfeedback}
                                        />
                                    </Stack>
                                    <Stack sx={{ width: '100%' }}>
                                        <TextareaAutosize
                                            fullWidth
                                            size='small'
                                            maxRows={2}
                                            aria-label="maximum height"
                                            placeholder="Paste your link here"
                                            // {...getFieldProps('generalfeedback')}
                                            // error={Boolean(touched.generalfeedback && errors.generalfeedback)}
                                            // helperText={touched.generalfeedback && errors.generalfeedback}
                                        />
                                    </Stack>
                                    <Stack sx={{ width: '100%' }}>
                                        <TextareaAutosize
                                            fullWidth
                                            size='small'
                                            maxRows={2}
                                            aria-label="maximum height"
                                            placeholder="Add Hints/Description"
                                            // {...getFieldProps('generalfeedback')}
                                            // error={Boolean(touched.generalfeedback && errors.generalfeedback)}
                                            // helperText={touched.generalfeedback && errors.generalfeedback}
                                        />
                                    </Stack>
                                    <Stack sx={{ width: '100%' }}>
                                        <TextareaAutosize
                                            fullWidth
                                            size='small'
                                            maxRows={2}
                                            aria-label="maximum height"
                                            placeholder="Add Ideal Answer"
                                            // {...getFieldProps('generalfeedback')}
                                            // error={Boolean(touched.generalfeedback && errors.generalfeedback)}
                                            // helperText={touched.generalfeedback && errors.generalfeedback}
                                        />
                                    </Stack>
                                </Stack>
                            )
                        }
                        )}
                        <Box sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem" }} mt={2}>
                            <Stack direction="row" sx={{ gap: "0.25rem" }}>
                                <Button sx={{ cursor: 'pointer' }} size='small' variant="contained" color='success' onClick={() => setNoOfRows(noOfRows + 1)}>Add</Button>
                                <Button sx={{ cursor: 'pointer' }} disabled={noOfRows <= 1} size='small' variant="contained" color='error' onClick={() => setNoOfRows(noOfRows - 1)}>Delete</Button>
                            </Stack>
                        </Box>
                    </Paper>
                </Form>
            </FormikProvider>
        </>
    )
}

export default Addquestion;