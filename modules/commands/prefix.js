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
  const text = ` 𝙱𝙾𝚃 𝙽𝙰𝙼𝙴 ::${global.config.BOTNAME} 🤍\n \n: 𝙱𝙾𝚃 𝙿𝚁𝙴𝙵𝙸𝚇:${global.config.PREFIX} 💝\n\n: 𝙱𝙾𝚃 𝙲𝙾𝙼𝙼𝙰𝙽𝙳:${client.commands.size} ｣🖤\n\n𝚃𝙾𝙳𝙰𝚈 𝚃𝙸𝙼𝙴: ${time}\n𝚈𝙾𝚄𝚁 𝙱𝙾𝚇 𝙽𝙰𝙼𝙴: ${diptoName}💖\n\n♚══════════ ∰ ☚ ══════════♚\n\n𝚃𝙷𝙸𝚂 𝙱𝙾𝚃 𝙾𝚆𝙽𝙴𝚁 𝚁𝙾𝙼𝙸𝙼 𝙰𝙷𝙼𝙴𝙳🤍`
  //const text2 = text[Math.floor(Math.random() * text.length)];
const imgur = ["https://i.imgur.com/85M2jT8.mp4","https://i.imgur.com/41JLsEi.mp4"]
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
