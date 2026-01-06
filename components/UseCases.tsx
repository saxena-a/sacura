import React from 'react';

const UseCaseItem: React.FC<{ title: string; desc: string; iconPath: React.ReactNode }> = ({ title, desc, iconPath }) => (
  <div className="group relative flex flex-col p-14 bg-white border border-border hover:border-primary transition-all duration-1000">
    <div className="relative z-10">
        <div className="w-20 h-20 mb-10 bg-[#FAFAFA] border border-border flex items-center justify-center text-secondary group-hover:text-primary group-hover:bg-primary/5 transition-all duration-1000 rounded-3xl">
            <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                {iconPath}
            </svg>
        </div>
        <h3 className="text-3xl font-black text-primary mb-6 tracking-tight">{title}</h3>
        <p className="text-lg text-secondary leading-relaxed font-light">{desc}</p>
    </div>
    {/* High-end Hover Effect */}
    <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-[0.02] transition-opacity duration-1000 pointer-events-none"></div>
  </div>
);

export const UseCases: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-border">
      <UseCaseItem 
        title="Digital Assets" 
        desc="Guaranteeing physical stasis for hardware security modules and cold storage instruments."
        iconPath={<path strokeLinecap="square" strokeLinejoin="round" d="M12 2v20M2 12h20M5 5l14 14M19 5L5 14" />}
      />
      <UseCaseItem 
        title="Pharma" 
        desc="Preventing adulteration of high-value compounds via irreversible vacuum indicators."
        iconPath={<path strokeLinecap="square" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />}
      />
      <UseCaseItem 
        title="Logistics" 
        desc="Establishing an objective chain-of-custody for sovereign documents and intelligence."
        iconPath={<path strokeLinecap="square" strokeLinejoin="round" d="M9 17l3 3 3-3M12 3v17M4 4h16v16H4z" />}
      />
      <UseCaseItem 
        title="Defense" 
        desc="Standardizing equipment integrity through long-term storage and deployment cycles."
        iconPath={<path strokeLinecap="square" strokeLinejoin="round" d="M20 12l-8 8-8-8M12 4v16" />}
      />
      <UseCaseItem 
        title="Luxury" 
        desc="Anchoring physical exclusivity to digital records via unrepeatable entropy markers."
        iconPath={<path strokeLinecap="square" strokeLinejoin="round" d="M12 8l4 4-4 4-4-4 4-4zM2 12h20M12 2v20" />}
      />
      <UseCaseItem 
        title="Silicon" 
        desc="Detecting hardware implants from fabrication to terminal data center deployment."
        iconPath={<path strokeLinecap="square" strokeLinejoin="round" d="M10 20l4-16m4 16l4-16M6 20l4-16" />}
      />
    </div>
  );
};