module.exports.config = {
  name: "adminin",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Joshua Sy",
  description: "",
  commandCategory: "noprefix",
  usePrefix: false,
  usages: "admin",
  cooldowns: 0,
  denpendencies: {
    "fs-extra": "",
    "request": ""
  }
};

module.exports.handleEvent = async ({ event, api, Users }) => {
  const fs = global.nodemodule["fs-extra"];
  var { threadID, messageID, body, senderID } = event; const thread = global.data.threadData.get(threadID) || {};
  if (typeof thread["admin"] !== "undefined" && thread["admin"] == false) return;

  let name = await Users.getNameUser(event.senderID);
  if (senderID == global.data.botID) return;
  function out(data) {
api.setMessageReaction("🙊", event.messageID, (err) => {}, true)
    api.sendMessage(data, threadID, messageID)
  }
  //reply
  var msg = {
    body: `┼🩵🪽┼　　　　　　　　　　　　　　　　　　　　　┼🪶┼__•𝐀𝐥𝐡𝐚𝐦𝐝𝐮𝐥𝐢𝐥𝐥𝐚𝐡 𝐈 𝐚𝐦 𝐬𝐭𝐫𝐨𝐧𝐠 𝐛𝐞𝐜𝐚𝐮𝐬𝐞
𝐈 𝐃𝐞𝐩𝐞𝐧𝐝 𝐨𝐟 𝐀𝐥𝐥𝐚𝐡......!!🌻🖤✨　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　┼　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　┼🩵🪽─┼　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　┼　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　~　𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫 : 「『†« 𓆩𝗥𝗢𝗠𝗜𝗠𓆪 »†』 🩷 🪽」　　　　　　　　　　　　　　　　　　　　　　　　　　　~　　　　　　　　　　　　　　　　　　　　　　　　　~    𝐁𝐨𝐭 𝐀𝐝𝐦𝐢𝐧 : 「 𓆩 রমিম 𓆪 」　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　~　　　　　　　　　　　　　　　　　　　　　　　　　　~　𝐖𝐏 𝐍𝐮𝐦𝐛𝐞𝐫 : 𓆩 m.me/01822583558 𓆪　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　~　　　　　　　　　　　　　　　　　　　　　　　　　　　~　𝐎𝐭𝐡𝐞𝐫𝐬 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧 : 𓆩 বলার সময় নাই 𓆪　　　　　 　　　　　　　　　　　　　　　　　　　　　　　　　　~　　　　　　　　　　　　　　　　　　　　　　　　　　　　~    𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧 : 𓆩 কেউ প্রম করলে ইনবক্স 𓆪　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　~　　　　　　　　　　　　　　　　　　　　　　　　　　┼🩵🪽─┼「𝗥𝟰𝗠!𝗠」┼🩵🪽─┼　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　~　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　~　　　　　　　　　　　　　　　　　　　　　　　　　　　　~　　┼「𝗥𝟰𝗠!𝗠」┼　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 「 𓆩 𝐁𝐨𝐭 𓆪 」「  𓆩 Developer 𓆪  」        　　　　　　　　　　　　　　　　　　　   　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　   　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　༊𝐈𝐧𝐧𝐨𝐜𝐞𝐧𝐭﹏ლ『« 𓆩「𝗥𝗢𝗠𝗜𝗠」𓆪 »』 ﹏ღ`
  }
  // Gọi bot
  var arr = ["এডমিন"];
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

  if (typeof data["এডমিন"] == "undefined" || data["এডমিন"] == true) data["এডমিন"] = false;
  else data["এডমিন"] = true;

  await Threads.setData(threadID, { data });
  global.data.threadData.set(threadID, data);
  return api.sendMessage(`${(data["এডমিন"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
}