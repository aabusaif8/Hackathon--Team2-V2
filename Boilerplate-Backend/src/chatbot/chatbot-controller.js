const { openai } = require("./config")

const chatCompletion = async (req, res) => {
  const { prompt } = req.body;
  try {
    const completion = await openai.chat.completions.create({
    model: "gpt-4",
    temperature: 0,
    max_tokens: 500,
    top_p: 0.9,
    frequency_penalty: 0,
    presence_penalty: 0,
    messages: [
        {
            role: "user", 
            content: prompt,
        }
    ],
});
    console.log(completion.choices[0].message)
    res.status(200).json({
      completion: completion.choices[0].message
    })
  } catch (error) {
    console.error('Error processing message:', error.message);
    throw new Error('Failed to process message');
  }
  }


module.exports = { chatCompletion }