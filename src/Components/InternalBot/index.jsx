import React, { useState } from 'react';
// import styles from './InternalBot.module.css';

import AddQuestion from './AddQuestions';
import Skills from './Skills';

import {
    Stack,
    Alert,
    Typography,
    TextField,
    FormControl,
    InputLabel,
    MenuItem,
    FormControlLabel,
    FormLabel,
    RadioGroup,
    Radio,
    TextareaAutosize,
    Card,
    CardContent
} from '@mui/material';


// Routing
import { useNavigate } from 'react-router-dom';


// Components
import LoadingScreen from '../LoadingScreen';


// Validation
import { useFormik, FormikProvider, Form, Field } from 'formik';
import * as Yup from 'yup';


const InternalBot = () => {

    const navigate = useNavigate();

    // const { login } = useAuth();

    const [loading, setLoading] = useState(false);

    const internalBotSchema = Yup.object().shape({
        companyName: Yup.string().min(2).required('It must be least 2 characters'),
        interactionTitle: Yup.string().min(2).required('It must be least 2 characters'),
        testId: Yup.string().min(6).max(6).required('Test Id must be of exactly 6 numbers'),
        track: Yup.string().required('Select your Track'),
        interactionMode: Yup.string().required('Select Interaction Mode'),
        accessCode: Yup.string().min(6).max(6).required('Access must be of exactly 6 numbers'),
        expiryDate: Yup.string().required('Expiry Date is required'),
        emailOne: Yup.string().email('Invalid email').required('Email is required'),
        timer: Yup.string().required('Select Timer'),
        certificates: Yup.string().required('This is required'),
        name: Yup.string().required('Mentor Name is required'),
        description: Yup.string().required('Description is required'),
        generalFeedback: Yup.string().min(400).max(615).required('Feedback must be of exactly 6 numbers'),
    });

    const formik = useFormik({
        initialValues: {
            companyName: '',
            interactionTitle: '',
            testId: '',
            track: '',
            accessCode: '',
            expiryDate: '',
            emailOne: '',
            timer: '',
            certificates: '',
            name: '',
            description: '',
            generalFeedback: ''
        },
        validationSchema: internalBotSchema,
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

    const [track, setTrack] = useState('');
    const [timer, setTimer] = useState('');
    const [mode, setMode] = useState('');
    const [certificate, setCertificate] = useState(false);
    const [name, setName] = useState(false);

    const handleChange = (event) => {
        setTrack(event.target.value);
        setTimer(event.target.value);
        setMode(event.target.value);
    };

    const handleClick = (event) => {
        if (event.target.value === "No") {
            setCertificate(false);
        }
        else {
            setCertificate(true);
        }
    };

    const handleClicks = (event) => {
        if (event.target.value === "No") {
            setName(false);
        }
        else {
            setName(true);
        }
    };

    if (loading) {
        setLoading(true);
        return <LoadingScreen />;
    }

    const trackDomainOptions = [
        {
            value: "Sales",
            label: "Sales"
        },
        {
            value: "Service",
            label: "Service"
        },
        {
            value: "HR",
            label: "HR"
        },
        {
            value: "New Grad.",
            label: "New Grad."
        },
        {
            value: "Others",
            label: "Others"
        }
    ];

    const timerOptions = [
        {
            value: "15 minutes",
            label: "15 minutes"
        },
        {
            value: "20 minutes",
            label: "20 minutes"
        },
        {
            value: "30 minutes",
            label: "30 minutes"
        },
        {
            value: "45 minutes",
            label: "45 minutes"
        },
        {
            value: "60 minutes",
            label: "60 minutes"
        },
        {
            value: "None",
            label: "None"
        }
    ];

    return (
        <>
            <FormikProvider value={formik}>
                <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                    <Card component={Stack} p={3} spacing={2} elevation={3}>
                        <CardContent>
                            <Typography variant="h4" mb={3}>Internal Bot</Typography>
                            {errors.afterSubmit && <Alert severity="error">{errors.afterSubmit}</Alert>}
                            <Stack spacing={2} mb={3} direction={{ xs: 'column', sm: 'row', md: "row" }}>
                                <Stack sx={{ width: '100%' }}>
                                    <TextField
                                        fullWidth
                                        size='small'
                                        label="Company/Institute Name"
                                        required
                                        type='text'
                                        sx={{ marginBottom: { xs: '0', sm: '0', md: '0' } }}
                                        {...getFieldProps('companyName')}
                                        error={Boolean(touched.companyName && errors.companyName)}
                                        helperText={touched.companyName && errors.companyName}
                                    />
                                </Stack>
                                <Stack sx={{ width: '100%' }}>
                                    <TextField
                                        fullWidth
                                        size='small'
                                        label="Interaction Title"
                                        required
                                        type='text'
                                        {...getFieldProps('interactionTitle')}
                                        error={Boolean(touched.interactionTitle && errors.interactionTitle)}
                                        helperText={touched.interactionTitle && errors.interactionTitle}
                                    />
                                </Stack>
                                <Stack sx={{ width: '100%' }}>
                                    <TextField
                                        fullWidth
                                        size='small'
                                        label="Test Id"
                                        required
                                        type='number'
                                        {...getFieldProps('testId')}
                                        error={Boolean(touched.testId && errors.testId)}
                                        helperText={touched.testId && errors.testId}
                                    />
                                </Stack>
                            </Stack>
                            <Stack spacing={2} mb={3} direction={{ xs: 'column', sm: 'row', md: "row" }}>
                                <Stack sx={{ width: '100%' }}>
                                    <TextField
                                        select
                                        size='small'
                                        value={track}
                                        label="Track/Domain"
                                        required
                                        onChange={handleChange}
                                        {...getFieldProps('track')}
                                        error={Boolean(touched.track && errors.track)}
                                        helperText={touched.track && errors.track}
                                    >
                                        {trackDomainOptions.map(option => (
                                            <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                                        ))}
                                    </TextField>
                                </Stack>
                                <Stack sx={{ width: '100%' }}>
                                    <TextField
                                        select
                                        value={mode}
                                        size='small'
                                        label="Interaction Mode"
                                        required
                                        onChange={handleChange}
                                        {...getFieldProps('interactionMode')}
                                        error={Boolean(touched.interactionMode && errors.interactionMode)}
                                        helperText={touched.interactionMode && errors.interactionMode}
                                    >
                                        <MenuItem value="Audio">Audio</MenuItem>
                                    </TextField>
                                </Stack>
                            </Stack>
                            <Stack spacing={2} mb={3} direction={{ xs: 'column', sm: 'row', md: "row" }}>
                                <Stack sx={{ width: '100%' }}>
                                    <TextField
                                        fullWidth
                                        size='small'
                                        label="Access Code"
                                        required
                                        type='number'
                                        {...getFieldProps('accessCode')}
                                        error={Boolean(touched.accessCode && errors.accessCode)}
                                        helperText={touched.accessCode && errors.accessCode}
                                    />
                                </Stack>
                                <Stack sx={{ width: '100%' }}>
                                    <TextField
                                        fullWidth
                                        size='small'
                                        required
                                        type='date'
                                        {...getFieldProps('expiryDate')}
                                        error={Boolean(touched.expiryDate && errors.expiryDate)}
                                        helperText={touched.expiryDate && errors.expiryDate}
                                    />
                                </Stack>
                            </Stack>
                            <Stack spacing={2} mb={3} direction={{ xs: 'column', sm: 'row', md: "row" }}>
                                <Stack sx={{ width: '100%' }}>
                                    <TextField
                                        fullWidth
                                        size='small'
                                        label="Report send to Email"
                                        required
                                        type='email'
                                        {...getFieldProps('emailOne')}
                                        error={Boolean(touched.emailOne && errors.emailOne)}
                                        helperText={touched.emailOne && errors.emailOne}
                                    />
                                </Stack>
                                <Stack sx={{ width: '100%' }}>
                                    <TextField
                                        select
                                        value={timer}
                                        size='small'
                                        label="Timer"
                                        required
                                        onChange={handleChange}
                                        {...getFieldProps('timer')}
                                        error={Boolean(touched.timer && errors.timer)}
                                        helperText={touched.timer && errors.timer}
                                    >
                                        {timerOptions.map(option => (
                                            <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                                        ))}
                                    </TextField>
                                </Stack>
                            </Stack>
                            <Stack spacing={2} mb={3} direction={{ xs: 'column', sm: 'row', md: "row" }}>
                                <Stack sx={{ width: '100%' }}>
                                    <FormControl>
                                        <FormLabel id="demo-row-radio-buttons-group-label" variant='subtitle1' sx={{ fontWeight: 'bold', fontFamily: "Public Sans,sans-serif", color: '#1976d2' }}>Generate Certificate</FormLabel>
                                        <RadioGroup
                                            row
                                            aria-labelledby="demo-row-radio-buttons-group-label"
                                            defaultValue="No"
                                            name="row-radio-buttons-group"
                                            onClick={handleClick}
                                        >
                                            <FormControlLabel value="No" control={<Radio />} label="No" />
                                            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                        </RadioGroup>
                                    </FormControl>
                                    {
                                        certificate &&
                                        <TextField
                                            fullWidth
                                            size='small'
                                            label="Certificate Name"
                                            required
                                            type='text'
                                            {...getFieldProps('certificates')}
                                            error={Boolean(touched.certificates && errors.certificates)}
                                            helperText={touched.certificates && errors.certificates}
                                        />
                                    }
                                </Stack>
                                <Stack sx={{ width: '100%' }}>
                                    <FormControl>
                                        <FormLabel id="demo-row-radio-buttons-group-label" variant='subtitle1' sx={{ fontWeight: 'bold', fontFamily: "Public Sans,sans-serif", color: '#1976d2' }}>Mentor Name(in Report)</FormLabel>
                                        <RadioGroup
                                            row
                                            aria-labelledby="demo-row-radio-buttons-group-label"
                                            defaultValue="No"
                                            name="row-radio-buttons-group"
                                            onClick={handleClicks}
                                        >
                                            <FormControlLabel value="No" control={<Radio />} label="No" />
                                            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                        </RadioGroup>
                                    </FormControl>
                                    {
                                        name &&
                                        <TextField
                                            fullWidth
                                            size='small'
                                            label="Mentor name"
                                            required
                                            type='text'
                                            {...getFieldProps('name')}
                                            error={Boolean(touched.name && errors.name)}
                                            helperText={touched.name && errors.name}
                                        />
                                    }
                                </Stack>
                                <Stack sx={{ width: '100%' }}>
                                    <FormControl>
                                        <FormLabel id="demo-row-radio-buttons-group-label" variant='subtitle1' sx={{ fontWeight: 'bold', fontFamily: "Public Sans,sans-serif", color: '#1976d2' }}>Report send to Candidate</FormLabel>
                                        <RadioGroup
                                            row
                                            aria-labelledby="demo-row-radio-buttons-group-label"
                                            defaultValue="No"
                                            name="row-radio-buttons-group"
                                        >
                                            <FormControlLabel value="No" control={<Radio />} label="No" />
                                            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                        </RadioGroup>
                                    </FormControl>
                                </Stack>
                            </Stack>
                            <Stack spacing={2} mb={3} direction={{ xs: 'column', sm: 'row', md: "row" }}>
                                <Stack sx={{ width: '100%' }}>
                                    <InputLabel sx={{ fontWeight: 'bold', fontFamily: "Public Sans,sans-serif", color: '#1976d2' }}>Your description *</InputLabel>
                                    <TextareaAutosize
                                        fullWidth
                                        size='small'
                                        maxRows={5}
                                        minRows={5}
                                        label="Your description"
                                        required
                                        type='text'
                                        {...getFieldProps('description')}
                                        error={Boolean(touched.description && errors.description)}
                                        helperText={touched.description && errors.description}
                                    />
                                </Stack>
                                <Stack sx={{ width: '100%' }}>
                                    <InputLabel sx={{ fontWeight: 'bold', fontFamily: "Public Sans,sans-serif", color: '#1976d2' }}>Add Insights *</InputLabel>
                                    <TextareaAutosize
                                        fullWidth
                                        size='small'
                                        maxRows={5}
                                        minRows={5}
                                        required
                                        aria-label="maximum height"
                                        placeholder="Example: Every human interaction is an opportunity to learn. It also an opportunity to demonstrate your skills and expertise is a specific context and capacity. We view every professional interaction as a high-stakes game - whether you are likely to save money, generate revenue, make a process more efficient or improve your performance. These virtual interaction act as practice sessions where you can test drive real-world interactions. Experts in the world may differ on what skills matter - but they all have a common point of view. Practice is the key to improvement - and specific feedback makes improvement faster."
                                        {...getFieldProps('generalFeedback')}
                                        error={Boolean(touched.generalFeedback && errors.generalFeedback)}
                                        helperText={touched.generalFeedback && errors.generalFeedback}
                                    />
                                </Stack>
                            </Stack>
                            <Stack>

                            </Stack>
                        </CardContent>
                    </Card>
                </Form>
            </FormikProvider>
            <AddQuestion mt={3} />

            <Skills mt={3} />
        </>
    )
}

export default InternalBot;