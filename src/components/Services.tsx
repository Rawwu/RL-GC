import Link from 'next/link';
import FadeIn from './FadeIn';

export default function Services() {
  const services = [
    {
      title: "Weekly Lawn Care",
      description: "We keep your lawn clean and trim week after week, so you never have to think about it.",
      image: "/images/house_lawn.jpg",
    },
    {
      title: "Flower Beds",
      description: "We maintain your garden clean and plant any additional plants to keep it looking its best.",
      image: "/images/house_lawn.jpg",
    },
    {
      title: "Tree & Shrub Care",
      description: "We maintain trees of any size clean, trim, and healthy. We can shape shrubs of any kind.",
      image: "/images/house_lawn.jpg",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-3xl font-bold text-center text-black mb-12">Our Services</h2>
        </FadeIn>
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden text-center text-black hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="w-12 h-1 bg-green-700 rounded mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-5 leading-relaxed">{service.description}</p>
                  <Link href="/services" className="text-green-700 font-semibold hover:text-green-900 transition">
                    Learn More &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
        <div className="text-center mt-12">
          <Link href="/services">
            <button className="bg-green-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition">
              All Services
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
