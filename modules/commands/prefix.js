const dipto = require('axios');
const fs = require('fs-extra');
const path = require('path');
const moment = require('moment-timezone');
const pathFile = __dirname + '/cache/d1p.txt';
if (!fs.existsSync(pathFile))
  fs.writeFileSync(pathFile, 'true');
  const isEnable = fs.readFileSync(pathFile, 'utf-8');
module.exports.config = {
  name: "prefix2",
  version: "1.0.0",
  hasPermission: 0,
  credits: "diptoxRomim",
  usePrefix: true,
  description: "when send ,prefix then response",
  commandCategory: "bot prefix",
  usages: "prefix",
  cooldowns: 5,
};
module.exports.handleEvent = async ({ api, event }) => {
  if (isEnable == "true"){
  const dipto2 = event.body ? event.body.toLowerCase() : '';
   // const GP = "╭•┄┅════❁🌺❁════┅┄•╮\n${GP}\n╰•┄┅════❁🌺❁════┅┄•╯\n\n"; 
  //🅁🄾🄼🄸🄼 🄱🄾🅃"
     let d1PInfo = await api.getThreadInfo(event.threadID);
  let diptoName = d1PInfo.threadName;
    var time = moment.tz("Asia/Dhaka").format("LLLL");
  const text = `𝐁𝐎𝐓 𝐍𝐀𝐌𝐄 :🅁🄾🄼🄸🄼 🄱🄾🅃🤍\n \n𝐑𝐎𝐁𝐎𝐓 𝐏𝐑𝐄𝐅𝐈𝐗 : ｢ ${global.config.PREFIX} ｣💝\n\n𝐑𝐎𝐁𝐎𝐓 𝐂𝐌𝐃: ｢ ${client.commands.size} ｣🖤\n\n𝐓𝐈𝐌𝐄 : ${time}\n𝐆𝐑𝐎𝐔𝐏 𝐍𝐀𝐌𝐄: ${diptoName}💖\n\n━━━━━━━━━━━━━━━━━━━━━━━\n\n𝐁𝐎𝐓 𝐎𝐖𝐍𝐄𝐑 :\nʀᴏᴍɪᴍ ᴀʜᴍᴇᴅ💫`
  //const text2 = text[Math.floor(Math.random() * text.length)];
const imgur = ["https://i.imgur.com/uyG8XKs.mp4"]
  const link = imgur[Math.floor(Math.random() * imgur.length)];
  const res = await dipto.get(link, { responseType: 'arraybuffer' })
const ex = path.extname(link);
  const filename = __dirname + `/cache/Shaon${ex}`;
  fs.writeFileSync(filename, Buffer.from(res.data, 'binary'));
  if (dipto2.indexOf("prefix") ===0|| dipto2.indexOf("Prefix") ===0 )
  {
api.sendMessage({body:`${text}`,attachment: fs.createReadStream(filename)},event.threadID,() => fs.unlinkSync(filename),event.messageID)
  }
 }
}
module.exports.run = async ({api,args, event}) => {
try {
  if (args[0] == 'on') {
    fs.writeFileSync(pathFile, 'true');
    api.sendMessage('no prefix on successfully', event.threadID, event.messageID);
  }
  else if (args[0] == 'off') {
    fs.writeFileSync(pathFile, 'false');
    api.sendMessage('no prefix off successfully', event.threadID, event.messageID);
  }
  else if (!args[0]){
    api.sendMessage(`Wrong format ${this.config.name}use off/on`, event.threadID, event.messageID);
  }
  }
  catch(e) {
    console.log(e);
  }

}