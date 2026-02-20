import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen bg-[#FDFDFB] text-foreground selection:bg-accent/20">
      <Header />
      
      <main className="pt-40 pb-32 px-6 md:px-16 max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="font-sans text-xs tracking-[0.2em] uppercase text-accent mb-6 block">Legal</span>
          <h1 className="font-serif text-4xl md:text-6xl font-light tracking-tight leading-tight mb-16">
            Terms of Service
          </h1>
          
          <div className="space-y-12 font-sans font-light leading-relaxed text-foreground/80">
            <section>
              <h2 className="font-serif text-2xl mb-4 text-foreground">1. Agreement to Terms</h2>
              <p>These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Fana Naturals ("we", "us", or "our"), concerning your access to and use of our website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto.</p>
            </section>

            <section>
              <h2 className="font-serif text-2xl mb-4 text-foreground">2. Products and Services</h2>
              <p>We make every effort to display as accurately as possible the colors, features, specifications, and details of the products available on the Site. However, we do not guarantee that the colors, features, specifications, and details of the products will be accurate, complete, reliable, current, or free of other errors, and your electronic display may not accurately reflect the actual colors and details of the products.</p>
            </section>

            <section>
              <h2 className="font-serif text-2xl mb-4 text-foreground">3. Pricing and Payments</h2>
              <p>All prices are listed in Canadian Dollars (CAD) unless otherwise noted. We reserve the right to change prices at any time without notice. We accept various forms of payment as indicated on the checkout page. You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Site.</p>
            </section>

            <section>
              <h2 className="font-serif text-2xl mb-4 text-foreground">4. Intellectual Property Rights</h2>
              <p>Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein are owned or controlled by us, and are protected by copyright and trademark laws of Canada and international conventions.</p>
            </section>

            <section>
              <h2 className="font-serif text-2xl mb-4 text-foreground">5. Limitation of Liability</h2>
              <p>In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the Site.</p>
            </section>

            <section>
              <h2 className="font-serif text-2xl mb-4 text-foreground">6. Governing Law</h2>
              <p>These Terms shall be governed by and defined following the laws of the Province of British Columbia and the federal laws of Canada applicable therein. Fana Naturals and yourself irrevocably consent that the courts of British Columbia shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.</p>
            </section>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}