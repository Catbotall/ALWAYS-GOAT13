const axios = require("axios");

module.exports.config = {
	name: "teach",
	version: "1",
	hasPermission: 0,
	credits: "Grey",
	description: "Teach Simsimi",
	usages: "Teach",
	usePrefix: true,
  commandCategory: "...",
	cooldowns: 0
};

module.exports.run = async ({ api, event, args }) => {
	try {
		const text = args.join(" ");
		const text1 = text.substr(0, text.indexOf(' => '));
		const text2 = text.split(" => ").pop();

		if (!text1 || !text2) {
			return api.sendMessage(`Usage: ${global.config.PREFIX}teach hi => hello`, event.threadID, event.messageID);
		}

		const response = await axios.get(`https://api.heckerman06.repl.co/api/other/simsimiteach?input=${encodeURIComponent(text1)}&output=${encodeURIComponent(text2)}`);
		api.sendMessage(`Your ask: ${text1}\nSim respond: ${text2}`, event.threadID, event.messageID);
	} catch (error) {
		console.error("An error occurred:", error);
		api.sendMessage("Oops! Something went wrong.", event.threadID, event.messageID);
	}
};