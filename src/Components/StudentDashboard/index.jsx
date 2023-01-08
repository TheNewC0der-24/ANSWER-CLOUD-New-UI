import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './StudentDashboard.module.css';

import {
    Box,
    Typography,
    Avatar,
    Button,
    Grid,
    Card,
    CardContent,
    Link,
} from "@mui/material";

// Icon
import { Icon } from "@iconify/react";

import LoadAnimation from '../LoadAnimation/index';

import CountUp from "react-countup";

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
    ];

    return (
        <>
            <Typography sx={{ display: "flex", alignItems: "center" }} variant="h5">
                <Avatar variant="rounded" className={styles.avatar}>
                    <Icon
                        icon="ic:sharp-dashboard-customize"
                        className={styles.dashboardIcon}
                    />
                </Avatar>
                Records
            </Typography>

            <Box mt={3}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                        <Card sx={{ bgcolor: "#E9F2FF" }}>
                            <CardContent>
                                <Typography variant='h5'>Streak</Typography>
                                <Typography variant='h3'>
                                    <CountUp end={25} />days
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                        <Card sx={{ bgcolor: "#FFEDEB" }}>
                            <CardContent>
                                <Typography variant='h5'>Interaction Count</Typography>
                                <Typography variant='h3'>
                                    <CountUp end={100} />
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                        <Card sx={{ bgcolor: "#FFF7D6" }}>
                            <CardContent>
                                <Typography variant='h5'>Current Level</Typography>
                                <Typography variant='h3'>
                                    Ninja
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>

            <Box mt={3} xs={12} sm={12} md={12} lg={12}>
                <Card>
                    <CardContent>
                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                            <div>
                                <Typography variant='h5' mb={2}>Cloud Coach Certified</Typography>
                            </div>
                            <div>
                                <Link variant='subtitle1' href="https://chat.mycloudcoaches.com/request" target="_blank" underline="hover">
                                    {'Request Interactions'}
                                </Link>
                            </div>
                        </Box>


                        <table className={styles.table}>
                            <tr>
                                <th className={styles.th}>10</th>
                                <th className={styles.th}>50</th>
                                <th className={styles.th} style={{ backgroundColor: "#FFF7D6" }}>100</th>
                                <th className={styles.th}>200</th>
                            </tr>
                            <tr>
                                <td className={styles.td}>
                                    <Button
                                        size='small'
                                        variant='contained'
                                        disabled
                                        onClick={() => navigate("/basicCertificate")}
                                    >
                                        Basic
                                    </Button>
                                    <Typography variant='subtitle2'>Download Certificate</Typography>
                                </td>
                                <td className={styles.td}>
                                    <Button
                                        size='small'
                                        variant='contained'
                                        disabled
                                        onClick={() => navigate("/expertCertificate")}
                                    >
                                        Expert
                                    </Button>
                                    <Typography variant='subtitle2'>Download Certificate</Typography>
                                </td>
                                <td className={styles.td} style={{ backgroundColor: "#FFF7D6" }}>
                                    <Button
                                        size='small'
                                        variant='contained'
                                        onClick={() => navigate("/ninjaCertificate")}
                                    >
                                        Ninja
                                    </Button>
                                    <Typography variant='subtitle2'>Download Certificate</Typography>
                                </td>
                                <td className={styles.td}>
                                    <Button
                                        size='small'
                                        variant='contained'
                                        disabled
                                        onClick={() => navigate("/extraordinaryCertificate")}
                                    >
                                        Extraordinary
                                    </Button>
                                    <Typography variant='subtitle2'>Download Certificate</Typography>
                                </td>
                            </tr>
                        </table>
                    </CardContent>
                </Card>
            </Box>

            <Box mt={3} xs={12} sm={12} md={12} lg={12}>
                {
                    loading ? (
                        <LoadAnimation />
                    ) : (
                        <MaterialTable
                            title={<Typography variant='h5'>Interaction History</Typography>}
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