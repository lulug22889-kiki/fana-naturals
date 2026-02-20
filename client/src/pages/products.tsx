import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import toolsImg from "@assets/boris-smokrovic-gr7ZkoZnHXU-unsplash_1771543066987.jpg";
import hiveImg from "@assets/ChatGPT_Image_Feb_20,_2026,_10_49_48_AM_1771613404291.png";
import smokerImg from "@assets/ChatGPT_Image_Feb_20,_2026,_11_00_54_AM_1771614068085.png";
import extractorImg from "@assets/4c1fce94-4551-4014-b71b-dcca7873943f_1771615691603.png";
import gearImg from "@assets/ChatGPT_Image_Feb_20,_2026,_11_32_12_AM_1771615951722.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const equipmentList = [
  {
    title: "Commercial Extractors",
    desc: "High-yield centrifugal systems built with surgical-grade stainless steel for maximum efficiency and pure extraction.",
    image: extractorImg,
    imageClassName: "object-cover"
  },
  {
    title: "Precision Smokers",
    desc: "Durable, heat-shielded bellows designed for consistent, cool smoke to keep the colony calm and safe.",
    image: smokerImg,
    imageClassName: "mix-blend-multiply object-contain p-8"
  },
  {
    title: "Protective Gear",
    desc: "Ventilated, multi-layer apiary suits offering complete sting protection without compromising mobility.",
    image: gearImg,
    imageClassName: "object-cover"
  },
  {
    title: "Hive Architecture",
    desc: "Precision-milled Langstroth boxes and frames, kiln-dried for longevity against the elements.",
    image: hiveImg,
    imageClassName: "mix-blend-multiply object-contain p-12"
  }
];

export default function Products() {
  return (
    <div className="pt-24 min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden bg-[#2D2D2D]">
        <motion.div 
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img 
            src={toolsImg} 
            alt="Professional beekeeping tools" 
            className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity grayscale"
          />
        </motion.div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-sans text-accent uppercase tracking-[0.3em] text-xs mb-6 block"
          >
            Professional Equipment
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-[#FDFDFB] leading-tight mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            The Workshop
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="font-sans text-[#FDFDFB]/70 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto"
          >
            Advanced technology meets 35 years of apicultural heritage.
          </motion.p>
        </div>
      </section>

      {/* Intro Philosophy */}
      <section className="py-24 md:py-32 px-6 bg-[#FDFDFB]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8 leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              "We build the tools we wished we had. Reliable quality and advanced engineering for the modern commercial apiary."
            </h2>
            <div className="w-16 h-px bg-accent mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* Equipment Grid */}
      <section className="py-24 bg-[#F9F3E5]">
        <div className="max-w-[1400px] mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16"
          >
            {equipmentList.map((item, idx) => (
              <motion.div key={idx} variants={fadeUp} className="group cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden mb-8 bg-[#E5DFD3] rounded-sm flex items-center justify-center">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className={`w-full h-full transition-all duration-[2s] group-hover:scale-105 opacity-85 sepia-[0.35] saturate-[0.8] brightness-[1.05] contrast-[0.95] group-hover:sepia-0 group-hover:saturate-100 group-hover:brightness-100 group-hover:contrast-100 group-hover:opacity-100 ${item.imageClassName || 'object-cover'}`}
                  />
                </div>
                <div className="flex items-start gap-6">
                  <span className="font-sans text-xs uppercase tracking-[0.2em] text-accent mt-2">
                    0{idx + 1}
                  </span>
                  <div>
                    <h3 className="font-serif text-3xl mb-4 text-foreground" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      {item.title}
                    </h3>
                    <p className="font-sans text-foreground/70 leading-relaxed font-light tracking-wide">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Specs CTA */}
      <section className="py-32 px-6 bg-[#2D2D2D] text-center">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="font-serif text-4xl md:text-5xl text-[#FDFDFB] mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Custom Industrial Orders
            </h2>
            <p className="font-sans text-[#FDFDFB]/70 mb-12 font-light tracking-wide leading-relaxed">
              Every apiary operates on its own rhythm. We offer bespoke engineering modifications and bulk supply logistics to scale with your operation.
            </p>
            <a 
              href="/about" 
              className="inline-block px-12 py-4 border border-[#FDFDFB]/20 text-[#FDFDFB] uppercase tracking-[0.2em] text-sm hover:bg-[#FDFDFB] hover:text-[#2D2D2D] transition-all duration-500 font-sans"
            >
              Inquire for Specifications
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}