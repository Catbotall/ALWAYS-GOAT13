const fs = require("fs");
module.exports.config = {
	name: "ROMIM",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "R4M1M", 
	description: "hihihihi",
  usePrefix:true,
	commandCategory: "no prefix",
	usages: "Romim",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Romim")==0 || event.body.indexOf("ROMIM")==0 || event.body.indexOf("romim")==0 || event.body.indexOf("রমিম")==0)        event.body.indexOf("R4M1M")==0) {
		var msg = {
				body: "❀𝙳𝙰𝙺𝙾 𝚁𝙾𝙼𝙸𝙼 𝙰𝙶𝙰𝚈𝙰❦🙋‍♂️🌸",
				attachment: fs.createReadStream(__dirname + `/noprefix/Dkk.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🤍", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }