import { motion } from 'motion/react';
import { ShieldCheck, Sparkle, HeartPulse, Microscope } from 'lucide-react';

const services = [
  {
    title: "Cosmetic Dentistry",
    desc: "From porcelain veneers to professional whitening, we transform your aesthetic vision into reality.",
    icon: Sparkle,
    link: "View Veneers"
  },
  {
    title: "Orthodontics",
    desc: "Perfectly aligned smiles using traditional braces or modern invisible aligners.",
    icon: ShieldCheck,
    link: "Our Braces"
  },
  {
    title: "Restorative Care",
    desc: "Advanced crown and bridge solutions that look and feel like your natural teeth.",
    icon: HeartPulse,
    link: "Restore Now"
  },
  {
    title: "Oral Surgery",
    desc: "Expert surgical procedures including painless extractions and implantology.",
    icon: Microscope,
    link: "Learn More"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-luxury-black text-white relative overflow-hidden">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-serif mb-6"
          >
            Elite <span className="luxury-gradient-text italic">Procedures</span>
          </motion.h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-gold-400/20 shadow-2xl overflow-hidden rounded-lg">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-luxury-black p-12 hover:bg-gold-950 transition-colors duration-500 group relative cursor-pointer flex flex-col items-center text-center"
            >
              <service.icon className="text-gold-400 mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" size={40} />
              <h3 className="text-2xl font-serif mb-4 text-white group-hover:text-gold-200 transition-colors">{service.title}</h3>
              <p className="text-sm text-gold-50/60 leading-relaxed mb-8 group-hover:text-white/80">
                {service.desc}
              </p>
              <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-gold-400 border-b border-gold-400/30 pb-1 group-hover:text-white group-hover:border-white transition-all">
                {service.link}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Detailed Horizontal List for small services */}
        <div className="mt-20 flex flex-wrap justify-center gap-10 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
           {['Check-up', 'Cleaning', 'Extraction', 'Root Canal', 'Denture', 'TMJ', 'Whitening'].map(s => (
             <span key={s} className="text-xs font-bold tracking-[0.2em] italic uppercase text-gold-200 flex items-center gap-2">
               <div className="w-1.5 h-1.5 rounded-full bg-gold-500"></div>
               {s}
             </span>
           ))}
        </div>
      </div>
    </section>
  );
}
