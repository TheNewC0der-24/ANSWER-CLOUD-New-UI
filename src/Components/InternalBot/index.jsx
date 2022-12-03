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
    Select,
    MenuItem,
    OutlinedInput,
    Chip,
    RadioGroup,
    Radio,
    Button,
} from '@mui/material';

import { DatePicker } from "@mui/x-date-pickers";

import { useTheme } from '@mui/material/styles';

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
    const [skill, setSkill] = useState([]);
    const [noOfRows, setNoOfRows] = useState(1);
    const [ques, setQues] = useState(false);

    const onChange = (event) => {
        if (event.target.value == "") {
            console.log("Ayush")
            setQues(true);
        }
        else {
            setQues(false);
            console.log("AyushJ")
        }
    }

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

    const skills = [
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

    function getStyles(name, skill, theme) {
        return {
            fontWeight:
                skill.indexOf(name) === -1
                    ? theme.typography.fontWeightRegular
                    : theme.typography.fontWeightMedium,
        };
    }
    const theme = useTheme();

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
        description: Yup.string().required('Description is required'),
        generalFeedback: Yup.string().min(400).max(615).required('Minimum 400 and Maximum 615 characters required'),
        questions: Yup.string().required('This is required'),
        mediaContext: Yup.string().required('This is required'),
        hints: Yup.string().required('This is required'),
        idealAnswer: Yup.string().required('This is required'),
        sk: Yup.string().required('This is required'),
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
            mediaContext: '',
            hints: '',
            idealAnswer: '',
            sk: ''
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

        const {
            target: { value },
        } = event;
        setSkill(
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

    const [checked, setChecked] = useState(false);

    const handleCheck = () => {
        setChecked(!checked);
    };

    if (loading) {
        setLoading(true);
        return <LoadingScreen />;
    }

    const top100Films = [
        { title: 'The Shawshank Redemption', year: 1994 },
        { title: 'The Godfather', year: 1972 },
        { title: 'The Godfather: Part II', year: 1974 },
        { title: 'The Dark Knight', year: 2008 },
        { title: '12 Angry Men', year: 1957 },
        { title: "Schindler's List", year: 1993 },
        { title: 'Pulp Fiction', year: 1994 },
        {
            title: 'The Lord of the Rings: The Return of the King',
            year: 2003,
        },
        { title: 'The Good, the Bad and the Ugly', year: 1966 },
        { title: 'Fight Club', year: 1999 },
        {
            title: 'The Lord of the Rings: The Fellowship of the Ring',
            year: 2001,
        },
        {
            title: 'Star Wars: Episode V - The Empire Strikes Back',
            year: 1980,
        },
        { title: 'Forrest Gump', year: 1994 },
        { title: 'Inception', year: 2010 },
        {
            title: 'The Lord of the Rings: The Two Towers',
            year: 2002,
        },
        { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
        { title: 'Goodfellas', year: 1990 },
        { title: 'The Matrix', year: 1999 },
        { title: 'Seven Samurai', year: 1954 },
        {
            title: 'Star Wars: Episode IV - A New Hope',
            year: 1977,
        },
        { title: 'City of God', year: 2002 },
        { title: 'Se7en', year: 1995 },
        { title: 'The Silence of the Lambs', year: 1991 },
        { title: "It's a Wonderful Life", year: 1946 },
        { title: 'Life Is Beautiful', year: 1997 },
        { title: 'The Usual Suspects', year: 1995 },
        { title: 'Léon: The Professional', year: 1994 },
        { title: 'Spirited Away', year: 2001 },
        { title: 'Saving Private Ryan', year: 1998 },
        { title: 'Once Upon a Time in the West', year: 1968 },
        { title: 'American History X', year: 1998 },
        { title: 'Interstellar', year: 2014 },
        { title: 'Casablanca', year: 1942 },
        { title: 'City Lights', year: 1931 },
        { title: 'Psycho', year: 1960 },
        { title: 'The Green Mile', year: 1999 },
        { title: 'The Intouchables', year: 2011 },
        { title: 'Modern Times', year: 1936 },
        { title: 'Raiders of the Lost Ark', year: 1981 },
        { title: 'Rear Window', year: 1954 },
        { title: 'The Pianist', year: 2002 },
        { title: 'The Departed', year: 2006 },
        { title: 'Terminator 2: Judgment Day', year: 1991 },
        { title: 'Back to the Future', year: 1985 },
        { title: 'Whiplash', year: 2014 },
        { title: 'Gladiator', year: 2000 },
        { title: 'Memento', year: 2000 },
        { title: 'The Prestige', year: 2006 },
        { title: 'The Lion King', year: 1994 },
        { title: 'Apocalypse Now', year: 1979 },
        { title: 'Alien', year: 1979 },
        { title: 'Sunset Boulevard', year: 1950 },
        {
            title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
            year: 1964,
        },
        { title: 'The Great Dictator', year: 1940 },
        { title: 'Cinema Paradiso', year: 1988 },
        { title: 'The Lives of Others', year: 2006 },
        { title: 'Grave of the Fireflies', year: 1988 },
        { title: 'Paths of Glory', year: 1957 },
        { title: 'Django Unchained', year: 2012 },
        { title: 'The Shining', year: 1980 },
        { title: 'WALL·E', year: 2008 },
        { title: 'American Beauty', year: 1999 },
        { title: 'The Dark Knight Rises', year: 2012 },
        { title: 'Princess Mononoke', year: 1997 },
        { title: 'Aliens', year: 1986 },
        { title: 'Oldboy', year: 2003 },
        { title: 'Once Upon a Time in America', year: 1984 },
        { title: 'Witness for the Prosecution', year: 1957 },
        { title: 'Das Boot', year: 1981 },
        { title: 'Citizen Kane', year: 1941 },
        { title: 'North by Northwest', year: 1959 },
        { title: 'Vertigo', year: 1958 },
        {
            title: 'Star Wars: Episode VI - Return of the Jedi',
            year: 1983,
        },
        { title: 'Reservoir Dogs', year: 1992 },
        { title: 'Braveheart', year: 1995 },
        { title: 'M', year: 1931 },
        { title: 'Requiem for a Dream', year: 2000 },
        { title: 'Amélie', year: 2001 },
        { title: 'A Clockwork Orange', year: 1971 },
        { title: 'Like Stars on Earth', year: 2007 },
        { title: 'Taxi Driver', year: 1976 },
        { title: 'Lawrence of Arabia', year: 1962 },
        { title: 'Double Indemnity', year: 1944 },
        {
            title: 'Eternal Sunshine of the Spotless Mind',
            year: 2004,
        },
        { title: 'Amadeus', year: 1984 },
        { title: 'To Kill a Mockingbird', year: 1962 },
        { title: 'Toy Story 3', year: 2010 },
        { title: 'Logan', year: 2017 },
        { title: 'Full Metal Jacket', year: 1987 },
        { title: 'Dangal', year: 2016 },
        { title: 'The Sting', year: 1973 },
        { title: '2001: A Space Odyssey', year: 1968 },
        { title: "Singin' in the Rain", year: 1952 },
        { title: 'Toy Story', year: 1995 },
        { title: 'Bicycle Thieves', year: 1948 },
        { title: 'The Kid', year: 1921 },
        { title: 'Inglourious Basterds', year: 2009 },
        { title: 'Snatch', year: 2000 },
        { title: '3 Idiots', year: 2009 },
        { title: 'Monty Python and the Holy Grail', year: 1975 },
    ];

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
            values.questions === '' ||
            values.mediaContext === '' ||
            values.hints === '' ||
            values.idealAnswer === '' &&
            values.sk === ""
        ) {
            // setDesign({ display: 'block' })
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
            values.questions === '' ||
            values.mediaContext === '' ||
            values.hints === '' ||
            values.idealAnswer === ''
            // skill == ""
        ) {
            message.error('Please fill the form completely');
            // setDesign({ display: 'block' })
        }
        // else if (skill == "") {
        //     setDesign({ display: 'block' })
        // }
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
                                            <TextField
                                                fullWidth
                                                size='small'
                                                label="Certificate Name"
                                                required
                                                type='text'
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
                        <Card component={Stack} p={3} mt={3} spacing={2} elevation={3}>
                            <CardContent style={style}>
                                <Typography variant="h4">Add Questions</Typography>
                                <Stack spacing={2} mt={3} direction={{ xs: 'row', sm: 'row', md: "row" }}>
                                    <Stack mb={1} sx={{ width: '100%' }}>
                                        <InputLabel sx={{ fontWeight: 'bold', fontFamily: "Public Sans,sans-serif", color: '#1976d2' }}>Question</InputLabel>
                                    </Stack>
                                    <Stack mb={1} sx={{ width: '100%' }}>
                                        <InputLabel sx={{ fontWeight: 'bold', fontFamily: "Public Sans,sans-serif", color: '#1976d2' }}>Media Context</InputLabel>
                                    </Stack>
                                    <Stack mb={1} sx={{ width: '100%' }}>
                                        <InputLabel sx={{ fontWeight: 'bold', fontFamily: "Public Sans,sans-serif", color: '#1976d2' }}>Hints/Description</InputLabel>
                                    </Stack>
                                    <Stack mb={1} sx={{ width: '100%' }}>
                                        <InputLabel sx={{ fontWeight: 'bold', fontFamily: "Public Sans,sans-serif", color: '#1976d2' }}>Ideal Answer</InputLabel>
                                    </Stack>
                                </Stack>
                                {[...Array(noOfRows)].map((index) => {
                                    return (
                                        <Stack key={index} spacing={2} mt={1} direction={{ xs: 'row', sm: 'row', md: "row" }}>
                                            <Stack mb={1} sx={{ width: '100%' }}>
                                                <TextField
                                                    error={`${ques}`}
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
                                                <TextField
                                                    multiline
                                                    fullWidth
                                                    size='small'
                                                    maxRows={3}
                                                    minRows={3}
                                                    placeholder="Paste your media link here"
                                                    {...getFieldProps('mediaContext')}
                                                    error={Boolean(touched.mediaContext && errors.mediaContext)}
                                                    helperText={touched.mediaContext && errors.mediaContext}
                                                />
                                            </Stack>
                                            <Stack mb={1} sx={{ width: '100%' }}>
                                                <TextField
                                                    multiline
                                                    fullWidth
                                                    size='small'
                                                    maxRows={3}
                                                    minRows={3}
                                                    placeholder="Add Hints/Description"
                                                    {...getFieldProps('hints')}
                                                    error={Boolean(touched.hints && errors.hints)}
                                                    helperText={touched.hints && errors.hints}
                                                />
                                            </Stack>
                                            <Stack mb={1} sx={{ width: '100%' }}>
                                                <TextField
                                                    multiline
                                                    fullWidth
                                                    size='small'
                                                    maxRows={3}
                                                    minRows={3}
                                                    placeholder="Add Ideal Answer"
                                                    {...getFieldProps('idealAnswer')}
                                                    error={Boolean(touched.idealAnswer && errors.idealAnswer)}
                                                    helperText={touched.idealAnswer && errors.idealAnswer}
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


                        {/*************** Add Skills ***************/}
                        <Card component={Stack} p={3} mt={3} spacing={2} elevation={3}>
                            <CardContent>
                                <Typography mb={3} variant="h4">Add Skills</Typography>

                                {/* <Box mb={2} sx={design}>
                                    <Alert severity="error">Select Skills!, This is required</Alert>
                                </Box> */}
                                <Stack sx={{ width: '100%' }}>
                                    {/* <FormControl> */}
                                    {/* <InputLabel id="demo-multiple-chip-label">Skills *</InputLabel> */}
                                    <Autocomplete
                                        multiple
                                        limitTags={2}
                                        id="multiple-limit-tags"
                                        options={top100Films}
                                        getOptionLabel={(option) => option.title}
                                        // defaultValue={[top100Films[13], top100Films[12], top100Films[11]]}
                                        renderInput={(params) => (
                                            <TextField label="Skills *"
                                                {...params}
                                                // {...getFieldProps('skill')}
                                                error={Boolean(touched.sk && errors.sk)}
                                                helperText={touched.sk && errors.sk} />
                                        )}
                                    // sx={{ width: '500px' }}
                                    />
                                    {/* </FormControl> */}
                                </Stack>
                            </CardContent>
                        </Card>

                        <Box mt={3} display="flex" justifyContent="center" sx={{ gap: "0.5rem" }}>
                            <Button
                                disabled={errors.companyName || errors.interactionTitle || errors.testId || errors.track || errors.interactionMode
                                    || errors.accessCode || errors.expiryDate || errors.emailOne || errors.timer || errors.description
                                    || errors.generalFeedback || errors.questions || errors.mediaContext || errors.hints
                                    || errors.idealAnswer ? true : false
                                }
                                onClick={handleSubmitIb}
                                variant='contained'
                                type='submit'
                            >
                                Submit
                            </Button>
                            <Button
                                disabled={errors.companyName || errors.interactionTitle || errors.testId || errors.track || errors.interactionMode
                                    || errors.accessCode || errors.expiryDate || errors.emailOne || errors.timer || errors.description
                                    || errors.generalFeedback || errors.questions || errors.mediaContext || errors.hints
                                    || errors.idealAnswer ? true : false
                                }
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