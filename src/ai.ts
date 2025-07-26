
import { GoogleGenAI } from "@google/genai";

const genAI = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

export const generateQuizQuestions = async (topic: string) => {
  const prompt = `
Generate a short quiz on the topic "${topic}".
Return the result as a JSON array with this format:
[
  {
    "question": "What is ...?",
    "options": ["A", "B", "C", "D"],
    "answer": "A"
  },
  ...
]
Keep it concise with 10-12 questions.If user says for more questions then do
`;

  const result = await genAI.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prompt,
  });
  const text = result.text;

  // Try to parse JSON inside triple backticks if returned like markdown
  const jsonMatch = text?.match(/```(?:json)?\n([\s\S]*?)```/);
  const jsonString = jsonMatch ? jsonMatch[1] : text;

  try {
    return JSON.parse(jsonString!);
  } catch (e) {
    console.error("Failed to parse Gemini JSON:", e);
    return [];
  }
};
