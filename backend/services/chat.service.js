const fs = require("fs");
const path = require("path");

const { ChatGoogleGenerativeAI } = require("@langchain/google-genai");
const { PromptTemplate } = require("@langchain/core/prompts");
const { RunnableSequence } = require("@langchain/core/runnables");

const config = require("../config");

const fileData = fs.readFileSync(
  path.join(__dirname, "../dataSource.txt"),
  "utf-8"
);

const llm = new ChatGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_API_KEY,
  model: "gemini-1.5-flash",
  temperature: 0
});

async function askQuestion(question) {
  try {

    const prompt = PromptTemplate.fromTemplate(`
You are a knowledgeable assistant.

Document:
${fileData.replace(/{/g, "{{").replace(/}/g, "}}")}

User Question:
{question}

Instructions:
- Answer only from the document
- If not found say "I couldn't find that information"
- If greeting greet back
- Be concise
`);

    const chain = RunnableSequence.from([prompt, llm]);

    const response = await chain.invoke({
      question
    });

    return response?.content || "No response generated";

  } catch (err) {
    console.error("Error:", err.message);
    throw err;
  }
}

module.exports = { askQuestion };