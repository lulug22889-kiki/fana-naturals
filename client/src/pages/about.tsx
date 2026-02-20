import { motion, Variants } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import teamImg from "@assets/bigstock-Team-of-confident-male-and-fem-52387363_1771550599387.jpg";
import childImg from "@assets/16450795331_593481280a_z_1771550614886.jpg";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function About() {
  return (
    <div className="pt-24 min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img 
            src={teamImg} 
            alt="Fana Naturals Team" 
            className="w-full h-full object-cover object-[center_25%]"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </motion.div>
        
        <div className="relative z-10 text-center px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-white max-w-4xl mx-auto leading-tight"
          >
            Thirty Years of Resonance with the Rhythm of Nature.
          </motion.h1>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <span className="text-accent uppercase tracking-[0.3em] text-xs mb-8 block font-medium">Our Heritage</span>
              <p className="font-serif text-2xl md:text-3xl text-foreground/80 leading-relaxed mb-8">
                Fana Naturals boasts over thirty years of experience in the global beekeeping industry. 
                We are not just traders; we are observers of the delicate bond between bees and the earth.
              </p>
              <div className="w-12 h-px bg-accent"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
            >
              <img 
                src={childImg} 
                alt="Child experiencing nature" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white border-y border-foreground/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          >
            {[
              { title: "Reverence for Nature", desc: "Prioritizing bee health and safety above all else." },
              { title: "Artisan Spirit", desc: "We are beekeepers first, business owners second." },
              { title: "Global Vision", desc: "Connecting Canadian honey to the international market." },
              { title: "Intellectual Innovation", desc: "Exploring cutting-edge tech for bee health." }
            ].map((value, idx) => (
              <motion.div key={idx} variants={fadeUp} className="group">
                <div className="w-12 h-px bg-accent mb-6 group-hover:w-full transition-all duration-700"></div>
                <h3 className="font-serif text-xl mb-4">{value.title}</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 md:py-32 px-6 bg-[#F7F6F2]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Get in Touch
            </h2>
            <div className="w-12 h-px bg-accent mx-auto mb-8"></div>
            <p className="font-sans text-foreground/70 mb-4">
              We welcome inquiries from global partners, beekeepers, and nature enthusiasts.
            </p>
            <a href="mailto:info@fananaturals.com" className="font-serif text-2xl hover:text-accent transition-colors">
              info@fananaturals.com
            </a>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm uppercase tracking-wider text-foreground/60 font-sans">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-transparent border-b border-foreground/20 py-3 focus:outline-none focus:border-accent transition-colors font-sans"
                  data-testid="input-name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm uppercase tracking-wider text-foreground/60 font-sans">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-transparent border-b border-foreground/20 py-3 focus:outline-none focus:border-accent transition-colors font-sans"
                  data-testid="input-email"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm uppercase tracking-wider text-foreground/60 font-sans">Message</label>
              <textarea 
                id="message" 
                rows={4}
                className="w-full bg-transparent border-b border-foreground/20 py-3 focus:outline-none focus:border-accent transition-colors font-sans resize-none"
                data-testid="input-message"
              ></textarea>
            </div>
            <div className="text-center pt-8">
              <button 
                type="submit" 
                className="px-12 py-4 bg-foreground text-background uppercase tracking-[0.2em] text-sm hover:bg-accent transition-all duration-500 font-sans"
                data-testid="button-submit-contact"
              >
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </section>

      <Footer />
    </div>
  );
}