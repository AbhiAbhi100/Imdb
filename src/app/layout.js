import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Providers from "./Providers";
import Navbar from "./components/Navbar";
import SearchBox from "./components/SearchBox";



export const metadata = {
  title: "IMDB clone",
  description: "This is a movie database clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Providers>
        <Header/>
        <Navbar/>
        <SearchBox/>
        {children}
        </Providers>
      </body>
    </html>
  );
}
