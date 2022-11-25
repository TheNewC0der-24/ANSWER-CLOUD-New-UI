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
            <Box>
                <Typography sx={{ fontSize: { xs: "18px", sm: "20px", md: "22px" } }} variant="h5">
                    Our Interaction Library : <span style={{ color: "rgb(25, 118, 210)" }}>Interactions counts so far Nov 2022</span>
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