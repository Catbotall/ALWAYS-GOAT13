module.exports.config = {
  name: "autodl",
  version: "1.2.",
  hasPermssion: 0,
  credits: "Dipto",
  description: "All Video Downloader",
  usePrefix:false,
  commandCategory: "Downloader",
  usages: "[video link]",
  cooldowns: 0
};

module.exports.handleEvent = async function ({ api, event, client, __GLOBAL }) {
  const axios = require('axios');
  const fs = require('fs-extra');
  let dipto = event.body ? event.body : '';
  try {
    if (dipto.startsWith('https://vt.tiktok.com') || dipto.startsWith('https://www.facebook.com') || dipto.startsWith('https://www.instagram.com/') || dipto.startsWith('https://youtu.be/') || dipto.startsWith('https://youtube.com/') || dipto.startsWith('https://x.com/') || dipto.startsWith('https://twitter.com/') || dipto.startsWith('https://vm.tiktok.com') || dipto.startsWith('https://fb.watch')) {
      api.sendMessage("⁂𝚈𝙾𝚄𝚁 𝚅𝙸𝙳𝙴𝙾 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙿𝙻𝙴𝙰𝚂𝙴 𝚆𝙰𝙸𝚃.....៚", event.threadID, event.messageID);
      if (!dipto) {
        api.sendMessage("please put a valid video link", event.threadID, event.messageID);
        return;
      }
      const path = __dirname + `/cache/diptoo.mp4`;
      const aa = await axios.get(`https://d1pt0-all.onrender.com/xnxx?url=${encodeURIComponent(dipto)}`);
      const bb = aa.data;
      const vid = (await axios.get(bb.result, { responseType: "arraybuffer" })).data;
      fs.writeFileSync(path, Buffer.from(vid, 'utf-8'));
      api.sendMessage({
        body: `${bb.cp}`,
        attachment: fs.createReadStream(path)
      }, event.threadID, () => fs.unlinkSync(path), event.messageID)
    }
    if (dipto.startsWith('https://i.imgur.com')) {
      const dipto3 = dipto.substring(dipto.lastIndexOf('.'));
      const response = await axios.get(dipto, { responseType: 'arraybuffer' });
      const filename = __dirname + `/cache/dipto${dipto3}`;
      fs.writeFileSync(filename, Buffer.from(response.data, 'binary'));
      api.sendMessage({
        body: `Downloaded from link`,
        attachment: fs.createReadStream(filename)
      }, event.threadID, () => fs.unlinkSync(filename), event.messageID)
    }
  } catch (e) {
    api.sendMessage(`${e}`, event.threadID, event.messageID);
  }
};
exports.run = function ({ api, event, client, __GLOBAL }) {

}


// Downloaded from https://neanmart-botcmds.onrender.com/raw/autodl001

/*
Name: autodl.js
ID: autodl001
Description: All Video Downloader command, botpack/mirai, api by dipto,
*/
