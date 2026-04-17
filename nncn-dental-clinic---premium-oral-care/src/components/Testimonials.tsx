import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "I had an incredible experience at NNCN Dental. From the moment you step in until you step out, they make you feel welcome and at home. The entire experience felt so personalized and professional.",
    author: "Myriam Hannah",
    title: "Veneer Patient",
    avatar: "https://picsum.photos/seed/p1/100/100"
  },
  {
    text: "Excellent service and very meticulous with the procedures. The doctors are highly professional and explain every step of the process. I highly recommend them for any aesthetic dental work.",
    author: "James Rodriguez",
    title: "Orthodontics Patient",
    avatar: "https://picsum.photos/seed/p2/100/100"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonial" className="py-24 bg-luxury-black overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 blur-[150px] rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <Quote className="text-gold-500 mb-6 opacity-40" size={64} strokeWidth={1} />
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4 italic">Voices of <span className="luxury-gradient-text not-italic font-bold">Confidence</span></h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-zinc-900/50 backdrop-blur-sm border border-gold-400/10 p-16 relative flex flex-col items-center text-center group"
            >
              <Quote className="text-gold-500/20 absolute top-8 left-8" size={32} />
              <div className="w-20 h-20 rounded-full border-2 border-gold-500 p-1 mb-8">
                <img src={t.avatar} alt={t.author} className="w-full h-full object-cover rounded-full" referrerPolicy="no-referrer" />
              </div>
              <p className="text-gold-50/80 text-xl font-light leading-relaxed mb-10 italic">
                "{t.text}"
              </p>
              <div className="flex flex-col items-center">
                <h5 className="text-white font-serif text-2xl mb-2">{t.author}</h5>
                <p className="text-gold-400 text-[10px] uppercase tracking-[0.3em] font-bold">{t.title}</p>
                <div className="w-12 h-[1px] bg-gold-500 mt-6 group-hover:w-24 transition-all duration-700"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
