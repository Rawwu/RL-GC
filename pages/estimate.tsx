import Head from 'next/head';
import Navbar from '../src/components/Navbar';
import EstimateForm from '../src/components/EstimateForm';
import Footer from '../src/components/Footer';

export default function EstimatePage() {
  return (
    <>
      <Head>
        <title>Free Estimate — Raul&apos;s Lawn &amp; Garden Co. | Fort Worth, TX</title>
        <meta
          name="description"
          content="Request a free lawn care or landscaping estimate in Fort Worth, Arlington, and the DFW area. We respond within 24 hours. No contracts required."
        />
      </Head>
      <Navbar />

      {/* Mini Hero */}
      <section className="relative h-64 md:h-72 flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-55" />
        <div className="relative text-center px-4 max-w-2xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-green-300 mb-3">
            Request a Quote
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Get Your Free Estimate
          </h1>
          <p className="text-lg text-gray-200">
            Takes less than 60 seconds &mdash; we&apos;ll follow up within 24 hours
          </p>
        </div>
      </section>

      <EstimateForm />
      <Footer />
    </>
  );
}
