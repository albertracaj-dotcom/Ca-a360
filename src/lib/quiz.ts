export const EXAM_CONFIG = {
  questionCount: 20,
  durationSeconds: 20 * 60,
  indicativePassMark: 16,
} as const;

export function calculateScore(correct: number, total: number) {
  return {
    correct,
    total,
    percentage: total > 0 ? Math.round((correct / total) * 100) : 0,
    indicativePass: correct >= EXAM_CONFIG.indicativePassMark,
  };
}

// IMPORTANT: en producció, la correcció i les respostes correctes
// han de romandre al servidor; no s'han d'enviar al client abans del lliurament.