import React from 'react';
import { ReflectionPair, CoinSide } from '../types';
import { CircleCheck, Sparkles } from 'lucide-react';

interface ReflectionProps {
  reflection: ReflectionPair;
  winner: CoinSide;
  optionA?: string;
  optionB?: string;
}

const Reflection: React.FC<ReflectionProps> = ({ reflection, winner, optionA, optionB }) => {
  return (
    <div className="w-full max-w-2xl mx-auto mt-8 space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Heads Card (Team HOWK - Purple) */}
        <div className={`relative p-6 rounded-3xl border-2 transition-all duration-500 overflow-hidden ${
          winner === 'HEADS' 
            ? 'bg-[#1a0e28] border-purple-400 shadow-lg shadow-purple-500/30 transform scale-[1.02]' 
            : 'bg-slate-900/60 border-slate-800 opacity-60 hover:opacity-100 hover:bg-slate-800/70 hover:shadow-lg hover:shadow-purple-500/15'
        }`}>
          {winner === 'HEADS' && (
             <div className="absolute -right-4 -top-4 text-purple-400/15">
                <Sparkles size={100} strokeWidth={1} />
             </div>
          )}
          
          <div className="relative z-10">
            <div className="flex items-center space-x-3 mb-4">
              <div className={`p-2 rounded-xl border ${winner === 'HEADS' ? 'bg-purple-500/20 border-purple-500/50' : 'bg-slate-800 border-slate-700'}`}>
                <span className={`text-lg font-bold ${winner === 'HEADS' ? 'text-purple-300' : 'text-slate-400'}`}>H</span>
              </div>
              <h3 className={`font-bold tracking-wide text-sm uppercase ${winner === 'HEADS' ? 'text-purple-300' : 'text-slate-200'}`}>
                {optionA ? optionA : 'Heads'}
              </h3>
              {winner === 'HEADS' && <CircleCheck className="w-5 h-5 text-purple-400 ml-auto" />}
            </div>
            <p className={`leading-relaxed text-sm ${winner === 'HEADS' ? 'text-purple-50' : 'text-slate-400'}`}>
              {reflection.heads}
            </p>
          </div>
        </div>

        {/* Tails Card (Cyan) */}
        <div className={`relative p-6 rounded-3xl border-2 transition-all duration-500 overflow-hidden ${
          winner === 'TAILS' 
            ? 'bg-[#0e212a] border-cyan-400 shadow-lg shadow-cyan-500/30 transform scale-[1.02]' 
            : 'bg-slate-900/60 border-slate-800 opacity-60 hover:opacity-100 hover:bg-slate-800/70 hover:shadow-lg hover:shadow-cyan-500/15'
        }`}>
          {winner === 'TAILS' && (
             <div className="absolute -right-4 -top-4 text-cyan-400/15">
                <Sparkles size={100} strokeWidth={1} />
             </div>
          )}

          <div className="relative z-10">
            <div className="flex items-center space-x-3 mb-4">
              <div className={`p-2 rounded-xl border ${winner === 'TAILS' ? 'bg-cyan-500/20 border-cyan-500/50' : 'bg-slate-800 border-slate-700'}`}>
                <span className={`text-lg font-bold ${winner === 'TAILS' ? 'text-cyan-300' : 'text-slate-400'}`}>T</span>
              </div>
              <h3 className={`font-bold tracking-wide text-sm uppercase ${winner === 'TAILS' ? 'text-cyan-300' : 'text-slate-200'}`}>
                  {optionB ? optionB : 'Tails'}
              </h3>
              {winner === 'TAILS' && <CircleCheck className="w-5 h-5 text-cyan-400 ml-auto" />}
            </div>
            <p className={`leading-relaxed text-sm ${winner === 'TAILS' ? 'text-cyan-50' : 'text-slate-400'}`}>
              {reflection.tails}
            </p>
          </div>
        </div>
      </div>

      <div className="text-center pt-8 opacity-40">
        <p className="text-xs text-slate-400">
          Reflect on the outcome. The choice is yours.
        </p>
      </div>
    </div>
  );
};

export default Reflection;