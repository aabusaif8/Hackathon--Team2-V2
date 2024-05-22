import { useState } from "react";
import axios from "axios";
const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL 
const HTTP_ENDPOINT = `${API_BASE_URL}/chatbot`;

async function sendPrompt(prompt) {
  const response = await axios.post(HTTP_ENDPOINT, { prompt });
  return response.data;
}

const ChatbotPopup = ({ onClose }) => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!prompt.trim()) return;
    setError("");

    try {
      const resData = await sendPrompt(prompt);
      setResponse(resData.completion.content);
    } catch (error) {
      setError("Failed to fetch response. Please try again.");
    }

    setPrompt("");
  };

  const handlePrompt = (event) => {
    setPrompt(event.target.value);
  };

  return (
    <div className="chatbot-popup fixed bottom-4 right-4 z-50">
      <div className="chatbot-popup-content bg-white rounded-lg shadow-lg p-4 max-w-md">
        <span className="close-button absolute top-2 right-2 text-gray-500 hover:text-gray-700 cursor-pointer" onClick={onClose}>
          &times;
        </span>
        <div className="border-black border-b">
        <h1 className="title text-lg font-semibold mb-1">Investment Assistant</h1>
        <p >Support Agent</p>
        </div>
        <div className="mt-10">
        <form className="form" onSubmit={handleSubmit}>
          <label>Ask a question</label>
          <div className="form-container">
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter your question here ..."
                value={prompt}
                onChange={handlePrompt}
              />
            </div>
            <button className="btn" type="submit">
              Submit
            </button>
            
          </div>
        </form>
        </div>
        {error && <div className="error">{error}</div>}
        <div className="response">
          <p>
            {response || "Submit your question in the text field above ..."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatbotPopup;