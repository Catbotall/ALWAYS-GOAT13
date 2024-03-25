const fs = require("fs");

module.exports.config = {
  name: "maintain",
  version: "1.0.0",
  hasPermission: 2,
  credits: "Blue",
  description: "Toggle maintenance mode",
  usePrefix: false,
  commandCategory: "no prefix",
  usage: "#maintain on/off",
  cooldowns: 3,
};

module.exports.handleEvent = async function ({ api, event }) {
  const { threadID, messageID, body } = event;
  const command = body.toLowerCase().split(" ")[0];

  if (command === "#maintain") {
    const status = body.toLowerCase().split(" ")[1];

    if (status === "on") {
      setMaintenance(true, api, threadID, messageID);
    } else if (status === "off") {
      setMaintenance(false, api, threadID, messageID);
    }
  }
};

function setMaintenance(value, api, threadID, messageID) {
  const path = "./config.json";

  try {
    const configData = JSON.parse(fs.readFileSync(path, "utf8"));
    configData.adminOnly = value;
    fs.writeFileSync(path, JSON.stringify(configData, null, 2));

    const responseMessage = value
      ? "🚦𝗠𝗔𝗜𝗡𝗧𝗔𝗜𝗡𝗔𝗡𝗖𝗘🚦\n━━━━━━━━━━━━━━━\nIS TRUE ONLY YOU CAN USE THE BOT"
      : "🚦𝗠𝗔𝗜𝗡𝗧𝗔𝗜𝗡𝗔𝗡𝗖𝗘🚦\n━━━━━━━━━━━━━━━\nIS FALSE ONLY YOU CAN USE THE BOT";

    api.sendMessage(responseMessage, threadID, messageID);
  } catch (error) {
    console.error("Error updating maintenance mode:", error);
    api.sendMessage("Error updating maintenance mode.", threadID, messageID);
  }
}

module.exports.run = async function ({ api, event }) {};