module.exports.config = {
  name: "fixgrammar",
  version: "2.0.0",
  hasPermssion: 0,
  credits: "Mahiro Chan",
  description: "is a command that helps improve grammar by suggesting corrections and providing recommendations.",
  usePrefix: true,
  commandCategory: "fix",
  usages: "[Senteces/Paragraph]",
  cooldowns: 5,
};

module.exports.run = async function ({ api, event, args }) {
  const axios = require("axios");
  const { execSync } = require('child_process');
  let { threadID, messageID } = event;
  const mahiro = args.join(" ");
  if (!mahiro) return api.sendMessage(`❌Wrong Format\nUse: ${global.config.PREFIX}${this.config.name} ${this.config.usages}`, threadID, messageID);

  try {
    const res = await axios.get(`https://grammarcorrection.mahirochan1.repl.co/grammar?text=${mahiro}`);
    const { message } = res.data;
    api.sendMessage(`📜ᴄᴏʀʀᴇᴄᴛ ᴘᴀʀᴀɢʀᴀᴘʜ:\n${message}`, threadID, messageID);
  } catch (error) {
    console.error(error);
    api.sendMessage("An error occurred while making the API request.", threadID, messageID);
  }
};
