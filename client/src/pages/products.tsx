import { motion } from "framer-motion";
import honeycombImg from "@assets/pascal-bullan-k909E1ScuWA-unsplash_1771543075444.jpg";
import toolsImg from "@assets/boris-smokrovic-gr7ZkoZnHXU-unsplash_1771543066987.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

export default function Products() {
  return (
    <div className="pt-24 min-h-screen">
      {/* Section A: The Harvest (Bright) */}
      <section className="bg-background py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <span className="text-accent uppercase tracking-[0.3em] text-xs mb-6 block font-medium">Natural Gifts</span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
                The Harvest
              </h2>
              <p className="text-lg text-foreground/70 mb-10 max-w-md leading-relaxed">
                Captured Sunlight from Canadian No. 1 White Honey. True Source Certified purity.
              </p>
              <div className="flex gap-4">
                <div className="px-4 py-2 bg-white/50 border border-foreground/5 rounded-full text-xs uppercase tracking-widest font-medium">Pure</div>
                <div className="px-4 py-2 bg-white/50 border border-foreground/5 rounded-full text-xs uppercase tracking-widest font-medium">Certified</div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="aspect-square overflow-hidden rounded-2xl shadow-2xl"
            >
              <img 
                src={honeycombImg} 
                alt="Macro honeycomb texture" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section B: The Craft (Dark) */}
      <section className="bg-[#2D2D2D] py-32 px-6 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="order-2 lg:order-1 relative"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-lg grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl">
                <img 
                  src={toolsImg} 
                  alt="Professional beekeeping tools" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-accent/20 rounded-full blur-3xl -z-10"></div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="order-1 lg:order-2"
            >
              <span className="text-accent uppercase tracking-[0.3em] text-xs mb-6 block font-medium">Professional Equipment</span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
                The Craft
              </h2>
              <ul className="space-y-6 mb-12">
                {["Excellent Quality", "Affordable", "Durable", "Custom Industrial Orders"].map((attr) => (
                  <li key={attr} className="flex items-center gap-4 group">
                    <span className="w-6 h-px bg-accent group-hover:w-10 transition-all"></span>
                    <span className="text-white/80 uppercase tracking-widest text-sm">{attr}</span>
                  </li>
                ))}
              </ul>
              <button className="px-10 py-4 border border-white/20 hover:bg-white hover:text-[#2D2D2D] transition-all duration-500 uppercase tracking-widest text-xs font-medium" data-testid="button-inquire">
                Inquire for Specifications
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}