import React, { useEffect, useState } from 'react';
import { CoinSide } from '../types';

interface CoinProps {
  flipping: boolean;
  result: CoinSide | null;
}

const Coin: React.FC<CoinProps> = ({ flipping, result }) => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    if (flipping) {
      // Start spinning rapidly
      const interval = setInterval(() => {
        setRotation((prev) => prev + 720); // Spin fast
      }, 100);
      return () => clearInterval(interval);
    } else if (result) {
      // Land on the result
      // Heads = 0/360, Tails = 180
      const targetBase = result === 'HEADS' ? 0 : 180;
      const currentMod = rotation % 360;
      const extra = 1800; // Add a few extra spins for effect on landing
      const target = rotation + (360 - currentMod) + targetBase + extra;
      
      setRotation(target);
    }
  }, [flipping, result]);

  // Geometric Bird Logo Component
  const HowkLogo = () => (
    <svg viewBox="0 0 100 100" className="w-full h-full p-4 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]">
      {/* Hexagon Background */}
      <path 
        d="M50 5 L90 27.5 V72.5 L50 95 L10 72.5 V27.5 Z" 
        fill="none" 
        stroke="#7e22ce" 
        strokeWidth="3"
        className="drop-shadow-[0_0_5px_#7e22ce]"
      />
      
      {/* Bird Design - Stylized Hawk/Falcon */}
      <g transform="translate(5, 5) scale(0.9)">
        {/* Main Body - Purple */}
        <path 
          d="M35 30 L55 20 L80 15 L70 35 L50 45 L45 65 L35 60 L40 45 Z" 
          fill="#9333ea" 
        />
        {/* Head/Beak */}
        <path 
          d="M35 30 L25 32 L32 38 L40 45 L50 25 Z" 
          fill="#a855f7" 
        />
        {/* Wing Highlight - Cyan */}
        <path 
          d="M55 20 L80 15 L75 25 L50 40 Z" 
          fill="#22d3ee" 
          className="drop-shadow-[0_0_5px_#22d3ee]"
        />
        {/* Eye - Cyan */}
        <circle cx="32" cy="34" r="1.5" fill="#22d3ee" />
        
        {/* Tech/Circuit Lines */}
        <path d="M45 65 L40 80" stroke="#7e22ce" strokeWidth="2" />
        <path d="M70 35 L80 50" stroke="#7e22ce" strokeWidth="2" />
      </g>
    </svg>
  );

  return (
    <div className="relative w-56 h-56 sm:w-72 sm:h-72 perspective-1000 mx-auto my-10">
      <div
        className="relative w-full h-full transform-style-3d transition-transform duration-[2000ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]"
        style={{ transform: `rotateY(${rotation}deg)` }}
      >
        {/* Heads Side - Team HOWK */}
        <div className="absolute w-full h-full backface-hidden rounded-full shadow-[0_0_50px_-10px_rgba(147,51,234,0.4)] bg-gradient-to-br from-[#0d0d0d] to-[#050505] flex items-center justify-center border-[6px] border-[#2a2a2a]">
          {/* Metallic Inner Rim */}
          <div className="absolute inset-[3px] rounded-full border border-white/10 [background:radial-gradient(ellipse_at_center,_rgba(255,255,255,0.07)_0%,_transparent_70%)]" />
          
          <div className="flex flex-col items-center justify-center w-full h-full">
            <div className="w-32 h-32 sm:w-40 sm:h-40 mb-1">
              <HowkLogo />
            </div>
            
            <div className="flex flex-col items-center translate-y-[-10px]">
              <span className="text-[10px] sm:text-xs font-bold text-purple-500 uppercase tracking-[0.2em] opacity-80">Team</span>
              <span className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-purple-200 to-purple-500 tracking-wider drop-shadow-[0_0_5px_rgba(168,85,247,0.3)]" style={{ fontFamily: 'sans-serif', WebkitTextStroke: '1px #4a0e74' }}>
                HOWK
              </span>
              <div className="w-2 h-2 mt-1 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee] animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Tails Side - Matching Aesthetic but Cyan dominant */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-full shadow-[0_0_50px_-10px_rgba(34,211,238,0.4)] bg-gradient-to-br from-[#0d0d0d] to-[#050505] flex items-center justify-center border-[6px] border-[#2a2a2a]">
          {/* Metallic Inner Rim */}
          <div className="absolute inset-[3px] rounded-full border border-white/10 [background:radial-gradient(ellipse_at_center,_rgba(255,255,255,0.07)_0%,_transparent_70%)]" />
          
          <div className="flex flex-col items-center justify-center w-full h-full">
             {/* Hexagon only for Tails (softened) */}
             <svg viewBox="0 0 100 100" className="absolute w-40 h-40 opacity-20 inset-shadow-[0_0_8px_#22d3ee]">
                <path 
                  d="M50 5 L90 27.5 V72.5 L50 95 L10 72.5 V27.5 Z" 
                  fill="none" 
                  stroke="#22d3ee" 
                  strokeWidth="2"
                />
             </svg>
             
             <span className="relative text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-200 to-cyan-500 tracking-wider z-10 drop-shadow-[0_0_5px_rgba(34,211,238,0.3)]" style={{ fontFamily: 'sans-serif', WebkitTextStroke: '1px #0a4f5f' }}>
               TAILS
             </span>
             <div className="w-16 h-1 mt-4 rounded-full bg-purple-600/50"></div>
             <span className="text-[10px] sm:text-xs font-bold text-cyan-500 uppercase tracking-[0.3em] mt-2 opacity-80">System</span>
          </div>
        </div>
      </div>
       {/* Coin Edge */}
       <div className="absolute inset-0 rounded-full border-[6px] border-[#2a2a2a] bg-gradient-to-r from-[#252525] via-[#1a1a1a] to-[#252525] shadow-inner shadow-white/5 opacity-80" 
            style={{ 
              transform: `rotateY(${rotation}deg)`, 
              transformStyle: 'preserve-3d', 
              backgroundImage: 'repeating-linear-gradient(90deg, #252525 0%, #252525 1px, transparent 1px, transparent 2px)',
              backgroundSize: '8px 100%',
              backgroundPosition: 'center',
              borderRadius: '9999px', // Ensures perfect circularity
              zIndex: -1, // Behind the main coin faces
              width: '100%',
              height: '100%'
            }}
      />
    </div>
  );
};

export default Coin;