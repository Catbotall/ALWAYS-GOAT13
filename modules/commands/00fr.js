const fs = require("fs");
module.exports.config = {
	name: "🫂",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "ROMIM Ahmed", 
	description: "hihihihi",
  usePrefix: true,
	commandCategory: "Romim",
	usages: "friend",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Friend")==0 || event.body.indexOf("vai brother")==0 || event.body.indexOf("friendship")==0 || event.body.indexOf("🫂")==0) {
		var msg = {
				body: "•—»🖤«𝐏𝐫𝐞𝐟𝐢𝐱 𝐞𝐯𝐞𝐧𝐭 𝐛𝐲 𝐑𝐨𝐦𝐢𝐦»🖤«—•                      🖤«┄┅════❁🫂❁════┅┄»🖤            «★★★”বন্ধু তুই আর আমি থাকলে এক!!!😈\n\n ওদেরকে উরাইলামু তুই খালি দেখ!!👿👽★★»\n\n           ʀᴏᴍɪᴍ ᴀʜᴍᴇᴅ                               •┄┅════❁🫂❁════┅┄•                               «•••🅁🄾🄼🄸🄼•••»                                                                                 𝐏𝐫𝐞𝐟𝐢𝐱 : « * »                                                                              🅴🆅🅴🅽🆃 :« 🅵🆁🅸🅴🅽🅳  »                                                                          🅁🄾🄼🄸🄼 🄱🄾🅃",
				attachment: fs.createReadStream(__dirname + `/Shaon/fr.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🫂", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }