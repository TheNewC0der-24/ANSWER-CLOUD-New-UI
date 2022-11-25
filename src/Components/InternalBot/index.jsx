import React, { useState } from 'react';
// import styles from './InternalBot.module.css';
import Addquestion from './Addquestions';
import {
    Stack,
    Paper,
    // IconButton,
    Box,
    Alert,
    Typography,
    TextField,
    LinearProgress,
    // InputAdornment,
    // Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    FormControlLabel,
    FormLabel,
    RadioGroup,
    Radio,
    TextareaAutosize
} from '@mui/material';


// Routing
import { useNavigate, Link } from 'react-router-dom';

// Auth
// import useAuth from '../../Hooks/useAuth';

// Components
import LoadingScreen from '../LoadingScreen';

// Images
// import signUpImg from '../../assets/Images/signup.svg';
// import logo from '../../assets/Images/brand.png';

// Validation
import { useFormik, FormikProvider, Form } from 'formik';
import * as Yup from 'yup';

// Icons
// import { Icon } from '@iconify/react';
// import eyeFill from '@iconify/icons-eva/eye-fill';
// import eyeOffFill from '@iconify/icons-eva/eye-off-fill';

const InternalBot = () => {

    const navigate = useNavigate();

    // const { login } = useAuth();

    const [loading, setLoading] = useState(false);

    const signupSchema = Yup.object().shape({
        companyname: Yup.string().min(2).required('It must be least 2 characters'),
        interactiontitle: Yup.string().min(2).required('It must be least 2 characters'),
        testid: Yup.string().min(6).max(6).required('TestId must be of exactly 6 numbers'),
        track: Yup.string().min(1).required('TestId must be of exactly 6 numbers'),
        accesscode: Yup.string().min(6).max(6).required('TestId must be of exactly 6 numbers'),
        timer: Yup.string().required('Timer cannot be blank'),
        expirydate: Yup.string().required('Date is required'),
        emailOne: Yup.string().email('Invalid email').required('Email is required'),
        timer: Yup.string().required('Timer cannot be blank'),
        certificates: Yup.string().required('It is required'),
        names: Yup.string().required('It is required'),
        description: Yup.string().required('Description is required'),
        generalfeedback: Yup.string().min(400).max(615).required('Feedback must be of exactly 6 numbers'),
    });

    const formik = useFormik({
        initialValues: {
            companyname: '',
            interactiontitle: '',
            testid: '',
            track: '',
            accesscode: '',
            expirydate: '',
            emailOne: '',
            timer: '',
            certificates: '',
            names: '',
            description: '',
            generalfeedback:''
        },
        validationSchema: signupSchema,
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
    };
    const handleChang = (event) => {
        setTimer(event.target.value);
    };

    const handleChanges = (event) => {
        setMode(event.target.value);
    };

    const handleClick = (event) => {
        if (event.target.value == "No") {
            setCertificate(false);
        }
        else {
            setCertificate(true);
        }
    };

    const handleClicks = (event) => {
        if (event.target.value == "No") {
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

    return (
        <>
        <FormikProvider value={formik}>
            <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Paper component={Stack} p={3} spacing={2} elevation={10} >
                    {/********** Loading **********/}
                    <Stack direction='row' justifyContent='center' >
                        {loading &&
                            <Box sx={{ width: '100%' }}>
                                <LinearProgress />
                            </Box>
                        }
                    </Stack>


                    {/********** Logo **********/}
                    {/* <Stack alignItems='center' spacing={1}>
                            <img src={logo} alt="aCLOUD" width={150} />
                            <Typography variant='h4' sx={{ fontWeight: 'bold', fontFamily: "Public Sans,sans-serif", color: '#971b8b' }}>Register</Typography>
                        </Stack> */}

                    {/***************************** Alert for Error  *****************************/}

                    {errors.afterSubmit && <Alert severity="error">{errors.afterSubmit}</Alert>}

                    <Stack spacing={2} direction={{ xs: 'column', sm: 'row', md: "row" }}>
                        <Stack sx={{ width: '100%' }}>
                            <Typography variant='subtitle1' sx={{ fontWeight: 'bold', fontFamily: "Public Sans,sans-serif", color: '#971b8b' }}>Company/Institute Name</Typography>
                            <TextField
                                fullWidth
                                size='small'
                                label="Company/Institute Name"
                                required
                                type='text'
                                sx={{ marginBottom: { xs: '0', sm: '0', md: '0' } }}
                                {...getFieldProps('companyname')}
                                error={Boolean(touched.companyname && errors.companyname)}
                                helperText={touched.companyname && errors.companyname}
                            />
                        </Stack>
                        <Stack sx={{ width: '100%' }}>
                            <Typography variant='subtitle1' sx={{ fontWeight: 'bold', fontFamily: "Public Sans,sans-serif", color: '#971b8b' }}>Interaction Title</Typography>
                            <TextField
                                fullWidth
                                size='small'
                                label="Interaction Title"
                                required
                                type='text'
                                {...getFieldProps('interactiontitle')}
                                error={Boolean(touched.interactiontitle && errors.interactiontitle)}
                                helperText={touched.interactiontitle && errors.interactiontitle}
                            />
                        </Stack>
                        <Stack sx={{ width: '100%' }}>
                            <Typography variant='subtitle1' sx={{ fontWeight: 'bold', fontFamily: "Public Sans,sans-serif", color: '#971b8b' }}>Test Id</Typography>
                            <TextField
                                fullWidth
                                size='small'
                                label="Test Id"
                                required
                                type='number'
                                {...getFieldProps('testid')}
                                error={Boolean(touched.testid && errors.testid)}
                                helperText={touched.testid && errors.testid}
                            />
                        </Stack>
                    </Stack>
                    <Stack spacing={1} direction={{ xs: 'column', sm: 'row', md: "row" }}>
                        <Stack sx={{ width: '100%' }}>
                            <Typography variant='subtitle1' sx={{ fontWeight: 'bold', fontFamily: "Public Sans,sans-serif", color: '#971b8b' }}>Track</Typography>
                            <FormControl fullWidth size='small'>
                                <InputLabel id="demo-simple-select-label">Track</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={track}
                                    label="Track"
                                    onChange={handleChange}
                                    {...getFieldProps('track')}
                                    error={Boolean(touched.track && errors.track)}
                                    helperText={touched.track && errors.track}
                                >
                                    <MenuItem value="Sales">Sales</MenuItem>
                                    <MenuItem value="Service">Service</MenuItem>
                                    <MenuItem value="HR">HR</MenuItem>
                                    <MenuItem value="New Grad.">New Grad.</MenuItem>
                                    <MenuItem value="None / Others">None / Others</MenuItem>
                                </Select>
                            </FormControl>
                        </Stack>
                        <Stack sx={{ width: '100%' }}>
                            <Typography variant='subtitle1' sx={{ fontWeight: 'bold', fontFamily: "Public Sans,sans-serif", color: '#971b8b' }}>Track</Typography>
                            <FormControl fullWidth size='small'>
                                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={track}
                                    label="Age"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Stack>
                    </Stack>
                    <Stack spacing={1} direction={{ xs: 'column', sm: 'row', md: "row" }}>
                        <Stack sx={{ width: '100%' }}>
                            <Typography variant='subtitle1' sx={{ fontWeight: 'bold', fontFamily: "Public Sans,sans-serif", color: '#971b8b' }}>Access Code</Typography>
                            <TextField
                                fullWidth
                                size='small'
                                label="Access Code"
                                required
                                type='number'
                                sx={{ marginBottom: { xs: '0', sm: '0', md: '0' } }}
                                {...getFieldProps('accesscode')}
                                error={Boolean(touched.accesscode && errors.accesscode)}
                                helperText={touched.accesscode && errors.accesscode}
                            />
                        </Stack>
                        <Stack sx={{ width: '100%' }}>
                            <Typography variant='subtitle1' sx={{ fontWeight: 'bold', fontFamily: "Public Sans,sans-serif", color: '#971b8b' }}>Expiry Date</Typography>
                            <TextField
                                fullWidth
                                size='small'
                                // label="Expiry Date"
                                required
                                type='date'
                                {...getFieldProps('expirydate')}
                                error={Boolean(touched.expirydate && errors.expirydate)}
                                helperText={touched.expirydate && errors.expirydate}
                            />
                        </Stack>
                    </Stack>
                    <Stack spacing={1} direction={{ xs: 'column', sm: 'row', md: "row" }}>
                        <Stack sx={{ width: '100%' }}>
                            <Typography variant='subtitle1' sx={{ fontWeight: 'bold', fontFamily: "Public Sans,sans-serif", color: '#971b8b' }}>Report send to email</Typography>
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
                            <Typography variant='subtitle1' sx={{ fontWeight: 'bold', fontFamily: "Public Sans,sans-serif", color: '#971b8b' }}>Timer</Typography>
                            <FormControl fullWidth size='small'>
                                <InputLabel id="demo-simple-select-label">Timer</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={timer}
                                    label="Timer"
                                    onChange={handleChang}
                                    {...getFieldProps('timer')}
                                    error={Boolean(touched.timer && errors.timer)}
                                    helperText={touched.timer && errors.timer}
                                >
                                    <MenuItem value="15 minutes">15 minutes</MenuItem>
                                    <MenuItem value="20 minutes">20 minutes</MenuItem>
                                    <MenuItem value="30 minutes">30 minutes</MenuItem>
                                    <MenuItem value="45 minutes">45 minutes</MenuItem>
                                    <MenuItem value="60 minutes">60 minutes</MenuItem>
                                    <MenuItem value="None">None</MenuItem>
                                </Select>
                            </FormControl>
                        </Stack>
                    </Stack>
                    <Stack spacing={2} direction={{ xs: 'column', sm: 'row', md: "row" }}>
                        <Stack sx={{ width: '100%' }}>
                            <FormControl>
                                <FormLabel id="demo-row-radio-buttons-group-label" variant='subtitle1' sx={{ fontWeight: 'bold', fontFamily: "Public Sans,sans-serif", color: '#971b8b' }}>Generate Certificate</FormLabel>
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
                                <FormLabel id="demo-row-radio-buttons-group-label" variant='subtitle1' sx={{ fontWeight: 'bold', fontFamily: "Public Sans,sans-serif", color: '#971b8b' }}>Mentor Name(in Report)</FormLabel>
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
                                    {...getFieldProps('names')}
                                    error={Boolean(touched.names && errors.names)}
                                    helperText={touched.names && errors.names}
                                />
                            }
                        </Stack>
                        <Stack sx={{ width: '100%' }}>
                            <FormControl>
                                <FormLabel id="demo-row-radio-buttons-group-label" variant='subtitle1' sx={{ fontWeight: 'bold', fontFamily: "Public Sans,sans-serif", color: '#971b8b' }}>Report send to Candidate</FormLabel>
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
                    <Stack spacing={1} direction={{ xs: 'column', sm: 'row', md: "row" }}>
                        <Stack sx={{ width: '100%' }}>
                            <Typography variant='subtitle1' sx={{ fontWeight: 'bold', fontFamily: "Public Sans,sans-serif", color: '#971b8b' }}>Description</Typography>
                            <TextField
                                fullWidth
                                size='small'
                                label="Your description"
                                required
                                type='text'
                                {...getFieldProps('description')}
                                error={Boolean(touched.description && errors.description)}
                                helperText={touched.description && errors.description}
                            />
                        </Stack>
                        <Stack sx={{ width: '100%' }}>
                            <Typography variant='subtitle1' sx={{ fontWeight: 'bold', fontFamily: "Public Sans,sans-serif", color: '#971b8b' }}>Interaction Mode</Typography>
                            <FormControl fullWidth size='small'>
                                <InputLabel id="demo-simple-select-label">Mode</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={mode}
                                    label="mode"
                                    onChange={handleChanges}
                                    {...getFieldProps('timer')}
                                    error={Boolean(touched.timer && errors.timer)}
                                    helperText={touched.timer && errors.timer}
                                >
                                    <MenuItem value="audio minutes">Audio</MenuItem>
                                </Select>
                            </FormControl>
                        </Stack>
                    </Stack>
                    <Stack>
                        <Stack sx={{ width: '100%' }}>
                            <Typography variant='subtitle1' sx={{ fontWeight: 'bold', fontFamily: "Public Sans,sans-serif", color: '#971b8b' }}>Add Insights</Typography>
                            <TextareaAutosize
                                fullWidth
                                size='small'
                                maxRows={5}
                                aria-label="maximum height"
                                placeholder="Example: Every human interaction is an opportunity to learn. It also an opportunity to demonstrate your skills and expertise is a specific context and capacity. We view every professional interaction as a high-stakes game - whether you are likely to save money, generate revenue, make a process more efficient or improve your performance. These virtual interaction act as practice sessions where you can test drive real-world interactions. Experts in the world may differ on what skills matter - but they all have a common point of view. Practice is the key to improvement - and specific feedback makes improvement faster."
                                {...getFieldProps('generalfeedback')}
                                error={Boolean(touched.generalfeedback && errors.generalfeedback)}
                                helperText={touched.generalfeedback && errors.generalfeedback}
                            />
                        </Stack>
                    </Stack>
                </Paper>
            </Form>
        </FormikProvider>
        <Addquestion mt={3}/>
        </>
    )
}

export default InternalBot;