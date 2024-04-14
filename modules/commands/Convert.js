const axios = require('axios');
const fs = require('fs');
exports.config = {
  name: 'autodown',
  version: '1',
  hasPermssion: 0,
  credits: 'তোর নানা',
  usePrefix: true,
  description: '',
  commandCategory: 'Tiện ích',
  usages: [],
  cooldowns: 3
};
async function streamURL(_0x591f3d, _0x1db0d2) {
  const _0x4f984f = await axios.get(_0x591f3d, {
    'responseType': "arraybuffer"
  });
  const _0x8a8b63 = __dirname + ("/cache/" + Date.now() + '.' + _0x1db0d2);
  fs.writeFileSync(_0x8a8b63, _0x4f984f.data);
  setTimeout(_0x32779d => fs.unlinkSync(_0x32779d), 60000, _0x8a8b63);
  return fs.createReadStream(_0x8a8b63);
}
async function infoPostTT(_0x515388) {
  const _0x32200a = await axios.post("https://tikwm.com/api/", {
    'url': _0x515388
  }, {
    'headers': {
      'content-type': 'application/json'
    }
  });
  return _0x32200a.data.data;
}
async function infoPostFb(_0x5e3319) {
  const _0x34f19b = await axios.get("https://tools-fb.miraiprofile2005.repl.co/?url=" + _0x5e3319);
  return _0x34f19b.data;
}
exports.handleEvent = async function (_0x387f6e) {
  try {
    const _0x56cd90 = _0x387f6e.event.body;
    if (/^http(|s):\/\//.test(_0x56cd90)) {
      if (/fb|facebook/.test(_0x56cd90)) {
        const _0x54034c = await infoPostFb(_0x56cd90);
        const _0x2b7c48 = "=====Facebook====\nTitle: " + _0x54034c.message;
        const _0xe28d04 = _0x54034c.attachment.filter(_0x362356 => _0x362356.__typename == "Photo");
        const _0x57cdb2 = _0x54034c.attachment.filter(_0x1135ab => _0x1135ab.__typename == "Video");
        const _0x35fc60 = [];
        for (const _0x3814ce of _0xe28d04) {
          try {
            const _0x516906 = _0x3814ce.photo_image || _0x3814ce.image || {};
            _0x35fc60.push(await streamURL(_0x516906.uri, "jpg"));
          } catch {
            continue;
          }
        }
        if (_0x35fc60.length > 0x0) {
          await _0x387f6e.api.sendMessage({
            'body': _0x2b7c48,
            'attachment': _0x35fc60
          }, _0x387f6e.event.threadID);
        }
        for (const _0xedd23e of _0x57cdb2) {
          try {
            _0x387f6e.api.sendMessage({
              'body': _0x2b7c48,
              'attachment': await streamURL(_0xedd23e.playable_url_quality_hd || _0xedd23e.playable_url, "mp4")
            }, _0x387f6e.event.threadID);
          } catch {
            continue;
          }
        }
      } else {
        if (/(^https:\/\/)((vm|vt|www|v)\.)?(tiktok|douyin)\.com\//.test(_0x56cd90)) {
          const _0x3d5016 = await infoPostTT(_0x56cd90);
          let _0x25a04a = [];
          if (_0x3d5016.images != undefined) {
            for (const _0x26ccce of _0x3d5016.images) {
              _0x25a04a.push(await streamURL(_0x26ccce, "png"));
            }
          } else {
            _0x25a04a = await streamURL(_0x3d5016.play, "mp4");
          }
          _0x387f6e.api.sendMessage({
            'body': "- কিরে ছ্যাবলা নে তোর ভিডিও 😒🐼\nAuthour: " + _0x3d5016.author.nickname + "\ntitlet: " + _0x3d5016.title,
            'attachment': _0x25a04a
          }, _0x387f6e.event.threadID);
        }
      }
    }
  } catch (_0x13ebcb) {
    console.log("Error", _0x13ebcb);
  }
};
exports.run = () => {};
