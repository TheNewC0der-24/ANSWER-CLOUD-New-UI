import React from 'react';
import {
    Box,
    Typography,
    Card,
    CardContent,
} from '@mui/material';

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
    'On-the job, hands-on learning',
    'Mentoring',
    'Classroom training',
    'Formal courses*',
    'Videos',
    'Online simulations games',
    'Virtual instructor-let training**',
    'eLearning courses',
    'Podcast',
    'Augmented reality',
    'Virtual reality',
    'Social collaboration***',
    'Mobile device notifications',
];

const data = {
    labels,
    datasets: [
        {
            label: 'Share of respondents in (%)',
            data: [90, 83, 78, 60, 57, 54, 52, 44, 35, 30, 29, 23, 20],
            borderColor: 'rgb(25, 118, 210)',
            backgroundColor: 'rgba(25, 118, 210, 0.5)',
        },
    ],
};


const Chart = () => {
    return (
        <>
            <Box>
                <Typography sx={{ fontSize: { xs: "18px", sm: "20px", md: "22px" } }} variant="h5">
                    Share of employees worldwide who believe learning technologies are effective in 2018, by type of technology
                </Typography>
                <Box mt={1}>
                    <Card elevation={2}>
                        <CardContent>
                            <Bar options={options} data={data} />
                        </CardContent>
                    </Card>
                </Box>
            </Box>
        </>
    )
}

export default Chart;