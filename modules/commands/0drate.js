module.exports.config = {
    name: "rate",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Romim",
    description: "important notes",
  usePrefix: true,
    commandCategory: "random-img",
    usages: "send message",
    cooldowns: 5,
    dependencies: {
        "request": "",
        "fs-extra": "",
        "axios": ""
    }
};

module.exports.run = async({ api, event, args, client, Users, Threads, __GLOBAL, Currencies }) => {
    const axios = global.nodemodule["axios"];
    const request = global.nodemodule["request"];
    const fs = global.nodemodule["fs-extra"];
    var ZiaRein3 = (`•┄┅═════❁🌺❁═════┅┄•\n•—»✨আসসালামু আলাইকুম🖤💫

📥যে কোন সময় দাম পরিবর্তনশীল  📥

NEW UPDATE PRICE LIST !!! 🤯🥳

 ২৫ 💎 ডায়মন্ড = ২৫ টাকা
  ৫০ 💎 ডায়মন্ড = ৪৫ টাকা 
 ১১৫💎 ডায়মন্ড = ৭৫ টাকা
 ২৪০💎 ডায়মন্ড = ১৫০ টাকা
 ৩৫৫ 💎 ডায়মন্ড = ২২৫ টাকা
 ৪৮০ 💎 ডায়মন্ড = ৩০০ টাকা
  ৫০৫ 💎 ডায়মন্ড = ৩২৫ টাকা
  ৬১০💎 ডায়মন্ড = ৩৮০ টাকা
  ৭২৫ 💎 ডায়মন্ড = ৪৫৫ টাকা
  ৮৫০ 💎 ডায়মন্ড = ৫৩০ টাকা
  ১০৯০💎 ডায়মন্ড = ৬৮০ টাকা 
  ১২৪০ 💎 ডায়মন্ড = ৭৬০ টাকা 
 ১৪৮০ 💎 ডায়মন্ড = ৯১৫ টাকা
  ১৮৫০ 💎 ডায়মন্ড = ১১৪০ টাকা
  ২০৯০ 💎 ডায়মন্ড = ১৩০০ টাকা
  ২৫৩০ 💎 ডায়মন্ড = ১৫০০ টাকা
  ৫,০৬০ 💎 ডায়মন্ড = ৩,০০০ টাকা  
 ৭,৫৯০ 💎 ডায়মন্ড = ৪,৫০০ টাকা
 ১০,১২০ 💎 ডায়মন্ড = ৬,০০০ টাকা 
১২,৬৫০ 💎 ডায়মন্ড = ৭,৫০০ টাকা

💢 ৯৫ টাকার স্পেশাল এয়ারড্রপ গুলো ৬০/৭৫ টাকা। শর্ত প্রযোজ্য 

👉 Id Code Top up List ✅️
🌏 লেভেল আপ পাস -   ১৬০ টাকা
🌏 উইকলি মেম্বারশিপ - ১৫৫ টাকা
🌏 মান্থলি মেম্বারশিপ - ৭৫০ টাকা

 বিঃদ্র এই গুলো নিতে শুধুমাত্র গেম আইডি কোড লাগবে।
 
⏰️ Deliverey Time : 0-5 minute 

🌺নোট: আমি যে দাম বলবো ওই দাম থেকে কোথাও কম দাম এ পাইলে আমাকে অবশ্যই জানাবেন। কম পেয়ে নিয়ে নিবেন না। আমি ওই দাম অথবা যদি পারি ওই দাম এর কম এ দেয়ার চেষ্টা করবো ইনশাআল্লাহ।

page link  : https://www.facebook.com/DIMONDBAZAR07
•┄┅════❁🌺❁════┅┄•\n Name : \n Owner : ROMIM AHMED\n Group: 💎DIAMOND BAZAR💎 `);
   var ZiaRein = [
"https://i.imgur.com/nA8FIBE.jpg",
    ];
    var ZiaRein2 = () => api.sendMessage({ body: ZiaRein3, attachment: fs.createReadStream(__dirname + "/cache/ZiaRein1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/ZiaRein1.jpg"), event.messageID);
    return request(encodeURI(ZiaRein[Math.floor(Math.random() * ZiaRein.length)])).pipe(fs.createWriteStream(__dirname + "/cache/ZiaRein1.jpg")).on("close", () => ZiaRein2());
};

