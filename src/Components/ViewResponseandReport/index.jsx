import React, { useState, useEffect } from 'react';

// Route
import { useNavigate } from 'react-router-dom';

import {
    Box,
    Typography,
    Divider,
    Button,
} from "@mui/material";

// MUI Table
import MaterialTable from "@material-table/core";

// Loading Animation
import LoadAnimation from '../LoadAnimation/index';


const ViewResponseAndReport = () => {

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
            title: "Responses", width: "10rem",
            render: (rowData) => (
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
            <Typography mb={2} variant='h5'>View Response & Report</Typography>
            <Divider />
            {
                loading ? (<LoadAnimation />) :
                    (
                        <Box sx={{ marginTop: "3rem" }}>
                            <MaterialTable
                                title={<Typography variant='h5'>Responses & Reports</Typography>}
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

export default ViewResponseAndReport;