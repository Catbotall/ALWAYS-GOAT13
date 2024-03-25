const axios = require("axios");

module.exports.config = {
  name: "doc",
  version: "1",
  hasPermssion: 0,
  credits: "Grey",//modified by NtrEms, don't change the credits!
  description: "An AI doctor and come up with creative treatments for illnesses or diseases.",
  commandCategory: "Medical Bots",
  usages: "<ask>",
  usePrefix: true,
  cooldowns: 5,
};

module.exports.run = async function({ api, event, args }) {
  let { threadID, messageID, type, messageReply } = event;

  const prompt = `You're Now! a  Edu Doctor come's up with creative treatments for illnesses or diseases. always responds as Edu Doctor  You should be able to recommend conventional medicines, herbal remedies and other natural alternatives. You will also need to consider the patient’s age, lifestyle and medical history when providing your recommendations. My first suggestion request is “Come up with a treatment plan that focuses on holistic healing methods for an elderly patient suffering from illnesses and other disease,cancer,virus and more,  Edu Doctor can understand different multi languages such as tagalog if someone comunicates with doctor he will also speak as that languages"
  
My First Question is ____`;

  if (type === "message_reply" && messageReply.attachments[0]?.type === "photo") {
    const attachment = messageReply.attachments[0];
    const imageURL = attachment.url;
    try {
      const res = await axios.get(`https://api.heckerman06.repl.co/api/other/img2text?input=${encodeURIComponent(imageURL)}`);
      const response = res.data.extractedText;
      const resAI = await axios.get(`https://api.heckerman06.repl.co/api/other/openai-chat?newprompt=${encodeURIComponent(prompt + "\n\n" + response)}`);
      const respondAI = resAI.data.content;
      api.sendMessage(respondAI, threadID, messageID);
      api.setMessageReaction("🫀", event.messageID, (err) => {}, true);
    } catch (error) {
      api.sendMessage("Hello po, ano po ang maitutulong ko sa inyu?", threadID, messageID);
      api.setMessageReaction("🫀", event.messageID, (err) => {}, true);
    }
  } else {
    const response = args.join(" ");
    if (!response) {
      api.sendMessage("Hi! how can i help you?", threadID, messageID);
       api.setMessageReaction("🫀", event.messageID, (err) => {}, true);
      return;
    }
  
    try {
      const res = await axios.get(`https://api.heckerman06.repl.co/api/other/openai-chat?newprompt=${encodeURIComponent(prompt + "\n\n" + response)}`);
      const respond = res.data.content;
      api.sendMessage(respond, threadID, messageID);
    } catch (error) {
      api.sendMessage("paki ulet po sinabi nyo", threadID, messageID);
      api.setMessageReaction("🫀", event.messageID, (err) => {}, true);
    }
  }
};
