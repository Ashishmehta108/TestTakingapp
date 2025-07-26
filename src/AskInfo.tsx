// components/AskPrompt.tsx
import { useState } from "react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { useQuiz } from "./context/questions.context";
import { generateQuizQuestions } from "./ai";
import { useNavigate } from "react-router-dom"; // or adjust if not using routing

const AskPrompt = () => {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { setQuestions } = useQuiz();
  const navigate = useNavigate();

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError("Please enter a topic or prompt.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const questions = await generateQuizQuestions(prompt);
      if (questions.length > 0) {
        setQuestions(questions);
        navigate("/test");
      } else {
        setError("Couldn't generate questions. Try another topic.");
      }
    } catch (e) {
      setError("Something went wrong. Please try again.");
      console.error("Gemini error:", e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center mt-20 h-screen px-4 gap-4 text-center">
      <h1 className="text-2xl font-bold">What do you want to revise?</h1>
      <Input
        placeholder="e.g. JavaScript arrays, Newton's laws"
        value={prompt}
        onChange={(e: any) => setPrompt(e.target.value)}
        className="max-w-md w-full"
      />
      <Button onClick={handleGenerate} disabled={loading}>
        {loading ? "Generating..." : "Generate Quiz"}
      </Button>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default AskPrompt;
