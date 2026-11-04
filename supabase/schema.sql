-- Caça 360 · Esquema inicial PostgreSQL / Supabase
-- Executar només després de revisar el model i configurar Supabase Auth.

create extension if not exists pgcrypto;

create type public.question_status as enum ('draft', 'review', 'published', 'retired');
create type public.question_origin as enum ('official', 'original', 'adapted');

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  preferred_language text not null default 'ca',
  created_at timestamptz not null default now()
);

create table public.topics (
  id smallint primary key check (id between 1 and 7),
  title text not null,
  description text,
  sort_order smallint not null unique
);

create table public.questions (
  id uuid primary key default gen_random_uuid(),
  topic_id smallint not null references public.topics(id),
  prompt text not null,
  explanation text,
  origin public.question_origin not null,
  status public.question_status not null default 'draft',
  source_title text,
  source_url text,
  source_version text,
  reviewed_at date,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.answers (
  id uuid primary key default gen_random_uuid(),
  question_id uuid not null references public.questions(id) on delete cascade,
  answer_text text not null,
  sort_order smallint not null,
  is_correct boolean not null default false,
  unique (question_id, sort_order)
);

create unique index one_correct_answer_per_question
  on public.answers(question_id) where is_correct = true;

create table public.exam_attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  mode text not null check (mode in ('practice', 'mock_exam')),
  started_at timestamptz not null default now(),
  completed_at timestamptz,
  total_questions integer not null default 0,
  correct_answers integer not null default 0,
  duration_seconds integer,
  created_at timestamptz not null default now()
);

create table public.exam_responses (
  id uuid primary key default gen_random_uuid(),
  attempt_id uuid not null references public.exam_attempts(id) on delete cascade,
  question_id uuid not null references public.questions(id),
  selected_answer_id uuid references public.answers(id),
  is_correct boolean,
  answered_at timestamptz not null default now(),
  unique (attempt_id, question_id)
);

create table public.favorites (
  user_id uuid not null references auth.users(id) on delete cascade,
  question_id uuid not null references public.questions(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (user_id, question_id)
);

-- RLS s'ha d'activar abans de posar el projecte en producció.
alter table public.profiles enable row level security;
alter table public.topics enable row level security;
alter table public.questions enable row level security;
alter table public.answers enable row level security;
alter table public.exam_attempts enable row level security;
alter table public.exam_responses enable row level security;
alter table public.favorites enable row level security;

-- No s'afegeixen polítiques permissives per defecte.
-- Definir polítiques específiques i endpoints de correcció al servidor
-- abans d'exposar les taules a usuaris finals.