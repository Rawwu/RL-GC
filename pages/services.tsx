import Head from 'next/head';
import Navbar from '../src/components/Navbar';
import ServicesPage from '../src/components/ServicesPage';
import Footer from '../src/components/Footer';

const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: "Raul's Lawn & Garden Co.",
  url: 'https://raulslawnco.com',
  telephone: '+18174567068',
  areaServed: [
    'Fort Worth', 'Arlington', 'Saginaw', 'Mansfield', 'North Richland Hills', 'Haltom City',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Lawn Care & Landscaping Services',
    itemListElement: [
      'Weekly Lawn Care', 'Tree & Shrub Care', 'Garden Maintenance',
      'Sod Laying', 'Fall Clean Up', 'Fertilizer Application',
      'Mulch Application', 'Gutter Clean Out', 'Sprinkler Repair',
    ].map(name => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } })),
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How often should I schedule lawn mowing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most lawns in the DFW area benefit from weekly mowing during the growing season (spring through fall) and bi-weekly cuts in winter.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer free estimates?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — all estimates are completely free and come with no obligation. We respond within 24 hours.',
      },
    },
    {
      '@type': 'Question',
      name: 'What areas do you serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We serve Fort Worth, Arlington, Saginaw, Keller, Hurst, Euless, Bedford, North Richland Hills, Watauga, and surrounding DFW communities.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I book a one-time service, or do I need a recurring contract?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'One-time services are absolutely available with no contract required. Recurring customers receive a lower per-visit rate, so a regular schedule is a great way to save.',
      },
    },
  ],
};

export default function Services() {
  return (
    <>
      <Head>
        <title>Lawn Care &amp; Landscaping Services — Raul&apos;s Lawn &amp; Garden Co. | Fort Worth, TX</title>
        <meta
          name="description"
          content="Professional lawn care, tree trimming, sod laying, gutter clean-out, and more. Serving Fort Worth, Arlington, & surrounding communities. Free estimates available."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>
      <Navbar />
      <ServicesPage />
      <Footer />
    </>
  );
}
