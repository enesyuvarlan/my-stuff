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
            default: '#E5E7EB',
            hover: '#9CA3AF',
        },
        button: {
            default: '#ffffff',
        },
        text: {
            icon: '#00000',
            cardLink: '#9e9ea7',
        },
        icon: {
            background: '#ffffff',
            fill: '#9e9ea7',
            iconBorder: '#000000',
            iconBorderHover: '#6b6a77',
        }
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: 'dark'
    },
});


