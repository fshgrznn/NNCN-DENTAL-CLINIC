export default function Footer() {
  return (
    <footer className="bg-luxury-black py-20 border-t border-gold-400/10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="flex flex-col items-center mb-12">
          <span className="text-3xl font-serif luxury-gradient-text font-bold mb-2">NNCN DENTAL</span>
          <div className="w-12 h-[1px] bg-gold-500 mb-6"></div>
          <p className="max-w-md text-gold-50/40 text-sm leading-relaxed mb-8">
            Providing premium oral care and aesthetic transformations since 2019. Join our community of elite smiles.
          </p>
          <div className="flex gap-12 text-[10px] text-gold-300 font-bold tracking-[0.3em] uppercase">
            <a href="#" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 text-white/20 text-[10px] uppercase tracking-[0.2em] flex flex-col md:flex-row justify-between items-center gap-6">
          <p>© 2024 NNCN DENTAL CLINIC. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6 italic">
            <span>Redefining Aesthetics</span>
            <span>Crafting Excellence</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
