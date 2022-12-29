import React, { useState } from 'react';

import {
    Container,
    Stack,
    Box,
    Card,
    CardContent,
    ListItem,
    ListItemText,
    ListItemButton,
    Dialog,
    DialogTitle,
    DialogContent,
    // DialogContentText,
    DialogActions,
    Divider,
    Alert,
    Typography,
    TextField,
    Button
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Start = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        // Initial Data
        teamName: "",
        name: "",
        email: "",
        contact: "",
        access: "",
    });

    const [show, setShow] = useState(false);
    const [emptyFields, setEmptyFields] = useState([]);
    const [error, setError] = useState("");
    const [showError, setShowError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const regEx = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/g;

        if (data?.teamName?.length < 5) {
            //team name
            setError("Team Name must be at least 5 characters long!");
            setShowError(true);
            setEmptyFields([...emptyFields, "teamName"]);
        } else if (data?.name?.length < 5) {
            //name
            setError("Participant name must be at least 5 characters long!");
            setShowError(true);
            setEmptyFields([...emptyFields, "name"]);
        } else if (data?.email?.length <= 0) {
            //email
            setEmptyFields((emptyFields) => [...emptyFields, "email"]);
            setError("Please enter E-mail!");
            setShowError(true);
        } else if (!regEx.test(data?.email)) {
            setEmptyFields((emptyFields) => [...emptyFields, "email"]);
            setError("Not a valid Email");
            setShowError(true);
        } else if (data?.contact?.length !== 10) {
            // contact
            setEmptyFields((emptyFields) => [...emptyFields, "contact"]);
            setError("Contact number must be exactly 10 digits long!");
            setShowError(true);
        } else if (data?.access?.length <= 0) {
            //access code
            setError("Please enter 6 digit Access Code!");
            setShowError(true);
            setEmptyFields((emptyFields) => [...emptyFields, "access"]);
        } else {
            setError("");
            setShowError(false);
            setShow(true);
        }
    };

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleNext = () => {
        navigate('/form/video-question')
    };

    const systemInstructionOptions = [
        {
            value: "1. Please make sure you are in center of camera.",
        },
        {
            value: "2. Make sure you have good lighting.",
        },
        {
            value: "3. Use professional dress while recording.",
        },
        {
            value: "4. Not ready for video yet? Toggle video off to record responses as audio.",
        },
        {
            value: "5. You will have a preview of video before you finalize.",
        },
        {
            value: "6. Limit your answers to two minutes, timer will guide you.",
        },
        {
            value: "7. And lastly smile more, smile often. Good Luck!",
        },
    ];

    return (
        <>
            <Container maxWidth="xl" sx={{ marginTop: "1rem" }}>
                <Card component={Stack} p={2} spacing={2} elevation={3} sx={{ backgroundColor: "#F7F8F9" }}>
                    <Box p={2} sx={{ backgroundColor: '#1976d2', display: 'flex', justifyContent: 'center' }}>
                        <Typography variant="h4" sx={{ color: 'white' }}>Interaction Title</Typography>
                    </Box>
                    <CardContent>
                        <Box mb={3} p={2} sx={{ backgroundColor: "#fff", border: "2px solid #1976d2" }}>
                            <Typography mb={2} variant="h5">Description</Typography>
                            <Typography variant="body1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, quidem vero assumenda neque quibusdam sint ipsa voluptate voluptatum enim pariatur. Vel hic tempora omnis voluptas voluptatum, dolore enim fugit illo, ex earum in sapiente facilis?</Typography>
                        </Box>

                        {showError && (
                            <Alert severity="error" mb={2}>{error}</Alert>
                        )}
                        <Stack mb={2} mt={3}>
                            <TextField
                                fullWidth
                                size='small'
                                label="Team Name"
                                name="teamName"
                                required
                                type='text'
                                onChange={(e) => setData({ ...data, teamName: e.target.value })}
                            />
                        </Stack>

                        <Stack spacing={2} mb={2} mt={3} direction={{ xs: 'column', sm: 'row', md: "row" }}>
                            <Stack sx={{ width: '100%' }}>
                                <TextField
                                    fullWidth
                                    size='small'
                                    label="Participant Name"
                                    name="name"
                                    required
                                    type='text'
                                    onChange={(e) => setData({ ...data, name: e.target.value })}
                                />
                            </Stack>
                            <Stack sx={{ width: '100%' }}>
                                <TextField
                                    fullWidth
                                    size='small'
                                    label="Email"
                                    name="email"
                                    required
                                    type='text'
                                    onChange={(e) => setData({ ...data, email: e.target.value })}
                                />
                            </Stack>
                            <Stack sx={{ width: '100%' }}>
                                <TextField
                                    fullWidth
                                    size='small'
                                    label="Phone Number"
                                    name="contact"
                                    required
                                    type='number'
                                    onChange={(e) => setData({ ...data, contact: e.target.value })}
                                />
                            </Stack>
                        </Stack>
                        <Stack mb={2}>
                            <TextField
                                fullWidth
                                size='small'
                                label="Access code"
                                name="access"
                                required
                                type='number'
                                onChange={(e) => setData({ ...data, access: e.target.value })}
                            />
                        </Stack>

                        <Button variant="contained" onClick={handleSubmit}>Validate</Button>

                        <Box mt={4}>
                            <Divider />
                        </Box>

                        {show && (
                            <Card component={Stack} mt={2} spacing={2} elevation={3}>
                                <Box p={2} sx={{ backgroundColor: '#1976d2' }}>
                                    <Typography variant="h5" mb={2} sx={{ color: 'white' }}>System Instruction </Typography>

                                    <Button
                                        variant='contained'
                                        color='warning'
                                        onClick={() => navigate('/form/welcome')}
                                    >
                                        Check System
                                    </Button>
                                </Box>
                                <CardContent>
                                    {systemInstructionOptions.map((item) => (
                                        <ListItem key={item.value} component="div" disablePadding>
                                            <ListItemButton>
                                                <ListItemText primary={item.value} />
                                            </ListItemButton>
                                        </ListItem>
                                    ))}
                                    <Box mt={4}>
                                        <Button fullWidth variant="contained" onClick={handleClickOpen}>Start Test</Button>
                                    </Box>
                                </CardContent>
                            </Card>
                        )}
                        {show && (
                            <>
                                <Dialog
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="alert-dialog-title"
                                    aria-describedby="alert-dialog-description"
                                >
                                    <DialogTitle id="alert-dialog-title">
                                        Are you sure you want to start?
                                    </DialogTitle>
                                    <DialogContent>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button variant='outlined' onClick={handleClose}>No</Button>
                                        <Button variant='contained' onClick={handleNext}>
                                            Yes
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                            </>
                        )}
                    </CardContent>
                </Card>
            </Container>
        </>
    )
}

export default Start;