import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-3">Raul&apos;s Lawn &amp; Garden Co.</h3>
            <p className="text-green-200 text-sm leading-relaxed">
              Professional landscaping services proudly serving the Greater Fort Worth area.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-green-300 text-xs font-semibold uppercase tracking-widest mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-green-200 hover:text-white transition">Services</Link></li>
              <li><Link href="/work" className="text-green-200 hover:text-white transition">Our Work</Link></li>
              <li><Link href="/about" className="text-green-200 hover:text-white transition">About</Link></li>
              <li><Link href="/estimate" className="text-green-200 hover:text-white transition">Free Estimate</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-green-300 text-xs font-semibold uppercase tracking-widest mb-4">Contact</h4>
            <a href="tel:8174567068" className="text-green-200 hover:text-white transition text-lg font-semibold block mb-3">
              (817) 456-7068
            </a>
            <p className="text-green-200 text-sm">Mon &ndash; Fri: 7:00 AM &ndash; 6:00 PM</p>
            <p className="text-green-200 text-sm">Sat: 8:00 AM &ndash; 4:00 PM</p>
            <p className="text-green-200 text-sm">Sun: Closed</p>
          </div>

        </div>

        <div className="border-t border-green-700 pt-6 text-center text-green-300 text-sm">
          <p>&copy; {new Date().getFullYear()} Raul&apos;s Lawn &amp; Garden Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
