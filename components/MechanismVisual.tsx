import React from 'react';

const StepCard: React.FC<{ number: string; title: string; description: string; children: React.ReactNode; last?: boolean }> = ({ number, title, description, children, last }) => (
  <div className="relative pl-16 md:pl-28 mb-20 md:mb-32 last:mb-0">
    
    <div className={`absolute left-6 md:left-10 top-14 bottom-0 w-[2px] bg-border ${last ? 'hidden' : ''}`}>
      <div className="h-2/3 w-full bg-primary/10"></div>
    </div>

    <div className="flex flex-col group">
       <div className="absolute left-0 top-0 w-12 h-12 md:w-20 md:h-20 rounded-2xl md:rounded-3xl bg-white border border-border flex items-center justify-center relative z-10 group-hover:border-primary transition-all duration-1000 shadow-xl shadow-black/[0.02]">
          <div className="text-secondary group-hover:text-primary group-hover:scale-110 transition-all duration-700 scale-90 md:scale-100">
            {children}
          </div>
          <div className="absolute -top-3 -right-3 w-7 h-7 md:w-9 md:h-9 bg-background border border-border rounded-full flex items-center justify-center font-mono text-[10px] md:text-[11px] font-black text-primary">
            {number}
          </div>
       </div>

       <div className="pt-2">
        <h4 className="text-3xl md:text-5xl font-black text-primary mb-6 tracking-tighter leading-none">{title}</h4>
        <p className="text-lg md:text-2xl text-secondary leading-relaxed font-light max-w-3xl">{description}</p>
        
        <div className="mt-8 font-mono text-[10px] text-secondary/30 uppercase tracking-[0.5em] font-black">
           Protocol_Node: SAC_{number} <br/>
           Status: Verified
        </div>
       </div>
    </div>
  </div>
);

export const MechanismVisual: React.FC = () => {
  return (
    <div className="relative py-12 md:py-20"> 
      <StepCard 
        number="01" 
        title="Create the Vacuum" 
        description="We create a permanent air-tight seal. This freezes a unique pattern of particles in a state of 'Locked Symmetry'–the base of our physical lock."
      >
         <svg className="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
           <circle cx="12" cy="12" r="10" />
           <circle cx="12" cy="12" r="4" fill="currentColor" fillOpacity="0.1" />
           <path d="M12 2v20M2 12h20" strokeOpacity="0.2"/>
         </svg>
      </StepCard>

      <StepCard 
        number="02" 
        title="Cryptographic QR Binding" 
        description="The unique micro-pattern is photographed, hashed, and cryptographically bound to a QR code. This creates an immutable link between the physical seal and its digital ledger, effectively stopping clone attacks and refund fraud at the source."
      >
         <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
           <path d="M4 4h16v16H4z" />
           <path d="M9 9h6v6H9z" />
           <path d="M15 9V4M9 9V4M9 15v4M15 15v4" strokeOpacity="0.4" />
         </svg>
      </StepCard>

      <StepCard 
        number="03" 
        title="Irreversible Change" 
        description="Any attempt to open the package lets air in. This pressure change shifts the particles. Because the movement is random, it can never be restored to the original state."
      >
         <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
           <path d="M19 19L5 5M19 5L5 19" />
           <path d="M12 4v16M4 12h16" strokeOpacity="0.2" />
         </svg>
      </StepCard>

      <StepCard 
        number="04" 
        title="Instant Verification" 
        description="A simple mobile scan compares the current pattern to the original. Our system detects tiny shifts and warns the user instantly if the seal was broken."
        last
      >
         <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
           <rect x="4" y="4" width="16" height="16" rx="2" />
           <circle cx="12" cy="12" r="3" />
           <path d="M12 7v10M7 12h10" strokeOpacity="0.2" />
         </svg>
      </StepCard>
    </div>
  );
};