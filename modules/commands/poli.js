module.exports.config =
  { name: "poli", 
version: "1.0.",
hasPermssion: 0,
credits: "jameslim",
description: "generate image from polination",
usePrefix: true, 
commandCategory: "image", 
usages: "query",
cooldowns: 2, };
module.exports.run = async ({api, event, args }) => { const axios = require('axios'); const fs = require('fs-extra'); let { threadID, messageID } = event; let query = args.join(" "); if (!query) return api.sendMessage("put text/query", threadID, messageID); let path = __dirname + `/cache/poli.png`; const poli = (await axios.get(`https://image.pollinations.ai/prompt/${query}`, { responseType: "arraybuffer", })).data; fs.writeFileSync(path, Buffer.from(poli, "utf-8")); api.sendMessage({ body: "𝗛𝗲𝗿𝗲'𝘀 𝘆𝗼𝘂𝗿 𝗶𝗺𝗮𝗴𝗲:", attachment: fs.createReadStream(path) }, threadID, () => fs.unlinkSync(path), messageID); };