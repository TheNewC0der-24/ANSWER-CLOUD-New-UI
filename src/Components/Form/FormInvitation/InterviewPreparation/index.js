import { Card, CardContent, Typography, Link } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";

const theme3 = createTheme({
    palette: {
        secondary: {
            main: '#f5f5f5',
        },
    },
});


export default function InterviewPreparation() {
    return (
        //<Root>
        <ThemeProvider theme={theme3}>
            <CssBaseline />
            <Card
                sx={{
                    border: "none",
                    boxShadow: "none",
                    backgroundColor: 'secondary.main',
                    borderRadius: 0,
                }}
            >
                <CardContent>
                    <Typography
                        variant="h6"
                        gutterBottom
                        sx={{ fontWeight: "bold" }}
                    >
                        Interaction Preparation
                    </Typography>
                    <Typography sx={{ mb: 3, fontStyle: "italic" }}>Helpful tips to get you ready to rock your interaction! </Typography>

                    <Typography>What is an interaction?</Typography>
                    <Typography mb={2} color='primary'>
                        Interaction is an audio, video or text based one way conversation with a cloud AI coach. This experience is customized for you by your mentor or coach. After you complete this simulated experience, you will automatically receive feedback.
                    </Typography>

                    <Typography>When will I get the feedback?</Typography>
                    <Typography mb={2} color='primary'>Depending upon the server loads it can be anywhere from 2 minutes to a day. Your feedback report, certificate etc. will be sent to your email as well. </Typography>

                    <Typography>Any tips or best practices?</Typography>
                    <Typography mb={2} color='primary'>Treat this as formal business scenarios and act accordingly. Besides the content, how you present the content is evaluated as well.</Typography>

                    <Typography>More questions?</Typography>
                    <Typography mb={2} color='primary'>Please contact your mentor and coach about the content of interaction. For technical support please contact cloud coach helpdesk.</Typography>
                </CardContent>
            </Card>
        </ThemeProvider>
    );
}

