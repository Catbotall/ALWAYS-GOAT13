module.exports.config = {
  name: "pola",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "Romim",
  description: "5 বারের জন্য ক্রমাগত বন্ধুর ট্যাগ ট্যাগ করুন\nসেই ব্যক্তিকে আত্মা কলিং বলা যেতে পারে",
  usePrefix: true,
  commandCategory: "nsfw",
  usages: " please @mention",
  cooldowns: 10,
  dependencies: {
      "fs-extra": "",
      "axios": ""
  }
}

module.exports.run = async function({ api, args, Users, event}) {
  var mention = Object.keys(event.mentions)[0];
  if(!mention) return api.sendMessage("মাগির পোলা রে @মেনশন দেন আমি ওর মার বোদা ফাইরা লামু😾", event.threadID);
let name =  event.mentions[mention];
  var arraytag = [];
      arraytag.push({id: mention, tag: name});
  var a = function (a) { api.sendMessage(a, event.threadID); }
a("খানকির পোলা তোর মারে বাসর রাতে চোদে আশা আমি তোর আব্বু রমিম এর চোদালো 😼");
setTimeout(() => {a({body: "খাংকির পোলা তর মারে চুইদা তোর মার বোদা তে আমার মাল ফালাবো তোর বাপ আমি রমিম 🥰।" + " " + name, mentions: arraytag})}, 3000);
setTimeout(() => {a({body: "ওওও বান্দি র পোলা মাগির ছাওয়াল  তোর বাপ আমি রমিম 😍.." + " " + name, mentions: arraytag})}, 5000);
setTimeout(() => {a({body: "মাদারচোদ তর আম্মু পম পম খায় তোর বাপ রমিম🐰" + " " + name, mentions: arraytag})}, 7000);
setTimeout(() => {a({body: "এখন ছন্দের তালে তালে তোর মারে চুদবো আাজকে খালে বিলে আমি তোর বাপ রমিম💔!" + " " + name, mentions: arraytag})}, 9000);
setTimeout(() => {a({body: "এই বস্তির পোলা তুই নাকি দেশ রমিম  রে গালি তোর মারে চো** আমার ভাই আলী" + " আমি রমিম।" + name, mentions: arraytag})}, 12000);
setTimeout(() => {a({body: "depression থেকেও তোর মার বোদা চুইদা কালা কইরা দিছি তোর রমিম বাপ! 🤬 " + " আমি রমিম তোর বাপ🎯" + name, mentions: arraytag})}, 15000);
setTimeout(() => {a({body: "সেডা বাঙ্গা খানকির পোলা তোর মায়রে আমি রমিম  চ*** উরাধুর🤬" + " আমি রমিম।" + name, mentions: arraytag})}, 17000);
setTimeout(() => {a({body: "বান্দির পোলা তর কচি বোনের ভুদা ফাক কর থুতু দিয়ে ভুদায় দন ডুকামু 🤟" + "আমি রমিম " + name, mentions: arraytag})}, 20000);
setTimeout(() => {a({body: "এই যে কান্দিস না আমার পোলা তোর মায়েরে চুদমু আমি খোলা খোলা আমি তোর আব্বু রমিম🤝" + " " + name, mentions: arraytag})},23000);
setTimeout(() => {a({body: "উফফফ  মাগির পোলা তোর মার কালা বোদা আমার অনেক পছন্দ💉।" + " " + name, mentions: arraytag})}, 25000);
setTimeout(() => {a({body: "অনলাইনে গালি বাজ হয়ে গেছত মাগির পোলা এমন চুদা দিমু লাইফ টাইম মনে রাখবি আমি রমিম তোর বাপ😘।" + " " + name, mentions: arraytag})}, 28500);
setTimeout(() => {a({body: "ও বান্দি মাগির পোলা তোর মারে চুইদা তোর মার বোদা করমু গোলা...! ✋" + " " + name, mentions: arraytag})},31000);
setTimeout(() => {a({body: " ROMIM তোর আব্বা তোর মার ভোদাতে ঢুকামু দুইটা ডাব্বা " + "" + name, mentions: arraytag})}, 36000);
setTimeout(() => {a("~ চুদা কি আরো খাবি মাগির পোল 🤖")} , 39000);
setTimeout(() => {a({body: "খাংকির পোলা 🥰।" + " " + name, mentions: arraytag})}, 42000);
setTimeout(() => {a({body: "মাগির পোলা 😍.." + " " + name, mentions: arraytag})}, 48000);
setTimeout(() => {a({body: "ব্যাস্যার পোলা 🐰" + " " + name, mentions: arraytag})}, 51000);
setTimeout(() => {a({body: "ব্যাশ্যা মাগির পোলা  💔!" + " " + name, mentions: arraytag})}, 54000);
setTimeout(() => {a({body: "পতিতা মাগির পোলা " + " " + name, mentions: arraytag})}, 57000);
setTimeout(() => {a({body: "depression থেকেও তর মাইরে চুইদা ফাটামু আমি রমিম তোর বাপ!🤬 " + " " + name, mentions: arraytag})}, 59400);
setTimeout(() => {a({body: "তর মারে চুদি" + " " + name, mentions: arraytag})}, 63000);
setTimeout(() => {a({body: "নাট বল্টু মাগির পোলা🤟" + " " + name, mentions: arraytag})}, 66000);
setTimeout(() => {a({body: "ওই খানকির পোলা তোর মার বোদা কালা" + " " + name, mentions: arraytag})},69000);
setTimeout(() => {a({body: "এই আওড়া মাগির জাউড়া পোলা    তোর মারে চুদলে দিবি না তো গুনাহ 🙃" + " " + name, mentions: arraytag})}, 72000);
setTimeout(() => {a({body: "টুইংকেল টুইংকেল লিটল স্টার তোর মারে চুদমু DOG STYLE 😼🎯" + " " + name, mentions: arraytag})}, 75000);
setTimeout(() => {a({body: "কামলা মাগির পোলা  ✋" + " " + name, mentions: arraytag})},81000);
setTimeout(() => {a({body: " বাস্ট্রাড এর বাচ্ছা বস্তির পোলা " + " " + name, mentions: arraytag})}, 87000);
setTimeout(() => {a("~রমিম এর জারজ শন্তান🤖")} , 93000);
setTimeout(() => {a({body: "Welcome রমিম এর পোলা I Mean আমার ভাতিজা 🥰।" + " " + name, mentions: arraytag})}, 99000);
setTimeout(() => {a({body: "তর কচি বোন এর পম পম গোলা উফ😍.." + " " + name, mentions: arraytag})}, 105000);
setTimeout(() => {a({body: "ওহে আমার পোলা তুই টেনশন নিস না তোর মায়রে চুইদা তোর মার বোদা করমু ফালা ফালা🩲👙 তোর বাপ রমিম" + " ।" + name, mentions: arraytag})}, 111000);
setTimeout(() => {a({body: "কুত্তা মাগির পোলা তোর মার বোদা কিন্তু গুলা💔!" + " " + name, mentions: arraytag})}, 114000);
setTimeout(() => {a({body: "২০ টাকা দিয়ে তোর মারে সারা রাত চ**** " + " " + name, mentions: arraytag})}, 120000);
setTimeout(() => {a({body: "এই যে কান্দিস না আমার পোলা তোর মায়েরে চুদমু আমি খোলা খোলা 🤬 " + " " + name, mentions: arraytag})}, 126000);
setTimeout(() => {a({body: "উ লা লা লা লা লা তোর মারে চুইদা, তোর মার বোদা করমু ফালা ফালা ফালা" + " " + name, mentions: arraytag})}, 132000);
setTimeout(() => {a({body: "ওহে আমার পোলা একটু শান্তিতে তোর মারে চ**** দে" + " " + name, mentions: arraytag})}, 138000);
setTimeout(() => {a({body: "তোর মার উল্টা  কইরা তোর মার ভোদাতে উম্মাহ দিব🤣" + " " + name, mentions: arraytag})},144000);
setTimeout(() => {a({body: "তোর মার ভোদাতে ছিঁড়া জুতা দিয়া বাইরামু "+ "" + name, mentions: arraytag})}, 150000);
setTimeout(() => {a({body: "তোর মার ভুদার হাড্ডি থাপ্পড় দিয়া পাঠাইলাম😛" + " " + name, mentions: arraytag})}, 156000);
setTimeout(() => {a({body: "হিজলা মাগির পোলা  ✋" + " " + name, mentions: arraytag})},162000);
setTimeout(() => {a({body: "তুই নাকি হইছস গালি বাজ তোর মার ভুদায় দিবো রাজার তাজ ♔ " + " " + name, mentions: arraytag})}, 168000);
setTimeout(() => {a("~ গাব গাছে গাব তরমারে চুদমু আমি ঠাপা ঠাপ🤖")} , 171000);
setTimeout(() => {a({body: "Welcome শুয়োরের বাচ্চা 🥰।" + " " + name, mentions: arraytag})}, 174000);
setTimeout(() => {a({body: "৩-৩-৬ তোর মারে তচুদামি করমু তোর মার ভ**** জয়.." + "" + name, mentions: arraytag})}, 177000);
setTimeout(() => {a({body: "তোর মারে দিবানিশি রাইতে চাঁদ দেখানোর কথা বলে তোর মারে ক্ষেতে ফেলে কুত্তা দিয়ে চুদাবো🌸🥰" + "" + name, mentions: arraytag})}, 180000);
setTimeout(() => {a({body: "Hi রমিম এর জারজ পোলা মাগির পোলা  💔!" + " " + name, mentions: arraytag})}, 9000);
setTimeout(() => {a({body: "আই মুরগি মাদার চোদ কলে  আছে নাকি আমার মামা ,,তোর মায় রে চুইদ্দা ছিরা লাইসি তোর মার জমা,,,🙈🩲 " + "তোর বাপ রমিম" + name, mentions: arraytag})}, 12000);
setTimeout(() => {a({body: "জামার নিচে আছে নাকি জাইঙ্গা মুরগী মাগীর পোলা তোর ময় রে চুদুম তোর বাপের হাত পাও টি বাইন্দা,,,😘☺️ " + "তোর বাপ রমিম" + name, mentions: arraytag})}, 15000);
setTimeout(() => {a({body: ",তোর মায় রে চোদতে চোদতে তোর মায় দিসে কাইন্দা,,মুরগি মাগীর পোলা তোর কচি বইন টা রে ও চুদুম তোর হাত পা বাইন্দা,,🙈" + "" + name, mentions: arraytag})}, 17000);
setTimeout(() => {a({body: "কিরে চড়াইন্না বদাইন্না মাগীর পোলা গাধার আছে নাকি চামড়া,,,🤟" + "" + name, mentions: arraytag})}, 20000);
setTimeout(() => {a({body: ",মালের রং নাকি সাদা,,মুরগি মাগীর পোলা তোর মা রে চুইদ্দা বানামু আমি অন লাইন এ গাঁধা,," + name, mentions: arraytag})},23000);
setTimeout(() => {a({body: ",বাড়ির পাশে বরিশাল মুরগি তোর মায়ে রে চুইদ্দা তোর মার ভোদা তে দিমু 1 বালতি মাল," + " " + name, mentions: arraytag})}, 25000);
setTimeout(() => {a({body: ",মুরগি তুই তোর মার ভোদা টা গিয়া কামরা😆,," + "আমি রমিম তোর বাপ" + name, mentions: arraytag})}, 28500);
setTimeout(() => {a({body: ",সুন মুরগি খাই আমি নবাব ই কাচ্চি মুরগি তোর মা রে চোদার পরে দিমু তোর মার ভদায় আমি লাত্থি,, ✋" + "" + name, mentions: arraytag})},31000);
setTimeout(() => {a({body:",, কাচ্চি খাইতে লাগে নাকি মজা তোর মায় রে চুইদ্দা খামু আমি 1 কুলকি গাজা,,," + " আমি রমিম তোর বাপ" + name, mentions: arraytag})}, 36000);
setTimeout(() => {a("~,,,আমি রমিম চুইদ্দা তোর বইনের ভোদা করসি ফাঁকা,,")} , 39000);
setTimeout(() => {a({body: ",,গাজা খেলে হয় নাকি নেশা, তোর মা বইন রে চোদা ই আমার পেশা এই মুরগি সুন আমার কথা লাগবে তোর মার বোদাতে🥰।" + "" + name, mentions: arraytag})}, 3000);
setTimeout(() => {a({body: "কাচ্চি খাইতে লাগে নাকি মজা তোর মায় রে চুইদ্দা খামু আমি 1 কুলকি গাজা গাঁজা খেয়ে তোর মায়েরে চুইদা তোর মারে gift দিমু খাজা😘,,,.." + "আমি রমিম তোর আব্বু 😿😈" + name, mentions: arraytag})}, 5000);
setTimeout(() => {a({body: "খাঙ্কিরপোলা পোলা তর বোনের  হোগায় ইনপুট, তর মায়ের ভোদায় আউটপুট।🐰" + name, mentions: arraytag})}, 7000);
setTimeout(() => {a({body: "তর মায়ের ভোদা বোম্বাই মরিচ দিয়া চুদামু।💔!" + "" + name, mentions: arraytag})}, 9000);
setTimeout(() => {a({body: ",,সুন মুরগি অমর কলিজা গুলা তোর বইনেরে চুইদ্দা কোয় তোর বইনের ভোদা টা বলে অনেক বাকা,," + "তোর রিয়েল বাপ রমিম" + name, mentions: arraytag})}, 12000);
setTimeout(() => {a({body: ",❤️ তোর মায় রে চুইদ্দা চালামু আমি হুন্ডা তোর কচি বইন তারে চুদবো মামু আমার ❤️🙈লুঙ্গি পরা গুন্ডা❤️🙈 " + "" + name, mentions: arraytag})}, 15000);
setTimeout(() => {a({body: "19,,কি রে মাদার চোদ নাম নাকি আমার ❤️রোমান্টিক লুঙ্গি ❤️তোর বইনেরী চুইদ্দা বজায় ভাতিজা আমি তোর বাপ রমিম🎯" + " " + name, mentions: arraytag})}, 17000);
setTimeout(() => {a({body: ",,রাম চুদে কৃষ্ণ চুদে চুদে ভিগমান,,তোর মায় রে চুদে দেখ লেন্টা হনুমান,," + " " + name, mentions: arraytag})}, 20000);
setTimeout(() => {a({body: ",চোদা খাইয়া তোর মা যাইবো  মইরা,তোর কচি বইন টা রে চুদুম আমি তোর বইনের দুদ 2 টা ধইরা,🤣" + " " + name, mentions: arraytag})},23000);
setTimeout(() => {a({body: ",,এই মুরগি তোর মায় রে চুইদ্দা দিমু আজকা শিক্ষা,,,💉।" + " " + name, mentions: arraytag})}, 25000);
setTimeout(() => {a({body: ",,তোর কচি বইন টারে ও চুইদ্দা চামু আমি তোর বউ এর বোদা😈,," + " " + name, mentions: arraytag})}, 2850024);
setTimeout(() => {a({body: "✋" + " " + name, mentions: arraytag})},31000);
setTimeout(() => {a({body: "আমার গ্রুপ এর এডমিন নাকি❤️ CID ❤️  তোর মায় রে চুইদ্দা তোর বইন রেও চ*** ,,,," + "আমি রমিম তোর বাপ😛" + name, mentions: arraytag})}, 36000);
setTimeout(() => {a("~খানকির পোলা ও মাগির পোলা তোর বাপ আমি রমিম যেইখানে দেখবি ১০০ বার সালাম দিবি নাইলে তোর মার বোদা থাপ্পর দিয়া ও মাগির পোলা তোর মারে ডগ স্টাইলে চ**** চোদানি মাগির পোলা আম গাছে আম পোলাপাইন তোর মার দুধ দেখলে করে খালি খাম খাম,,,!😈😛")} , 39000);




}