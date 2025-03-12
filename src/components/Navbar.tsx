import Link from 'next/link';

export default function Navbar() {
  return (
        <nav className="bg-white p-4 text-black">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-x1 font-bold">Rauls Lawn & Garden Co.</h1>
                <ul className="flex space-x-4">
                    <li className="px-2 py-2"><Link href="/services">Services</Link></li>
                    <li className="px-2 py-2"><Link href="/work">Work</Link></li>
                    <li className="px-2 py-2"><Link href="/about">About</Link></li>
                    <li className=" border-2 border-black px-2 py-2 bg-white text-green-800 rounded-lg font-semibold hover:bg-green-100 transition"><Link href="/estimate">Free Estimate</Link></li>
                </ul>
            </div>
        </nav>
    );
}