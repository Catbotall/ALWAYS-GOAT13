module.exports.config = {
	name: "kissv2",
	version: "7.3.1",
	hasPermssion: 0,
	credits: "John Lester",
	description: "kiss",
	usePrefix: false,
  commandCategory: "edit-img",
	usages: "[blank or tag]",
	cooldowns: 5,
	dependencies: {"fs-extra": "","discord.js": "","discord-image-generation" :"","node-superfetch": ""}
};

module.exports.run = async ({ event, api, args, Users }) => {
  const DIG = global.nodemodule["discord-image-generation"];
  const Discord = global.nodemodule['discord.js'];
  const request = global.nodemodule["node-superfetch"];
  const fs = global.nodemodule["fs-extra"];
   let { senderID, threadID, messageID } = event;
  var id = Object.keys(event.mentions)[0] || event.senderID;
  var ids = Object.keys(event.mentions)[1] || event.senderID;
  
  var avatar = (await request.get(`https://graph.facebook.com/${id}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).body;
  var avatars = (await request.get(`https://graph.facebook.com/${ids}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).body;
  
  let img = await new DIG.Kiss().getImage(avatar, avatars);
  let attach = new Discord.MessageAttachment(img);
  var path_trash = __dirname + "/cache/kissv2.png";
  fs.writeFileSync(path_trash, attach.attachment);
  api.sendMessage({attachment: fs.createReadStream(path_trash)}, event.threadID, () => fs.unlinkSync(path_trash), event.messageID);
}
