import React, { useState } from 'react';
import { Question, Option } from '../types';
import { speakText } from '../services/gemini';

interface QuestionCardProps {
  question: Question;
  onSelect: (option: Option) => void;
  progress: number;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ question, onSelect, progress }) => {
  const [activeVoiceId, setActiveVoiceId] = useState<string | null>(null);

  const handleSpeak = async (text: string, id: string) => {
    if (activeVoiceId) return;
    setActiveVoiceId(id);
    try {
      await speakText(text);
    } catch (err) {
      console.error("Audio error:", err);
    } finally {
      setActiveVoiceId(null);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      {/* Progress Rocket */}
      <div className="mb-8 relative pt-8">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xl font-bold text-white bg-black/30 px-4 py-1 rounded-full backdrop-blur-sm">
            Görev: {question.id} / 20
          </span>
          <span className="text-4xl">🏁</span>
        </div>
        <div className="w-full bg-white/20 h-4 rounded-full overflow-visible relative">
          <div 
            className="bg-gradient-to-r from-yellow-300 to-orange-500 h-full rounded-full transition-all duration-1000 ease-out relative shadow-[0_0_15px_rgba(253,186,45,0.6)]" 
            style={{ width: `${progress}%` }}
          >
            <div className="absolute -right-6 -top-4 text-4xl transform rotate-90">🚀</div>
          </div>
        </div>
      </div>

      <div className="bg-white/95 backdrop-blur-md rounded-[2.5rem] p-6 md:p-10 shadow-2xl border-8 border-yellow-300 relative">
        {/* Character Guide */}
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <div className="text-6xl mb-2 bg-white rounded-full p-2 shadow-lg border-4 border-yellow-300">🤖</div>
          <div className="bg-white px-4 py-1 rounded-full shadow-md text-sm font-bold text-indigo-600 border border-indigo-100">
            Kaptan Galaksi
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center mb-10">
          <h2 className="text-2xl md:text-4xl font-black text-gray-800 text-center mb-6 leading-tight">
            {question.text}
          </h2>
          
          <button 
            onClick={() => handleSpeak(question.text, 'main')}
            disabled={activeVoiceId !== null}
            className={`group flex items-center space-x-3 px-8 py-3 rounded-full transition-all transform active:scale-95 ${
              activeVoiceId === 'main' 
              ? 'bg-gray-200 text-gray-500' 
              : 'bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-lg'
            }`}
          >
            <span className={`text-2xl ${activeVoiceId === 'main' ? 'animate-pulse' : 'group-hover:scale-120'}`}>
              {activeVoiceId === 'main' ? '⏳' : '🔊'}
            </span>
            <span className="text-lg font-bold">Soruyu Seslendir</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {question.options.map((option) => (
            <div key={option.id} className="relative group">
              <button
                onClick={() => onSelect(option)}
                className={`${option.color} w-full h-full p-6 md:p-8 rounded-[2rem] flex items-center space-x-6 transition-all transform hover:-translate-y-2 hover:shadow-2xl active:scale-95 border-b-8 border-black/20 text-white`}
              >
                <div className="bg-white/20 p-4 rounded-2xl group-hover:bg-white/30 transition-colors">
                  <span className="text-5xl group-hover:scale-125 block transition-transform">{option.icon}</span>
                </div>
                <span className="text-xl md:text-2xl font-black text-left leading-tight drop-shadow-md">
                  {option.text}
                </span>
              </button>
              
              {/* Individual Speaker for each option */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleSpeak(option.text, option.id);
                }}
                disabled={activeVoiceId !== null}
                className={`absolute top-4 right-4 p-2 rounded-full backdrop-blur-sm transition-all shadow-md ${
                  activeVoiceId === option.id 
                  ? 'bg-white/50 text-gray-400' 
                  : 'bg-white/30 text-white hover:bg-white hover:text-indigo-600'
                }`}
                title="Seçeneği Seslendir"
              >
                <span className="text-xl">{activeVoiceId === option.id ? '⌛' : '🔊'}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
      
      <p className="text-center text-white/70 mt-6 font-bold text-lg animate-pulse">
        Bir seçeneğe tıkla ve yolculuğa devam et! ✨
      </p>
    </div>
  );
};