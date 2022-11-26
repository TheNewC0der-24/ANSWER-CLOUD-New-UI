import React, { useState } from 'react';
// import styles from './ExternalBot.module.css';

import {
    Stack,
    Paper,
    Box,
    Alert,
    Typography,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    FormControlLabel,
    FormLabel,
    RadioGroup,
    Radio,
    TextareaAutosize,
    Divider
} from '@mui/material';

import loginImg from '../../assets/Images/login.svg';

import { useFormik, FormikProvider, Form } from 'formik';
import * as Yup from 'yup';

const ExternalBot = () => {
    // const navigate = useNavigate();

    const externalbotSchema = Yup.object().shape({
        phonenumberlist: Yup.string().required('It must be required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
    });

    const formik = useFormik({
        initialValues: {
            phonenumberlist: '',
            email: '',
        },
        validationSchema: externalbotSchema,
        onSubmit: async (values, { setErrors, resetForm }) => {
            try {
                resetForm();
            } catch (error) {
                setErrors({ afterSubmit: error.message });
                resetForm();
            }
        }
    });

    const [whocaninitiate, setWhocaninitiate] = useState('');

    const handleChange = (event) => {
        setWhocaninitiate(event.target.value);
    };


    const { errors, touched, values, handleSubmit, getFieldProps } = formik;

    return (
        <>
            <FormikProvider value={formik}>
                <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                    <Box mb={3}>
                        <Typography variant='h4'>
                            External Bot
                        </Typography>
                        <Divider />
                    </Box>
                    <Paper component={Stack} p={3} spacing={2} elevation={10} >
                        {errors.afterSubmit && <Alert severity="error">{errors.afterSubmit}</Alert>}

                        <Stack spacing={1} direction={{ xs: 'column', sm: 'row', md: "row" }}>
                            <Stack sx={{ width: '100%' }}>
                                <Typography variant='subtitle1' sx={{ fontWeight: 'bold', fontFamily: "Public Sans,sans-serif", color: '#971b8b' }}>Who can Initiate</Typography>
                                <FormControl fullWidth size='small'>
                                    <InputLabel id="demo-simple-select-label">WhoCanInitiate</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={whocaninitiate}
                                        label="WhoCanInitiate"
                                        onChange={handleChange}
                                    // {...getFieldProps('whocaninitiate')}
                                    // error={Boolean(touched.whocaninitiate && errors.whocaninitiate)}
                                    // helperText={touched.whocaninitiate && errors.whocaninitiate}
                                    >
                                        <MenuItem value="Sales">Bot</MenuItem>
                                        <MenuItem value="Service">User</MenuItem>
                                    </Select>
                                </FormControl>
                            </Stack>
                            <Stack sx={{ width: '100%' }}>
                                <Typography variant='subtitle1' sx={{ fontWeight: 'bold', fontFamily: "Public Sans,sans-serif", color: '#971b8b' }}>Phone Number List</Typography>
                                <TextField
                                    fullWidth
                                    size='small'
                                    required
                                    type='file'
                                    {...getFieldProps('phonenumberlist')}
                                    error={Boolean(touched.phonenumberlist && errors.phonenumberlist)}
                                    helperText={touched.phonenumberlist && errors.phonenumberlist}
                                />
                            </Stack>
                        </Stack>
                        <Stack spacing={2} direction={{ xs: 'column', sm: 'row', md: "row" }}>
                            <Stack sx={{ width: '100%' }}>
                                <FormControl>
                                    <FormLabel id="demo-row-radio-buttons-group-label" variant='subtitle1' sx={{ fontWeight: 'bold', fontFamily: "Public Sans,sans-serif", color: '#971b8b' }}>Collect Email</FormLabel>
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
                            <Stack sx={{ width: '100%' }}>
                                <FormControl>
                                    <FormLabel id="demo-row-radio-buttons-group-label" variant='subtitle1' sx={{ fontWeight: 'bold', fontFamily: "Public Sans,sans-serif", color: '#971b8b' }}>Collect Resume</FormLabel>
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
                            <Stack sx={{ width: '100%' }}>
                                <FormControl>
                                    <FormLabel id="demo-row-radio-buttons-group-label" variant='subtitle1' sx={{ fontWeight: 'bold', fontFamily: "Public Sans,sans-serif", color: '#971b8b' }}>Candidate Feedback Message</FormLabel>
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
                                <FormControl>
                                    <FormLabel id="demo-row-radio-buttons-group-label" variant='subtitle1' sx={{ fontWeight: 'bold', fontFamily: "Public Sans,sans-serif", color: '#971b8b' }}>Channel</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        defaultValue="Channel"
                                        name="row-radio-buttons-group"
                                    >
                                        <FormControlLabel value="Channel" control={<Radio />} label="Channel" />
                                        <FormControlLabel value="Telegram" control={<Radio />} label="Telegram" />
                                        <FormControlLabel value="Whatsapp" control={<Radio />} label="Whatsapp" />
                                        <FormControlLabel value="Slack" control={<Radio />} label="Slack" />
                                        <FormControlLabel value="Form" control={<Radio />} label="Form" />
                                    </RadioGroup>
                                </FormControl>
                            </Stack>
                            <Stack sx={{ width: '100%' }}>
                                <FormControl>
                                    <FormLabel id="demo-row-radio-buttons-group-label" variant='subtitle1' sx={{ fontWeight: 'bold', fontFamily: "Public Sans,sans-serif", color: '#971b8b' }}>Collect Candidate ID</FormLabel>
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
                    </Paper>

                    <Stack direction='row' mt={3} justifyContent={{ xs: 'center', sm: 'center', md: 'space-between' }} alignItems='center'>
                        <Stack display={{ xs: 'none', sm: 'none', md: "block" }} sx={{ width: { sm: '300px', md: '400px', lg: '600px' }, height: { sm: '300px', md: '400px', lg: '600px' } }}>
                            <img src={loginImg} alt="login" style={{ width: '100%', height: '100%' }} />
                        </Stack>
                        <Paper component={Stack} p={4} spacing={2.5} elevation={10} sx={{ width: { xs: '22rem', sm: '25rem', md: '30rem' } }}>
                            <Stack alignItems='center' spacing={1}>
                                <Typography variant='h4' sx={{ fontWeight: 'bold', fontFamily: "Public Sans,sans-serif", color: '#971b8b', textAlign: 'center' }}>Interaction Notification</Typography>
                            </Stack>
                            <Stack direction='row'>
                                <TextField
                                    fullWidth
                                    label="Report sent to Extra Email"
                                    required
                                    type='email'
                                    {...getFieldProps('email')}
                                    error={Boolean(touched.email && errors.email)}
                                    helperText={touched.email && errors.email}
                                />
                            </Stack>
                            <Stack direction='row'>
                                <FormControl fullWidth size='small'>
                                    <InputLabel id="demo-simple-select-label">Report sent to User</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={whocaninitiate}
                                        label="WhoCanInitiate"
                                        onChange={handleChange}
                                    // {...getFieldProps('whocaninitiate')}
                                    // error={Boolean(touched.whocaninitiate && errors.whocaninitiate)}
                                    // helperText={touched.whocaninitiate && errors.whocaninitiate}
                                    >
                                        <MenuItem value="Sales">Bot</MenuItem>
                                        <MenuItem value="Service">User</MenuItem>
                                    </Select>
                                </FormControl>
                            </Stack>
                        </Paper>
                    </Stack>


                    <Stack direction='row' mt={3} justifyContent={{ xs: 'center', sm: 'center', md: 'space-between' }} alignItems='center'>
                        <Paper component={Stack} p={4} spacing={2.5} elevation={10} sx={{ width: { xs: '22rem', sm: '25rem', md: '30rem' } }}>
                            <Stack alignItems='center' spacing={1}>
                                <Typography variant='h4' sx={{ fontWeight: 'bold', fontFamily: "Public Sans,sans-serif", color: '#971b8b', textAlign: 'center' }}>Bot Message</Typography>
                            </Stack>
                            <Stack sx={{ width: '100%' }}>
                                <TextareaAutosize
                                    fullWidth
                                    // size='small'
                                    maxRows={1}
                                    aria-label="maximum height"
                                    placeholder="Interaction Welcome Message"
                                    {...getFieldProps('generalfeedback')}
                                    error={Boolean(touched.generalfeedback && errors.generalfeedback)}
                                    helperText={touched.generalfeedback && errors.generalfeedback}
                                />
                            </Stack>
                            <Stack sx={{ width: '100%' }}>
                                <TextareaAutosize
                                    fullWidth
                                    // size='small'
                                    maxRows={1}
                                    aria-label="maximum height"
                                    placeholder="Interaction Instruction Message"
                                    {...getFieldProps('generalfeedback')}
                                    error={Boolean(touched.generalfeedback && errors.generalfeedback)}
                                    helperText={touched.generalfeedback && errors.generalfeedback}
                                />
                            </Stack>
                            <Stack sx={{ width: '100%' }}>
                                <TextareaAutosize
                                    fullWidth
                                    // size='small'
                                    maxRows={1}
                                    aria-label="maximum height"
                                    placeholder="Interaction Completion Message"
                                    {...getFieldProps('generalfeedback')}
                                    error={Boolean(touched.generalfeedback && errors.generalfeedback)}
                                    helperText={touched.generalfeedback && errors.generalfeedback}
                                />
                            </Stack>
                            <Stack sx={{ width: '100%' }}>
                                <TextareaAutosize
                                    fullWidth
                                    // size='small'
                                    maxRows={1}
                                    aria-label="maximum height"
                                    placeholder="Bot Message"
                                    {...getFieldProps('generalfeedback')}
                                    error={Boolean(touched.generalfeedback && errors.generalfeedback)}
                                    helperText={touched.generalfeedback && errors.generalfeedback}
                                />
                            </Stack>
                        </Paper>
                        <Stack display={{ xs: 'none', sm: 'none', md: "block" }} sx={{ width: { sm: '300px', md: '400px', lg: '600px' }, height: { sm: '300px', md: '400px', lg: '600px' } }}>
                            <img src={loginImg} alt="login" style={{ width: '100%', height: '100%' }} />
                        </Stack>
                    </Stack>
                </Form>
            </FormikProvider>
        </>
    )
}

export default ExternalBot;