import Link from 'next/link';

export default function Services() {
    {/* All service objects displayed on homepage */}
    const services = [
        { 
            title: "Weekly Lawn Care", 
            description: "We keep your lawn clean and trim.",
            image: "/images/house_lawn.jpg",
        },
        { 
            title: "Flower Beds", 
            description: "We'll maintain your garden clean and plant any additional plants",
            image: "/images/house_lawn.jpg", 
        },
        { 
            title: "Tree & Shrub Care", 
            description: "We maintain trees of any size clean, trim and healthy. We can trim and shape shrubs of any kind.",
            image: "/images/house_lawn.jpg"
        }
    ];

    return (
        <section className="bg-white py-20">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-black mb-8">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Map that parses thru all service objects */}
              {services.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg  text-center text-black">
                  {/* Images */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  {/* Service Headings */}
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  {/* Service Descriptions */}
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
            {/* Button that routes to services page */}
            <div className="text-center mt-8">
              <Link href="/services">
                <button className="bg-green-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition">
                  All Services
                </button>
              </Link>
            </div>
          </div>
        </section>
      );
    }

