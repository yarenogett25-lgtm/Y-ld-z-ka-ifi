import React from 'react';
import { AnalysisResult } from '../types';
import { Button } from './Button';

interface ResultViewProps {
  result: AnalysisResult;
  onReset: () => void;
}

export const ResultView: React.FC<ResultViewProps> = ({ result, onReset }) => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-[3rem] p-8 md:p-16 shadow-[0_20px_60px_rgba(0,0,0,0.4)] border-[12px] border-yellow-400 relative overflow-hidden">
      {/* Decorative Ornaments */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500 rounded-full -mr-20 -mt-20 opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-pink-500 rounded-full -ml-20 -mb-20 opacity-10"></div>
      
      <div className="text-center mb-12">
        <div className="inline-block p-6 bg-gradient-to-tr from-yellow-300 to-orange-400 rounded-full mb-6 shadow-xl border-4 border-white transform hover:rotate-12 transition-transform cursor-pointer">
          <span className="text-8xl">🏅</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black text-indigo-950 mb-4">Görev Tamamlandı!</h1>
        <p className="text-2xl text-orange-600 font-black uppercase tracking-widest">Resmi Yıldız Kaşifi Belgesi</p>
      </div>

      <div className="space-y-10 relative z-10">
        <section className="bg-gradient-to-r from-indigo-50 to-blue-50 p-8 rounded-[2rem] border-l-[12px] border-indigo-600 shadow-inner">
          <div className="flex items-center mb-4">
            <span className="text-4xl mr-4">👑</span>
            <h3 className="text-3xl font-black text-indigo-900">Unvanın: {result.title}</h3>
          </div>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-bold italic">
            "{result.summary}"
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-green-50 p-8 rounded-[2.5rem] border-t-[12px] border-green-500 shadow-lg">
            <h4 className="text-2xl font-black text-green-900 mb-6 flex items-center">
              <span className="mr-3 text-3xl">🎯</span> Süper Hobiler
            </h4>
            <ul className="space-y-4">
              {result.hobbies.map((hobby, i) => (
                <li key={i} className="flex items-center bg-white/60 p-3 rounded-2xl border border-green-200 shadow-sm">
                  <span className="text-3xl mr-3">⭐</span>
                  <span className="text-lg md:text-xl text-gray-800 font-black">{hobby}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-purple-50 p-8 rounded-[2.5rem] border-t-[12px] border-purple-500 shadow-lg text-center">
            <h4 className="text-2xl font-black text-purple-900 mb-6 flex items-center justify-center">
              <span className="mr-3 text-3xl">🚀</span> Gelecek Rotası
            </h4>
            <div className="bg-white p-6 rounded-3xl border-4 border-dashed border-purple-300 mb-4">
              <p className="text-3xl font-black text-purple-800 leading-tight">
                {result.futureCareer}
              </p>
            </div>
            <p className="text-lg text-purple-600 font-bold italic">Evren senin gibi bir kahramanı bekliyor!</p>
          </div>
        </section>

        <section className="text-center bg-yellow-400/20 p-8 rounded-[2rem] border-4 border-dashed border-yellow-400 shadow-xl transform hover:scale-102 transition-transform">
          <p className="text-2xl md:text-3xl font-black text-yellow-950 leading-tight">
            "{result.encouragement}"
          </p>
        </section>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 pt-10">
          <Button 
            onClick={onReset} 
            className="w-full md:w-auto text-2xl px-12 py-5 bg-indigo-600 text-white hover:bg-indigo-700 border-b-8 border-indigo-900 rounded-[2rem]"
          >
            Yeniden Keşfet 🔄
          </Button>
          <button 
            onClick={() => window.print()}
            className="text-xl font-black text-indigo-600 hover:text-indigo-800 underline underline-offset-8"
          >
            Sertifikamı Yazdır 🖨️
          </button>
        </div>
      </div>
    </div>
  );
};