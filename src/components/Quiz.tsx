"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { CheckCircle2, XCircle, Clock3, RotateCcw, Trophy, ArrowRight } from "lucide-react";
import { questionBank } from "@/data/question-bank";
import { EXAM_CONFIG } from "@/lib/quiz";

type Props = { mode: "practice" | "exam"; onComplete: () => void };
type Status = "active" | "finished";

function shuffled<T>(items: T[]) {
  return [...items].sort(() => Math.random() - 0.5);
}

export default function Quiz({ mode, onComplete }: Props) {
  const count = mode === "exam" ? EXAM_CONFIG.questionCount : 10;
  const questions = useMemo(() => shuffled(questionBank).slice(0, Math.min(count, questionBank.length)), [count]);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [status, setStatus] = useState<Status>("active");
  const [seconds, setSeconds] = useState(mode === "exam" ? EXAM_CONFIG.durationSeconds : 0);
  const [showExplanation, setShowExplanation] = useState(false);
  const completionSent = useRef(false);

  function finish() {
    setStatus("finished");
    if (!completionSent.current) {
      completionSent.current = true;
      onComplete();
    }
  }

  useEffect(() => {
    if (mode !== "exam" || status !== "active") return;
    const timer = window.setInterval(() => {
      setSeconds(s => {
        if (s <= 1) {
          window.clearInterval(timer);
          finish();
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => window.clearInterval(timer);
  }, [mode, status]);

  const current = questions[index];
  const selected = answers[index];
  const score = questions.reduce((sum, q, i) => sum + (answers[i] === q.correctIndex ? 1 : 0), 0);
  const time = `${String(Math.floor(seconds / 60)).padStart(2,"0")}:${String(seconds % 60).padStart(2,"0")}`;

  function choose(option: number) {
    if (selected !== undefined || status !== "active") return;
    setAnswers(prev => ({...prev, [index]: option}));
    if (mode === "practice") setShowExplanation(true);
  }
  function next() {
    if (index === questions.length - 1) finish();
    else { setIndex(i => i + 1); setShowExplanation(false); }
  }
  function restart() {
    setIndex(0); setAnswers({}); setStatus("active"); setShowExplanation(false);
    setSeconds(mode === "exam" ? EXAM_CONFIG.durationSeconds : 0);
    completionSent.current = false;
  }

  if (status === "finished") return <section className="result-card">
    <div className="result-medal"><Trophy size={34}/></div>
    <span className="eyebrow dark">RESULTAT DEL TEST</span>
    <h2>{score} / {questions.length}</h2>
    <p className="result-lead">{mode === "exam" ? (score >= EXAM_CONFIG.indicativePassMark ? "Aprovat segons el llindar oficial de 16 encerts." : "Encara no arribes al mínim oficial de 16 encerts. Repassa els temes i torna-ho a provar.") : "Sessió de pràctica completada. Repassa les explicacions i reforça els punts febles."}</p>
    <div className="result-bar"><span style={{width: `${(score/questions.length)*100}%`}}/></div>
    <p className="result-percent">{Math.round(score/questions.length*100)}% d&apos;encerts</p>
    {mode === "exam" && <p className="result-disclaimer">Simulacre d'entrenament amb preguntes originals de Caça 360. No és l'examen oficial ni reprodueix el banc de 400 preguntes de la Guàrdia Civil.</p>}
    <button className="button-primary" onClick={restart}><RotateCcw size={16}/> Tornar a començar</button>
  </section>;

  return <section className="quiz-card">
    <div className="quiz-top">
      <div><span className="eyebrow dark">{mode === "exam" ? "SIMULACRE" : "PRÀCTICA"}</span><h2>Pregunta {index + 1}<small> / {questions.length}</small></h2></div>
      {mode === "exam" && <div className="timer"><Clock3 size={17}/>{time}</div>}
    </div>
    <div className="quiz-progress"><span style={{width: `${((index + 1) / questions.length) * 100}%`}}/></div>
    <div className="question-meta">PREGUNTA PRÒPIA · TEMA {current.topicId}</div>
    <h3 className="question-text">{current.question}</h3>
    <div className="answers">{current.options.map((option, i) => {
      const isSelected = selected === i;
      const reveal = mode === "practice" && showExplanation;
      const cls = reveal && i === current.correctIndex ? "correct" : isSelected && reveal ? "incorrect" : isSelected ? "chosen" : "";
      return <button key={i} className={`answer-option ${cls}`} onClick={() => choose(i)} disabled={selected !== undefined}>
        <span className="answer-letter">{String.fromCharCode(65+i)}</span><span>{option}</span>
        {reveal && i === current.correctIndex && <CheckCircle2 size={19}/>}
        {reveal && isSelected && i !== current.correctIndex && <XCircle size={19}/>}
      </button>;
    })}</div>
    {showExplanation && <div className="explanation"><b>{selected === current.correctIndex ? "Resposta correcta" : "Resposta incorrecta"}</b><p>{current.explanation}</p></div>}
    <div className="quiz-bottom"><span>{Object.keys(answers).length} respostes contestades</span><button className="button-primary" disabled={selected === undefined} onClick={next}>{index === questions.length - 1 ? "Veure resultat" : "Següent"} <ArrowRight size={16}/></button></div>
  </section>;
}
