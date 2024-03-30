'use client'

import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@components/Header';
import theme from "@/theme/theme";
import { ThemeProvider } from '@mui/system';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ThemeProvider theme={theme}>
                    <Header />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
