import React, { useState, useEffect } from 'react';

// Route
import { useNavigate } from 'react-router-dom';

import {
    Box,
    Typography,
    Avatar,
    Divider,
    Button,
} from "@mui/material";

// MUI Table
import MaterialTable from "@material-table/core";

// Icon
import GradingIcon from '@mui/icons-material/Grading';

// Loading Animation
import LoadAnimation from '../LoadAnimation/index';


const ViewReport = () => {

    const [loading, setLoading] = useState(false);
    const [rowData, setRowData] = useState(null);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    const columns = [
        { title: "Candidate ID", field: "candidateID", width: "10rem" },
        { title: "Name", field: "name", width: "10rem", cellStyle: { overflowWrap: "break-word" } },
        { title: "Interaction Id", field: "interactionID", width: "10rem" },
        {
            title: "Detailed Report", width: "12rem",
            render: (rowData) => (
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
            render: (rowData) => (
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
            title: "Certificate", width: "10rem",
            render: (rowData) => (
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

    const ViewResponseAndReportData = [
        { candidateID: "1", name: "Bhavya", interactionID: "123456" },
        { candidateID: "2", name: "Varun", interactionID: "678945" },
        { candidateID: "3", name: "Ayush", interactionID: "123456" },
        { candidateID: "4", name: "Ram", interactionID: "123456" },
        { candidateID: "5", name: "John", interactionID: "123456" },
        { candidateID: "6", name: "Rahul", interactionID: "123456" },
    ]

    const navigate = useNavigate();

    return (
        <>
            <Typography mb={2} sx={{ display: "flex", alignItems: "center" }} variant="h5">
                <Avatar variant="rounded" sx={{ marginRight: "0.5rem", backgroundColor: "#deebff" }}>
                    <GradingIcon sx={{ color: "#1976d2" }} />
                </Avatar>
                View Reports & Certificates
            </Typography>
            <Divider />
            {
                loading ? (<LoadAnimation />) :
                    (
                        <Box sx={{ marginTop: "3rem" }}>
                            <MaterialTable
                                title={<Typography variant='h6'>Reports & Certificates</Typography>}
                                columns={columns}
                                data={ViewResponseAndReportData}
                                options={{
                                    actionsColumnIndex: -1,
                                    addRowPosition: "first",
                                    tableLayout: "fixed",
                                    headerStyle: { fontWeight: "bold", fontSize: "1rem" },
                                }}
                            />
                        </Box>
                    )
            }
        </>
    )
}

export default ViewReport;