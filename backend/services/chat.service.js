const fs = require("fs");
const { ChatOpenAI } = require("@langchain/openai");
const { PromptTemplate } = require("@langchain/core/prompts");
const { RunnableSequence } = require("@langchain/core/runnables");
const config = require("../config");

const fileData = fs.readFileSync('./dataSource.txt', 'utf-8');

const llm = new ChatOpenAI({
  modelName: "mistralai/Mistral-7B-Instruct-v0.1",
  temperature: 0,
  openAIApiKey: config.TOGETHER_API_KEY,
  configuration: {
    baseURL: "https://api.together.xyz/v1"
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