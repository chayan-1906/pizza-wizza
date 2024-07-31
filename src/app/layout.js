import {Inter} from "next/font/google";
import "./globals.css";
import Layout from "@/components/layouts/Layout";
import {ThemeProvider} from "next-themes";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
    title: 'Pizza Wizza',
    description: '',
};

function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <ThemeProvider attribute={'class'}>
            <Layout>{children}</Layout>
        </ThemeProvider>
        </body>
        </html>
    );
}

export default RootLayout;
