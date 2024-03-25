module.exports.config = {
  name: "00 fb",
  version: "1.0.",
  hasPermssion: 0,
  credits: "Islamick Chat",
  description: "Fb Vid Downloader",
  usePrefix: false,
  commandCategory: "other",
  usages: "autodown [link]",
  cooldowns: 2,
};

module.exports.run = async function ({ api, event, args }) {
  const axios = require('axios');
const fs = require('fs-extra');
  let link = args.join(" ");
  
  if (!args[0]) {
    api.sendMessage("╭•┄┅════❁🌺❁════┅┄•\n\nআসসালামু আলাইকুম-!!🖤💫\n ফেসবুক ভিডিও ডাওনলোড এর জন্য ফেসবুক ভিডিও লিংক দিন\n\n•┄┅════❁🌺❁════┅┄•", event.threadID, event.messageID);
    return;
  }
  
  api.sendMessage("𝐃𝐚𝐰𝐧𝐥𝐨𝐚𝐝 𝐘𝐨𝐮𝐫 𝐕𝐢𝐝𝐞𝐨 𝐩𝐥𝐞𝐚𝐬𝐞 𝐖𝐚𝐢𝐭..⌛", event.threadID, event.messageID);
  
  try {
    let path = __dirname + `/cache/fbVID.mp4`;
  
    const aa = await axios.get(`https://api.samirthakuri.repl.co/api/videofb?url=${encodeURI(link)}`);
    
    const vid = (await axios.get(aa.data.video, { responseType: "arraybuffer", })).data;
    
    fs.writeFileSync(path, Buffer.from(vid, 'utf-8'));
    
    api.sendMessage({
      body: `𝐒𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥 𝐃𝐚𝐰𝐧𝐥𝐨𝐚𝐝 𝐘𝐨𝐮𝐫 𝐕𝐢𝐝𝐞𝐨✨🌺`,
      attachment: fs.createReadStream(path) }, event.threadID, () => fs.unlinkSync(path), event.messageID);
    
  } catch (e) {
     api.sendMessage(`${e}`, event.threadID, event.messageID);
  };
  
};