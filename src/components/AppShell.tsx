"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight, BookOpen, ChevronRight, Clock3, Compass,
  GraduationCap, Leaf, Menu, ShieldCheck, Target,
  X
} from "lucide-react";
import Quiz from "./Quiz";
import { topics } from "@/data/topics";
import { lessonContent } from "@/data/lesson-content";

type View = "home" | "topics" | "practice" | "exam" | "sources" | "progress";

export default function AppShell() {
  const [view, setView] = useState<View>("home");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(1);
  const [completed, setCompleted] = useState(0);
  const [practiceTopic, setPracticeTopic] = useState<number | undefined>(undefined);

  useEffect(() => {
    const saved = window.localStorage.getItem("caca360-completed");
    if (saved) setCompleted(Number(saved) || 0);
  }, []);
  useEffect(() => {
    window.localStorage.setItem("caca360-completed", String(completed));
  }, [completed]);

  const activeTopic = useMemo(() => topics.find(t => t.id === selectedTopic) ?? topics[0], [selectedTopic]);

  function navigate(next: View) {
    setView(next);
    setMobileMenu(false);
  }

  return (
    <main className="app">
      <header className="topbar">
        <button className="brand" onClick={() => navigate("home")} aria-label="Caça 360 inici">
          <span className="brand-mark"><Leaf size={22} /></span>
          <span>CAÇA <b>360</b><small>FORMACIÓ CINEGÈTICA</small></span>
        </button>
        <nav className="desktop-nav">
          <button className={view === "home" ? "nav-active" : ""} onClick={() => navigate("home")}>Inici</button>
          <button className={view === "topics" ? "nav-active" : ""} onClick={() => navigate("topics")}>Temari</button>
          <button className={view === "sources" ? "nav-active" : ""} onClick={() => navigate("sources")}>Fonts oficials</button>
          <button onClick={() => { setPracticeTopic(undefined); navigate("practice"); }}>Practicar</button>
          <button onClick={() => navigate("exam")}>Simulacre</button>
          <button className={view === "progress" ? "nav-active" : ""} onClick={() => navigate("progress")}>El meu progrés</button>
        </nav>
        <button className="menu-toggle" onClick={() => setMobileMenu(!mobileMenu)} aria-label="Obrir menú">
          {mobileMenu ? <X /> : <Menu />}
        </button>
        <button className="profile-button" onClick={() => navigate("progress")}>El meu progrés <span>↗</span></button>
      </header>

      {mobileMenu && <nav className="mobile-nav">
        <button onClick={() => navigate("home")}>Inici</button>
        <button onClick={() => navigate("topics")}>Temari</button>
        <button onClick={() => navigate("sources")}>Fonts oficials</button>
        <button onClick={() => { setPracticeTopic(undefined); navigate("practice"); }}>Practicar</button>
        <button onClick={() => navigate("exam")}>Simulacre</button>
        <button onClick={() => navigate("progress")}>El meu progrés</button>
      </nav>}

      {view === "home" && <div className="page-wrap">
        <section className="hero">
          <div className="hero-content">
            <div className="eyebrow"><span className="eyebrow-dot" /> EL TEU CAMÍ COMENÇA AQUÍ</div>
            <h1>Aprèn. Prepara&apos;t.<br /><em>Gaudeix de la caça.</em></h1>
            <p>Prepara les proves teòriques de les llicències D i E amb un mètode d&apos;estudi clar, pràctic i adaptat al teu ritme.</p>
            <div className="hero-actions">
              <button className="button-primary" onClick={() => navigate("topics")}>Comença a estudiar <ArrowRight size={17} /></button>
              <button className="button-ghost" onClick={() => navigate("exam")}><Target size={17} /> Prova un simulacre</button>
            </div>
            <div className="hero-note"><ShieldCheck size={16} /> Temari alineat amb el programa oficial · preguntes pròpies d’entrenament.</div>
          </div>
          <div className="hero-art" aria-label="Paisatge de bosc i muntanya">
            <div className="hero-art-overlay" />
            <div className="hero-stamp"><Compass size={18} /><span>CATALUNYA<br /><b>EDICIÓ INICIAL</b></span></div>
            <div className="hero-caption">CONEIXEMENT · NATURA · RESPONSABILITAT</div>
          </div>
        </section>

        <section className="stats-strip">
          <div><strong>7</strong><span>Temes oficials</span></div>
          <div><strong>20</strong><span>Preguntes per simulacre</span></div>
          <div><strong>20′</strong><span>Temps de simulacre</span></div>
          <div><strong>{completed}</strong><span>Tests completats aquí</span></div>
        </section>

        <section className="section-block">
          <div className="section-heading">
            <div><div className="eyebrow dark">PREPARACIÓ D I E</div><h2>Com vols estudiar avui?</h2><p>Tria el teu mètode i avança pas a pas.</p></div>
            <button className="text-link" onClick={() => navigate("topics")}>Veure temari <ArrowRight size={16}/></button>
          </div>
          <div className="feature-grid">
            <button className="feature-card" onClick={() => navigate("topics")}>
              <span className="feature-icon"><BookOpen /></span><span className="feature-kicker">01 / APRENENTATGE</span><h3>Estudia per temes</h3><p>Organitza l&apos;estudi en blocs i treballa cada contingut al teu ritme.</p><span className="card-link">Explorar temari <ChevronRight size={16}/></span>
            </button>
            <button className="feature-card feature-dark" onClick={() => navigate("practice")}>
              <span className="feature-icon"><Target /></span><span className="feature-kicker">02 / ENTRENAMENT</span><h3>Practica preguntes</h3><p>Fes tests de demostració i aprèn de cada resposta.</p><span className="card-link">Començar pràctica <ChevronRight size={16}/></span>
            </button>
            <button className="feature-card" onClick={() => navigate("exam")}>
              <span className="feature-icon"><Clock3 /></span><span className="feature-kicker">03 / SIMULACIÓ</span><h3>Posa&apos;t a prova</h3><p>Simulacre de 20 preguntes amb temps i revisió final.</p><span className="card-link">Fer simulacre <ChevronRight size={16}/></span>
            </button>
          </div>
        </section>

        <section className="bottom-callout">
          <div className="callout-icon"><GraduationCap size={27}/></div>
          <div><span className="eyebrow">UN OBJECTIU CLAR</span><h2>Prepara&apos;t amb confiança.</h2><p>El progrés es construeix amb constància, coneixement i responsabilitat.</p></div>
          <button className="button-light" onClick={() => navigate("exam")}>Començar simulacre <ArrowRight size={16}/></button>
        </section>
      </div>}

      {view === "topics" && <div className="page-wrap inner-page">
        <div className="page-intro"><div className="eyebrow dark">PROGRAMA OFICIAL D I E</div><h1>El temari, pas a pas.</h1><p>Els set blocs segueixen l’estructura del programa publicat per la Guàrdia Civil. Selecciona un tema per consultar-ne els objectius i practicar preguntes.</p></div>
        <div className="topic-layout">
          <div className="topic-list">{topics.map((topic) => <button key={topic.id} className={`topic-row ${selectedTopic === topic.id ? "selected" : ""}`} onClick={() => setSelectedTopic(topic.id)}><span className="topic-number">{String(topic.id).padStart(2,"0")}</span><span className="topic-row-text"><b>{topic.title}</b><small>{topic.subtitle}</small></span><ChevronRight size={18}/></button>)}</div>
          <div className="topic-detail"><span className="eyebrow">BLOC {String(activeTopic.id).padStart(2,"0")}</span><h2>{activeTopic.title}</h2><p>{activeTopic.description}</p><div className="topic-notice"><ShieldCheck size={18}/><span>Índex alineat amb el programa publicat per la Guàrdia Civil. Les fitxes ampliades i les referències jurídiques s&apos;estan completant.</span></div><div className="topic-notice"><BookOpen size={18}/><span><b>Objectius d’aprenentatge</b><br/>{lessonContent[activeTopic.id].objectives.join(" ")}</span></div><ul className="lesson-checklist">{lessonContent[activeTopic.id].checklist.map(item => <li key={item}>{item}</li>)}</ul><button className="button-primary" onClick={() => { setPracticeTopic(activeTopic.id); navigate("practice"); }}>Practicar aquest tema <ArrowRight size={16}/></button>
            <a className="text-link" href="https://web.guardiacivil.es/es/tramites/autorizaciones-de-armas-y-explosivos/controldearmas/pruebas_licenciasarmas/Programa_prueba_teorica_D__E_y_AEM/" target="_blank" rel="noreferrer">Consultar el programa oficial ↗</a></div>
        </div>
      </div>}

      {view === "progress" && <div className="page-wrap inner-page">
        <div className="page-intro"><div className="eyebrow dark">SEGUIMENT PERSONAL</div><h1>El teu progrés.</h1><p>El recompte es desa només en aquest navegador i dispositiu. Encara no hi ha compte d’usuari ni sincronització entre dispositius.</p></div>
        <div className="stats-strip"><div><strong>{completed}</strong><span>Tests completats</span></div><div><strong>{topics.length}</strong><span>Temes disponibles</span></div><div><strong>20</strong><span>Preguntes simulacre</span></div><div><strong>16</strong><span>Encerts mínims</span></div></div>
        <div className="topic-notice" style={{background:"#e9eee6",color:"#405044",marginTop:24}}><BookOpen size={18}/><span>Completa sessions de pràctica per anar consolidant els set temes. En una versió futura, aquest espai inclourà resultats per tema, evolució i sincronització amb el teu compte.</span></div>
        <button className="text-link" onClick={() => { setCompleted(0); window.localStorage.removeItem("caca360-completed"); }}>Reiniciar el recompte local</button>
      </div>}

      {view === "sources" && <div className="page-wrap inner-page">
        <div className="page-intro"><div className="eyebrow dark">DOCUMENTACIÓ I VERIFICACIÓ</div><h1>Fonts oficials.</h1><p>La normativa pot canviar. Utilitza sempre els textos oficials consolidats i comprova la data de vigència abans d&apos;estudiar un requisit concret.</p></div>
        <div className="feature-grid">
          <a className="feature-card" href="https://web.guardiacivil.es/es/tramites/autorizaciones-de-armas-y-explosivos/controldearmas/pruebas_licenciasarmas/Programa_prueba_teorica_D__E_y_AEM/" target="_blank" rel="noreferrer"><span className="feature-kicker">GUÀRDIA CIVIL</span><h3>Programa oficial D i E</h3><p>Set temes oficials, qüestionaris i respostes publicades per a la preparació de la prova teòrica.</p><span className="card-link">Obrir font oficial ↗</span></a>
          <a className="feature-card" href="https://www.boe.es/buscar/act.php?id=BOE-A-1993-6202" target="_blank" rel="noreferrer"><span className="feature-kicker">BOE · TEXT CONSOLIDAT</span><h3>Reglament d&apos;Armes</h3><p>Reial decret 137/1993, de 29 de gener. Consulta el text consolidat i les modificacions.</p><span className="card-link">Obrir al BOE ↗</span></a>
          <a className="feature-card" href="https://web.guardiacivil.es/es/tramites/autorizaciones-de-armas-y-explosivos/controldearmas/pruebas_licenciasarmas/" target="_blank" rel="noreferrer"><span className="feature-kicker">GUÀRDIA CIVIL</span><h3>Proves de capacitació</h3><p>Informació de les proves teòriques i pràctiques per a les llicències D i E.</p><span className="card-link">Obrir informació ↗</span></a>
        </div>
        <div className="topic-notice" style={{background:"#e9eee6",color:"#405044",marginTop:24}}><ShieldCheck size={18}/><span>Caça 360 és una eina privada d&apos;estudi i no està vinculada a la Guàrdia Civil. Les preguntes pròpies no són preguntes oficials.</span></div>
      </div>}

      {(view === "practice" || view === "exam") && <div className="page-wrap quiz-page">
        <div className="page-intro"><div className="eyebrow dark">{view === "exam" ? "SIMULACRE DE DEMOSTRACIÓ" : "MODE D'APRENENTATGE"}</div><h1>{view === "exam" ? "És el teu moment." : "Practica i aprèn."}</h1><p>{view === "exam" ? "20 preguntes · 20 minuts · mínim 16 encerts. Preguntes originals d’entrenament, no oficials." : "Preguntes fictícies per provar el funcionament de l'aplicació."}</p></div>
        <Quiz mode={view} topicId={view === "practice" ? practiceTopic : undefined} onComplete={() => setCompleted(v => v + 1)} />
      </div>}

      <footer className="footer"><div className="footer-brand">CAÇA <b>360</b></div><p>Formació cinegètica amb coneixement i responsabilitat.</p><span>© 2026 Caça 360 · Prototip en desenvolupament</span></footer>
    </main>
  );
}