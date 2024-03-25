const axios = require('axios');
const moment = require('moment-timezone');
const { writeFileSync, unlinkSync, createReadStream } = require('fs-extra');

module.exports.config = {
        name: "ramadan",
        version: "2.0", 
        credits: "RUBISH",
        cooldowns: 5,
        hasPermission: 0,
        description: "Get detailed Iftar time for a city.",
          usePrefix:true,
        commandCategory: "Tools",
        usage: "{pn} <city name> - <color>"
};

          module.exports.run = async function ({ api, args, event }) {
            let [cityName, colorOption] = args.join(' ').trim().split(/\s*-\s*/);

            try {
                const response = await axios.get(`https://noobs-apihouse.onrender.com/dipto/iftar?name=${encodeURIComponent(cityName)}&color=${colorOption || 'gray'}`);
                const iftarInfo = response.data;

                if (!iftarInfo) {
                    return api.sendMessage("Iftar time not found or invalid response.", event.threadID);
                }


            const currentDate = moment().tz('Asia/Dhaka');

            const nextIftarTime = moment.tz(`${currentDate.format('YYYY-MM-DD')} ${iftarInfo.iftar_time}`, 'YYYY-MM-DD hh:mm A', 'Asia/Dhaka');
            if (nextIftarTime.isBefore(currentDate)) {
                nextIftarTime.add(1, 'day');
            }
            const iftarTimeRemaining = nextIftarTime.diff(currentDate, 'minutes');
            const iftarRemainingHours = Math.floor(Math.abs(iftarTimeRemaining) / 60);
            const iftarRemainingMinutes = Math.abs(iftarTimeRemaining) % 60;
            const iftarRemainingFormatted = `${iftarTimeRemaining < 0 ? '-' : ''}${iftarRemainingHours} hours ${iftarRemainingMinutes} min`;

            const nextSahriTime = moment.tz(`${currentDate.format('YYYY-MM-DD')} ${iftarInfo.sher_itime}`, 'YYYY-MM-DD hh:mm A', 'Asia/Dhaka');
            if (nextSahriTime.isBefore(currentDate)) {
                nextSahriTime.add(1, 'day');
            }
            const sahriTimeRemaining = nextSahriTime.diff(currentDate, 'minutes');
            const sahriRemainingHours = Math.floor(Math.abs(sahriTimeRemaining) / 60);
            const sahriRemainingMinutes = Math.abs(sahriTimeRemaining) % 60;
            const sahriRemainingFormatted = `${sahriTimeRemaining < 0 ? '-' : ''}${sahriRemainingHours} hours ${sahriRemainingMinutes} min`;

            const formattedResponse = `
‡   𝙸𝙵𝚃𝙴𝚁 𝙰𝙽𝙳 𝚂𝙰𝙷𝚁𝙸 𝚃𝙸𝙼𝙴   ‡
﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏\n
◈ 𝙲𝚒𝚝𝚢: ${iftarInfo.city}\n
◈ 𝙳𝚊𝚝𝚎: ${moment(currentDate).tz('Asia/Dhaka').format('D MMMM YYYY')} \n
◈ 𝙳𝚊𝚢: ${moment(currentDate).tz('Asia/Dhaka').format('dddd')}
﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏\n
▣ 𝚁𝚊𝚖𝚊𝚍𝚊𝚗: ${iftarInfo.ramadan}\n
▣ 𝙸𝚏𝚝𝚊𝚛 𝚃𝚒𝚖𝚎: ${iftarInfo.iftar_time}\n
▣ 𝚂𝚎𝚑𝚛𝚒 𝚃𝚒𝚖𝚎: ${iftarInfo.sher_itime}
﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏\n
▣ 𝙸𝚏𝚝𝚎𝚛 𝚁𝚎𝚖𝚊𝚒𝚗𝚒𝚗𝚐: ${iftarRemainingFormatted}\n
▣ 𝚂𝚎𝚑𝚛𝚒 𝚁𝚎𝚖𝚊𝚒𝚗𝚒𝚗𝚐: ${sahriRemainingFormatted}
﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏\n
▣ 𝚂𝚞𝚗𝚜𝚎𝚝 𝚃𝚒𝚖𝚎: ${iftarInfo.sunset}\n
▣ 𝙼𝚊𝚐𝚑𝚛𝚒𝚋 𝚃𝙸𝚖𝚎: ${iftarInfo.oju_time_sondha}\n
▣ 𝙰𝚜𝚛 𝚃𝚒𝚖𝚎: ${iftarInfo.oju_time_bikal}\n
▣ 𝙵𝚊𝚓𝚛 𝚃𝚒𝚖𝚎: ${iftarInfo.oju_time_sokal}\n
▣ 𝙳𝚑𝚞𝚑𝚛 𝚃𝚒𝚖𝚎: ${iftarInfo.fazar_time}
﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏`;
 const path = __dirname + "/cache/iftar.jpg";
 const img = (await axios.get(iftarInfo.url, { responseType: "arraybuffer" })).data;
 writeFileSync(path, Buffer.from(img, 'binary'));

            await api.sendMessage({
                body: formattedResponse,
                attachment: createReadStream(path)
            }, event.threadID, () => unlinkSync(path), event.messageID);
        } catch (error) {
            console.error('Error fetching iftar data:', error);
            api.sendMessage("An error occurred while processing the request.", event.threadID);
        }
};