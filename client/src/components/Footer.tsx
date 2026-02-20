import { Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="pt-12 pb-24 px-6 md:px-12 bg-[#F7F6F2] text-foreground">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        
        <div>
          <h2 className="font-serif text-3xl tracking-[0.1em] uppercase mb-4">Fana Naturals</h2>
          <p className="font-serif text-xl text-accent italic mb-8">Honest work. Pure origin.</p>
          
          <div className="space-y-1 font-sans text-sm text-foreground/60 tracking-[0.05em] font-light mb-8">
            <p>Langley, British Columbia.</p>
            <p>Serving the global hive.</p>
          </div>
          
          <div className="font-sans text-xs text-foreground/50 tracking-[0.05em] leading-relaxed max-w-[280px]">
            <span className="font-medium text-foreground/80 block mb-1">Committed to Industry Standards:</span> 
            Proud supporters of the global beekeeping community.
          </div>
        </div>
        
        <div className="flex flex-col items-start md:items-end">
          <div className="flex space-x-6 mb-12">
            <a href="#" className="text-foreground/50 hover:text-accent transition-colors duration-300">
              <Instagram strokeWidth={1} className="w-5 h-5" />
            </a>
            <a href="#" className="text-foreground/50 hover:text-accent transition-colors duration-300">
              <Linkedin strokeWidth={1} className="w-5 h-5" />
            </a>
          </div>
          
          <div className="flex space-x-6 font-sans text-xs text-foreground/40 tracking-[0.1em] uppercase">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <span>© {new Date().getFullYear()}</span>
          </div>
        </div>
        
      </div>
    </footer>
  );
}