import { Card, CardContent, Typography,Link } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const theme3 = createTheme({
    palette: {
      secondary: {
        main: '#f5f5f5',
      },
    },
  });


export default function InterviewPreparation() {
    return(
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
            <CardContent >
            <Typography
                variant="h6"
                gutterBottom
            >
                Interview Preparation
            </Typography>
            <Typography sx={{mb:3}}>Here are some helpful resources to get you ready for your interview.</Typography>
            <Link href="#" underline="hover" sx={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                mb:3
                }}>What is a One-Way Interview?<KeyboardDoubleArrowRightIcon sx={{ fontSize: 15 }} /></Link>
            <Link href="#" underline="hover" sx={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                mb:3
                }}>Frequently asked questions<KeyboardDoubleArrowRightIcon sx={{ fontSize: 15 }} /></Link>
            <Link href="#" underline="hover" sx={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                mb:3
                }}>Contact our support team<KeyboardDoubleArrowRightIcon sx={{ fontSize: 15 }} /></Link>
            <Link href="#" underline="hover" sx={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                mb:3
                }}>Tips and best practices<KeyboardDoubleArrowRightIcon sx={{ fontSize: 15 }} /></Link>
            </CardContent>
        </Card>
        </ThemeProvider>
        );
}

