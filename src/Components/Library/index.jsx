import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import {
    Box,
    Typography,
    Avatar,
    Divider,
    Card,
    CardContent,
    IconButton,
    Button,
} from '@mui/material';

import { DataGrid } from '@mui/x-data-grid';

// Icon
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

import LoadAnimation from '../LoadAnimation/index';
import { message } from 'antd';

const Library = () => {

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
        message.success('Interaction move to your Workspace Successfully!!');
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
            field: 'action', headerName: 'Copy', width: 100,
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
            field: 'clone', headerName: 'Move to Workspace', width: 180,
            renderCell: (rowData) => (
                <Button
                    size='small'
                    variant='contained'
                    color='warning'
                    onClick={handleReplicate}
                >
                    Clone
                </Button>
            ),
            sortable: false,
        }
    ];

    const libraryData = [
        {
            id: 1, interactionTitle: "Marketing", trackDomain: 'Sales', interactionMode: "Video",
            // questions: 10
        },
        {
            id: 2, interactionTitle: "Frontend Development", trackDomain: 'New Grad.', interactionMode: "Audio",
            // questions: 25
        },
        {
            id: 3, interactionTitle: "Backend Development", trackDomain: 'HR', interactionMode: "MCQ",
            // questions: 30
        },
        {
            id: 4, interactionTitle: "Data Analyst", trackDomain: 'Service', interactionMode: "Audio",
            // questions: 50
        },
    ];

    return (

        <Box>
            <Typography mb={2} sx={{ display: "flex", alignItems: "center" }} variant="h5">
                <Avatar variant="rounded" sx={{ marginRight: "0.5rem", backgroundColor: "#deebff" }}>
                    <LocalLibraryIcon sx={{ color: "#1976d2" }} />
                </Avatar>
                Library
            </Typography>
            <Divider />

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
                                        rows={libraryData}
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
                                        rows={libraryData}
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
                                        rows={libraryData}
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
                                        rows={libraryData}
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
                                <Typography mb={2} variant="h5">Group Discussion</Typography>
                                <Box sx={{ width: "100%" }}>
                                    <DataGrid
                                        rows={libraryData}
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
    );
}

export default Library;