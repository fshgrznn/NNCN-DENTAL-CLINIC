import { motion } from 'motion/react';
import { BadgeCheck, Sparkles, Star, Zap } from 'lucide-react';

const treatments = [
  {
    name: "Porcelain Veneers",
    description: "Custom-crafted shells designed to cover the front surface of teeth to improve your appearance.",
    features: ["Hand-layered porcelain", "Natural translucency", "Stain resistant"],
    icon: Sparkles
  },
  {
    name: "Dental Implants",
    description: "The gold standard for tooth replacement, offering a permanent and natural-looking solution.",
    features: ["Titanium roots", "Bone preservation", "Life-long durability"],
    icon: BadgeCheck
  },
  {
    name: "Invisalign Elite",
    description: "Clear aligner therapy to straighten your teeth discreetly and comfortably.",
    features: ["Virtually invisible", "Removable comfort", "Digital precision"],
    icon: Zap
  },
  {
    name: "Advanced Whitening",
    description: "Medical-grade whitening systems that deliver results up to 8 shades brighter.",
    features: ["Enamel safe", "Instant results", "Customized trays"],
    icon: Star
  }
];

export default function Treatments() {
  return (
    <section id="treatments" className="py-24 bg-luxury-bone">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-gold-600 text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">World-Class Specialized Care</span>
          <h2 className="text-4xl md:text-6xl font-serif text-luxury-black mb-6">
            Premier <span className="italic">Treatments</span>
          </h2>
          <p className="max-w-2xl mx-auto text-luxury-black/60 font-light">
            We specialize in corrective and cosmetic procedures that utilize the latest in dental technology to ensure perfection in every smile.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {treatments.map((treatment, idx) => (
            <motion.div
              key={treatment.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white border border-gold-400/10 p-12 flex flex-col items-center text-center group hover:shadow-2xl transition-all duration-500"
            >
              <div className="w-20 h-20 bg-gold-50 rounded-full flex items-center justify-center mb-8 group-hover:bg-gold-500 transition-colors duration-500">
                <treatment.icon size={32} className="text-gold-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-serif text-luxury-black mb-4">{treatment.name}</h3>
              <p className="text-sm text-luxury-black/60 mb-8 leading-relaxed max-w-xs">
                {treatment.description}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {treatment.features.map(feature => (
                  <span key={feature} className="text-[9px] font-bold uppercase tracking-widest text-gold-700 bg-gold-50 px-3 py-1.5 rounded-full group-hover:bg-gold-100 transition-colors">
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
