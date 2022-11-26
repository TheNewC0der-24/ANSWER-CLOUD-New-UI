import React, { useState } from 'react';

import {
    Box,
    OutlinedInput,
    InputLabel,
    MenuItem,
    FormControl,
    Chip,
    Select,
    Stack,
    Typography
} from '@mui/material';

import { useTheme } from '@mui/material/styles';

// Routing
import { useNavigate, Link } from 'react-router-dom';

// Validation
import { useFormik, FormikProvider, Form } from 'formik';
import * as Yup from 'yup';


const Skills = () => {
    const [loading, setLoading] = useState(false);

    const questionSchema = Yup.object().shape({
        // companyname: Yup.string().min(2).required('It must be least 2 characters'),
    });

    const formik = useFormik({
        initialValues: {
            // companyname: '',
        },
        validationSchema: questionSchema,
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
    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const navigate = useNavigate();
    return (
        <>
            <FormikProvider value={formik}>
                <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                    <Stack sx={{ width: '100%' }}>
                        <Typography variant='subtitle1' sx={{ fontWeight: 'bold', fontFamily: "Public Sans,sans-serif", color: '#971b8b' }}>Access Code</Typography>
                        <FormControl>
                            <InputLabel id="demo-multiple-chip-label">Skills</InputLabel>
                            <Select
                                labelId="demo-multiple-chip-label"
                                id="demo-multiple-chip"
                                size="small"
                                multiple
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
                </Form>
            </FormikProvider>
        </>
    )
}

export default Skills;