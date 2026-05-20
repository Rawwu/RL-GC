'use client'
import dynamic from "next/dynamic";
import 'leaflet/dist/leaflet.css';
import L from "leaflet";
import type { LatLngTuple } from "leaflet";
import Link from 'next/link';
import FadeIn from './FadeIn';

// @ts-expect-error: _getIconUrl is an internal property not exposed in typings, but needs to be deleted to customize marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: '/images/leaflet/marker-icon.png',
  iconRetinaUrl: '/images/leaflet/marker-icon-2x.png',
  shadowUrl: '/images/leaflet/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
);

export default function ServiceAreas() {
  type Location = {
    name: string;
    coordinates: LatLngTuple;
  };

  const locations: Location[] = [
    { name: "Arlington", coordinates: [32.7376, -97.1109] },
    { name: "Fort Worth", coordinates: [32.75578, -97.3328] },
    { name: "Saginaw", coordinates: [32.8601, -97.3639] },
    { name: "North Richland Hills", coordinates: [32.8379, -97.2273] },
    { name: "Mansfield", coordinates: [32.56465, -97.1384] },
    { name: "Haltom City", coordinates: [32.8060, -97.2696] },
  ];

  return (
    <section className="py-20 bg-gray-50 text-black">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-3xl font-bold text-center mb-3">
            Proudly Serving the Greater Fort Worth Area
          </h2>
          <p className="text-center text-gray-500 mb-12">
            We bring professional landscaping to your neighborhood.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Map */}
          <div className="h-96 rounded-xl overflow-hidden shadow-md isolate">
            <MapContainer
              center={[32.75578, -97.3328]}
              zoom={10}
              className="h-full"
              scrollWheelZoom={false}
              dragging={false}
              touchZoom={false}
              doubleClickZoom={false}
              zoomControl={false}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              {locations.map((location, index) => (
                <Marker key={index} position={location.coordinates}>
                  <Popup>{location.name}</Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>

          {/* Service areas list */}
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-semibold mb-6">We Serve:</h3>
            <ul className="space-y-4">
              {locations.map((location, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-700">
                  <span className="text-green-700 font-bold text-lg">&#10003;</span>
                  <span className="text-lg">{location.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/estimate">
            <button className="bg-green-800 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 transition shadow-md">
              Get a Free Estimate
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
