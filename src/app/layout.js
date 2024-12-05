import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";



export const metadata = {
  title: "IMDB clone",
  description: "This is a movie database clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Header/>
        {children}
      </body>
    </html>
  );
}
