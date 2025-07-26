import AppProvider from "../components/AppContext";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Analytics } from "@vercel/analytics/next";
import "../styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content="Deskripsi singkat website kamu" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://galaxybuilder.vercel.app/" />
        <title>GalaxyBuilder-Oss | My Portofolio</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      </head>
      <body>
        <Analytics />
        <AppProvider>
          <Header />
          <main style={{ minHeight: "76vh" }}>{children}</main>
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
