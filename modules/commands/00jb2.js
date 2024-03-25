const fs = require("fs");
module.exports.config = {
	name: "💔",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "ROMIM Ahmed", 
	description: "hihihihi",
  usePrefix: false,
	commandCategory: "Romim",
	usages: "jibon",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("dokko")==0 || event.body.indexOf("🍂")==0 || event.body.indexOf("🍁")==0 || event.body.indexOf("💔")==0) {
		var msg = {
				body: "•—»💔«𝐏𝐫𝐞𝐟𝐢𝐱 𝐞𝐯𝐞𝐧𝐭 𝐛𝐲 𝐑𝐨𝐦𝐢𝐦»💔«—•                      💔«┄┅════❁💔❁════┅┄»💔        «╭──────────────────╮                                                               →              🐰𝐅𝐞𝐞𝐋 𝐓𝐡𝐢𝐬 𝐋𝐢𝐧𝐞 😊💔             　╰──────────────────╯\n ʀᴏᴍɪᴍ ᴀʜᴍᴇᴅ             ✩｡:*•.𓆩𓆩🅁🄾🄼🄸🄼 🄱🄾🅃𓆪 𓆪✩｡:*•. ─────.•*:｡✩\n     ┌───── •✧✧• ─────┐                             🌸 মায়া তো সবার প্রতি\n                                  আসে না\n                                                                                    🍂আর যার প্রতি আসে সে কখনোই বুঝে না!    └─────      •✧✧•.      ─────┘»                                                                                 ʀᴏᴍɪᴍ ᴀʜᴍᴇᴅ                               •┄┅════❁💔❁════┅┄•                               «•••🅁🄾🄼🄸🄼•••»                                                                                 𝐏𝐫𝐞𝐟𝐢𝐱 : « * »                                                                              🅴🆅🅴🅽🆃 :«💔»                                                                                 🅁🄾🄼🄸🄼 🄱🄾🅃",
				attachment: fs.createReadStream(__dirname + `/Sha.on/cc.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🌸", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }