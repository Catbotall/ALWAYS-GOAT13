const axios = require('axios');
const request = require('request');
const fs = require("fs");

module.exports.config = {
    name: "football",
    version: "1.0",
    hasPermssion: 0,
    credits: "romim",
    description: "football",
    usePrefix: true,
    commandCategory: "football",
    usages: "",
    cooldowns: 30,
};

exports.run = async function({ api, event }) {
    axios.get("https://11facf4e-a4cc-499d-9a94-2ad819e7b575-00-22bmir745kouq.sisko.replit.dev/football")
        .then(res => {
            let ext = res.data.substring(res.data.lastIndexOf(".") + 1);
            let count = res.data.count;
            let callback = function() {
                api.sendMessage({
                    body: `✅ A P I BY R O M I M`,
                    attachment: fs.createReadStream(`./kanna.${ext}`)
                }, event.threadID, () => fs.unlinkSync(`./data/kanna.${ext}`), event.messageID);
            };
            request(res.data).pipe(fs.createWriteStream(`./kanna.${ext}`)).on("close", callback);
        })
        .catch(err => {
            console.error(err);
        });
};
