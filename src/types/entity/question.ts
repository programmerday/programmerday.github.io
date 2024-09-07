export interface Question {
  id: number;
  isSolved: boolean;
  isOpen: boolean;
}

export interface QuestionInfo {
  title: string;
  description: string;
  assetsUrl: string[];
  level: number;
  type: string;
}
