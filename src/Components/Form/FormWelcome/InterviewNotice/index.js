import { Box, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";

const theme1 = createTheme({
  palette: {
    primary: {
      main: "#f5f5f5"
    },
    secondary: {
      main: '#000000',
    },
  },
});

export default function InterviewNotice() {
  return (
    <ThemeProvider theme={theme1}>
      <CssBaseline />
      <Box sx={{
        textAlign: 'center',
        p: 3,
        mb: 3,
        borderBottom: 3,
        backgroundColor: 'primary.main',
        // '&:hover': {
        //   backgroundColor: 'primary.main',
        //   opacity: [0.9, 0.8, 0.7],},
      }}>
        <Typography variant="h5" gutterBottom><strong>Talent Sumo has invited you to a One-Way video interview</strong></Typography>
        <Typography variant="subtitle1" gutterBottom>Due by: Saturday,November 5,2022 at 11:00 PM GMT+5:30</Typography>
      </Box>
    </ThemeProvider>
  );
}