export interface Question {
  id: string;
  cost: number;
  isActive: boolean;
  isAnswerd: boolean;
  isPurchased: boolean;
  isStarred: boolean;
  score: boolean;
}

export interface QuestionInfo {
  title: string;
  text: string;
  isStarred: boolean;
  score: number;
  isActive: boolean;
  isAnswerd: boolean;
  isPurchased: boolean;
  assetsUrl: string[];
  level: number;
  cost: number;
}
