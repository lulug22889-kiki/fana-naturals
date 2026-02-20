import { Search, User, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import logoImg from "@assets/fana_naturals_transparent.png";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#F7F6F2]/80 backdrop-blur-xl border-b border-foreground/5 py-6 px-8 md:px-16 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-1 md:hidden">
          <div className="w-6 h-px bg-foreground mb-1.5"></div>
          <div className="w-4 h-px bg-foreground"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="flex-1 text-center md:text-left"
        >
          <a href="/" className="inline-block">
            <img 
              src={logoImg} 
              alt="Fana Naturals" 
              className="h-12 md:h-16 w-auto object-contain"
            />
          </a>
        </motion.div>

        <nav className="hidden md:flex flex-1 justify-center space-x-12">
          {[
            { name: 'Harvest', href: '/products' },
            { name: 'Tools', href: '/products' },
            { name: 'About', href: '/about' }
          ].map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="text-xs uppercase tracking-[0.15em] text-foreground/70 hover:text-foreground transition-colors duration-300 relative group font-sans"
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
  );
}