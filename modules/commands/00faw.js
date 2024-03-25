const fs = require("fs");
module.exports.config = {
	name: "😊",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "ROMIM Ahmed", 
	description: "hihihihi",
  usePrefix: false,
	commandCategory: "Romim",
	usages: "Shikha",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("..")==0 || event.body.indexOf("...")==0 || event.body.indexOf("89")==0 || event.body.indexOf("😊")==0) {
		var msg = {
				body: "•—»🖤«𝐏𝐫𝐞𝐟𝐢𝐱 𝐞𝐯𝐞𝐧𝐭 𝐛𝐲 𝐑𝐨𝐦𝐢𝐦»🖤«—•                      🖤«┄┅════❁😊❁════┅┄»🖤            «মানুষ এতো টা খারাপ জে তাকে সাহায্য করলো!!  \n                                                                                                         তাকেও কষ্ট দিতে তার একটা বারোও ভাবে না💔😊»\n            ʀᴏᴍɪᴍ ᴀʜᴍᴇᴅ                               •┄┅════❁😊❁════┅┄•                               «•••🅁🄾🄼🄸🄼•••»                                                                                 𝐏𝐫𝐞𝐟𝐢𝐱 : « * »                                                                              🅴🆅🅴🅽🆃 :«😊»                                                                                 🅁🄾🄼🄸🄼 🄱🄾🅃",
				attachment: fs.createReadStream(__dirname + `/Shaon/.pl.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😊", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }