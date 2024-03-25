module.exports.config = {
  name: "uid2",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Islamick Chat",
  description: "chak information for Facebook uid and massage link",
  usePrefix:false,
  commandCategory: " provide fb uid link",
  cooldowns: 0
};

module.exports.run = async function({ event, api, args, client, Currencies, Users, utils, __GLOBAL, reminder }) {
const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
    const axios = global.nodemodule['axios']; 
    if(event.type == "message_reply") { 
      let name = await Users.getNameUser(event.messageReply.senderID) 
  uid = event.messageReply.senderID
  var callback = () =>   api.sendMessage({body:`•┄┅════❁🌺❁════┅┄•\n\nআসসালামু আলাইকুম-!!🖤💫 \n•—»✨আপনারা User ID হলো: ${uid}\n\n•—»✨আপনি এই‌ লিংক এর মাধ্যমে তার ইনবক্সে নক করতে পারবেন : m.me/${uid}\n\n•—»✨এটি আপনার Facebook Id Link https://www.facebook.com/profile.php?id=${uid}\n\n•┄┅════❁🌺❁════┅┄•`, attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID,
        () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID); 
    return request(encodeURI(`https://graph.facebook.com/${uid}/picture?height=1500&width=1500&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',
        () => callback()); 
    }
    if (!args[0]) {
      var uid = event.senderID;
      const res = await axios.get(`https://www.nguyenmanh.name.vn/api/fbInfo?id=${uid}&apikey=LV7LWgAp`);
var name = res.data.result.name 
        var callback = () =>  api.sendMessage({body:`•┄┅════❁🌺❁════┅┄•\n\nআসসালামু আলাইকুম-!!🖤💫\n•—»✨আপনারা User ID হলো: ${uid}\n\n•—»✨আপনি এই‌ লিংক এর মাধ্যমে তার ইনবক্সে নক করতে পারবেন : m.me/${uid}\n\n•—»✨এটি আপনার Facebook Id Link https://www.facebook.com/profile.php?id=${uid}\n\n•┄┅════❁🌺❁════┅┄•`, attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID,
        () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID); 
    return request(encodeURI(`https://graph.facebook.com/${event.senderID}/picture?height=1500&width=1500&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',
        () => callback()); 
    }
    else {
  if (args[0].indexOf(".com/")!==-1) {
    const res_ID = await api.getUID(args[0]);
   var name = data.name
var data = await api.getUserInfoV2(res_ID);
    var username = data.username
    var link = data.link
    var callback = () => api.sendMessage({body:`•┄┅════❁🌺❁════┅┄•\n\nআসসালামু আলাইকুম-!!🖤💫 \n•—»✨আপনারা User ID হলো: ${uid}\n\n•—»✨আপনি এই‌ লিংক এর মাধ্যমে তার ইনবক্সে নক করতে পারবেন : m.me/${uid}\n\n•—»✨এটি আপনার Facebook Id Link https://www.facebook.com/profile.php?id=${uid}\n\n•┄┅════❁🌺❁════┅┄•`, attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID,
        () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID); 
    return request(encodeURI(`https://graph.facebook.com/${res_ID}/picture?height=1500&width=1500&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',
        () => callback()); }
  else {
    if (args.join().indexOf('@') !== -1) 
      var uid = Object.keys(event.mentions) 
      var callback = () => 
api.sendMessage({body:`•┄┅════❁🌺❁════┅┄•\n\nআসসালামু আলাইকুম-!!🖤💫\n•—»✨আপনারা User ID হলো: ${uid}\n\n•—»✨আপনি এই‌ লিংক এর মাধ্যমে তার ইনবক্সে নক করতে পারবেন : m.me/${uid}\n\n•—»✨এটি আপনার Facebook Id Link https://www.facebook.com/profile.php?id=${uid}\n\n•┄┅════❁🌺❁════┅┄•`, attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID,
        () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID); 
    return request(encodeURI(`https://graph.facebook.com/${uid}/picture?height=1500&width=1500&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',
        () => callback()); 

  }
}
}