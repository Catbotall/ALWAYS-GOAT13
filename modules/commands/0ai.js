module.exports.config = {
    name: "ai",//lagay mo name ng bot mo
    usePrefix: false,
    version: "1.0.0",
    hasPermssion: 0,
    credits: "𝗜𝘀𝗹𝗮𝗺𝗶𝗰𝗸 𝗖𝗵𝗮𝘁 𝗕𝗼𝘁",//palitan mo nalang kung gusto mo :>
    description: "Ask me anything...",
  usePrefix: false,
    commandCategory: "ai",
    usages: "[ask]",
    cooldowns: 2,
};

module.exports.run = async function({
    api,
    event,
    args
}) {
    //fonts
    function muiFont(letters) {
        const change = {
            a: "𝖺",
            b: "𝖻",
            c: "𝖼",
            d: "𝖽",
            e: "𝖾",
            f: "𝖿",
            g: "𝗀",
            h: "𝗁",
            i: "𝗂",
            j: "𝗃",
            k: "𝗄",
            l: "𝗅",
            m: "𝗆",
            n: "𝗇",
            o: "𝗈",
            p: "𝗉",
            q: "𝗊",
            r: "𝗋",
            s: "𝗌",
            t: "𝗍",
            u: "𝗎",
            v: "𝗏",
            w: "𝗐",
            x: "𝗑",
            y: "𝗒",
            z: "𝗓",
            A: "𝖠",
            B: "𝖡",
            C: "𝖢",
            D: "𝖣",
            E: "𝖤",
            F: "𝖥",
            G: "𝖦",
            H: "𝖧",
            I: "𝖨",
            J: "𝖩",
            K: "𝖪",
            L: "𝖫",
            M: "𝖬",
            N: "𝖭",
            O: "𝖮",
            P: "𝖯",
            Q: "𝖰",
            R: "𝖱",
            S: "𝖲",
            T: "𝖳",
            U: "𝖴",
            V: "𝖵",
            W: "𝖶",
            X: "𝖷",
            Y: "𝖸",
            Z: "𝖹"
        };
        let formattedFont = "";
        for (let i = 0; i < letters.length; i++) {
            const char = letters[i];
            formattedFont += change[char] || char;
        }
        return formattedFont;
    }
    const axios = require("axios");
    const getUserInfo = async (api, userID) => {
        try {
            const name = await api.getUserInfo(userID);
            return name[userID].firstName;
        } catch (error) {
            console.error(`Error: ${error}`);
            return "";
        }
    };
    let {
        messageID,
        threadID,
        senderID
    } = event;
    const ask = args.join("");
    if (!args[0]) {
        const name = await getUserInfo(api, senderID);
        let greetingA = ["Hello", "Hi", "Hey", "Greetings", "Good Day"];
        let emojiA = ["🧑🏻‍🏫", "🧑🏻‍🏫", "🧑🏻‍🏫"];//dagdagan moto
        let respondA = ["How may I help you?", "how can I help?", "I'm NtrEms OFC Project, how can I help you?", "do you need help?"];//dagdagan mo din to
        const muiGreetA = greetingA[Math.floor(Math.random() * greetingA.length)];
        const muiRespondA = respondA[Math.floor(Math.random() * respondA.length)];
        const muiEmojiA = emojiA[Math.floor(Math.random() * emojiA.length)];
        api.sendMessage({
            body: muiFont(`${muiGreetA} ${name}, ${muiRespondA} ${muiEmojiA}`),
            mentions: [{
                tag: name,
                id: senderID
            }]
        }, threadID, messageID);
        return;
    };
    let greetingB = ["Hey", "Hello", "Hi", "Good Day", "Heyy"];//ito dagdagan mo din
    let emojiB = ["🧑🏻‍🏫", "🧑🏻‍🏫", "🧑🏻‍🏫", "🧑🏻‍🏫"];//pati ito dagdagan mo nalang din
    const respondB = await axios.get(`https://livelywarlikeshoutcast.orsanelosorio.repl.co/bard/${ask}`);//big credits kay Manjiro Sano, sa kanya tong api :>
    const muiRespondB = respondB.data.content;
    const muiGreetB = greetingB[Math.floor(Math.random() * greetingB.length)];
    const muiEmojiB = emojiB[Math.floor(Math.random() * emojiB.length)];
    try {
        const name = await getUserInfo(api, senderID);
        api.sendMessage({
            body: muiFont(`${muiGreetB} ${name},\n${muiRespondB} ${muiEmojiB}`),
            mentions: [{
                tag: name,
                id: senderID
            }]
        }, threadID, messageID);
    } catch (error) {
        api.sendMessage(muiFont("Error"), threadID, messageID);
    }
};