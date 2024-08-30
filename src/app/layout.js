import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import Navbar from "../components/navbar/Navbar";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import Footer from "app/components/footer/Footer";
import ScrollToTop from "app/components/scrollToTop/ScrollToTop";

export const metadata = {
  title: "Crypto",
  description: "Crypto webapp with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </AppRouterCacheProvider>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
