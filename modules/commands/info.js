module.exports.config = {
	name: "info",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "romim", 
	description: "Admin and Bot info.",
	usePrefix: true,
  commandCategory: "...",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Manila").format("『D/MM/YYYY』 【HH:mm:ss】");
var link = ["https://i.imgur.com/aQD2XSU.jpg", 
            
            "https://i.imgur.com/OHuPguA.jpg", 
            
            "https://i.imgur.com/vcHxEWD.jpg"];
var callback = () => api.sendMessage({body:`•—»✨𝙰𝙳𝙼𝙸𝙽 𝙰𝙽𝙳 𝙱𝙾𝚃 𝙸𝙽𝙵𝙾 ✨🤍
•┄┅═════❁🔥❁═════┅┄•

 𝙱𝙾𝚃 𝙽𝙰𝙼𝙴: ${global.config.BOTNAME}

ᬁ𝙱𝙾𝚃 𝙰𝙳𝙼𝙸𝙽༒ : —͟͟͞͞𖣘𝚁𝙾𝙼𝙸𝙼 𝙰𝙷𝙼𝙴𝙳𒆜 ༻

❦★𝙱𝙾𝚃 𝙰𝙳𝙼𝙸𝙽 -𝙾𝚆𝙽𝙴𝚁 𝙰𝙶𝙴: 14✧░▩◎◌◎

•┄┅══❁𝙰𝙳𝙼𝙸𝙽 𝙲𝙾𝙽𝚃𝙰𝙲𝚃 𝙰𝙻𝙻 𝙸𝙽𝙵𝙾❁══┅┄•
꧁☯☂️𝙵𝙰𝙲𝙴𝙱𝙾𝙾𝙺 𝙰𝙲𝙲𝙾𝚄𝙽𝚃㟼 https://www.facebook.com/61557377382818

*•.¸♡𝙼𝙴𝚂𝚂𝙴𝙽𝙶𝙴𝚁 𝙸𝙽𝙱𝙾𝚇༒ : m.me/61557377382818


×º°”𝚆𝙿 𝙽𝚄𝙼𝙱𝙴𝚁: m.me/01822583558

✪☠︎︎𝚂𝙴𝙰𝚁𝙲𝙷 𝙾𝙽 𝚃𝙸𝙺𝚃𝙾𝚔: it's me Romim 07

☛𝙸𝙽𝙵𝙾 𝙼𝙾𝙳𝙸𝙵𝙸𝙴𝙳  𝙱𝚈 𝚁4𝙼1𝙼 ༒

•┄┅═════❁ᚏ𝙱𝙾𝚃 𝙸𝙽𝙵𝙾★❁═════┅┄•
—͟͟͞͞𖣘𝙱𝙾𝚃 𝚃𝚈𝙿𝙴 :- 𝙱𝙾𝚃𝙿𝙰𝙲𝙺༒

𝙱𝙾𝚃 𝙽𝙰𝙼𝙴 : ${global.config.BOTNAME}

👑༻𝙱𝙾𝚃 𝙿𝚁𝙴𝙵𝙸𝚇 ✘: ${global.config.PREFIX}

•┄┅═════❁ᚏ𝙱𝙾𝚃 𝚄𝙿𝚃𝙸𝙼𝙴 𝙸𝙽𝙵𝙾❁═════┅┄•
•—»✨𝚄𝙿𝚃𝙸𝙼𝙴

❈𝚃𝙾𝙳𝙰𝚈 𝙸𝚂༒: ${juswa} 
—͟͟͞͞𖣘𝙱𝙾𝚃 𝚁𝚄𝙽𝙽𝙸𝙽𝙶 𝚄𝙿𝚃𝙸𝙼𝙴 ༒
 ${hours}:${minutes}:${seconds}.
◤𝚃𝙷𝙰𝙽𝙺𝙺'𝚂 𝙵𝙾𝚁 𝚄𝚂𝙸𝙽𝙶 ${global.config.BOTNAME}\n𝚃𝙷𝙸𝚂 𝙱𝙾𝚃 𝙿𝚁𝙾𝚃𝙴𝙲𝚃 𝚄𝙽𝙳𝙴𝚁 𝚁4𝙼1𝙼 𝚂𝙴𝚁𝚅𝙴𝚁 𝙵𝙴𝙴𝙻 𝚃𝙷𝙴 𝙿𝙾𝚆𝙴𝚁 𝙾𝙵 𝚁4𝙼1𝙼 ᬁ`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };