import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Privacy() {
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
            Privacy Policy
          </h1>
          
          <div className="space-y-12 font-sans font-light leading-relaxed text-foreground/80">
            <section>
              <h2 className="font-serif text-2xl mb-4 text-foreground">1. Introduction</h2>
              <p>Fana Naturals ("we", "us", or "our") respects your privacy and is committed to protecting it through our compliance with this policy. This Privacy Policy is designed to comply with the Personal Information Protection and Electronic Documents Act (PIPEDA) of Canada.</p>
            </section>

            <section>
              <h2 className="font-serif text-2xl mb-4 text-foreground">2. Information We Collect</h2>
              <p>We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products, when you participate in activities on the Website, or otherwise when you contact us. The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make, and the products and features you use.</p>
            </section>

            <section>
              <h2 className="font-serif text-2xl mb-4 text-foreground">3. How We Use Your Information</h2>
              <p>We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.</p>
            </section>

            <section>
              <h2 className="font-serif text-2xl mb-4 text-foreground">4. Disclosure of Information</h2>
              <p>We may process or share your data that we hold based on the following legal basis: Consent, Legitimate Interests, Performance of a Contract, or Legal Obligations. We do not sell, rent, or trade your personal information to third parties.</p>
            </section>

            <section>
              <h2 className="font-serif text-2xl mb-4 text-foreground">5. Data Retention and Security</h2>
              <p>We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law. We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process.</p>
            </section>

            <section>
              <h2 className="font-serif text-2xl mb-4 text-foreground">6. Your Rights</h2>
              <p>In accordance with Canadian law, you have the right to request access to the personal information we collect from you, change that information, or delete it in some circumstances. To request to review, update, or delete your personal information, please submit a request to info@fananaturals.com.</p>
            </section>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}