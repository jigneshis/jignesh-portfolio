"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Landing Pages",
    price: "Custom",
    features: ["Conversion-focused design", "Mobile optimization", "Fast performance", "Lead tracking"],
    recommended: false,
  },
  {
    title: "Full Websites",
    price: "Standard",
    features: ["Multi-page builds", "Custom CMS", "Advanced SEO", "3 months support", "Premium animations"],
    recommended: true,
  },
  {
    title: "Redesigns",
    price: "Custom",
    features: ["Modern UI refresh", "Performance audit", "Improved UX flow", "Better conversion"],
    recommended: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-24 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 glass-card px-6 py-2 rounded-full"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-bold uppercase tracking-widest text-primary">Transparent Pricing</span>
          </motion.div>
          <h2 className="font-display text-5xl sm:text-6xl font-bold text-foreground">
            Invest in your <span className="text-gradient-orange">Brand.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative rounded-[2.5rem] p-10 space-y-8 transition-all duration-500 ${
                s.recommended 
                  ? "bg-primary text-primary-foreground border-none scale-105 z-10 shadow-[0_20px_50px_rgba(255,122,24,0.3)]" 
                  : "glass-card hover:border-primary/30"
              }`}
            >
              {s.recommended && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white text-primary text-[10px] font-black uppercase tracking-[0.3em] px-5 py-2 rounded-full shadow-xl">
                  Recommended
                </div>
              )}
              
              <div>
                <h3 className={`text-2xl font-display font-bold mb-2 ${s.recommended ? "text-white" : "text-foreground"}`}>
                  {s.title}
                </h3>
                <p className={`text-sm ${s.recommended ? "text-white/80" : "text-muted-foreground"}`}>
                  Starting from
                </p>
                <p className={`text-4xl font-bold mt-2 ${s.recommended ? "text-white" : "text-foreground"}`}>
                  {s.price}
                </p>
              </div>

              <div className="space-y-5">
                {s.features.map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${s.recommended ? "bg-white/20" : "bg-primary/10"}`}>
                      <Check size={14} className={s.recommended ? "text-white" : "text-primary"} />
                    </div>
                    <span className="text-sm font-medium tracking-wide">{f}</span>
                  </div>
                ))}
              </div>

              <motion.a
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className={`w-full py-5 rounded-2xl font-bold text-center block transition-all ${
                  s.recommended 
                    ? "bg-white text-primary hover:bg-white/90" 
                    : "bg-primary text-primary-foreground hover:btn-primary-glow"
                }`}
              >
                Get a Quote
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;