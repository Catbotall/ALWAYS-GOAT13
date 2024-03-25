const axios = require('axios');

module.exports.config = {
    name: "randomfact",
    version: "1.0",
    hasPermission: 0,
    credits: "Ronald Allen Albania",
    usePrefix: true,
    description: "Get a random fact.",
    commandCategory: "fun",
    cooldowns: 5
};

module.exports.run = async function({ api, event }) {
    try {
        const response = await axios.get("https://uselessfacts.jsph.pl/random.json");
        const fact = response.data.text;
        api.sendMessage(`📚 Random Fact: ${fact}`, event.threadID);
    } catch (error) {
        console.error(error);
        api.sendMessage("Sorry, I couldn't fetch a random fact at the moment. Please try again later.", event.threadID);
    }
};