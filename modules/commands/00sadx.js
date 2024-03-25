module.exports.config = {
  name: "sadx",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "R4M1M",
  description: "SAD VEDIO",
usePrefix:true,
  commandCategory: "video",
  usages: "sadxvideo",
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
   var hi = ["༒𝚂𝙰𝙳X 𝚅𝙸𝙳𝙴𝙾 𝙱𝚈 𝚁4𝙼1𝙼 亗"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = ["https://i.imgur.com/ghDz62s.mp4",
"https://i.imgur.com/qtO9jYf.mp4",
"https://i.imgur.com/M5Cw8zi.mp4",
"https://i.imgur.com/N9ZMJ9g.mp4",
"https://i.imgur.com/9oExXyC.mp4",
"https://i.imgur.com/7zIb1wK.mp4",
"https://i.imgur.com/PWPS0cn.mp4",
"https://i.imgur.com/bommM2X.mp4",
"https://i.imgur.com/u5hD7Am.mp4",
"https://i.imgur.com/GQB3Qxb.mp4",              
"https://i.imgur.com/KcNPFu0.mp4",
"https://i.imgur.com/mMZUnRC.mp4",
"https://i.imgur.com/4FdKJ78.mp4",
"https://i.imgur.com/bOV8hHO.mp4",
"https://i.imgur.com/qAhfUPD.mp4",
"https://i.imgur.com/nZKFbWH.mp4",
"https://i.imgur.com/lMAI5SX.mp4", 
"https://i.imgur.com/ZZVIMLw.mp4",
"https://i.imgur.com/VYlhLoc.mp4",
"https://i.imgur.com/GFdeb74.mp4",
"https://i.imgur.com/TBHC4Rs.mp4"
];
     var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };