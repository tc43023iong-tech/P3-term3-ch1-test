
export type SectionId = 'A' | 'D' | 'E' | 'F' | 'G' | 'H' | 'Bonus';

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface SectionData {
  id: SectionId;
  title: string;
  description: string;
  questions: Question[];
}
