import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import {
    Box,
    Typography,
    Button,
} from "@mui/material";

import LoadAnimation from '../LoadAnimation/index';

import MaterialTable from "@material-table/core";

// import CountUp from "react-countup";

const ViewInteraction = () => {

    const [loading, setLoading] = useState(false);
    const [rowData, setRowData] = useState(null);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    const columns = [
        { title: "Test ID", field: "testID", width: "10rem" },
        { title: "Interaction Title", field: "interactionTitle", width: "12rem" },
        { title: "Track", field: "track", width: "10rem" },
        {
            title: "Interaction Bot", width: "12rem",
            render: (row) => (
                <Button
                    size='small'
                    variant='contained'
                    onClick={() => navigate("/form/invitation")}
                >
                    View
                </Button>
            )
        },
    ];

    const interactionData = [
        { testID: "753984", interactionTitle: "Frontend Developer", track: "New Grad." },
        { testID: "289423", interactionTitle: "Sales Executive", track: "Sales" },
        { testID: "428964", interactionTitle: "Backend Developer", track: "Service" },
        { testID: "775698", interactionTitle: "Android Developer", track: "New Grad." },
        { testID: "587123", interactionTitle: "Fullstack Developer", track: "Others" },
    ]

    const navigate = useNavigate();

    return (
        <>
            <Box>
                {/* <Grid container spacing={1}> */}
                {/* <Grid item xs={12} sm={6} md={3} lg={3}>
                        <Card sx={{ backgroundColor: "#DFFCF0", marginBottom: "1rem" }}>
                            <CardContent sx={{ color: "#1F845A" }}>
                                <Typography variant="h5" component="div">
                                    Total Candidates
                                </Typography>
                                <Typography variant="h6" component="div">
                                    <CountUp end={100} />
                                </Typography>
                            </CardContent>
                        </Card>

                        <Card sx={{ backgroundColor: "#FFEDEB" }}>
                            <CardContent sx={{ color: "#CA3521" }}>
                                <Typography variant="h5" component="div">
                                    Total Interactions
                                </Typography>
                                <Typography variant="h6" component="div">
                                    <CountUp end={100} />
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid> */}
                {/* <Grid item xs={12} sm={6} md={9} lg={9}> */}
                <Box xs={12} sm={12} md={12} lg={12}>
                    {loading ? (
                        <LoadAnimation />
                    ) : (
                        <MaterialTable
                            title={<Typography variant='h5'>Interactions</Typography>}
                            columns={columns}
                            data={interactionData}
                            options={{
                                actionsColumnIndex: -1,
                                addRowPosition: "first",
                                tableLayout: "fixed",
                                headerStyle: { fontWeight: "bold", fontSize: "1rem" },
                            }}
                        />
                    )}
                </Box>
                {/* </Grid> */}
                {/* </Grid> */}
            </Box>
        </>
    )
}

export default ViewInteraction;