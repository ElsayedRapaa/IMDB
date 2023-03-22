import Header from "./components/Header";
import "./globals.css";

export const metadata = {
  title: "IMDB",
  description: "IMDB Movies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Header */}
        <Header />
        {children}
      </body>
    </html>
  );
}
