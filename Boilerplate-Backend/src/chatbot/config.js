// require('dotenv').config();
const OpenAI = require("openai");

// Fix .env pointer for API key access

// if (!process.env.OPENAI_API_KEY) {
//     console.error('OPENAI_API_KEY is not set');
//     throw new Error('OPENAI_API_KEY is not set');
//   }


const openai = new OpenAI({
    // apiKey: OPENAI_API_KEY,
    apiKey: "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"
});

module.exports = { openai }