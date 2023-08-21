import "./globals.css";
import { Inter } from "next/font/google";
import ReduxProvider from "@/redux/providers";

// ***** Font *****
const inter = Inter({ subsets: ["latin"] });

// ***** Metadata *****
export const metadata = {
  title: "Qualhub App",
  description: "Powered by Qualhub",
};

// ***** RootLayout Component *****
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
};

export default RootLayout;
