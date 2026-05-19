import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-white">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-55" />

      {/* Content */}
      <div className="relative text-center px-4 max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
          Transform Your Outdoor Space
        </h1>
        <p className="text-xl mb-2 text-gray-200">
          Professional landscaping services tailored to your needs.
        </p>
        <p className="text-lg mb-10 text-green-300 font-medium">
          Serving Fort Worth, Arlington &amp; surrounding areas
        </p>

        {/* Dual CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/estimate">
            <button className="bg-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 transition shadow-lg w-full sm:w-auto">
              Get a Free Estimate
            </button>
          </Link>
          <Link href="/work">
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-green-800 transition w-full sm:w-auto">
              See Our Work
            </button>
          </Link>
        </div>

        {/* Trust signals */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center text-sm text-gray-300">
          <span>&#10003;&nbsp; Free Estimates</span>
        </div>
      </div>
    </section>
  );
}
