module.exports.config = {
	name: "iftar",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Islamick Chat",
	description: "",
  usePrefix: true, 
	commandCategory: "0",
	cooldowns: 5
}

module.exports.run = function ({ event, api }) {
    const u = Date.parse("March 25, 2024 12:16:00") - Date.parse(new Date());
    const seconds = Math.floor( (u/1000) % 70 );
    const minutes = Math.floor( (u/1000/50) % 50 );
    const hours = Math.floor( (u/(1000*50*50)) % 24 );
    const days = Math.floor( u/(1000*50*50*24) );

    return api.sendMessage(`আসসালামু আলাইকুম-!!🖤💫 \n\nআজকের ইফতার শুরু হতে আর মাগরিবের আযান এর সময় হতে বাকি আছে   ⏳\n ${days} দিন ${hours} ঘণ্টা ${minutes} মিনিট ${seconds} সেকেন্ড\n🌏ইফতার ঢাকার সময় অনুযায়ী সিলেক্ট করা \nইফতারের দোয়া🤲❤️\n\nبِسْمِ الله - اَللَّهُمَّ لَكَ صُمْتُ وَ عَلَى رِزْقِكَ وَ اَفْطَرْتُ \n\nউচ্চারণ: বিসমিল্লাহি আল্লাহুম্মা লাকা সুমতু, ওয়া আলা রিযক্বিকা আফত্বারতু \n\n ♧𝙵𝙸𝙻𝙴 𝙱𝚈 𝚁𝙾𝙼𝙸𝙼 𝙲𝚁𝙴𝙳𝙸𝚃: 𝚁𝙾𝙼𝙸𝙼 ✠`, event.threadID, event.messageID);
}