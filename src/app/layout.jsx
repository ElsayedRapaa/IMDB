import "./globals.css";

export const metadata = {
  title: "IMDB",
  description: "IMDB Movies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
