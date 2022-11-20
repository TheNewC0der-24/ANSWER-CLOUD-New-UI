import React, { useState } from 'react';
// import styles from './Login.module.css';

import {
    Stack,
    Paper,
    IconButton,
    Box,
    Alert,
    Typography,
    TextField,
    LinearProgress,
    InputAdornment,
    Checkbox,
    FormControlLabel,
    Button,
} from '@mui/material';

// Routing
import { useNavigate, Link } from 'react-router-dom';

// Auth
// import useAuth from '../../Hooks/useAuth';

// Components
import LoadingScreen from '../LoadingScreen';

// Images
import loginImg from '../../assets/Images/login.svg';
import logo from '../../assets/Images/brand.png';

// Validation
import { useFormik, FormikProvider, Form } from 'formik';
import * as Yup from 'yup';

// Icons
import { Icon } from '@iconify/react';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';

const SignUp = () => {

    const navigate = useNavigate();

    // const { login } = useAuth();

    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const LoginSchema = Yup.object().shape({
        firstname: Yup.string().min(2).required('Name must be at least 2 characters'),
        lastname: Yup.string().min(2).required('Name must be at least 2 characters'),
        username: Yup.string().min(5).required('Name must be at least 5 characters'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().required('Password is required'),
        confirmpassword: Yup.string().required('Password is required'),
        invitationcode: Yup.string().required('Invitation code is required'),
    });

    const formik = useFormik({
        initialValues: {
            firstname:'',
            lastname:'',
            username:'',
            email: '',
            password: '',
            confirmpassword: '',
            invitationcode:'',
        },
        validationSchema: LoginSchema,
        onSubmit: async (values, { setErrors, resetForm }) => {
            try {
                setLoading(true);
                // const res = await login(values);
                setLoading(false);
                navigate('/dashboard');
                resetForm();
            } catch (error) {
                setErrors({ afterSubmit: error.message });
                resetForm();
            }
        }
    });

    const handleShowPassword = () => {
        setShowPassword((show) => !show);
    };

    const { errors, touched, values, handleSubmit, getFieldProps } = formik;

    if (loading) {
        setLoading(true);
        return <LoadingScreen />;
    }

    return (
        <FormikProvider value={formik}>
            <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Stack direction='row' justifyContent='center' alignItems='center' my={5}>
                    <Paper elevation={10} sx={{ display: 'flex', flexDirection: 'row', alignItems:'center', width: { sm: '100%', md: '90%', lg: '90%' }}}>
                        <Stack display={{ xs: 'none', sm: 'none', md: "block" }} sx={{ width: { sm: '300px', md: '40%', lg: '40%' }, height: { sm: '300px', md: '400px', lg: '600px' } }}>
                            <img src={loginImg} alt="login" style={{ width: '100%', height: '100%' }} />
                        </Stack>
                        <Stack component={Stack} p={4} spacing={2.5} elevation={10} sx={{ width: { xs: '22rem', sm: '100%', md: '60%' } }}>
                            {/*************************** Loading *********************/}
                            <Stack direction='row' justifyContent='center' >
                                {loading &&
                                    <Box sx={{ width: '100%' }}>
                                        <LinearProgress />
                                    </Box>
                                }
                            </Stack>
                            {/***************************** Lock Icon *****************************/}
                            <Stack alignItems='center' spacing={1}>
                                <img src={logo} alt="aCLOUD" style={{ width: '50%' }} />
                                <Typography variant='h4' sx={{ fontWeight: 'bold', fontFamily: "Public Sans,sans-serif", color: '#971b8b' }}>Sign Up</Typography>
                            </Stack>

                            {/***************************** Alert for Error  *****************************/}

                            {errors.afterSubmit && <Alert severity="error">{errors.afterSubmit}</Alert>}

                            {/***************************** Email  *****************************/}
                            <Stack direction={{ xs: 'column', sm: 'row', md: "row" }} justifyContent='space-between'>
                                <TextField
                                    fullWidth
                                    label="First Name"
                                    required
                                    type='text'
                                    sx={{ marginBottom: { xs: '20px', sm: '0', md:'0'} }}
                                    {...getFieldProps('firstname')}
                                    error={Boolean(touched.firstname && errors.firstname)}
                                    helperText={touched.firstname && errors.firstname}
                                />
                                <TextField
                                    fullWidth
                                    label="Last Name"
                                    required
                                    type='text'
                                    {...getFieldProps('lastname')}
                                    error={Boolean(touched.lastname && errors.lastname)}
                                    helperText={touched.lastname && errors.lastname}
                                />
                            </Stack>
                            <Stack direction='row'>
                                <TextField
                                    fullWidth
                                    label="User Name"
                                    required
                                    type='email'
                                    {...getFieldProps('username')}
                                    error={Boolean(touched.username && errors.username)}
                                    helperText={touched.username && errors.username}
                                />
                            </Stack>
                            <Stack direction='row'>
                                <TextField
                                    fullWidth
                                    label="Email"
                                    required
                                    type='email'
                                    {...getFieldProps('email')}
                                    error={Boolean(touched.email && errors.email)}
                                    helperText={touched.email && errors.email}
                                />
                            </Stack>

                            <Stack direction='row'>
                                <TextField
                                    fullWidth
                                    type={showPassword ? 'text' : 'password'}
                                    label='Password *'
                                    {...getFieldProps('password')}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position='end'>
                                                <IconButton onClick={handleShowPassword} edge="end">
                                                    <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
                                    error={Boolean(touched.password && errors.password)}
                                    helperText={touched.password && errors.password}
                                />
                            </Stack>
                            <Stack direction='row'>
                                <TextField
                                    fullWidth
                                    type={showPassword ? 'text' : 'password'}
                                    label='ConfirmPassword *'
                                    {...getFieldProps('confirmpassword')}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position='end'>
                                                <IconButton onClick={handleShowPassword} edge="end">
                                                    <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
                                    error={Boolean(touched.confirmpassword && errors.confirmpassword)}
                                    helperText={touched.confirmpassword && errors.confirmpassword}
                                />
                            </Stack>
                            <Stack direction='row'>
                                <TextField
                                    fullWidth
                                    label="Invitation Code"
                                    required
                                    type='text'
                                    {...getFieldProps('invitationcode')}
                                    error={Boolean(touched.invitationcode && errors.invitationcode)}
                                    helperText={touched.invitationcode && errors.invitationcode}
                                />
                            </Stack>

                            <Stack pt={2} direction='row' justifyContent='space-between' alignItems='center'>
                                <FormControlLabel
                                    {...getFieldProps('remember')}
                                    checked={values.remember}
                                    control={
                                        <Checkbox {...getFieldProps('remember')} checked={values.remember} />
                                    }
                                    label='Remember me'
                                />
                            </Stack>

                            <Stack direction='row' pb={3} pt={2}>
                                <Button
                                    variant='contained'
                                    type='submit'
                                    fullWidth
                                    sx={{ height: '2.5rem' }}
                                    disabled={errors.firstname || errors.lastname || errors.username || errors.email || errors.password || errors.confirmpassword || errors.invitationcode || loading}
                                >
                                    Sign Up
                                </Button>
                            </Stack>
                            <Typography variant='subtitle1' sx={{ textAlign: 'center' }}>Already have an account? <Link to="/login">Login</Link></Typography>
                        </Stack>
                    </Paper>
                </Stack>
            </Form>
        </FormikProvider >
    )
}

export default SignUp;