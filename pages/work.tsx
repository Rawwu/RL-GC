import Head from 'next/head';
import Navbar from '../src/components/Navbar';
import WorkGallery from '../src/components/WorkGallery';
import Footer from '../src/components/Footer';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ImageGallery',
  name: "Raul's Lawn & Garden Co. — Landscaping Portfolio",
  description:
    "Browse lawn care and landscaping projects across Fort Worth, Arlington, Saginaw, Keller, and the DFW area.",
  url: 'https://raulslawnco.com/work',
};

export default function WorkPage() {
  return (
    <>
      <Head>
        <title>Our Work | Lawn Care &amp; Landscaping Portfolio — Raul&apos;s Lawn &amp; Garden Co.</title>
        <meta
          name="description"
          content="See our lawn care and landscaping portfolio across Fort Worth, Arlington, Saginaw, Keller, and the DFW area. Projects include lawn maintenance, flower beds, tree trimming, and seasonal clean-ups."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <Navbar />
      <WorkGallery />
      <Footer />
    </>
  );
}
