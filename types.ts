
export interface Option {
  option: string;
  text: string;
}

export interface Statements {
  "1": string;
  // FIX: Changed type from the literal "string" to the type string.
  "2": string;
}

export type QuestionType = "Problem Solving" | "Data Sufficiency";

export interface Question {
  id: number;
  question_type: QuestionType;
  difficulty: "Easy" | "Medium" | "Hard";
  field_of_math: string;
  question_text: string;
  options: Option[];
  statements?: Statements;
  correct_answer: string;
  explanation: string;
}

export type Difficulty = "Easy" | "Medium" | "Hard" | "Mix";
export type MathField = string;