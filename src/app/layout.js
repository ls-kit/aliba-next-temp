import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";
import MainNavbar from "@/components/shared/Navbar/MainNavbar/MainNavbar";
import Footer from "@/components/shared/Footer/Footer/Footer";
import StoreProvider from "@/redux/StoreProvider";
import ScrollTop from "@/helpers/scrollToTop/ScrollTop";
import ChatWidget from "@/helpers/ChatWidget/ChatWidget";

export const metadata = {
    title: "Aliba Internation",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="theme-color-1">
                <StoreProvider>
                    <MainNavbar />
                    {children}
                    <ChatWidget />
                    <ScrollTop />
                    <Footer />
                </StoreProvider>
                <Script
                    src="https://kit.fontawesome.com/36dd0428ff.js"
                    crossorigin="anonymous"
                ></Script>
                <Script src="../assets/scripts/script.js"></Script>
            </body>
        </html>
    );
}
