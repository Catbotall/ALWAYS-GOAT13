module.exports.config = {
    name: "kim",
    version: "1.1.0",
    hasPermssion: 0,
    credits: "Marjhun",//modified by NtrEms
    description: "GPTGO by KENLIEPLAYS",
    commandCategory: "ai",
    usages: "[ask]",
    usePrefix: false,
    cooldowns: 2,
};

module.exports.run = async function({ api, event, args }) {
    const axios = require("axios");
    let { messageID, threadID, senderID, body } = event;
    let tid = threadID,
    mid = messageID;
    const content = encodeURIComponent(args.join(" "));
    if (!args[0]) return api.sendMessage("please type a question on kim ai...", tid, mid);
     try {
            api.setMessageReaction("🔍", event.messageID, (err) => {}, true);
            api.sendMessage("Kim ai is Searching for an answer, Please wait...", threadID, messageID);
        const res = await axios.get(`https://api.kenliejugarap.com/gptgo/?text=${content}`);
        const respond = res.data.response;
        if (res.data.error) {
            api.sendMessage(`Error: ${res.data.error}`, tid, (error, info) => {
                if (error) {
                    console.error(error);
                }
            }, mid);
        } else {
          api.setMessageReaction("✅", event.messageID, (err) => {}, true);
            api.sendMessage('🖇Answer : ' + respond, tid, (error, info) => {
                if (error) {
                    console.error(error);
                }
            }, mid);
        }
    } catch (error) {
        console.error(error);
        api.sendMessage("An error occurred while fetching the data.", tid, mid);
    }
};