const { openai } = require("./config")

const chatCompletion = async (req, res) => {

  try {
    const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
        {
            role: "user", 
            content: "Tell me 2 things about Kobe Bryant." // Replace with prompt from frontend chatbot form submit button (onClick event?)
        }
    ],
    max_tokens: 100 // Determine token count size
});
    // console.log(completion.choices[0].message)
    res.status(200).json({
      completion: completion.choices[0].message
    })
  } catch (error) {
    console.error('Error processing message:', error.message);
    throw new Error('Failed to process message');
  }
  }


module.exports = { chatCompletion }