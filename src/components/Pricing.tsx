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
    <section id="pricing" className="fluid-py relative">
      <div className="container-wide">
        <div className="text-center mb-16 md:mb-24 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 glass-card px-6 py-2 md:px-8 md:py-3 rounded-full"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-primary">Service Models</span>
          </motion.div>
          <h2 className="font-display fluid-h2 font-bold text-foreground">
            Invest in your <span className="text-gradient-nebula">Identity.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-10 items-stretch">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative rounded-[2.5rem] p-8 md:p-12 flex flex-col space-y-8 md:space-y-10 transition-all duration-700 ${
                s.recommended 
                  ? "bg-primary text-primary-foreground scale-100 md:scale-105 z-10 shadow-[0_20px_60px_rgba(255,122,24,0.2)]" 
                  : "glass-card"
              }`}
            >
              {s.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-primary text-[9px] md:text-[11px] font-black uppercase tracking-widest px-6 py-2 rounded-full shadow-xl">
                  Most Popular
                </div>
              )}
              
              <div className="space-y-2">
                <h3 className={`text-2xl md:text-3xl font-display font-bold ${s.recommended ? "text-white" : "text-foreground"}`}>
                  {s.title}
                </h3>
                <p className={`text-[10px] md:text-xs font-bold uppercase tracking-widest ${s.recommended ? "text-white/70" : "text-muted-foreground"}`}>
                  Starting at
                </p>
                <p className={`text-4xl md:text-5xl font-black mt-2 md:mt-4 ${s.recommended ? "text-white" : "text-foreground"}`}>
                  {s.price}
                </p>
              </div>

              <div className="space-y-4 md:space-y-6 flex-1">
                {s.features.map((f) => (
                  <div key={f} className="flex items-center gap-3 md:gap-4">
                    <div className={`w-5 h-5 md:w-7 md:h-7 rounded-full flex items-center justify-center ${s.recommended ? "bg-white/20" : "bg-primary/10"}`}>
                      <Check size={12} className={s.recommended ? "text-white" : "text-primary"} />
                    </div>
                    <span className="text-sm md:text-base font-medium tracking-tight">{f}</span>
                  </div>
                ))}
              </div>

              <motion.a
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className={`w-full py-4 md:py-6 rounded-xl md:rounded-2xl font-black text-sm md:text-lg text-center block transition-all shine-sweep ${
                  s.recommended 
                    ? "bg-white text-primary" 
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