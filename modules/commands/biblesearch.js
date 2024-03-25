module.exports.config = {
    name: "biblesearch",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Prince Sanel",
    description: "Search for bible verse.",
    usePrefix: true,
    commandCategory: "random",
    usages: "[John 3:16]",
    cooldowns: 2,
};
module.exports.run = async function({ api, event, args }) {
const axios = require("axios");
let { messageID, threadID, senderID, body } = event;
const responce = args.join(" ");
if (!args[0]) return api.sendMessage("Wrong Format.. \n"+global.config.PREFIX+this.config.name+" "+this.config.usages, threadID, messageID);
try {
api.sendMessage("Searching for "+responce, threadID, messageID);
const res = await axios.get(`https://bible-api.com/${responce}?translation=kjv`);
var bible = res.data.reference;
var bible2 = res.data.text;
var bible3 = res.data.error;
api.sendMessage("Verse: "+bible+"\n\n"+bible2, threadID , messageID);
} catch (error) {
api.sendMessage("An error occurred while making the API request.", threadID , messageID);
}
};