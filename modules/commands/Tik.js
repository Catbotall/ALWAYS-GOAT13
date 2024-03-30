module.exports = {
config: {
  name: "tik",
  version: "2.0.0",
  permission: 0,
  credits: "Nayan",
  description: "Download video from facebook",
  usePrefix: true,
  commmandcategory: "admin",
  usages: "link",
  cooldowns: 5,
  dependencies: {
        'nayan-server': '',
  }
},
  
start: async function({ nayan, events, args }) {
  
  nayan.setMessageReaction("🐸", events.messageID, (err) => {
  }, true);
  nayan.sendTypingIndicator(events.threadID, true);
  
  const { messageID, threadID } = events;

  
  const { tikdown } = require("nayan-media-downloader")
  const fs = require("fs");
  const axios = require("axios");
  const request = require("request");
  const res = await axios.get(`https://raw.githubusercontent.com/MR-NAYAN-404/ERROR/main/error.json`);
  var data = res.data.data;
  let error = `${res.data.error}`;
  const prompt = args.join(" ");
  if (!args[0]) return api.sendMessage("[ ! ] Input link.", threadID, messageID);

  const content = args.join(" ");
  if (!args[1]) nayan.reply(`𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐈𝐍𝐆 𝐕𝐈𝐃𝐄𝐎 𝐅𝐎𝐑 𝐘𝐎𝐔\n\n𝐏𝐋𝐄𝐀𝐒𝐄 𝐖𝟖...`, events.threadID, (err, info) => setTimeout(() => { nayan.unsendMessage(info.messageID) }, 20000));

 try {
  const res = await tikdown(`${content}`);
console.log(res)
   var file = fs.createWriteStream(__dirname + '/cache/tik.mp4');
   
        const play = res.data.video
   const title = res.data.title
        const rqs = request(encodeURI(`${play}`));
   
    

  rqs.pipe(file);  
  file.on('finish', () => {
    
    setTimeout(function() {
      
      return nayan.reply({
        body: `TITLE: ${title}`,
        attachment: fs.createReadStream(__dirname + '/cache/tik.mp4')
      }, threadID, messageID)
    }, 5000)
  })
    } catch (err) {
    nayan.reply(`${error}`, events.threadID, events.messageID);  
   }
}
};
