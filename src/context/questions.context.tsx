"use client";
import React, { createContext, useContext, useState } from "react";

export type QuestionType = {
  question: string;
  options: string[];
  answer: string;
};

type QuizContextType = {
  questions: QuestionType[];
  setQuestions: (questions: QuestionType[]) => void;
  resetQuestions: () => void;
};

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider = ({ children }: { children: React.ReactNode }) => {
  const [questions, setQuestions] = useState<QuestionType[]>([]);

  const resetQuestions = () => setQuestions([]);

  return (
    <QuizContext.Provider value={{ questions, setQuestions, resetQuestions }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error("useQuiz must be used within a QuizProvider");
  }
  return context;
};
