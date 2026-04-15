export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswers: number[];
  explanation: string;
  domain: string;
}

export interface ExamVersion {
  id: string;
  name: string;
  description: string;
  questions: Question[];
}

export interface Answer {
  questionId: number;
  selectedOptions: number[];
}

export type ExamState = "home" | "select" | "intro" | "exam" | "review" | "results";

export interface Certification {
  id: string;
  provider: "gcp" | "aws";
  name: string;
  code: string;
  color: string;
  bgColor: string;
  borderColor: string;
  lightBg: string;
  exams: ExamVersion[];
  domains: { name: string; weight: string }[];
  totalQuestions: number;
  duration: string;
  passingScore: string;
}
