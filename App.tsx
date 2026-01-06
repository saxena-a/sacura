import React, { useState, useEffect } from 'react';
import { Section } from './components/Section';
import { Button } from './components/Button';
import { ParticleDemo } from './components/ParticleDemo';
import { SealVisual } from './components/SealVisual';
import { MechanismVisual } from './components/MechanismVisual';
import { UseCases } from './components/UseCases';
import { Partners } from './components/Partners';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background font-sans text-primary selection:bg-black selection:text-white">
      
      {/* NAVIGATION */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-full max-w-5xl px-4">
        <div className="glass-card flex items-center justify-between px-6 py-4 rounded-2xl shadow-xl shadow-black/[0.02]">
          <div className="flex items-center gap-4 md:gap-10">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-4 h-4 bg-black rounded-sm rotate-45 group-hover:rotate-0 transition-all duration-700"></div>
              <span className="font-black text-xs tracking-tighter uppercase">SACURA</span>
            </a>
            <div className="hidden md:flex gap-8 pl-8 border-l border-border">
              <a href="#physics" className="text-[10px] font-black uppercase tracking-widest text-secondary hover:text-black transition-colors">Physics</a>
              <a href="#mechanism" className="text-[10px] font-black uppercase tracking-widest text-secondary hover:text-black transition-colors">Mechanism</a>
              <a href="#partners" className="text-[10px] font-black uppercase tracking-widest text-secondary hover:text-black transition-colors">Partners</a>
              <a href="#foundry" className="text-[10px] font-black uppercase tracking-widest text-secondary hover:text-black transition-colors">Foundry</a>
            </div>
          </div>
          <Button variant="primary" className="!px-6 !py-2.5 !text-[9px] !bg-black !rounded-xl" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Connect
          </Button>
        </div>
      </nav>

      {/* HERO: THE VACUUM LOCK PATENT */}
      <header className="relative min-h-screen flex flex-col items-center justify-center pt-24 px-6 overflow-hidden bg-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background pointer-events-none"></div>
        
        <div className="max-w-[1400px] w-full mx-auto grid lg:grid-cols-12 gap-12 items-center z-10 animate-reveal">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-3 mb-8 px-4 py-1.5 bg-white border border-border rounded-full shadow-sm">
              <span className="text-[9px] font-mono text-black font-black uppercase tracking-[0.4em]">PATENT US11897642B2</span>
            </div>
            <h1 className="hero-title text-[clamp(4rem,15vw,12rem)] font-black text-ink mb-10 leading-[0.75]">
              BEYOND <br/> CLONING.
            </h1>
            <p className="text-xl md:text-3xl text-secondary font-light max-w-2xl mb-12 leading-tight text-balance">
              Physical security rooted in <span className="text-black font-bold">Vacuum Stasis</span>. A permanent, invisible lock that breaks forever if opened.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button className="!px-12 !py-5 !text-lg !rounded-2xl" onClick={() => document.getElementById('physics')?.scrollIntoView({ behavior: 'smooth' })}>
                The Physics
              </Button>
              <Button variant="secondary" className="!px-12 !py-5 !text-lg !rounded-2xl" onClick={() => document.getElementById('mechanism')?.scrollIntoView({ behavior: 'smooth' })}>
                The Mechanism
              </Button>
            </div>
          </div>
          <div className="lg:col-span-4 relative group hidden lg:block scale-110">
             <div className="animate-float relative z-10">
                <SealVisual />
             </div>
          </div>
        </div>
      </header>

      {/* SECTION: PHYSICS IS THE LOCK */}
      <Section id="physics" className="border-t border-border !py-32 md:!py-48 relative overflow-hidden bg-surface">
         <div className="blueprint-dot absolute inset-0 opacity-40"></div>
         <div className="relative z-10 flex flex-col items-center">
            
            <div className="max-w-4xl mx-auto text-center mb-24 md:mb-32">
                <h2 className="text-6xl md:text-[8rem] font-black tracking-tighter mb-10 leading-[0.8] text-ink uppercase">
                  Immutable <br/> Physical Trust.
                </h2>
                <p className="text-2xl md:text-4xl text-secondary font-light leading-tight max-w-3xl mx-auto text-balance mb-8">
                   We capture the inherent chaos of the universe in a vacuum. Once broken, the order is lost forever.
                </p>
                <div className="inline-block px-8 py-4 bg-black/5 rounded-2xl border border-black/5">
                   <p className="text-sm font-mono text-secondary uppercase tracking-widest font-bold">
                     Interactive Verification Demo
                   </p>
                   <p className="text-sm text-secondary/70 mt-1 max-w-lg mx-auto">
                     Adjust the tamper level below to see how our system instantly detects a mismatch in the unique physical fingerprint.
                   </p>
                </div>
            </div>

            {/* MONOLITH INTERACTION */}
            <div className="w-full max-w-[1200px]">
              <ParticleDemo />
            </div>

         </div>
      </Section>

      {/* SECTION: MECHANISM */}
      <Section id="mechanism" className="!py-40 md:!py-60 bg-background border-y border-border">
        <div className="grid lg:grid-cols-12 gap-16 md:gap-32 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-48">
            <div className="w-16 h-2 bg-black mb-12 rounded-full"></div>
            <h2 className="text-6xl md:text-7xl font-black tracking-tighter mb-10 leading-none">The Vacuum <br/><span className="text-secondary/20 italic font-medium">Protocol.</span></h2>
            <p className="text-xl md:text-2xl text-secondary font-light leading-relaxed mb-16">
              We freeze a unique arrangement of particles using extreme pressure. If the seal is compromised, atmospheric pressure creates a "chaos event" that is impossible to reverse.
            </p>
            <div className="font-mono text-[10px] uppercase tracking-widest text-secondary/60">
               <div className="border-l-2 border-black pl-6 py-2 mb-8">
                  <div className="text-lg font-black text-black mb-1 tracking-tighter">Zero Software</div>
                  <div>Pure Physical Key</div>
               </div>
               <div className="border-l-2 border-black pl-6 py-2">
                  <div className="text-lg font-black text-black mb-1 tracking-tighter">One-Way Function</div>
                  <div>Thermodynamically Secure</div>
               </div>
            </div>
          </div>
          <div className="lg:col-span-7">
             <MechanismVisual />
          </div>
        </div>
      </Section>

      {/* APPLICATIONS */}
      <Section id="applications" className="!py-40 md:!py-60 bg-surface">
         <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
            <div className="max-w-2xl">
                <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.8]">Global <br/>Anchors.</h2>
                <p className="text-xl md:text-2xl text-secondary font-light">The physical standard for pharmaceuticals, electronics, and high-value logistics.</p>
            </div>
            <div className="hidden lg:block text-right font-mono text-[10px] text-secondary/20 uppercase tracking-[0.5em] leading-loose font-black">
               Foundry_Ref: CH-9021 <br/> Standard_v4.2
            </div>
         </div>
         <UseCases />
      </Section>

      {/* PARTNERS */}
      <Partners />

      {/* FOUNDRY / TEAM */}
      <Section id="foundry" className="!py-40 md:!py-60 border-t border-border bg-background">
         <div className="grid lg:grid-cols-2 gap-20 md:gap-40 items-start">
            <div className="space-y-12">
                <h2 className="text-7xl md:text-8xl font-black tracking-tighter">The Foundry.</h2>
                <div className="flex flex-col gap-8">
                    <p className="text-xl md:text-2xl text-secondary font-light leading-relaxed max-w-xl">
                        Physicists and engineers architecting integrity protocols for the physical world. We build where software cannot reach.
                    </p>
                </div>
            </div>
            
            <div className="grid gap-12">
                {[
                  { 
                    name: "Dario Duran", 
                    role: "Founder", 
                    desc: "Leading the vision to secure the physical world. Leveraging expertise in material systems to close the trust gap in global supply chains.",
                    ln: "dario-duran"
                  },
                  { 
                    name: "Aryan Saxena", 
                    role: "Founding Engineer", 
                    desc: "Architecting the core technology. Merging research-grade physics with scalable engineering to bring the vacuum seal concept to reality.",
                    ln: "dankrick",
                    email: <a href="mailto:aryan.saxena@tepotec.ch"> aryan.saxena@tepotec.ch </a>
                  }
                ].map((m, i) => (
                  <div key={i} className="group relative">
                    <div className="absolute -left-6 top-0 bottom-0 w-[2px] bg-border group-hover:bg-black transition-colors duration-500"></div>
                    <div className="pl-8 py-2">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-4xl font-black tracking-tighter mb-2">{m.name}</h3>
                                <div className="text-[10px] font-mono bg-black text-white inline-block px-2 py-1 uppercase tracking-[0.2em] font-bold rounded-md">{m.role}</div>
                            </div>
                            <a href={`https://linkedin.com/in/${m.ln}`} target="_blank" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <svg className="w-5 h-5 hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                            </a>
                        </div>
                        <p className="text-xl text-secondary font-light leading-relaxed mb-6">{m.desc}</p>
                        {m.email && <div className="font-mono text-[10px] text-secondary/40 uppercase tracking-widest">{m.email}</div>}
                    </div>
                  </div>
                ))}
            </div>
         </div>
      </Section>

      {/* MONOLITHIC FOOTER */}
      <footer id="contact" className="bg-black text-white pt-32 pb-12 px-6 md:px-12 border-t border-white/10 overflow-hidden relative">
        {/* Ambient Glow */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-white/[0.03] rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-[1600px] mx-auto relative z-10 flex flex-col h-full">
            
            {/* Header */}
            <div className="flex justify-between items-start mb-24 md:mb-40">
                <div className="max-w-xl">
                    <h3 className="text-4xl md:text-5xl font-black tracking-tighter leading-[0.9] mb-8">
                        The physical layer <br/> is the final frontier.
                    </h3>
                    <p className="text-white/40 font-mono text-sm leading-relaxed max-w-sm">
                        Building the immutable infrastructure for global supply chains from Zürich.
                    </p>
                </div>
                <div className="hidden md:block text-right">
                    <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/30 mb-2">Coordinates</div>
                    <div className="text-lg font-bold tracking-tight">47.3769° N, 8.5417° E</div>
                </div>
            </div>

            {/* Contact Actions - Massive */}
            <div className="border-t border-white/15">
                <a href="mailto:contact@tepotec.com" className="group block py-12 md:py-20 border-b border-white/15 relative overflow-hidden">
                    <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1)"></div>
                    <div className="relative z-10 flex justify-between items-center group-hover:px-8 transition-all duration-700">
                        <span className="text-[6vw] md:text-[5rem] font-black tracking-tighter leading-none group-hover:text-black transition-colors duration-700">
                            contact@tepotec.com
                        </span>
                        <svg className="w-8 h-8 md:w-16 md:h-16 text-white group-hover:text-black transition-colors duration-700 -rotate-45 group-hover:rotate-0 transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </div>
                </a>
                
                <div className="grid md:grid-cols-2 border-b border-white/15">
                     <a href="tel:+41797695057" className="group block py-10 md:py-16 border-b md:border-b-0 md:border-r border-white/15 relative overflow-hidden">
                        <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1)"></div>
                        <div className="relative z-10 px-0 group-hover:px-8 transition-all duration-700">
                            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 mb-4 group-hover:text-black/60">Direct Line</div>
                            <div className="text-2xl md:text-4xl font-light tracking-tight group-hover:text-black transition-colors duration-700">
                                +41 79 769 5057
                            </div>
                        </div>
                    </a>
                    
                    <a href="https://www.linkedin.com/company/sacura-ch/" target="_blank" className="group block py-10 md:py-16 relative overflow-hidden">
                        <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1)"></div>
                        <div className="relative z-10 px-0 md:pl-12 group-hover:px-8 transition-all duration-700">
                             <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 mb-4 group-hover:text-black/60">Social</div>
                             <div className="text-2xl md:text-4xl font-light tracking-tight group-hover:text-black transition-colors duration-700">
                                LinkedIn
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            {/* Bottom */}
            <div className="pt-24 flex flex-col md:flex-row justify-between items-end gap-10">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-white/60 font-bold">Systems Operational</span>
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/30 font-bold">© 2026 Sacura Systems</span>
                </div>
                <div className="text-[18vw] leading-[0.7] font-black tracking-tighter text-white select-none pointer-events-none mix-blend-overlay opacity-50 -mb-6 -mr-6">
                    SACURA
                </div>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default App;