"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

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
    <section id="pricing" className="py-40 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-32 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 glass-card px-8 py-3 rounded-full"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-black uppercase tracking-[0.3em] text-primary">Service Models</span>
          </motion.div>
          <h2 className="font-display text-6xl sm:text-7xl font-bold text-foreground tracking-tighter">
            Invest in your <span className="text-gradient-nebula">Identity.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 items-center">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              whileHover={{ y: -15 }}
              className={`relative rounded-[3rem] p-12 space-y-10 transition-all duration-700 interactive-card ${
                s.recommended 
                  ? "bg-primary text-primary-foreground border-none scale-110 z-10 shadow-[0_30px_100px_rgba(0,180,216,0.2)]" 
                  : "glass-card hover:border-primary/40"
              }`}
            >
              {s.recommended && (
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white text-primary text-[11px] font-black uppercase tracking-[0.4em] px-8 py-3 rounded-full shadow-2xl">
                  Most Popular
                </div>
              )}
              
              <div className="space-y-2">
                <h3 className={`text-3xl font-display font-bold ${s.recommended ? "text-white" : "text-foreground"}`}>
                  {s.title}
                </h3>
                <p className={`text-sm font-bold uppercase tracking-widest ${s.recommended ? "text-white/70" : "text-muted-foreground"}`}>
                  Starting at
                </p>
                <p className={`text-5xl font-black mt-4 ${s.recommended ? "text-white" : "text-foreground"}`}>
                  {s.price}
                </p>
              </div>

              <div className="space-y-6">
                {s.features.map((f) => (
                  <div key={f} className="flex items-center gap-4">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center ${s.recommended ? "bg-white/20" : "bg-primary/10"}`}>
                      <Check size={16} className={s.recommended ? "text-white" : "text-primary"} />
                    </div>
                    <span className="text-base font-medium tracking-tight">{f}</span>
                  </div>
                ))}
              </div>

              <motion.a
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className={`w-full py-6 rounded-2xl font-black text-lg text-center block transition-all shine-sweep ${
                  s.recommended 
                    ? "bg-white text-primary hover:bg-white/90" 
                    : "bg-primary text-primary-foreground"
                }`}
              >
                Start Journey
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;