const axios = require('axios')

module.exports.config = {
     name: "beshie",
     version: "1.0",
     hasPermssion: 0,
     credits: "james, fix by kira",  
     description: "beshie",
     usePrefix: false,
     commandCategory: "...",
     cooldowns: 0
};
//Credit to mwah
module.exports.run = async function ({ api, event, args }) {
 let text = args.join(" ");
  try {
    const ge = await axios.get(`https://free-api.ainz-sama101.repl.co/others/beshy?text=${text}`);
    const ga = ge.data.result;
    api.sendMessage(`${ga}`, event.threadID, event.messageID);
  } catch(error) {
    console.error(error);
api.sendMessage("Error please try again.", event.threadID, event.messageID)

    
  }
};