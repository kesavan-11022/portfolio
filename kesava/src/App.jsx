import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  HardHat,
  GraduationCap,
  Code,
  PenTool,
  FolderGit2,
  Trophy,
  Phone,
  PhoneCall,
  Copy,
  CheckCircle2,
  Menu,
  X,
  MapPin,
  Building,
  Calendar,
  Palette,
  Lightbulb,
  Ruler,
  BookOpen,
  Hammer,
  Sparkles,
  ArrowUpRight,
  Terminal,
  PlusSlashMinus,
  GitBranch,
  Repeat,
  Boxes
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('6382166603');
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="blueprint-bg min-h-screen text-slate-100 font-sans relative overflow-x-hidden selection:bg-cyan-500 selection:text-black">
      
      {/* Toast Notification */}
      {copied && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 right-6 z-50 bg-[#0b1d3a] border border-cyan-400 text-white px-5 py-3 rounded-xl shadow-[0_0_20px_rgba(0,210,255,0.4)] flex items-center gap-3 text-sm font-medium"
        >
          <CheckCircle2 className="w-5 h-5 text-cyan-400" />
          <span>Phone number (6382166603) copied!</span>
        </motion.div>
      )}

      {/* HEADER / NAVIGATION */}
      <header className="fixed top-0 left-0 w-full z-40 bg-[#030712]/80 backdrop-blur-md border-b border-cyan-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-display font-bold text-black text-lg shadow-[0_0_15px_rgba(0,210,255,0.4)]">
              KN
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold tracking-wider text-white text-base group-hover:text-cyan-400 transition-colors">
                KESAVAN N
              </span>
              <span className="font-mono text-[10px] text-cyan-400/80 uppercase tracking-widest flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span> Civil Eng. • 1st Year
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {['Home', 'About', 'Education', 'Skills', 'Design', 'Projects', 'Achievements', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="px-3 py-1.5 text-xs lg:text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-cyan-950/30 rounded-md transition-all"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="tel:6382166603" className="btn-glow px-4 py-2 rounded-lg text-xs font-semibold text-black tracking-wide flex items-center gap-2">
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Call Kesavan</span>
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-300 hover:text-cyan-400 p-2"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#050b18]/95 backdrop-blur-xl border-b border-cyan-500/20 px-6 py-6">
            <div className="flex flex-col gap-3 font-medium text-sm">
              {['Home', 'About', 'Education', 'Skills', 'Design', 'Projects', 'Achievements', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-slate-200 hover:text-cyan-400 py-1 border-b border-slate-800/60"
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-cyan-500/20">
              <a
                href="tel:6382166603"
                className="btn-glow text-center py-2.5 rounded-lg text-xs font-bold text-black flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4" /> Call: 6382166603
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="pt-20">
        
        {/* 1. HOME SECTION */}
        <section id="home" className="min-h-[90vh] flex items-center justify-center relative px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 flex flex-col items-start space-y-6"
            >
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wide">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                <span>Hello, I'm</span>
              </div>

              <div className="space-y-3">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-display">
                  <span className="text-white">KESAVAN</span> <span className="text-electric-gradient">N</span>
                </h1>
                <p className="text-lg sm:text-xl font-medium text-cyan-300/90 font-display flex items-center gap-2 flex-wrap">
                  <span>1st Year Civil Engineering Student</span>
                  <span className="text-cyan-500/60 hidden sm:inline">|</span>
                  <span className="text-blue-400">Aspiring Designer</span>
                </p>
              </div>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl border-l-2 border-cyan-500/50 pl-4 py-1 bg-cyan-950/10 rounded-r-lg">
                "Passionate about design, creativity, and engineering. I am beginning my journey in Civil Engineering while developing my technical and creative skills."
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
                <a href="#about" className="btn-glow px-6 py-3.5 rounded-xl font-semibold text-black text-sm flex items-center gap-2 justify-center w-full sm:w-auto">
                  <span>Explore My Journey</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <a href="tel:6382166603" className="px-6 py-3.5 rounded-xl font-semibold text-cyan-300 text-sm bg-cyan-950/40 border border-cyan-500/40 hover:bg-cyan-900/40 hover:border-cyan-400 transition-all flex items-center gap-2 justify-center w-full sm:w-auto">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>Call: 6382166603</span>
                </a>
              </div>

              <div className="pt-4 flex flex-wrap gap-3 font-mono text-xs text-slate-400">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900/70 border border-slate-800">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" /> Thirumayam, TN
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900/70 border border-slate-800">
                  <HardHat className="w-3.5 h-3.5 text-blue-400" /> Mount Zion CET
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900/70 border border-slate-800">
                  <Code className="w-3.5 h-3.5 text-emerald-400" /> C Programming Learner
                </span>
              </div>
            </motion.div>

            {/* Blueprint Schematic Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 relative"
            >
              <div className="glass-card rounded-2xl p-6">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-cyan-500/20 font-mono text-xs text-cyan-400/80">
                  <span className="font-semibold text-slate-200">CAD-DRAFT_V1.dwg</span>
                  <span className="text-[11px] text-cyan-400/60">AUTODESK // BLUEPRINT</span>
                </div>
                <div className="w-full h-56 bg-slate-950/70 rounded-xl border border-cyan-500/20 p-4 flex flex-col justify-between">
                  <svg className="w-full h-full text-cyan-400 stroke-cyan-400/70 stroke-[1.5]" viewBox="0 0 400 180" fill="none">
                    <line x1="20" y1="150" x2="380" y2="150" stroke="#38bdf8" strokeWidth="2" strokeDasharray="6 3" />
                    <path d="M 40 150 L 120 70 L 200 150 L 280 70 L 360 150" fill="none" stroke="#00f2fe" strokeWidth="2" />
                    <path d="M 120 70 L 280 70" fill="none" stroke="#00f2fe" strokeWidth="2" />
                    <line x1="120" y1="70" x2="120" y2="150" stroke="#38bdf8" strokeDasharray="4 2" />
                    <line x1="200" y1="70" x2="200" y2="150" stroke="#38bdf8" strokeDasharray="4 2" />
                    <line x1="280" y1="70" x2="280" y2="150" stroke="#38bdf8" strokeDasharray="4 2" />
                    <circle cx="40" cy="150" r="4" fill="#00f2fe" />
                    <circle cx="120" cy="70" r="4" fill="#00f2fe" />
                    <circle cx="200" cy="150" r="4" fill="#00f2fe" />
                    <circle cx="280" cy="70" r="4" fill="#00f2fe" />
                    <circle cx="360" cy="150" r="4" fill="#00f2fe" />
                  </svg>
                  <div className="flex items-center justify-between font-mono text-[10px] text-cyan-300/70 pt-2 border-t border-cyan-500/10">
                    <span>STRUCTURAL TRUSS SPEC</span>
                    <span className="text-emerald-400">STATUS: IN PROGRESS</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* 2. ABOUT ME SECTION */}
        <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-cyan-500/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white">
                About <span className="text-electric-gradient">Me</span>
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-7 glass-card rounded-2xl p-8 space-y-6">
                <p className="text-slate-300 leading-relaxed text-base">
                  I am Kesavan N, a 1st-year Civil Engineering student at Mount Zion College of Engineering and Technology. I am from Thirumayam, Tamil Nadu.
                </p>
                <p className="text-slate-300 leading-relaxed text-base">
                  I have a strong interest in design and enjoy exploring creative ideas. As I begin my engineering journey, I am developing my knowledge in Civil Engineering as well as learning C programming.
                </p>
                <p className="text-slate-300 leading-relaxed text-base">
                  I am eager to learn new technologies, improve my design and engineering skills, and gain experience through future projects.
                </p>
              </div>

              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {[
                  { label: 'Name', val: 'Kesavan N', icon: HardHat },
                  { label: 'Location', val: 'Thirumayam', icon: MapPin },
                  { label: 'Department', val: 'Civil Engineering', icon: Building },
                  { label: 'Year', val: '1st Year', icon: Calendar },
                  { label: 'Interest', val: 'Design', icon: Palette }
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="glass-card rounded-xl p-4 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">{item.label}</span>
                        <span className="text-base font-bold text-white font-display">{item.val}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* 3. EDUCATION SECTION */}
        <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-cyan-500/10 bg-slate-950/40">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white">
                My <span className="text-electric-gradient">Education</span>
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
            </div>

            <div className="glass-card rounded-2xl p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-cyan-500/20">
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>Status: Currently Pursuing</span>
                  </div>
                  <h3 className="text-2xl font-bold font-display text-white">
                    Bachelor of Engineering – Civil Engineering
                  </h3>
                  <p className="text-lg text-cyan-400/90 font-medium mt-1">
                    Mount Zion College of Engineering and Technology
                  </p>
                </div>
                <div className="px-4 py-2 rounded-xl bg-cyan-900/40 border border-cyan-400/40 text-center font-mono">
                  <span className="text-[10px] text-cyan-300 block uppercase">Year</span>
                  <span className="text-lg font-bold text-white">1st Year</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. TECHNICAL SKILLS SECTION */}
        <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-cyan-500/10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white">
                Technical <span className="text-electric-gradient">Skills</span>
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-cyan-500/10 border border-cyan-400/40 flex items-center justify-center text-cyan-300 font-mono font-bold text-2xl">
                  C
                </div>
                <div>
                  <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase">Programming Language</span>
                  <h3 className="text-2xl font-bold font-display text-white">C Programming</h3>
                </div>
              </div>

              <p className="text-slate-300 leading-relaxed text-base mb-6">
                "Currently learning C programming fundamentals, including variables, operators, conditional statements, loops, functions, and basic problem-solving."
              </p>

              <div className="flex flex-wrap gap-2 font-mono text-xs pt-4 border-t border-cyan-500/20">
                <span className="px-3 py-1.5 rounded-lg bg-cyan-950/60 border border-cyan-500/30 text-cyan-300">Variables & Data Types</span>
                <span className="px-3 py-1.5 rounded-lg bg-cyan-950/60 border border-cyan-500/30 text-cyan-300">Operators</span>
                <span className="px-3 py-1.5 rounded-lg bg-cyan-950/60 border border-cyan-500/30 text-cyan-300">Conditionals</span>
                <span className="px-3 py-1.5 rounded-lg bg-cyan-950/60 border border-cyan-500/30 text-cyan-300">Loops</span>
                <span className="px-3 py-1.5 rounded-lg bg-cyan-950/60 border border-cyan-500/30 text-cyan-300">Functions</span>
                <span className="px-3 py-1.5 rounded-lg bg-cyan-950/60 border border-cyan-500/30 text-cyan-300">Basic Problem-Solving</span>
              </div>
            </div>
          </div>
        </section>

        {/* 5. DESIGN INTEREST SECTION */}
        <section id="design" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-cyan-500/10 bg-slate-950/40">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white">
                Design <span className="text-electric-gradient">Interest</span>
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
            </div>

            <div className="glass-card rounded-2xl p-8 mb-12 max-w-4xl mx-auto text-center border-cyan-500/30">
              <h3 className="text-xl font-bold font-display text-cyan-300 mb-3">
                My Passion for Design
              </h3>
              <p className="text-slate-200 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto italic">
                "Design interests me because it combines creativity with practical problem-solving. As a Civil Engineering student, I want to explore how engineering and creative design can work together to create useful solutions."
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Creative Thinking', icon: Lightbulb, desc: 'Approaching engineering challenges with an open mind, exploring fresh aesthetic concepts, and generating imaginative yet functional ideas.' },
                { title: 'Engineering Design', icon: Ruler, desc: 'Synthesizing mathematical principles, structural integrity, and architectural aesthetics to build resilient physical environments.' },
                { title: 'Continuous Learning', icon: BookOpen, desc: 'Constantly expanding technical horizons, studying design tools, structural mechanics, and modern engineering practices step by step.' }
              ].map((card, i) => {
                const Icon = card.icon;
                return (
                  <div key={i} className="glass-card rounded-2xl p-7 flex flex-col justify-between">
                    <div>
                      <div className="w-14 h-14 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6">
                        <Icon className="w-7 h-7" />
                      </div>
                      <h3 className="text-xl font-bold font-display text-white mb-3">{card.title}</h3>
                      <p className="text-slate-300 text-sm leading-relaxed">{card.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 6. PROJECTS SECTION */}
        <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-cyan-500/10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white">
                Featured <span className="text-electric-gradient">Projects</span>
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
            </div>

            <div className="glass-card rounded-2xl p-10 text-center">
              <div className="w-20 h-20 rounded-2xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400 mx-auto mb-6">
                <Hammer className="w-10 h-10 animate-bounce" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white mb-4">
                Projects Coming Soon
              </h3>
              <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                "As a first-year engineering student, I am currently building my knowledge and skills. My future academic and personal projects will be showcased here."
              </p>
            </div>
          </div>
        </section>

        {/* 7. ACHIEVEMENTS SECTION */}
        <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-cyan-500/10 bg-slate-950/40">
          <div className="max-w-4xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white">
                Honors & <span className="text-electric-gradient">Achievements</span>
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
            </div>

            <div className="glass-card rounded-2xl p-10 text-center">
              <div className="w-20 h-20 rounded-2xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400 mx-auto mb-6">
                <Trophy className="w-10 h-10" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white mb-4">
                More to Come
              </h3>
              <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                "I am at the beginning of my engineering journey and continuously working toward new skills, certifications, and achievements."
              </p>
            </div>
          </div>
        </section>

        {/* 8. CONTACT SECTION */}
        <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-cyan-500/10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white">
                Contact <span className="text-electric-gradient">Kesavan</span>
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
            </div>

            <div className="glass-card rounded-2xl p-8 sm:p-12 text-center">
              <h3 className="text-3xl font-extrabold font-display text-white mb-2">
                Kesavan N
              </h3>
              <p className="text-cyan-400 font-medium text-base font-display mb-8">
                1st Year Civil Engineering Student | Aspiring Designer
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 text-left">
                <div className="p-6 rounded-xl bg-slate-900/60 border border-cyan-500/20 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Location</span>
                    <span className="text-lg font-bold text-white font-display">Thirumayam, Tamil Nadu</span>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-slate-900/60 border border-cyan-500/20 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Phone Number</span>
                    <span className="text-lg font-bold text-cyan-300 font-mono tracking-wider">6382166603</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <a
                  href="tel:6382166603"
                  className="btn-glow w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-black text-sm flex items-center justify-center gap-2.5"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Call 6382166603</span>
                </a>

                <button
                  onClick={handleCopy}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-cyan-300 text-sm bg-cyan-950/60 border border-cyan-500/40 hover:bg-cyan-900/50 hover:border-cyan-300 transition-all flex items-center justify-center gap-2.5"
                >
                  <Copy className="w-4 h-4 text-cyan-400" />
                  <span>{copied ? 'Copied!' : 'Copy Number'}</span>
                </button>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-cyan-500/20 bg-slate-950/90 py-10 px-4 sm:px-6 lg:px-8 text-center text-slate-400 font-sans text-sm space-y-3">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-display">
            &copy; 2026 <span className="text-white font-semibold">Kesavan N</span>. All Rights Reserved.
          </p>
          <p className="text-cyan-400/90 font-mono text-xs">
            "Building my future, one step at a time."
          </p>
        </div>
      </footer>

    </div>
  );
}

