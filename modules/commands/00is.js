module.exports.config = {
  name: "islam",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "ROMIM",
  description: "",
  usePrefix: false,
  commandCategory: "noprefix",
  usages: "Muslim",
  cooldowns: 0,
  denpendencies: {
    "fs-extra": "",
    "request": ""
  }
};

module.exports.handleEvent = async ({ event, api, Users }) => {
  const fs = global.nodemodule["fs-extra"];
  var { threadID, messageID, body, senderID } = event; const thread = global.data.threadData.get(threadID) || {};
  if (typeof thread["Muslim"] !== "undefined" && thread["islam"] == false) return;

  let name = await Users.getNameUser(event.senderID);
  if (senderID == global.data.botID) return;
  function out(data) {
api.setMessageReaction("🤍", event.messageID, (err) => {}, true)
    api.sendMessage(data, threadID, messageID)
  }
  //reply
  var msg = {
    body: `# ༆-✿「𝐌𝐮𝐬𝐥𝐢𝐦𝐬 𝐈𝐝𝐞𝐧𝐭𝐢𝐭𝐲」༊࿐
  •—»★  I  S  L  A  M    ★«—•
╭•┄┅════❁ 𝗥𝗢𝗠𝗜𝗠 𝗔𝗛𝗠𝗘𝗗❁════┅┄•╮
💞--------😌😌😌😌--------💞

   ╭──────────────────╮
  🌸𝐄𝐯𝐞𝐫𝐲 𝐌𝐮𝐬𝐥𝐢𝐦𝐬 𝐈𝐝𝐞𝐧𝐭𝐢𝐭𝐲 🌸
   ╰──────────────────╯

𝙽𝚊𝚖𝚎                     : 𝐌𝐮𝐬𝐥𝐢𝐦.
𝙵𝚊𝚝𝚑𝚎𝚛•𝚜 𝙽𝚊𝚖𝚎    : 𝐀𝐝𝐨𝐦 (আ:)
𝙲𝚛𝚎𝚊𝚝𝚘𝚛               : 𝐀𝐥𝐥𝐚𝐡
𝙸𝚍𝚎𝚊𝚕                   : 𝐌𝐮𝐡𝐚𝐦𝐦𝐚𝐝 (সা.) 
𝙷𝚘𝚕𝚢 𝙱𝚘𝚘𝚔           : 𝐐𝐮𝐫𝐚𝐧 
𝚁𝚎𝚕𝚒𝚐𝚒𝚘𝚗            : 𝐈𝐬𝐥𝐚𝐦 
𝙸𝚍𝚎𝚗𝚝𝚒𝚝𝚢            : لَا إِلٰهَ إِلَّا الله مُحَمَّدٌ رَسُولُ الله• 
𝙷𝚘𝚋𝚋𝚒𝚎𝚜               : 𝐍𝐚𝐦𝐚𝐳 𝟓 𝐭𝐢𝐦𝐞𝐬 𝐚 𝐝𝐚𝐲 
𝙿𝚛𝚎𝚜𝚎𝚗𝚝 𝙰𝚍𝚍𝚛𝚎𝚜𝚜           : 𝐃𝐮𝐧𝐢𝐲𝐚 
𝙿𝚎𝚛𝚖𝚊𝚗𝚎𝚗𝚝 𝙰𝚍𝚍𝚛𝚎𝚜𝚜      : 𝐉𝐚𝐧𝐧𝐚𝐭 (𝐈𝐧 𝐬𝐡𝐚 𝐚𝐥𝐥𝐚𝐡)

╰•┄┅════❁❁════┅┄•╯

𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗥𝗢𝗠𝗜𝗠 𝗔𝗛𝗠𝗘𝗗`
  }
  // Gọi bot
  var arr = ["Muslim"];
  arr.forEach(i => {
    let str = i[0].toUpperCase() + i.slice(1);
    if (body === i.toUpperCase() | body === i | str === body) return out(msg)
  });
};

module.exports.languages = {
  "vi": {
    "on": "Bật",
    "off": "Tắt",
    "successText": "hi thành công",
  },
  "en": {
    "on": "on",
    "off": "off",
    "successText": "hi success!",
  }
}

module.exports.run = async function ({ api, event, Threads, getText }) {
  const { threadID, messageID } = event;
  let data = (await Threads.getData(threadID)).data;

  if (typeof data["parvej"] == "undefined" || data["parvej"] == true) data["parvej"] = false;
  else data["parvej"] = true;

  await Threads.setData(threadID, { data });
  global.data.threadData.set(threadID, data);
  return api.sendMessage(`${(data["parvej"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
  }