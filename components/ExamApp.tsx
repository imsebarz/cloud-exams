"use client";

import { useState, useCallback, useMemo, useEffect } from "react";
import { Question, Answer, ExamState, Certification } from "@/lib/types";
import { certifications } from "@/lib/certifications";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  XCircle,
  Flag,
  RotateCcw,
  BookOpen,
  BarChart3,
  AlertTriangle,
  Check,
  ArrowLeft,
  FileText,
  Trophy,
  Target,
  Cloud,
} from "lucide-react";

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function formatTime(seconds: number): string {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return `${h}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
}

const GCPLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const AWSLogo = () => (
  <svg viewBox="0 0 80 48" className="w-10 h-6">
    <path d="M22.7 21.4c0 .9.1 1.6.3 2.2.2.5.5 1.1.9 1.7.1.2.2.4.2.5 0 .2-.1.4-.4.6l-1.2.8c-.2.1-.3.2-.5.2-.2 0-.4-.1-.6-.3-.3-.3-.5-.6-.7-1-.2-.3-.4-.7-.6-1.1-1.6 1.9-3.7 2.8-6.1 2.8-1.7 0-3.1-.5-4.1-1.5-1-.9-1.5-2.2-1.5-3.8 0-1.7.6-3 1.8-4.1 1.2-1 2.8-1.6 4.8-1.6.7 0 1.4.1 2.1.2.7.1 1.5.3 2.3.5v-1.4c0-1.5-.3-2.6-1-3.2-.6-.6-1.7-.9-3.2-.9-.7 0-1.4.1-2.1.3-.7.2-1.5.4-2.2.8-.3.2-.6.2-.7.3-.1 0-.2.1-.3.1-.3 0-.4-.2-.4-.6V11c0-.3 0-.5.1-.7.1-.1.2-.3.5-.4.7-.4 1.6-.7 2.5-.9 1-.3 2-.4 3.1-.4 2.3 0 4 .5 5.1 1.6 1.1 1.1 1.6 2.7 1.6 4.9v6.3zm-8.4 3.1c.7 0 1.4-.1 2.1-.4.7-.3 1.4-.7 1.9-1.3.3-.4.6-.8.7-1.3.1-.5.2-1.1.2-1.8v-.9c-.6-.2-1.2-.3-1.9-.4-.7-.1-1.3-.1-2-.1-1.3 0-2.3.3-2.9.8-.6.5-1 1.3-1 2.3 0 .9.2 1.6.7 2.1.5.6 1.2.9 2.2.9v.1z" fill="#252F3E"/>
    <path d="M36.5 27c-.3 0-.5-.1-.7-.2-.2-.2-.3-.4-.4-.8l-4.4-14.5c-.1-.4-.2-.7-.2-.8 0-.3.2-.5.5-.5h1.9c.3 0 .6.1.7.2.2.2.3.4.3.8l3.2 12.5 2.9-12.5c.1-.4.2-.7.3-.8.2-.2.4-.2.7-.2h1.5c.3 0 .6.1.7.2.2.2.3.4.4.8l3 12.6 3.3-12.6c.1-.4.2-.7.3-.8.2-.2.4-.2.7-.2h1.8c.3 0 .5.2.5.5 0 .1 0 .2-.1.4 0 .1-.1.3-.2.5l-4.5 14.5c-.1.4-.2.7-.4.8-.2.2-.4.2-.7.2h-1.6c-.3 0-.6-.1-.7-.2-.2-.2-.3-.4-.4-.8L41 15l-2.9 11.4c-.1.4-.2.7-.4.8-.2.2-.4.2-.7.2h-1.6l.1-.4z" fill="#252F3E"/>
    <path d="M60.5 27.5c-1.1 0-2.2-.1-3.2-.4-1-.3-1.9-.6-2.4-1-.3-.2-.5-.4-.6-.6 0-.1-.1-.3-.1-.4v-.9c0-.4.2-.6.5-.6.1 0 .3 0 .4.1.1.1.3.2.5.3.7.3 1.4.6 2.2.8.8.2 1.5.3 2.3.3 1.2 0 2.2-.2 2.8-.7.6-.5 1-1.1 1-2 0-.6-.2-1-.5-1.4-.4-.4-1-.7-1.9-1l-2.7-.8c-1.4-.4-2.4-1.1-3.1-1.9-.6-.8-1-1.7-1-2.8 0-.8.2-1.5.5-2.1.4-.6.8-1.2 1.4-1.6.6-.4 1.3-.8 2.1-1 .8-.2 1.6-.3 2.5-.3.4 0 .9 0 1.4.1.5.1.9.2 1.3.3.4.1.8.3 1.1.4.3.2.6.3.7.5.2.2.3.3.3.5.1.2.1.4.1.7v.8c0 .4-.2.6-.5.6-.2 0-.5-.1-.9-.3-1.3-.6-2.8-.9-4.3-.9-1.1 0-2 .2-2.6.6-.6.4-.9 1-.9 1.8 0 .6.2 1 .6 1.4.4.4 1.1.7 2.1 1l2.6.8c1.4.4 2.4 1 3 1.8.6.8.9 1.7.9 2.7 0 .8-.2 1.5-.5 2.2-.3.6-.8 1.2-1.4 1.6-.6.5-1.3.8-2.2 1-.8.3-1.8.4-2.8.4z" fill="#252F3E"/>
    <path d="M68.9 36.4c-4.8 3.5-11.7 5.4-17.6 5.4-8.3 0-15.9-3.1-21.5-8.2-.4-.4 0-.9.5-.6 6.1 3.6 13.7 5.7 21.5 5.7 5.3 0 11.1-1.1 16.4-3.3.8-.3 1.5.5.7 1z" fill="#FF9900"/>
    <path d="M70.8 34.1c-.6-.8-4-0.4-5.5-.2-.5.1-.5-.4-.1-.7 2.7-1.9 7.1-1.3 7.6-.7.5.6-.1 5-2.7 7.1-.4.3-.8.2-.6-.3.6-1.5 1.9-4.7 1.3-5.2z" fill="#FF9900"/>
  </svg>
);

export default function ExamApp() {
  const [state, setState] = useState<ExamState>("home");
  const [activeCert, setActiveCert] = useState<Certification | null>(null);
  const [selectedExamId, setSelectedExamId] = useState<string | null>(null);
  const [examQuestions, setExamQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Map<number, Answer>>(new Map());
  const [flagged, setFlagged] = useState<Set<number>>(new Set());
  const [timeLeft, setTimeLeft] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [timerActive, setTimerActive] = useState(false);

  const totalQuestions = activeCert?.totalQuestions ?? 50;
  const examTime = activeCert?.id === "aws-clp" ? 5400 : 7200;
  const themeColor = activeCert?.color ?? "#1a73e8";

  useEffect(() => {
    if (!timerActive) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setTimerActive(false);
          setState("results");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [timerActive]);

  const selectCert = useCallback((cert: Certification) => {
    setActiveCert(cert);
    setState("select");
  }, []);

  const selectExam = useCallback((examId: string) => {
    setSelectedExamId(examId);
    setState("intro");
  }, []);

  const startExam = useCallback(() => {
    if (!activeCert) return;
    const exam = activeCert.exams.find((e) => e.id === selectedExamId);
    if (!exam) return;
    const shuffled = shuffleArray(exam.questions).slice(0, totalQuestions);
    setExamQuestions(shuffled);
    setCurrentIndex(0);
    setAnswers(new Map());
    setFlagged(new Set());
    setTimeLeft(examTime);
    setShowExplanation(false);
    setState("exam");
    setTimerActive(true);
  }, [activeCert, selectedExamId, totalQuestions, examTime]);

  const endExam = useCallback(() => {
    setTimerActive(false);
    setState("results");
  }, []);

  const goHome = useCallback(() => {
    setTimerActive(false);
    setState("home");
    setActiveCert(null);
    setShowExplanation(false);
  }, []);

  const goToSelect = useCallback(() => {
    setTimerActive(false);
    setState("select");
    setShowExplanation(false);
  }, []);

  const currentQuestion = examQuestions[currentIndex];

  const toggleOption = useCallback(
    (optionIndex: number) => {
      if (!currentQuestion) return;
      const isMultiple = currentQuestion.correctAnswers.length > 1;
      setAnswers((prev) => {
        const next = new Map(prev);
        const existing = next.get(currentQuestion.id);
        let selected = existing ? [...existing.selectedOptions] : [];
        if (isMultiple) {
          selected = selected.includes(optionIndex)
            ? selected.filter((i) => i !== optionIndex)
            : [...selected, optionIndex];
        } else {
          selected = [optionIndex];
        }
        next.set(currentQuestion.id, { questionId: currentQuestion.id, selectedOptions: selected });
        return next;
      });
    },
    [currentQuestion]
  );

  const toggleFlag = useCallback(() => {
    if (!currentQuestion) return;
    setFlagged((prev) => {
      const next = new Set(prev);
      next.has(currentQuestion.id) ? next.delete(currentQuestion.id) : next.add(currentQuestion.id);
      return next;
    });
  }, [currentQuestion]);

  const isCorrectAnswer = useCallback(
    (q: Question) => {
      const answer = answers.get(q.id);
      if (!answer) return false;
      const ss = [...answer.selectedOptions].sort();
      const sc = [...q.correctAnswers].sort();
      return ss.length === sc.length && ss.every((v, i) => v === sc[i]);
    },
    [answers]
  );

  const score = useMemo(() => examQuestions.filter(isCorrectAnswer).length, [examQuestions, isCorrectAnswer]);

  const domainScores = useMemo(() => {
    const domains = new Map<string, { correct: number; total: number }>();
    examQuestions.forEach((q) => {
      const d = domains.get(q.domain) || { correct: 0, total: 0 };
      d.total++;
      if (isCorrectAnswer(q)) d.correct++;
      domains.set(q.domain, d);
    });
    return domains;
  }, [examQuestions, isCorrectAnswer]);

  const answeredCount = answers.size;
  const actualQuestionCount = examQuestions.length || totalQuestions;
  const percentage = Math.round((score / actualQuestionCount) * 100);
  const passed = percentage >= 70;
  const selectedExam = activeCert?.exams.find((e) => e.id === selectedExamId);

  // ══════════════════════════════════════
  //  HOME — certification picker
  // ══════════════════════════════════════
  if (state === "home") {
    return (
      <div className="min-h-screen bg-[#f8f9fa] flex items-center justify-center p-4">
        <div className="max-w-2xl w-full">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-white border border-[#dadce0] rounded-full px-4 py-1.5 text-xs text-[#5f6368] mb-5">
              <Cloud className="w-3.5 h-3.5" /> Cloud Certification Practice
            </div>
            <h1 className="text-3xl font-semibold text-[#202124] mb-2">Practice Exams</h1>
            <p className="text-[#5f6368]">Choose a certification to start studying</p>
          </div>

          <div className="grid gap-4">
            {certifications.map((cert) => {
              const totalQ = cert.exams.reduce((sum, e) => sum + e.questions.length, 0);
              return (
                <button
                  key={cert.id}
                  onClick={() => selectCert(cert)}
                  className="bg-white border border-[#dadce0] rounded-lg p-6 text-left hover:shadow-lg transition-all group"
                  style={{ borderLeftWidth: 4, borderLeftColor: cert.color }}
                >
                  <div className="flex items-center gap-5">
                    <div className="shrink-0">
                      {cert.provider === "gcp" ? <GCPLogo /> : <AWSLogo />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <h3 className="text-lg font-medium text-[#202124]">{cert.name}</h3>
                        <span className="text-xs font-mono px-2 py-0.5 rounded" style={{ backgroundColor: cert.bgColor, color: cert.color }}>
                          {cert.code}
                        </span>
                      </div>
                      <p className="text-sm text-[#5f6368]">
                        {cert.provider === "gcp" ? "Google Cloud" : "Amazon Web Services"}
                      </p>
                      <div className="flex gap-4 mt-2 text-xs text-[#5f6368]">
                        <span>{cert.exams.length} exams</span>
                        <span>{totalQ} questions</span>
                        <span>{cert.duration}</span>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-[#dadce0] group-hover:translate-x-1 shrink-0 transition-transform" style={{ color: cert.color }} />
                  </div>
                </button>
              );
            })}
          </div>

          <p className="text-center text-xs text-[#80868b] mt-8">
            300 practice questions across 6 exams and 2 certifications.
          </p>
        </div>
      </div>
    );
  }

  // ══════════════════════════════════════
  //  SELECT EXAM
  // ══════════════════════════════════════
  if (state === "select" && activeCert) {
    return (
      <div className="min-h-screen bg-[#f8f9fa] flex items-center justify-center p-4">
        <div className="max-w-3xl w-full">
          <div className="mb-6">
            <button onClick={goHome} className="text-sm text-[#5f6368] hover:text-[#202124] flex items-center gap-1 mb-4 transition-colors">
              <ArrowLeft className="w-4 h-4" /> All certifications
            </button>
            <div className="flex items-center gap-3">
              {activeCert.provider === "gcp" ? <GCPLogo /> : <AWSLogo />}
              <div>
                <h1 className="text-xl font-semibold text-[#202124]">{activeCert.name}</h1>
                <p className="text-sm text-[#5f6368]">
                  {activeCert.provider === "gcp" ? "Google Cloud" : "Amazon Web Services"} — {activeCert.code}
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            {activeCert.exams.map((exam) => (
              <button
                key={exam.id}
                onClick={() => selectExam(exam.id)}
                className="bg-white border border-[#dadce0] rounded-lg p-5 text-left hover:shadow-md transition-all group"
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = activeCert.color)}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#dadce0")}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0 transition-colors"
                    style={{ backgroundColor: activeCert.bgColor }}>
                    <FileText className="w-6 h-6" style={{ color: activeCert.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-base font-medium text-[#202124]">{exam.name}</h3>
                      <span className="text-xs bg-[#f1f3f4] text-[#5f6368] rounded-full px-2 py-0.5">
                        {exam.questions.length} questions
                      </span>
                    </div>
                    <p className="text-sm text-[#5f6368]">{exam.description}</p>
                    <div className="flex gap-4 mt-2 text-xs text-[#5f6368]">
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {activeCert.duration}</span>
                      <span className="flex items-center gap-1"><Target className="w-3 h-3" /> {activeCert.passingScore} to pass</span>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-[#dadce0] shrink-0 mt-3 transition-colors" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ══════════════════════════════════════
  //  INTRO
  // ══════════════════════════════════════
  if (state === "intro" && activeCert && selectedExam) {
    return (
      <div className="min-h-screen bg-[#f8f9fa] flex items-center justify-center p-4">
        <div className="max-w-2xl w-full">
          <div className="bg-white border border-[#dadce0] rounded-lg overflow-hidden">
            <div className="px-8 py-6" style={{ backgroundColor: themeColor }}>
              <button onClick={() => setState("select")} className="text-white/70 hover:text-white text-sm mb-3 flex items-center gap-1 transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to exams
              </button>
              <div className="flex items-center gap-3">
                <div className="bg-white/20 rounded-lg p-2">
                  {activeCert.provider === "gcp" ? (
                    <svg viewBox="0 0 24 24" className="w-6 h-6">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#fff" fillOpacity="0.8"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#fff" fillOpacity="0.9"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#fff" fillOpacity="0.7"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#fff"/>
                    </svg>
                  ) : (
                    <Cloud className="w-6 h-6 text-white" />
                  )}
                </div>
                <div>
                  <h1 className="text-white text-xl font-semibold">{selectedExam.name}</h1>
                  <p className="text-white/70 text-sm">{activeCert.name} — {activeCert.code}</p>
                </div>
              </div>
            </div>

            <div className="px-8 py-6 space-y-5">
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="bg-[#f8f9fa] rounded px-4 py-3">
                  <span className="text-[#5f6368]">Questions</span>
                  <p className="font-medium text-[#202124] mt-0.5">{activeCert.totalQuestions} multiple choice</p>
                </div>
                <div className="bg-[#f8f9fa] rounded px-4 py-3">
                  <span className="text-[#5f6368]">Duration</span>
                  <p className="font-medium text-[#202124] mt-0.5">{activeCert.duration}</p>
                </div>
                <div className="bg-[#f8f9fa] rounded px-4 py-3">
                  <span className="text-[#5f6368]">Passing Score</span>
                  <p className="font-medium text-[#202124] mt-0.5">{activeCert.passingScore}</p>
                </div>
                <div className="bg-[#f8f9fa] rounded px-4 py-3">
                  <span className="text-[#5f6368]">Format</span>
                  <p className="font-medium text-[#202124] mt-0.5">Single & multi-select</p>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-[#202124] mb-2">Domains covered</h3>
                <div className="space-y-1.5 text-sm text-[#5f6368]">
                  {activeCert.domains.map((d, i) => (
                    <div key={i} className="flex justify-between">
                      <span>{i + 1}. {d.name}</span>
                      <span style={{ color: themeColor }}>{d.weight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#fef7e0] border border-[#fdd663] rounded px-4 py-3 flex gap-3 text-sm">
                <AlertTriangle className="w-5 h-5 text-[#ea8600] shrink-0 mt-0.5" />
                <p className="text-[#3c4043]">
                  Practice exam for study purposes. Questions simulate the real exam format and difficulty. Questions are shuffled each attempt.
                </p>
              </div>

              <button
                onClick={startExam}
                className="w-full hover:opacity-90 text-white rounded py-3 px-6 font-medium text-sm transition-opacity"
                style={{ backgroundColor: themeColor }}
              >
                Start Exam
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ══════════════════════════════════════
  //  RESULTS
  // ══════════════════════════════════════
  if (state === "results") {
    return (
      <div className="min-h-screen bg-[#f8f9fa] p-4">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className={`rounded-lg border px-6 py-5 ${passed ? "bg-[#e6f4ea] border-[#34a853]" : "bg-[#fce8e6] border-[#ea4335]"}`}>
            <div className="flex items-center gap-4">
              {passed ? <Trophy className="w-12 h-12 text-[#34a853]" /> : <XCircle className="w-12 h-12 text-[#ea4335]" />}
              <div>
                <h1 className="text-xl font-semibold text-[#202124]">
                  {passed ? "Congratulations! You passed!" : "You did not pass this time"}
                </h1>
                <p className="text-sm text-[#5f6368] mt-1">
                  {selectedExam?.name} — Score: {score}/{actualQuestionCount} ({percentage}%) — Passing: {activeCert?.passingScore}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-[#dadce0] rounded-lg p-6">
            <h2 className="text-base font-medium text-[#202124] mb-4 flex items-center gap-2">
              <BarChart3 className="w-5 h-5" style={{ color: themeColor }} /> Score by Domain
            </h2>
            <div className="space-y-3">
              {Array.from(domainScores.entries()).map(([domain, { correct, total }]) => {
                const pct = Math.round((correct / total) * 100);
                return (
                  <div key={domain}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-[#3c4043]">{domain}</span>
                      <span className="font-medium text-[#202124]">{correct}/{total} ({pct}%)</span>
                    </div>
                    <div className="h-2 bg-[#e8eaed] rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all ${pct >= 70 ? "bg-[#34a853]" : pct >= 50 ? "bg-[#fbbc04]" : "bg-[#ea4335]"}`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => { setState("review"); setCurrentIndex(0); setShowExplanation(true); }}
              className="flex-1 bg-white border border-[#dadce0] hover:bg-[#f8f9fa] rounded py-3 px-4 font-medium text-sm flex items-center justify-center gap-2 transition-colors"
              style={{ color: themeColor }}
            >
              <BookOpen className="w-4 h-4" /> Review Answers
            </button>
            <button
              onClick={goToSelect}
              className="flex-1 hover:opacity-90 text-white rounded py-3 px-4 font-medium text-sm flex items-center justify-center gap-2 transition-opacity"
              style={{ backgroundColor: themeColor }}
            >
              <RotateCcw className="w-4 h-4" /> Take Another Exam
            </button>
          </div>

          <div className="bg-white border border-[#dadce0] rounded-lg p-6">
            <h2 className="text-base font-medium text-[#202124] mb-3">Question Summary</h2>
            <div className="grid grid-cols-10 sm:grid-cols-13 gap-2">
              {examQuestions.map((q, i) => {
                const correct = isCorrectAnswer(q);
                const hasAnswer = answers.has(q.id);
                return (
                  <button
                    key={q.id}
                    onClick={() => { setState("review"); setCurrentIndex(i); setShowExplanation(true); }}
                    className={`w-full aspect-square rounded text-xs font-medium flex items-center justify-center border transition-colors ${
                      correct ? "bg-[#e6f4ea] border-[#34a853] text-[#34a853]"
                        : hasAnswer ? "bg-[#fce8e6] border-[#ea4335] text-[#ea4335]"
                        : "bg-[#f8f9fa] border-[#dadce0] text-[#5f6368]"
                    }`}
                  >
                    {i + 1}
                  </button>
                );
              })}
            </div>
          </div>

          <button onClick={goHome} className="w-full text-center text-sm text-[#5f6368] hover:text-[#202124] py-2 transition-colors">
            ← Back to all certifications
          </button>
        </div>
      </div>
    );
  }

  // ══════════════════════════════════════
  //  EXAM / REVIEW
  // ══════════════════════════════════════
  if (!currentQuestion) return null;

  const currentAnswer = answers.get(currentQuestion.id);
  const isMultiple = currentQuestion.correctAnswers.length > 1;
  const isReview = state === "review";

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col">
      <header className="bg-white border-b border-[#dadce0] px-4 py-2.5 flex items-center justify-between sticky top-0 z-20">
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-[#202124]">
            {isReview ? "Review Mode" : selectedExam?.name}
          </span>
          <span className="text-xs text-[#5f6368] bg-[#f1f3f4] rounded-full px-3 py-1">
            {currentIndex + 1} / {actualQuestionCount}
          </span>
        </div>
        <div className="flex items-center gap-3">
          {!isReview && (
            <div className={`flex items-center gap-1.5 text-sm font-mono ${timeLeft < 300 ? "text-[#ea4335]" : "text-[#5f6368]"}`}>
              <Clock className="w-4 h-4" />
              {formatTime(timeLeft)}
            </div>
          )}
          <button onClick={() => setShowNav(!showNav)} className="text-xs bg-[#f1f3f4] hover:bg-[#e8eaed] rounded px-3 py-1.5 text-[#3c4043] transition-colors">
            Questions
          </button>
          {!isReview ? (
            <button
              onClick={() => { if (window.confirm(`Submit? Answered ${answeredCount}/${actualQuestionCount}.`)) endExam(); }}
              className="text-xs text-white rounded px-4 py-1.5 font-medium transition-opacity hover:opacity-90"
              style={{ backgroundColor: themeColor }}
            >
              Submit
            </button>
          ) : (
            <button onClick={() => setState("results")} className="text-xs text-white rounded px-4 py-1.5 font-medium transition-opacity hover:opacity-90" style={{ backgroundColor: themeColor }}>
              Back to Results
            </button>
          )}
        </div>
      </header>

      {showNav && (
        <div className="fixed inset-0 z-30" onClick={() => setShowNav(false)}>
          <div className="absolute right-4 top-14 bg-white border border-[#dadce0] rounded-lg shadow-lg p-4 w-80 max-h-[70vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-sm font-medium text-[#202124] mb-3">Question Navigator</h3>
            <div className="grid grid-cols-10 gap-1.5">
              {examQuestions.map((q, i) => {
                const hasAnswer = answers.has(q.id);
                const isFlagged = flagged.has(q.id);
                const isCurrent = i === currentIndex;
                let bg = "bg-[#f8f9fa] text-[#5f6368]";
                if (isCurrent) bg = "text-white";
                else if (isReview) {
                  bg = isCorrectAnswer(q) ? "bg-[#e6f4ea] text-[#34a853]"
                    : answers.has(q.id) ? "bg-[#fce8e6] text-[#ea4335]" : "bg-[#f8f9fa] text-[#5f6368]";
                } else if (hasAnswer) bg = "text-[#1a73e8]";

                return (
                  <button
                    key={q.id}
                    onClick={() => { setCurrentIndex(i); setShowNav(false); }}
                    className={`relative w-full aspect-square rounded text-xs font-medium flex items-center justify-center border border-[#dadce0] hover:opacity-80 transition-colors ${bg}`}
                    style={isCurrent ? { backgroundColor: themeColor } : hasAnswer && !isReview ? { backgroundColor: activeCert?.bgColor } : undefined}
                  >
                    {i + 1}
                    {isFlagged && <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#fbbc04] rounded-full" />}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      <div className="h-1 bg-[#e8eaed]">
        <div className="h-full transition-all duration-300" style={{ backgroundColor: themeColor, width: `${((currentIndex + 1) / actualQuestionCount) * 100}%` }} />
      </div>

      <main className="flex-1 max-w-3xl w-full mx-auto px-4 py-6">
        <div className="bg-white border border-[#dadce0] rounded-lg overflow-hidden">
          <div className="bg-[#f8f9fa] px-6 py-2.5 border-b border-[#dadce0] flex items-center justify-between">
            <span className="text-xs text-[#5f6368]">{currentQuestion.domain}</span>
            {isMultiple && (
              <span className="text-xs rounded-full px-2.5 py-0.5 font-medium" style={{ backgroundColor: activeCert?.bgColor, color: themeColor }}>
                Select {currentQuestion.correctAnswers.length} answers
              </span>
            )}
          </div>

          <div className="px-6 py-5">
            <p className="text-[15px] text-[#202124] leading-relaxed">
              <span className="font-medium mr-2" style={{ color: themeColor }}>Q{currentIndex + 1}.</span>
              {currentQuestion.text}
            </p>
          </div>

          <div className="px-6 pb-5 space-y-2">
            {currentQuestion.options.map((option, idx) => {
              const isSelected = currentAnswer?.selectedOptions.includes(idx) ?? false;
              const isCorrectOption = currentQuestion.correctAnswers.includes(idx);
              const letter = String.fromCharCode(65 + idx);

              let optionClass = "border-[#dadce0] hover:border-[#1a73e8] hover:bg-[#f8f9ff]";
              if (isReview) {
                if (isCorrectOption) optionClass = "border-[#34a853] bg-[#e6f4ea]";
                else if (isSelected) optionClass = "border-[#ea4335] bg-[#fce8e6]";
                else optionClass = "border-[#dadce0] opacity-60";
              } else if (isSelected) {
                optionClass = "border-[#1a73e8] bg-[#e8f0fe]";
              }

              return (
                <button
                  key={idx}
                  onClick={() => !isReview && toggleOption(idx)}
                  disabled={isReview}
                  className={`w-full text-left px-4 py-3.5 rounded border flex items-start gap-3 transition-all ${optionClass}`}
                >
                  <span className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium border mt-0.5 ${
                    isReview
                      ? isCorrectOption ? "bg-[#34a853] border-[#34a853] text-white"
                        : isSelected ? "bg-[#ea4335] border-[#ea4335] text-white"
                        : "border-[#dadce0] text-[#5f6368]"
                      : isSelected ? "border-transparent text-white"
                        : "border-[#dadce0] text-[#5f6368]"
                  }`} style={!isReview && isSelected ? { backgroundColor: themeColor } : undefined}>
                    {isReview && isCorrectOption ? <Check className="w-3.5 h-3.5" />
                      : isReview && isSelected && !isCorrectOption ? <XCircle className="w-3.5 h-3.5" />
                      : letter}
                  </span>
                  <span className="text-sm text-[#202124] leading-relaxed pt-0.5">{option}</span>
                </button>
              );
            })}
          </div>

          {isReview && showExplanation && (
            <div className="mx-6 mb-5 border rounded p-4" style={{ backgroundColor: activeCert?.lightBg, borderColor: `${themeColor}44` }}>
              <h4 className="text-sm font-medium mb-1.5 flex items-center gap-1.5" style={{ color: themeColor }}>
                <BookOpen className="w-4 h-4" /> Explanation
              </h4>
              <p className="text-sm text-[#3c4043] leading-relaxed">{currentQuestion.explanation}</p>
            </div>
          )}
        </div>
      </main>

      <footer className="bg-white border-t border-[#dadce0] px-4 py-3 sticky bottom-0">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <button
            onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
            disabled={currentIndex === 0}
            className="flex items-center gap-1.5 text-sm hover:bg-[#f8f9fa] rounded px-3 py-2 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            style={{ color: themeColor }}
          >
            <ChevronLeft className="w-4 h-4" /> Previous
          </button>

          {!isReview ? (
            <button
              onClick={toggleFlag}
              className={`flex items-center gap-1.5 text-sm rounded px-3 py-2 transition-colors ${
                flagged.has(currentQuestion.id) ? "text-[#ea8600] bg-[#fef7e0]" : "text-[#5f6368] hover:bg-[#f8f9fa]"
              }`}
            >
              <Flag className="w-4 h-4" /> {flagged.has(currentQuestion.id) ? "Flagged" : "Flag for review"}
            </button>
          ) : (
            <button
              onClick={() => setShowExplanation(!showExplanation)}
              className="flex items-center gap-1.5 text-sm hover:bg-[#f8f9fa] rounded px-3 py-2 transition-colors"
              style={{ color: themeColor }}
            >
              <BookOpen className="w-4 h-4" /> {showExplanation ? "Hide" : "Show"} Explanation
            </button>
          )}

          <button
            onClick={() => setCurrentIndex(Math.min(actualQuestionCount - 1, currentIndex + 1))}
            disabled={currentIndex === actualQuestionCount - 1}
            className="flex items-center gap-1.5 text-sm hover:bg-[#f8f9fa] rounded px-3 py-2 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            style={{ color: themeColor }}
          >
            Next <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </footer>
    </div>
  );
}
