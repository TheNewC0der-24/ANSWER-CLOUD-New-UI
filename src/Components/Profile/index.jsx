import React, { useState, useEffect } from 'react';

import {
    Stack,
    Paper,
    Box,
    Alert,
    Typography,
    TextField,
    Button,
} from '@mui/material';

// Routing
import { useNavigate } from 'react-router-dom';

// Auth
// import useAuth from '../../Hooks/useAuth';

// Validation
import { useFormik, FormikProvider, Form } from 'formik';
import * as Yup from 'yup';

const Profile = () => {

    const navigate = useNavigate();

    const [selectedImage, setSelectedImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);

    const ProfileSchema = Yup.object().shape({
        firstname: Yup.string().required('First Name is required'),
        lastname: Yup.string().required('Last Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        phonenumber: Yup.string().max(10).required('Invalid Phone Number'),
        companyname: Yup.string().required('Company Number is required'),
        linkedin: Yup.string().required('Linkedin is required'),
        facebook: Yup.string().required('Facebook is required'),
        twitter: Yup.string().required('Twitter is required'),
        instagram: Yup.string().required('Instagram is required')
    });

    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            phonenumber: '',
            companyname: '',
            linkedin: '',
            facebook: '',
            twitter: '',
            instagram: ''
        },
        validationSchema: ProfileSchema,
        onSubmit: async (values, { setErrors, resetForm }) => {
            try {
                navigate('/dashboard');
                resetForm();
            } catch (error) {
                setErrors({ afterSubmit: error.message });
                resetForm();
            }
        }
    });

    useEffect(() => {
        if (selectedImage) {
            setImageUrl(URL.createObjectURL(selectedImage));
        }
    }, [selectedImage]);

    const { errors, touched, values, handleSubmit, getFieldProps } = formik;

    return (
        <FormikProvider value={formik}>
            <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Stack direction='row' justifyContent='space-evenly' alignItems='center'>
                    <Stack spacing={1} direction={{ xs: 'column', sm: 'column', md: "column" }}>
                        <Typography variant='subtitle1' sx={{ textAlign: 'center' }}>Profile</Typography>
                        {/* {imageUrl && selectedImage && (
                        )} */}
                            <Box sx={{ width: 300, height: 300, backgroundColor: 'green' }}>
                                {/* <img
                                    sx={{ width: '100%', height: '100%' }}
                                    src={imageUrl}
                                    alt={selectedImage.name}
                                /> */}
                            </Box>
                        <TextField
                            fullWidth
                            accept="image/*"
                            onChange={(e) => setSelectedImage(e.target.files[0])}
                            size='small'
                            label="First Name"
                            required
                            id="select-image"
                            type='file'
                            {...getFieldProps('firstname')}
                            error={Boolean(touched.firstname && errors.firstname)}
                            helperText={touched.firstname && errors.firstname}
                        />
                        <Button
                            variant='contained'
                            color='success'
                            htmlFor="select-image"
                            fullWidth
                            sx={{ height: '2.5rem' }}
                        >
                            Upload
                        </Button>

                    </Stack>

                    <Paper component={Stack} p={4} spacing={2.5} elevation={10} sx={{ width: { xs: '22rem', sm: '25rem', md: '30rem' } }}>

                        {/***************************** Alert for Error  *****************************/}

                        {errors.afterSubmit && <Alert severity="error">{errors.afterSubmit}</Alert>}

                        {/***************************** Email  *****************************/}
                        <Stack spacing={1} direction={{ xs: 'column', sm: 'row', md: "row" }}>
                            <Stack sx={{ width: '100%' }}>
                                <TextField
                                    fullWidth
                                    size='small'
                                    label="First Name"
                                    required
                                    type='text'
                                    {...getFieldProps('firstname')}
                                    error={Boolean(touched.firstname && errors.firstname)}
                                    helperText={touched.firstname && errors.firstname}
                                />
                            </Stack>
                            <Stack sx={{ width: '100%' }}>
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
                        </Stack>
                        <Stack direction='row'>
                            <TextField
                                fullWidth
                                size='small'
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
                                size='small'
                                label="Phone Number"
                                required
                                type='number'
                                {...getFieldProps('phonenumber')}
                                error={Boolean(touched.phonenumber && errors.phonenumber)}
                                helperText={touched.phonenumber && errors.phonenumber}
                            />
                        </Stack>
                        <Stack spacing={1} mb={3} direction={{ xs: 'column', sm: 'row', md: "row" }}>
                            <Stack sx={{ width: '100%' }}>
                                <TextField
                                    fullWidth
                                    size='small'
                                    label="Company Name"
                                    required
                                    type='text'
                                    {...getFieldProps('companyname')}
                                    error={Boolean(touched.companyname && errors.companyname)}
                                    helperText={touched.companyname && errors.companyname}
                                />
                            </Stack>
                            {/* <Stack sx={{ width: '100%' }}>
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
                            </Stack> */}
                        </Stack>
                        <Stack spacing={1} mb={3} direction={{ xs: 'column', sm: 'row', md: "row" }}>
                            <Stack sx={{ width: '100%' }}>
                                <TextField
                                    fullWidth
                                    size='small'
                                    label="Linkedin"
                                    required
                                    type='text'
                                    {...getFieldProps('linkedin')}
                                    error={Boolean(touched.linkedin && errors.linkedin)}
                                    helperText={touched.linkedin && errors.linkedin}
                                />
                            </Stack>
                            <Stack sx={{ width: '100%' }}>
                                <TextField
                                    fullWidth
                                    size='small'
                                    label="Facebook"
                                    required
                                    type='text'
                                    {...getFieldProps('facebook')}
                                    error={Boolean(touched.facebook && errors.facebook)}
                                    helperText={touched.facebook && errors.facebook}
                                />
                            </Stack>
                        </Stack>
                        <Stack spacing={1} mb={3} direction={{ xs: 'column', sm: 'row', md: "row" }}>
                            <Stack sx={{ width: '100%' }}>
                                <TextField
                                    fullWidth
                                    size='small'
                                    label="Twitter"
                                    required
                                    type='text'
                                    {...getFieldProps('twitter')}
                                    error={Boolean(touched.twitter && errors.twitter)}
                                    helperText={touched.twitter && errors.twitter}
                                />
                            </Stack>
                            <Stack sx={{ width: '100%' }}>
                                <TextField
                                    fullWidth
                                    size='small'
                                    label="Instagram"
                                    required
                                    type='text'
                                    {...getFieldProps('instagram')}
                                    error={Boolean(touched.instagram && errors.instagram)}
                                    helperText={touched.instagram && errors.instagram}
                                />
                            </Stack>
                        </Stack>
                        <Stack direction='row' pb={3} pt={2}>
                            <Button
                                variant='contained'
                                color='success'
                                type='submit'
                                fullWidth
                                sx={{ height: '2.5rem' }}
                            >
                                Submit
                            </Button>
                        </Stack>
                    </Paper>
                </Stack>
            </Form >
        </FormikProvider >
    )
}

export default Profile;


