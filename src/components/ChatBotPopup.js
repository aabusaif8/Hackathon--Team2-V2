import { useState } from "react";
import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const HTTP_ENDPOINT = `${API_BASE_URL}/chatbot`;

async function sendPrompt(prompt) {
  const response = await axios.post(HTTP_ENDPOINT, { prompt });
  return response.data;
}

const ChatbotPopup = ({ onClose }) => {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!prompt.trim()) return;
    setError("");

    const userMessage = { type: "user", text: prompt };
    setMessages([...messages, userMessage]);

    try {
      const resData = await sendPrompt(prompt);
      const aiMessage = { type: "ai", text: resData.completion.content };
      setMessages([...messages, userMessage, aiMessage]);
    } catch (error) {
      setError("Failed to fetch response. Please try again.");
    }

    setPrompt("");
  };

  const handlePrompt = (event) => {
    setPrompt(event.target.value);
  };

  return (
    <div className="chatbot-popup fixed bottom-4 right-4 z-50 bg-gray-100 rounded-lg shadow-lg">
      <div className="chatbot-popup-content bg-white rounded-lg p-4 max-w-md relative">
        <span
          className="close-button absolute top-2 right-2 text-gray-500 hover:text-gray-700 cursor-pointer font-bold text-xl"
          onClick={onClose}
        >
          &times;
        </span>
        <div className=" border-gray-300 pb-2 h-[300px] w-[400px]">
          <h1 className="title text-lg font-semibold mb-1 text-gray-800">Investment Assistant</h1>
          <p className="text-sm text-gray-500">Support Agent</p>
        </div>
        <div className="chat-container mt-4 mb-4 max-h-60 overflow-y-auto rounded-lg p-2">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`chat-bubble ${
                message.type === "user"
                  ? "bg-[#97db51] text-black rounded-bl-lg rounded-tr-lg rounded-tl-lg ml-auto max-w-[70%]"
                  : "bg-gray-300 text-black rounded-br-lg rounded-tl-lg rounded-tr-lg mr-auto max-w-[70%]"
              } mb-2 p-2`}
            >
              {message.text}
            </div>
          ))}
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <label className="block mb-2 text-sm font-medium text-gray-700">Ask a question</label>
          <div className="form-container flex rounded-lg overflow-hidden">
            <input
              type="text"
              className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#93e245]"
              placeholder="Enter your question here ..."
              value={prompt}
              onChange={handlePrompt}
            />
            <button
              className="btn bg-red-orange text-white p-2 rounded-r-lg hover:bg-[#7ab941] font-bold"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
        {error && <div className="error text-red-500 mt-2 font-bold">{error}</div>}
      </div>
    </div>
  );
};

export default ChatbotPopup;