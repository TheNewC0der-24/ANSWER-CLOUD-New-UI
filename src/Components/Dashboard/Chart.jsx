import React from 'react';
import {
    Box,
    Typography,
    Grid,
    Card,
    Avatar,
    CardContent,
} from '@mui/material';

import CountUp from "react-countup";

// Icons
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import TuneIcon from '@mui/icons-material/Tune';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    indexAxis: 'y',
    elements: {
        bar: {
            borderWidth: 2,
        },
    },
    responsive: true,
    plugins: {
        legend: {
            display: true,
            position: 'top',
        },
        title: {
            display: false,
        },
    },
    scales: {
        x: {
            ticks: {
                beginAtZero: true,
                callback: function (value) {
                    return value + '%';
                }
            }
        }
    },
};

const labels = [
    'Sales',
    'Marketing',
    'Human Resource ',
    'Strategy',
    'Operations',
    'General Interview'
];

const data = {
    labels,
    datasets: [
        {
            label: 'Interactions So Far',
            data: [12, 19, 3, 5, 2, 3],
            borderColor: 'rgb(25, 118, 210)',
            backgroundColor: 'rgba(25, 118, 210, 0.5)',
        },
    ],
};


const Chart = () => {
    return (
        <>
            <Box mt={3}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={12} lg={5} sx={{ margin: "auto" }}>
                        <Card sx={{ backgroundColor: "#DFFCF0", marginBottom: "1rem" }}>
                            <CardContent sx={{ color: "#1F845A" }}>
                                <Avatar variant="circle" sx={{ backgroundColor: "#1F845A" }}>
                                    <PeopleAltIcon />
                                </Avatar>

                                <Typography mt={3} variant="h4" component="div">
                                    Total Candidates
                                </Typography>
                                <Typography variant="h3" component="div">
                                    <CountUp end={100} />
                                </Typography>
                            </CardContent>
                        </Card>

                        <Card sx={{ backgroundColor: "#FFEDEB" }}>
                            <CardContent sx={{ color: "#CA3521" }}>
                                <Avatar variant="circle" sx={{ backgroundColor: "#CA3521" }}>
                                    <TuneIcon />
                                </Avatar>
                                <Typography mt={3} variant="h4" component="div">
                                    Total Interactions
                                </Typography>
                                <Typography variant="h3" component="div">
                                    <CountUp end={100} />
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={7} sx={{ margin: "auto" }}>
                        <Card elevation={2}>
                            <CardContent>
                                <Typography mb={3} variant="h6">
                                    Our Interaction Library : <span style={{ color: "rgb(25, 118, 210)" }}>Interactions counts so far Nov 2022</span>
                                </Typography>
                                <Bar options={options} data={data} />
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Chart;