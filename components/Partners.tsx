import React from 'react';
import { Button } from './Button';

const PartnerCard: React.FC<{ title: string; desc: string; seeking: string[] }> = ({ title, desc, seeking }) => (
  <div className="flex flex-col p-10 md:p-14 group hover:bg-[#FAFAFA] transition-colors duration-500">
    <h3 className="text-3xl font-black text-primary mb-6 tracking-tighter">{title}</h3>
    <p className="text-lg text-secondary leading-relaxed font-light mb-12 flex-grow">
      {desc}
    </p>
    
    <div className="pt-8 border-t border-border/60">
      <div className="font-mono text-[9px] text-primary uppercase tracking-[0.3em] font-black mb-6">
        Seeking
      </div>
      <ul className="space-y-3">
        {seeking.map((item, i) => (
          <li key={i} className="flex items-center gap-3 font-mono text-[10px] text-secondary uppercase tracking-wider font-medium">
            <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export const Partners: React.FC = () => {
  return (
    <section id="partners" className="bg-surface border-t border-border py-32 md:py-48">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-24">
            <div className="max-w-4xl">
                <h2 className="text-6xl md:text-[8rem] font-black tracking-tighter mb-10 leading-[0.8] text-ink">
                  Protocol <br/> Partners.
                </h2>
                <p className="text-xl md:text-3xl text-secondary font-light leading-tight">
                    Sacura is not seeking customers—we're seeking collaborators. Research institutions, industrial partners, and strategic investors who understand that building fundamental technology requires conviction.
                </p>
            </div>
            <div className="hidden lg:block pb-2">
                 <Button onClick={() => window.location.href='mailto:contact@tepotec.com'}>
                    Start a Conversation
                 </Button>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 border border-border divide-y lg:divide-y-0 lg:divide-x divide-border bg-white shadow-sm">
          <PartnerCard 
            title="Research Institutions" 
            desc="Microparticles, materials science, micro-fabrication, failure analysis. We're seeking academic partners to co-develop and validate core mechanisms."
            seeking={["Joint Research", "Material Studies", "Characterization"]}
          />
          <PartnerCard 
            title="Industrial Partners" 
            desc="Packaging, pharmaceutical, logistics. Companies exploring next-generation tamper evidence for high-value or high-stakes products."
            seeking={["Pilot Programs", "Integration Feasibility", "Co-development"]}
          />
          <PartnerCard 
            title="Strategic Angels" 
            desc="Investors with hard-tech appetite and patience for deep R&D. We're building infrastructure, not features—this takes time and conviction."
            seeking={["Pre-seed Support", "Strategic Guidance", "Network"]}
          />
        </div>

        <div className="lg:hidden mt-12 w-full">
             <Button className="w-full" onClick={() => window.location.href='mailto:contact@tepotec.com'}>
                Start a Conversation
             </Button>
        </div>

      </div>
    </section>
  );
};