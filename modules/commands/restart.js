module.exports.config = {
	name: "restart",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "manhIT",
	description: "Restart Bot",
  usePrefix: true,
	commandCategory: "system",
	usages: "",
	cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
	const { threadID, messageID } = event;
	return api.sendMessage(`𝙱𝙾𝚃 𝙰𝚁𝙴 𝙽𝙾𝚆 𝚁𝙴𝚂𝚃𝙰𝚁𝚃  𝙿𝙻𝙴𝙰𝚂𝙴 𝚆8 20 𝚂𝙴𝙲....`, threadID, () => process.exit(1));
}