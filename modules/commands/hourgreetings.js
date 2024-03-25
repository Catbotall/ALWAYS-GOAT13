function convertToMilliseconds(interval) {
  const multiplier = {
    'ms': 1,
    's': 1000,
    'm': 60000,
    'h': 3600000,
    'd': 86400000
  };

  const num = parseInt(interval);
  const unit = interval.replace(num, '');

  if (multiplier.hasOwnProperty(unit)) {
    return num * multiplier[unit];
  } else {
    throw new Error('Invalid time interval format.');
  }
}

module.exports.config = {
  name: 'hourlyGreetings',
  version: '1.0',
  hasPermssion: 0,
  credits: 'Rickciel',
  usePrefix: true,
  description: 'Sends a message every specified interval',
  commandCategory: 'system',
  usages: '<interval>',
  cooldowns: 3
};

const hourlyMessages = [
  'Hello, it\'s a new hour!',
  'Time flies! Another hour has passed.',
  'Just checking in on you as the hours go by.',
  'Did you know an hour consists of 60 minutes?'

];

module.exports.onLoad = o => {
  const interval = convertToMilliseconds('40m'); 
  setInterval(() => {
    const randomMessage = hourlyMessages[Math.floor(Math.random() * hourlyMessages.length)];
    global.data.allThreadID.forEach(threadID => o.api.sendMessage(randomMessage, threadID));
  }, interval);
};

module.exports.run = o => {};