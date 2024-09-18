import Header from "@/components/Header";
import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import Footer from "@/components/Footer";

//Setting Meta Tags

export const metadata = {
  title: "Asados La Guacareña",
  description:
    "¡Descubre la excelencia culinaria que perdura desde hace más de 25 años en nuestro restaurante! Deléitate con una amplia gama de sabores, pero déjate seducir especialmente por nuestras exquisitas especialidades en pollos y parrillas. En Asados La Guacareña, fusionamos tradición y calidad para ofrecerte una experiencia gastronómica incomparable. ¡Ven y disfruta en Guacara de la auténtica pasión por la cocina que nos distingue!",
  keywords: [
    "Guacara",
    "Restaurante",
    "Pollo Asado",
    "Pizzas",
    "Parrillas",
    "Variedad",
    "Comida",
    "Servicio",
    "Precios",
    "Tradicion",
  ],
  openGraph: {
    title: "Asados La Guacareña",
    description:
      "¡Descubre la excelencia culinaria que perdura desde hace más de 25 años en nuestro restaurante! Deléitate con una amplia gama de sabores, pero déjate seducir especialmente por nuestras exquisitas especialidades en pollos y parrillas. En Asados La Guacareña, fusionamos tradición y calidad para ofrecerte una experiencia gastronómica incomparable. ¡Ven y disfruta en Guacara de la auténtica pasión por la cocina que nos distingue!",
    images:
      "https://firebasestorage.googleapis.com/v0/b/asadoslagu.appspot.com/o/001%20DP-Twt.png?alt=media&token=cdd324df-0a27-4d54-8cff-dcfe0dfecd3a",
    url: "https://www.laguacarena.com/",
  },
  alternates: {
    canonical: "https://laguacarena.com/",
  },
};

//Defining the Fonts to use in the App

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <!-- FACEBOOK DOMAIN VERIFICATION  --> */}
        <meta
          name="facebook-domain-verification"
          content="n0j6oppjxw2o5h9ky28rjofqmm3b7a"
        />
        <script
          src="https://kit.fontawesome.com/c5f3b0fc79.js"
          crossOrigin="anonymous"
          defer
        ></script>
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} font-inter body-text text-white`}
      >
        {/* Main Layout */}
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
