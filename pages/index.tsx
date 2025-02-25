import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import Services from '@/src/components/Services';
import ServiceAreas from '@/src/components/ServiceAreas';
import Gallery from '@/src/components/Gallery';
import ContactForm from '@/src/components/ContactForm';
import Footer from '@/src/components/Footer';

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