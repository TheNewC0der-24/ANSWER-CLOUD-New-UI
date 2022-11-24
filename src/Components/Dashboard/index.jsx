import React from 'react';
import {
    Box,
    Typography,
    Avatar,
    Grid,
    Card,
    CardActionArea,
    CardContent,
    Divider,
} from "@mui/material";

import styles from './Dashboard.module.css';

// Icon
import { Icon } from "@iconify/react";
import { RiNumber1, RiNumber2, RiNumber3, RiNumber4 } from "react-icons/ri";

import Chart from './Chart';
import ViewInteraction from './ViewInteraction';


function Dashboard() {
    return (
        <>
            <Box>
                <Typography sx={{ display: "flex", alignItems: "center" }} variant="h5">
                    <Avatar variant="rounded" className={styles.avatar}>
                        <Icon
                            icon="ic:sharp-dashboard-customize"
                            className={styles.dashboardIcon}
                        />
                    </Avatar>
                    Dashboard
                </Typography>

                <Grid mt={2} container spacing={2}>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card sx={{ backgroundColor: "#C1F0F5" }}>
                            <CardActionArea>
                                <CardContent>
                                    <Avatar sx={{ backgroundColor: "#8BDBE5" }}>
                                        <RiNumber1 />
                                    </Avatar>
                                    <Typography variant="subtitle1" component="div">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, iste porro! Voluptatum ex natus beatae eligendi mollitia quos, numquam assumenda.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card sx={{ backgroundColor: "#DFD8FD" }}>
                            <CardActionArea>
                                <CardContent>
                                    <Avatar sx={{ backgroundColor: "#B8ACF6" }}>
                                        <RiNumber2 />
                                    </Avatar>
                                    <Typography variant="subtitle1" component="div">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, iste porro! Voluptatum ex natus beatae eligendi mollitia quos, numquam assumenda.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card sx={{ backgroundColor: "#FFE2BD" }}>
                            <CardActionArea>
                                <CardContent>
                                    <Avatar sx={{ backgroundColor: "#FEC57B" }}>
                                        <RiNumber3 />
                                    </Avatar>
                                    <Typography variant="subtitle1" component="div">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, iste porro! Voluptatum ex natus beatae eligendi mollitia quos, numquam assumenda.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card sx={{ backgroundColor: "#FFD2CC" }}>
                            <CardActionArea>
                                <CardContent>
                                    <Avatar sx={{ backgroundColor: "#FF9C8F" }}>
                                        <RiNumber4 />
                                    </Avatar>
                                    <Typography variant="subtitle1" component="div">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, iste porro! Voluptatum ex natus beatae eligendi mollitia quos, numquam assumenda.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
                <Divider sx={{ mt: 3, mb: 2 }} />
                {/******************** Chart ********************/}
                <Chart />

                {/******************** View Interaction ********************/}
                <Box mt={2}>
                    <ViewInteraction />
                </Box>
            </Box>
        </>
    )
}

export default Dashboard;