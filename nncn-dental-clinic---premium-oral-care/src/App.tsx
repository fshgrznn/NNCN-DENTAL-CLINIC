/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Treatments from './components/Treatments';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-luxury-bone selection:bg-gold-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <Services />
        <Treatments />
        <Gallery />
        <Testimonials />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}

