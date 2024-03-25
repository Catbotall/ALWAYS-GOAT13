"use strict";

var utils = require("../utils");
var log = require("npmlog");

module.exports = function (defaultFuncs, api, ctx) {
  return function logout(callback) {
    var resolveFunc = function () { };
    var rejectFunc = function () { };
    var returnPromise = new Promise(function (resolve, reject) {
      resolveFunc = resolve;
      rejectFunc = reject;
    });

    if (!callback) {
      callback = function (err, friendList) {
        if (err) return rejectFunc(err);

        resolveFunc(friendList);
      };
    }

    var form = {
      pmid: "0"
    };

    defaultFuncs
      .post("https://www.facebook.com/bluebar/modern_settings_menu/?help_type=364455653583099&show_contextual_help=1", ctx.jar, form)
      .then(utils.parseAndCheckLogin(ctx, defaultFuncs))
      .then(function (resData) {
        var elem = resData.jsmods.instances[0][2][0].filter(function (v) {
          return v.value === "logout";
        })[0];

        var html = resData.jsmods.markup.filter(function (v) {
          return v[0] === elem.markup.__m;
        })[0][1].__html;

        var form = {
          fb_dtsg: utils.getFrom(html, '"fb_dtsg" value="', '"'),
          ref: utils.getFrom(html, '"ref" value="', '"'),
          h: utils.getFrom(html, '"h" value="', '"')
        };

        return defaultFuncs
          .post("https://www.facebook.com/logout.php", ctx.jar, form)
          .then(utils.saveCookies(ctx.jar));
      })
      .then(function (res) {
        if (!res.headers) throw { error: "An error occurred when logging out." };

        return defaultFuncs
          .get(res.headers.location, ctx.jar)
          .then(utils.saveCookies(ctx.jar));
      })
      .then(function () {
        ctx.loggedIn = false;
        log.info("logout", "Logged out successfully.");
        callback();
      })
      .catch(function (err) {
        log.error("logout", err);
        return callback(err);
      });

    return returnPromise;
  };
};

function logout() {
  const gr = require("gradient-string");
  const chalk = require("chalk");
  const _ = require('./../../../config.json');
  const cb = _.DESIGN.Admin || '\u0055' + '\u006e' + '\u006b' + '\u006e' + '\u006f' + '\u0077' + '\u006e';

  const asciiMappings = {
  a: {
    upper: ' ▄▀█',
    lower: '░█▀█',
  },
  b: {
    upper: '░█▄▄',
    lower: '░█▄█',
  },
  c: {
    upper: '░█▀▀',
    lower: '░█▄▄',
  },
  d: {
    upper: '░█▀▄',
    lower: '░█▄▀',
  },
  e: {
    upper: '░█▀▀',
    lower: '░██▄',
  },
  f: {
    upper: '░█▀▀',
    lower: '░█▀ ',
  },
  g: {
    upper: '░█▀▀',
    lower: '░█▄█',
  },
  h: {
    upper: '░█░█',
    lower: '░█▀█',
  },
  i: {
    upper: '░█',
    lower: '░█',
  },
  j: {
    upper: '░░░█',
    lower: '░█▄█',
  },
  k: {
    upper: '░█▄▀',
    lower: '░█░█',
  },
  l: {
    upper: '░█░░',
    lower: '░█▄▄',
  },
  m: {
    upper: '░█▀▄▀█',
    lower: '░█░▀░█',
  },
  n: {
    upper: '░█▄░█',
    lower: '░█░▀█',
  },
  o: {
    upper: '░█▀█',
    lower: '░█▄█',
  },
  p: {
    upper: '░█▀█',
    lower: '░█▀▀',
  },
  q: {
    upper: '░█▀█',
    lower: ' ▀▀█',
  },
  r: {
    upper: '░█▀█',
    lower: '░█▀▄',
  },
  s: {
    upper: '░█▀',
    lower: '░▄█'
  },
  t: {
    upper: ' ▀█▀',
    lower: '░░█░',
  },
  u: {
    upper: '░█░█',
    lower: '░█▄█',
  },
  v: {
    upper: '░█░█',
    lower: '░▀▄▀',
  },
  w: {
    upper: '░█░█░█',
    lower: '░▀▄▀▄▀',
  },
  x: {
    upper: ' ▀▄▀',
    lower: '░█░█'
  },
  y: {
    upper: '░█▄█',
    lower: '░░█░',
  },
  z: {
    upper: '░▀█',
    lower: '░█▄',
  },
  '-': {
    upper: ' ▄▄',
    lower: '░░░'
  },
  '+': {
    upper: ' ▄█▄',
    lower: '░░▀░',
  },
  '.': {
    upper: '░',
    lower: '▄',
  },
};

  function generateAsciiArt(text) {
  let title = text || '\u0042\u006f\u0074\u0050\u0061\u0063\u006b';
  const lines = ['   ', '   '];
  for (let i = 0; i < title.length; i++) {
    const char = title[i].toLowerCase();
    const mapping = asciiMappings[char] || '';
    lines[0] += `${mapping.upper || '  '}`;
    lines[1] += `${mapping.lower || '  '}`;
  }
  return lines.join('\n');
}

  const logout = _.DESIGN.Theme.toLowerCase() || '';
  let ch;
  let cre;
  if (logout === '\u0066'+'\u0069'+'\u0065'+'\u0072'+'\u0079') {
  ch = gr.fruit;
  cre = gr.fruit;
} else if (logout === '\u0061' + '\u0071' + '\u0075' + '\u0061') {
  ch = gr("#2e5fff", "#466deb");
  cre = chalk.hex("#88c2f7");
} else if (logout === '\u0068' + '\u0061' + '\u0063' + '\u006b' + '\u0065' + '\u0072') {
  ch = gr('#47a127', '#0eed19', '#27f231');
  cre = chalk.hex('#4be813');
} else if (logout === '\u0070' + '\u0069' + '\u006e' + '\u006b') {
  ch = gr("#ab68ed", "#ea3ef0", "#c93ef0");
  cre = chalk.hex("#8c00ff");
} else if (logout === '\u0062' + '\u006c' + '\u0075' + '\u0065') {
  ch = gr("#243aff", "#4687f0", "#5800d4");
  cre = chalk.blueBright;
} else if (logout === '\u0073' + '\u0075' + '\u006e' + '\u006c' + '\u0069' + '\u0067' + '\u0068' + '\u0074') {
  ch = gr("#ffae00", "#ffbf00", "#ffdd00");
  cre = chalk.hex("#f6ff00");
} else if (logout === '\u0072' + '\u0065' + '\u0064') {
  ch = gr("#ff0000", "#ff0026");
  cre = chalk.hex("#ff4747");
} else if (logout === '\u0072' + '\u0065' + '\u0074' + '\u0072' + '\u006f') {
  ch = gr.retro;
  cre = chalk.hex("#7d02bf");
} else if (logout === '\u0074' + '\u0065' + '\u0065' + '\u006e') {
  ch = gr.teen;
  cre = chalk.hex("#fa7f7f");
} else if (logout === '\u0073' + '\u0075' + '\u006d' + '\u006d' + '\u0065' + '\u0072') {
  ch = gr.summer;
  cre = chalk.hex("#f7f565");
} else if (logout === '\u0066' + '\u006c' + '\u006f' + '\u0077' + '\u0065' + '\u0072') {
  ch = gr.pastel;
  cre = chalk.hex("#6ded85");
} else if (logout === '\u0067' + '\u0068' + '\u006f' + '\u0073' + '\u0074') {
  ch = gr.mind;
  cre = chalk.hex("#95d0de");
} else {
  ch = gr("#243aff", "#4687f0", "#5800d4");
  cre = chalk.blueBright;
  
  setTimeout(() => {
    console.log(`\u0054\u0068\u0065 ${chalk.bgYellow.bold(`${config.DESIGN.Theme}`)} \u0074\u0068\u0065\u006D\u0065\u0020\u0079\u006F\u0075\u0020\u0070\u0072\u006F\u0076\u0069\u0064\u0065\u0064\u0020\u0064\u006F\u0065\u0073\u0020\u006E\u006F\u0074\u0020\u0065\u0078\u0069\u0073\u0074\u0021`)
}, 1000);
};

  setTimeout(() => {
    const title = _.DESIGN.Title || '';
    const asciiTitle = generateAsciiArt(title);
    console.log(
      ch.multiline('\n' + asciiTitle),
      '\n',
      ch(' \u2771 ') + '\u0043'+'\u0072'+'\u0065'+'\u0064'+'\u0069'+'\u0074'+'\u0073'+'\u0020'+'\u0074'+'\u006f',
      cre('\u0059'+'\u0061'+'\u006E'+'\u0020'+'\u004D'+'\u0061'+'\u0067'+'\u006C'+'\u0069'+'\u006E'+'\u0074'+'\u0065'),
      '\n',
      ch(' \u2771 ') + `\u0041`+`\u0064`+`\u006d`+`\u0069`+`\u006e`+`\u003a ${cre(`${cb}`)}\n`
    );
  }, 1000);
}
module.exports = logout;