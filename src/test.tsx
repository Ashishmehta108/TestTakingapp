import { useState, useEffect } from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader } from "./components/ui/card";

import RadioGroup from "./components/radiogrp";
import Timer from "./Timer";
import { useQuiz } from "./context/questions.context";
import { Navigate } from "react-router-dom";
const Test = () => {
  const Questions = useQuiz();

  const [questions, setQuestions] = useState<any[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [extra, setextra] = useState("");
  let timerStarted = false;
  const [timeUp, setTimeUp] = useState(false); // Track if time is up
  console.log(timerStarted);
  useEffect(() => {
    const fetchQuizData = async () => {
      setQuestions(Questions.questions);
    };
    fetchQuizData();
  }, []);

  const currentQuestion = questions[currentQuestionIndex];

  const handleQuizStart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer("");
    setShowResult(false);
    timerStarted = true;
    setTimeUp(false);
  };

  const handleTimeUp = () => {
    setTimeUp(true);
    setShowResult(true);
  };

  const handleAnswerSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAnswer(e.target.value);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === currentQuestion.answer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer("");
    } else {
      const percentile = score / questions.length;
      if (percentile > 0.87) {
        setextra("Excellent! You Qualified the exam");
      }
      setShowResult(true);
    }
  };

  const handleQuizReset = () => {
    handleQuizStart();
  };

  if (!Questions.questions)
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center px-4">
        <h2 className="text-2xl font-bold mb-2">No Quiz Loaded</h2>
        <p className="mb-4 text-muted-foreground">
          You haven't selected a topic to revise yet.
        </p>
        <Button onClick={() => Navigate({ to: "/askInfo" })}>
          Go Back to Start
        </Button>
      </div>
    );
  return (
    <div className="flex items-center justify-center h-screen overflow-hidden mx-auto">
      <Card className="w-full max-w-md">
        <CardHeader></CardHeader>
        <CardContent>
          {questions.length === 0 ? (
            <p>Loading quiz data...</p>
          ) : !showResult ? (
            <>
              {!timeUp && <Timer duration={54 * 10} onTimeUp={handleTimeUp} />}
              <div className="mb-4">
                <h2 className="text-lg font-semibold">
                  {currentQuestion?.question}
                </h2>

                <RadioGroup
                  name="ashish"
                  options={currentQuestion?.options}
                  defaultValue={selectedAnswer}
                  onChange={handleAnswerSelect}
                />
              </div>
              <Button
                onClick={handleNextQuestion}
                disabled={!selectedAnswer || timeUp}
              >
                {currentQuestionIndex === questions.length - 1
                  ? "Finish Quiz"
                  : "Next Question"}
              </Button>
            </>
          ) : (
            <div className="text-center">
              <h2 className="text-2xl font-bold">Revision Complete!</h2>
              <div>{extra}</div>
              <p className="mb-4">
                Your score: {score} / {questions.length}
              </p>
              <Button onClick={handleQuizReset} className="mb-4">
                Retake Quiz
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Test;
