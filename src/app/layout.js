import "./globals.css";
import { Inter } from "next/font/google";
import { getServerSession } from "next-auth/next";
import ReduxProvider from "@/redux/providers";
import { authOptions } from "./api/auth/[...nextauth]/route";

// ***** Font *****
const inter = Inter({ subsets: ["latin"] });

// ***** Metadata *****
export const metadata = {
  title: "Qualhub App",
  description: "Powered by Qualhub",
};

// ***** RootLayout Component *****
const RootLayout = async ({ children }) => {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider session={session}>{children}</ReduxProvider>
      </body>
    </html>
  );
};

export default RootLayout;
