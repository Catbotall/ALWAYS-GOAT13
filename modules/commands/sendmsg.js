module.exports.config = {
	name: "sendmsg",
	version: "1.0.7",
	hasPermssion: 2,
	credits: "manhG", // fix by light
	description: "sendmsg [uid] [text]",
	usePrefix: true,
  commandCategory: "admin",
	usages: "ID [Text]",
	cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
 //if (!args[0]) return api.sendMessage(`${api.getthreadID()}`, event.threadID);
    
	var idbox = args[0];
    var reason = args.slice(1);
	//let threadID = await api.getThreadID();
	if (args.length == 0) api.sendMessage("Syntax error, use: sendmsg ID_BOX [messsage]", event.threadID, event.messageID);
	
	else if(reason == "")api.sendMessage("Syntax error, use: sendmsg ID_BOX [message]", event.threadID, event.messageID);
	
	else
		api.sendMessage("𝗙𝗥𝗢𝗠 𝗔𝗗𝗠𝗜𝗡: \n\n" + reason.join(" "), idbox, () =>
			api.sendMessage(`${api.getCurrentUserID()}`, () =>
				api.sendMessage("Sent message: " + reason.join(" "), event.threadID)));
}
