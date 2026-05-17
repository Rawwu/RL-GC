'use client'
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo slot — swap the initials div for an <Image> when logo is ready */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-green-800 rounded-full flex items-center justify-center shrink-0">
            <span className="text-white font-bold text-sm">RL</span>
          </div>
          <h1 className="text-xl font-bold text-green-900">Raul&apos;s Lawn &amp; Garden Co.</h1>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          <a href="tel:8174567068" className="text-green-800 font-semibold hover:text-green-600 transition">
            (817) 456-7068
          </a>
          <ul className="flex items-center gap-1">
            <li><Link href="/services" className="px-3 py-2 hover:text-green-700 transition">Services</Link></li>
            <li><Link href="/work" className="px-3 py-2 hover:text-green-700 transition">Work</Link></li>
            <li><Link href="/about" className="px-3 py-2 hover:text-green-700 transition">About</Link></li>
            <li>
              <Link href="/estimate" className="ml-2 bg-green-800 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition">
                Free Estimate
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
          <a href="tel:8174567068" className="block py-3 text-green-800 font-semibold border-b border-gray-100">
            (817) 456-7068
          </a>
          <Link href="/services" className="block py-3 border-b border-gray-100 hover:text-green-700 transition" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link href="/work" className="block py-3 border-b border-gray-100 hover:text-green-700 transition" onClick={() => setMenuOpen(false)}>Work</Link>
          <Link href="/about" className="block py-3 border-b border-gray-100 hover:text-green-700 transition" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/estimate" className="block mt-4 text-center bg-green-800 text-white px-4 py-3 rounded-lg font-semibold hover:bg-green-700 transition" onClick={() => setMenuOpen(false)}>
            Free Estimate
          </Link>
        </div>
      )}
    </nav>
  );
}
