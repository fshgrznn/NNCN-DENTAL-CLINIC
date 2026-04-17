import { motion } from 'motion/react';

const doctors = [
  {
    name: "Dr. Neerish Naomi C. Nepomuceno-Reyes",
    role: "Lead Dentist & Aesthetic Specialist",
    image: "https://picsum.photos/seed/dr1/600/800",
  },
  {
    name: "Dr. Kirt John A. Reyes",
    role: "Orthodontist & Implantologist",
    image: "https://picsum.photos/seed/dr2/600/800",
  }
];

export default function AboutUs() {
  return (
    <section id="about" className="py-32 bg-luxury-bone overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-3xl"
          >
            <span className="text-gold-600 text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block underline underline-offset-8 decoration-gold-400">Our Legacy</span>
            <h2 className="text-5xl md:text-7xl font-serif text-luxury-black mb-8 leading-tight">
              Meet the Artisans of Your <br />
              <span className="italic">Perfect Smile</span>
            </h2>
            <p className="text-luxury-black/70 text-lg leading-relaxed mb-12">
              Established in 2019, NNCN Dental Clinic has been at the forefront of premium oral health in Valenzuela City. 
              Our team blends advanced dental science with a personalized touch, ensuring every patient receives the royal treatment they deserve.
            </p>
            
            <div className="flex justify-center gap-16 mb-20">
              <div className="flex flex-col items-center">
                <h4 className="text-4xl font-serif text-gold-700 italic">5k+</h4>
                <p className="text-[10px] uppercase tracking-[0.3em] text-luxury-black/50 font-bold mt-2">Successful Cases</p>
              </div>
              <div className="w-[1px] h-12 bg-gold-400/30"></div>
              <div className="flex flex-col items-center">
                <h4 className="text-4xl font-serif text-gold-700 italic">7+</h4>
                <p className="text-[10px] uppercase tracking-[0.3em] text-luxury-black/50 font-bold mt-2">Years Experience</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {doctors.map((doctor, idx) => (
            <motion.div
              key={doctor.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="group relative flex flex-col items-center text-center"
            >
              <div className="aspect-[4/5] w-full overflow-hidden mb-8 border border-gold-400/20 p-2 bg-white shadow-2xl">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-2xl font-serif text-luxury-black mb-2">{doctor.name}</h3>
              <p className="text-[10px] uppercase tracking-[0.4em] text-gold-600 font-bold">{doctor.role}</p>
              <div className="w-12 h-[1px] bg-gold-400 mt-6 group-hover:w-24 transition-all duration-700"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
