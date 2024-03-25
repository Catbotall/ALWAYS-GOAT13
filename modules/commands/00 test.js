module.exports.config = {
  name: "album6",
  version: "1.0.3",
  hasPermssion: 0,
  credits: "Romim Ahmed",
  description: "Random video",
  usePrefix:false,
  commandCategory: "short video",
  cooldowns: 5,
  dependencies: {
    axios: ""
  }
}, module.exports.run = async function({
  event: e,
  api: a,
  args: n
}) {
  if (!n[0]) return a.sendMessage("«--------------»\n\n☢««««««««««💛𝙰𝙻𝙱𝚄𝙼 𝚅𝙸𝙳𝙴𝙾💛»»»»»»»»»»☢ 1- ꧁⁣༒𓆩𝙸𝚂𝙻𝙰𝙼𝙸𝙲 𝚅𝙸𝙳𝙴𝙾👳\n\n2-꧁⁣༒𓆩𝙻𝙾𝚅𝙴 𝚅𝙸𝙳𝙴𝙾 \n━━━━━━━━━━━━━━━━━━━━━\n\nA P I ROMIM\n╰──────••──────╯\n\nTell me how many video numbers you want to see by replaying this message", e.threadID, ((a, n) => {
    global.client.handleReply.push({
      name: this.config.name,
      messageID: n.messageID,
      author: e.senderID,
      type: "create"
    })
  }), e.messageID)
  }, module.exports.handleReply = async ({
  api: e,
  event: a,
  client: n,
  handleReply: t,
  Currencies: s,
  Users: i,
  Threads: o
  }) => {
  var { p, h } = linkanh();

  if ("create" === t.type) {
    const n = (await p.get(h)).data.data;
    const Romim = (await p.get(h)).data.Romim;
    let t = (await p.get(n, {
      responseType: "stream"
    })).data;
    return e.sendMessage({
      body: `🟡${Romim}//A P I  R O M I M📛`,
      attachment: t
    }, a.threadID, a.messageID)
  }

  function linkanh() {
        const p = require("axios");
        if ("1" == a.body)
            var h = "https://shaon-all-api-07mo.onrender.com/video/islam";
        else if ("2" == a.body)
         var   h = "https://shaon-all-api-07mo.onrender.com/video/anime";
        else if ("3" == a.body)
         var   h = "https://shaon-all-api-07mo.onrender.com/video/shairi";
        else if ("4" == a.body)
          var  h = "https://shaon-all-api-07mo.onrender.com/video/short";
        else if ("5" == a.body)
          var  h = "https://shaon-all-api-07mo.onrender.com/video/sad";
        else if ("6" == a.body)
          var  h = "https://shaon-all-api-07mo.onrender.com/video/status";
        else if ("7" == a.body)
          var  h = "https://shaon-all-api-07mo.onrender.com/video/football";
        else if ("8" == a.body)
          var  h = "https://shaon-all-api-07mo.onrender.com/video/funny";
        else if ("9" == a.body)
         var   h = "https://shaon-all-api-07mo.onrender.com/video/love";
        else if ("10" == a.body)
         var  h = "https://shaon-all-api-07mo.onrender.com/video/cpl";
          else if ("11" == a.body)
           var  h = "https://shaon-all-api-07mo.onrender.com/video/baby";
          else if ("12" == a.body)
          var  h = "https://shaon-all-api-07mo.onrender.com/video/kosto";
         else if ("13" == a.body)
         var  h = "https://shaon-all-api-07mo.onrender.com/video/lofi";
         else if ("14" == a.body)
         var  h = "https://shaon-all-api-07mo.onrender.com/video/happy";
         else if ("15" == a.body)
         var  h = "https://shaon-all-api-07mo.onrender.com/video/humaiyun";
           else if ("000" == a.body)
         var  h =
"https:0//shaon-all-api-07mo.onrender.com/video/sex";
    else if ("6866" == a.body)
         var  h =
"https://shaon-all-api-07mo.onrender.com/video/horny";
    else if ("5864" == a.body)
         var  h =
"https:0//shaon-all-api-07mo.onrender.com/video/item";
    else if ("16" == a.body)
         var  h =
"https://shaon-all-api-07mo.onrender.com/video/hot";
    else if ("17" == a.body)
         var  h =
"https://shaon-all-api-07mo.onrender.com/video/capcut";
        return { p, h };
    }
};
