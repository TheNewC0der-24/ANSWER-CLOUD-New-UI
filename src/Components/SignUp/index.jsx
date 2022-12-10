import React, { useState } from 'react';
import styles from './SignUp.module.css';

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
    Button,
} from '@mui/material';


// Routing
import { useNavigate, Link } from 'react-router-dom';

// Auth
// import useAuth from '../../Hooks/useAuth';

// Components
import LoadingScreen from '../LoadingScreen';

// Images
import signUpImg from '../../assets/Images/signup.svg';
import logo from '../../assets/Images/answerCloudLogo.svg';

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
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const signupSchema = Yup.object().shape({
        firstname: Yup.string().min(2).required('At least 2 characters'),
        lastname: Yup.string().min(2).required('At least 2 characters'),
        username: Yup.string().min(5).required('At least 5 characters'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().required('Password is required'),
        confirmpassword: Yup.string().required('Confirm Password is required'),
        invitationcode: Yup.string().required('Invitation code is required'),
    });

    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            username: '',
            email: '',
            password: '',
            confirmpassword: '',
            invitationcode: '',
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

    const handleShowPassword = () => {
        setShowPassword((show) => !show);
    };

    const handleShowConfirmPassword = () => {
        setShowConfirmPassword((show) => !show);
    };

    const { errors, touched, values, handleSubmit, getFieldProps } = formik;

    if (loading) {
        setLoading(true);
        return <LoadingScreen />;
    }

    return (
        <FormikProvider value={formik}>
            <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Stack className={styles.stack} direction='row' justifyContent='space-evenly' alignItems='center'>
                    <Stack display={{ xs: 'none', sm: 'none', md: "block" }}>
                        <img src={signUpImg} alt="login" width={300} />
                    </Stack>

                    <Paper component={Stack} p={3} spacing={2} elevation={10} sx={{ width: { xs: '22rem', sm: '25rem', md: '30rem' } }}>
                        {/********** Loading **********/}
                        <Stack direction='row' justifyContent='center' >
                            {loading &&
                                <Box sx={{ width: '100%' }}>
                                    <LinearProgress />
                                </Box>
                            }
                        </Stack>


                        {/********** Logo **********/}
                        <Stack alignItems='center' spacing={1}>
                            <img src={logo} alt="Answer-Cloud" width={150} />
                            <Typography variant='h4' sx={{ fontWeight: 'bold', fontFamily: "Public Sans,sans-serif", color: '#971b8b' }}>Register</Typography>
                        </Stack>

                        {/***************************** Alert for Error  *****************************/}

                        {errors.afterSubmit && <Alert severity="error">{errors.afterSubmit}</Alert>}

                        <Stack spacing={1} direction={{ xs: 'row', sm: 'row', md: "row" }}>
                            <TextField
                                fullWidth
                                size='small'
                                label="First Name"
                                required
                                type='text'
                                sx={{ marginBottom: { xs: '0', sm: '0', md: '0' } }}
                                {...getFieldProps('firstname')}
                                error={Boolean(touched.firstname && errors.firstname)}
                                helperText={touched.firstname && errors.firstname}
                            />
                            <TextField
                                fullWidth
                                size='small'
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
                                size='small'
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
                                size='small'
                                required
                                type='email'
                                {...getFieldProps('email')}
                                error={Boolean(touched.email && errors.email)}
                                helperText={touched.email && errors.email}
                            />
                        </Stack>

                        <Stack spacing={1} direction={{ xs: 'row', sm: 'row', md: "row" }} justifyContent='space-between'>
                            <TextField
                                fullWidth
                                size='small'
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

                            <TextField
                                fullWidth
                                size='small'
                                type={showConfirmPassword ? 'text' : 'password'}
                                label='ConfirmPassword'
                                required
                                {...getFieldProps('confirmpassword')}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position='end'>
                                            <IconButton onClick={handleShowConfirmPassword} edge="end">
                                                <Icon icon={showConfirmPassword ? eyeFill : eyeOffFill} />
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
                                size='small'
                                label="Invitation Code"
                                required
                                type='text'
                                {...getFieldProps('invitationcode')}
                                error={Boolean(touched.invitationcode && errors.invitationcode)}
                                helperText={touched.invitationcode && errors.invitationcode}
                            />
                        </Stack>

                        <Stack direction='row' pb={1} pt={1}>
                            <Button
                                size='small'
                                variant='contained'
                                type='submit'
                                fullWidth
                                sx={{ height: '2rem' }}
                                disabled={errors.firstname || errors.lastname || errors.username || errors.email || errors.password || errors.confirmpassword || errors.invitationcode ? true : false}
                            >
                                Sign Up
                            </Button>
                        </Stack>
                        <Typography variant='subtitle1' sx={{ textAlign: 'center' }}>Already have an account? <Link to="/login">Login</Link></Typography>
                    </Paper>
                </Stack>
            </Form>
        </FormikProvider>
    )
}

export default SignUp;