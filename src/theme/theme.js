import {createTheme} from "@mui/material";

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
            checkbox: '#9CA3AF',
        },
        button: {
            default: '#ffffff',
            login: '#0d0c22',
            loginHover: '##565564',
        },
        text: {
            login: '#0d0c22',
            icon: '#00000',
            buttonBlack: '#ffffff',
            cardLink: '#9e9ea7',
            navBarMenu: '#0d0c22',
        },
        icon: {
            background: '#ffffff',
            fill: '#9e9ea7',
            iconBorder: '#000000',
            iconBorderHover: '#6b6a77',
            menuIcon: '#0d0c22',
        },
        header: {
            main: '#ffffffcc',
        },
        navBar: {},
        input: {
            borderFocus: 'input.borderFocus',
        },
        checkbox: {
            false: '#ffffff',
            true: '#ea64d9',
        },

    },
});

export const darkTheme = createTheme({
    palette: {
        mode: 'dark'
    },
});


