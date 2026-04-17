import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle } from 'lucide-react';

export default function ContactUs() {
  return (
    <section id="contact" className="py-24 bg-luxury-bone">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold-600 text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">Connect with Us</span>
            <h2 className="text-4xl md:text-6xl font-serif text-luxury-black mb-12">
              Start Your <span className="italic">Journey</span> Today
            </h2>

            <div className="space-y-10">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full border border-gold-400 flex items-center justify-center shrink-0 group-hover:bg-gold-400 group-hover:text-white transition-all duration-300">
                  <Phone size={20} className="text-gold-600 group-hover:text-white" />
                </div>
                <div>
                  <h6 className="text-[10px] uppercase tracking-widest text-luxury-black/50 font-bold mb-1">Phone & Inquiries</h6>
                  <p className="text-xl font-serif text-luxury-black">+63 945 282 3456</p>
                  <p className="text-xs text-luxury-black/40 mt-1">Available Mon-Sat 9AM-6PM</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full border border-gold-400 flex items-center justify-center shrink-0 group-hover:bg-gold-400 group-hover:text-white transition-all duration-300">
                  <MapPin size={20} className="text-gold-600 group-hover:text-white" />
                </div>
                <div>
                  <h6 className="text-[10px] uppercase tracking-widest text-luxury-black/50 font-bold mb-1">Location</h6>
                  <p className="text-xl font-serif text-luxury-black">
                    Unit 2-C G. Raymundo St., Brgy. Malinta, <br />
                    Valenzuela City, Philippines
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full border border-gold-400 flex items-center justify-center shrink-0 group-hover:bg-gold-400 group-hover:text-white transition-all duration-300">
                  <Mail size={20} className="text-gold-600 group-hover:text-white" />
                </div>
                <div>
                  <h6 className="text-[10px] uppercase tracking-widest text-luxury-black/50 font-bold mb-1">Email</h6>
                  <p className="text-xl font-serif text-luxury-black">inquiry@nncndental.com</p>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-12 border-t border-gold-400/20 flex gap-8">
              {[
                { icon: Facebook, label: 'Facebook', href: '#' },
                { icon: Instagram, label: 'Instagram', href: '#' },
                { icon: MessageCircle, label: 'TikTok', href: '#' }
              ].map(social => (
                <a 
                  key={social.label} 
                  href={social.href}
                  className="flex items-center gap-2 group"
                >
                  <social.icon size={18} className="text-gold-600 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-luxury-black/60 group-hover:text-gold-600 transition-colors">{social.label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[500px] lg:h-full min-h-[400px] relative gold-border-gradient p-1"
          >
            <div className="w-full h-full bg-zinc-200 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-1000">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15438.307983637651!2d120.97541675!3d14.68069445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b396e95c4795%3A0x9597193b218ba360!2sMalinta%2C%20Valenzuela%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1713371234567!5m2!1sen!2sph" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute inset-x-0 bottom-0 bg-gold-500 text-white py-4 px-8 flex items-center justify-between">
                 <span className="text-xs font-bold tracking-widest uppercase italic">Visit Our Sanctuary</span>
                 <a href="#" className="text-[10px] uppercase font-bold border-b border-white">Get Directions</a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
