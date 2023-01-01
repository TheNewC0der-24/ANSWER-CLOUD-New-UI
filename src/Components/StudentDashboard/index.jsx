import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import {
    Box,
    Typography,
    Button,
} from "@mui/material";

import LoadAnimation from '../LoadAnimation/index';

import MaterialTable from "@material-table/core";

const StudentDashboard = () => {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [rowData, setRowData] = useState(null);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    const columns = [
        { title: "Interaction ID", field: "interactionID", width: "10rem" },
        { title: "Interaction Title", field: "interactionTitle", width: "12rem" },
        { title: "Track", field: "track", width: "10rem" },
        {
            title: "Detailed Report", width: "12rem",
            render: (row) => (
                <Button
                    size='small'
                    variant='contained'
                    onClick={() => navigate("/detailedReport")}
                >
                    View
                </Button>
            )
        },
        {
            title: "Summary Report", width: "12rem",
            render: (row) => (
                <Button
                    size='small'
                    variant='contained'
                    onClick={() => navigate("/summaryReport")}
                >
                    View
                </Button>
            )
        },
        {
            title: "Responses", width: "8rem",
            render: (row) => (
                <Button
                    size='small'
                    variant='contained'
                    onClick={() => navigate("/responses")}
                >
                    View
                </Button>
            )
        },
        {
            title: "Certificate", width: "8rem",
            render: (row) => (
                <Button
                    size='small'
                    variant='contained'
                    onClick={() => navigate("/certificate")}
                >
                    View
                </Button>
            )
        },
    ];

    const dashboardStudentData = [
        { interactionID: "753984", interactionTitle: "Frontend Developer", track: "New Grad." },
        { interactionID: "289423", interactionTitle: "Sales Executive", track: "Sales" },
        { interactionID: "428964", interactionTitle: "Backend Developer", track: "Service" },
        { interactionID: "775698", interactionTitle: "Android Developer", track: "New Grad." },
        { interactionID: "587123", interactionTitle: "Fullstack Developer", track: "Others" },
    ]

    return (
        <>
            <Box mt={3} xs={12} sm={12} md={12} lg={12}>
                {
                    loading ? (
                        <LoadAnimation />
                    ) : (
                        <MaterialTable
                            title={<Typography variant='h5'>Student Dashboard</Typography>}
                            columns={columns}
                            data={dashboardStudentData}
                            options={{
                                actionsColumnIndex: -1,
                                addRowPosition: "first",
                                tableLayout: "fixed",
                                headerStyle: {
                                    backgroundColor: '#3f51b5',
                                    color: '#FFF',
                                    fontWeight: "bold", fontSize: "1rem"
                                }
                            }}
                        />
                    )}
            </Box>

        </>
    )
}

export default StudentDashboard;