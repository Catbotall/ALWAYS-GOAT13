const axios = require('axios');
 
module.exports.config = {
  name: 'ai',
  version: '1.0.0',
  hasPermission: 0,
  credits: 'Clark',
  description: 'An Ai Chatgpt',
  usePrefix: true,
  commandCategory: 'ai',
  usePrefix: false,
  usages: '[query]',
  cooldowns: 5,
};
 
module.exports.run = async function ({ api, args, event }) {
  try {
    const text = args.join(' ');
 
    if (!text) {
      api.sendMessage('ℹ️ | 𝖯𝗅𝖾𝖺𝗌𝖾 𝗉𝗋𝗈𝗏𝗂𝖽𝖾 𝗌𝗈𝗆𝖾 𝗊𝗎𝖾𝗌𝗍𝗂𝗈𝗇𝗌', event.threadID, event.messageID);
      return;
    }
 
    const apiUrl = 'https://chatgpt.august-api.repl.co/response';
    const response = await axios.post(apiUrl, { prompt: text });
 
    if (response.data && response.data.answer) {
      const answer = response.data.answer.trim();
      api.sendMessage(`🌟 | 𝗥𝗘𝗦𝗣𝗢𝗡𝗗:\n\n${answer}`, event.threadID, event.messageID);
    } else {
      api.sendMessage('❎ | 𝖠𝗇 𝖾𝗋𝗋𝗈𝗋 𝗈𝖼𝖼𝗎𝗋𝗋𝖾𝖽 𝗍𝗈 𝗍𝗁𝖾 𝖼𝗈𝗆𝗆𝖺𝗇𝖽. 𝖯𝗅𝖾𝖺𝗌𝖾 𝗍𝗋𝗒 𝖺𝗀𝖺𝗂𝗇 𝗅𝖺𝗍𝖾𝗋.', event.threadID, event.messageID);
    }
  } catch (error) {
    console.error('Error in command:', error);
    api.sendMessage('❎ | 𝖠𝗇 𝖾𝗋𝗋𝗈𝗋 𝗈𝖼𝖼𝗎𝗋𝗋𝖾𝖽 𝗍𝗈 𝗍𝗁𝖾 𝖼𝗈𝗆𝗆𝖺𝗇𝖽. 𝖯𝗅𝖾𝖺𝗌𝖾 𝗍𝗋𝗒 𝖺𝗀𝖺𝗂𝗇 𝗅𝖺𝗍𝖾𝗋.', event.threadID, event.messageID);
  }
};