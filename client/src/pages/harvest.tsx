import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Assets
import honeyImg from "@assets/pascal-bullan-k909E1ScuWA-unsplash_1771567323260.jpg";
import pollenImg from "@assets/ChatGPT_Image_Feb_19,_2026,_10_01_29_PM_1771567365941.png";
import royalJellyImg from "@assets/ChatGPT_Image_Feb_19,_2026,_10_00_05_PM_1771567347744.png";
import propolisImg from "@assets/ChatGPT_Image_Feb_19,_2026,_09_57_59_PM_1771567344369.png";
import powderImg from "@assets/lyophilized-powders.png";
import beeswaxImg from "@assets/ChatGPT_Image_Feb_19,_2026,_09_58_50_PM_1771567369134.png";

const chapters = [
  {
    id: "raw-honey",
    title: "Raw Honey",
    subtitle: "The Liquid Sun",
    essence: "Unfiltered. Uncompromised.",
    story: "Sourced from True Source Certified apiaries, our No. 1 Grade Canadian White Honey is the gold standard of purity.",
    image: honeyImg,
  },
  {
    id: "bee-pollen",
    title: "Bee Pollen",
    subtitle: "Nature’s Multivitamin",
    essence: "Concentrated Vitality.",
    story: "A bioavailable powerhouse of B vitamins and minerals to fuel a modern, rhythmic life.",
    image: pollenImg,
  },
  {
    id: "royal-jelly",
    title: "Royal Jelly",
    subtitle: "The Sovereign Elixir",
    essence: "Cognitive Clarity.",
    story: "Rich in rare 10-HDA, our Royal Jelly is curated for mental sharpness and longevity.",
    image: royalJellyImg,
  },
  {
    id: "propolis",
    title: "Propolis",
    subtitle: "The Resin Guard",
    essence: "Biological Defense.",
    story: "Containing over 300 beneficial compounds, this is nature’s answer to immune support.",
    image: propolisImg,
  },
  {
    id: "lyophilized-powders",
    title: "Lyophilized Powders",
    subtitle: "The Future of the Hive",
    essence: "Preserved Potency.",
    story: "Advanced freeze-drying locks in 100% of biological benefits, bridging 35 years of tradition with modern wellness.",
    image: powderImg,
  },
  {
    id: "beeswax",
    title: "Beeswax",
    subtitle: "The Architectural Foundation",
    essence: "Pure Structure.",
    story: "Triple-filtered and chemical-free, representing the foundational strength of our 35-year harvest.",
    image: beeswaxImg,
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
    ["#FDFDFB", "#F9F3E5", "#F2E1B6", "#F9F3E5", "#F2E1B6", "#FDFDFB"]
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
        <div className="h-screen w-full flex flex-col justify-center snap-center relative px-6">
           <div className="text-center max-w-4xl mx-auto">
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
                    className="w-full h-full object-cover object-center"
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
                    >
                      {chapter.title}
                    </h2>
                    <h3 className="font-serif italic text-2xl md:text-3xl text-foreground/70">
                      {chapter.subtitle}
                    </h3>
                  </motion.div>

                  {/* The Story */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ duration: 1, delay: 0.4 }}
                  >
                    <span className="font-sans text-xs uppercase tracking-[0.2em] text-foreground/50 block mb-4">The Story</span>
                    <p className="font-serif text-xl md:text-2xl text-foreground/90 leading-[1.6]">
                      {chapter.story}
                    </p>
                  </motion.div>
                </div>
              </div>

            </div>
          </section>
        ))}

        {/* Footer */}
        <div className="snap-start w-full">
           <Footer />
        </div>
      </div>
    </>
  );
}