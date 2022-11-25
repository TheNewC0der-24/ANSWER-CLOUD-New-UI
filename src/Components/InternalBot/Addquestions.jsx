import React, { useState } from 'react';

import {
    Box,
    Typography,
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

    const questionSchema = Yup.object().shape({
        companyname: Yup.string().min(2).required('It must be least 2 characters'),
        interactiontitle: Yup.string().min(2).required('It must be least 2 characters'),
        testid: Yup.string().min(6).max(6).required('TestId must be of exactly 6 numbers'),
        track: Yup.string().min(1).required('TestId must be of exactly 6 numbers'),
    });

    const formik = useFormik({
        initialValues: {
            companyname: '',
            interactiontitle: '',
            testid: '',
            track: ''
        },
        validationSchema: questionSchema,
        onSubmit: async (values, { setErrors, resetForm }) => {
            try {
                setLoading(true);
                setLoading(false);
                navigate('/dashboard');
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
            <Box>
                <Box className={styles.header}>
                    <Typography mt={3} variant='h5'>
                        Question Section
                    </Typography>
                </Box>

                <Box mt={2} mb={2}>
                    <Button size='small' variant="contained" className={styles.createButton} onClick={"Ayush"}><AddIcon />Add Questions</Button>
                </Box>

                <Divider />
            </Box>
        </>
    )
}

export default Addquestion;