"use client";

import { motion } from "framer-motion";
import { 
  ArrowRight,
} from "lucide-react";
import { 
  SiSpotify, 
  SiSteam, 
  SiGithub, 
  SiProton 
} from "react-icons/si";
import DarkVeil from "@/components/DarkVeil";

const links = [
  {
    title: "Spotify",
    href: "https://open.spotify.com/user/31kq2nm7kbg3czdn747g6loshc7e?si=3bb8d14b797e4a78",
    icon: SiSpotify,
    color: "#1DB954",
  },
  {
    title: "Email",
    href: "mailto:jigneshis@proton.me",
    icon: SiProton,
    color: "#6D4AFF",
  },
  {
    title: "Steam",
    href: "https://steamcommunity.com/id/jigneshis/",
    icon: SiSteam,
    color: "#00ADEE",
  },
  {
    title: "GitHub",
    href: "https://github.com/jigneshis",
    icon: SiGithub,
    color: "#ffffff",
  },
];

const Bio = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center selection:bg-primary/30 relative overflow-hidden">
      {/* Dark Veil Background */}
      <div className="fixed inset-0 z-0">
        <DarkVeil 
          baseColor="#050505"
          veilColor="#5227FF"
          speed={0.4}
          intensity={0.8}
        />
        {/* Soft Vignette Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] pointer-events-none" />
      </div>

      <main className="relative z-10 w-full max-w-[420px] px-6 py-16 flex flex-col items-center">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center text-center space-y-6 mb-12"
        >
          {/* Profile Image Wrapper */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#5227FF] to-cyan-400 rounded-full blur-md opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative w-28 h-28 rounded-full border-2 border-white/10 overflow-hidden bg-[#111]">
              <img 
                src="/pfp.png" 
                alt="Jignesh"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl font-display font-bold tracking-tight">
              Jig<span className="italic font-light text-primary">nesh</span>
            </h1>
            <p className="text-zinc-400 font-medium text-[15px] leading-relaxed max-w-[320px]">
              Hi jignesh wadhwani this side! here are all my socials :)
            </p>
          </div>

          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary animate-ping opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-300">Available for projects</span>
          </div>
        </motion.div>

        {/* Links Section */}
        <div className="w-full space-y-4">
          {links.map((link, i) => (
            <motion.a
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02, x: 4 }}
              whileTap={{ scale: 0.98 }}
              className="group relative flex items-center justify-between p-5 rounded-2xl transition-all duration-300 border bg-white/[0.03] backdrop-blur-md border-white/10 overflow-hidden hover:border-primary/40 hover:bg-white/[0.06] hover:shadow-[0_0_30px_rgba(82,39,255,0.15)]"
            >
              {/* Shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              <div className="flex items-center gap-5 relative z-10">
                <div 
                  className="p-3 rounded-xl bg-white/5 border border-white/10 transition-all duration-300 group-hover:scale-110 shadow-lg"
                  style={{ color: link.color }}
                >
                  <link.icon size={22} />
                </div>
                <span className="font-bold tracking-tight text-[16px]">
                  {link.title}
                </span>
              </div>
              
              <ArrowRight size={18} className="text-zinc-500 group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-20 flex flex-col items-center space-y-8 opacity-60">
          <div className="flex flex-col items-center gap-3">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500">
              Digital Artifact by Jignesh
            </span>
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Bio;