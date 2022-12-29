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
        { candidateID: "185235", name: "Bhavya", interactionID: "789156" },
        { candidateID: "289123", name: "Varun", interactionID: "678945" },
        { candidateID: "789523", name: "Ayush", interactionID: "312368" },
        { candidateID: "436589", name: "Ram", interactionID: "159876" },
        { candidateID: "562895", name: "John", interactionID: "248963" },
        { candidateID: "654636", name: "Rahul", interactionID: "476589" },
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