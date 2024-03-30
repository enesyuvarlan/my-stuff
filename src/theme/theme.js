import { createTheme } from "@mui/material";


export const theme = createTheme({
    light: {
        palette: {
            mode: 'light', // Theme mode
            primary: '#ffffff', // 
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
                default: 'rgba(255, 255, 255, 1)',
            },
            text: {
                icon: '#00000',
            },
            icon: {
                background: 'ffffff',
            }
        },
    }

});

