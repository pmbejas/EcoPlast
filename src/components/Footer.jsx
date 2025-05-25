export default function Footer() {
  return (
    <footer className="bg-gray-800 py-6 text-center text-sm text-gray-400">
      <p>&copy; {new Date().getFullYear()} Expo. Todos los derechos reservados.</p>
    </footer>
  );
}