import React, { useState } from 'react';

import {
    Paper,
    Stack,
    Box,
    Card,
    CardContent,
    CardActions,
    Alert,
    Typography,
    FormControl,
    FormControlLabel,
    FormGroup,
    TextField,
    FormLabel,
    InputLabel,
    Checkbox,
    Autocomplete,
    MenuItem,
    RadioGroup,
    Radio,
    Button,
} from '@mui/material';

import { DatePicker } from "@mui/x-date-pickers";


// Routing
import { useNavigate } from 'react-router-dom';


// Components
import LoadingScreen from '../LoadingScreen';

// Validation
import { useFormik, FormikProvider, Form } from 'formik';
import * as Yup from 'yup';

// Alert
import { message } from 'antd';

const InternalBot = () => {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [track, setTrack] = useState('');
    const [timer, setTimer] = useState('');
    const [mode, setMode] = useState('');
    const [certificate, setCertificate] = useState(false);
    const [name, setName] = useState(false);
    const [noOfRows, setNoOfRows] = useState(1);
    const [ques, setQues] = useState(false);
    const [skills, setSkills] = useState('');

    const onChange = (event) => {
        if (event.target.value == "") {
            setQues(true);
        }
        else {
            setQues(false);
        }
    }

    const internalBotSchema = Yup.object().shape({
        companyName: Yup.string().min(2).required('It must be least 2 characters'),
        interactionTitle: Yup.string().min(2).required('It must be least 2 characters'),
        testId: Yup.string().min(6, 'Too Short!').max(6, 'Too Long!').required('Test Id must be of exactly 6 numbers'),
        track: Yup.string().required('Select your Track'),
        interactionMode: Yup.string().required('Select Interaction Mode'),
        accessCode: Yup.string().min(6, 'Too Short!').max(6, 'Too Long!').required('Access must be of exactly 6 numbers'),
        expiryDate: Yup.string().required('Expiry Date is required'),
        emailOne: Yup.string().email('Invalid email').required('Email is required'),
        timer: Yup.string().required('Select Timer'),
        description: Yup.string().required('Description is required'),
        generalFeedback: Yup.string().min(400, 'Too Short!').max(615, 'Too Long!').required('Minimum 400 and Maximum 615 characters required'),
        questions: Yup.string().required('This is required'),
        // mediaContext: Yup.string().required('This is required'),
        // hints: Yup.string().required('This is required'),
        // idealAnswer: Yup.string().required('This is required'),
        // skills: Yup.array().min(1).required('Skills are required')
        skills: Yup.string().required('Select Skill Format')
    });

    const formik = useFormik({
        initialValues: {
            companyName: '',
            interactionTitle: '',
            testId: '',
            track: '',
            interactionMode: '',
            accessCode: '',
            expiryDate: '',
            emailOne: '',
            timer: '',
            description: '',
            generalFeedback: '',
            questions: '',
            // mediaContext: '',
            // hints: '',
            // idealAnswer: '',
            skills: ''
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


    const { errors, touched, values, handleSubmit, getFieldProps, setFieldValue } = formik;

    const handleChange = (event) => {
        setTrack(event.target.value);
        setTimer(event.target.value);
        setMode(event.target.value);
        setSkills(event.target.value);
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

    const [checked, setChecked] = useState(false);

    const handleCheck = () => {
        setChecked(!checked);
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

    const skillsOption = [
        {
            value: "Interview",
            label: "Interview"
        },
        {
            value: "Role Play & Simulation",
            label: "Role Play & Simulation"
        },
        {
            value: "Case Studies",
            label: "Case Studies"
        },
        {
            value: "Lesson",
            label: "Lesson"
        }
    ];

    const style = {
        height: '215px',
        overflow: 'auto',
    }

    const handleSubmitIb = () => {
        if (
            values.companyName === '' ||
            values.interactionTitle === '' ||
            values.testId === '' ||
            values.track === '' ||
            values.interactionMode === '' ||
            values.accessCode === '' ||
            values.expiryDate === '' ||
            values.emailOne === '' ||
            values.timer === '' ||
            values.description === '' ||
            values.generalFeedback === '' ||
            // values.questions === '' ||
            values.mediaContext === '' ||
            values.hints === '' ||
            values.idealAnswer === '' &&
            values.skills === ""
        ) {
            return null;
        }
        else {
            navigate('/thank-you');
        }
    }

    const handleGoto = () => {
        if (
            values.companyName === '' ||
            values.interactionTitle === '' ||
            values.testId === '' ||
            values.track === '' ||
            values.interactionMode === '' ||
            values.accessCode === '' ||
            values.expiryDate === '' ||
            values.emailOne === '' ||
            values.timer === '' ||
            values.description === '' ||
            values.generalFeedback === '' ||
            // values.questions === '' ||
            values.mediaContext === '' ||
            values.hints === '' ||
            values.idealAnswer === '' ||
            values.skills === ''
        ) {
            message.error('Please fill the form completely');
        }
        else {
            navigate('/account/external-bot');
        }
    };


    return (
        <>
            <FormikProvider value={formik}>
                <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                    <Paper component={Stack} p={3}>
                        {/*************** Internal Bot ***************/}
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
                                            <MenuItem value="Video">Video</MenuItem>
                                            <MenuItem value="Audio">Audio</MenuItem>
                                            <MenuItem value="MCQ">MCQ</MenuItem>
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
                                        <DatePicker
                                            inputFormat='dd/MM/yyyy'
                                            value={values.expiryDate}
                                            label='Expiry Date'
                                            onChange={(newValue) => setFieldValue("expiryDate", newValue)}
                                            renderInput={(params) => (
                                                <TextField
                                                    required
                                                    size='small'
                                                    fullWidth
                                                    {...params}
                                                    error={Boolean(touched.expiryDate && errors.expiryDate)}
                                                    helperText={touched.expiryDate && errors.expiryDate}
                                                />
                                            )}
                                        ></DatePicker>
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
                                            <Box>
                                                <TextField
                                                    fullWidth
                                                    size='small'
                                                    label="Certificate Name"
                                                    required
                                                    type='text'
                                                />
                                                <FormGroup>
                                                    <FormControlLabel control={<Checkbox />} label="Show company name in certificate" />
                                                </FormGroup>
                                            </Box>
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
                                        <TextField
                                            fullWidth
                                            multiline
                                            maxRows={5}
                                            minRows={5}
                                            required
                                            type='text'
                                            {...getFieldProps('description')}
                                            error={Boolean(touched.description && errors.description)}
                                            helperText={touched.description && errors.description}
                                        />
                                    </Stack>
                                    <Stack sx={{ width: '100%' }}>
                                        <InputLabel sx={{ fontWeight: 'bold', fontFamily: "Public Sans,sans-serif", color: '#1976d2' }}>Add Insights *</InputLabel>
                                        <TextField
                                            fullWidth
                                            multiline
                                            maxRows={5}
                                            minRows={5}
                                            required
                                            placeholder="Example: Every human interaction is an opportunity to learn. It also an opportunity to demonstrate your skills and expertise is a specific context and capacity. We view every professional interaction as a high-stakes game - whether you are likely to save money, generate revenue, make a process more efficient or improve your performance. These virtual interaction act as practice sessions where you can test drive real-world interactions. Experts in the world may differ on what skills matter - but they all have a common point of view. Practice is the key to improvement - and specific feedback makes improvement faster."
                                            {...getFieldProps('generalFeedback')}
                                            error={Boolean(touched.generalFeedback && errors.generalFeedback)}
                                            helperText={touched.generalFeedback && errors.generalFeedback}
                                        />
                                    </Stack>
                                </Stack>
                            </CardContent>
                        </Card>

                        {/*************** Add Questions ***************/}
                        {mode === "MCQ" && (
                            <Card component={Stack} p={3} mt={3} spacing={2} elevation={3}>
                                <CardContent style={style}>
                                    <Typography variant="h4">Add Questions</Typography>
                                    {[...Array(noOfRows)].map((index) => {
                                        return (
                                            <Stack key={index} spacing={2} mt={1} direction={{ xs: 'row', sm: 'row', md: "row" }}>
                                                <Stack mb={1} sx={{ width: '100%' }}>
                                                    <InputLabel sx={{ fontWeight: 'bold', fontFamily: "Public Sans,sans-serif", color: '#1976d2' }}>Question</InputLabel>
                                                    <TextField
                                                        error={ques == "" ? false : true}
                                                        multiline
                                                        fullWidth
                                                        onChange={onChange}
                                                        size='small'
                                                        maxRows={3}
                                                        minRows={3}
                                                        placeholder="Add Question"
                                                    // {...getFieldProps('questions')}
                                                    // error={Boolean(touched.questions && errors.questions)}
                                                    // helperText={touched.questions && errors.questions}
                                                    />
                                                </Stack>
                                                <Stack mb={1} sx={{ width: '100%' }}>
                                                    <InputLabel sx={{ fontWeight: 'bold', fontFamily: "Public Sans,sans-serif", color: '#1976d2' }}>Media Context</InputLabel>
                                                    <TextField
                                                        multiline
                                                        fullWidth
                                                        size='small'
                                                        maxRows={3}
                                                        minRows={3}
                                                        placeholder="Paste your media link here"
                                                    // {...getFieldProps('mediaContext')}
                                                    // error={Boolean(touched.mediaContext && errors.mediaContext)}
                                                    // helperText={touched.mediaContext && errors.mediaContext}
                                                    />
                                                </Stack>
                                                <Stack mb={1} sx={{ width: '100%' }}>
                                                    <InputLabel sx={{ fontWeight: 'bold', fontFamily: "Public Sans,sans-serif", color: '#1976d2' }}>Hints/Description</InputLabel>
                                                    <TextField
                                                        multiline
                                                        fullWidth
                                                        size='small'
                                                        maxRows={3}
                                                        minRows={3}
                                                        placeholder="Add Hints/Description"
                                                    // {...getFieldProps('hints')}
                                                    // error={Boolean(touched.hints && errors.hints)}
                                                    // helperText={touched.hints && errors.hints}
                                                    />
                                                </Stack>
                                                <Stack mb={1} sx={{ width: '100%' }}>
                                                    <InputLabel sx={{ fontWeight: 'bold', fontFamily: "Public Sans,sans-serif", color: '#1976d2' }}>Option 1</InputLabel>
                                                    <TextField
                                                        multiline
                                                        fullWidth
                                                        size='small'
                                                        maxRows={3}
                                                        minRows={3}
                                                        placeholder="Option1"
                                                    // {...getFieldProps('idealAnswer')}
                                                    // error={Boolean(touched.idealAnswer && errors.idealAnswer)}
                                                    // helperText={touched.idealAnswer && errors.idealAnswer}
                                                    />
                                                </Stack>
                                                <Stack mb={1} sx={{ width: '100%' }}>
                                                    <InputLabel sx={{ fontWeight: 'bold', fontFamily: "Public Sans,sans-serif", color: '#1976d2' }}>Option 2</InputLabel>
                                                    <TextField
                                                        multiline
                                                        fullWidth
                                                        size='small'
                                                        maxRows={3}
                                                        minRows={3}
                                                        placeholder="Option2"
                                                    // {...getFieldProps('idealAnswer')}
                                                    // error={Boolean(touched.idealAnswer && errors.idealAnswer)}
                                                    // helperText={touched.idealAnswer && errors.idealAnswer}
                                                    />
                                                </Stack>
                                                <Stack mb={1} sx={{ width: '100%' }}>
                                                    <InputLabel sx={{ fontWeight: 'bold', fontFamily: "Public Sans,sans-serif", color: '#1976d2' }}>Option 3</InputLabel>
                                                    <TextField
                                                        multiline
                                                        fullWidth
                                                        size='small'
                                                        maxRows={3}
                                                        minRows={3}
                                                        placeholder="Option3"
                                                    // {...getFieldProps('idealAnswer')}
                                                    // error={Boolean(touched.idealAnswer && errors.idealAnswer)}
                                                    // helperText={touched.idealAnswer && errors.idealAnswer}
                                                    />
                                                </Stack>
                                                <Stack mb={1} sx={{ width: '100%' }}>
                                                    <InputLabel sx={{ fontWeight: 'bold', fontFamily: "Public Sans,sans-serif", color: '#1976d2' }}>Option 4</InputLabel>
                                                    <TextField
                                                        multiline
                                                        fullWidth
                                                        size='small'
                                                        maxRows={3}
                                                        minRows={3}
                                                        placeholder="Option4"
                                                    // {...getFieldProps('idealAnswer')}
                                                    // error={Boolean(touched.idealAnswer && errors.idealAnswer)}
                                                    // helperText={touched.idealAnswer && errors.idealAnswer}
                                                    />
                                                </Stack>
                                                <Stack mb={1} sx={{ width: '100%' }}>
                                                    <InputLabel sx={{ fontWeight: 'bold', fontFamily: "Public Sans,sans-serif", color: '#1976d2' }}>Right Option</InputLabel>
                                                    <TextField
                                                        multiline
                                                        fullWidth
                                                        size='small'
                                                        maxRows={3}
                                                        minRows={3}
                                                        placeholder="rightoption"
                                                    // {...getFieldProps('idealAnswer')}
                                                    // error={Boolean(touched.idealAnswer && errors.idealAnswer)}
                                                    // helperText={touched.idealAnswer && errors.idealAnswer}
                                                    />
                                                </Stack>
                                            </Stack>
                                        )
                                    }
                                    )}
                                </CardContent>
                                <CardActions sx={{ backgroundColor: "#fafafa" }}>
                                    <Stack direction="row" sx={{ gap: "0.25rem" }}>
                                        <Button sx={{ cursor: 'pointer' }} size='small' variant="contained" color='success' onClick={() => setNoOfRows(noOfRows + 1)}>Add</Button>
                                        <Button sx={{ cursor: 'pointer' }} disabled={noOfRows <= 1} size='small' variant="contained" color='error' onClick={() => setNoOfRows(noOfRows - 1)}>Delete</Button>
                                    </Stack>
                                </CardActions>
                                <CardContent>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox onClick={handleCheck} />} label="Case-Study/Description Text :" />
                                    </FormGroup>
                                    {
                                        checked && (
                                            <Stack sx={{ width: '100%' }}>
                                                <TextField
                                                    multiline
                                                    fullWidth
                                                    maxRows={7}
                                                    minRows={7}
                                                />
                                            </Stack>
                                        )
                                    }
                                </CardContent>
                            </Card>
                        )}

                        {mode !== "MCQ" && (
                            <Card component={Stack} p={3} mt={3} spacing={2} elevation={3}>
                                <CardContent style={style}>
                                    <Typography variant="h4">Add Questions</Typography>
                                    {[...Array(noOfRows)].map((index) => {
                                        return (
                                            <Stack key={index} spacing={2} mt={1} direction={{ xs: 'row', sm: 'row', md: "row" }}>
                                                <Stack mb={1} sx={{ width: '100%' }}>
                                                    <InputLabel sx={{ fontWeight: 'bold', fontFamily: "Public Sans,sans-serif", color: '#1976d2' }}>Question</InputLabel>
                                                    <TextField
                                                        error={ques == "" ? false : true}
                                                        multiline
                                                        fullWidth
                                                        onChange={onChange}
                                                        size='small'
                                                        maxRows={3}
                                                        minRows={3}
                                                        placeholder="Add Question"
                                                    // {...getFieldProps('questions')}
                                                    // error={Boolean(touched.questions && errors.questions)}
                                                    // helperText={touched.questions && errors.questions}
                                                    />
                                                </Stack>
                                                <Stack mb={1} sx={{ width: '100%' }}>
                                                    <InputLabel sx={{ fontWeight: 'bold', fontFamily: "Public Sans,sans-serif", color: '#1976d2' }}>Media Context</InputLabel>
                                                    <TextField
                                                        multiline
                                                        fullWidth
                                                        size='small'
                                                        maxRows={3}
                                                        minRows={3}
                                                        placeholder="Paste your media link here"
                                                    // {...getFieldProps('mediaContext')}
                                                    // error={Boolean(touched.mediaContext && errors.mediaContext)}
                                                    // helperText={touched.mediaContext && errors.mediaContext}
                                                    />
                                                </Stack>
                                                <Stack mb={1} sx={{ width: '100%' }}>
                                                    <InputLabel sx={{ fontWeight: 'bold', fontFamily: "Public Sans,sans-serif", color: '#1976d2' }}>Hints/Description</InputLabel>
                                                    <TextField
                                                        multiline
                                                        fullWidth
                                                        size='small'
                                                        maxRows={3}
                                                        minRows={3}
                                                        placeholder="Add Hints/Description"
                                                    // {...getFieldProps('hints')}
                                                    // error={Boolean(touched.hints && errors.hints)}
                                                    // helperText={touched.hints && errors.hints}
                                                    />
                                                </Stack>
                                                <Stack mb={1} sx={{ width: '100%' }}>
                                                    <InputLabel sx={{ fontWeight: 'bold', fontFamily: "Public Sans,sans-serif", color: '#1976d2' }}>Ideal Answer</InputLabel>
                                                    <TextField
                                                        multiline
                                                        fullWidth
                                                        size='small'
                                                        maxRows={3}
                                                        minRows={3}
                                                        placeholder="Add Ideal Answer"
                                                    // {...getFieldProps('idealAnswer')}
                                                    // error={Boolean(touched.idealAnswer && errors.idealAnswer)}
                                                    // helperText={touched.idealAnswer && errors.idealAnswer}
                                                    />
                                                </Stack>
                                            </Stack>
                                        )
                                    }
                                    )}
                                </CardContent>
                                <CardActions sx={{ backgroundColor: "#fafafa" }}>
                                    <Stack direction="row" sx={{ gap: "0.25rem" }}>
                                        <Button sx={{ cursor: 'pointer' }} size='small' variant="contained" color='success' onClick={() => setNoOfRows(noOfRows + 1)}>Add</Button>
                                        <Button sx={{ cursor: 'pointer' }} disabled={noOfRows <= 1} size='small' variant="contained" color='error' onClick={() => setNoOfRows(noOfRows - 1)}>Delete</Button>
                                    </Stack>
                                </CardActions>
                                <CardContent>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox onClick={handleCheck} />} label="Case-Study/Description Text :" />
                                    </FormGroup>
                                    {
                                        checked && (
                                            <Stack sx={{ width: '100%' }}>
                                                <TextField
                                                    multiline
                                                    fullWidth
                                                    maxRows={7}
                                                    minRows={7}
                                                />
                                            </Stack>
                                        )
                                    }
                                </CardContent>
                            </Card>
                        )}


                        {/*************** Add Skills ***************/}
                        <Card component={Stack} p={3} mt={3} spacing={2} elevation={3}>
                            <CardContent>
                                <Typography mb={3} variant="h4">Add Skill Format</Typography>
                                <Stack sx={{ width: '100%' }}>
                                    {/* <Autocomplete
                                        multiple
                                        limitTags={4}
                                        id="skills-autocomplete"
                                        getOptionLabel={(option) => option.title}
                                        options={skillsOption}
                                        onChange={(e, newValue) => setFieldValue('skills', newValue)}
                                        renderInput={(params) => (
                                            <TextField
                                                required
                                                id='skills'
                                                label="Skills"
                                                name='skills'
                                                type='search'
                                                {...params}
                                                {...getFieldProps('skills')}
                                                error={Boolean(touched.skills && errors.skills)}
                                                helperText={touched.skills && errors.skills}
                                            />
                                        )}
                                    /> */}

                                    <TextField
                                        select
                                        value={skills}
                                        size='small'
                                        label="Skill Format"
                                        required
                                        onChange={handleChange}
                                        {...getFieldProps('skills')}
                                        error={Boolean(touched.skills && errors.skills)}
                                        helperText={touched.skills && errors.skills}
                                    >
                                        {skillsOption.map(option => (
                                            <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                                        ))}
                                    </TextField>
                                </Stack>
                            </CardContent>
                        </Card>

                        <Box mt={3} display="flex" justifyContent="center" sx={{ gap: "0.5rem" }}>
                            <Button
                                disabled={errors.companyName || errors.interactionTitle || errors.testId || errors.track || errors.interactionMode
                                    || errors.accessCode || errors.expiryDate || errors.emailOne || errors.timer || errors.description
                                    || errors.generalFeedback || errors.mediaContext || errors.hints
                                    || errors.idealAnswer || errors.skills ? true : false
                                }
                                onClick={handleSubmitIb}
                                variant='contained'
                                type='submit'
                            >
                                Submit
                            </Button>
                            <Button
                                // disabled={errors.companyName || errors.interactionTitle || errors.testId || errors.track || errors.interactionMode
                                //     || errors.accessCode || errors.expiryDate || errors.emailOne || errors.timer || errors.description
                                //     || errors.generalFeedback || errors.questions || errors.mediaContext || errors.hints
                                //     || errors.idealAnswer || errors.skills ? true : false
                                // }
                                onClick={handleGoto}
                                color="warning"
                                variant='contained'
                            >
                                Go to External Bot
                            </Button>
                        </Box>
                    </Paper>
                </Form>
            </FormikProvider>
        </>
    )
}

export default InternalBot;