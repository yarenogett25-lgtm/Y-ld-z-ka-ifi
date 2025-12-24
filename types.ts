
export interface Question {
  id: number;
  text: string;
  category: string;
  options: Option[];
}

export interface Option {
  id: string;
  text: string;
  icon: string;
  color: string;
}

export interface UserAnswer {
  questionId: number;
  questionText: string;
  answerText: string;
  category: string;
}

export interface AnalysisResult {
  title: string;
  summary: string;
  hobbies: string[];
  futureCareer: string;
  encouragement: string;
}
