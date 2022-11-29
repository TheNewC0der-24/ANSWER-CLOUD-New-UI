import React, { useState, useEffect } from 'react';

import {
    Stack,
    Grid,
    Card,
    CardContent,
    Box,
    Alert,
    Typography,
    TextField,
    MenuItem,
    Button,
} from '@mui/material';

// Routing
import { useNavigate } from 'react-router-dom';

// Image
import defaultAvatar from '../../assets/Images/defaultAvatar.png'

import { countries } from "../../assets/Countries/countries";

// Auth
// import useAuth from '../../Hooks/useAuth';

// Validation
import { useFormik, FormikProvider, Form } from 'formik';
import * as Yup from 'yup';

const Profile = () => {

    const navigate = useNavigate();

    const [selectedImage, setSelectedImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);

    const [edit, setEdit] = useState(false);
    const [country, setCountry] = useState('');

    const ProfileSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
        phoneNumber: Yup.string().required('Phone number is required'),
        companyName: Yup.string().required('Company name is required'),
        country: Yup.string().required('Select your Country'),
        linkedin: Yup.string().required('Linkedin is required'),
        facebook: Yup.string().required('Facebook is required'),
        twitter: Yup.string().required('Twitter is required'),
        instagram: Yup.string().required('Instagram is required')
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            phoneNumber: '',
            companyName: '',
            country: '',
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

    const handleEdit = () => {
        setEdit(true);
    }

    const handleChange = (event) => {
        setCountry(event.target.value)
    }

    return (
        <FormikProvider value={formik}>
            <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Grid container spacing={3} mt={3}>
                    <Grid item xs={12} sm={12} md={12} lg={5}>
                        <Card elevation={3}>
                            <CardContent>
                                <Typography variant='h5' mb={3}>Upload Profile Picture :</Typography>
                                <Stack direction='row' justifyContent='space-evenly' alignItems='center'>
                                    <Stack spacing={1} direction={{ xs: 'column', sm: 'column', md: "column" }}>
                                        <Stack mb={3}>
                                            {
                                                imageUrl && selectedImage ? (
                                                    <Box p={2} sx={{ backgroundColor: '#fafafa', display: "flex", justifyContent: "center" }}>
                                                        <img
                                                            src={imageUrl}
                                                            alt="Profile"
                                                            width='200px'
                                                        />
                                                    </Box>
                                                ) : (
                                                    <Box p={2} sx={{ backgroundColor: '#fafafa', display: "flex", justifyContent: "center" }}>
                                                        <img
                                                            src={defaultAvatar}
                                                            alt="Profile"
                                                            width='200px'
                                                        />
                                                    </Box>
                                                )
                                            }
                                        </Stack>
                                        <TextField
                                            fullWidth
                                            mb={2}
                                            accept="image/*"
                                            onChange={(e) => setSelectedImage(e.target.files[0])}
                                            size='small'
                                            required
                                            id="select-image"
                                            type='file'
                                        />
                                        <Button
                                            fullWidth
                                            variant='contained'
                                            htmlFor="select-image"
                                        >
                                            Upload
                                        </Button>
                                    </Stack>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={7}>
                        <Card component={Stack} p={3} spacing={2.5} elevation={3}>
                            <CardContent>
                                {/***************************** Alert for Error  *****************************/}

                                {errors.afterSubmit && <Alert severity="error">{errors.afterSubmit}</Alert>}
                                <Stack direction='row' mb={3} justifyContent='space-between' sx={{ display: "flex", flexWrap: "wrap" }}>
                                    <Typography variant='h5'>Personal Details :</Typography>
                                    <Box sx={{ textAlign: "end" }} >
                                        <Button onClick={handleEdit} color="warning" variant='contained'>Edit</Button>
                                        <Typography color="error" variant='subtitle2'>*Click Edit to update details</Typography>
                                    </Box>

                                </Stack>

                                <Stack spacing={2} mb={2} direction={{ xs: 'column', sm: 'row', md: "row" }}>
                                    <Stack sx={{ width: '100%' }}>
                                        <TextField
                                            fullWidth
                                            disabled={!edit}
                                            size='small'
                                            label="First Name"
                                            type='text'
                                        />
                                    </Stack>
                                    <Stack sx={{ width: '100%' }}>
                                        <TextField
                                            fullWidth
                                            disabled={!edit}
                                            size='small'
                                            label="Last Name"
                                            type='text'
                                        />
                                    </Stack>
                                </Stack>
                                <Stack spacing={2} mb={2} direction={{ xs: 'column', sm: 'column', md: "column" }}>
                                    <Stack direction='row'>
                                        <TextField
                                            fullWidth
                                            disabled={!edit}
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
                                            disabled={!edit}
                                            size='small'
                                            label="Phone Number"
                                            required
                                            type='number'
                                            {...getFieldProps('phoneNumber')}
                                            error={Boolean(touched.phoneNumber && errors.phoneNumber)}
                                            helperText={touched.phoneNumber && errors.phoneNumber}
                                        />
                                    </Stack>
                                    <Stack spacing={2} mb={2} direction={{ xs: 'column', sm: 'row', md: "row" }}>
                                        <Stack sx={{ width: '100%' }}>
                                            <TextField
                                                fullWidth
                                                disabled={!edit}
                                                size='small'
                                                label="Company Name"
                                                required
                                                type='text'
                                                {...getFieldProps('companyName')}
                                                error={Boolean(touched.companyName && errors.companyName)}
                                                helperText={touched.companyName && errors.companyName}
                                            />
                                        </Stack>
                                        <Stack sx={{ width: '100%' }}>
                                            <TextField
                                                select
                                                value={country}
                                                size='small'
                                                label='Country'
                                                disabled={!edit}
                                                required
                                                onChange={handleChange}
                                                {...getFieldProps('country')}
                                                error={Boolean(touched.country && errors.country)}
                                                helperText={touched.country && errors.country}
                                            >
                                                {countries.map((item) => (
                                                    <MenuItem key={item.code} value={item.name}>{item.name}</MenuItem>
                                                ))
                                                }
                                                {/* {whoCanInitiateOptions.map((option) => (
                                                    <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                                                ))} */}
                                            </TextField>
                                        </Stack>
                                    </Stack>
                                </Stack>
                                <Typography variant='h5' mt={5} mb={2}>Social Links :</Typography>

                                <Stack spacing={2} mb={2} direction={{ xs: 'column', sm: 'row', md: "row" }}>
                                    <Stack sx={{ width: '100%' }}>
                                        <TextField
                                            fullWidth
                                            disabled={!edit}
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
                                            disabled={!edit}
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
                                <Stack spacing={2} mb={2} direction={{ xs: 'column', sm: 'row', md: "row" }}>
                                    <Stack sx={{ width: '100%' }}>
                                        <TextField
                                            fullWidth
                                            disabled={!edit}
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
                                            disabled={!edit}
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
                                        fullWidth
                                        disabled={
                                            errors.email || errors.phoneNumber || errors.companyName || errors.linkedin ||
                                            errors.facebook || errors.twitter || errors.instagram
                                        }
                                        variant='contained'
                                        color='primary'
                                        type='submit'
                                        sx={{ height: '2.5rem' }}
                                    >
                                        Submit
                                    </Button>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Form>
        </FormikProvider>
    )
}

export default Profile;


