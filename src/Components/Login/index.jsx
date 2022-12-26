import React, { useState } from 'react';
import styles from './Login.module.css';

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
import logo from '../../assets/Images/coachCloud.svg';

// Validation
import { useFormik, FormikProvider, Form } from 'formik';
import * as Yup from 'yup';

// Icons
import { Icon } from '@iconify/react';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';

const Login = () => {

    const navigate = useNavigate();

    // const { login } = useAuth();

    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const LoginSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().required('Password is required')
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
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
                <Stack direction='row' justifyContent='space-evenly' className={styles.stack} alignItems='center'>

                    <Stack display={{ xs: 'none', sm: 'none', md: "block" }} sx={{ width: { sm: '300px', md: '400px', lg: '600px' }, height: { sm: '300px', md: '400px', lg: '600px' } }}>
                        <img src={loginImg} alt="login" style={{ width: '100%', height: '100%' }} />
                    </Stack>


                    <Paper component={Stack} p={4} spacing={2.5} elevation={10} sx={{ width: { xs: '22rem', sm: '25rem', md: '30rem' } }}>
                        {/*************************** Loading *********************/}
                        <Stack direction='row' justifyContent='center' >
                            {loading &&
                                <Box sx={{ width: '100%' }}>
                                    <LinearProgress />
                                </Box>
                            }
                        </Stack>
                        {/***************************** Logo *****************************/}
                        <Stack alignItems='center' spacing={1}>
                            <img src={logo} alt="coach-cloud" style={{ width: '50%' }} />
                            <Typography variant='h4' sx={{ fontWeight: 'bold', fontFamily: "Public Sans,sans-serif", color: '#971b8b' }}>Log In </Typography>
                        </Stack>

                        {/***************************** Alert for Error  *****************************/}

                        {errors.afterSubmit && <Alert severity="error">{errors.afterSubmit}</Alert>}

                        {/***************************** Email  *****************************/}
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
                                label='Password'
                                required
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

                        <Stack pt={2} direction='row' justifyContent='space-between' alignItems='center'>
                            <FormControlLabel
                                {...getFieldProps('remember')}
                                checked={values.remember}
                                control={
                                    <Checkbox {...getFieldProps('remember')} checked={values.remember} />
                                }
                                label='Remember me'
                            />
                            <Typography variant='subtitle2'>
                                <Link to='/forget-password' underline="hover">
                                    Forget Password
                                </Link>
                            </Typography>
                        </Stack>

                        <Stack direction='row' pb={3} pt={2}>
                            <Button
                                variant='contained'
                                type='submit'
                                fullWidth
                                sx={{ height: '2.5rem' }}
                                disabled={errors.email || errors.password ? true : false}
                            >
                                Log In
                            </Button>
                        </Stack>
                        <Typography variant='subtitle1' sx={{ textAlign: 'center' }}>Don't have an account? <Link to="/register">Sign In</Link></Typography>
                    </Paper>
                </Stack>
            </Form >
        </FormikProvider >
    )
}

export default Login;