import React, { useState, useEffect, useMemo } from 'react';

const generateGridPoints = (rows: number, cols: number, width: number, height: number) => {
  const points = [];
  const xStep = width / cols;
  const yStep = height / rows;
  
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      // Add some randomness to the grid so it looks like a natural distribution
      const offsetX = (Math.random() - 0.5) * (xStep * 0.8);
      const offsetY = (Math.random() - 0.5) * (yStep * 0.8);
      
      points.push({
        id: `p-${i}-${j}`,
        ox: (j * xStep) + (xStep / 2) + offsetX,
        oy: (i * yStep) + (yStep / 2) + offsetY,
      });
    }
  }
  return points;
};

export const ParticleDemo: React.FC = () => {
  const [tamperLevel, setTamperLevel] = useState(0);
  const [width, setWidth] = useState(800);
  const [height, setHeight] = useState(500);
  
  useEffect(() => {
    const handleResize = () => {
      const container = document.getElementById('demo-container');
      if (container) {
        setWidth(container.clientWidth);
        setHeight(container.clientHeight);
      }
    };
    setTimeout(handleResize, 100);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const points = useMemo(() => {
    const cols = width < 600 ? 12 : 20;
    const rows = width < 600 ? 8 : 12;
    return generateGridPoints(rows, cols, width, height);
  }, [width, height]);

  // Generate random vectors for each point to move along when tampered
  const vectors = useMemo(() => {
    return points.map(() => ({
      vx: (Math.random() - 0.5) * 50, // Max drift X
      vy: (Math.random() - 0.5) * 50, // Max drift Y
    }));
  }, [points]);

  const matchPercentage = Math.max(0, 100 - (tamperLevel * 1.2)).toFixed(1);
  const isSecure = parseFloat(matchPercentage) > 95;

  return (
    <div className="w-full bg-black rounded-3xl border border-zinc-800 shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px] font-mono">
      
      {/* LEFT CONTROL PANEL */}
      <div className="md:w-[350px] bg-zinc-900 border-b md:border-b-0 md:border-r border-zinc-800 p-8 flex flex-col relative z-20">
        <div className="mb-10">
           <div className="text-[10px] uppercase tracking-widest text-zinc-500 mb-2 font-bold">System Status</div>
           <div className={`flex items-center gap-3 text-2xl font-black tracking-tighter ${isSecure ? 'text-emerald-500' : 'text-red-500'}`}>
              <div className={`w-3 h-3 rounded-full ${isSecure ? 'bg-emerald-500' : 'bg-red-500 animate-pulse'}`}></div>
              {isSecure ? 'SECURE' : 'COMPROMISED'}
           </div>
        </div>

        <div className="mb-12">
           <div className="flex justify-between items-end mb-4">
              <label className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">Tamper Magnitude</label>
              <span className="text-white font-bold">{tamperLevel}%</span>
           </div>
           
           <input 
             type="range" 
             min="0" 
             max="100" 
             value={tamperLevel} 
             onChange={(e) => setTamperLevel(Number(e.target.value))}
             className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-white hover:accent-zinc-300 transition-all"
           />
           <div className="flex justify-between mt-2 text-[9px] text-zinc-600 uppercase font-bold">
              <span>Baseline</span>
              <span>Critical Failure</span>
           </div>
        </div>

        <div className="space-y-6 flex-grow">
           <div className="p-4 bg-black border border-zinc-800 rounded-xl">
              <div className="text-[9px] uppercase tracking-widest text-zinc-500 mb-1">Match Confidence</div>
              <div className="text-4xl font-black text-white">{matchPercentage}%</div>
           </div>
           
           <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-zinc-950 border border-zinc-800 rounded-lg">
                 <div className="text-[9px] uppercase text-zinc-600 mb-1">Vectors</div>
                 <div className="text-white text-sm">{points.length} PTS</div>
              </div>
              <div className="p-3 bg-zinc-950 border border-zinc-800 rounded-lg">
                 <div className="text-[9px] uppercase text-zinc-600 mb-1">Drift</div>
                 <div className="text-white text-sm">{(tamperLevel * 0.42).toFixed(2)}mm</div>
              </div>
           </div>
        </div>

        <div className="mt-8 pt-6 border-t border-zinc-800">
           <p className="text-[10px] leading-relaxed text-zinc-500">
             <span className="text-white font-bold">NOTE:</span> This demo uses a simplified matcher. The production system utilizes a patent-pending sub-micron computer vision pipeline (US11897642B2).
           </p>
        </div>
      </div>

      {/* RIGHT VISUALIZATION AREA */}
      <div id="demo-container" className="flex-1 relative bg-black overflow-hidden cursor-crosshair group">
        
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        {/* Center Target UI */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <div className="w-[80%] h-[80%] border border-dashed border-zinc-800 rounded-full opacity-50"></div>
            <div className="absolute w-full h-[1px] bg-zinc-800"></div>
            <div className="absolute h-full w-[1px] bg-zinc-800"></div>
        </div>

        <svg width={width} height={height} className="absolute inset-0">
          {points.map((pt, i) => {
             // Calculate displaced position based on tamperLevel
             const dx = vectors[i].vx * (tamperLevel / 100);
             const dy = vectors[i].vy * (tamperLevel / 100);
             const cx = pt.ox + dx;
             const cy = pt.oy + dy;

             // Only render if within reasonable bounds to save perf
             if (cx < -10 || cx > width + 10 || cy < -10 || cy > height + 10) return null;

             const isDisplaced = tamperLevel > 5;

             return (
               <g key={i}>
                 {/* Baseline Point (Ghost) - Only show if displaced enough */}
                 {isDisplaced && (
                   <circle 
                     cx={pt.ox} 
                     cy={pt.oy} 
                     r={2} 
                     fill="#333" 
                   />
                 )}
                 
                 {/* Connection Line */}
                 {isDisplaced && (
                   <line 
                     x1={pt.ox} 
                     y1={pt.oy} 
                     x2={cx} 
                     y2={cy} 
                     stroke={isSecure ? "#10B981" : "#EF4444"} 
                     strokeWidth={1} 
                     opacity={0.4}
                   />
                 )}

                 {/* Current Point */}
                 <circle 
                   cx={cx} 
                   cy={cy} 
                   r={isDisplaced ? 3 : 2} 
                   fill={isSecure ? "#fff" : "#EF4444"} 
                   className="transition-colors duration-300"
                 />
               </g>
             );
          })}
        </svg>

        {/* Overlay Labels */}
        <div className="absolute top-6 right-6 text-right pointer-events-none">
           <div className="text-[9px] font-mono uppercase tracking-widest text-zinc-500 mb-1">Visualization Mode</div>
           <div className="text-xs font-bold text-white uppercase tracking-wider">
              {tamperLevel === 0 ? 'Baseline_Reference' : 'Realtime_Comparison'}
           </div>
        </div>

        <div className="absolute bottom-6 left-6 pointer-events-none">
           <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <div className="text-[9px] font-mono uppercase tracking-widest text-zinc-500">Live Feed Active</div>
           </div>
        </div>

      </div>

    </div>
  );
};