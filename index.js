const express = require("express");
const cors = require("cors");
const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();
const app = express();

const configuration = new Configuration({
  apiKey: process.env.SECRET_KEY_OPENAI,
});
const openai = new OpenAIApi(configuration);

app.use(express.json());
app.use(cors());

app.post("/story", async (req, res) => {
  try {
    const { keywordsArray, language } = req.body;
    keywords = keywordsArray.join(", ");
    const prompt = `Your role is to be an exceptional story teller .You have to create a humorous story using the following keywords ${keywords} in the particular language \n  the given language is ${language} .\n Try to complete the story don't leave the story half and don't ask for continue option. `;

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      temperature: 0.5,
      max_tokens: 300,
      top_p: 1,
      frequency_penalty: 0.8,
      presence_penalty: 0,
    });
    const storyResponse = response.data.choices[0].text;
    res.json({ story : storyResponse });
  } catch (error) {
    console.error("Error during code conversion:", error);
    res.status(500).json({ error: "Error during code conversion" });
  }
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
