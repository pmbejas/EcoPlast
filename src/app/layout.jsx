import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="dark">
      <body className="bg-gray-900 text-white font-sans">
        <Navbar />
        <main className="min-h-screen animate-fadeIn duration-500 ease-out">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}