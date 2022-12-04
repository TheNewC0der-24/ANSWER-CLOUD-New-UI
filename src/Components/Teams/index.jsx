import React, { useState, useEffect } from 'react';
import {
    Box,
    Stack,
    Avatar,
    Typography,
    Divider,
    IconButton,
    TextField,
    Card,
    CardContent,
    CardActions,
    Button,
    FormControlLabel,
    Radio,
    RadioGroup,
} from "@mui/material";

import styles from './Teams.module.css';

// Icons
import CancelIcon from "@mui/icons-material/Cancel";
import GroupIcon from '@mui/icons-material/Group';

import LoadAnimation from '../LoadAnimation/index';

import MaterialTable from "@material-table/core";


const Teams = () => {
    const [noOfRows, setNoOfRows] = useState(1);
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleOpenCard = () => {
        setOpen(true);
    }

    const handleCloseCard = () => {
        setOpen(false);
    }


    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    const columns = [
        { title: "S.No.", field: "sNo", width: "5rem" },
        { title: "Access For", field: "accessFor", width: "17rem" },
        { title: "Status", field: "status", width: "10rem" },
        {
            title: "View Only", width: "12rem",
            render: (row) => (
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel value="No" control={<Radio />} label="No" />
                    <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                </RadioGroup>
            ),
        },
    ];

    const teamData = [
        { sNo: "1", accessFor: "abc@gmail.com", status: "Pending" },
        { sNo: "2", accessFor: "bhavyakhurana002@gmail.com", status: "Approved" },
        { sNo: "3", accessFor: "khuranabhavya24@gmail.com", status: "Approved" },
        { sNo: "4", accessFor: "191b303@juetguna.in", status: "Rejected" },
        { sNo: "5", accessFor: "johndoe123456@gmail.com", status: "Pending" },
    ]

    return (
        <>
            <Box>
                <Box className={styles.header} mb={2}>
                    <Typography sx={{ display: "flex", alignItems: "center" }} variant="h5">
                        <Avatar variant="rounded" sx={{ marginRight: "0.5rem", backgroundColor: "#deebff" }}>
                            <GroupIcon sx={{ color: "#1976d2" }} />
                        </Avatar>
                        Teams
                    </Typography>

                    <Button variant="contained" className={styles.createButton} onClick={handleOpenCard}>Invite User</Button>
                </Box>

                <Divider />

                {
                    open && (
                        <Box mt={5} sx={{ display: "flex", justifyContent: "flex-end" }}>
                            <Card className={styles.card}>
                                <Stack direction="row" justifyContent="flex-end">
                                    <IconButton color="error" onClick={handleCloseCard}>
                                        <CancelIcon />
                                    </IconButton>
                                </Stack>
                                <CardContent className={styles.inviteCard}>
                                    {[...Array(noOfRows)].map((index) => {
                                        return (
                                            <Stack mb={1} key={index}>
                                                <TextField
                                                    fullWidth
                                                    label="Enter email"
                                                    type='email'
                                                    size='small'
                                                />
                                            </Stack>
                                        )
                                    })}

                                </CardContent>
                                <CardActions sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem", backgroundColor: '#f6f6f6' }}>
                                    <Stack direction="row" sx={{ gap: "0.25rem" }}>
                                        <Button sx={{ cursor: 'pointer' }} size='small' variant="contained" color='success' onClick={() => setNoOfRows(noOfRows + 1)}>Add</Button>
                                        <Button sx={{ cursor: 'pointer' }} disabled={noOfRows <= 1} size='small' variant="contained" color='error' onClick={() => setNoOfRows(noOfRows - 1)}>Delete</Button>
                                    </Stack>
                                    <Stack>
                                        <Button sx={{ cursor: 'pointer' }} size='small' variant="contained" color="secondary">Generate Link</Button>
                                    </Stack>
                                </CardActions>
                            </Card>
                        </Box>
                    )
                }

                <Box mt={3} xs={12} sm={12} md={12} lg={12}>
                    {loading ? (
                        <LoadAnimation />
                    ) : (
                        <MaterialTable
                            title={<Typography variant='h6'>Requests Status</Typography>}
                            columns={columns}
                            data={teamData}
                            options={{
                                actionsColumnIndex: -1,
                                addRowPosition: "first",
                                tableLayout: "fixed",
                                headerStyle: { fontWeight: "bold", fontSize: "1rem" },
                            }}
                        />
                    )}
                </Box>

            </Box>
        </>
    )
}

export default Teams;