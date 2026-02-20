import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Fallback image for the hero section since boris-smokrovic is missing
const toolsImg = "https://images.unsplash.com/photo-1589733901241-5d5d9b688c8a?q=80&w=2000";

import extractorImg from "@assets/extractor.png";
import smokerImg from "@assets/smoker.png";
import suitImg from "@assets/suit.png";
import hiveBoxesImg from "@assets/hive-boxes.png";

const equipmentList = [
  {
    title: "Commercial Extractors",
    desc: "Precision-engineered stainless steel for high-volume, cold-extraction efficiency.",
    image: extractorImg
  },
  {
    title: "Industrial Smokers",
    desc: "Professional-grade bellows with a thermal-shield design, crafted for the demands of the modern field.",
    image: smokerImg
  },
  {
    title: "Protective Armor",
    desc: "High-performance ventilation meets archival-grade fabric protection.",
    image: suitImg
  },
  {
    title: "Hive Architecture",
    desc: "Precision-cut Langstroth modular systems, designed for colony longevity and ergonomic handling.",
    image: hiveBoxesImg
  }
];

function EquipmentSection({ item, index }: { item: any, index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.95, 1, 1, 1.05]);

  return (
    <section 
      ref={ref}
      className="h-screen w-full snap-center flex items-center justify-center relative overflow-hidden bg-[#1A1A1A]"
    >
      <motion.div 
        style={{ opacity, scale }}
        className="absolute inset-0 w-full h-full"
      >
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover grayscale opacity-50 transition-all duration-[1.5s] ease-out hover:grayscale-0 hover:opacity-100 hover:scale-105 mix-blend-luminosity hover:mix-blend-normal"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/60 to-transparent pointer-events-none"></div>
      </motion.div>

      <motion.div 
        style={{ opacity, y }}
        className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center justify-start pointer-events-none"
      >
        <div className="md:w-1/2 mb-12 md:mb-0 pointer-events-auto">
          <span className="font-sans text-xs uppercase tracking-[0.4em] text-white/50 mb-6 block">
            0{index + 1} // System
          </span>
          <h2 
            className="text-5xl md:text-7xl text-white mb-8" 
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {item.title}
          </h2>
          <div className="w-16 h-px bg-white/30 mb-8"></div>
          <p 
            className="text-white/70 text-lg md:text-xl font-light tracking-[0.05em] max-w-md leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {item.desc}
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export default function Products() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <div className="bg-[#1A1A1A] text-white h-screen font-sans snap-y snap-mandatory overflow-y-auto overflow-x-hidden relative" ref={containerRef}>
      <div className="absolute top-0 w-full z-50">
        <Header />
      </div>
      
      {/* Hero Section */}
      <section className="h-screen w-full snap-center flex items-center justify-center relative">
        <div className="absolute inset-0">
          <img 
            src={toolsImg} 
            alt="Tools for the Modern Apiary" 
            className="w-full h-full object-cover opacity-30 mix-blend-luminosity grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-[#1A1A1A]/80"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-sans text-white/50 uppercase tracking-[0.4em] text-sm mb-8 block"
          >
            03. The Workshop
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.2, 0.65, 0.3, 0.9] }}
            className="text-6xl md:text-7xl lg:text-8xl text-white leading-tight mb-10"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Tools for the Modern Apiary
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
            className="w-px h-32 bg-white/30 mx-auto mt-16"
          ></motion.div>
        </div>
      </section>

      {/* Product Modules */}
      {equipmentList.map((item, idx) => (
        <EquipmentSection key={idx} item={item} index={idx} />
      ))}

      {/* Global Exit */}
      <section className="min-h-screen w-full snap-start flex flex-col justify-end relative bg-[#1A1A1A]">
        <div className="flex-grow flex flex-col items-center justify-center text-center px-6 mt-32">
          <h2 
            className="text-4xl md:text-6xl text-white mb-6" 
            style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
          >
            Honest work. Pure origin.
          </h2>
          <p className="font-sans text-white/50 tracking-[0.2em] uppercase text-sm mb-16">
            Engineered for the long term
          </p>
          <a 
            href="/about" 
            className="inline-block px-12 py-5 border border-white/20 text-white uppercase tracking-[0.3em] text-xs hover:bg-white hover:text-[#1A1A1A] transition-all duration-700"
          >
            Explore Custom Orders
          </a>
        </div>
        <Footer dark />
      </section>
    </div>
  );
}