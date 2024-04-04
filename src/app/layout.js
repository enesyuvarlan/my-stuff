'use client'

import {Inter} from 'next/font/google';
import './globals.css';
import Header from '@components/Header';
import {darkTheme, lightTheme} from "@/theme/theme";
import {ThemeProvider} from "@mui/material/styles";
import {usePathname} from 'next/navigation';

const inter = Inter({subsets: ['latin']});


export default function RootLayout({children, pathname}) {

    const router = usePathname();
    console.log(router)
    const showHeader = router !== '/signin' && router !== '/signup';

    return (
        <html lang="en">
        <body className={inter.className}>
        <ThemeProvider theme={lightTheme}>
            {showHeader && <Header/>}
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}
