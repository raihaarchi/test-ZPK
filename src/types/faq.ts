export type Question = {
  question: string;
  answer: string;
};

export type Category = {
  name: string;
  questions: Question[];
};

export type FaqDataType = {
  title: string;
  description: string;
  email: string;
  categories: Category[];
};
