import React, { useState } from 'react';

import styles from './ExternalBot.module.css'

import {
    Stack,
    Paper,
    Box,
    Alert,
    Typography,
    TextField,
    FormControl,
    MenuItem,
    FormControlLabel,
    Checkbox,
    FormGroup,
    FormLabel,
    RadioGroup,
    Radio,
    Button,
    Card,
    CardContent,
    Grid,
    Chip,
} from '@mui/material';

import { useNavigate } from 'react-router-dom';

// Validation
import { useFormik, FormikProvider, Form } from 'formik';
import * as Yup from 'yup';

const ExternalBot = () => {

    const [reportSent, setReportSent] = useState('');

    const externalBotSchema = Yup.object().shape({
        initiate: Yup.string().required('Select Who can Initiate'),
        phoneNumberList: Yup.string().required('Upload Phone Number List'),
        email: Yup.string().email('Invalid email').required('This field is required'),
        reportSent: Yup.string().required('This field is required'),
        welcomeMsg: Yup.string().required('This field is required'),
        instructionMsg: Yup.string().required('This field is required'),
        completeMsg: Yup.string().required('This field is required'),
        botMsg: Yup.string().required('This field is required'),
    });


    const formik = useFormik({
        initialValues: {
            initiate: '',
            phoneNumberList: '',
            email: '',
            reportSent: '',
            welcomeMsg: '',
            instructionMsg: '',
            completeMsg: '',
            botMsg: ''
        },
        validationSchema: externalBotSchema,
        onSubmit: async (values, { setErrors, resetForm }) => {
            try {
                resetForm();
            } catch (error) {
                setErrors({ afterSubmit: error.message });
                resetForm();
            }
        }
    });

    const { errors, touched, values, handleSubmit, getFieldProps } = formik;

    const [initiate, setInitiate] = useState('');

    const handleChange = (event) => {
        setInitiate(event.target.value);
        setReportSent(event.target.value);
    };

    const whoCanInitiateOptions = [
        { value: "Bot", label: "Bot" },
        { value: "User", label: "User" },
    ];

    const reportSentOptions = [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
    ];

    const navigate = useNavigate();

    const handleSubmitExternalBot = () => {
        if (
            values.initiate === '' ||
            values.phoneNumberList === '' ||
            values.email === '' ||
            values.reportSent === '' ||
            values.welcomeMsg === '' ||
            values.instructionMsg === '' ||
            values.completeMsg === '' ||
            values.botMsg === ''
        ) {
            return null;
        }
        else {
            navigate('/thank-you');
        }
    }

    return (
        <>
            <FormikProvider value={formik}>
                <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                    <Paper component={Stack} p={3}>
                        <Card component={Stack} p={3} spacing={2} elevation={3}>
                            <CardContent>
                                {errors.afterSubmit && <Alert severity="error">{errors.afterSubmit}</Alert>}
                                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                    <div>
                                        <Typography mb={3} variant="h4">External Bot</Typography>
                                    </div>
                                    <div>
                                        <Chip label="Premium" sx={{ bgcolor: "#9c27b0", color: "#fff", fontSize: "18px", fontWeight: "bold" }} />
                                    </div>
                                </Box>
                                <Stack spacing={2} mb={3} direction={{ xs: 'column', sm: 'row', md: "row" }}>
                                    <Stack sx={{ width: '100%' }}>
                                        <Typography variant='subtitle1' sx={{ fontWeight: 'bold', fontFamily: "Public Sans,sans-serif", color: '#1976d2' }}>Who can initiate?</Typography>
                                        <TextField
                                            select
                                            value={initiate}
                                            size='small'
                                            onChange={handleChange}
                                            {...getFieldProps('initiate')}
                                            error={Boolean(touched.initiate && errors.initiate)}
                                            helperText={touched.initiate && errors.initiate}
                                        >
                                            {whoCanInitiateOptions.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                                            ))}
                                        </TextField>
                                    </Stack>
                                    <Stack sx={{ width: '100%' }}>
                                        <Typography variant='subtitle1' sx={{ fontWeight: 'bold', fontFamily: "Public Sans,sans-serif", color: '#1976d2' }}>Phone Number List</Typography>
                                        <TextField
                                            fullWidth
                                            size='small'
                                            required
                                            type='file'
                                            {...getFieldProps('phoneNumberList')}
                                            error={Boolean(touched.phoneNumberList && errors.phoneNumberList)}
                                            helperText={touched.phoneNumberList && errors.phoneNumberList}
                                        />
                                        <Box mt={1} display="flex" justifyContent="start" sx={{ gap: "0.5rem" }}>
                                            <Button
                                                size='small'
                                                variant='outlined'
                                            >
                                                View List
                                            </Button>
                                            <Button
                                                size='small'
                                                variant='contained'
                                            >
                                                Upload
                                            </Button>
                                        </Box>
                                    </Stack>
                                </Stack>
                                <Stack spacing={2} mb={3} direction={{ xs: 'column', sm: 'row', md: "row" }}>
                                    <Stack sx={{ width: '100%' }}>
                                        <FormControl>
                                            <FormLabel id="demo-row-radio-buttons-group-label" variant='subtitle1' sx={{ fontWeight: 'bold', fontFamily: "Public Sans,sans-serif", color: '#1976d2' }}>Collect Email</FormLabel>
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
                                            <FormLabel id="demo-row-radio-buttons-group-label" variant='subtitle1' sx={{ fontWeight: 'bold', fontFamily: "Public Sans,sans-serif", color: '#1976d2' }}>Candidate Feedback Message</FormLabel>
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
                                        <FormLabel id="demo-row-radio-buttons-group-label" variant='subtitle1' sx={{ fontWeight: 'bold', fontFamily: "Public Sans,sans-serif", color: '#1976d2' }}>Channel</FormLabel>
                                        <FormGroup sx={{ display: "flex", flexDirection: "row" }}>
                                            <FormControlLabel disabled control={<Checkbox />} label="Telegram" />
                                            <FormControlLabel disabled control={<Checkbox />} label="Whatsapp" />
                                            <FormControlLabel disabled control={<Checkbox />} label="Slack" />
                                            <FormControlLabel disabled control={<Checkbox defaultChecked />} label="Form" />
                                        </FormGroup>
                                    </Stack>
                                </Stack>
                            </CardContent>
                        </Card>

                        <Grid container spacing={3} mb={3}>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <Card className={styles.fullHeightCard} component={Stack} p={3} mt={3} spacing={2} elevation={3}>
                                    <CardContent>
                                        <Typography variant='h4' mb={3}>Interaction Notification</Typography>
                                        <Stack direction='row' mb={3}>
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
                                                <TextField
                                                    select
                                                    value={reportSent}
                                                    label="Report sent to User"
                                                    required
                                                    onChange={handleChange}
                                                    {...getFieldProps('reportSent')}
                                                    error={Boolean(touched.reportSent && errors.reportSent)}
                                                    helperText={touched.reportSent && errors.reportSent}
                                                >
                                                    {reportSentOptions.map((option) => (
                                                        <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                                                    ))}
                                                </TextField>
                                            </FormControl>
                                        </Stack>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <Card className={styles.fullHeightCard} component={Stack} p={3} mt={3} spacing={2} elevation={3}>
                                    <CardContent>
                                        <Typography variant='h4' mb={3}>Bot Message</Typography>
                                        <Stack sx={{ width: '100%' }} mb={2}>
                                            <TextField
                                                multiline
                                                fullWidth
                                                size='small'
                                                maxRows={1}
                                                placeholder="Interaction Welcome Message"
                                                {...getFieldProps('welcomeMsg')}
                                                error={Boolean(touched.welcomeMsg && errors.welcomeMsg)}
                                                helperText={touched.welcomeMsg && errors.welcomeMsg}
                                            />
                                        </Stack>
                                        <Stack sx={{ width: '100%' }} mb={2}>
                                            <TextField
                                                multiline
                                                fullWidth
                                                size='small'
                                                maxRows={1}
                                                placeholder="Interaction Instruction Message"
                                                {...getFieldProps('instructionMsg')}
                                                error={Boolean(touched.instructionMsg && errors.instructionMsg)}
                                                helperText={touched.instructionMsg && errors.instructionMsg}
                                            />
                                        </Stack>
                                        <Stack sx={{ width: '100%' }} mb={2}>
                                            <TextField
                                                multiline
                                                fullWidth
                                                size='small'
                                                maxRows={1}
                                                placeholder="Interaction Completion Message"
                                                {...getFieldProps('completeMsg')}
                                                error={Boolean(touched.completeMsg && errors.completeMsg)}
                                                helperText={touched.completeMsg && errors.completeMsg}
                                            />
                                        </Stack>
                                        <Stack sx={{ width: '100%' }} mb={2}>
                                            <TextField
                                                multiline
                                                fullWidth
                                                size='small'
                                                maxRows={1}
                                                placeholder="Bot Message"
                                                {...getFieldProps('botMsg')}
                                                error={Boolean(touched.botMsg && errors.botMsg)}
                                                helperText={touched.botMsg && errors.botMsg}
                                            />
                                        </Stack>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                        <Box mt={3} display="flex" justifyContent="center" sx={{ gap: "0.5rem" }}>
                            <Button
                                fullWidth
                                disabled={
                                    errors.initiate ||
                                        errors.phoneNumberList ||
                                        errors.email ||
                                        errors.reportSent ||
                                        errors.welcomeMsg ||
                                        errors.instructionMsg ||
                                        errors.completeMsg ||
                                        errors.botMsg ? true : false
                                }
                                variant='contained'
                                type='submit'
                                onClick={handleSubmitExternalBot}
                            >
                                Submit
                            </Button>
                        </Box>
                    </Paper>
                </Form>
            </FormikProvider>
        </>
    )
}

export default ExternalBot;