const axios = require('axios');
const moment = require("moment-timezone");
const fs = global.nodemodule["fs-extra"];
const request = global.nodemodule["request"];

module.exports.config = {
  name: "ids",
  version: "2.0.0",
  hasPermission: 0,
  credits: "Blue", // Special Thanks to Yukihira Soma aka Anjelo for the idea pero actually sya talaga gumawa crinedits lang sakin konte lang ambag ko dito
  description: "User and group id in one file", // modified by light
  usePrefix: false,
  commandCategory: "box",
  usages: "allid (mention user)",
  cooldowns: 5,
  dependencies: '',
};

module.exports.run = async function ({ api, event }) {
  const tid = event.threadID;
  const uid = event.senderID;
  const userName = (await api.getUserInfo(uid))[uid].name;
  const userProfile = await api.getUserInfo(uid);
  const facebookLink = userProfile[uid].vanity || `https://www.facebook.com/${uid}`;
  const gio = moment.tz("Asia/Manila").format("HH:mm:ss || D/MM/YYYY");

  if (event.mentions && event.mentions.everyone && event.isGroup) {
    const allMembers = await api.getThreadInfo(tid);
    const memberInfo = allMembers.participantIDs.map((id) => {
      const memberName = allMembers.nicknames[id] || (allMembers.userInfo[id] ? allMembers.userInfo[id].name : "Unknown");
      const memberFBLink = allMembers.userInfo[id] && allMembers.userInfo[id].vanity ? `https://www.facebook.com/${allMembers.userInfo[id].vanity}` : `https://www.facebook.com/${id}`;
      return `${memberName} 𝗨𝗜𝗗: ${id})\n𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 𝗨𝗜𝗗: ${memberFBLink}`;
    });

    const message = `𝗜𝗡𝗙𝗢:\n\n𝗧𝗜𝗗:\n ${tid}\n𝗨𝗦𝗘𝗥 𝗡𝗔𝗠𝗘:\n ${userName}\n𝗨𝗜𝗗:\n https://www.facebook.com/${uid}\n𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 𝗟𝗜𝗡𝗞:\n https://www.facebook.com/${facebookLink}\n𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 𝗨𝗜𝗗:\n ${uid}\n\n𝗠𝗘𝗡𝗧𝗜𝗢𝗡𝗘𝗗:\n\n𝗨𝗦𝗘𝗥:\n${memberInfo.join('\n')}`;
    return api.sendMessage(message, event.threadID);
  } else if (event.mentions && Object.keys(event.mentions).length > 0) {
    const mentionedUsers = Object.keys(event.mentions).map((id) => ({
      id,
      name: event.mentions[id],
    }));

    const message = `𝗜𝗡𝗙𝗢:\n\n𝗧𝗜𝗗: \n${tid}\n𝗨𝗦𝗘𝗥 𝗡𝗔𝗠𝗘:\n ${userName}\n𝗨𝗜𝗗:\n ${uid}\n𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 𝗟𝗜𝗡𝗞: \nhttps://www.facebook.com/${facebookLink}\n𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 𝗨𝗜𝗗:\n https://www.facebook.com/${uid}\n\n𝗠𝗘𝗡𝗧𝗜𝗢𝗡𝗘𝗗:\n`;
    const mentionedUsersInfo = mentionedUsers.map(
      async (user) => {
        const memberName = (await api.getUserInfo(user.id))[user.id].name;
        const memberFBLink = (await api.getUserInfo(user.id))[user.id].vanity || `https://www.facebook.com/${user.id}`;
        return `\n${memberName} :\n𝗨𝗜𝗗:${user.id}\n𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 𝗨𝗜𝗗: ${memberFBLink}`;
      }
    );

    const infoList = await Promise.all(mentionedUsersInfo);
    return api.sendMessage(message + infoList.join('\n'), event.threadID);
  } else {
    const message = `𝗜𝗡𝗙𝗢: 
 \n𝗧𝗜𝗗:\n${tid}\n𝗨𝗦𝗘𝗥 𝗡𝗔𝗠𝗘:\n   ${userName}\n𝗨𝗜𝗗:   \n${uid}\n𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 𝗟𝗜𝗡𝗞: \nhttps://www.facebook.com/${facebookLink}\n𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 𝗨𝗜𝗗: \nhttps://www.facebook.com/${uid}\n𝗧𝗜𝗠𝗘 & 𝗗𝗔𝗧𝗘:${gio}`;
    return api.sendMessage(message, event.threadID);
  }
};
