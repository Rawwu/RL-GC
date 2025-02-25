import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      {/* Content */}
      <div className="relative text-center">
        <h1 className="text-5xl font-bold mb-4">Transform Your Outdoor Space</h1>
        <p className="text-xl mb-8">Professional landscaping services tailored to your needs.</p>

        <Link href="/services">
          <button className="bg-white text-green-800 px-6 py-3 rounded-full font-semibold hover:bg-green-100 transition">
            Explore Our Services
          </button>
        </Link>
      </div>
    </section>
  );
}