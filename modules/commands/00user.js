module.exports.config = {
    name: "Profile",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "ROMIM",
    usePrefix:true,
    description: "DESCRIPTION ABOUT BOT",
    commandCategory: "Media",
    usages: "",
    cooldowns: 4,
    dependencies: {
        "request": "",
        "fs": ""
    }
    
};

module.exports.run = async({api,event,args}) => {
    const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
    const threadSetting = global.data.threadData.get(parseInt(event.threadID)) || {};
    const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
     if (args.length == 0) return api.sendMessage(`You can use:\n\n${prefix}${this.config.name} user => it will take your own information.\n\n${prefix}${this.config.name} user @[Tag] => it will get friend information tag.\n\n${prefix}${this.config.name} box => it will get your box information (number of members, djt each other,...)\n\n${prefix}${this.config.name} user box [uid || tid.:\n\n${prefix}${this.config.name} admin => Admin Bot's Personal Information]`, event.threadID, event.messageID);
    if (args[0] == "box") {
           if(args[1]){ let threadInfo = await api.getThreadInfo(args[1]);
           let imgg = threadInfo.imageSrc;
           var gendernam = [];
            var gendernu = [];
                for (let z in threadInfo.userInfo) {
                var gioitinhone = threadInfo.userInfo[z].gender;
                if(gioitinhone == "MALE"){gendernam.push(gioitinhone)
                }else{gendernu.push(gioitinhone)
                }};
             var nam = gendernam.length;
             var nu = gendernu.length;
             let sex = threadInfo.approvalMode;
       var pd = sex == false ? "Turn off" : sex == true ? "turn on" : "NS";
       if(!imgg) api.sendMessage(`Group name: ${threadInfo.threadName}\nTID: ${args[1]}\nApproved: ${pd}\nEmoji: ${threadInfo.emoji}\nInformation: \nÂ»${threadInfo.participantIDs.length} members and ${threadInfo.adminIDs.length} administrators.\nÂ»Including ${nam} boy and ${nu} female.\nÂ»Total number of messages: ${threadInfo.messageCount}.`,event.threadID,event.messageID);
        else var callback = () => api.sendMessage({body:`Group name: ${threadInfo.threadName}\nTID: ${args[1]}\nApproved: ${pd}\nEmoji: ${threadInfo.emoji}\nInformation: \nÂ»${threadInfo.participantIDs.length} members and ${threadInfo.adminIDs.length}administrators.\nÂ»Including ${nam} boy and ${nu} female.\nÂ»Total number of messages: ${threadInfo.messageCount}.`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"), event.messageID); 
      return request(encodeURI(`${threadInfo.imageSrc}`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
      
      }
          
            let threadInfo = await api.getThreadInfo(event.threadID);
            let img = threadInfo.imageSrc;
            var gendernam = [];
            var gendernu = [];
                for (let z in threadInfo.userInfo) {
                var gioitinhone = threadInfo.userInfo[z].gender;
                if(gioitinhone == "MALE"){gendernam.push(gioitinhone)
                }else{gendernu.push(gioitinhone)
                }};
             var nam = gendernam.length;
             var nu = gendernu.length;
             let sex = threadInfo.approvalMode;
       var pd = sex == false ? "Turn off" : sex == true ? "turn on" : "NS";
          if(!img) api.sendMessage(`Group name: ${threadInfo.threadName}\nTID: ${event.threadID}\nApproved: ${pd}\nEmoji: ${threadInfo.emoji}\nInformation: \nÂ»${threadInfo.participantIDs.length} members and ${threadInfo.adminIDs.length} administrators.\nÂ»Including ${nam} boy and ${nu} ná»¯.\nÂ»Total number of messages: ${threadInfo.messageCount}.`,event.threadID,event.messageID)
          else  var callback = () => api.sendMessage({body:`Group name: ${threadInfo.threadName}\nTID: ${event.threadID}\nBrowser: ${pd}\nEmoji: ${threadInfo.emoji}\nInformation: \nÂ»${threadInfo.participantIDs.length} members and ${threadInfo.adminIDs.length} administrators.\nÂ»Including ${nam} boy and ${nu} female.\nÂ»Total number of messages: ${threadInfo.messageCount}.`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"), event.messageID);   
      return request(encodeURI(`${threadInfo.imageSrc}`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
    }
               if (args.length == 0) return api.sendMessage(`You can use:\n\n${prefix}${this.config.name} user => it will get your own information.\n\n${prefix}${this.config.name} user @[Tag] => it will get the information of the person you tag.\n\n${prefix}${this.config.name} box => it will get your box information (number of members, djt each other,...)\n\n${prefix}${this.config.name} user box [uid || tid]`, event.threadID, event.messageID);
    if (args[0] == "admin") {
      var callback = () => api.sendMessage(
  {body:`•—»✨𝙰𝙳𝙼𝙸𝙽 𝙰𝙽𝙳 𝙱𝙾𝚃 𝙸𝙽𝙵𝙾 ✨🤍
•┄┅═════❁🔥❁═════┅┄•

 𝙱𝙾𝚃 𝙽𝙰𝙼𝙴: ${global.config.BOTNAME}

ᬁ𝙱𝙾𝚃 𝙰𝙳𝙼𝙸𝙽༒ : —͟͟͞͞𖣘𝚁𝙾𝙼𝙸𝙼 𝙰𝙷𝙼𝙴𝙳𒆜 ༻

❦★𝙱𝙾𝚃 𝙰𝙳𝙼𝙸𝙽 -𝙾𝚆𝙽𝙴𝚁 𝙰𝙶𝙴: 14✧░▩◎◌◎

•┄┅══❁𝙰𝙳𝙼𝙸𝙽 𝙲𝙾𝙽𝚃𝙰𝙲𝚃 𝙰𝙻𝙻 𝙸𝙽𝙵𝙾❁══┅┄•\n
꧁☯☂️𝙵𝙰𝙲𝙴𝙱𝙾𝙾𝙺 𝙰𝙲𝙲𝙾𝚄𝙽𝚃㟼 https://www.facebook.com/61557377382818

*•.¸♡𝙼𝙴𝚂𝚂𝙴𝙽𝙶𝙴𝚁 𝙸𝙽𝙱𝙾𝚇༒ : m.me/61557377382818


×º°”𝚆𝙿 𝙽𝚄𝙼𝙱𝙴𝚁: m.me/01822583558

✪☠︎︎𝚂𝙴𝙰𝚁𝙲𝙷 𝙾𝙽 𝚃𝙸𝙺𝚃𝙾𝚔: https://www.tiktok.com/@its_me_romim6?_t=8kyatQ3sHW4&_r=1

☛𝙸𝙽𝙵𝙾 𝙼𝙾𝙳𝙸𝙵𝙸𝙴𝙳  𝙱𝚈 𝚁4𝙼1𝙼 ༒`,
    attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(encodeURI(`https://graph.facebook.com/100049220893428/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
    
      };

if (args[0] == "user") { 
    if(!args[1]){
    if(event.type == "message_reply") id = event.messageReply.senderID
    else id = event.senderID;
    let data = await api.getUserInfo(id);
    let url = data[id].profileUrl;
    let b = data[id].isFriend == false ? "are not !" : data[id].isFriend == true ? "Yes !" : "Damn";
    let sn = data[id].vanity;
    let name = await data[id].name;
    var sex = await data[id].gender;
    var gender = sex == 2 ? "Male" : sex == 1 ? "Female" : "Tran Duc Bo";
    var callback = () => api.sendMessage({body:`𝗜𝗗 𝗡𝗔𝗠𝗘: ${name}` + `\n𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 𝗟𝗜𝗡𝗞: ${url}` + `\n𝗨𝗦𝗘𝗥 𝗡𝗔𝗠𝗘: ${sn}\n𝗨𝗜𝗗: ${id}\n𝗚𝗘𝗡𝗗𝗘𝗥: ${gender}\n𝗠𝗔𝗞𝗘 𝗙𝗥𝗜𝗘𝗡𝗗𝗦 𝗪𝗜𝗧𝗛 𝗕𝗢𝗧𝗦: ${b}`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID); 
       return request(encodeURI(`https://graph.facebook.com/${id}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
   }
    else {
    
    if (args.join().indexOf('@') !== -1){
    var mentions = Object.keys(event.mentions)
    let data = await api.getUserInfo(mentions);
    let url = data[mentions].profileUrl;
    let b = data[mentions].isFriend == false ? "are not !" : data[mentions].isFriend == true ? "yes!" : "Dammit";
    let sn = data[mentions].vanity;
    let name = await data[mentions].name;
    var sex = await data[mentions].gender;
    var gender = sex == 2 ? "Male" : sex == 1 ? "Female" : "Tran Duc Bo";
    var callback = () => api.sendMessage({body:`𝗜𝗗 𝗡𝗔𝗠𝗘: ${name}` + `\n𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 𝗟𝗜𝗡𝗞: ${url}` + `\n𝗨𝗦𝗘𝗥𝗡𝗔𝗠𝗘: ${sn}\n𝗨𝗜𝗗: ${mentions}\n𝗦𝗘𝗫: ${gender}\n𝗠𝗔𝗞𝗘 𝗙𝗥𝗜𝗘𝗡𝗗𝗦 𝗪𝗜𝗧𝗛 𝗕𝗢𝗧𝗦: ${b}`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID);   
       return request(encodeURI(`https://graph.facebook.com/${mentions}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
    }
    else {
    let data = await api.getUserInfo(args[1]);
    let url = data[args[1]].profileUrl;
    let b = data[args[1]].isFriend == false ? "are not !" : data[args[1]].isFriend == true ? "yes!" : "Damn";
    let sn = data[args[1]].vanity;
    let name = await data[args[1]].name;
    var sex = await data[args[1]].gender;
    var gender = sex == 2 ? "Name" : sex == 1 ? "Female" : "Tran Duc Bo";
    var callback = () => api.sendMessage({body:`𝗜𝗗 𝗡𝗔𝗠𝗘: ${name}` + `\n𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 𝗟𝗜𝗡𝗞: ${url}` + `\n𝗨𝗦𝗘𝗥𝗡𝗔𝗠𝗘: ${sn}\n𝗨𝗜𝗗: ${args[1]}\n𝗚𝗘𝗡𝗗𝗘𝗥: ${gender}\n𝗠𝗔𝗞𝗘 𝗙𝗥𝗜𝗘𝗡𝗗𝗦 𝗪𝗜𝗧𝗛 𝗕𝗢𝗧𝗦: ${b}`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID);   
       return request(encodeURI(`https://graph.facebook.com/${args[1]}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
    }
     }
     }
    }
