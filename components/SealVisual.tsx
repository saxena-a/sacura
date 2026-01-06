import React from 'react';

export const SealVisual: React.FC = () => {
  const particles = Array.from({ length: 320 }).map((_, i) => ({
    top: `${Math.random() * 85 + 7}%`,
    left: `${Math.random() * 85 + 7}%`,
    size: Math.random() < 0.85 ? 1 : 2.5,
    opacity: Math.random() * 0.4 + 0.3,
  }));

  return (
    <div className="relative w-full h-[650px] flex items-center justify-center p-8">
      {/* Precision Radiance */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.04)_0%,transparent_75%)]"></div>
      
      {/* Primary Hardware Unit */}
      <div className="relative w-full max-w-[340px] h-[560px] bg-white border border-border shadow-[0_80px_160px_rgba(0,0,0,0.06)] overflow-hidden rounded-[3rem] transform hover:scale-[1.02] transition-transform duration-1000">
        
        {/* Metadata Header */}
        <div className="px-8 py-8 border-b border-border bg-[#FBFBFB] flex justify-between items-center">
           <div>
              <div className="font-mono text-[8px] text-secondary tracking-widest font-black uppercase mb-1">UNIT_REF</div>
              <h4 className="font-black text-[10px] uppercase tracking-widest text-black">SACURA-092-A</h4>
           </div>
           <div className="w-2.5 h-2.5 bg-black rounded-full shadow-[0_0_15px_rgba(0,0,0,0.2)] animate-pulse"></div>
        </div>

        {/* Diagnostic Port (The Seal) */}
        <div className="mx-8 my-8 h-72 bg-[#F9F9F9] border border-border relative overflow-hidden group">
           <div className="absolute inset-0 blueprint-dot opacity-30"></div>
           
           {/* Lattice Constellation */}
           {particles.map((p, i) => (
             <div 
               key={i}
               className="absolute rounded-full bg-black"
               style={{
                 top: p.top,
                 left: p.left,
                 width: p.size,
                 height: p.size,
                 opacity: p.opacity,
               }}
             />
           ))}

           {/* High-Precision Laser Line */}
           <div className="absolute w-full h-[1.5px] bg-black/30 shadow-[0_0_20px_rgba(0,0,0,0.5)] animate-scan z-10"></div>
           
           <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
        </div>

        {/* Real-time Hardware Telemetry */}
        <div className="px-8 pb-8 space-y-6">
           <div className="flex flex-col gap-3">
             <div className="flex justify-between font-mono text-[9px] text-secondary font-black uppercase tracking-[0.2em]">
               <span>Stasis_Pressure</span>
               <span className="text-black">-1.013 BAR</span>
             </div>
             <div className="w-full h-1.5 bg-border rounded-full overflow-hidden">
               <div className="h-full bg-black w-[99.8%]"></div>
             </div>
           </div>
           
           <div className="flex justify-between items-end pt-5 border-t border-border">
              <div className="font-mono text-[8px] text-secondary/40 leading-relaxed font-black uppercase">
                LAT_SYNC: OK <br/>
                COORD: 0.92 <br/>
                AUDIT: ACTIVE
              </div>
              <div className="w-12 h-12 flex items-center justify-center border border-border rounded-2xl bg-white shadow-sm">
                 <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M5 13l4 4L19 7" strokeLinecap="square" />
                 </svg>
              </div>
           </div>
        </div>
      </div>

      {/* Peripheral HUD Labels */}
      <div className="absolute top-[12%] right-[-5%] glass-card p-5 rounded-2xl shadow-xl animate-reveal" style={{ animationDelay: '0.8s' }}>
          <div className="text-[8px] font-mono text-secondary mb-1 font-black tracking-widest uppercase">Security_Root</div>
          <div className="text-[10px] font-black tracking-widest uppercase">HARDWARE_LOCK</div>
      </div>

      <div className="absolute bottom-[20%] left-[-5%] glass-card p-5 rounded-2xl shadow-xl animate-reveal" style={{ animationDelay: '1.2s' }}>
          <div className="text-[8px] font-mono text-secondary mb-1 font-black tracking-widest uppercase">Stochastic</div>
          <div className="text-[10px] font-black tracking-widest uppercase text-black">PASS_LATTICE</div>
      </div>
    </div>
  );
};