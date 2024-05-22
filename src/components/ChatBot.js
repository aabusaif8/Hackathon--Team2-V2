import { useState } from "react";
import axios from "axios";
const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL 
const HTTP_ENDPOINT = `${API_BASE_URL}/chatbot`;

async function sendPrompt(prompt) {
  const response = await axios.post(HTTP_ENDPOINT, { prompt });
  return response.data;
}

const Chatbot = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!prompt.trim()) return;
    setError("");

    try {
      const resData = await sendPrompt(prompt);
      setResponse(resData);
    } catch (error) {
      setError("Failed to fetch response. Please try again.");
    }

    setPrompt("");
  };

  const handlePrompt = (event) => {
    setPrompt(event.target.value);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white rounded-lg shadow-lg p-4 max-w-md">
      <h1 className="text-lg font-semibold mb-4">OpenAI Chatbot</h1>
      <form className="mb-4" onSubmit={handleSubmit}>
        <label className="block mb-2">Ask a question</label>
        <div className="flex">
          <input
            type="text"
            placeholder="Enter your question here ..."
            value={prompt}
            onChange={handlePrompt}
            className="flex-grow mr-2 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <div className="response">
        <p>
          {response || "Submit your question in the text field above ..."}
        </p>
      </div>
    </div>
  );
};

export default Chatbot;
