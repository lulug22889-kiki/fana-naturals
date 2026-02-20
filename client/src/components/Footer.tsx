import { Instagram, Linkedin } from "lucide-react";

interface FooterProps {
  dark?: boolean;
}

export default function Footer({ dark = false }: FooterProps) {
  const bgClass = dark ? "bg-[#1A1A1A] text-white" : "bg-[#F7F6F2] text-foreground";
  const textMutedClass = dark ? "text-white/60" : "text-foreground/60";
  const iconClass = dark ? "text-white/50 hover:text-white" : "text-foreground/50 hover:text-accent";
  const linkClass = dark ? "text-white/40 hover:text-white" : "text-foreground/40 hover:text-foreground";
  const accentClass = dark ? "text-white/80" : "text-accent";

  return (
    <footer className={`pt-12 pb-24 px-6 md:px-12 ${bgClass}`}>
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        
        <div>
          <h2 className="font-serif text-3xl tracking-[0.1em] uppercase mb-4">Fana Naturals</h2>
          <p className={`font-serif text-xl italic mb-8 ${accentClass}`}>Honest work. Pure origin.</p>
          
          <div className={`space-y-1 font-sans text-sm tracking-[0.05em] font-light ${textMutedClass}`}>
            <p>Langley, British Columbia.</p>
            <p>Serving the global hive.</p>
          </div>
        </div>
        
        <div className="flex flex-col items-start md:items-end">
          <div className="flex space-x-6 mb-12">
            <a href="#" className={`transition-colors duration-300 ${iconClass}`}>
              <Instagram strokeWidth={1} className="w-5 h-5" />
            </a>
            <a href="#" className={`transition-colors duration-300 ${iconClass}`}>
              <Linkedin strokeWidth={1} className="w-5 h-5" />
            </a>
          </div>
          
          <div className={`flex space-x-6 font-sans text-xs tracking-[0.1em] uppercase ${linkClass}`}>
            <a href="#" className="transition-colors">Privacy</a>
            <a href="#" className="transition-colors">Terms</a>
            <span>© {new Date().getFullYear()}</span>
          </div>
        </div>
        
      </div>
    </footer>
  );
}