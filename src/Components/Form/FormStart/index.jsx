import React, { useState } from 'react';

import {
    Paper,
    Stack,
    Box,
    Card,
    CardContent,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
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
        // inital data
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
        e.preventDefault(); //prevents refresing of page
        console.log("hii");
        const regEx = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/g;

        if (data?.name?.length < 5) {
            //name
            setError("Name must be at least 5 characters long!");
            setShowError(true);
            setEmptyFields([...emptyFields, "name"]);
        } else if (data?.email?.length <= 0) {
            //email
            setEmptyFields((emptyFields) => [...emptyFields, "email"]);
            setError("Please enter email!");
            setShowError(true);
        } else if (!regEx.test(data?.email)) {
            console.log(data?.email);
            setEmptyFields((emptyFields) => [...emptyFields, "email"]);
            setError("Not valid Email");
            setShowError(true);
        } else if (data?.contact?.length !== 10) {
            // contact
            setEmptyFields((emptyFields) => [...emptyFields, "contact"]);
            setError("Contact number must be at exacty 10 digits long!");
            setShowError(true);
        } else if (data?.access?.length <= 0) {
            //acess code
            setError("Please enter Access Code!");
            setShowError(true);
            setEmptyFields((emptyFields) => [...emptyFields, "access"]);
        } else {
            setError("");
            setShowError(false);
            setShow(true);
            console.log(data);
        }
    };

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleNext = () => {
        navigate('/welcomescreen')
    };

    return (
        <>
            <Paper component={Stack} p={3}>
                {/*************** Internal Bot ***************/}
                <Card component={Stack} spacing={2} elevation={3}>
                    <Box p={2} sx={{ backgroundColor: '#000', display: 'flex', justifyContent: 'center' }}>
                        <Typography variant="h4" sx={{ color: 'white' }}>Interaction Title</Typography>
                    </Box>
                    <CardContent p={3}>
                        <Typography variant="h5">Description</Typography>
                        <Typography mb={2} variant="h6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, quidem vero assumenda neque quibusdam sint ipsa voluptate voluptatum enim pariatur. Vel hic tempora omnis voluptas voluptatum, dolore enim fugit illo, ex earum in sapiente facilis?</Typography>
                        <Stack mb={3} sx={{ width: '100%' }}>
                            <TextField
                                fullWidth
                                size='small'
                                label="Name"
                                name="name"
                                required
                                type='text'
                                onChange={(e) => setData({ ...data, name: e.target.value })}
                            />
                        </Stack>
                        <Stack mb={3} sx={{ width: '100%' }}>
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
                        <Stack mb={3} sx={{ width: '100%' }}>
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
                        <Stack mb={3} sx={{ width: '100%' }}>
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
                        {showError && (
                            <Alert severity="error" mb={2}>{error}</Alert>
                        )}
                        <Button variant="contained" my={2} onClick={handleSubmit}>Validate to Start</Button>
                        {show && (
                            <Card component={Stack} my={2} spacing={2} elevation={3}>
                                <Box p={1} align='center' sx={{ backgroundColor: '#000' }}>
                                    <Typography variant="h4" sx={{ color: 'white' }}>System Instruction </Typography>
                                </Box>
                                <Typography variant="h6" align='center'>Please make sure you are in center of camera</Typography>
                                <Divider></Divider>
                                <Typography variant="h6" align='center'>Make sure you have good lighting</Typography>
                                <Divider></Divider>
                                <Typography variant="h6" align='center'>Use professional dress while recording</Typography>
                                <Divider></Divider>
                                <Typography variant="h6" align='center'>Not ready for video yet? Toggle video off to record responses as audio</Typography>
                                <Divider></Divider>
                                <Typography variant="h6" align='center'>You will have a preview of video before you fiilize</Typography>
                                <Divider></Divider>
                                <Typography variant="h6" align='center'>Limit your answers to two minutes, timer will guide you</Typography>
                                <Divider></Divider>
                                <Typography variant="h6" align='center'>And lastly smile more, smile often. Good Luck!</Typography>
                                <Divider></Divider>
                            </Card>
                        )}
                        {show && (
                            <>
                                <Button variant="contained" size='small' onClick={handleClickOpen}>Start Test</Button>
                                <Dialog
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="alert-dialog-title"
                                    aria-describedby="alert-dialog-description"
                                >
                                    <DialogTitle id="alert-dialog-title">
                                        {"Are you sure you want to start the test"}
                                    </DialogTitle>
                                    <DialogContent>
                                        <DialogContentText id="alert-dialog-description">
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt minus in eius soluta earum repudiandae recusandae molestias, corrupti quam beatae ab laudantium architecto, molestiae ipsum vitae, eveniet ullam voluptates autem.
                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={handleNext} autoFocus>
                                            Yes
                                        </Button>
                                        <Button onClick={handleClose}>No</Button>
                                    </DialogActions>
                                </Dialog>
                            </>
                        )}
                    </CardContent>
                </Card>
            </Paper>
        </>
    )
}

export default Start;