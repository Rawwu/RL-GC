import Link from 'next/link';
import FadeIn from './FadeIn';

const STATS = [
  { stat: '100+', label: 'Satisfied Active Clients'  },
  { stat: '25+',  label: 'Years of Service'   },
  { stat: '9+',   label: 'Services Offered'     },
  { stat: 'FW & ARL',  label: 'Area Served'         },
];

const WHY = [
  { icon: '🤝', title: "You'll Know Raul Personally",  desc: "Every customer works directly with Raul. No call centers, no middlemen — ever." },
  { icon: '🏡', title: '20+ Years of Loyal Clients',   desc: "Many of our customers have trusted us with their properties for over two decades." },
  { icon: '💰', title: 'Fair, Honest Pricing',         desc: "Raul has always believed pricing should be fair. You'll never wonder if you're being overcharged." },
  { icon: '🌎', title: 'Residential & Commercial',     desc: "From family homes to apartment communities and local businesses, we handle it all." },
];

export default function AboutPage() {
  return (
    <>
      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left — story text */}
            <FadeIn>
              <p className="text-xs font-semibold uppercase tracking-widest text-green-700 mb-3">Our Story</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-snug">How It All Started</h2>
              <div className="w-12 h-1 bg-green-700 mb-6" />
              <p className="text-gray-600 leading-relaxed mb-5">
                Raul came to the United States from Mexico with a simple goal: build something of his own through
                hard work and honest service. He started Raul&apos;s Lawn &amp; Garden Co. from scratch — one yard,
                one handshake at a time. Word spread naturally. A happy neighbor passed his name to a friend.
                A local business owner became a loyal client, then a friend. That&apos;s how it has always worked.
              </p>
              <p className="text-gray-600 leading-relaxed">
                More than two decades later, Raul personally serves over 100 clients across Fort Worth, Arlington,
                and the surrounding DFW area — residential homes, apartment communities, and commercial businesses.
                What hasn&apos;t changed is the personal touch. Every customer knows Raul by name. He knows theirs
                too. Some of those relationships have lasted over 20 years, and that&apos;s something no large
                company can offer.
              </p>
            </FadeIn>

            {/* Right — photo */}
            <FadeIn>
              <img
                src="/images/About-1.jpg"
                alt="Raul's Lawn & Garden Co. — professional lawn care in Fort Worth, TX"
                className="w-full rounded-2xl shadow-lg aspect-[4/3] object-cover"
              />
            </FadeIn>

          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <div className="bg-gray-50 border-y border-gray-200">
        <FadeIn>
          <div className="container mx-auto px-4 py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {STATS.map(({ stat, label }) => (
                <div key={label}>
                  <p className="text-3xl font-bold text-green-800">{stat}</p>
                  <p className="text-sm text-gray-500 mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest text-green-700 text-center mb-2">What Drives Us</p>
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Our Mission &amp; Vision</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">

            {/* Mission */}
            <FadeIn>
              <div className="bg-green-800 text-white rounded-2xl p-8 h-full">
                <p className="text-2xl mb-4">🎯</p>
                <h3 className="text-xl font-bold mb-4">Our Mission</h3>
                <p className="text-green-100 leading-relaxed text-sm">
                  Our mission is simple: keep your property looking its best so you can enjoy your outdoor space
                  without the work or the worry. Life gets busy — summers get brutal, winters catch you off guard,
                  and sometimes there just aren&apos;t enough hours in the day. Whether you&apos;re a working family,
                  an older homeowner who deserves to relax, or a business that needs its property looking sharp for
                  customers, we&apos;re here to take that off your plate. Every property we care for gets the same
                  attention we&apos;d give our own.
                </p>
              </div>
            </FadeIn>

            {/* Vision */}
            <FadeIn>
              <div className="bg-white border border-gray-200 border-t-4 border-t-green-800 rounded-2xl p-8 shadow-sm h-full">
                <p className="text-2xl mb-4">🔭</p>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  We&apos;re proud of the close relationships we&apos;ve built, and as we grow, we&apos;re committed
                  to keeping that personal touch. Our vision is to serve more homes and businesses across the DFW
                  area — expanding our reach without losing what makes us different. More clients, more communities,
                  same Raul.
                </p>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left — differentiators */}
            <FadeIn>
              <p className="text-xs font-semibold uppercase tracking-widest text-green-700 mb-3">Why Choose Us</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 leading-snug">What Makes Us Different</h2>
              <div className="space-y-6">
                {WHY.map(({ icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-4">
                    <span className="text-3xl shrink-0 mt-0.5">{icon}</span>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Right — photo */}
            <FadeIn>
              <img
                src="/images/About-2.jpg"
                alt="Raul's team providing professional landscaping services in Fort Worth"
                className="w-full rounded-2xl shadow-lg aspect-[4/3] object-cover"
              />
            </FadeIn>

          </div>
        </div>
      </section>

      {/* Meet Raul */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-2xl mx-auto text-center">
              <img
                src="/images/Meet-Raul.jpg"
                alt="Raul — Founder of Raul's Lawn & Garden Co."
                className="w-40 h-40 rounded-full object-cover mx-auto shadow-lg mb-6"
                style={{ objectPosition: 'center 20%' }}
              />
              <p className="text-xs font-semibold uppercase tracking-widest text-green-700 mb-2">The Person Behind It All</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Raul</h2>
              <div className="w-12 h-1 bg-green-700 mx-auto mb-6" />
              <p className="text-gray-600 leading-relaxed mb-6">
                Raul founded this company with nothing but a strong work ethic and a belief that people deserve
                reliable, honest service at a fair price. Today, he still works directly with every client —
                showing up, doing the work, and making sure it&apos;s done right. That&apos;s been true from the
                very first lawn he ever cut, and it&apos;s still true today.
              </p>
              <p className="text-green-800 font-semibold italic text-lg">
                &ldquo;They are honest, dedicated & dependable and have been in the business a long time. Many others in our neighborhood feel the same way about them.&rdquo;
              </p>
              <p className="text-gray-400 text-sm mt-1">— What our customers say</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-green-800 py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-3">Ready to Join Our Family of Customers?</h2>
          <p className="text-green-200 text-lg mb-8 max-w-xl mx-auto">
            Get a free estimate &mdash; we&apos;ll follow up within 24 hours.
          </p>
          <Link href="/estimate">
            <button className="bg-white text-green-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-100 transition shadow-lg">
              Get a Free Estimate &rarr;
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
