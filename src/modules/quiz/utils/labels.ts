import type { QuestionCategory } from "@/modules/quiz/types";

export const categoryLabels: Record<string, string> = {
  'sinalizacao': 'Sinalização',
  'direcao-defensiva': 'Direção Defensiva',
  'mecanica': 'Mecânica',
  'meio-ambiente': 'Meio Ambiente',
  'legislacao': 'Legislação',
  'primeiros-socorros': 'Primeiros Socorros',
};

export const categories: { value: QuestionCategory | 'all'; label: string }[] = [
  { value: 'all', label: 'Todas as Categorias' },
  { value: 'sinalizacao', label: 'Sinalização' },
  { value: 'direcao-defensiva', label: 'Direção Defensiva' },
  { value: 'mecanica', label: 'Mecânica' },
  { value: 'meio-ambiente', label: 'Meio Ambiente' },
  { value: 'legislacao', label: 'Legislação' },
  { value: 'primeiros-socorros', label: 'Primeiros Socorros' },
];