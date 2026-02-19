import { useEffect } from "react";
import { Search, User, ShoppingBag, Heart, Droplets, Lightbulb, Zap } from "lucide-react";
import { motion, Variants } from "framer-motion";

// Assets imported dynamically as per instructions
import beekeeperImg from "@assets/Screenshot_2026-02-18_at_10.54.50_AM_1771543079883.png";
import honeycombImg from "@assets/pascal-bullan-k909E1ScuWA-unsplash_1771543075444.jpg";
import beeFlowerImg from "@assets/boris-smokrovic-gr7ZkoZnHXU-unsplash_1771543066987.jpg";

export default function Home() {
  // Smooth scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col relative overflow-hidden">
      {/* Subtle background texture/grain could go here */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.015] mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-50"></div>

      {/* Header (The Minimalist) */}
      <header className="fixed top-0 w-full z-40 glass-nav py-6 px-8 md:px-16 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex-1 md:hidden">
            {/* Mobile menu trigger could go here */}
            <div className="w-6 h-px bg-foreground mb-1.5"></div>
            <div className="w-4 h-px bg-foreground"></div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="flex-1 md:flex-none text-center md:text-left"
          >
            <a href="/" className="font-serif text-2xl tracking-[0.2em] font-medium text-foreground uppercase">
              Fana Naturals
            </a>
          </motion.div>

          <nav className="hidden md:flex flex-1 justify-center space-x-12">
            {[
              { name: 'Shop', href: '/products' },
              { name: 'Journal', href: '#' },
              { name: 'Craft', href: '/products' },
              { name: 'About', href: '/about' }
            ].map((item) => (
              <a 
                key={item.name} 
                href={item.href}
                className="text-xs uppercase tracking-widest text-foreground/70 hover:text-foreground transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-2 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          <div className="flex-1 flex justify-end space-x-6 items-center">
            <button className="text-foreground/70 hover:text-foreground transition-colors" data-testid="button-search">
              <Search strokeWidth={1} className="w-5 h-5" />
            </button>
            <button className="hidden md:block text-foreground/70 hover:text-foreground transition-colors" data-testid="button-account">
              <User strokeWidth={1} className="w-5 h-5" />
            </button>
            <button className="text-foreground/70 hover:text-foreground transition-colors relative" data-testid="button-cart">
              <ShoppingBag strokeWidth={1} className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-accent rounded-full"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section (The Sun-Drenched Meadow) */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={beekeeperImg} 
            alt="Beekeeper in rapeseed field" 
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle gradient overlay to ensure text readability while keeping the sun-drenched vibe */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-background/90"></div>
        </motion.div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-tight drop-shadow-md"
            style={{ textShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
          >
            Captured Sunlight,<br />
            <span className="italic opacity-90">Bottled Time.</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <button 
              className="px-10 py-4 border border-white/40 text-white uppercase tracking-[0.2em] text-sm hover:bg-white hover:text-primary transition-all duration-500 backdrop-blur-sm bg-white/5"
              data-testid="button-explore"
            >
              Explore the Harvest
            </button>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section (The Alchemist’s Note) */}
      <section className="py-32 md:py-48 px-6 bg-background">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="w-px h-16 bg-accent mx-auto mb-12 opacity-50"></div>
          <p className="font-serif text-2xl md:text-4xl text-foreground/80 leading-relaxed md:leading-loose text-balance">
            "Fana Naturals is born from thirty years of hands-on beekeeping. We treat honey as <span className="text-accent italic">liquid alchemy</span> and tools as craftsmen’s artifacts."
          </p>
        </motion.div>
      </section>

      {/* Featured Categories (The Grid) */}
      <section className="py-20 px-6 md:px-12 max-w-[1400px] mx-auto w-full">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Card A (Large): Raw Honey */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex-[3] group relative overflow-hidden hover-lift hover-shadow-soft aspect-[4/5] md:aspect-auto"
          >
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            <img 
              src={honeycombImg} 
              alt="Raw Honeycomb" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-20 flex flex-col justify-end p-10 md:p-16">
              <span className="text-accent text-xs uppercase tracking-widest mb-3 block">Pure Nectar</span>
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Raw Honey</h2>
              <div className="w-0 group-hover:w-16 h-px bg-white transition-all duration-500"></div>
            </div>
          </motion.div>

          {/* Card B (Small): The Craft */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex-[2] group relative overflow-hidden hover-lift hover-shadow-soft flex flex-col"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-muted/20">
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img 
                src={beeFlowerImg} 
                alt="The Craft" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter grayscale-[20%]"
              />
              <div className="absolute bottom-0 left-0 p-8 z-20 w-full bg-gradient-to-t from-black/40 to-transparent">
                <span className="text-accent text-xs uppercase tracking-widest mb-2 block">Artisanal Tools</span>
                <h2 className="font-serif text-3xl text-white">The Craft</h2>
              </div>
            </div>
            <div className="p-8 bg-white flex-1 flex flex-col justify-center border border-t-0 border-foreground/5">
              <p className="text-foreground/60 text-sm leading-relaxed mb-6">
                Professional beekeeping tools curated for the modern apiarist. Featuring metallic and wooden textures that age beautifully with use.
              </p>
              <a href="#craft" className="text-xs uppercase tracking-widest text-primary font-medium hover:text-accent transition-colors inline-flex items-center group/link">
                View Collection
                <span className="ml-2 transform group-hover/link:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition (The Core) */}
      <section className="py-32 bg-white mt-12 border-y border-foreground/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <h2 className="font-serif text-3xl md:text-4xl">Our Core</h2>
            <div className="w-12 h-px bg-accent mx-auto mt-6"></div>
          </div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8"
          >
            {[
              { title: "Love of Honeybees", icon: Heart, desc: "A deep reverence for the swarm and their delicate ecosystem." },
              { title: "Passion for Beekeeping", icon: Droplets, desc: "Thirty years of hands-on dedication to the apicultural arts." },
              { title: "Entrepreneurial Spirit", icon: Lightbulb, desc: "Pioneering sustainable models for modern beekeepers." },
              { title: "Innovation", icon: Zap, desc: "Elevating traditional methods through thoughtful design." }
            ].map((value, idx) => (
              <motion.div key={idx} variants={fadeUp} className="text-center group">
                <div className="mb-6 mx-auto w-16 h-16 rounded-full border border-foreground/10 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/5 transition-colors duration-500">
                  <value.icon strokeWidth={1} className="w-6 h-6 text-foreground/70 group-hover:text-accent transition-colors duration-500" />
                </div>
                <h3 className="font-serif text-xl mb-3 text-foreground">{value.title}</h3>
                <p className="text-sm text-foreground/50 leading-relaxed text-balance">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 md:px-12 bg-background text-center flex flex-col items-center">
        <h2 className="font-serif text-3xl tracking-[0.2em] uppercase mb-12">Fana Naturals</h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 mb-16 w-full max-w-4xl border-b border-foreground/10 pb-16">
          <div className="flex space-x-8">
            {['Instagram', 'Pinterest', 'Journal'].map((social) => (
              <a key={social} href="#" className="text-xs uppercase tracking-widest text-foreground/60 hover:text-foreground transition-colors">
                {social}
              </a>
            ))}
          </div>
          
          <div className="flex w-full max-w-md">
            <input 
              type="email" 
              placeholder="Join our newsletter" 
              className="bg-transparent border-b border-foreground/20 py-2 px-0 w-full focus:outline-none focus:border-foreground transition-colors text-sm rounded-none"
            />
            <button className="text-xs uppercase tracking-widest text-foreground border-b border-foreground py-2 px-4 hover:text-accent hover:border-accent transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between w-full max-w-[1400px] text-xs text-foreground/40">
          <p>Fana Naturals © 2026 | Captured Sunlight, Bottled Time.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}