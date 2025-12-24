import React, { useState, useCallback } from 'react';
import { QUESTIONS } from './constants';
import { UserAnswer, Option, AnalysisResult } from './types';
import { QuestionCard } from './components/QuestionCard';
import { ResultView } from './components/ResultView';
import { Button } from './components/Button';
import { analyzeInterests } from './services/gemini';

const App: React.FC = () => {
  const [step, setStep] = useState<'welcome' | 'quiz' | 'loading' | 'result'>('welcome');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<UserAnswer[]>([]);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const startQuiz = () => {
    setStep('quiz');
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setError(null);
  };

  const handleAnswer = useCallback(async (option: Option) => {
    const currentQuestion = QUESTIONS[currentQuestionIndex];
    const newAnswer: UserAnswer = {
      questionId: currentQuestion.id,
      questionText: currentQuestion.text,
      answerText: option.text,
      category: currentQuestion.category
    };

    const newAnswers = [...answers, newAnswer];
    setAnswers(newAnswers);

    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setStep('loading');
      try {
        const analysis = await analyzeInterests(newAnswers);
        setResult(analysis);
        setStep('result');
      } catch (err) {
        console.error(err);
        setError("Ah, yıldızlarda bir sorun çıktı! Lütfen tekrar dene.");
        setStep('welcome');
      }
    }
  }, [answers, currentQuestionIndex]);

  const reset = () => {
    setStep('welcome');
    setResult(null);
    setAnswers([]);
    setCurrentQuestionIndex(0);
  };

  return (
    <div className="min-h-screen py-12 px-4 flex flex-col items-center justify-center overflow-x-hidden">
      <main className="relative z-10 w-full flex items-center justify-center">
        {step === 'welcome' && (
          <div className="text-center max-w-2xl mx-auto bg-white/95 backdrop-blur-md p-8 md:p-16 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-8 border-yellow-400 relative">
            <div className="absolute -top-12 -left-10 text-8xl animate-bounce">✨</div>
            <div className="absolute -bottom-10 -right-10 text-8xl animate-pulse">🌈</div>
            
            <h1 className="text-5xl md:text-7xl font-black text-indigo-900 mb-8 leading-tight">
              Yıldız <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">Kaşifi'ne</span> Hoş Geldin!
            </h1>
            
            <div className="text-6xl mb-8 floating">👩‍🚀</div>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-12 font-bold leading-relaxed">
              Senin gizli yeteneklerini ve süper güçlerini keşfetmeye hazır mısın? 
              Harika bir maceraya çıkıyoruz!
            </p>
            
            {error && <p className="text-red-500 mb-6 font-black bg-red-50 p-4 rounded-xl border-2 border-red-200">{error}</p>}
            
            <Button 
              onClick={startQuiz} 
              className="text-3xl px-16 py-6 rounded-[2rem] bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 transform hover:scale-110 shadow-2xl transition-all border-b-8 border-indigo-900 active:border-b-0 active:translate-y-2"
            >
              MACERAYA BAŞLA! 🪐
            </Button>
          </div>
        )}

        {step === 'quiz' && (
          <QuestionCard 
            question={QUESTIONS[currentQuestionIndex]}
            progress={(currentQuestionIndex / QUESTIONS.length) * 100}
            onSelect={handleAnswer}
          />
        )}

        {step === 'loading' && (
          <div className="text-center p-12 bg-white/95 backdrop-blur-md rounded-[3rem] shadow-2xl max-w-lg mx-auto border-8 border-indigo-400">
            <div className="relative w-40 h-40 mx-auto mb-12">
               <div className="absolute inset-0 border-8 border-indigo-100 rounded-full"></div>
               <div className="absolute inset-0 border-8 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
               <div className="absolute inset-0 flex items-center justify-center text-6xl animate-pulse">🛸</div>
            </div>
            <h2 className="text-4xl font-black text-indigo-900 mb-6">Yıldız Haritan Çiziliyor...</h2>
            <p className="text-xl text-gray-600 font-bold italic animate-bounce">
              "Yapay zeka arkadaşımız senin için en havalı unvanı arıyor. Hazır mısın?"
            </p>
          </div>
        )}

        {step === 'result' && result && (
          <ResultView result={result} onReset={reset} />
        )}
      </main>

      {/* Footer Decoration */}
      <footer className="mt-16 text-white/80 font-black text-lg bg-black/20 px-8 py-2 rounded-full backdrop-blur-sm z-10">
        ⭐ 2024 Yıldız Kaşifi: Kendi Yıldızını Parlat! ⭐
      </footer>
    </div>
  );
};

export default App;