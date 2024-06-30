import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: green,
        secondary: purple,
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: green,
        secondary: purple,
    },
});