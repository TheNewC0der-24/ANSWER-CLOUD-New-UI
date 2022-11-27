import React, { useState } from 'react';
// import styles from './InternalBot.module.css';

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
    CardContent,
    Paper,
    Button,
    Box,
    OutlinedInput,
    Select,
    Chip,
} from '@mui/material';

import { useTheme } from '@mui/material/styles';


// Routing
import { useNavigate } from 'react-router-dom';


// Components
import LoadingScreen from '../LoadingScreen';


// Validation
import { useFormik, FormikProvider, Form } from 'formik';
import * as Yup from 'yup';


const InternalBot = () => {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [track, setTrack] = useState('');
    const [timer, setTimer] = useState('');
    const [mode, setMode] = useState('');
    const [certificate, setCertificate] = useState(false);
    const [name, setName] = useState(false);
    const [noOfRows, setNoOfRows] = useState(1);

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };

    const names = [
        'Oliver Hansen',
        'Van Henry',
        'April Tucker',
        'Ralph Hubbard',
        'Omar Alexander',
        'Carlos Abbott',
        'Miriam Wagner',
        'Bradley Wilkerson',
        'Virginia Andrews',
        'Kelly Snyder',
    ];

    function getStyles(name, personName, theme) {
        return {
            fontWeight:
                personName.indexOf(name) === -1
                    ? theme.typography.fontWeightRegular
                    : theme.typography.fontWeightMedium,
        };
    }
    const theme = useTheme();
    const [personName, setPersonName] = useState([]);


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
            interactionMode: '',
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

    const handleChange = (event) => {
        setTrack(event.target.value);
        setTimer(event.target.value);
        setMode(event.target.value);

        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
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

    const style = {
        height: '210px',
        overflow: 'auto',
    }


    return (
        <>
            <FormikProvider value={formik}>
                <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                    <Paper component={Stack} p={3}>
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
                            </CardContent>
                        </Card>


                        {/*************** Add Questions ***************/}
                        <Card component={Stack} p={3} mt={3} spacing={2} elevation={3}>
                            <CardContent style={style}>
                                <Box sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem" }} mt={2}>
                                    <Typography variant="h4">Add Questions</Typography>
                                    <Stack direction="row" sx={{ gap: "0.25rem" }}>
                                        <Button sx={{ cursor: 'pointer' }} size='small' variant="contained" color='success' onClick={() => setNoOfRows(noOfRows + 1)}>Add</Button>
                                        <Button sx={{ cursor: 'pointer' }} disabled={noOfRows <= 1} size='small' variant="contained" color='error' onClick={() => setNoOfRows(noOfRows - 1)}>Delete</Button>
                                    </Stack>
                                </Box>
                                {errors.afterSubmit && <Alert severity="error">{errors.afterSubmit}</Alert>}

                                {/* <Stack spacing={2} direction={{ xs: 'row', sm: 'row', md: "row" }}>
                                <Typography variant='subtitle1' sx={{ fontWeight: 'bold', fontFamily: "Public Sans,sans-serif", color: '#1976d2', width: '100%' }}>Question:</Typography>
                                <Typography variant='subtitle1' sx={{ fontWeight: 'bold', fontFamily: "Public Sans,sans-serif", color: '#1976d2', width: '100%' }}>Media Context:</Typography>
                                <Typography variant='subtitle1' sx={{ fontWeight: 'bold', fontFamily: "Public Sans,sans-serif", color: '#1976d2', width: '100%' }}>Hints/Description:</Typography>
                                <Typography variant='subtitle1' sx={{ fontWeight: 'bold', fontFamily: "Public Sans,sans-serif", color: '#1976d2', width: '100%' }}>Ideal Answer:</Typography>

                            </Stack> */}
                                {[...Array(noOfRows)].map((index) => {
                                    return (
                                        <Stack spacing={2} mt={3} direction={{ xs: 'row', sm: 'row', md: "row" }}>
                                            <Stack mb={1} sx={{ width: '100%' }}>
                                                <TextareaAutosize
                                                    fullWidth
                                                    size='small'
                                                    maxRows={3}
                                                    minRows={3}
                                                    aria-label="maximum height"
                                                    placeholder="Add Question"
                                                // {...getFieldProps('generalfeedback')}
                                                // error={Boolean(touched.generalfeedback && errors.generalfeedback)}
                                                // helperText={touched.generalfeedback && errors.generalfeedback}
                                                />
                                            </Stack>
                                            <Stack mb={1} sx={{ width: '100%' }}>
                                                <TextareaAutosize
                                                    fullWidth
                                                    size='small'
                                                    maxRows={3}
                                                    minRows={3}
                                                    aria-label="maximum height"
                                                    placeholder="Paste your media link here"
                                                // {...getFieldProps('generalfeedback')}
                                                // error={Boolean(touched.generalfeedback && errors.generalfeedback)}
                                                // helperText={touched.generalfeedback && errors.generalfeedback}
                                                />
                                            </Stack>
                                            <Stack mb={1} sx={{ width: '100%' }}>
                                                <TextareaAutosize
                                                    fullWidth
                                                    size='small'
                                                    maxRows={3}
                                                    minRows={3}
                                                    aria-label="maximum height"
                                                    placeholder="Add Hints/Description"
                                                // {...getFieldProps('generalfeedback')}
                                                // error={Boolean(touched.generalfeedback && errors.generalfeedback)}
                                                // helperText={touched.generalfeedback && errors.generalfeedback}
                                                />
                                            </Stack>
                                            <Stack mb={1} sx={{ width: '100%' }}>
                                                <TextareaAutosize
                                                    fullWidth
                                                    size='small'
                                                    maxRows={3}
                                                    minRows={3}
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
                            </CardContent>
                        </Card>


                        {/*************** Add Skills ***************/}
                        <Card component={Stack} p={3} mt={3} spacing={2} elevation={3}>
                            <CardContent>
                                <Typography mb={3} variant="h4">Add Skills</Typography>
                                <Stack sx={{ width: '100%' }}>
                                    <FormControl>
                                        <InputLabel id="demo-multiple-chip-label">Skills *</InputLabel>
                                        <Select
                                            labelId="demo-multiple-chip-label"
                                            id="demo-multiple-chip"
                                            multiple
                                            required
                                            value={personName}
                                            onChange={handleChange}
                                            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                                            renderValue={(selected) => (
                                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                                    {selected.map((value) => (
                                                        <Chip key={value} label={value} />
                                                    ))}
                                                </Box>
                                            )}
                                            MenuProps={MenuProps}
                                        >
                                            {names.map((name) => (
                                                <MenuItem
                                                    key={name}
                                                    value={name}
                                                    style={getStyles(name, personName, theme)}
                                                >
                                                    {name}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Stack>
                            </CardContent>
                        </Card>

                        <Box mt={3} display="flex" justifyContent="center" sx={{ gap: "1rem" }}>
                            <Button variant='contained' type='submit'>Submit</Button>
                            <Button onClick={() => navigate("/account/external-bot")} color="warning" variant='contained'>Go to External Bot</Button>
                        </Box>
                    </Paper>
                </Form>
            </FormikProvider>
        </>
    )
}

export default InternalBot;