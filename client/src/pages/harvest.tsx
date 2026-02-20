import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Heart, Droplets, Lightbulb, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import beePollenImg from "@assets/bigstock-Bee-Pollen-24241154_1771568204060.jpg";
import rawHoneyImg from "@assets/屏幕快照_2016-09-20_17.53.10_1771568379514.png";
import royalJellyImg from "@assets/royal_jelly_1771568486547.png";
import heroBgImg from "@assets/pascal-bullan-k909E1ScuWA-unsplash_1771568577485.jpg";
import propolisImg from "@assets/ChatGPT_Image_Feb_19,_2026,_09_57_59_PM_1771568750106.png";
import beeswaxImg from "@assets/ChatGPT_Image_Feb_19,_2026,_09_58_50_PM_1771568984729.png";
import powderImg from "@assets/ChatGPT_Image_Feb_19,_2026,_10_32_58_PM_1771569199376.png";

const chapters = [
  {
    id: "raw-honey",
    title: "Raw Honey",
    subtitle: "The Liquid Sun",
    essence: "Unfiltered. Uncompromised.",
    story: "Sourced from True Source Certified apiaries, our No. 1 Grade Canadian White Honey is the gold standard of purity.",
    image: rawHoneyImg,
    imageClassName: "brightness-[1.05] contrast-[1.05] saturate-100",
  },
  {
    id: "bee-pollen",
    title: "Bee Pollen",
    subtitle: "Nature’s Multivitamin",
    essence: "Concentrated Vitality.",
    story: "A bioavailable powerhouse of B vitamins and minerals to fuel a modern, rhythmic life.",
    image: beePollenImg,
    imageClassName: "mix-blend-multiply contrast-110 brightness-95 saturate-[1.2]",
  },
  {
    id: "royal-jelly",
    title: "Royal Jelly",
    subtitle: "The Sovereign Elixir",
    essence: "Cognitive Clarity.",
    story: "Rich in rare 10-HDA, our Royal Jelly is curated for mental sharpness and longevity.",
    image: royalJellyImg,
    imageClassName: "brightness-[1.02] contrast-[1.05] saturate-[1.1]",
  },
  {
    id: "propolis",
    title: "Propolis",
    subtitle: "The Resin Guard",
    essence: "Biological Defense.",
    story: "Containing over 300 beneficial compounds, this is nature’s answer to immune support.",
    image: propolisImg,
    imageClassName: "mix-blend-multiply contrast-[1.05] brightness-[0.98] saturate-[1.15]",
  },
  {
    id: "freeze-dried-powders",
    title: "Freeze-Dried Powders",
    subtitle: "The Future of the Hive",
    essence: "Preserved Potency.",
    story: "An exclusive collection of freeze-dried royal jelly, queen larva, pure honey, and drone powders. Advanced lyophilization preserves absolute biological integrity, delivering the highest quality therapeutic benefits to our discerning customers.",
    image: powderImg,
    imageClassName: "mix-blend-multiply contrast-[1.02] brightness-[1.0] saturate-[1.05]",
  },
  {
    id: "beeswax",
    title: "Beeswax",
    subtitle: "The Architectural Foundation",
    essence: "Pure Structure.",
    story: "Triple-filtered and chemical-free, representing the foundational strength of our 35-year harvest.",
    image: beeswaxImg,
    imageClassName: "mix-blend-multiply contrast-[1.02] brightness-[0.98] saturate-[1.2]",
  }
];

export default function Harvest() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    container: containerRef
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Ivory White (#FDFDFB) to Warm Honey Gold (#F2E1B6) and back
  // Colors transition fluidly between the items
  const backgroundColor = useTransform(
    smoothProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    ["#F9F3E5", "#FDFDFB", "#F2E1B6", "#F9F3E5", "#F2E1B6", "#FDFDFB"]
  );

  // Magnetic Cursor
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <Header />
      
      {/* Magnetic Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50 mix-blend-difference hidden md:block"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 3 : 1,
          backgroundColor: isHovering ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.2)",
          borderColor: isHovering ? "rgba(255,255,255,1)" : "rgba(255,255,255,1)",
          borderWidth: isHovering ? "0px" : "1px"
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      />

      {/* Dynamic Background */}
      <motion.div 
        className="fixed inset-0 z-[-1]"
        style={{ backgroundColor }}
      />

      <div 
        ref={containerRef}
        className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {/* Intro Slide */}
        <div className="h-screen w-full flex flex-col justify-center snap-center relative px-6 overflow-hidden">
           {/* Faded and blurred background image */}
           <motion.div 
             className="absolute inset-0 z-[-1] opacity-50"
             initial={{ scale: 1.1, filter: "blur(20px)" }}
             animate={{ scale: 1, filter: "blur(8px)" }}
             transition={{ duration: 3, ease: "easeOut" }}
           >
             <img 
               src={heroBgImg} 
               alt="Honeycomb background" 
               className="w-full h-full object-cover object-center mix-blend-multiply sepia-[0.3] saturate-[1.3]"
             />
             <div className="absolute inset-0 bg-gradient-to-b from-[#F9F3E5]/50 via-transparent to-[#F9F3E5]"></div>
           </motion.div>

           <div className="text-center max-w-4xl mx-auto relative z-10">
             <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.2 }}
                className="text-5xl md:text-7xl lg:text-8xl font-serif text-foreground mb-8 leading-tight drop-shadow-sm"
             >
               The Harvest
             </motion.h1>
             <motion.p
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 1, delay: 0.6 }}
               className="font-sans uppercase tracking-[0.2em] text-sm text-foreground/60"
             >
               Scroll to explore the collection
             </motion.p>
           </div>
           
           <motion.div 
             className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[1px] h-24 bg-foreground/20 overflow-hidden"
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 1, delay: 1 }}
           >
             <motion.div 
               className="w-full h-1/2 bg-foreground"
               animate={{ y: ["-100%", "200%"] }}
               transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
             />
           </motion.div>
        </div>

        {chapters.map((chapter, index) => (
          <section 
            key={chapter.id} 
            className="h-screen w-full snap-center flex items-center justify-center relative overflow-hidden px-6 lg:px-16"
          >
            <div className="max-w-[1400px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
              
              {/* Image side - alternating layout */}
              <div className={`lg:col-span-6 h-[40vh] lg:h-[70vh] w-full relative ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <motion.div 
                  initial={{ opacity: 0, scale: 1.05 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-20%" }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full overflow-hidden relative group"
                >
                  <motion.img 
                    src={chapter.image} 
                    alt={chapter.title}
                    className={`w-full h-full object-cover object-center ${chapter.imageClassName || ''}`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                  />
                  {/* Subtle vignette for editorial feel */}
                  <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.05)] pointer-events-none" />
                </motion.div>
              </div>

              {/* Text side */}
              <div className={`lg:col-span-6 flex flex-col justify-center ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <div className="max-w-xl">
                  {/* The Essence */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="mb-8 lg:mb-12"
                  >
                    <span className="font-sans text-xs uppercase tracking-[0.2em] text-foreground/50 block mb-2">The Essence</span>
                    <p className="font-sans font-light uppercase tracking-[0.2em] text-xs md:text-sm text-foreground/80 leading-relaxed">
                      {chapter.essence}
                    </p>
                  </motion.div>

                  {/* Title & Subtitle */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="mb-8 lg:mb-12 relative z-10 cursor-pointer"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  >
                    <h2 
                      className="font-serif text-5xl md:text-7xl text-foreground mb-4 leading-none"
                      data-testid={`title-${chapter.id}`}
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {chapter.title}
                    </h2>
                    <h3 className="font-serif italic text-2xl md:text-3xl text-foreground/70" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      {chapter.subtitle}
                    </h3>
                  </motion.div>

                  {/* The Story */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ duration: 1, delay: 0.8 }}
                  >
                    <span className="font-sans text-xs uppercase tracking-[0.2em] text-foreground/50 block mb-4">The Story</span>
                    <p className="font-serif text-xl md:text-2xl text-foreground/90 leading-[1.6]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      {chapter.story}
                    </p>
                  </motion.div>
                </div>
              </div>

            </div>
          </section>
        ))}

        {/* Transition: Our Core */}
        <section className="h-screen w-full flex items-center justify-center snap-center relative px-6">
          <div className="max-w-[1200px] w-full mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } }
              }}
              className="text-center mb-20"
            >
              <motion.h2 
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 1 } } }} 
                className="font-serif text-4xl md:text-5xl text-foreground mb-6 tracking-wide"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Our Core
              </motion.h2>
              <motion.div 
                variants={{ hidden: { opacity: 0, scaleX: 0 }, visible: { opacity: 1, scaleX: 1, transition: { duration: 1 } } }} 
                className="w-12 h-[1px] bg-[#D4A017] mx-auto opacity-70"
              />
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
              }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8"
            >
              {[
                { title: "Love of Honeybees", icon: Heart, desc: "A deep reverence for the swarm\nand their delicate ecosystem." },
                { title: "Passion for Beekeeping", icon: Droplets, desc: "Thirty years of hands-on\ndedication to the apicultural arts." },
                { title: "Entrepreneurial Spirit", icon: Lightbulb, desc: "Pioneering sustainable models\nfor modern beekeepers." },
                { title: "Innovation", icon: Zap, desc: "Elevating traditional methods\nthrough thoughtful design." }
              ].map((value, idx) => (
                <motion.div 
                  key={idx} 
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 1 } } }} 
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-[72px] h-[72px] rounded-full border border-foreground/10 flex items-center justify-center mb-8 group-hover:border-[#D4A017] transition-colors duration-700">
                    <value.icon strokeWidth={1} className="w-6 h-6 text-foreground/60 group-hover:text-[#D4A017] transition-colors duration-700" />
                  </div>
                  <h3 className="font-serif text-lg md:text-xl text-foreground/90 mb-4 tracking-wide" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{value.title}</h3>
                  <p className="font-sans text-xs md:text-sm text-foreground/50 leading-[1.8] tracking-[0.05em] font-light whitespace-pre-line">
                    {value.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <div className="snap-start w-full">
           <Footer />
        </div>
      </div>
    </>
  );
}