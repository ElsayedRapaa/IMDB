import Providers from "./Providers";
import Header from "../components/Header";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Search from "@/components/Search";

export const metadata = {
  title: "IMDB",
  description: "IMDB Movies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/* Header */}
          <Header />

          {/* Navbar */}
          <Navbar />

          {/* SearchBox */}
          <Search />

          {children}
        </Providers>
      </body>
    </html>
  );
}
