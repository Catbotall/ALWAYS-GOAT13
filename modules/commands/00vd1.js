module.exports.config = {
	name: "football",
	version: "1.0",
	hasPermssion: 0,
	credits: " romim",
	description: "football",
  usePrefix:true,
	commandCategory: "football",
	usages: "",
	cooldowns: 30,
};
 
module.exports.run = async function({ api, event }) {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  var red = ["https://11facf4e-a4cc-499d-9a94-2ad819e7b575-00-22bmir745kouq.sisko.replit.dev/football"]
  axios.get(red).then(res => {
  let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
  let count = res.data.count;
  let callback = function () {
          api.sendMessage({
            body: `ROMIM`,
            attachment: fs.createReadStream(__dirname + `/data/kanna.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/data/kanna.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/data/kanna.${ext}`)).on("close", callback);
      })
}