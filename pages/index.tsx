import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import Services from '@/src/components/Services';
import Gallery from '@/src/components/Gallery';
import ContactForm from '@/src/components/ContactForm';
import Footer from '@/src/components/Footer';
import dynamic from "next/dynamic";

const ServiceAreas = dynamic(() => import('@/src/components/ServiceAreas'), {
    ssr: false
});

export default function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Services />
            <ServiceAreas />
            <Gallery />
            <ContactForm />
            <Footer />
        </div>

    );
}