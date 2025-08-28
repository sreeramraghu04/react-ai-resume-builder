import React, { useState } from "react";

const AiAssistant = () => {
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const generateSummary = async (prompt) => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: prompt }],
            max_tokens: 100,
          }),
        }
      );

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error?.message || "API request failed");
      }

      const data = await response.json();
      const text = data.choices?.[0]?.message?.content;

      if (!text) {
        throw new Error("No response from AI");
      }

      setSummary(text);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 bg-gray-100 rounded">
      <h2 className="text-lg font-bold mb-2">AI Resume Summary Generator</h2>

      <button
        onClick={() =>
          generateSummary(
            "Write a professional resume summary for a frontend developer skilled in React."
          )
        }
        disabled={loading}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400"
      >
        {loading ? "Generating..." : "Generate Summary"}
      </button>

      {error && <p className="text-red-500 mt-2">{error}</p>}
      {summary && (
        <div className="mt-4 p-3 bg-white rounded shadow">
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
};

export default AiAssistant;
