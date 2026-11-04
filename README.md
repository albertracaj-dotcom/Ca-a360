# Caça 360

Aplicació web de formació cinegètica. Primera versió centrada en la preparació teòrica de les llicències d'armes D i E a Catalunya.

## Estat del projecte

**Prototip inicial (0.1.0)**

Inclou:
- Inici i navegació.
- Presentació dels set blocs de temari (títols pendents de validar amb el programa oficial vigent).
- Mode pràctica amb preguntes fictícies de demostració.
- Simulacre de demostració de 20 preguntes.
- Temporitzador, puntuació i revisió de respostes.
- Esquema SQL inicial per a Supabase.

Les preguntes incloses són exclusivament demostratives: **no són preguntes oficials ni substitueixen el programa o les proves de la Guàrdia Civil**. No incorporar el banc oficial fins a verificar-ne la versió, la procedència i les condicions de reutilització.

## Requisits

- Node.js 20.9 o superior
- npm

## Instal·lació

```bash
npm install
cp .env.example .env.local
npm run dev
```

Obre http://localhost:3000

## Construcció

```bash
npm run build
npm start
```

## Estructura

```text
src/
  app/
    globals.css
    layout.tsx
    page.tsx
  components/
    AppShell.tsx
    Quiz.tsx
  data/
    demo-questions.ts
    topics.ts
  lib/
    quiz.ts
supabase/
  schema.sql
```

## Properes passes

1. Validar i documentar els set temes exactes del programa oficial.
2. Revisar el banc oficial, la seva vigència i els drets de reutilització.
3. Connectar Supabase Auth i PostgreSQL.
4. Crear panell d'administració i importació CSV.
5. Afegir persistència d'historial i progrés.
6. Implementar simulacre amb distribució oficial contrastada.
7. Afegir subscripcions quan el producte estigui validat.

## Principis

- No exposar respostes correctes abans de lliurar el test en producció.
- Guardar font, versió i data de revisió de cada pregunta.
- Distingir preguntes oficials, pròpies i pendents de revisió.
- No mostrar una norma com a vigent sense comprovar-ne la data d'efectes.
