const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports.config = {
  name: "dogfacts",
  version: "1.0.",
  hasPermission: 0,
  credits: "RICKCIEL",
  usePrefix: true,
  description: "GENERATE DOG FACTS",
  commandCategory: "Notes",
  cooldowns: 2,
};

const DOG_FACTS_API = 'https://dog-api.kinduff.com/api/facts';


const imageUrls = [
  'https://i.imgur.com/yOGnRWe.jpeg',
  'https://i.imgur.com/LEnIMZo.jpeg',
  'https://i.imgur.com/wHxZExF.jpeg',

];

module.exports.run = async ({ api, event }) => {
  try {
    const response = await axios.get(DOG_FACTS_API);
    const fact = response.data.facts[0]; 

   
    const randomImageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];

    const imageFileName = 'img.png'; 
    const cacheFolderPath = path.join(__dirname, 'cache');
    const imagePath = path.join(cacheFolderPath, imageFileName);

    if (!fs.existsSync(cacheFolderPath)) {
      fs.mkdirSync(cacheFolderPath);
    }

    try {
      const imageResponse = await axios.get(randomImageUrl, { responseType: 'arraybuffer' });
      fs.writeFileSync(imagePath, Buffer.from(imageResponse.data));
    } catch (error) {
      console.error('Error downloading the image:', error);
      api.sendMessage("Error fetching quotes or sending the image.", event.threadID, event.messageID);
      return;
    }

    const message = {
      body: fact, // Use the fact as the body of the message
      attachment: fs.createReadStream(imagePath),
    };

    try {
      await api.sendMessage(message, event.threadID);
    } catch (error) {
      console.error('Error sending message:', error);
    }

    fs.unlinkSync(imagePath);
  } catch (error) {
    console.error('Error fetching quotes or sending the image:', error);
    api.sendMessage("Error fetching quotes or sending the image.", event.threadID, event.messageID);
  }
};

process.on('unhandledRejection', (error) => {
  console.error('Unhandled Promise Rejection:', error);
});