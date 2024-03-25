const axios = require('axios');

module.exports.config = {
  name: "tord",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "LOIDBUTTER MODIFIED BY CIEL",
  description: "Get a random Truth or Dare",
  usePrefix: true,
  commandCategory: "Fun",
  usages: ["/tord truth", "/tord dare"],
  cooldowns: 5,
};

const BASE_API_URL = "https://safehandsomevirtualmachines.chatbotmesss.repl.co";

module.exports.run = async ({ api, event, args }) => {
  try {
    const subcommand = args[0]?.toLowerCase();
    if (subcommand === "truth") {
      const prompt = await getRandomPrompt("truth");
      const message = `Here's your random truth: ${prompt}`;
      api.sendMessage({ body: message }, event.threadID);
    } else if (subcommand === "dare") {
      const prompt = await getRandomPrompt("dare");
      const message = `Here's your random dare: ${prompt}`;
      api.sendMessage({ body: message }, event.threadID);
    } else {
      api.sendMessage("Invalid subcommand. Usage: /bot truth or /bot dare", event.threadID);
    }
  } catch (error) {
    console.error("Error fetching prompt:", error);
    api.sendMessage("An error occurred while fetching the prompt.", event.threadID);
  }
};

async function getRandomPrompt(type) {
  try {
    const response = await axios.get(`${BASE_API_URL}/random-${type}`);
    return response.data.prompt;
  } catch (error) {
    console.error(`Error fetching ${type} prompt from the API:`, error);
    throw new Error(`Failed to fetch ${type} prompt from the API.`);
  }
}