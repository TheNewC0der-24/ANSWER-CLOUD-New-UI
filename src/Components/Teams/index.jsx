import React, { useState } from 'react';
import {
    Stack,
    TextField,
    Box,
    Typography,
    Card,
    CardContent,
    CardActions,
    Button,
    Divider
} from "@mui/material";

import styles from './Teams.module.css';

// Icons
import AddIcon from '@mui/icons-material/Add';

// import { useNavigate } from 'react-router-dom';

const Teams = () => {
    // const navigate = useNavigate();
    const [noOfRows, setNoOfRows] = useState(1);
    const [style, setStyle] = useState({ display: 'none' });
    const AddCard = () => {
        setStyle({
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        })
    }
    const CloseCard = () => {
        setStyle({
            display: 'none',
        })
    }

    return (
        <>
            <Box>
                <Box className={styles.header}>
                    <Typography variant='h5'>
                        Teams
                    </Typography>
                </Box>

                <Box mt={2} mb={2}>
                    <Button size='small' variant="contained" className={styles.createButton} onClick={AddCard}><AddIcon /> Create card</Button>
                </Box>

                <Divider />

                <Box mt={5} style={style}>
                    <Card sx={{ minWidth: 275 }}>
                        <AddIcon onClick={CloseCard}/>
                        <CardContent>
                            {[...Array(noOfRows)].map((index) => {
                                return (
                                    <Stack key={index}>
                                        <TextField
                                            fullWidth
                                            label="Email"
                                            required
                                            type='email'
                                        />
                                    </Stack>
                                 ) 
                            })} 
                        </CardContent>
                        <CardActions>
                            <Button sx={{ cursor: 'pointer' }} size='small' variant="contained" onClick={() => setNoOfRows(noOfRows + 1)}>Add</Button>
                            <Button sx={{ cursor: 'pointer' }} size='small' variant="contained" onClick={() => setNoOfRows(noOfRows - 1)}>Delete</Button>
                        </CardActions>
                    </Card>
                </Box>
            </Box>
        </>
    )
}

export default Teams;