
import React, { useState, useMemo } from 'react';
import { SectionId } from './types';
import { SECTIONS } from './constants';

const CRAYON_PALETTE = [
  '#ff9aa2', // Salmon pink
  '#ffdac1', // Peach
  '#e2f0cb', // Lime
  '#b5ead7', // Mint
  '#c7ceea', // Periwinkle
  '#fff5ba'  // Soft yellow
];

const CHARACTER_ICONS: Record<string, string> = {
  'A': 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Dog%20Face.png',
  'D': 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Cat%20Face.png',
  'E': 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Hamster%20Face.png',
  'F': 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Teddy%20Bear.png',
  'G': 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Chicken.png',
  'H': 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Panda.png',
  'Bonus': 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Unicorn.png'
};

const GrassPatch = ({ top, left }: { top: string, left: string }) => (
  <svg className="grass-svg absolute pointer-events-none opacity-40" style={{ top, left }} width="40" height="30" viewBox="0 0 40 30">
    <path d="M10,25 L12,5 L16,25" />
    <path d="M20,25 L22,2 L26,25" />
    <path d="M30,25 L32,8 L36,25" />
  </svg>
);

const SketchDog = ({ top, left, right, className = "", color = "#fff5ba" }: { top: string, left?: string, right?: string, className?: string, color?: string }) => (
  <div className={`absolute pet-sketch pointer-events-none float ${className}`} style={{ top, left, right }}>
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="#5d4037" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M25,60 Q25,35 50,35 Q75,35 75,60 Q75,85 50,85 Q25,85 25,60" fill={color} />
      <path d="M30,40 Q20,30 15,50" strokeWidth="3" fill={color} />
      <path d="M70,40 Q80,30 85,50" strokeWidth="3" fill={color} />
      <circle cx="42" cy="52" r="2.5" fill="#5d4037" />
      <circle cx="58" cy="52" r="2.5" fill="#5d4037" />
      <path d="M47,62 Q50,66 53,62" />
      <path d="M40,85 L38,92 M60,85 L62,92" strokeWidth="4" />
      <path d="M75,70 Q90,65 85,55" strokeWidth="3" />
    </svg>
  </div>
);

const SketchCat = ({ top, left, right, className = "", color = "#ffdac1" }: { top: string, left?: string, right?: string, className?: string, color?: string }) => (
  <div className={`absolute pet-sketch pointer-events-none wiggle ${className}`} style={{ top, left, right }}>
    <svg width="90" height="90" viewBox="0 0 100 100" fill="none" stroke="#5d4037" strokeWidth="2.5" strokeLinecap="round">
      <path d="M30,75 Q30,45 50,45 Q70,45 70,75 Q70,95 50,95 Q30,95 30,75" fill={color} />
      <path d="M35,48 L30,30 L48,46" fill={color} />
      <path d="M65,48 L70,30 L52,46" fill={color} />
      <circle cx="43" cy="65" r="2" fill="#5d4037" />
      <circle cx="57" cy="65" r="2" fill="#5d4037" />
      <path d="M25,72 L12,70 M25,76 L12,78" />
      <path d="M75,72 L88,70 M75,76 L88,78" />
      <path d="M70,85 Q95,90 90,75" strokeWidth="3" />
    </svg>
  </div>
);

const SketchBunny = ({ top, left, right, className = "" }: { top: string, left?: string, right?: string, className?: string }) => (
  <div className={`absolute pet-sketch pointer-events-none wiggle ${className}`} style={{ top, left, right }}>
    <svg width="80" height="100" viewBox="0 0 100 120" fill="none" stroke="#5d4037" strokeWidth="2.5" strokeLinecap="round">
      <path d="M40,30 Q35,5 30,30" fill="#fff" />
      <path d="M60,30 Q65,5 70,30" fill="#fff" />
      <path d="M30,80 Q30,40 50,40 Q70,40 70,80 Q70,100 50,100 Q30,100 30,80" fill="#fff" />
      <circle cx="42" cy="65" r="2" fill="#5d4037" />
      <circle cx="58" cy="65" r="2" fill="#5d4037" />
      <circle cx="50" cy="72" r="2" fill="#ff9aa2" />
    </svg>
  </div>
);

const App: React.FC = () => {
  const [currentSectionId, setCurrentSectionId] = useState<SectionId>('A');
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showFeedback, setShowFeedback] = useState<Record<string, boolean>>({});

  const currentSection = useMemo(() => 
    SECTIONS.find(s => s.id === currentSectionId) || SECTIONS[0], 
  [currentSectionId]);

  const handleAnswerSelect = (questionId: number, answer: string) => {
    const key = `${currentSectionId}-${questionId}`;
    if (showFeedback[key]) return;
    setAnswers(prev => ({ ...prev, [key]: answer }));
    setShowFeedback(prev => ({ ...prev, [key]: true }));
  };

  const isCorrect = (questionId: number) => {
    const key = `${currentSectionId}-${questionId}`;
    const question = currentSection.questions.find(q => q.id === questionId);
    return answers[key] === question?.correctAnswer;
  };

  return (
    <div className="min-h-screen pb-64 relative">
      {/* Hand-drawn Park Decor */}
      <div className="fixed top-[-100px] left-[-100px] w-96 h-96 bg-yellow-100/30 rounded-full blur-[100px] pointer-events-none" />
      
      {/* A small army of hand-drawn pets */}
      <SketchDog top="8%" left="5%" color="#fff9c4" />
      <SketchCat top="18%" right="4%" className="rotate-12" color="#ffe0b2" />
      <SketchBunny top="45%" right="2%" className="scale-75 opacity-30" />
      <SketchDog top="65%" left="2%" className="scale-110 opacity-40 rotate-[-10deg]" color="#cfd8dc" />
      <SketchCat top="85%" right="8%" className="scale-125 opacity-20" color="#f8bbd0" />
      <SketchDog top="40%" left="48%" className="scale-50 opacity-10" />

      {/* Clouds */}
      <div className="fixed top-24 right-[15%] opacity-15 pointer-events-none float">
        <svg width="200" height="100" viewBox="0 0 150 80">
          <path d="M30,50 Q10,50 10,30 Q10,10 40,10 Q50,0 70,10 Q90,0 110,10 Q140,10 140,30 Q140,50 120,50" fill="white" stroke="#bbb" strokeWidth="2" />
        </svg>
      </div>

      {/* Seesaw */}
      <div className="fixed top-[15%] right-[2%] opacity-20 pointer-events-none rotate-12">
        <svg width="150" height="80" viewBox="0 0 120 60">
          <path d="M60,55 L45,55 L52,40 Z" fill="#795548" />
          <path d="M10,42 L110,32" stroke="#d4a373" strokeWidth="8" strokeLinecap="round" />
        </svg>
      </div>

      {/* Scattered Grass */}
      <GrassPatch top="12%" left="15%" />
      <GrassPatch top="25%" left="42%" />
      <GrassPatch top="50%" left="10%" />
      <GrassPatch top="70%" left="88%" />
      <GrassPatch top="82%" left="20%" />
      <GrassPatch top="92%" left="55%" />

      {/* Header */}
      <header className="flex flex-col items-center pt-24 pb-14 px-6 relative z-10">
        <h1 className="crayon-font text-7xl md:text-9xl text-[#8e44ad] font-bold text-center drop-shadow-md text-contrast">
          P3 term3 ch1 test
        </h1>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 space-y-20 relative z-10">
        {/* Section Welcome Card */}
        <div className="paper-card p-12 md:p-16 wobbly-border border-[#5d4037] flex flex-col md:flex-row items-center gap-14 transform hover:scale-[1.01] transition-transform">
          <div className="relative">
             <div className="absolute -inset-6 bg-pink-100/50 rounded-full blur-3xl"></div>
             <div className="relative w-44 h-44 bg-white flex items-center justify-center p-8 border-4 border-dashed border-orange-300 rounded-full wiggle shadow-inner">
                <img src={CHARACTER_ICONS[currentSectionId]} alt="Friend" className="w-full h-full object-contain" />
             </div>
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
              <span className="bg-[#ff9aa2] text-white w-16 h-16 rounded-3xl flex items-center justify-center font-bold text-4xl wobbly-border border-2 shadow-sm">
                {currentSection.id}
              </span>
              <h2 className="clear-font text-6xl text-[#3d2b1f] font-bold tracking-tight">{currentSection.title}</h2>
            </div>
            <p className="crayon-font text-5xl text-gray-500 leading-relaxed italic opacity-80">
              "{currentSection.description}"
            </p>
          </div>
        </div>

        {/* Quest List */}
        <div className="space-y-24 pb-32">
          {currentSection.questions.map((q) => {
            const key = `${currentSectionId}-${q.id}`;
            const hasAnswered = showFeedback[key];
            const correct = isCorrect(q.id);

            return (
              <div key={q.id} className="paper-card p-14 md:p-16 wobbly-border border-[#8d6e63] transition-all transform hover:rotate-[-0.2deg]">
                <div className="flex gap-10 mb-14 items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-[#fff5ba] wobbly-border border-2 flex items-center justify-center font-bold text-4xl text-[#5d4037] clear-font shadow-sm">
                    {q.id}
                  </div>
                  {/* QUESTION: Use Fredoka 700 for maximum clarity */}
                  <p className="clear-font text-5xl md:text-6xl font-bold text-[#2d1e14] leading-[1.3] text-contrast">
                    {q.question}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
                  {q.options.map((option, idx) => {
                    const isSelected = answers[key] === option;
                    const randomColor = CRAYON_PALETTE[idx % CRAYON_PALETTE.length];
                    
                    {/* OPTIONS: Bold Fredoka font */}
                    let btnClass = "wobbly-button p-10 clear-font text-4xl md:text-5xl font-bold text-left flex items-center gap-8 ";
                    let btnStyle: React.CSSProperties = { borderStyle: 'solid' };

                    if (!hasAnswered) {
                      btnClass += "bg-white hover:bg-gray-50 hover:translate-y-[-6px] shadow-sm hover:shadow-xl hover:border-black";
                      btnStyle = { borderColor: randomColor, color: '#3d2b1f' };
                    } else {
                      if (option === q.correctAnswer) {
                        btnClass += "bg-[#c5e1a5] border-[#558b2f] text-[#1b5e20] scale-[1.04] z-10 shadow-2xl";
                      } else if (isSelected && !correct) {
                        btnClass += "bg-[#ef9a9a] border-[#b71c1c] text-white opacity-100";
                      } else {
                        btnClass += "bg-white border-gray-100 text-gray-300 opacity-20 grayscale-[0.4]";
                      }
                    }

                    return (
                      <button
                        key={option}
                        disabled={hasAnswered}
                        onClick={() => handleAnswerSelect(q.id, option)}
                        className={btnClass}
                        style={btnStyle}
                      >
                        <div className="w-12 h-12 rounded-full border-2 border-current flex items-center justify-center text-lg font-black opacity-30">
                          {String.fromCharCode(65 + idx)}
                        </div>
                        {option}
                      </button>
                    );
                  })}
                </div>

                {hasAnswered && (
                  <div className={`mt-14 p-12 wobbly-border border-2 flex items-center gap-12 animate-in slide-in-from-bottom-6 duration-500 ${correct ? 'bg-[#f1f8e9] border-[#aed581]' : 'bg-[#fffde7] border-[#fff176]'}`}>
                    <div className="text-8xl wiggle flex-shrink-0">
                       {correct ? '🌈' : '🖍️'}
                    </div>
                    <div>
                      <h4 className={`crayon-font text-5xl font-black ${correct ? 'text-green-800' : 'text-orange-900'}`}>
                        {correct ? 'Fantastic! You found it! ✨' : 'Nice try! The correct word is:'}
                      </h4>
                      {!correct && (
                        <p className="clear-font text-6xl font-black text-[#5d4037] mt-5 underline decoration-wavy decoration-orange-400">
                          {q.correctAnswer}
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </main>

      {/* Navigation Dock */}
      <nav className="fixed bottom-12 left-0 right-0 z-50 px-8 pointer-events-none">
        <div className="max-w-4xl mx-auto nav-island p-8 pointer-events-auto flex items-center overflow-x-auto no-scrollbar gap-8">
          {SECTIONS.map((section) => {
            const isActive = currentSectionId === section.id;
            const isDone = Object.keys(answers).some(k => k.startsWith(`${section.id}-`));
            
            return (
              <button
                key={section.id}
                onClick={() => {
                  setCurrentSectionId(section.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`flex-shrink-0 min-w-[180px] px-10 py-6 rounded-[50px] clear-font text-3xl font-bold transition-all border-3 flex items-center justify-center gap-5 ${
                  isActive
                    ? 'bg-[#c7ceea] text-[#303f9f] border-[#303f9f] shadow-2xl translate-y-[-15px] scale-110'
                    : 'bg-white text-gray-400 border-gray-100 hover:border-[#c7ceea] hover:text-[#3f51b5] hover:scale-105'
                }`}
              >
                <img src={CHARACTER_ICONS[section.id]} className={`w-12 h-12 ${isActive ? 'scale-125' : 'grayscale opacity-30'}`} />
                <span className="whitespace-nowrap">Part {section.id}</span>
                {isDone && !isActive && <span className="text-green-500 text-xl">✓</span>}
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default App;
