export type Alternative = {
  letra: string;
  texto: string;
  correta: boolean;
};

export type Fonte = {
  tipo: number;
  nome: string;
  ano: number;
  codigoProva: string;
  areaOficial: string;
};

export type QuestionApi = {
  id: string;
  enunciado: string;
  alternativas: Alternative[];
  comentarioResolucao: string;
  fonte: Fonte;
  area: string;
  assuntos: string[];
  cursosRelacionados: string[];
  tags: string[];
  dificuldade: number;
  urlFonteOficial: string | null;
};

export interface Question {
  id: string;
  question: string;
  alternatives: Alternative[];
  fonte: string;
  commentResolution: string;
}
