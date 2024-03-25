module.exports.config = {
	name: "riddles",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "tdunguwu",
	description: "random text",
	usePrefix: true,
  commandCategory: "Random Text",
	usages: "",
	cooldowns: 5,
	dependencies: {
		"axios":""}
	
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];

const res = await axios.get(`https://riddles-api.vercel.app/random`);
var riddle = res.data.riddle
return api.sendMessage(`${riddle}`, event.threadID, event.messageID)
}