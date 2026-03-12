const fs = require("fs");
const { ChatOpenAI } = require("@langchain/openai");
const { PromptTemplate } = require("@langchain/core/prompts");
const { RunnableSequence } = require("@langchain/core/runnables");
const config = require("../config");

const path = require("path");

const fileData = fs.readFileSync(
  path.join(__dirname, "../dataSource.txt"),
  "utf-8"
);

const llm = new ChatOpenAI({
  openAIApiKey: config.GROQ_API_KEY,
  modelName: "llama3-8b-8192",
  temperature: 0,
  configuration: {
    baseURL: "https://api.groq.com/openai/v1"
  }
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
- If not found, say "I couldn't find that information"
- If greeting, greet back
- Be concise
`);

    const chain = RunnableSequence.from([prompt, llm]);

    const response = await chain.invoke({
      question: question,
    });

    return response?.content || response?.text || "No response generated";

  } catch (err) {
    console.error("Error:", err.message);
    throw err;
  }
}

module.exports = { askQuestion };