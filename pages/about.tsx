import Head from 'next/head';
import Navbar from '../src/components/Navbar';
import AboutPage from '../src/components/AboutPage';
import Footer from '../src/components/Footer';

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Raul',
  jobTitle: 'Founder & Owner',
  worksFor: {
    '@type': 'LocalBusiness',
    name: "Raul's Lawn & Garden Co.",
    url: 'https://raulslawnco.com',
  },
};

export default function About() {
  return (
    <>
      <Head>
        <title>About Us — Raul&apos;s Lawn &amp; Garden Co. | Fort Worth, TX</title>
        <meta
          name="description"
          content="Learn the story behind Raul's Lawn & Garden Co. — a family-owned landscaping business serving Fort Worth and Arlington for 25+ years with 100+ satisfied clients."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
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
          <p className="text-xs font-semibold uppercase tracking-widest text-green-300 mb-3">Our Story</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            A Family Business Built on Hard Work &amp; Honest Service
          </h1>
          <p className="text-lg text-gray-200">
            Serving Fort Worth, Arlington &amp; the DFW community for over 25 years
          </p>
        </div>
      </section>

      <AboutPage />
      <Footer />
    </>
  );
}
