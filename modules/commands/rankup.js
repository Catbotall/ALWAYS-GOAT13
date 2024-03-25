const path = require('path');
const fs = require('fs');
const cacheDir = path.join(__dirname, 'cache');
if (fs.existsSync(__dirname + '/modules/commands/cache/rankup/rankup.png')) {
  //fs.unlinkSync('/home/runner/BotPack/modules/commands/cache/rankup/rankup.png');
}

if (fs.existsSync(__dirname + '/modules/commands/cache/Avtmot.png')) {
  //fs.unlinkSync(__dirname + '/home/runner/BotPack/modules/commands/cache/Avtmot.png');
}

if (!fs.existsSync(cacheDir)) {
  fs.mkdirSync(cacheDir);
}

module.exports.config = {
  name: "rankup",
  version: "7.3.1",
  hasPermssion: 1,
  credits: "John Lester",
  description: "Announce rankup for each group, user",
  usePrefix: true,
  commandCategory: "Edit-IMG",
  dependencies: {
    "fs-extra": ""
  },
  cooldowns: 2,
};

module.exports.handleEvent = async function({
  api, event, Currencies, Users, getText }) {
  var { threadID, senderID } = event;
  const { loadImage, createCanvas } = require("canvas");
  const fs = global.nodemodule["fs-extra"];
  const axios = global.nodemodule["axios"];
  let pathImg = __dirname + "/cache/rankup/rankup.jpg";
  let pathAvt1 = __dirname + "/cache/Avtmot.jpg";
  var id1 = event.senderID;


  threadID = String(threadID);
  senderID = String(senderID);

  const thread = global.data.threadData.get(threadID) || {};

  let exp = (await Currencies.getData(senderID))
    .exp;
  exp = exp += 1;

  if (isNaN(exp)) return;

  if (typeof thread["rankup"] != "undefined" && thread["rankup"] == false) {
    await Currencies.setData(senderID, {
      exp
    });
    return;
  };

  const curLevel = Math.floor((Math.sqrt(1 + (4 * exp / 3) + 1) / 2));
  const level = Math.floor((Math.sqrt(1 + (4 * (exp + 1) / 3) + 1) / 2));

  if (level > curLevel && level != 1) {
    const name = global.data.userName.get(senderID) || await Users.getNameUser(senderID);
    var messsage = (typeof thread.customRankup == "undefined") ? msg = getText("levelup") : msg = thread.customRankup
      , arrayContent;

    messsage = messsage
      .replace(/\{name}/g, name)
      .replace(/\{level}/g, level);

    const moduleName = this.config.name;

    var background = [
      "https://i.imgur.com/SvRlEMJ.jpeg",
      "https://i.imgur.com/SvRlEMJ.jpeg",
      "https://i.imgur.com/SvRlEMJ.jpeg",
      "https://i.imgur.com/SvRlEMJ.jpeg",
      "https://i.imgur.com/SvRlEMJ.jpeg",
      "https://i.imgur.com/SvRlEMJ.jpeg",
      "https://i.imgur.com/SvRlEMJ.jpeg",
      "https://i.imgur.com/SvRlEMJ.jpeg",
      "https://i.imgur.com/SvRlEMJ.jpeg",
      "https://i.imgur.com/SvRlEMJ.jpeg",
      "https://i.imgur.com/SvRlEMJ.jpeg",
      "https://i.imgur.com/SvRlEMJ.jpeg"
    ];
    var rd = background[Math.floor(Math.random() * background.length)];
    let getAvtmot = (
      await axios.get(
        `https://graph.facebook.com/${id1}/picture?width=720&height=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, {
        responseType: "arraybuffer"
      }
      )
    )
      .data;
    fs.writeFileSync(pathAvt1, Buffer.from(getAvtmot, "utf-8"));

    let getbackground = (
      await axios.get(`${rd}`, {
        responseType: "arraybuffer"
        ,
      })
    )
      .data;
    fs.writeFileSync(pathImg, Buffer.from(getbackground, "utf-8"));

    let baseImage = await loadImage(pathImg);
    let baseAvt1 = await loadImage(pathAvt1);
    let canvas = createCanvas(baseImage.width, baseImage.height);
    let ctx = canvas.getContext("2d");
    ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
    ctx.rotate(-25 * Math.PI / 180);
    ctx.drawImage(baseAvt1, 27.3, 103, 108, 108);
    const imageBuffer = canvas.toBuffer();
    fs.writeFileSync(pathImg, imageBuffer);
    fs.removeSync(pathAvt1);
    api.sendMessage({
      body: messsage
      , mentions: [{
        tag: name
        , id: senderID
      }]
      , attachment: fs.createReadStream(pathImg)
    }, event.threadID, () => fs.unlinkSync(pathImg));

  }

  await Currencies.setData(senderID, {
    exp
  });
  return;
}

module.exports.languages = {
  "en": {
    "on": "on",
    "off": "off",
    "successText": "success notification rankup!",
    "levelup": "{name}, You just leveled up to level {level}",
  }
}

module.exports.run = async function({ api, event, Threads, getText }) {
  const {
    threadID
    , messageID
  } = event;
  let data = (await Threads.getData(threadID))
    .data;

  if (typeof data["rankup"] == "undefined" || data["rankup"] == false) data["rankup"] = true;
  else data["rankup"] = false;

  await Threads.setData(threadID, {
    data
  });
  global.data.threadData.set(threadID, data);
  return api.sendMessage(`${(data["rankup"] == true) ? getText("on") : getText("off")} ${getText("successText")}`, threadID, messageID);
}