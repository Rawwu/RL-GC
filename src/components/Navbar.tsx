import Link from 'next/link';

export default function Navbar() {
  return (
        <nav className="bg-green-800 p-4 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-x1 font-bold">Rauls Lawn & Garden Co.</h1>
                <ul className="flex space-x-4">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/services">Services</Link></li>
                    <li><Link href="/work">Work</Link></li>
                </ul>
            </div>
        </nav>
    );
}