'use client'; // Mark this as a Client Component
import dynamic from "next/dynamic";
import 'leaflet/dist/leaflet.css';
import L from "leaflet";

// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconUrl: '/images/leaflet/marker-icon.png',
    iconRetinaUrl: '/images/leaflet/marker-icon-2x.png',
    shadowUrl: '/images/leaflet/marker-shadow.png',
    iconSize: [25, 41], // Default size of the icon
    iconAnchor: [12, 41], // Point of the icon which will correspond to marker's location
    popupAnchor: [1, -34], // Point from which the popup should open relative to the iconAnchor
    shadowSize: [41, 41], // Size of the shadow image
});

// Dynamically import the MapContainer and its children with SSR disabled
const MapContainer = dynamic(
    () => import ("react-leaflet").then((mod) => mod.MapContainer),
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
  const locations = [
    { name: "Arlington", coordinates: [32.7376, -97.1109] },
    { name: "Fort Worth", coordinates: [32.75578, -97.3328] },
    { name: "Saginaw", coordinates: [32.8601, -97.3639] },
    { name: "North Richland Hills", coordinates: [32.8379, -97.2273]},
    { name: "Mansfield", coordinates: [32.56465, -97.1384]},
    { name: "Haltom City", coordinates: [32.8060, -97.2696]}
  ];

  return (
    <section className="py-16 bg-gray-100 text-black">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Based in Fort Worth, TX</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Map Section */}
          <div className="h-96">
            <MapContainer center={[32.75578, -97.3328]} zoom={10} className="h-full">
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {locations.map((location, index) => (
                <Marker key={index} position={location.coordinates}>
                  <Popup>{location.name}</Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
          {/* Service Areas List */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">We Serve:</h3>
            <ul className=" list-inside">
              {locations.map((location, index) => (
                <li key={index} className="mb-4">{location.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}