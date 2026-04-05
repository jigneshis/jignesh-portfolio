"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Play, Star, ChevronRight, Mail, Github, Twitter, Linkedin, Check } from 'lucide-react';
import GlowBackground from '../components/GlowBackground';
import GlassCard from '../components/GlassCard';
import CinematicButton from '../components/CinematicButton';
import { cn } from '../lib/utils';

const Index = () => {
  const projects = [
    { title: "Lumina Brand Identity", category: "High-End Branding", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800" },
    { title: "Nebula OS", category: "UI/UX Design", image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800" },
    { title: "Zenith Marketing", category: "Campaign Design", image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=800" },
  ];

  const services = [
    { 
      title: "Essential", 
      price: "$1,499", 
      description: "Perfect for startups needing a professional digital presence.",
      features: ["Single Page Site", "Custom UI Design", "Mobile Responsive", "SEO Optimization"],
      recommended: false 
    },
    { 
      title: "Premium", 
      price: "$2,999", 
      description: "Our most popular package for growing businesses.",
      features: ["Up to 5 Pages", "Custom Animations", "CMS Integration", "Premium Support", "Performance Tuning"],
      recommended: true 
    },
    { 
      title: "Enterprise", 
      price: "Custom", 
      description: "Tailored digital experiences for established brands.",
      features: ["Unlimited Pages", "Advanced Interactions", "E-commerce Ready", "Dedicated Project Manager"],
      recommended: false 
    },
  ];

  const testimonials = [
    { name: "Sarah Johnson", role: "CEO @ TechFlow", content: "Working with this team was the best decision for our rebranding. The attention to detail is unmatched." },
    { name: "Michael Chen", role: "Founder @ Nova", content: "They don't just design websites; they create digital experiences that truly resonate with our audience." },
    { name: "Emma Davis", role: "Marketing Director", content: "The premium feel they brought to our portfolio instantly increased our conversion rate by 40%." },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="min-h-screen text-white font-sans selection:bg-[#ff7a18]/30">
      <GlowBackground />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 backdrop-blur-md border-b border-white/5">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold tracking-tighter"
        >
          STUDIO<span className="text-[#ff7a18]">.</span>
        </motion.div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
          {['Work', 'Services', 'Pricing', 'About'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ color: '#fff' }}
              className="relative transition-colors group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#ff7a18] transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
          <CinematicButton className="px-6 py-2 text-sm">Let's Talk</CinematicButton>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-48 pb-32 px-8 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff7a18]/10 rounded-full blur-[120px] -z-10"
          />
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl font-bold tracking-tight leading-[1.1] mb-8"
          >
            Digital experiences <br />
            made <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff7a18] to-[#ffd700]">better.</span>
              <motion.span 
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute -bottom-2 left-0 h-1 bg-[#ff7a18]/30 blur-[2px]" 
              />
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-white/50 max-w-2xl mb-12"
          >
            We build cinematic digital products that help high-growth companies scale their brand and influence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <CinematicButton onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}>View Our Work</CinematicButton>
            <CinematicButton variant="outline" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>See Pricing</CinematicButton>
          </motion.div>
        </section>

        {/* Project Grid */}
        <section id="work" className="py-32 px-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-[#ff7a18] text-sm font-bold tracking-widest uppercase mb-4 block"
              >
                Featured Work
              </motion.span>
              <h2 className="text-4xl md:text-5xl font-bold">Selected Projects</h2>
            </div>
            <motion.a 
              href="#" 
              className="flex items-center gap-2 text-white/40 hover:text-white transition-colors group"
            >
              View all work <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <GlassCard key={index} className="group cursor-pointer">
                <div className="aspect-[4/5] overflow-hidden relative">
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black">
                      <Play className="w-5 h-5 fill-current ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <span className="text-xs font-bold text-[#ff7a18] uppercase tracking-wider mb-2 block">{project.category}</span>
                  <h3 className="text-2xl font-bold group-hover:text-[#ff7a18] transition-colors flex items-center justify-between">
                    {project.title}
                    <ArrowUpRight className="w-5 h-5 opacity-0 -translate-y-2 translate-x-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </h3>
                </div>
              </GlassCard>
            ))}
          </motion.div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-32 px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[#ff7a18] text-sm font-bold tracking-widest uppercase mb-4 block"
            >
              Pricing Plans
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Invest in Excellence</h2>
            <p className="text-white/50 max-w-2xl mx-auto">Transparent pricing designed for quality. Every project is unique, but these plans serve as a baseline for our digital craftsmanship.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {services.map((plan, index) => (
              <GlassCard 
                key={index} 
                className={cn(
                  "p-8 h-full flex flex-col",
                  plan.recommended ? "border-[#ff7a18]/40 bg-white/[0.05] shadow-[0_0_40px_rgba(255,122,24,0.1)] relative md:-translate-y-4" : ""
                )}
                delay={index * 0.1}
              >
                {plan.recommended && (
                  <div className="absolute top-0 right-0 bg-[#ff7a18] text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg tracking-widest uppercase">
                    Recommended
                  </div>
                )}
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.price !== 'Custom' && <span className="text-white/40 text-sm">/ project</span>}
                  </div>
                  <p className="text-sm text-white/50 leading-relaxed">{plan.description}</p>
                </div>
                
                <ul className="space-y-4 mb-12 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-white/70">
                      <Check className="w-4 h-4 text-[#ff7a18] shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <CinematicButton 
                  variant={plan.recommended ? 'primary' : 'outline'}
                  className="w-full"
                >
                  Get Started
                </CinematicButton>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section id="voices" className="py-32 bg-white/[0.02] border-y border-white/5 overflow-hidden">
          <div className="px-8 max-w-7xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-center">What our clients say</h2>
          </div>
          
          <motion.div 
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex gap-8 px-8 w-max"
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <GlassCard key={index} className="w-[400px] shrink-0 p-8 hover:scale-[1.02] transition-transform cursor-default">
                <div className="flex gap-1 text-[#ff7a18] mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-lg text-white/70 mb-8 italic">"{testimonial.content}"</p>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-white/40">{testimonial.role}</p>
                </div>
              </GlassCard>
            ))}
          </motion.div>
        </section>

        {/* Final CTA */}
        <section className="py-48 px-8 text-center relative overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ff7a18] rounded-full blur-[160px] -z-10"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">Ready to start your <br /> next project?</h2>
            <p className="text-xl text-white/50 mb-12">Let's create something extraordinary together. Book a discovery call today.</p>
            <CinematicButton className="px-12 py-5 text-lg shadow-[0_0_50px_rgba(255,122,24,0.4)] animate-pulse">Work With Us</CinematicButton>
          </motion.div>
        </section>
      </main>

      <footer className="py-16 px-8 border-t border-white/5 bg-black/40 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xl font-bold">STUDIO<span className="text-[#ff7a18]">.</span></div>
          <div className="flex gap-8">
            <Twitter className="w-5 h-5 text-white/40 hover:text-[#ff7a18] cursor-pointer transition-colors" />
            <Github className="w-5 h-5 text-white/40 hover:text-[#ff7a18] cursor-pointer transition-colors" />
            <Linkedin className="w-5 h-5 text-white/40 hover:text-[#ff7a18] cursor-pointer transition-colors" />
            <Mail className="w-5 h-5 text-white/40 hover:text-[#ff7a18] cursor-pointer transition-colors" />
          </div>
          <div className="text-white/40 text-sm">© 2024 Studio. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
};

export default Index;