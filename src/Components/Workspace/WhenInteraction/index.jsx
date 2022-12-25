import React, { useState, useEffect } from 'react';
import styles from '../WhenNoInteraction/Workspace.module.css'

import {
    Box,
    Typography,
    IconButton,
    Divider,
    Card,
    CardContent,
    Button,
} from '@mui/material';

import { DataGrid } from '@mui/x-data-grid';

import { message } from 'antd';

import LoadAnimation from '../../LoadAnimation/index';

// Icons
import AddIcon from '@mui/icons-material/Add';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

import Moment from 'moment';

import { useNavigate } from 'react-router-dom';

const WorkspaceWhenInteraction = () => {

    const date = Moment().format("Do MMM YYYY");
    const weekday = Moment().format("dddd");

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [rowData, setRowData] = useState(null);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    const handleCopy = () => {
        message.success('Link Copied Successfully!!');
    }

    const handleReplicate = () => {
        message.success('Cloned Successfully!!');
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'interactionTitle', headerName: 'Interaction Title', width: 200 },
        { field: 'trackDomain', headerName: 'Track / Domain', width: 150 },
        { field: 'interactionMode', headerName: 'Interaction Mode', width: 150 },
        // { field: 'questions', headerName: 'Questions', type: "number", width: 150 },
        {
            field: 'viewInteractions', headerName: 'View Interactions', width: 150,
            renderCell: (rowData) => (
                <Button
                    size='small'
                    variant='contained'
                    onClick={() => navigate("/questions")}
                >
                    View
                </Button>
            )
        },
        {
            field: 'action', headerName: 'Copy Link', width: 120,
            renderCell: (rowData) => (
                <IconButton
                    size='small'
                    variant='contained'
                    color='secondary'
                    onClick={handleCopy}
                >
                    <ContentCopyIcon />
                </IconButton>
            ),
            sortable: false,
        },
        {
            field: 'clone', headerName: 'Clone', width: 120,
            renderCell: (rowData) => (
                <Button
                    size='small'
                    variant='contained'
                    color='warning'
                    onClick={handleReplicate}
                >
                    Replicate
                </Button>
            ),
            sortable: false,
        }
    ];

    const workspaceData = [
        {
            id: 1, interactionTitle: "Marketing", trackDomain: 'Sales', interactionMode: "Audio",
            // questions: 10
        },
        {
            id: 2, interactionTitle: "Frontend Development", trackDomain: 'New Grad.', interactionMode: "MCQ",
            // questions: 25
        },
        {
            id: 3, interactionTitle: "Backend Development", trackDomain: 'HR', interactionMode: "Video",
            // questions: 30
        },
        {
            id: 4, interactionTitle: "Data Analyst", trackDomain: 'Service', interactionMode: "Audio",
            // questions: 50
        },
    ];


    return (
        <>
            <Box>
                <Box className={styles.header}>
                    <Typography variant='h5'>
                        My Workspace
                    </Typography>
                    <Typography sx={{ fontWeight: "bold", display: "flex", flexWrap: "wrap", float: "right", fontSize: { xs: "13px", sm: "16px", md: "18px" }, textAlign: "end" }} color="secondary" variant='h6'>
                        {date}, {weekday}
                    </Typography>
                </Box>

                <Box mt={2} mb={2}>
                    <Button size='small' variant="contained" className={styles.createButton} onClick={() => navigate('/account/internal-bot')}><AddIcon /> Create interaction</Button>
                </Box>

                <Divider />

                <Box mt={5}>
                    {
                        loading ? (
                            <LoadAnimation />
                        ) :
                            (
                                <Card sx={{ mt: 3 }}>
                                    <CardContent>
                                        <Typography mb={2} variant="h5">Interview</Typography>
                                        <Box sx={{ width: "100%" }}>
                                            <DataGrid
                                                rows={workspaceData}
                                                columns={columns}
                                                pageSize={5}
                                                rowsPerPageOptions={[5]}
                                                disableSelectionOnClick
                                                // checkboxSelection
                                                autoHeight
                                            />
                                        </Box>
                                    </CardContent>
                                </Card>
                            )
                    }

                    {
                        loading ? (
                            <LoadAnimation />
                        ) :
                            (
                                <Card sx={{ mt: 3 }}>
                                    <CardContent>
                                        <Typography mb={2} variant="h5">Role Play & Simulation</Typography>
                                        <Box sx={{ width: "100%" }}>
                                            <DataGrid
                                                rows={workspaceData}
                                                columns={columns}
                                                pageSize={5}
                                                rowsPerPageOptions={[5]}
                                                disableSelectionOnClick
                                                // checkboxSelection
                                                autoHeight
                                            />
                                        </Box>
                                    </CardContent>
                                </Card>
                            )
                    }

                    {
                        loading ? (
                            <LoadAnimation />
                        ) :
                            (
                                <Card sx={{ mt: 3 }}>
                                    <CardContent>
                                        <Typography mb={2} variant="h5">Case Studies</Typography>
                                        <Box sx={{ width: "100%" }}>
                                            <DataGrid
                                                rows={workspaceData}
                                                columns={columns}
                                                pageSize={5}
                                                rowsPerPageOptions={[5]}
                                                disableSelectionOnClick
                                                // checkboxSelection
                                                autoHeight
                                            />
                                        </Box>
                                    </CardContent>
                                </Card>
                            )
                    }

                    {
                        loading ? (
                            <LoadAnimation />
                        ) :
                            (
                                <Card sx={{ mt: 3 }}>
                                    <CardContent>
                                        <Typography mb={2} variant="h5">Lessons</Typography>
                                        <Box sx={{ width: "100%" }}>
                                            <DataGrid
                                                rows={workspaceData}
                                                columns={columns}
                                                pageSize={5}
                                                rowsPerPageOptions={[5]}
                                                disableSelectionOnClick
                                                // checkboxSelection
                                                autoHeight
                                            />
                                        </Box>
                                    </CardContent>
                                </Card>
                            )
                    }
                </Box>

            </Box>
        </>
    )
}

export default WorkspaceWhenInteraction;