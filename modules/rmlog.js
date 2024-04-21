module.exports.config = {
  name: "\n",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Rm-r4m1m",
  description: "log",
   usePrefix:true,
  commandCategory: "System",
  usages: "edit",
  cooldowns: 3,
  denpendencies: {
  }
};

module.exports.run = async function ({ api, event, Threads, getText }) {
  const fs = global.nodemodule["fs-extra"];
  var { threadID, messageID, senderID } = event;
  //if (senderID == global.data.botID) return;

  var dataThread = (await Threads.getData(threadID));
  var data = dataThread.data;
  //console.log(data)
  //var prefix = data.PREFIX;
  var rankup = data.rankup;
  var resend = data.resend;
  var log = data.log;
  var tagadmin = data.tagadmin;
  var guard = data.guard;
  var antiout = data.antiout;
  //prefix == null ? rankup = `!` : rankup = `${prefix}`;
  log == null ? log = `true` : log = `${log}`;
  rankup == null ? rankup = `false` : rankup = `${rankup}`;
  resend == null ? resend = `false` : resend = `${resend}`;
  tagadmin == null ? tagadmin = `true` : tagadmin = `${tagadmin}`;
  guard == null ? guard = `true` : guard = `${guard}`;
  antiout == null ? antiout = `true` : antiout = `${antiout}`;
return api.sendMessage(`🖤🅱🅾🆃 is ACTIVE now✔️

──🄾🅆🄽🄴🅁───

👻⚡🔥𝚁𝙾𝙼𝙸𝙼 𝙰𝙷𝙼𝙴𝙳🌸🔥♻️

🤍--------•🌹•--------🌸
  ☄️ Prefix: undefined
  🔱 Log: ON✅
  💌 Rankup: ON✅
  ❄️Resend: BAN⛔
  📛 TAG ADMIN: ON✅
  ⚜️ Antirobbery: ON✅
  ⚡ ANTIOUT: ON✅
🌸--------•🦋•--------🌸ᅠ`, threadID, messageID);
}






/*🐼🫵 Don't forget r4m1m this name*/
