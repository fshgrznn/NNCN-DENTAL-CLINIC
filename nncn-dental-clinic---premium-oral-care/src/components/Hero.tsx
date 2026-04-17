import { motion } from 'motion/react';
import { Sparkles, ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[800px] flex flex-col items-center justify-center pt-24 abstract-wave-bg">
      
      {/* Centered Decorative Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* EST. 2019 centered above headline */}
          <div className="flex flex-col items-center mb-8">
            <span className="text-gold-400 text-[10px] font-bold tracking-[0.5em] uppercase opacity-70">Est. 2019</span>
            <div className="w-12 h-[1px] bg-gold-500/30 mt-3"></div>
          </div>

          <h1 className="flex flex-col items-center mb-10">
            <span className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight font-light mb-2">
              The New Face of
            </span>
            <span className="text-6xl md:text-8xl lg:text-9xl font-serif luxury-gradient-text italic font-bold leading-[0.9] tracking-tighter">
              Excellence
            </span>
          </h1>

          <p className="max-w-xl text-gold-50/60 text-base md:text-lg font-light tracking-wide mb-14 leading-relaxed mx-auto">
            Experience world-class dental care where artistry meets technology. 
            At NNCN Dental, we don't just fix smiles — we craft them with precision and elegance.
          </p>

          <motion.a
            whileHover={{ scale: 1.05, translateY: -5 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="bg-gold-500 text-white px-14 py-5 rounded-full text-xs font-bold tracking-[0.3em] uppercase glow-button relative group overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              Discover Your Smile <Sparkles size={16} />
            </span>
            <div className="absolute inset-0 bg-gold-400 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
          </motion.a>
        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 cursor-pointer group"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-gold-500/0 via-gold-500 to-gold-500 group-hover:h-24 transition-all duration-700"></div>
        <ArrowDown className="text-gold-500 animate-bounce" size={16} />
      </motion.div>
      
      {/* Subtle Side Markers */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-10 items-center opacity-20">
         <div className="w-[1px] h-32 bg-gold-400"></div>
         <span className="vertical-text text-gold-200">Bespoke Oral Art</span>
      </div>
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-10 items-center opacity-20">
         <span className="vertical-text text-gold-200">Unrivaled Precision</span>
         <div className="w-[1px] h-32 bg-gold-400"></div>
      </div>
    </section>
  );
}
