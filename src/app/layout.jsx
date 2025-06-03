import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppBtn from "@/components/WhatsAppBtn";

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="dark">
      <body className="bg-gray-900 text-white font-sans">
        <Navbar />
        <main className="min-h-screen animate-fadeIn duration-500 ease-out">
          <WhatsAppBtn />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}