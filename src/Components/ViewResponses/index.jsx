import React, { useState, useEffect } from 'react';

// Route
import { useNavigate } from 'react-router-dom';

import {
    Box,
    Typography,
    Divider,
    Avatar,
    Button,
} from "@mui/material";

// MUI Table
import MaterialTable from "@material-table/core";

// Icon
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

// Loading Animation
import LoadAnimation from '../LoadAnimation/index';


const ViewResponse = () => {

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
    ];

    const ViewResponseData = [
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
                    <QuestionAnswerIcon sx={{ color: "#1976d2" }} />
                </Avatar>
                View Responses
            </Typography>
            <Divider />
            {
                loading ? (<LoadAnimation />) :
                    (
                        <Box sx={{ marginTop: "3rem" }}>
                            <MaterialTable
                                title={<Typography variant='h6'>Responses</Typography>}
                                columns={columns}
                                data={ViewResponseData}
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

export default ViewResponse;