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
    <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center selection:bg-orange-500/30 relative overflow-hidden">
      {/* Cinematic Background Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#5227FF]/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-orange-500/5 blur-[120px] rounded-full" />
      </div>

      <main className="relative z-10 w-full max-w-[420px] px-6 py-12 flex flex-col items-center">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center text-center space-y-6 mb-12"
        >
          {/* Profile Image Wrapper */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500 to-[#5227FF] rounded-full blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative w-24 h-24 rounded-full border-2 border-white/10 overflow-hidden bg-[#111]">
              <img 
                src="/pfp.png" 
                alt="Jignesh"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl font-display font-bold tracking-tight">
              Jig<span className="italic font-light text-orange-500">nesh</span>
            </h1>
            <p className="text-zinc-400 font-medium text-[15px] leading-relaxed max-w-[320px]">
              Hi jignesh wadhwani this side! here are all my socials :)
            </p>
          </div>

          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-orange-500 animate-ping opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
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
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative flex items-center justify-between p-4 rounded-2xl transition-all duration-300 border bg-white/5 border-white/10 overflow-hidden hover:border-white/20 hover:shadow-[0_0_25px_rgba(255,255,255,0.05)]"
            >
              {/* Shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              <div className="flex items-center gap-4 relative z-10">
                <div 
                  className="p-2.5 rounded-xl bg-white/5 border border-white/10 transition-all duration-300 group-hover:scale-110"
                  style={{ color: link.color }}
                >
                  <link.icon size={20} />
                </div>
                <span className="font-bold tracking-tight text-[15px] group-hover:translate-x-1 transition-transform">
                  {link.title}
                </span>
              </div>
              
              <ArrowRight size={16} className="text-zinc-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-16 flex flex-col items-center space-y-8">
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600">
              Built by Jignesh
            </span>
            <div className="w-8 h-[1px] bg-white/10" />
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Bio;