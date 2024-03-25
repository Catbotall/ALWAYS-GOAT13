/** I am doing this coding with a lot of difficulty, please don't post it yourself¯\_(ツ)_/¯ **/
module.exports.config = {
  name: "black pink",
  version: "1.0.0",
  hasPermssion: 0,
  credits: " ʀᴏᴍɪᴍ ᴀʜᴍᴇᴅ",
  description: " black pink VEDIO",
  usePrefix:true,
  commandCategory: "Hình ảnh",
  usages: "Black pink",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["««★𝘽𝙇𝘼𝘾𝙆 𝙋𝙄𝙉𝙆 𝙑𝙄𝘿𝙀𝙊 𝘽𝙔//𝐑𝐎𝐌𝐈𝐌★»»"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
  "https://i.imgur.com/rLI8TJw.mp4",
"https://i.imgur.com/9AfxRI2.mp4",
"https://i.imgur.com/ctbJ7iU.mp4",
"https://i.imgur.com/5picE0T.mp4",
"https://i.imgur.com/ixsMuha.mp4",
"https://i.imgur.com/G0RP91b.mp4",
"https://i.imgur.com/J2yaTRM.mp4",
"https://i.imgur.com/7At7No8.mp4",
"https://i.imgur.com/igfSlOT.mp4",
"https://i.imgur.com/W2zUXHl.mp4",             
"https://i.imgur.com/l3eBXjL.mp4",
"https://i.imgur.com/ytNoY7s.mp4",
"https://i.imgur.com/sCxM2il.mp4",
"https://i.imgur.com/7SjunQq.mp4",
"https://i.imgur.com/VMxmuk2.mp4",
"https://i.imgur.com/GQdZY5c.mp4",
"https://i.imgur.com/Pe3dKeN.mp4", 
"https://i.imgur.com/Ex87zub.mp4",
"https://i.imgur.com/bsMYhCo.mp4",
"https://i.imgur.com/sjyZikD.mp4",
"https://i.imgur.com/Z8Mv6NG.mp4"

  
  ];
     var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };