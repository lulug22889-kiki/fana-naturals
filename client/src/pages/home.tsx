import { useEffect } from "react";
import { Heart, Droplets, Lightbulb, Zap } from "lucide-react";
import { motion, Variants } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Assets
import heroImg from "@assets/bigstock-Bee-Hives-On-Lavender-Fields--87121574_1771627049512.jpg";

// New Assets
import hiveEntranceImg from "@assets/damien-tupinier-Q5rMCWwspxc-unsplash_1771552104262.jpg";
import honeycombConeImg from "@assets/david-foodphototasty-P32HrGhzSB4-unsplash_1771552107351.jpg";
import beeFlowerImg from "@assets/mamun-srizon-qyZAmc-8M1s-unsplash_1771552111332.jpg";
import macroHoneycombImg from "@assets/jonas-hensel-3Cpws7ibtfo-unsplash_1771552113678.jpg";
import drippingHoneycombImg from "@assets/pascal-bullan-k909E1ScuWA-unsplash_1771552118178.jpg";
import royalJellyImg from "@assets/royal_jelly_1771553458816.png";
import logoImg from "@assets/fana_naturals_transparent.png";
import coreImg from "@assets/Screenshot_2026-02-19_at_5.41.11_PM_1771552518642.png";

export default function Home() {
  // Smooth scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Viscous Fade-in (staggered 500ms delay) for text
  const viscousFade: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 1.2, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    }
  };

  const viscousStagger: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.2
      }
    }
  };

  const fastStagger: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F6F2] flex flex-col relative overflow-hidden text-foreground">
      {/* Liquid Scroll effect using smooth CSS scroll behavior on html but we simulate it via normal scrolling with generous paddings and slow transitions */}

      <Header />

      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 z-0 bg-[#111]"
        >
          <img 
            src={heroImg} 
            alt="Beehives in lavender field" 
            className="w-full h-full object-cover object-center opacity-90 contrast-[1.1] saturate-[1.1]"
          />
          {/* Premium cinematic gradient overlay for high-end feel */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-background/95"></div>
        </motion.div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-[1.1] drop-shadow-md tracking-tight"
            style={{ textShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
          >
            The Art of Apiculture,<br />
            <span className="italic font-light opacity-90 tracking-normal text-4xl md:text-5xl lg:text-6xl mt-4 block">Pure Origin & Precision Design.</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <a 
              href="/harvest"
              className="inline-block px-10 py-4 border border-white/40 text-white uppercase tracking-[0.2em] text-sm hover:bg-white hover:text-primary transition-all duration-500 backdrop-blur-sm bg-white/5"
              data-testid="link-explore"
            >
              Explore the Harvest
            </a>
          </motion.div>
        </div>
      </section>

      {/* Section 01: The Origin - Heritage & Philosophy */}
      <section className="py-32 md:py-48 px-6 bg-[#F7F6F2] relative z-10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={viscousStagger}
            className="lg:col-span-5 lg:sticky lg:top-48"
          >
            <motion.h2 variants={viscousFade} className="font-serif text-4xl md:text-6xl text-foreground mb-8 leading-tight">
              Rooted in the Wild.
            </motion.h2>
            <motion.div variants={viscousFade} className="w-16 h-px bg-accent"></motion.div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={viscousStagger}
            className="lg:col-span-7"
          >
            <motion.p variants={viscousFade} className="font-sans text-lg md:text-2xl text-foreground/80 leading-relaxed tracking-[0.05em] font-light">
              "We are beekeepers and innovators. For over thirty-five years, Fana Naturals has stood at the forefront of the apicultural industry. We specialize in premium hive products—from pure Canadian honey and potent bee pollen to advanced freeze-dried royal jelly and drone powders. Beyond the harvest, we equip the modern commercial apiary with precision tools and industrial-grade extraction machinery, ensuring that the legacy of beekeeping scales with absolute purity."
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Transition: Our Core */}
      <section className="py-24 bg-[#F7F6F2]">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={viscousStagger}
            className="text-center mb-20"
          >
            <motion.h2 variants={viscousFade} className="font-serif text-3xl md:text-4xl text-[#2D2D2D] mb-6 tracking-wide">
              Our Core
            </motion.h2>
            <motion.div variants={viscousFade} className="w-12 h-[1px] bg-[#D4A017] mx-auto opacity-70"></motion.div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fastStagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8"
          >
            {[
              { title: "Love of Honeybees", icon: Heart, desc: "A deep reverence for the swarm\nand their delicate ecosystem." },
              { title: "Passion for Beekeeping", icon: Droplets, desc: "Thirty years of hands-on\ndedication to the apicultural arts." },
              { title: "Entrepreneurial Spirit", icon: Lightbulb, desc: "Pioneering sustainable models\nfor modern beekeepers." },
              { title: "Innovation", icon: Zap, desc: "Elevating traditional methods\nthrough thoughtful design." }
            ].map((value, idx) => (
              <motion.div key={idx} variants={viscousFade} className="flex flex-col items-center text-center group">
                <div className="w-[72px] h-[72px] rounded-full border border-[#2D2D2D]/10 flex items-center justify-center mb-8 group-hover:border-[#D4A017] transition-colors duration-700">
                  <value.icon strokeWidth={1} className="w-6 h-6 text-[#2D2D2D]/60 group-hover:text-[#D4A017] transition-colors duration-700" />
                </div>
                <h3 className="font-serif text-lg md:text-xl text-[#2D2D2D]/90 mb-4 tracking-wide">{value.title}</h3>
                <p className="font-sans text-xs md:text-sm text-[#2D2D2D]/50 leading-[1.8] tracking-[0.05em] font-light whitespace-pre-line">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 02: The Harvest - Nature’s Living Chemistry */}
      <section className="py-32 bg-[#F7F6F2] relative">
        <div className="max-w-[1400px] mx-auto px-6 mb-24">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={viscousStagger}
            className="max-w-3xl"
          >
            <motion.h2 variants={viscousFade} className="font-serif text-4xl md:text-5xl text-foreground mb-8">
              Nature’s Living Chemistry
            </motion.h2>
            <motion.p variants={viscousFade} className="font-sans text-lg text-foreground/70 leading-relaxed tracking-[0.05em] font-light">
              Our collection spans the full vitality of the hive. From our signature No. 1 Grade Canadian White Honey to potent Floral Pollen, Royal Jelly, and Propolis. Every product is a result of meticulous sourcing and True Source Certified integrity.
            </motion.p>
          </motion.div>
        </div>

        {/* Product Ritual Gallery */}
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-24">
            
            {/* Item 1 */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={viscousStagger}
              className="group"
            >
              <motion.div variants={viscousFade} className="aspect-[4/5] overflow-hidden mb-8 bg-black/5">
                <img src={drippingHoneycombImg} alt="No. 1 Canadian White Honey" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" />
              </motion.div>
              <motion.div variants={viscousFade}>
                <span className="text-xs uppercase tracking-[0.2em] text-accent mb-4 block font-sans">01</span>
                <h3 className="font-serif text-3xl mb-4">No. 1 Canadian White Honey</h3>
                <p className="font-sans text-foreground/60 leading-relaxed tracking-[0.05em] font-light">
                  Liquid sunshine from the prairies, cold-filtered to retain raw enzymes and floral notes.
                </p>
              </motion.div>
            </motion.div>

            {/* Item 2 (offset) */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={viscousStagger}
              className="group md:mt-32"
            >
              <motion.div variants={viscousFade} className="aspect-[4/5] overflow-hidden mb-8 bg-black/5">
                <img src={beeFlowerImg} alt="Potent Floral Pollen" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" />
              </motion.div>
              <motion.div variants={viscousFade}>
                <span className="text-xs uppercase tracking-[0.2em] text-accent mb-4 block font-sans">02</span>
                <h3 className="font-serif text-3xl mb-4">Potent Floral Pollen</h3>
                <p className="font-sans text-foreground/60 leading-relaxed tracking-[0.05em] font-light">
                  Nature's multi-vitamin; a polychrome mosaic of pure floral energy collected at the peak of bloom.
                </p>
              </motion.div>
            </motion.div>

            {/* Item 3 */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={viscousStagger}
              className="group"
            >
              <motion.div variants={viscousFade} className="aspect-[4/5] overflow-hidden mb-8 bg-black/5">
                <img 
                  src={royalJellyImg} 
                  alt="Pure Royal Jelly" 
                  className="w-full h-full object-cover object-center contrast-[1.05] brightness-[0.95] sepia-[.05] transition-transform duration-[2s] group-hover:scale-105" 
                />
              </motion.div>
              <motion.div variants={viscousFade}>
                <span className="text-xs uppercase tracking-[0.2em] text-accent mb-4 block font-sans">03</span>
                <h3 className="font-serif text-3xl mb-4">Pure Royal Jelly</h3>
                <p className="font-sans text-foreground/60 leading-relaxed tracking-[0.05em] font-light">
                  The pearlescent elixir of the Queen Bee, a potent concentration of bioactive proteins.
                </p>
              </motion.div>
            </motion.div>

            {/* Item 4 (offset) */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={viscousStagger}
              className="group md:mt-32"
            >
              <motion.div variants={viscousFade} className="aspect-[4/5] overflow-hidden mb-8 bg-black/5">
                <img src={hiveEntranceImg} alt="Raw Propolis" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" />
              </motion.div>
              <motion.div variants={viscousFade}>
                <span className="text-xs uppercase tracking-[0.2em] text-accent mb-4 block font-sans">04</span>
                <h3 className="font-serif text-3xl mb-4">Raw Propolis</h3>
                <p className="font-sans text-foreground/60 leading-relaxed tracking-[0.05em] font-light">
                  The sentinel’s resin; a powerful amber shield harvested to support natural resilience.
                </p>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Section 03: The Workshop - Equipment & Innovation */}
      <section className="py-32 md:py-48 px-6 bg-[#2D2D2D] text-[#F7F6F2] relative">
        <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none">
           <img src={macroHoneycombImg} alt="Background texture" className="w-full h-full object-cover" />
        </div>
        
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={viscousStagger}
            className="md:col-span-8 md:col-start-3 text-center"
          >
            <motion.h2 variants={viscousFade} className="font-serif text-4xl md:text-6xl mb-10 leading-tight">
              Tools for the Modern Apiary.
            </motion.h2>
            <motion.p variants={viscousFade} className="font-sans text-lg md:text-xl text-white/70 leading-relaxed tracking-[0.05em] font-light">
              Innovation that respects tradition. We provide commercial-grade supplies and high-performance machinery designed by those who have spent a lifetime in the field. We bring the industry’s most advanced technologies to beekeepers who demand durability.
            </motion.p>
            <motion.div variants={viscousFade} className="mt-16">
              <a href="/products" className="inline-block border-b border-accent pb-2 text-accent uppercase tracking-[0.15em] text-sm font-sans hover:text-white hover:border-white transition-colors duration-500">
                Explore the Workshop
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 04: The Global Pulse - Authority & Export */}
      <section className="py-32 bg-[#F7F6F2]">
        <div className="max-w-[1400px] mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={viscousStagger}
            className="flex flex-col md:flex-row items-end justify-between gap-12 border-b border-foreground/10 pb-24"
          >
            <div className="max-w-2xl">
              <motion.h2 variants={viscousFade} className="font-serif text-4xl md:text-5xl text-foreground mb-8 leading-tight">
                From Langley to the Global Hive.
              </motion.h2>
              <motion.p variants={viscousFade} className="font-sans text-lg text-foreground/70 leading-relaxed tracking-[0.05em] font-light">
                Based in British Columbia, our reach is worldwide. We link the purity of Canadian agriculture with the demands of the global market, establishing a golden standard for transparency in the honey trade.
              </motion.p>
            </div>
            <motion.div variants={viscousFade} className="w-24 h-24 rounded-full border border-accent flex items-center justify-center shrink-0 flex-col">
              <span className="text-xs uppercase tracking-widest text-accent font-sans">Est.</span>
              <span className="font-serif text-xl">1991</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}