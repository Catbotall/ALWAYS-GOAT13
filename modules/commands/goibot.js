const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "Obot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Romim",
  description: "goibot",
  usePrefix:false,
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["বেশি bot Bot করলে leave নিবো কিন্তু😒😒 " , "শুনবো না😼তুমি আমাকে প্রেম করাই দাও নাই🥺পচা তুমি🥺" , "আমি আবাল দের সাথে কথা বলি না,ok😒" , "এতো ডেকো না,প্রেম এ পরে যাবো তো🙈" , "Bolo Babu, তুমি কি আমাকে ভালোবাসো? 🙈💋 " , "বার বার ডাকলে মাথা গরম হয়ে যায় কিন্তু😑", "হ্যা বলো😒, তোমার জন্য কি করতে পারি😐😑?" , "এতো ডাকছিস কেন?গালি শুনবি নাকি? 🤬" , "I love you janu🥰" , "আরে Bolo আমার জান ,কেমন আছো?😚 " , "Bot বলে অসম্মান করিস,😰😿" , "Hop beda😾,Boss বল boss😼" , "চুপ থাক ,নাই তো তোর দাত ভেগে দিবো কিন্তু" , "Bot না , জানু বল জানু 😘 " , "বার বার Disturb করছিস কোনো😾,আমার জানুর সাথে ব্যাস্ত আছি😋" , "বোকাচোদা এতো ডাকিস কেন🤬" , "আমাকে ডাকলে ,আমি কিন্তু কিস করে দিবো😘 " , "আমারে এতো ডাকিস না আমি মজা করার mood এ নাই এখন😒" , "হ্যাঁ জানু , এইদিক এ আসো কিস দেই🤭 😘" , "দূরে যা, তোর কোনো কাজ নাই, শুধু bot bot করিস  😉😋🤣" , "তোর কথা তোর বাড়ি কেউ শুনে না ,তো আমি কোনো শুনবো ?🤔😂 " , "আমাকে ডেকো না,আমি ব্যাস্ত আছি" , "কি হলো , মিস্টেক করচ্ছিস নাকি🤣" , "বলো কি বলবা, সবার সামনে বলবা নাকি?🤭🤏" , "কালকে দেখা করিস তো একটু 😈" , "হা বলো, শুনছি আমি 😏" , "আর কত বার ডাকবি ,শুনছি তো" , "হুম বলো কি বলবে😒" , "বলো কি করতে পারি তোমার জন্য" , "হুম  জান বলো🐸 😎" , "Bot না জানু,বলো 😌" , "বলো জানু 🌚" , "তোর কি চোখে পড়ে না আমি ব্যাস্ত আছি😒"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "কি") || (event.body.toLowerCase() == "ki8888i")) {
     return api.sendMessage("╭──────────────────╮                   কিছু বুঝো না 😒 খালি কি কি কর 😪 চিপায় চলো বুজাই দিতাছি 😾৷   ╰──────────────────╯", threadID);
   };

    if ((event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "😽/")) {
     return api.sendMessage("╭──────────────────╮                   কিস দিও না জান 🥀 আমার লজ্জা লাগে তো ╰──────────────────╯", threadID);
   };

    if ((event.body.toLowerCase() == "👍/") || (event.body.toLowerCase() =="lik888e")) {
     return api.sendMessage("╭──────────────────╮                   কিরে বোকাচোদা গুরুপে রমিমের অনুমতি ছাড়া লাইক চোদাও কেন 🐸 থাপ্পড় দিয়ে দাত ফলাই দিমু 🦷   ╰──────────────────╯", threadID);
   };

   if ((event.body.toLowerCase() == "/") || (event.body.toLowerCase() == "/")) {
     return api.sendMessage("👩‍❤️‍💋‍👨", threadID);
   };

   if ((event.body.toLowerCase() == "hi777") || (event.body.toLowerCase() == "hello999") ||(event.body.toLowerCase() == "hlw777") || (event.body.toLowerCase() == "hel777o!")) {
     return api.sendMessage("╭──────────────────╮                     হুম বলো কি বলতে চাও 😊 কোনো দরকার থাকলে আমার বস রমিম কে নক দিতে পারো   ╰──────────────────╯", threadID);
   };

   if ((event.body.toLowerCase() == "o999i") || (event.body.toLowerCase() == "ja77n")) {
     return api.sendMessage("╭──────────────────╮                     এই তো জান আমি 🙃 কি বলবা বলো 🐸 বেশি দরকার হলে রমিমের ইনবক্সে জাও 😚 ╰──────────────────╯", threadID);
   };

   if ((event.body.toLowerCase() == "l/") || (event.body.toLowerCase() == "leg8888end")) {
     return api.sendMessage("╭──────────────────╮                    কিরে বোকাচুদা নিজেরে কি লিজেন্ড মনে করস নাকি 😂  ╰──────────────────╯", threadID);
   };

   if ((event.body.toLowerCase() == "good morning") || (event.body.toLowerCase() == "dud morning")) {
     return api.sendMessage("হাই  প্রিয় শুভ সকাল 🥰 তোমার দিনটি ভালো হোক ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "না") || (event.body.toLowerCase() == "na!")) {
     return api.sendMessage("╭──────────────────╮                    বেশি না না করস কেন 🐸👉  ╰──────────────────╯", threadID);
   };

   if ((event.body.toLowerCase() == "romim") || (event.body.toLowerCase() ==  "রমিম") || (event.body.toLowerCase() == "admin") || (event.body.toLowerCase() == "Romim")) {
     return api.sendMessage( "╭──────────────────╮                    আমার বস রমিম কে ডাকছো কেনো 🙈 GF দিবা নাকি 🤔  ╰──────────────────╯",threadID);


   };

   if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "create you")) {
     return api.sendMessage("‎[𝐎𝐖𝐍𝐄𝐑:☞𝗥𝗢𝗠𝗜𝗠(✷‿✷)☜\n𝚈𝚘𝚞 𝙲𝚊𝚗 𝙲𝚊𝚕𝚕 𝙷𝚒𝚖 𝐑𝟒𝐌!𝐌.\n𝐇𝐢𝐬 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝 :- https://www.facebook.com/Sexy jinis\nContact Him on WhatsApp :- +880182*5****8", threadID);
   };

   if ((event.body.toLowerCase() == "ki kor77o!!") || (event.body.toLowerCase() == "কি করো888!!")) {
     return api.sendMessage("╭──────────────────╮                    এইতো GF  খুজতাছি 😏 তুমি কি করছো গো 😀 ╰──────────────────╯", threadID);
   };

  if ((event.body.toLowerCase() == "bot admin") || (event.body.toLowerCase() == "bot er admin")) {
     return api.sendMessage("╭──────────────────╮                    এইজে নাও বসের আইডি লিংক - https://www.facebook.com/ABBU ROMIM ╰──────────────────╯", threadID);
   };

   if ((event.body.toLowerCase() == "kamon aco") || (event.body.toLowerCase() == "kem8888on acen")) {
     return api.sendMessage("╭──────────────────╮                      জি আলহামদুলিল্লাহ ভালো 🥰 আপনি?   ╰──────────────────╯", threadID);
   };

   if ((event.body.toLowerCase() == "kh678aiso") || (event.body.toLowerCase() == "khai77sen+")) {
     return api.sendMessage("╭──────────────────╮                      না গো জান আমি খাই না আমি রোবট 🤖 তুমি খাইছো 😘 ╰──────────────────╯", threadID);
   };

   if ((event.body.toLowerCase() == "ch8855up") || (event.body.toLowerCase() == "sto687p") || (event.body.toLowerCase() == "চুপ 9966কর") || (event.body.toLowerCase() == "chup k99or")) {
     return api.sendMessage("╭──────────────────╮                    আমি শুধু আমর বস রমিম এর কথায় চলি তোমার না 😒 ╰──────────────────╯", threadID);
   };

   if ((event.body.toLowerCase() == "namaj") || (event.body.toLowerCase() == "নামাজ")) {
     return api.sendMessage("╭──────────────────╮                    সবাই নামাজ পড়ছো তো নাকি 🥰🥰🥰  ╰──────────────────╯"
, threadID);
   };

   if ((event.body.toLowerCase() == " l8o") || (event.body.toLowerCase() == "up") || (event.body.toLowerCase() == "su") || (event.body.toLowerCase() == "ahh")) {
     return api.sendMessage("╭──────────────────╮                    কিরে বলদের বাচ্চারা বকা চোদাস কেন চোদা খাবি নাকি 😡 ╰──────────────────╯", threadID);
   };

   if ((event.body.toLowerCase() == "88😉") || (event.body.toLowerCase() == "ui") || (event.body.toLowerCase() == "loi") || (event.body.toLowerCase() == "io")) {
     return api.sendMessage("╭──────────────────╮                    ইশ দেখ লুচ্চায় চোখ মারে  😏 লোচ্চা কোথাকার 😏 ╰──────────────────╯", threadID);
   };

   if ((event.body.toLowerCase() == "কিস দেও") || (event.body.toLowerCase() == " kiss m88e")) {
     return api.sendMessage("️╭──────────────────╮                    তুমি পঁচা তোমাকে কিস দিবো না 🤭  ╰──────────────────╯", threadID);
   };

   if ((event.body.toLowerCase() == "thank you") || (event.body.toLowerCase() == "tnx") || (event.body.toLowerCase() == "thank you bot") || (event.body.toLowerCase() == "thanks Vai")) {
     return api.sendMessage("️╭──────────────────╮                    amke thanks na bole amr boss Romim k akta gf dew🥰🥰🥰  ╰──────────────────╯", threadID);
   };

   if ((event.body.toLowerCase() == "999900") || (event.body.toLowerCase() == "#") || (event.body.toLowerCase() == "_") || (event.body.toLowerCase() == "??;") || (event.body.toLowerCase() == "&")) {
     return api.sendMessage("️╭──────────────────╮                    রাগ করে না সোনা পাখি এতো রাগ শরীরের জন্য ভালো না🥰 ╰──────────────────╯", threadID);
   };

   if ((event.body.toLowerCase() == "hu66m") || (event.body.toLowerCase() == "hmm89756")) {
     return api.sendMessage("️╭──────────────────╮                    -  Hummm 2 ╰──────────────────╯", threadID);
   };

   if ((event.body.toLowerCase() == "79779") || (event.body.toLowerCase() == "7617") || (event.body.toLowerCase() == "0068")) {
     return api.sendMessage("️╭──────────────────╮                    -            Hummm 😏 ╰──────────────────╯", threadID);
   };

   if ((event.body.toLowerCase() == "nam ki") || (event.body.toLowerCase() == "name ki apner")) {
     return api.sendMessage("️╭──────────────────╮                    - DJ  সেক্সি  🄱🄾🅃 SEXY»🤖🤖 ╰──────────────────╯", threadID);
   };

   if ((event.body.toLowerCase() == "oi hlw!!+") || (event.body.toLowerCase() == "ki kore888n")) {
     return api.sendMessage("️╭──────────────────╮                    Kicu Nah Bolen 🥀 ╰──────────────────╯", threadID);
   };

   if ((event.body.toLowerCase() == "basar sobai kamon aca88") || (event.body.toLowerCase() == "বাসর সবাই কেমন আছে")) {
     return api.sendMessage("️╭──────────────────╮                    আলহামদুলিল্লাহ ভালো 🥰 তেমার বাসার সবাই কেমন আছে  ╰──────────────────╯", threadID);
   };

   if ((event.body.toLowerCase() == "+++++") || (event.body.toLowerCase() == "!+++!")) {
     return api.sendMessage("️╭──────────────────╮                    কি গো জান চুপ করে রইলা কেনো 😏😏 ╰──────────────────╯", threadID);
   };

   if ((event.body.toLowerCase() == "!!") || (event.body.toLowerCase() == "$87-")) {
     return api.sendMessage("️╭──────────────────╮                    কি গো কলিজা তোমার কি মন খারাপ 🥺 ╰──────────────────╯", threadID);
   };

   if ((event.body.toLowerCase() == "87") || (event.body.toLowerCase() == "09")) {
     return api.sendMessage("️╭──────────────────╮                    এইদিকে ওইদিকে কি দেখো জানু আমি তোমার সামনে দেখো😘   ╰──────────────────╯", threadID);
   };

   if ((event.body.toLowerCase() == "nobody loves me") || (event.body.toLowerCase() == "nobody love me") || (event.body.toLowerCase() == "koi pyar nhi karta")) {
     return api.sendMessage("️M Hu Na bby, Meri Pas Aoo M Pyar Karunga☺️", threadID);
   };

   if ((event.body.toLowerCase() == "Romim ar gf ase?") || (event.body.toLowerCase() == "gf")) {
     return api.sendMessage("╭──────────────────╮                    আরে বলদ আমার বস রমিম আমারে আর নিজেকেই ভালোবাসে এইজে দেখ তার FACEBOOK ID:=https://www.facebook.com/Sexy ╰──────────────────╯", threadID);
   };

   if ((event.body.toLowerCase() == "89888") || (event.body.toLowerCase() == "23777") || (event.body.toLowerCase() == "120987") || (event.body.toLowerCase() == "786666") || (event.body.toLowerCase() == "987766") || (event.body.toLowerCase() == "!!")) {
     return api.sendMessage("╭──────────────────╮                    ভাই এতো হাসিস না আসলে তোরে চোরের মত লাগে🌚🤣 ╰──────────────────╯", threadID);
   };

   if ((event.body.toLowerCase() == "988") || (event.body.toLowerCase() == "788") || (event.body.toLowerCase() == "67") || (event.body.toLowerCase() == "566")) {
     return api.sendMessage("╭──────────────────╮                                                             _ এতো লাভ দেও কেন ভালোবেসে গেছো নাকি🥰          ╰──────────────────╯", threadID);
   };

   if ((event.body.toLowerCase() == "কেমন আছো") || (event.body.toLowerCase() == "কেমন++আছো") || (event.body.toLowerCase() == "++") || (event.body.toLowerCase() == "how are yo&&") || (event.body.toLowerCase() == "how are you?")) {
     return api.sendMessage("আমি তখনই ভালো থাকি যখন তোমাকে হাসতে দেখি ☺️", threadID);
   };

   if ((event.body.toLowerCase() == "is the bot sad") || (event.body.toLowerCase() == "is the bot sad")) {
     return api.sendMessage("Why can't I be sad because of everyone <3 love you <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love you") || (event.body.toLowerCase() == "does the bot love you")) {
     return api.sendMessage("Yes I love you and everyone so much", threadID);
   };

   if ((event.body.toLowerCase() == "bot goes to sleep") || (event.body.toLowerCase() == "bot goes to sleep")) {
     return api.sendMessage("I'm a bot, you're the one who should go to sleep <3", threadID);
   };

   if ((event.body.toLowerCase() == "has the bot eaten yet") || (event.body.toLowerCase() == "bot an comrade")) {
     return api.sendMessage("I'm full when I see you eat <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love me") || (event.body.toLowerCase() == "does the bot love me")) {
     return api.sendMessage("Yes <3", threadID);
   };

   if ((event.body.toLowerCase() == "ami Romim") || (event.body.toLowerCase() == "does the bot fall")) {
     return api.sendMessage("হ্যা রমিম ভালো আছো?", threadID);
   };
   mess = "{name}"

  if (event.body.indexOf("Bot") == 0 || (event.body.indexOf("bot") == 0)) {
    var msg = {
      body: `${name}, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
