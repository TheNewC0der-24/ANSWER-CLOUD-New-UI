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
    Typography,
    Card,
    CardContent,
} from '@mui/material';

import { useTheme } from '@mui/material/styles';

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
    const [personName, setPersonName] = useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <>
            <FormikProvider value={formik}>
                <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
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
                </Form>
            </FormikProvider>
        </>
    )
}

export default Skills;