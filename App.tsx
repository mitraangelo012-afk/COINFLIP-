import React, { useState, useCallback, useRef } from 'react';
import Coin from './components/Coin';
import Reflection from './components/Reflection';
import { getRandomReflection } from './data/reflections';
import { CoinSide, ReflectionPair } from './types';
import { Sparkles, ArrowRight } from 'lucide-react';

const App: React.FC = () => {
  const [flipping, setFlipping] = useState(false);
  const [result, setResult] = useState<CoinSide | null>(null);
  const [reflection, setReflection] = useState<ReflectionPair | null>(null);
  const [optionA, setOptionA] = useState('');
  const [optionB, setOptionB] = useState('');
  
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleFlip = useCallback(() => {
    if (flipping) return;

    setFlipping(true);
    setResult(null);
    setReflection(null);

    // Updated coin flip logic for a strict 50-50 outcome
    const outcome: CoinSide = Math.floor(Math.random() * 2) === 0 ? 'HEADS' : 'TAILS';
    
    const newReflection = getRandomReflection();

    timeoutRef.current = setTimeout(() => {
      setResult(outcome);
      setFlipping(false);
      
      setTimeout(() => {
        setReflection(newReflection);
      }, 500);
    }, 2000);
  }, [flipping]);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-6 bg-[#0B0B0F] overflow-x-hidden font-sans">
      
      {/* Dynamic Background Decorations - Purple/Cyan for Team HOWK */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-purple-600/10 rounded-full blur-[180px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-cyan-600/10 rounded-full blur-[180px]" />
      </div>

      <main className="relative z-10 w-full max-w-lg flex flex-col items-center">
        
        {/* Header */}
        <header className="mb-6 text-center">
          <div className="inline-flex items-center space-x-2 bg-slate-900/60 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-slate-700 shadow-md">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-slate-300">Coinflip+</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tighter text-white mb-2">
            Make a Choice
          </h1>
          <p className="text-slate-500 text-sm">
            Balanced reflection for better decisions.
          </p>
        </header>
        
        {/* Input Cards */}
        <div className={`w-full grid grid-cols-2 gap-4 mb-2 transition-all duration-500 ${flipping ? 'opacity-30 scale-95 grayscale' : 'opacity-100'}`}>
          
          {/* Heads Input Card - Purple Tint */}
          <div className="group bg-[#131318] [background:radial-gradient(ellipse_at_center,_rgba(255,255,255,0.02)_0%,_transparent_70%)] p-4 rounded-3xl border border-slate-800 focus-within:border-purple-300/60 focus-within:shadow-[0_0_25px_-5px_rgba(168,85,247,0.2)] transition-all duration-300">
            <label className="block text-[10px] font-bold text-purple-400 uppercase tracking-wider mb-2">
              Option A (Heads)
            </label>
            <input 
              type="text" 
              placeholder="Start..."
              value={optionA}
              onChange={(e) => setOptionA(e.target.value)}
              className="w-full bg-transparent text-white font-medium placeholder-slate-600 focus:outline-none text-sm"
            />
          </div>

          {/* Tails Input Card - Cyan Tint */}
          <div className="group bg-[#131318] [background:radial-gradient(ellipse_at_center,_rgba(255,255,255,0.02)_0%,_transparent_70%)] p-4 rounded-3xl border border-slate-800 focus-within:border-cyan-300/60 focus-within:shadow-[0_0_25px_-5px_rgba(34,211,238,0.2)] transition-all duration-300">
            <label className="block text-[10px] font-bold text-cyan-400 uppercase tracking-wider mb-2">
              Option B (Tails)
            </label>
            <input 
              type="text" 
              placeholder="Stop..."
              value={optionB}
              onChange={(e) => setOptionB(e.target.value)}
              className="w-full bg-transparent text-white font-medium placeholder-slate-600 focus:outline-none text-sm"
            />
          </div>
        </div>

        {/* 3D Coin Area */}
        <div className="my-4">
           <Coin flipping={flipping} result={result} />
        </div>

        {/* Action Button */}
        <div className="w-full max-w-xs z-20">
          {!result && !flipping && (
             <button
              onClick={handleFlip}
              className="w-full group relative flex items-center justify-center space-x-3 bg-gradient-to-br from-purple-500 via-purple-600 to-cyan-400 text-white py-4 px-8 rounded-full font-extrabold shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_60px_rgba(168,85,247,0.8)] hover:scale-105 transition-all duration-300"
            >
              <span>Flip Token</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform group-hover:drop-shadow-[0_0_10px_white]" />
            </button>
          )}

          {flipping && (
            <div className="text-center">
              <span className="inline-block px-6 py-2 bg-[#1a1a20] border border-slate-800 rounded-full text-purple-300 text-xs font-bold tracking-wider uppercase animate-[pulse_1.5s_cubic-bezier(0.4,0,0.6,1)_infinite]">
                Accessing Protocol...
              </span>
            </div>
          )}

          {result && !flipping && (
            <button
              onClick={handleFlip}
              className="w-full flex items-center justify-center space-x-2 bg-[#1a1a20] text-slate-300 py-4 px-8 rounded-full font-medium border border-slate-700 hover:bg-slate-800/80 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all duration-200"
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span>Flip Again</span>
            </button>
          )}
        </div>

        {/* Reflection Section */}
        {reflection && result && (
          <div className="w-full">
            <Reflection 
              reflection={reflection} 
              winner={result} 
              optionA={optionA} 
              optionB={optionB} 
            />
          </div>
        )}

      </main>
    </div>
  );
};

export default App;