module.exports.config = {
  name: "virtual",
  version: "1.0.1",
  hasPermission: 2,
  usePrefix: true,
  credits: "rickciel",
  description: "GPT BY CIEL",
  commandCategory: "ai",
  usages: "[ask = ai answer]",
  cooldowns: 2,
};

const axios = require("axios");

module.exports.run = async function({ api, event, args }) {
  let { messageID, threadID, senderID } = event;
  let tid = threadID,
    mid = messageID;
  
  if (!args[0]) {
    return api.sendMessage("Your command has been received. Waiting for the AI's response and do it again.", tid, mid);
  }
  
  try {
    const userMessage = args.join(" ");
    const apiUrl = 'https://blackbox.chatbotmesss.repl.co/ask';
    
    const response = await axios.get(apiUrl, { params: { q: userMessage } });
    const data = response.data;

    if (data.message !== "") {
      api.sendMessage(data.message, tid, mid);
    } else {
      api.sendMessage("Sorry, unable to get a response from the AI.", tid, mid);
    }
  } catch (error) {
    console.error(error);
    api.sendMessage("An error occurred while fetching the data.", tid, mid);
  }
};