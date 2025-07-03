import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full py-4 border-b bg-white/90 backdrop-blur sticky top-0 z-50 shadow-sm">
      <div className="max-w-2xl mx-auto flex justify-between items-center px-4">
        <span className="font-bold text-2xl tracking-tight">Bhuvanesh</span>
        <ul className="flex space-x-8 text-gray-700 font-medium">
          <li>
            <Link href="/#about" className="hover:text-blue-600 transition">About</Link>
          </li>
          <li>
            <Link href="/#experience" className="hover:text-blue-600 transition">Experience</Link>
          </li>
          <li>
            <Link href="/#cards" className="hover:text-blue-600 transition">Cards</Link>
          </li>
          <li>
            <Link href="/#contact" className="hover:text-blue-600 transition">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
} 