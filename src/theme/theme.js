import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#ffffff',
        },
        secondary: {
            main: '#ffffff',
        },
        background: {
            default: '#000000',
        },
        card: {
            default: '#F9FAFB',
            hover: '#ffffff',
        },
        border: {
            default: 'rgb(229 231 235)',
            hover: '#9CA3AF',
        },
        button: {
            default: 'rgba(255, 255, 255, 1)',
        },
        text: {
            icon: '#00000',
        },
        icon: {
            background: '#ffffff',
        }
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: 'dark'
    },
});


