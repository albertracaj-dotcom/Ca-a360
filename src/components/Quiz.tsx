"use client";

import { useEffect, useMemo, useState } from "react";
import { CheckCircle2, XCircle, Clock3, RotateCcw, Trophy, ArrowRight } from "lucide-react";
import { demoQuestions } from "@/data/demo-questions";

type Props = { mode: "practice" | "exam"; onComplete: () => void };
type Status = "active" | "finished";

export default function Quiz({ mode, onComplete }: Props) {
  const count = mode === "exam" ? 20 : 5;
  const questions = useMemo(() => Array.from({length: count}, (_, i) => demoQuestions[i % demoQuestions.length]), [count]);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [status, setStatus] = useState<Status>("active");
  const [seconds, setSeconds] = useState(mode === "exam" ? 20 * 60 : 0);
  const [showExplanation, setShowExplanation] = useState(false);

  useEffect(() => {
    if (mode !== "exam" || status !== "active") return;
    const timer = window.setInterval(() => setSeconds(s => {
      if (s <= 1) { window.clearInterval(timer); setStatus("finished"); onComplete(); return 0; }
      return s - 1;
    }), 1000);
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
    if (index === questions.length - 1) { setStatus("finished"); onComplete(); }
    else { setIndex(i => i + 1); setShowExplanation(false); }
  }
  function restart() {
    setIndex(0); setAnswers({}); setStatus("active"); setShowExplanation(false); setSeconds(mode === "exam" ? 1200 : 0);
  }

  if (status === "finished") return <section className="result-card">
    <div className="result-medal"><Trophy size={34}/></div><span className="eyebrow dark">RESULTAT DEL TEST</span><h2>{score} / {questions.length}</h2><p className="result-lead">{score >= (mode === "exam" ? 16 : 4) ? "Molt bé! Continua consolidant els coneixements." : "Continua practicant: cada intent és una oportunitat per millorar."}</p>
    <div className="result-bar"><span style={{width: `${(score/questions.length)*100}%`}}/></div><p className="result-percent">{Math.round(score/questions.length*100)}% d&apos;encerts</p>
    {mode === "exam" && <p className="result-disclaimer">Resultat orientatiu d&apos;un simulacre fictici. No acredita ni garanteix la superació de cap prova oficial.</p>}
    <button className="button-primary" onClick={restart}><RotateCcw size={16}/> Tornar a començar</button>
  </section>;

  return <section className="quiz-card">
    <div className="quiz-top"><div><span className="eyebrow dark">{mode === "exam" ? "SIMULACRE" : "PRÀCTICA"}</span><h2>Pregunta {index + 1}<small> / {questions.length}</small></h2></div>{mode === "exam" && <div className="timer"><Clock3 size={17}/>{time}</div>}</div>
    <div className="quiz-progress"><span style={{width: `${((index + 1) / questions.length) * 100}%`}}/></div>
    <div className="question-meta">PREGUNTA DE DEMOSTRACIÓ · NO OFICIAL</div>
    <h3 className="question-text">{current.question}</h3>
    <div className="answers">{current.options.map((option, i) => {
      const isSelected = selected === i;
      const reveal = mode === "practice" && showExplanation;
      const cls = reveal && i === current.correctIndex ? "correct" : isSelected && reveal ? "incorrect" : isSelected ? "chosen" : "";
      return <button key={i} className={`answer-option ${cls}`} onClick={() => choose(i)} disabled={selected !== undefined}><span className="answer-letter">{String.fromCharCode(65+i)}</span><span>{option}</span>{reveal && i === current.correctIndex && <CheckCircle2 size={19}/>}{reveal && isSelected && i !== current.correctIndex && <XCircle size={19}/>}</button>;
    })}</div>
    {showExplanation && <div className="explanation"><b>{selected === current.correctIndex ? "Resposta correcta" : "Resposta incorrecta"}</b><p>{current.explanation}</p></div>}
    <div className="quiz-bottom"><span>{Object.keys(answers).length} respostes contestades</span><button className="button-primary" disabled={selected === undefined} onClick={next}>{index === questions.length - 1 ? "Veure resultat" : "Següent"} <ArrowRight size={16}/></button></div>
  </section>;
}