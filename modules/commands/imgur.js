module.exports.config = {
  name: "imgur",
  version: "30.0.10",
  hasPermssion: 0,
  credits: "Dark Rulex Team",
  description: "imgur upload",
  usePrefix: true,
  commandCategory: "imgur",
  usages: "[reply to image]",
  cooldowns: 5,
  dependencies: {
    "axios": ""
  }
};

module.exports.run = async ({ api, event }) => {
  const axios = global.nodemodule['axios'];
  let link2;

  if (event.type === "message_reply" && event.messageReply.attachments.length > 0) {
    link2 = event.messageReply.attachments[0].url;
  } else if (event.attachments.length > 0) {
    link2 = event.attachments[0].url;
  } else {
    return api.sendMessage('No attachment detected. Please reply to an image.', event.threadID, event.messageID);
  }

  const res = await axios.get(`https://dark-rulex-vip4.0xanupx0.repl.co/imgur?link=${encodeURIComponent(link2)}`);
  const link = res.data.uploaded.image;
  return api.sendMessage(`Here is the Imgur link for the image you provided:\n\n${link}`, event.threadID, event.messageID);
};
