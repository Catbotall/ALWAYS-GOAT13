module.exports.config = {
  name: "autodl",
  version: "1.0.",
  hasPermssion: 0,
  credits: "Dipto",
  description: "Fb Vid Downloader",
  commandCategory: "other",
  usages: "fb video link",
   usePrefix: true,
  cooldowns: 2
};

module.exports.handleEvent = async function ({ api, event, client, __GLOBAL }) {
  const axios = require('axios');
const fs = require('fs-extra');
  const tinyurl = require('tinyurl');
let dipto = event.body ? event.body : '';
  try {
if (dipto.startsWith('https://vt.tiktok.com') ||
dipto.startsWith("https://vm.tiktok.com") ||
dipto.startsWith('https://www.facebook.com') || 
dipto.startsWith('https://fb.watch')||
dipto.startsWith('https://www.instagram.com/')|| dipto.startsWith('https://youtu.be/') ||
dipto.startsWith('https://www.instagram.com/p/') ||    
dipto.startsWith('https://pin.it/') ||    dipto.startsWith('https://youtube.com/')){
  api.sendMessage("", event.threadID, event.messageID);
  if (!dipto) {
    api.sendMessage("please put a valid fb video link", event.threadID, event.messageID);
    return;
    }
   let ex;
        if (videoURL.includes('.jpg')){
             ex = ".jpg";
        }
        else { ex = ".mp4"; }

const path = __dirname + `/cache/video${ex}`;
    const aa = await axios.get(`${global.config.API}/dipto/alldl?url=${encodeURIComponent(dipto)}`);
   const bb = aa.data;
   const shortUrl = await tinyurl.shorten(bb.result);
   const MSG = `✅ 🔗 Download Url: ${shortUrl}`;

    const vid = (await axios.get(bb.result, { responseType: "arraybuffer", })).data;
    fs.writeFileSync(path, Buffer.from(vid, 'utf-8'));
    api.sendMessage({
      body: `${bb.cp}\n${MSG}\n 🥹💙`,
      attachment: fs.createReadStream(path) }, event.threadID, () => fs.unlinkSync(path), event.messageID)}
if (dipto.startsWith('https://i.imgur.com')){
  const dipto3 = dipto.substring(dipto.lastIndexOf('.'));
  const response = await axios.get(dipto, { responseType: 'arraybuffer' });
const filename = __dirname + `/cache/dipto${dipto3}`;
    fs.writeFileSync(filename, Buffer.from(response.data, 'binary'));
    api.sendMessage({body: `Downloaded from link`,attachment: fs.createReadStream(filename)},event.threadID,
  () => fs.unlinkSync(filename),event.messageID)
}
} catch (e) {
api.sendMessage(`${e}`, event.threadID, event.messageID);
  };
};
module.exports..  run = function({ api, event, client, __GLOBAL }) {

}
