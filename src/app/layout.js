

import "./globals.css";
import { Inter, Montserrat } from "next/font/google";
import Script from "next/script";
import Footer from "@/components/Footer";
import NavbarWithDropdown from "@/components/NavBar";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Torii Inmuebles",
  description: "Lo mejor en inmuebles",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={montserrat.className}>
        <div className="">
          <NavbarWithDropdown />
        </div>
        <div className="w-full mx-auto">{children}</div>
        <Footer />
        <Script
          src="../path/to/flowbite/dist/flowbite.min.js"
          strategy="worker"
        />
      </body>
    </html>
  );
}
