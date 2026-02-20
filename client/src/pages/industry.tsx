import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import beesImg from "@assets/AdobeStock_52143687_1771616359713.jpeg";

const associations = [
  {
    name: "Canadian Honey Council (CHC)",
    url: "https://honeycouncil.ca",
    desc: "The national advocate for Canada’s beekeeping industry since 1940, representing over 13,000 beekeepers and 800,000 colonies."
  },
  {
    name: "American Beekeeping Federation (ABF)",
    url: "https://www.abfnet.org",
    desc: "A comprehensive national organization ensuring the future of honey bees through legislative advocacy and education."
  },
  {
    name: "BC Honey Producers’ Association (BCHPA)",
    url: "https://bchoneyproducers.ca",
    desc: "The oldest beekeeping association in BC (est. 1920), focusing on hive health, provincial research, and beekeeping education."
  },
  {
    name: "American Honey Producers Association (AHPA)",
    url: "https://www.ahpanet.com",
    desc: "An organization of beekeepers for beekeepers, dedicated specifically to the economic viability of honey production."
  },
  {
    name: "Canadian Assoc. of Professional Apiculturists",
    url: "https://capabees.com",
    desc: "A professional body of scientists and administrators dedicated to the study of apiculture and sustainable pollination."
  },
  {
    name: "National Honey Board (NHB)",
    url: "https://www.honey.com",
    desc: "An industry-funded R&P program that leverages research and marketing to expand the global and domestic honey market."
  },
  {
    name: "Ontario Beekeepers' Association (OBA)",
    url: "https://www.ontariobee.com",
    desc: "One of North America’s oldest organizations, driving industry standards and bee research through its world-class Tech Adaptation Program."
  },
  {
    name: "Honey Bee Health Coalition",
    url: "https://honeybeehealthcoalition.org",
    desc: "A collaborative network of beekeepers, researchers, and farmers working together to improve hive health across North America."
  },
  {
    name: "Apimondia",
    url: "https://www.apimondia.org",
    desc: "The global authority for beekeeping, hosting the World Beekeeping Awards and setting the \"Golden Standard\" for honey purity."
  },
  {
    name: "Project Apis m. (PAm)",
    url: "https://www.projectapism.org",
    desc: "The premier honey bee research organization in the USA and Canada, funding over $12M in practical solutions for healthier bees."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5, 
      ease: [0.21, 0.47, 0.32, 0.98] 
    } 
  }
};

export default function Industry() {
  return (
    <div className="min-h-screen bg-[#FDFDFB] text-foreground selection:bg-accent/20">
      <Header />
      
      <main className="pt-40 pb-32 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:w-1/2"
          >
            <span className="font-sans text-xs tracking-[0.2em] uppercase text-accent mb-6 block">Directory</span>
            <h1 className="font-serif text-5xl md:text-7xl font-light tracking-tight leading-tight mb-8">
              Industry Resources
            </h1>
            <p className="font-sans text-lg font-light leading-relaxed text-foreground/70 max-w-md">
              A curated index of the leading councils, boards, and scientific bodies driving the global apiculture standard.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="w-full md:w-1/2 aspect-[4/3] overflow-hidden rounded-sm"
          >
            <img 
              src={beesImg} 
              alt="Queen Bee and colony" 
              className="w-full h-full object-cover grayscale opacity-90 sepia-[0.2] contrast-[1.1] transition-all duration-[2s] hover:grayscale-0 hover:opacity-100 hover:scale-105"
            />
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16"
        >
          {associations.map((assoc, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="group flex flex-col items-start border-t border-foreground/10 pt-8"
            >
              <h3 className="font-serif text-2xl font-bold tracking-wide mb-4 text-foreground group-hover:text-foreground/90 transition-colors">
                {assoc.name}
              </h3>
              <p className="font-serif italic text-lg text-foreground/60 leading-relaxed mb-8 flex-grow">
                {assoc.desc}
              </p>
              
              <a 
                href={assoc.url} 
                target="_blank" 
                rel="noreferrer"
                className="font-sans text-xs uppercase tracking-[0.15em] text-foreground/80 hover:text-accent transition-colors duration-500 flex items-center gap-3"
              >
                <span>Direct Access</span>
                <span className="w-6 h-px bg-current transition-all duration-500 group-hover:w-10"></span>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}