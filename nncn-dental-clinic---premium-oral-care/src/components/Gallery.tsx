import { motion } from 'motion/react';

const galleryItems = [
  {
    title: "Perfect Fit Dentures",
    before: "https://picsum.photos/seed/denture-before/600/400",
    after: "https://picsum.photos/seed/denture-after/600/400",
  },
  {
    title: "Smile Restoration",
    before: "https://picsum.photos/seed/restore-before/600/400",
    after: "https://picsum.photos/seed/restore-after/600/400",
  },
  {
    title: "Cosmetic Whitening",
    before: "https://picsum.photos/seed/ whitening-before/600/400",
    after: "https://picsum.photos/seed/whitening-after/600/400",
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-32 bg-luxury-bone">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center justify-center text-center mb-20">
          <span className="text-gold-600 text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">Transformation Studio</span>
          <h2 className="text-4xl md:text-6xl font-serif text-luxury-black max-w-2xl">
            Witness the <span className="italic">Gold Standard</span> of Results
          </h2>
          <div className="w-16 h-[1px] bg-gold-500 mt-8 mb-6"></div>
          <p className="max-w-lg text-luxury-black/60 text-sm leading-relaxed italic">
            "Your smile is the signature of your confidence. We take immense pride in every detail of the transformation journey."
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white p-2 shadow-xl border border-gold-400/10 group"
            >
              <div className="relative grid grid-cols-2 gap-2 overflow-hidden">
                <div className="relative group/side overflow-hidden">
                  <img 
                    src={item.before} 
                    alt="Before" 
                    className="w-full h-full object-cover aspect-[4/3] transform group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-luxury-black/80 backdrop-blur-sm text-white text-[8px] font-bold tracking-widest px-3 py-1 uppercase">Before</div>
                </div>
                <div className="relative group/side overflow-hidden">
                  <img 
                    src={item.after} 
                    alt="After" 
                    className="w-full h-full object-cover aspect-[4/3] transform group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-gold-500 text-white text-[8px] font-bold tracking-widest px-3 py-1 uppercase">After</div>
                </div>
              </div>
              <div className="p-6 flex items-center justify-between border-t border-gold-400/5 mt-2">
                <h4 className="text-lg font-serif text-luxury-black">{item.title}</h4>
                <div className="w-10 h-[1px] bg-gold-400 group-hover:w-20 transition-all"></div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
           <a href="#" className="inline-block py-5 px-14 bg-luxury-black text-white rounded-full text-[10px] font-bold tracking-[0.3em] uppercase transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
             Explore Full Portfolio
           </a>
        </div>
      </div>
    </section>
  );
}
