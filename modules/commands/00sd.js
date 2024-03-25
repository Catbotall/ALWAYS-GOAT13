module.exports.config = {
  name: "Sad",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "ROMIM",
  description: "SAD VEDIO",
  usePrefix: true,
  commandCategory: "video",
  usages: "sadideo",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["༒𝚂𝙰𝙳 𝚅𝙸𝙳𝙴𝙾 𝙱𝚈 𝚁4𝙼1𝙼 亗"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
"https://drive.google.com/uc?id=1kQZuDrJrKY0oXwsZivHc9FcJGkcU_69P",
"https://drive.google.com/uc?id=1krwyA8wZwCdlIYNepannQBzksOPoFA1t",
"https://drive.google.com/uc?id=1kVx_kO8KRF1et4fVPKYMCbAGxsFWOaOP",
"https://drive.google.com/uc?id=1kJSo4LAUVIum3OHH4-Gti1f8dhTw2RSi",
"https://drive.google.com/uc?id=1kwxVi3EuXZP_LUhQh16F6MTIxeanZels",
"https://drive.google.com/uc?id=1kc4Ljk4NVI08tjlY7w72McLicnicBdWI",
"https://drive.google.com/uc?id=1klcmn2x6_C8isva6c3QTdlqnZKJwNADG",
"https://drive.google.com/uc?id=1ktJGIFojx4eILl4hsPeoSTzM0aMHucFa",
"https://drive.google.com/uc?id=1klcmn2x6_C8isva6c3QTdlqnZKJwNADG",
"https://drive.google.com/uc?id=1ktJGIFojx4eILl4hsPeoSTzM0aMHucFa",
"https://drive.google.com/uc?id=1lJXmSwCeTL6UC1Fo_JoOt0igKULFmX-3",
"https://drive.google.com/uc?id=1mg5s-3_aQk-uloYUdsscv2Oga5gSPZqK",
"https://drive.google.com/uc?id=1mb0Ko5xAtpdPOu1yCWfpMlMs9yd7C-aa",
"https://drive.google.com/uc?id=1lTB44u8DMigI0hRrCmOP4Ngdzfc9TSJa",
"https://drive.google.com/uc?id=1mEEuu_tt_qKy87mMYXvFKboMFt-MxETP",
"https://drive.google.com/uc?id=1lE00OhdIqZEkmBQLKQadMknCEUl3wFoA",
"https://drive.google.com/uc?id=1lz9ArazDr4g0jRa6ePtRGnHrZg__pEJS",
"https://drive.google.com/uc?id=1mjodTR0BZf9clIMiZBTf8PB0_Fv58L0E",
"https://drive.google.com/uc?id=1m6kU-5oWy_45fzfvIv7v9t22E1Adni1O",
"https://drive.google.com/uc?id=1m6N2g8kfiF0P6yB_mBYzQL__9xO-u-gn",
"https://drive.google.com/uc?id=1l_G9eWUsZaIv4ygb9pz2dp-GXylMgSOH",
"https://drive.google.com/uc?id=1lkRHVGb5vysL6xhywz1KTVDHGfIUwt96",
"https://drive.google.com/uc?id=1lKcdAH9tLN80vQrMnsHcPjf3nWjz3NOi",
"https://drive.google.com/uc?id=1mWZE0yO7jLs9tpahvKJQkeKMvu2Pm4q3",
"https://drive.google.com/uc?id=1lc2WDxohMReMCfdywXWWreJOKift864j",
"https://drive.google.com/uc?id=1ld5gYZ9Iw1-pwWbAdBa1Z1nhui1aU-EC",
"https://drive.google.com/uc?id=1kHURsp1wFiPYHY0v6igWUL2SRAJf_v8q",
"https://drive.google.com/uc?id=1ko4aXlEKj0qRFkCCEMxjK8mkm1ZWPEQn",
"https://drive.google.com/uc?id=1kuXOIpy9h6ZqC2PrU4m33QHz1Mbu0Orr",
"https://drive.google.com/uc?id=1kQOTtOhVY9pfP_COFHsYxe0jhW16cpQf",
"https://drive.google.com/uc?id=1l5K2tjwuxu_hUV825vgLDVJFla6HcwZ-",
"https://drive.google.com/uc?id=1l6j6x5bGnj--IQApu6quieZMOYfAysfM",
"https://drive.google.com/uc?id=1kmyMSZFW3VLLP-IomeFUKBtRkn_tGp7j",
"https://drive.google.com/uc?id=1kT-xaWJBOnkvvZVVczne-v8X6qoj-eVT",
"https://drive.google.com/uc?id=1l1NYJNOCqW-Vxd51FiCEDxqlfMT1soD5",


];
     var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };