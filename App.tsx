
import React, { useState, useMemo } from 'react';
import { SectionId } from './types';
import { SECTIONS } from './constants';

// Mapping sections to high-quality 3D Animated Fluent Emojis
const MAGIC_CHARACTERS: Record<string, string> = {
  'A': 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Rabbit%20Face.png',
  'D': 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Robot.png',
  'E': 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Sauropod.png',
  'F': 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Ghost.png',
  'G': 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Magnifying%20Glass%20Tilted%20Left.png',
  'H': 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Smiling%20Face%20with%20Sunglasses.png',
  'Bonus': 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Unicorn.png'
};

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

  const characterUrl = MAGIC_CHARACTERS[currentSectionId] || MAGIC_CHARACTERS['A'];

  return (
    <div className="min-h-screen pb-48 flex flex-col items-center">
      {/* 3D Magic Header */}
      <header className="w-full bg-white/40 backdrop-blur-md border-b-8 border-white py-14 px-6 flex flex-col items-center relative overflow-hidden">
        <div className="z-10 text-center">
          <div className="mb-6 inline-block bg-white p-10 rounded-[60px] shadow-[0_20px_40px_rgba(0,0,0,0.1)] border-4 border-white float-box">
            <img 
              src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Smiling%20Face%20with%20Heart-Eyes.png" 
              alt="Magic Logo" 
              className="w-24 h-24 object-contain"
            />
          </div>
          <h1 className="title-font text-5xl md:text-7xl text-orange-400 drop-shadow-[0_4px_4px_rgba(0,0,0,0.1)] tracking-tight">
            Magic English
          </h1>
          <p className="text-purple-400 font-black text-2xl mt-4 tracking-widest uppercase">P3 Adventure ✨</p>
        </div>
        
        {/* Magic Sparkles */}
        <div className="absolute top-10 left-10 text-4xl sparkle">✨</div>
        <div className="absolute bottom-10 right-10 text-4xl sparkle" style={{ animationDelay: '1s' }}>💎</div>
        <img src={MAGIC_CHARACTERS['A']} className="absolute -left-20 top-0 w-64 h-64 opacity-10 float-box pointer-events-none" />
      </header>

      {/* Main Adventure Area */}
      <main className="w-full max-w-4xl px-6 mt-16 space-y-20">
        {/* Section Welcome Card */}
        <div className="bg-white rounded-[70px] p-12 md:p-16 shadow-[0_30px_60px_rgba(209,184,165,0.2)] border-b-[20px] border-[#d1b8a5]/20 relative overflow-hidden flex flex-col md:flex-row items-center gap-12">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-orange-100/30 rounded-full blur-3xl" />
          
          <div className="flex-shrink-0 bg-gradient-to-br from-white to-orange-50 p-8 rounded-[60px] shadow-lg border-4 border-white float-box">
            <img src={characterUrl} alt="Hero" className="w-48 h-48 object-contain" />
          </div>
          
          <div className="text-center md:text-left relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
              <span className="bg-gradient-to-br from-purple-400 to-orange-400 text-white w-20 h-20 rounded-[32px] flex items-center justify-center font-black text-4xl shadow-2xl">
                {currentSection.id}
              </span>
              <h2 className="title-font text-5xl text-gray-800 tracking-tight">{currentSection.title}</h2>
            </div>
            <p className="text-orange-400 text-3xl font-black italic leading-tight">
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
              <div key={q.id} className="animate-in fade-in slide-in-from-bottom-12 duration-1000">
                <div className="bg-white rounded-[60px] p-12 md:p-14 shadow-2xl border-4 border-white hover:border-orange-100 transition-all hover:-translate-y-2">
                  <div className="flex gap-10 mb-12 items-start">
                    <span className="flex-shrink-0 w-16 h-16 rounded-[24px] bg-orange-50 text-orange-400 border-4 border-white flex items-center justify-center font-black text-3xl shadow-xl">
                      {q.id}
                    </span>
                    <p className="text-4xl font-black text-gray-800 pt-1 leading-[1.2] tracking-tight">
                      {q.question}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    {q.options.map((option) => {
                      const isSelected = answers[key] === option;
                      let btnClass = "squish-btn p-8 rounded-[40px] border-4 font-black transition-all text-left text-3xl relative overflow-hidden ";
                      
                      if (!hasAnswered) {
                        btnClass += "border-gray-50 bg-gray-50 hover:bg-white hover:border-orange-400 hover:text-orange-500 text-gray-600";
                      } else {
                        if (option === q.correctAnswer) {
                          btnClass += "border-green-300 bg-green-50 text-green-700 squish-btn-correct scale-105 z-10";
                        } else if (isSelected && !correct) {
                          btnClass += "border-red-300 bg-red-50 text-red-600 squish-btn-wrong";
                        } else {
                          btnClass += "border-gray-50 bg-white text-gray-300 cursor-not-allowed opacity-20";
                        }
                      }

                      return (
                        <button
                          key={option}
                          disabled={hasAnswered}
                          onClick={() => handleAnswerSelect(q.id, option)}
                          className={btnClass}
                        >
                          <span className="flex items-center gap-6">
                            {hasAnswered && option === q.correctAnswer && <span className="text-4xl animate-bounce">💎</span>}
                            {hasAnswered && isSelected && !correct && <span className="text-4xl">🌑</span>}
                            {option}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {hasAnswered && (
                    <div className="mt-12 flex items-center gap-8 p-10 bg-orange-50/50 rounded-[50px] border-4 border-white animate-in zoom-in-95 duration-500">
                      {correct ? (
                        <>
                          <span className="text-6xl float-box">👑</span>
                          <p className="text-green-600 font-black text-3xl tracking-tight">Magic Victory! 🌟</p>
                        </>
                      ) : (
                        <>
                          <span className="text-6xl">🔮</span>
                          <div className="flex flex-col">
                            <p className="text-orange-400 font-bold text-xl">The crystal says:</p>
                            <p className="text-orange-600 font-black text-4xl">{q.correctAnswer}</p>
                          </div>
                        </>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Magical Ending */}
        <div className="flex flex-col items-center py-24 opacity-30">
           <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Magic%20Wand.png" className="w-32 h-32 mb-6 float-box" />
           <p className="font-black text-gray-500 text-3xl tracking-widest uppercase">End of Chapter ✨</p>
        </div>
      </main>

      {/* Navigation Island */}
      <nav className="fixed bottom-10 left-0 right-0 z-50 px-8 pointer-events-none">
        <div className="max-w-4xl mx-auto nav-island rounded-[50px] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.2)] pointer-events-auto flex items-center overflow-x-auto no-scrollbar gap-5 border-4 border-white">
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
                className={`flex-shrink-0 h-20 px-10 rounded-[35px] text-2xl font-black transition-all flex items-center gap-5 active:scale-90 ${
                  isActive
                    ? 'bg-gradient-to-r from-orange-400 to-purple-400 text-white shadow-2xl scale-110 -translate-y-4'
                    : 'bg-white text-orange-300 hover:bg-orange-50 border-4 border-orange-50'
                }`}
              >
                {isDone && !isActive && <span className="text-3xl">✨</span>}
                <span className="whitespace-nowrap">Part {section.id}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default App;
