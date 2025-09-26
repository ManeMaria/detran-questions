export type Question = {
  id: string;
  category: string;
  question: string;
  correctAnswer: string;
  wrongAnswer: string;
  explanation?: string;
}

export type QuestionCategory =
  | 'sinalizacao'
  | 'direcao-defensiva'
  | 'mecanica'
  | 'meio-ambiente'
  | 'legislacao'
  | 'primeiros-socorros';
