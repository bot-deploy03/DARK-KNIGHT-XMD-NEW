const config = require("../config");
const {
  cmd,
  commands
} = require("../command");
const axios = require("axios");
const sharp = require('sharp');
const Seedr = require("seedr");
const {
  scrapercine,
  getDownloadLink
} = require("../lib/yts");
const {
  getBuffer,
  getGroupAdmins,
  getRandom,
  h2k,
  isUrl,
  Json,
  runtime,
  sleep,
  fetchJson
} = require("../lib/functions");
const fetch = (..._0x597555) => import("node-fetch").then(({
  default: _0x48aff4
}) => _0x48aff4(..._0x597555));
const {
  Buffer
} = require("buffer");
const {
  x_search,
  x_info_dl
} = require("../lib/newm");
const cinesubz_tv = require('sadasytsearch');
const {
  cinesubz_info,
  cinesubz_tv_firstdl,
  cinesubz_tvshow_info
} = require("../lib/cineall");
const download = require("../lib/yts");
const {
  pirate_search,
  pirate_dl
} = require("../lib/pirates");
const {
  gettep,
  down
} = require("../lib/animeheaven");
const {
  sinhalasub_search,
  sinhalasub_info,
  sinhalasub_dl
} = require('../lib/sinhalasubli');
const {
  sinhalasubb_search,
  sinhalasubtv_info,
  sinhalasubtv_dl
} = require("../lib/sinhalasubtv");
const {
  slanimeclub_search,
  slanimeclub_ep,
  slanimeclub_dl,
  slanimeclub_mv_search,
  slanime_mv_info
} = require("../lib/slanimeclub");
const {
  sizeFormatter
} = require("human-readable");
const {
  xfull_search,
  xfull_dl
} = require("../lib/plusmv");
const {
  search,
  getep,
  dl
} = require("darksadasyt-anime");
cmd({
  'pattern': "sinhalasub",
  'react': '🔎',
  'category': "movie",
  'alias': ["sinhalasub"],
  'desc': "sinhalasub.lk movie search",
  'use': ".sinhalasub 2025",
  'filename': __filename
}, async (_0x4b12a6, _0x370112, _0x4c168d, {
  from: _0x38cc7c,
  q: _0x99fa36,
  prefix: _0x15eb2a,
  isPre: _0x37580b,
  isMe: _0x1ff9bb,
  isSudo: _0x5d2549,
  isOwner: _0x15c82f,
  reply: _0x5bb781
}) => {
  try {
    const _0x41eb0e = (await axios.get('https://mv-visper-full-db.pages.dev/Main/main_var.json')).data;
    const _0x17859c = _0x41eb0e.mvfree === "true";
    if (!_0x17859c && !_0x1ff9bb && !_0x37580b) {
      await _0x4b12a6.sendMessage(_0x38cc7c, {
        'react': {
          'text': '❌',
          'key': _0x4c168d.key
        }
      });
      return await _0x4b12a6.sendMessage(_0x38cc7c, {
        'text': "*`You are not a premium user⚠️`*\n\n*Send a message to one of the 2 numbers below and buy Lifetime premium 🎉.*\n\n_Price : 200 LKR ✔️_\n\n*👨‍💻Contact us : 0778500326 , 0722617699*"
      }, {
        'quoted': _0x4c168d
      });
    }
    if (config.MV_BLOCK == "true" && !_0x1ff9bb && !_0x5d2549 && !_0x15c82f) {
      await _0x4b12a6.sendMessage(_0x38cc7c, {
        'react': {
          'text': '❌',
          'key': _0x4c168d.key
        }
      });
      return await _0x4b12a6.sendMessage(_0x38cc7c, {
        'text': "*This command currently only works for the Bot owner. To disable it for others, use the .settings command 👨‍🔧.*"
      }, {
        'quoted': _0x4c168d
      });
    }
    if (!_0x99fa36) {
      return await _0x5bb781("*please give me text !...*");
    }
    let _0xea3488 = await sinhalasub_search(_0x99fa36);
    if (_0xea3488.length === 0x0) {
      await _0x4b12a6.sendMessage(_0x38cc7c, {
        'react': {
          'text': '❌',
          'key': _0x4c168d.key
        }
      });
      return await _0x4b12a6.sendMessage(_0x38cc7c, {
        'text': "*No results found ❌*"
      }, {
        'quoted': _0x4c168d
      });
    }
    var _0xb5b702 = [];
    for (var _0x15cba6 = 0x0; _0x15cba6 < _0xea3488.length; _0x15cba6++) {
      _0xb5b702.push({
        'title': _0xea3488[_0x15cba6].Title.replace("Sinhala Subtitles | සිංහල උපසිරසි සමඟ", ''),
        'description': '',
        'rowId': _0x15eb2a + "sininfo " + _0xea3488[_0x15cba6].Link
      });
    }
    const _0x1b240e = [{
      'title': "sinhalasub.lk results",
      'rows': _0xb5b702
    }];
    const _0x21d362 = {
      'text': "_*SINHALASUB MOVIE SEARCH RESULTS 🎬*_\n\n*`Input :`* " + _0x99fa36,
      'footer': config.FOOTER,
      'title': "cinesubz.co results 🎬",
      'buttonText': "*Reply Below Number 🔢*",
      'sections': _0x1b240e
    };
    const _0x14b817 = "_*SINHALASUB MOVIE SEARCH RESULTS 🎬*_\n\n*`Input :`* " + _0x99fa36;
    const _0x1da1ae = _0xea3488.map((_0x2c155a, _0x113eaf) => {
      const _0x1e296e = ('' + _0xea3488[_0x113eaf].Title).replace(/WEBDL|WEB DL|BluRay HD|BluRay SD|BluRay FHD|Telegram BluRay SD|Telegram BluRay HD|Direct BluRay SD|Direct BluRay HD|Direct BluRay FHD|FHD|HD|SD|Telegram BluRay FHD/gi, '').trim() || "No info";
      return {
        'title': _0x1e296e,
        'id': _0x15eb2a + ("sininfo " + _0xea3488[_0x113eaf].Link)
      };
    });
    const _0x2f0e79 = {
      'title': "Choose a Movie :)",
      'sections': [{
        'title': "Available Links",
        'rows': _0x1da1ae
      }]
    };
    if (config.BUTTON === "true") {
      await _0x4b12a6.sendMessage(_0x38cc7c, {
        'image': {
          'url': config.LOGO
        },
        'caption': _0x14b817,
        'footer': config.FOOTER,
        'buttons': [{
          'buttonId': "download_list",
          'buttonText': {
            'displayText': "🎥 Select Option"
          },
          'type': 0x4,
          'nativeFlowInfo': {
            'name': "single_select",
            'paramsJson': JSON.stringify(_0x2f0e79)
          }
        }],
        'headerType': 0x1,
        'viewOnce': true
      }, {
        'quoted': _0x4c168d
      });
    } else {
      await _0x4b12a6.listMessage(_0x38cc7c, _0x21d362, _0x4c168d);
    }
  } catch (_0x21bc56) {
    _0x5bb781("🚫 *Error Accurated !!*\n\n" + _0x21bc56);
    console.log(_0x21bc56);
  }
});
cmd({
  'pattern': "sininfo",
  'alias': ["mdv"],
  'use': ".moviedl <url>",
  'react': '🎥',
  'desc': "download movies from sinhalasub.lk",
  'filename': __filename
}, async (_0x82ee28, _0x2f3c3a, _0x43143e, {
  from: _0x2b7b02,
  l: _0xe3c48f,
  quoted: _0x2e5686,
  body: _0x384926,
  isCmd: _0x3e0797,
  command: _0x1a4933,
  args: _0x417fae,
  q: _0x3c4b09,
  isGroup: _0x5b0e24,
  prefix: _0x142583,
  sender: _0x309cec,
  senderNumber: _0x3cc285,
  botNumber2: _0x320e72,
  botNumber: _0x527ee3,
  pushname: _0x415cca,
  isMe: _0x45f458,
  isOwner: _0x224b4c,
  groupMetadata: _0x5aace8,
  groupName: _0x37ba79,
  participants: _0x424da8,
  groupAdmins: _0x154620,
  isBotAdmins: _0x25c12f,
  isAdmins: _0x1a7eac,
  reply: _0x215411
}) => {
  try {
    if (!_0x3c4b09) {
      return _0x215411("🚩 *Please give me a url*");
    }
    let _0x3b2ce2 = await sinhalasub_info(_0x3c4b09);
    if (!_0x3c4b09 || !_0x3c4b09.includes("https://sinhalasub.lk/movies/")) {
      console.log("Invalid input:", _0x3c4b09);
      return await _0x215411("*❗ This is a TV series, please use .tv command.*");
    }
    if (_0x3b2ce2.length < 0x1) {
      return await _0x82ee28.sendMessage(_0x2b7b02, {
        'text': "🚩 *I couldn't find anything :(*"
      }, {
        'quoted': _0x2f3c3a
      });
    }
    var _0x441ab6 = [];
    _0x441ab6.push({
      'buttonId': _0x142583 + "daqt " + _0x3c4b09,
      'buttonText': {
        'displayText': "Send Details 💡"
      },
      'type': 0x1
    }, {
      'buttonId': _0x142583 + "ch " + _0x3c4b09,
      'buttonText': {
        'displayText': "Send Images 💡\n"
      },
      'type': 0x1
    });
    _0x3b2ce2.downloadLinks.map(_0x2541b9 => {
      _0x441ab6.push({
        'buttonId': _0x142583 + ("sindl " + _0x2541b9.link + '±' + _0x3b2ce2.images[0x1] + '±' + _0x3b2ce2.title + "\n\t\n\t*`[ " + _0x2541b9.quality + " ]`*"),
        'buttonText': {
          'displayText': _0x2541b9.size + " - " + _0x2541b9.quality
        },
        'type': 0x1
      });
    });
    const _0x2f1382 = "*☘️ 𝗧ɪᴛʟᴇ ➮* *_" + (_0x3b2ce2.title || 'N/A') + "_*\n\n*📅 𝗥ᴇʟᴇꜱᴇᴅ ᴅᴀᴛᴇ ➮* _" + (_0x3b2ce2.date || 'N/A') + "_\n*🌎 𝗖ᴏᴜɴᴛʀʏ ➮* _" + (_0x3b2ce2.country || "N/A") + "_\n*💃 𝗥ᴀᴛɪɴɢ ➮* _" + (_0x3b2ce2.rating || 'N/A') + "_\n*⏰ 𝗥ᴜɴᴛɪᴍᴇ ➮* _" + (_0x3b2ce2.duration || "N/A") + "_\n*💁‍♂️ 𝗦ᴜʙᴛɪᴛʟᴇ ʙʏ ➮* _" + (_0x3b2ce2.author || "N/A") + "_\n";
    const _0x282e26 = {
      'image': {
        'url': _0x3b2ce2.images[0x0] || images
      },
      'caption': _0x2f1382,
      'footer': config.FOOTER,
      'buttons': _0x441ab6,
      'headerType': 0x4
    };
    const _0x2636a5 = _0x3b2ce2.downloadLinks.map((_0x224559, _0x45b5e4) => {
      const _0x32a501 = (_0x224559.size + " - " + _0x224559.quality).replace(/WEBDL|WEB DL|BluRay HD|BluRay SD|BluRay FHD|Telegram BluRay SD|Telegram BluRay HD|Direct BluRay SD|Direct BluRay HD|Direct BluRay FHD|FHD|HD|SD|Telegram BluRay FHD/gi, '').trim() || "No info";
      return {
        'title': _0x32a501,
        'id': _0x142583 + ("sindl " + _0x224559.link + '±' + _0x3b2ce2.images[0x1] + '±' + _0x3b2ce2.title + "\n\t\n\t*`[ " + _0x224559.quality + " ]`*")
      };
    });
    const _0x22b798 = {
      'title': "🎬 Choose a download link :)",
      'sections': [{
        'title': "Available Links",
        'rows': _0x2636a5
      }]
    };
    if (config.BUTTON === "true") {
      await _0x82ee28.sendMessage(_0x2b7b02, {
        'image': {
          'url': _0x3b2ce2.images[0x0] || images
        },
        'caption': _0x2f1382,
        'footer': config.FOOTER,
        'buttons': [{
          'buttonId': _0x142583 + "daqt " + _0x3c4b09,
          'buttonText': {
            'displayText': "Details Send"
          },
          'type': 0x1
        }, {
          'buttonId': _0x142583 + "ch " + _0x3c4b09,
          'buttonText': {
            'displayText': "Images Send"
          },
          'type': 0x1
        }, {
          'buttonId': "download_list",
          'buttonText': {
            'displayText': "🎥 Select Option"
          },
          'type': 0x4,
          'nativeFlowInfo': {
            'name': "single_select",
            'paramsJson': JSON.stringify(_0x22b798)
          }
        }],
        'headerType': 0x1,
        'viewOnce': true
      }, {
        'quoted': _0x2f3c3a
      });
    } else {
      return await _0x82ee28.buttonMessage(_0x2b7b02, _0x282e26, _0x2f3c3a);
    }
  } catch (_0xd0c8b4) {
    _0x215411("🚫 *Error Accurated !!*\n\n" + _0xd0c8b4);
    console.log(_0xd0c8b4);
  }
});
cmd({
  'pattern': "sindl",
  'react': '⬇️',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x1a4092, _0x4fa9c1, _0x5e599, {
  from: _0x431c42,
  q: _0x10dbfa,
  isMe: _0x23d3c6,
  reply: _0xbd2ec2
}) => {
  try {
    const _0x360270 = _0x10dbfa.split('±')[0x0];
    const _0x410ee6 = _0x10dbfa.split('±')[0x1];
    const _0x6e4436 = _0x10dbfa.split('±')[0x2];
    if (_0x360270.includes("pixeldrain.com")) {
      return await _0xbd2ec2("Invalid url !!");
    }
    let _0xa27cdd = await sinhalasub_dl(_0x360270);
    const _0x9c67eb = _0xa27cdd.downloadLink.split("https://pixeldrain.com/u/")[0x1];
    const _0x2fe901 = "https://pixeldrain.com/api/file/" + _0x9c67eb;
    isUploading = true;
    const _0x3cfd63 = _0x2fe901.trim();
    const _0x3efb9f = '' + _0x410ee6;
    const _0x2cdb83 = {
      'document': {
        'url': _0x3cfd63
      },
      'caption': "*🎬 Name :* " + _0x6e4436 + "\n\n" + config.NAME,
      'mimetype': "video/mp4",
      'jpegThumbnail': await (await fetch(_0x3efb9f)).buffer(),
      'fileName': _0x6e4436 + ".mp4"
    };
    await _0x1a4092.sendMessage(_0x431c42, {
      'text': "*Uploading your movie..⬆️*"
    });
    await _0x1a4092.sendMessage(config.JID || _0x431c42, _0x2cdb83);
    await _0x1a4092.sendMessage(_0x431c42, {
      'react': {
        'text': '✔️',
        'key': _0x4fa9c1.key
      }
    });
    await _0x1a4092.sendMessage(_0x431c42, {
      'text': "*Movie send Successfull this JID " + config.JID + " ✔*"
    }, {
      'quoted': _0x4fa9c1
    });
  } catch (_0x535da9) {
    _0xbd2ec2("🚫 *Error Accurated !!*\n\n" + _0x535da9);
    console.log(_0x535da9);
  }
});
cmd({
  'pattern': "daqt",
  'alias': ["mdv"],
  'use': ".moviedl <url>",
  'react': '🎥',
  'desc': "download movies from sinhalasub.lk",
  'filename': __filename
}, async (_0x42f251, _0x3de362, _0x41a89c, {
  from: _0x44894a,
  l: _0x53d1ce,
  quoted: _0xf245a2,
  body: _0x4b8c0e,
  isCmd: _0x11fac9,
  command: _0x589019,
  args: _0x445cc0,
  q: _0x11cb63,
  isGroup: _0x2e792d,
  prefix: _0x3d87ab,
  sender: _0x2dfbd5,
  senderNumber: _0x3ebc43,
  botNumber2: _0x1474d3,
  botNumber: _0x41cb65,
  pushname: _0x2d4c1c,
  isMe: _0x304e11,
  isOwner: _0xf47a59,
  groupMetadata: _0x16859f,
  groupName: _0x516cb3,
  participants: _0x5d4a66,
  groupAdmins: _0x4743d3,
  isBotAdmins: _0x41d1a7,
  isAdmins: _0x2c058d,
  reply: _0xb3c49f
}) => {
  try {
    if (!_0x11cb63) {
      return _0xb3c49f("🚩 *Please give me a url*");
    }
    let _0x51d3ed = await sinhalasub_info(_0x11cb63);
    const _0x2d8843 = (await axios.get("https://mv-visper-full-db.pages.dev/Main/main_var.json")).data;
    const _0x47d11b = "*☘️ 𝗧ɪᴛʟᴇ ➮* *_" + (_0x51d3ed.title || "N/A") + "_*\n\n*📅 𝗥ᴇʟᴇꜱᴇᴅ ᴅᴀᴛᴇ ➮* _" + (_0x51d3ed.date || 'N/A') + "_\n*🌎 𝗖ᴏᴜɴᴛʀʏ ➮* _" + (_0x51d3ed.country || "N/A") + "_\n*💃 𝗥ᴀᴛɪɴɢ ➮* _" + (_0x51d3ed.rating || 'N/A') + "_\n*⏰ 𝗥ᴜɴᴛɪᴍᴇ ➮* _" + (_0x51d3ed.duration || "N/A") + "_\n*💁‍♂️ 𝗦ᴜʙᴛɪᴛʟᴇ ʙʏ ➮* _" + (_0x51d3ed.author || "N/A") + "_\n\n> 🌟 Follow us : *" + _0x2d8843.chlink + '*';
    await _0x42f251.sendMessage(config.JID || _0x44894a, {
      'image': {
        'url': _0x51d3ed.images[0x0] || images
      },
      'caption': _0x47d11b
    });
    await _0x42f251.sendMessage(_0x44894a, {
      'react': {
        'text': '✔️',
        'key': _0x3de362.key
      }
    });
  } catch (_0x3ceb2f) {
    console.error("Error fetching or sending", _0x3ceb2f);
    await _0x42f251.sendMessage(_0x44894a, "*Error fetching or sending *", {
      'quoted': _0x3de362
    });
  }
});
cmd({
  'pattern': "sinhalasubtv",
  'react': '🔎',
  'category': "movie",
  'alias': ["sinhalatv"],
  'desc': "sinhalasub.lk tv shows search",
  'use': ".sinhalasubtv 2025",
  'filename': __filename
}, async (_0xe0f122, _0x23f584, _0x3dfaed, {
  from: _0x23dbc5,
  q: _0x1244ca,
  prefix: _0x312a97,
  isPre: _0x46a22,
  isMe: _0x501c09,
  isSudo: _0x254760,
  isOwner: _0x312393,
  reply: _0xef3722
}) => {
  try {
    const _0x49049 = (await axios.get('https://mv-visper-full-db.pages.dev/Main/main_var.json')).data;
    const _0x101b74 = _0x49049.mvfree === "true";
    if (!_0x101b74 && !_0x501c09 && !_0x46a22) {
      await _0xe0f122.sendMessage(_0x23dbc5, {
        'react': {
          'text': '❌',
          'key': _0x3dfaed.key
        }
      });
      return await _0xe0f122.sendMessage(_0x23dbc5, {
        'text': "*`You are not a premium user⚠️`*\n\n*Send a message to one of the 2 numbers below and buy Lifetime premium 🎉.*\n\n_Price : 200 LKR ✔️_\n\n*👨‍💻Contact us : 0778500326 , 0722617699*"
      }, {
        'quoted': _0x3dfaed
      });
    }
    if (config.MV_BLOCK == "true" && !_0x501c09 && !_0x254760 && !_0x312393) {
      await _0xe0f122.sendMessage(_0x23dbc5, {
        'react': {
          'text': '❌',
          'key': _0x3dfaed.key
        }
      });
      return await _0xe0f122.sendMessage(_0x23dbc5, {
        'text': "*This command currently only works for the Bot owner. To disable it for others, use the .settings command 👨‍🔧.*"
      }, {
        'quoted': _0x3dfaed
      });
    }
    if (!_0x1244ca) {
      return await _0xef3722("*please give me text !..*");
    }
    let _0x5d9881 = await sinhalasubb_search(_0x1244ca);
    if (_0x5d9881.length === 0x0) {
      await _0xe0f122.sendMessage(_0x23dbc5, {
        'react': {
          'text': '❌',
          'key': _0x3dfaed.key
        }
      });
      return await _0xe0f122.sendMessage(_0x23dbc5, {
        'text': "*No results found ❌*"
      }, {
        'quoted': _0x3dfaed
      });
    }
    var _0x587504 = [];
    for (var _0xafbd37 = 0x0; _0xafbd37 < _0x5d9881.length; _0xafbd37++) {
      _0x587504.push({
        'title': _0x5d9881[_0xafbd37].Title.replace("Sinhala Subtitles | සිංහල උපසිරසි සමඟ", ''),
        'description': '',
        'rowId': _0x312a97 + "sintvinfo " + _0x5d9881[_0xafbd37].Link
      });
    }
    const _0x52610a = [{
      'title': "sinhalasub.lk results",
      'rows': _0x587504
    }];
    const _0x2c3b57 = {
      'text': "*_SINHALASUB TV SEARCH RESULTS 📺_*\n\n*`Input :`* " + _0x1244ca,
      'footer': config.FOOTER,
      'title': "sinhalasub.lk results 🎬",
      'buttonText': "*Reply Below Number 🔢*",
      'sections': _0x52610a
    };
    const _0x16754c = "*_SINHALASUB TV SEARCH RESULTS 📺_*\n\n*`Input :`* " + _0x1244ca;
    const _0x250eac = _0x5d9881.map((_0x201ebf, _0x5c674c) => {
      const _0x463acb = ('' + _0x5d9881[_0x5c674c].Title).replace(/WEBDL|WEB DL|BluRay HD|BluRay SD|BluRay FHD|Telegram BluRay SD|Telegram BluRay HD|Direct BluRay SD|Direct BluRay HD|Direct BluRay FHD|FHD|HD|SD|Telegram BluRay FHD/gi, '').trim() || "No info";
      return {
        'title': _0x463acb,
        'id': _0x312a97 + ("sintvinfo " + _0x5d9881[_0x5c674c].Link)
      };
    });
    const _0x4ddbdf = {
      'title': "Choose a Movie :)",
      'sections': [{
        'title': "Available Links",
        'rows': _0x250eac
      }]
    };
    if (config.BUTTON === "true") {
      await _0xe0f122.sendMessage(_0x23dbc5, {
        'image': {
          'url': config.LOGO
        },
        'caption': _0x16754c,
        'footer': config.FOOTER,
        'buttons': [{
          'buttonId': 'download_list',
          'buttonText': {
            'displayText': "🎥 Select Option"
          },
          'type': 0x4,
          'nativeFlowInfo': {
            'name': "single_select",
            'paramsJson': JSON.stringify(_0x4ddbdf)
          }
        }],
        'headerType': 0x1,
        'viewOnce': true
      }, {
        'quoted': _0x3dfaed
      });
    } else {
      await _0xe0f122.listMessage(_0x23dbc5, _0x2c3b57, _0x3dfaed);
    }
  } catch (_0x2d65bb) {
    _0xef3722("🚫 *Error Accurated !!*\n\n" + _0x2d65bb);
    console.log(_0x2d65bb);
  }
});
cmd({
  'pattern': 'sintvinfo',
  'alias': ['mdv'],
  'use': ".moviedl <url>",
  'react': '🎥',
  'desc': "download movies from sinhalasub.lk",
  'filename': __filename
}, async (_0x53631e, _0x2b571f, _0x4c73f6, {
  from: _0x3a4dfb,
  l: _0x360d4e,
  quoted: _0x5bf80e,
  body: _0x3cdd52,
  isCmd: _0x590b42,
  command: _0x4c25ff,
  args: _0x3ba672,
  q: _0x1fd2e6,
  isGroup: _0x288f35,
  prefix: _0x418b4e,
  sender: _0x17c40a,
  senderNumber: _0x1d56b5,
  botNumber2: _0x256f7b,
  botNumber: _0x4df873,
  pushname: _0x4ff2f4,
  isMe: _0xa2833d,
  isOwner: _0x2cec42,
  groupMetadata: _0x2946e6,
  groupName: _0x40f6a5,
  participants: _0x53d390,
  groupAdmins: _0x2f2c88,
  isBotAdmins: _0x2def10,
  isAdmins: _0xf1a868,
  reply: _0x336786
}) => {
  try {
    if (!_0x1fd2e6) {
      return _0x336786("🚩 *Please give me a url*");
    }
    if (!_0x1fd2e6 || !_0x1fd2e6.includes("https://sinhalasub.lk/tvshows/")) {
      console.log("Invalid input:", _0x1fd2e6);
      return await _0x336786("*❗ This is a movie, please use .mv command.*");
    }
    let _0x2f3881 = await sinhalasubtv_info(_0x1fd2e6);
    var _0x5d59b6 = [];
    _0x5d59b6.push({
      'buttonId': _0x418b4e + "dtaqt " + _0x1fd2e6,
      'buttonText': {
        'displayText': "Details send"
      },
      'type': 0x1
    });
    _0x2f3881.result.episodes.map(_0x2bb390 => {
      _0x5d59b6.push({
        'buttonId': _0x418b4e + ("sintvfirstdl " + _0x2bb390.episode_link + '+' + _0x2f3881.result.image[0x0]),
        'buttonText': {
          'displayText': '' + _0x2bb390.title
        },
        'type': 0x1
      });
    });
    const _0x54f5b3 = "*☘️ 𝗧ɪᴛʟᴇ ➮* *_" + (_0x2f3881.result.title || "N/A") + "_*\n\n*📅 𝗥ᴇʟᴇꜱᴇᴅ ᴅᴀᴛᴇ ➮* _" + (_0x2f3881.result.date || 'N/A') + "_\n*💃 𝗥ᴀᴛɪɴɢ ➮* _" + (_0x2f3881.result.imdb || 'N/A') + "_\n*💁‍♂️ 𝗦ᴜʙᴛɪᴛʟᴇ ʙʏ ➮* _" + (_0x2f3881.result.director || "N/A") + "_\n";
    const _0x4022ea = {
      'image': {
        'url': _0x2f3881.result.image[0x0] || images
      },
      'caption': _0x54f5b3,
      'footer': config.FOOTER,
      'buttons': _0x5d59b6,
      'headerType': 0x4
    };
    const _0x28ecab = _0x2f3881.result.episodes.map((_0x4eaaf1, _0x52e6b1) => {
      const _0x124b59 = ('' + _0x4eaaf1.title).replace(/WEBDL|WEB DL|BluRay HD|BluRay SD|BluRay FHD|Telegram BluRay SD|Telegram BluRay HD|Direct BluRay SD|Direct BluRay HD|Direct BluRay FHD|FHD|HD|SD|Telegram BluRay FHD/gi, '').trim() || "No info";
      return {
        'title': _0x124b59,
        'id': _0x418b4e + ("sintvfirstdl " + _0x4eaaf1.episode_link + '+' + _0x2f3881.result.image[0x0])
      };
    });
    const _0x2948f3 = {
      'title': "🎬 Choose a download link :)",
      'sections': [{
        'title': "Available Links",
        'rows': _0x28ecab
      }]
    };
    if (config.BUTTON === "true") {
      await _0x53631e.sendMessage(_0x3a4dfb, {
        'image': {
          'url': _0x2f3881.result.image[0x0] || images
        },
        'caption': _0x54f5b3,
        'footer': config.FOOTER,
        'buttons': [{
          'buttonId': _0x418b4e + "dtaqt " + _0x1fd2e6,
          'buttonText': {
            'displayText': "Details Send"
          },
          'type': 0x1
        }, {
          'buttonId': "download_list",
          'buttonText': {
            'displayText': "🎥 Select Option"
          },
          'type': 0x4,
          'nativeFlowInfo': {
            'name': "single_select",
            'paramsJson': JSON.stringify(_0x2948f3)
          }
        }],
        'headerType': 0x1,
        'viewOnce': true
      }, {
        'quoted': _0x2b571f
      });
    } else {
      return await _0x53631e.buttonMessage(_0x3a4dfb, _0x4022ea, _0x2b571f);
    }
  } catch (_0x593291) {
    _0x336786("🚫 *Error Accurated !!*\n\n" + _0x593291);
    console.log(_0x593291);
  }
});
cmd({
  'pattern': "sintvfirstdl",
  'react': '🎬',
  'alias': ['tv'],
  'desc': "Moive downloader",
  'filename': __filename
}, async (_0x2a4bcd, _0x129776, _0x4dbedd, {
  from: _0x1f897b,
  q: _0x2dadf0,
  prefix: _0x8ff32f,
  isMe: _0x52bfd8,
  reply: _0x14428f
}) => {
  try {
    if (!_0x2dadf0) {
      return await _0x14428f("*please give me text !..*");
    }
    const _0x2e2032 = _0x2dadf0.split('+')[0x0];
    const _0x11e50a = _0x2dadf0.split('+')[0x1];
    let _0x3259c4 = await sinhalasubtv_dl(_0x2e2032);
    if (_0x3259c4.length < 0x1) {
      return await _0x2a4bcd.sendMessage(_0x1f897b, {
        'text': N_FOUND
      }, {
        'quoted': _0x4dbedd
      });
    }
    var _0xb02578 = [];
    for (var _0x2e00a0 = 0x0; _0x2e00a0 < _0x3259c4.result.dl_links.length; _0x2e00a0++) {
      _0xb02578.push({
        'title': _0x3259c4.result.dl_links[_0x2e00a0].quality + " - " + _0x3259c4.result.dl_links[_0x2e00a0].size,
        'description': '',
        'rowId': _0x8ff32f + ("sintvdl " + _0x3259c4.result.dl_links[_0x2e00a0].link + '&' + _0x3259c4.result.title + '&' + _0x11e50a + '&' + _0x3259c4.result.dl_links[_0x2e00a0].quality)
      });
    }
    const _0x1411e4 = [{
      'title': '',
      'rows': _0xb02578
    }];
    const _0x5745f8 = {
      'text': "*🍟 Epishodes title :* _*" + _0x3259c4.result.title + '*_',
      'footer': config.FOOTER,
      'title': "_[cinesubz.co results 🎬]_",
      'buttonText': "*Reply below number 🔢*",
      'sections': _0x1411e4
    };
    const _0x36d877 = "*🍟 Epishodes title :* _*" + _0x3259c4.result.title + '*_';
    if (config.BUTTON === "true") {
      return await _0x2a4bcd.sendMessage(_0x1f897b, {
        'text': _0x36d877,
        'footer': config.FOOTER,
        'title': '',
        'buttonText': "📺 Select a quality",
        'sections': _0x1411e4
      }, {
        'quoted': _0x4dbedd
      });
    } else {
      await _0x2a4bcd.listMessage(_0x1f897b, _0x5745f8, _0x4dbedd);
    }
  } catch (_0x1505f4) {
    _0x14428f("🚫 *Error Accurated !!*\n\n" + _0x1505f4);
    console.log(_0x1505f4);
  }
});
cmd({
  'pattern': "sintvdl",
  'react': '⬇️',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x359971, _0x31c7bf, _0x503c4b, {
  from: _0x5cef25,
  q: _0x117379,
  isMe: _0x57cd9b,
  reply: _0x1560b2
}) => {
  if (isUploading) {
    return await _0x359971.sendMessage(_0x5cef25, {
      'text': "*A movie is already being uploaded. Please wait a while before uploading another one.* ⏳",
      'quoted': _0x31c7bf
    });
  }
  try {
    const _0x59c059 = _0x117379.split('&')[0x0];
    const _0x58cf20 = _0x117379.split('&')[0x1];
    const _0x320601 = _0x117379.split('&')[0x2];
    let _0x1d30b6 = '' + _0x59c059;
    const _0x1ad0a5 = _0x1d30b6.split("https://pixeldrain.com/u/")[0x1];
    const _0x2a6b65 = "https://pixeldrain.com/api/file/" + _0x1ad0a5;
    isUploading = true;
    const _0x2d4235 = _0x2a6b65.trim();
    const _0x1c894d = '' + _0x320601;
    const _0x4d1eb1 = {
      'document': {
        'url': _0x2d4235
      },
      'caption': "*🎬 Name :* " + _0x58cf20 + "\n\n" + config.NAME,
      'mimetype': "video/mp4",
      'jpegThumbnail': await (await fetch(_0x1c894d)).buffer(),
      'fileName': _0x58cf20 + ".mp4"
    };
    await _0x359971.sendMessage(_0x5cef25, {
      'text': "*Uploading your movie..⬆️*"
    });
    await _0x359971.sendMessage(config.JID || _0x5cef25, _0x4d1eb1);
    await _0x359971.sendMessage(_0x5cef25, {
      'react': {
        'text': '✔️',
        'key': _0x31c7bf.key
      }
    });
    await _0x359971.sendMessage(_0x5cef25, {
      'text': "*Movie send Successfull this JID " + config.JID + " ✔*"
    }, {
      'quoted': _0x31c7bf
    });
  } catch (_0x224fa2) {
    _0x1560b2("🚫 *Error Accurated !!*\n\n" + _0x224fa2);
    console.log(_0x224fa2);
  }
});
cmd({
  'pattern': 'dtaqt',
  'alias': ["mdv"],
  'use': ".moviedl <url>",
  'react': '🎥',
  'desc': "download movies from sinhalasub.lk",
  'filename': __filename
}, async (_0xd94a50, _0x195dbe, _0x2724c3, {
  from: _0x2170f6,
  l: _0x5a7b4d,
  quoted: _0x1513d1,
  body: _0x5078ac,
  isCmd: _0x45f0fc,
  command: _0x1d71e0,
  args: _0x2d37ae,
  q: _0x15c171,
  isGroup: _0xec5cee,
  prefix: _0x5b92a3,
  sender: _0x63fbec,
  senderNumber: _0x4f1b4d,
  botNumber2: _0x43e183,
  botNumber: _0x449e71,
  pushname: _0x3cb5b3,
  isMe: _0x55c180,
  isOwner: _0x31b0e9,
  groupMetadata: _0x17d25f,
  groupName: _0x11d838,
  participants: _0x2376f1,
  groupAdmins: _0x12d27a,
  isBotAdmins: _0x592809,
  isAdmins: _0x59cd93,
  reply: _0x27be18
}) => {
  try {
    if (!_0x15c171) {
      return _0x27be18("🚩 *Please give me a url*");
    }
    let _0x1266b7 = await sinhalasubtv_info(_0x15c171);
    const _0x115e52 = (await axios.get("https://mv-visper-full-db.pages.dev/Main/main_var.json")).data;
    const _0x491f2b = "*☘️ 𝗧ɪᴛʟᴇ ➮* *_" + (_0x1266b7.result.title || 'N/A') + "_*\n\n*📅 𝗥ᴇʟᴇꜱᴇᴅ ᴅᴀᴛᴇ ➮* _" + (_0x1266b7.result.date || 'N/A') + "_\n*💃 𝗥ᴀᴛɪɴɢ ➮* _" + (_0x1266b7.result.imdb || "N/A") + "_\n*💁‍♂️ 𝗦ᴜʙᴛɪᴛʟᴇ ʙʏ ➮* _" + _0x1266b7.result.director + "_\n\n> 🌟 Follow us : *" + _0x115e52.chlink + "*\n\n> _*VISPER MD MULTIDEVICE*_\n";
    await _0xd94a50.sendMessage(config.JID || _0x2170f6, {
      'image': {
        'url': _0x1266b7.result.image[0x0] || images
      },
      'caption': _0x491f2b
    });
    await _0xd94a50.sendMessage(_0x2170f6, {
      'react': {
        'text': '✔️',
        'key': _0x195dbe.key
      }
    });
  } catch (_0x3a6a41) {
    console.error("Error fetching or sending", _0x3a6a41);
    await _0xd94a50.sendMessage(_0x2170f6, "*Error fetching or sending *", {
      'quoted': _0x195dbe
    });
  }
});
cmd({
  'pattern': 'ch',
  'alias': ["mdv"],
  'use': ".moviedl <url>",
  'react': '🎥',
  'desc': "download movies from sinhalasub.lk",
  'filename': __filename
}, async (_0x11a760, _0x559466, _0x3dad7e, {
  from: _0x1d9407,
  l: _0x197e16,
  quoted: _0x5c1a7b,
  body: _0xcd0cd0,
  isCmd: _0x227b22,
  command: _0x1900d7,
  args: _0x3838a8,
  q: _0x5b0a7f,
  isGroup: _0xb31781,
  prefix: _0x3db3b8,
  sender: _0x3da18e,
  senderNumber: _0xf9fd3f,
  botNumber2: _0x4f5c68,
  botNumber: _0x51c580,
  pushname: _0x37ad00,
  isMe: _0x523e7d,
  isOwner: _0x413310,
  groupMetadata: _0x20eeb6,
  groupName: _0x3767c5,
  participants: _0x3da78e,
  groupAdmins: _0x54f122,
  isBotAdmins: _0x7c118c,
  isAdmins: _0x51a615,
  reply: _0x494eda
}) => {
  try {
    if (!_0x5b0a7f) {
      return _0x494eda("🚩 *Please give me a url*");
    }
    let _0x40857c = await sinhalasub_info(_0x5b0a7f);
    const _0x3a79fb = _0x40857c.images || [];
    _0x3a79fb.forEach(async _0x5c4eb7 => {
      await _0x11a760.sendMessage(_0x1d9407, {
        'image': {
          'url': _0x5c4eb7
        }
      }, {
        'quoted': _0x559466
      });
    });
    await _0x11a760.sendMessage(_0x1d9407, {
      'react': {
        'text': '✔️',
        'key': _0x559466.key
      }
    });
  } catch (_0x3cf64d) {
    console.error("Error fetching or sending", _0x3cf64d);
    await _0x11a760.sendMessage(_0x1d9407, "*Error fetching or sending *", {
      'quoted': _0x559466
    });
  }
});
cmd({
  'pattern': "sexfull",
  'react': '🔎',
  'category': 'movie',
  'alias': ["sexmv"],
  'desc': "sexfullmovies.sbs movie search",
  'use': ".sexfull 2025",
  'filename': __filename
}, async (_0x4fbbba, _0x2421d9, _0x3f7a4e, {
  from: _0x4567c8,
  q: _0x2e5581,
  prefix: _0x221dca,
  isPre: _0x2299e1,
  isMe: _0x495052,
  isSudo: _0x13291a,
  isOwner: _0x48878c,
  reply: _0x251eae
}) => {
  try {
    const _0x1d9fc8 = (await axios.get("https://mv-visper-full-db.pages.dev/Main/main_var.json")).data;
    const _0x2b98ee = _0x1d9fc8.mvfree === 'true';
    if (!_0x2b98ee && !_0x495052 && !_0x2299e1) {
      await _0x4fbbba.sendMessage(_0x4567c8, {
        'react': {
          'text': '❌',
          'key': _0x3f7a4e.key
        }
      });
      return await _0x4fbbba.sendMessage(_0x4567c8, {
        'text': "*`You are not a premium user⚠️`*\n\n*Send a message to one of the 2 numbers below and buy Lifetime premium 🎉.*\n\n_Price : 200 LKR ✔️_\n\n*👨‍💻Contact us : 0778500326 , 0722617699*"
      }, {
        'quoted': _0x3f7a4e
      });
    }
    if (config.MV_BLOCK == "true" && !_0x495052 && !_0x13291a && !_0x48878c) {
      await _0x4fbbba.sendMessage(_0x4567c8, {
        'react': {
          'text': '❌',
          'key': _0x3f7a4e.key
        }
      });
      return await _0x4fbbba.sendMessage(_0x4567c8, {
        'text': "*This command currently only works for the Bot owner. To disable it for others, use the .settings command 👨‍🔧.*"
      }, {
        'quoted': _0x3f7a4e
      });
    }
    if (!_0x2e5581) {
      return await _0x251eae("*please give me text !..*");
    }
    const _0x18d8a3 = await xfull_search(_0x2e5581);
    if (!_0x18d8a3 || !_0x18d8a3.data || _0x18d8a3.data.length === 0x0) {
      await _0x4fbbba.sendMessage(_0x4567c8, {
        'react': {
          'text': '❌',
          'key': _0x3f7a4e.key
        }
      });
      return await _0x4fbbba.sendMessage(_0x4567c8, {
        'text': "*No results found ❌*"
      }, {
        'quoted': _0x3f7a4e
      });
    }
    var _0x541be8 = [];
    for (var _0x36f21f = 0x0; _0x36f21f < _0x18d8a3.data.length; _0x36f21f++) {
      _0x541be8.push({
        'title': (_0x18d8a3.data[_0x36f21f].title || "No result").replace("Sinhala Subtitles | සිංහල උපසිරැසි සමඟ", '').replace("Sinhala Subtitle | සිංහල උපසිරැසි සමඟ", ''),
        'description': '',
        'rowId': _0x221dca + "sexdl " + _0x18d8a3.data[_0x36f21f].link
      });
    }
    const _0x2bc5cc = [{
      'title': "sexfullmovies.sbs results",
      'rows': _0x541be8
    }];
    const _0x9be1ee = {
      'text': "_*SEXFULL MOVIE SEARCH RESULTS 🎬*_\n\n*`Input :`* " + _0x2e5581,
      'footer': config.FOOTER,
      'title': "sexfullmovies.sbs results",
      'buttonText': "*Reply Below Number 🔢*",
      'sections': _0x2bc5cc
    };
    const _0x14c408 = "_*SEXFULL MOVIE SEARCH RESULTS 🎬*_\n\n*`Input :`* " + _0x2e5581;
    const _0x2c6f25 = _0x18d8a3.data.map((_0x2db11f, _0x3ae546) => {
      const _0x2fa7b8 = ('' + _0x18d8a3.data[_0x3ae546].title).replace(/WEBDL|WEB DL|BluRay HD|BluRay SD|BluRay FHD|Telegram BluRay SD|Telegram BluRay HD|Direct BluRay SD|Direct BluRay HD|Direct BluRay FHD|FHD|HD|SD|Telegram BluRay FHD/gi, '').trim() || "No info";
      return {
        'title': _0x2fa7b8,
        'id': _0x221dca + ("sexdl " + _0x18d8a3.data[_0x3ae546].link)
      };
    });
    const _0x5a9302 = {
      'title': "Choose a Movie :)",
      'sections': [{
        'title': "Available Links",
        'rows': _0x2c6f25
      }]
    };
    if (config.BUTTON === "true") {
      await _0x4fbbba.sendMessage(_0x4567c8, {
        'image': {
          'url': config.LOGO
        },
        'caption': _0x14c408,
        'footer': config.FOOTER,
        'buttons': [{
          'buttonId': 'download_list',
          'buttonText': {
            'displayText': "🎥 Select Option"
          },
          'type': 0x4,
          'nativeFlowInfo': {
            'name': "single_select",
            'paramsJson': JSON.stringify(_0x5a9302)
          }
        }],
        'headerType': 0x1,
        'viewOnce': true
      }, {
        'quoted': _0x3f7a4e
      });
    } else {
      await _0x4fbbba.listMessage(_0x4567c8, _0x9be1ee, _0x3f7a4e);
    }
  } catch (_0x12eee2) {
    console.log(_0x12eee2);
    await _0x4fbbba.sendMessage(_0x4567c8, {
      'text': "🚩 *Error !!*"
    }, {
      'quoted': _0x3f7a4e
    });
  }
});
cmd({
  'pattern': "sexdl",
  'react': '🎥',
  'desc': "moive downloader",
  'filename': __filename
}, async (_0x6e89ef, _0x5799ef, _0x2ebaf1, {
  from: _0xff5943,
  q: _0x10d982,
  isMe: _0x3552f0,
  prefix: _0x15b39e,
  reply: _0x586583
}) => {
  try {
    let _0x235f7f = await xfull_dl(_0x10d982);
    let _0x38e7a0 = "*☘️ 𝗧ɪᴛʟᴇ ➮* *_" + (_0x235f7f.data.title || 'N/A') + "_*\n\n*📅 𝗥ᴇʟᴇꜱᴇᴅ ᴅᴀᴛᴇ ➮* _" + (_0x235f7f.data.date || "N/A") + "_\n*🌎 𝗖ᴏᴜɴᴛʀʏ ➮* _" + (_0x235f7f.data.country || 'N/A') + "_\n*💃 𝗥ᴀᴛɪɴɢ ➮* _" + (_0x235f7f.data.imdb || "N/A") + "_\n*⏰ 𝗥ᴜɴᴛɪᴍᴇ ➮* _" + (_0x235f7f.data.runtime || "N/A") + "_\n*💁‍♂️ 𝗦ᴜʙᴛɪᴛʟᴇ ʙʏ ➮* _" + (_0x235f7f.data.subtitle_author || "N/A") + "_\n*🎭 𝗚ᴇɴᴀʀᴇꜱ ➮* " + (_0x235f7f.data.genres.join(", ") || "N/A") + "\n";
    if (_0x235f7f.length < 0x1) {
      return await _0x6e89ef.sendMessage(_0xff5943, {
        'text': "erro !"
      }, {
        'quoted': _0x2ebaf1
      });
    }
    var _0x14e3f1 = [];
    _0x14e3f1.push({
      'buttonId': _0x15b39e + "ctdetails " + _0x10d982,
      'buttonText': {
        'displayText': "_Send Details_"
      },
      'type': 0x1
    }, {
      'buttonId': _0x15b39e + "ctdetails " + _0x10d982,
      'buttonText': {
        'displayText': "_Send Images_\n"
      },
      'type': 0x1
    });
    _0x235f7f.dl_links.map(_0x125d4f => {
      _0x14e3f1.push({
        'buttonId': _0x15b39e + ("sexdll " + _0x235f7f.data.image + '±' + _0x125d4f.link + '±' + _0x235f7f.data.title + "\n\t\n\t*`[ " + _0x125d4f.quality + " ]`*"),
        'buttonText': {
          'displayText': ('' + _0x125d4f.quality).replace("WEBDL", '').replace("WEB DL", '').replace("BluRay HD", '').replace("BluRay SD", '').replace("BluRay FHD", '').replace("Telegram BluRay SD", '').replace("Telegram BluRay HD", '').replace("Direct BluRay SD", '').replace("Direct BluRay HD", '').replace("Direct BluRay FHD", '').replace("FHD", '').replace('HD', '').replace('SD', '').replace("Telegram BluRay FHD", '')
        },
        'type': 0x1
      });
    });
    const _0x4b5e66 = {
      'image': {
        'url': _0x235f7f.data.image.replace("-200x300", '')
      },
      'caption': _0x38e7a0,
      'footer': config.FOOTER,
      'buttons': _0x14e3f1,
      'headerType': 0x4
    };
    const _0xd2efd0 = _0x235f7f.dl_links.map((_0x2331b3, _0x50021d) => {
      const _0x2fd815 = ('' + _0x2331b3.quality).replace(/WEBDL|WEB DL|BluRay HD|BluRay SD|BluRay FHD|Telegram BluRay SD|Telegram BluRay HD|Direct BluRay SD|Direct BluRay HD|Direct BluRay FHD|FHD|HD|SD|Telegram BluRay FHD/gi, '').trim() || "No info";
      return {
        'title': _0x2fd815,
        'id': _0x15b39e + ("sexdll " + _0x235f7f.data.image + '±' + _0x2331b3.link + '±' + _0x235f7f.data.title + "\n\t\n\t*`[ " + _0x2331b3.quality + " ]`*")
      };
    });
    const _0x3b29f9 = {
      'title': "🎬 Choose a download link :)",
      'sections': [{
        'title': "Available Links",
        'rows': _0xd2efd0
      }]
    };
    if (config.BUTTON === "true") {
      await _0x6e89ef.sendMessage(_0xff5943, {
        'image': {
          'url': _0x235f7f.data.image.replace('-200x300', '')
        },
        'caption': _0x38e7a0,
        'footer': config.FOOTER,
        'buttons': [{
          'buttonId': _0x15b39e + "dtaqt " + _0x10d982,
          'buttonText': {
            'displayText': "Details Send"
          },
          'type': 0x1
        }, {
          'buttonId': "download_list",
          'buttonText': {
            'displayText': "🎥 Select Option"
          },
          'type': 0x4,
          'nativeFlowInfo': {
            'name': 'single_select',
            'paramsJson': JSON.stringify(_0x3b29f9)
          }
        }],
        'headerType': 0x1,
        'viewOnce': true
      }, {
        'quoted': _0x2ebaf1
      });
    } else {
      return await _0x6e89ef.buttonMessage(_0xff5943, _0x4b5e66, _0x2ebaf1);
    }
  } catch (_0x5d394a) {
    console.log(_0x5d394a);
    await _0x6e89ef.sendMessage(_0xff5943, {
      'text': "🚩 *Error !!*"
    }, {
      'quoted': _0x2ebaf1
    });
  }
});
let isUploadingggg = false;
cmd({
  'pattern': "sexdll",
  'react': '⬇️',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x2b0f50, _0xecc182, _0x21ca1f, {
  from: _0x4dc5f1,
  q: _0x5d9a08,
  isMe: _0x535edc,
  reply: _0x9c7f4e
}) => {
  if (!_0x5d9a08) {
    return await _0x9c7f4e("*Please provide a direct URL!*");
  }
  if (isUploadingggg) {
    return await _0x2b0f50.sendMessage(_0x4dc5f1, {
      'text': "*A movie is already being uploaded. Please wait a while before uploading another one.* ⏳",
      'quoted': _0xecc182
    });
  }
  try {
    isUploading = true;
    const _0x5d8514 = _0x5d9a08.split('±')[0x0];
    const _0x3d0fbd = _0x5d9a08.split('±')[0x1];
    const _0x664189 = _0x5d9a08.split('±')[0x2];
    const _0x3f96e8 = '' + _0x3d0fbd;
    const _0x3fb8bb = _0x3f96e8.trim();
    const _0x3b49ea = '' + _0x5d8514;
    await _0x2b0f50.sendMessage(_0x4dc5f1, {
      'react': {
        'text': '⬆️',
        'key': _0xecc182.key
      }
    });
    await _0x2b0f50.sendMessage(_0x4dc5f1, {
      'text': "*Uploading your movie..⬆️*"
    });
    await _0x2b0f50.sendMessage(config.JID || _0x4dc5f1, {
      'document': {
        'url': _0x3fb8bb
      },
      'caption': "*🎬 Name :* " + _0x664189 + "\n\n\n" + config.NAME,
      'mimetype': 'video/mp4',
      'jpegThumbnail': await (await fetch(_0x3b49ea)).buffer(),
      'fileName': _0x664189 + ".mp4"
    });
    await _0x2b0f50.sendMessage(_0x4dc5f1, {
      'react': {
        'text': '✔️',
        'key': _0xecc182.key
      }
    });
    await _0x2b0f50.sendMessage(_0x4dc5f1, {
      'text': "*Movie sent successfully to JID " + config.JID + " ✔*"
    }, {
      'quoted': _0xecc182
    });
  } catch (_0x4e0d5f) {
    console.error("Error fetching or sending:", _0x4e0d5f);
    await _0x2b0f50.sendMessage(_0x4dc5f1, {
      'text': "*Erro fetching this moment retry now ❗*"
    }, {
      'quoted': _0xecc182
    });
  } finally {
    isUploadingggg = false;
  }
});
cmd({
  'pattern': 'ytsmx',
  'react': '🔎',
  'category': "movie",
  'alias': ["cinesub"],
  'desc': "yts.mx movie search",
  'use': ".ytsmx 2025",
  'filename': __filename
}, async (_0x49e522, _0x4c419e, _0x4f2d41, {
  from: _0x4cf96d,
  q: _0x2992e2,
  prefix: _0x81331a,
  isMe: _0x3c1efe,
  isPre: _0x557a48,
  isSudo: _0x40ab7a,
  isOwner: _0x22ebc7,
  reply: _0x2751bb
}) => {
  try {
    const _0x45a6d0 = (await axios.get("https://mv-visper-full-db.pages.dev/Main/main_var.json")).data;
    const _0x5b62a7 = _0x45a6d0.mvfree === "true";
    if (!_0x5b62a7 && !_0x3c1efe && !_0x557a48) {
      await _0x49e522.sendMessage(_0x4cf96d, {
        'react': {
          'text': '❌',
          'key': _0x4f2d41.key
        }
      });
      return await _0x49e522.sendMessage(_0x4cf96d, {
        'text': "*`You are not a premium user⚠️`*\n\n*Send a message to one of the 2 numbers below and buy Lifetime premium 🎉.*\n\n_Price : 200 LKR ✔️_\n\n*👨‍💻Contact us : 0778500326 , 0722617699*"
      }, {
        'quoted': _0x4f2d41
      });
    }
    if (config.MV_BLOCK == "true" && !_0x3c1efe && !_0x40ab7a && !_0x22ebc7) {
      await _0x49e522.sendMessage(_0x4cf96d, {
        'react': {
          'text': '❌',
          'key': _0x4f2d41.key
        }
      });
      return await _0x49e522.sendMessage(_0x4cf96d, {
        'text': "*This command currently only works for the Bot owner. To disable it for others, use the .settings command 👨‍🔧.*"
      }, {
        'quoted': _0x4f2d41
      });
    }
    if (!_0x2992e2) {
      return await _0x2751bb("*please give me text! 👀*");
    }
    let _0x399c38 = await fetchJson('https://yts.mx/api/v2/list_movies.json?query_term=' + _0x2992e2);
    if (!_0x399c38.data || _0x399c38.data.movies.length < 0x1) {
      return await _0x49e522.sendMessage(_0x4cf96d, {
        'text': "🚫 *No movies found!*"
      }, {
        'quoted': _0x4f2d41
      });
    }
    var _0x56b23a = [];
    for (var _0x5d694b = 0x0; _0x5d694b < _0x399c38.data.movies.length; _0x5d694b++) {
      _0x56b23a.push({
        'title': _0x399c38.data.movies[_0x5d694b].title,
        'description': _0x399c38.data.movies[_0x5d694b].synopsis,
        'rowId': _0x81331a + "ytnx " + _0x399c38.data.movies[_0x5d694b].id
      });
    }
    const _0x12ca6b = [{
      'title': "ytsmx.mx results",
      'rows': _0x56b23a
    }];
    const _0xee0c26 = {
      'text': "_*YTSMX MOVIE SEARCH RESULT 🎬*_\n\n*`Input :`* " + _0x2992e2,
      'footer': config.FOOTER,
      'title': "ytsmx.mx results",
      'buttonText': "*Reply Below Number 🔢*",
      'sections': _0x12ca6b
    };
    const _0x298024 = "_*YTSMX MOVIE SEARCH RESULT 🎬*_\n\n*`Input :`* " + _0x2992e2;
    const _0x49efeb = _0x399c38.data.movies.map((_0x20d103, _0x1d7f6b) => {
      const _0x50ea6e = ('' + _0x399c38.data.movies[_0x1d7f6b].title).replace(/WEBDL|WEB DL|BluRay HD|BluRay SD|BluRay FHD|Telegram BluRay SD|Telegram BluRay HD|Direct BluRay SD|Direct BluRay HD|Direct BluRay FHD|FHD|HD|SD|Telegram BluRay FHD/gi, '').trim() || "No info";
      return {
        'title': _0x50ea6e,
        'id': _0x81331a + ("ytnx " + _0x399c38.data.movies[_0x1d7f6b].id)
      };
    });
    const _0x55668b = {
      'title': "Choose a Movie :)",
      'sections': [{
        'title': "Available Links",
        'rows': _0x49efeb
      }]
    };
    if (config.BUTTON === "true") {
      await _0x49e522.sendMessage(_0x4cf96d, {
        'image': {
          'url': config.LOGO
        },
        'caption': _0x298024,
        'footer': config.FOOTER,
        'buttons': [{
          'buttonId': "download_list",
          'buttonText': {
            'displayText': "🎥 Select Option"
          },
          'type': 0x4,
          'nativeFlowInfo': {
            'name': "single_select",
            'paramsJson': JSON.stringify(_0x55668b)
          }
        }],
        'headerType': 0x1,
        'viewOnce': true
      }, {
        'quoted': _0x4f2d41
      });
    } else {
      await _0x49e522.listMessage(_0x4cf96d, _0xee0c26, _0x4f2d41);
    }
  } catch (_0x504a5b) {
    console.log(_0x504a5b);
    await _0x49e522.sendMessage(_0x4cf96d, {
      'text': "🚩 *Error occurred while searching!*"
    }, {
      'quoted': _0x4f2d41
    });
  }
});
cmd({
  'pattern': "ytnx",
  'react': '🎥',
  'desc': "Movie downloader",
  'filename': __filename
}, async (_0x2d41dc, _0x23792c, _0x921126, {
  from: _0x4a3133,
  q: _0x2484f6,
  isMe: _0x1d45da,
  prefix: _0x5b25bb,
  reply: _0x2dbb94
}) => {
  try {
    if (!_0x2484f6) {
      return await _0x2dbb94("*Please provide the movie URL!*");
    }
    const _0xd6efd8 = "https://yts.mx/api/v2/movie_details.json?movie_id=" + _0x2484f6;
    let _0x3382a7 = await fetchJson(_0xd6efd8);
    if (!_0x3382a7.data || !_0x3382a7.data.movie) {
      return await _0x2d41dc.sendMessage(_0x4a3133, {
        'text': "🚫 *No movie details found!*"
      }, {
        'quoted': _0x921126
      });
    }
    let _0x32b6b1 = _0x3382a7.data.movie;
    let _0x5d0ede = "*☘️ 𝗧ɪᴛʟᴇ ➮* *_" + _0x32b6b1.title + "_*\n\n*📅 𝗥ᴇʟᴇꜱᴇᴅ ᴅᴀᴛᴇ ➮* _" + _0x32b6b1.year + "_\n*🌎 𝗖ᴏᴜɴᴛʀʏ ➮* _" + (_0x32b6b1.country || "N/A") + "_\n*💃 𝗥ᴀᴛɪɴɢ ➮* _" + (_0x32b6b1.rating || 'N/A') + "_\n*⏰ 𝗥ᴜɴᴛɪᴍᴇ ➮* _" + (_0x32b6b1.runtime || "N/A") + "_\n*🎭 𝗚ᴇɴᴀʀᴇꜱ ➮* _" + _0x32b6b1.genres.join(", ") + "_\n";
    if (_0x32b6b1.torrents.length < 0x1) {
      return await _0x2d41dc.sendMessage(_0x4a3133, {
        'text': "🚫 *No torrents available for this movie!*"
      }, {
        'quoted': _0x921126
      });
    }
    var _0x53e76d = [];
    _0x53e76d.push({
      'buttonId': _0x5b25bb + "ytsmxdet " + _0x32b6b1.id,
      'buttonText': {
        'displayText': "Details send"
      },
      'type': 0x1
    });
    _0x32b6b1.torrents.forEach(_0x8206ab => {
      _0x53e76d.push({
        'buttonId': _0x5b25bb + ("torren " + _0x32b6b1.small_cover_image + '±' + _0x8206ab.hash + '±' + _0x32b6b1.title + "\n\t\n\t*`[ " + _0x8206ab.quality + " ]`*"),
        'buttonText': {
          'displayText': _0x8206ab.size + " - " + _0x8206ab.quality
        },
        'type': 0x1
      });
    });
    const _0x4c8f2a = {
      'image': {
        'url': _0x32b6b1.large_cover_image
      },
      'caption': _0x5d0ede,
      'footer': config.FOOTER,
      'buttons': _0x53e76d,
      'headerType': 0x4
    };
    const _0x332001 = _0x32b6b1.torrents.map((_0x4ab9a9, _0x372ab6) => {
      const _0x42b23d = (_0x4ab9a9.size + " - " + _0x4ab9a9.quality).replace(/WEBDL|WEB DL|BluRay HD|BluRay SD|BluRay FHD|Telegram BluRay SD|Telegram BluRay HD|Direct BluRay SD|Direct BluRay HD|Direct BluRay FHD|FHD|HD|SD|Telegram BluRay FHD/gi, '').trim() || "No info";
      return {
        'title': _0x42b23d,
        'id': _0x5b25bb + ("torren " + _0x32b6b1.small_cover_image + '±' + _0x4ab9a9.hash + '±±' + _0x32b6b1.title + "\n\t\n\t*`[ " + _0x4ab9a9.quality + " ]`*")
      };
    });
    const _0x356528 = {
      'title': "🎬 Choose a download link :)",
      'sections': [{
        'title': "Available Links",
        'rows': _0x332001
      }]
    };
    if (config.BUTTON === "true") {
      await _0x2d41dc.sendMessage(_0x4a3133, {
        'image': {
          'url': _0x32b6b1.large_cover_image
        },
        'caption': _0x5d0ede,
        'footer': config.FOOTER,
        'buttons': [{
          'buttonId': _0x5b25bb + "ytsmxdet " + _0x32b6b1.id,
          'buttonText': {
            'displayText': "Details Send"
          },
          'type': 0x1
        }, {
          'buttonId': 'download_list',
          'buttonText': {
            'displayText': "🎥 Select Option"
          },
          'type': 0x4,
          'nativeFlowInfo': {
            'name': "single_select",
            'paramsJson': JSON.stringify(_0x356528)
          }
        }],
        'headerType': 0x1,
        'viewOnce': true
      }, {
        'quoted': _0x921126
      });
    } else {
      return await _0x2d41dc.buttonMessage(_0x4a3133, _0x4c8f2a, _0x921126);
    }
  } catch (_0x388e61) {
    console.log(_0x388e61);
    await _0x2d41dc.sendMessage(_0x4a3133, {
      'text': "🚩 *Error occurred while processing!*"
    }, {
      'quoted': _0x921126
    });
  }
});
cmd({
  'pattern': "torren",
  'react': '⬇️',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x9bd3da, _0x5aac11, _0x29f871, {
  from: _0xb137b6,
  q: _0x1f401d,
  reply: _0x32424a
}) => {
  try {
    const _0x2c0855 = _0x1f401d.split('±')[0x0];
    const _0x29b58b = _0x1f401d.split('±')[0x1];
    const _0x31bf2d = _0x1f401d.split('±')[0x2];
    const _0x22deab = config.SEEDR_MAIL;
    const _0x764578 = config.SEEDR_PASSWORD;
    if (!_0x22deab || _0x764578.length === 0x0) {
      await _0x9bd3da.sendMessage(_0xb137b6, {
        'react': {
          'text': '❌',
          'key': _0x5aac11.key
        }
      });
      return await _0x9bd3da.sendMessage(_0xb137b6, {
        'text': "*Please add Seedr account mail and password ❗*\n\n_💁‍♂️ How to create a Seedr account :_\n\n*📍 Use these commands to add a Seedr account for the bot:*\n\n🧩 .setmail *Your Seedr account email*\n\n🧩 .setpassword *Your Seedr account password*"
      }, {
        'quoted': _0x5aac11
      });
    }
    const _0x385a1f = new Seedr();
    try {
      await _0x385a1f.login(_0x22deab, _0x764578);
    } catch (_0x54f733) {
      await _0x9bd3da.sendMessage(_0xb137b6, {
        'react': {
          'text': '❌',
          'key': _0x5aac11.key
        }
      });
      return await _0x9bd3da.sendMessage(_0xb137b6, {
        'text': "*Can't login to Seedr. Try again ❌*"
      }, {
        'quoted': _0x5aac11
      });
    }
    await _0x9bd3da.sendMessage(_0xb137b6, {
      'text': "*Seedr account login sucssess ☑️*"
    });
    const _0x2b719a = 'magnet:?xt=urn:btih:' + _0x29b58b;
    const _0x3a09c9 = await _0x385a1f.addMagnet(_0x2b719a);
    if (!_0x3a09c9 || !_0x3a09c9.result) {
      throw new Error("Failed to add magnet URL.");
    }
    const _0x214996 = await _0x385a1f.getVideos();
    if (!_0x214996 || _0x214996.length === 0x0) {
      throw new Error("No videos found for the provided magnet URL.");
    }
    for (const _0x3bb7fd of _0x214996) {
      for (const _0x11080b of _0x3bb7fd) {
        try {
          const _0x1a5c18 = await _0x385a1f.getFile(_0x11080b.id);
          const _0x6f0938 = _0x1a5c18.url;
          if (!_0x6f0938 || typeof _0x6f0938 !== "string") {
            throw new Error("Invalid download link received.");
          }
          const _0x1b6b11 = '' + _0x2c0855;
          await _0x9bd3da.sendMessage(_0xb137b6, {
            'react': {
              'text': '⬆️',
              'key': _0x5aac11.key
            }
          });
          await _0x9bd3da.sendMessage(_0xb137b6, {
            'text': "*Uploading your movie..⬆️*"
          });
          await _0x9bd3da.sendMessage(config.JID || _0xb137b6, {
            'document': {
              'url': _0x6f0938
            },
            'mimetype': 'video/mp4',
            'fileName': _0x31bf2d + ".mp4",
            'jpegThumbnail': await (await fetch(_0x1b6b11)).buffer(),
            'caption': "*🎬 Name :* " + _0x31bf2d + "\n\n\n" + config.NAME
          });
          await _0x9bd3da.sendMessage(_0xb137b6, {
            'react': {
              'text': '✔️',
              'key': _0x5aac11.key
            }
          });
          await _0x9bd3da.sendMessage(_0xb137b6, {
            'text': "*Movie sent successfully to JID " + config.JID + " ✔*"
          }, {
            'quoted': _0x5aac11
          });
        } catch (_0x4d5a93) {
          console.error("Error uploading file: " + _0x4d5a93.message);
          await _0x9bd3da.sendMessage(_0xb137b6, {
            'text': "❌ Failed to upload file: " + _0x4d5a93.message
          }, {
            'quoted': _0x5aac11
          });
        }
      }
    }
  } catch (_0x3014fd) {
    await _0x9bd3da.sendMessage(_0xb137b6, {
      'react': {
        'text': '❌',
        'key': _0x5aac11.key
      }
    });
    console.error(_0x3014fd);
    _0x32424a("❌ *Error Occurred!!*\n\n" + _0x3014fd.message);
  }
});
cmd({
  'pattern': 'ytsmxdet',
  'react': '🎥',
  'desc': "moive downloader",
  'filename': __filename
}, async (_0x7bd60e, _0x10ceea, _0x293b5f, {
  from: _0x14e1d4,
  q: _0x3ebc3a,
  isMe: _0x5d9daf,
  reply: _0x41dd7c
}) => {
  try {
    if (!_0x3ebc3a) {
      return await _0x41dd7c("*please give me text !..*");
    }
    const _0x596c71 = "https://yts.mx/api/v2/movie_details.json?movie_id=" + _0x3ebc3a;
    let _0x325cf9 = await fetchJson(_0x596c71);
    if (!_0x325cf9.data || !_0x325cf9.data.movie) {
      return await _0x7bd60e.sendMessage(_0x14e1d4, {
        'text': "🚫 *No movie details found!*"
      }, {
        'quoted': _0x293b5f
      });
    }
    let _0x3e54cd = _0x325cf9.data.movie;
    const _0x25e775 = (await axios.get("https://mv-visper-full-db.pages.dev/Main/main_var.json")).data;
    let _0x17148f = "*☘️ 𝗧ɪᴛʟᴇ ➮* *_" + _0x3e54cd.title + "_*\n\n*📅 𝗥ᴇʟᴇꜱᴇᴅ ᴅᴀᴛᴇ ➮* _" + _0x3e54cd.year + "_\n*🌎 𝗖ᴏᴜɴᴛʀʏ ➮* _" + (_0x3e54cd.country || 'N/A') + "_\n*💃 𝗥ᴀᴛɪɴɢ ➮* _" + (_0x3e54cd.rating || "N/A") + "_\n*⏰ 𝗥ᴜɴᴛɪᴍᴇ ➮* _" + (_0x3e54cd.runtime || "N/A") + "_\n*🎭 𝗚ᴇɴᴀʀᴇꜱ ➮* _" + _0x3e54cd.genres.join(", ") + "_\n\n> 🌟 Follow us : *" + _0x25e775.chlink + '*';
    await _0x7bd60e.sendMessage(config.JID || _0x14e1d4, {
      'image': {
        'url': _0x3e54cd.large_cover_image
      },
      'caption': _0x17148f
    });
    await _0x7bd60e.sendMessage(_0x14e1d4, {
      'react': {
        'text': '✔️',
        'key': _0x293b5f.key
      }
    });
  } catch (_0x2bfefc) {
    console.error("Error fetching or sending", _0x2bfefc);
    await _0x7bd60e.sendMessage(_0x14e1d4, "*Error fetching or sending *", {
      'quoted': _0x293b5f
    });
  }
});
cmd({
  'pattern': 'animeheaven',
  'react': '🔎',
  'category': 'movie',
  'desc': "Animeheaven movie search",
  'use': ".animeheaven 2025",
  'filename': __filename
}, async (_0x4b6e83, _0x4a7a26, _0x53d37d, {
  from: _0x2ee9b1,
  q: _0x1292f3,
  prefix: _0x1d6d97,
  isMe: _0x1cf081,
  isSudo: _0x2c998a,
  isPre: _0x3ed6d8,
  isOwner: _0x52eebf,
  reply: _0x8729bc
}) => {
  try {
    const _0x15f693 = (await axios.get("https://mv-visper-full-db.pages.dev/Main/main_var.json")).data;
    const _0xff20de = _0x15f693.mvfree === "true";
    if (!_0xff20de && !_0x1cf081 && !_0x3ed6d8) {
      await _0x4b6e83.sendMessage(_0x2ee9b1, {
        'react': {
          'text': '❌',
          'key': _0x53d37d.key
        }
      });
      return await _0x4b6e83.sendMessage(_0x2ee9b1, {
        'text': "*`You are not a premium user⚠️`*\n\n*Send a message to one of the 2 numbers below and buy Lifetime premium 🎉.*\n\n_Price : 200 LKR ✔️_\n\n*👨‍💻Contact us : 0778500326 , 0722617699*"
      }, {
        'quoted': _0x53d37d
      });
    }
    if (config.MV_BLOCK == "true" && !_0x1cf081 && !_0x2c998a && !_0x52eebf) {
      await _0x4b6e83.sendMessage(_0x2ee9b1, {
        'react': {
          'text': '❌',
          'key': _0x53d37d.key
        }
      });
      return await _0x4b6e83.sendMessage(_0x2ee9b1, {
        'text': "*This command currently only works for the Bot owner. To disable it for others, use the .settings command 👨‍🔧.*"
      }, {
        'quoted': _0x53d37d
      });
    }
    if (!_0x1292f3) {
      return await _0x8729bc("*please give me text !..*");
    }
    let _0x3277da = await search(_0x1292f3);
    var _0x11342b = [];
    for (var _0x47d615 = 0x0; _0x47d615 < _0x3277da.length; _0x47d615++) {
      _0x11342b.push({
        'title': _0x3277da[_0x47d615].title,
        'description': '',
        'rowId': _0x1d6d97 + ("animeheinfo " + _0x3277da[_0x47d615].link)
      });
    }
    const _0x3abf69 = [{
      'title': "https://animeheaven.me results",
      'rows': _0x11342b
    }];
    const _0x3b0bb8 = {
      'text': "*_ANIMEHEAVEN MOVIE SEARCH RESULT 🎬_*\n\n*`Input :`* " + _0x1292f3,
      'footer': config.FOOTER,
      'title': "https://animeheaven.me results",
      'buttonText': "*Reply Below Number 🔢*",
      'sections': _0x3abf69
    };
    const _0x173a99 = "*_ANIMEHEAVEN MOVIE SEARCH RESULT 🎬_*\n\n*`Input :`* " + _0x1292f3;
    const _0x28caa9 = _0x3277da.map((_0x53922f, _0x162e96) => {
      const _0xff9a1e = ('' + _0x3277da[_0x162e96].title).replace(/WEBDL|WEB DL|BluRay HD|BluRay SD|BluRay FHD|Telegram BluRay SD|Telegram BluRay HD|Direct BluRay SD|Direct BluRay HD|Direct BluRay FHD|FHD|HD|SD|Telegram BluRay FHD/gi, '').trim() || "No info";
      return {
        'title': _0xff9a1e,
        'id': _0x1d6d97 + ("animeheinfo " + _0x3277da[_0x162e96].link)
      };
    });
    const _0x273b56 = {
      'title': "Choose a Movie :)",
      'sections': [{
        'title': "Available Links",
        'rows': _0x28caa9
      }]
    };
    if (config.BUTTON === 'true') {
      await _0x4b6e83.sendMessage(_0x2ee9b1, {
        'image': {
          'url': config.LOGO
        },
        'caption': _0x173a99,
        'footer': config.FOOTER,
        'buttons': [{
          'buttonId': "download_list",
          'buttonText': {
            'displayText': "🎥 Select Option"
          },
          'type': 0x4,
          'nativeFlowInfo': {
            'name': "single_select",
            'paramsJson': JSON.stringify(_0x273b56)
          }
        }],
        'headerType': 0x1,
        'viewOnce': true
      }, {
        'quoted': _0x53d37d
      });
    } else {
      await _0x4b6e83.listMessage(_0x2ee9b1, _0x3b0bb8, _0x53d37d);
    }
  } catch (_0x410bc2) {
    console.log(_0x410bc2);
    await _0x4b6e83.sendMessage(_0x2ee9b1, {
      'text': "🚩 *Error !!*"
    }, {
      'quoted': _0x53d37d
    });
  }
});
cmd({
  'pattern': 'animeheinfo',
  'react': '🎥',
  'desc': "moive downloader",
  'filename': __filename
}, async (_0x1b8743, _0xd6e355, _0x524446, {
  from: _0x206d43,
  q: _0x950096,
  isMe: _0x55606e,
  isSudo: _0x4e124f,
  isOwner: _0xba1d61,
  prefix: _0x321869,
  reply: _0x54d588
}) => {
  try {
    let _0x242a66 = await fetchJson("https://sadas-animeheaven-get-ep.vercel.app/api/episodes?url=" + _0x950096);
    let _0x1e2e70 = "*☘️ 𝗧ɪᴛʟᴇ ➮* *_" + (_0x242a66.info.title || "N/A") + "_*\n\n*📅 𝗥ᴇʟᴇꜱᴇᴅ ᴅᴀᴛᴇ ➮* _" + (_0x242a66.info.date || "N/A") + "_\n*💃 𝗥ᴀᴛɪɴɢ ➮* _" + (_0x242a66.info.imdb || 'N/A') + '_';
    if (_0x242a66.length < 0x1) {
      return await _0x1b8743.sendMessage(_0x206d43, {
        'text': "erro !"
      }, {
        'quoted': _0x524446
      });
    }
    var _0x732937 = [];
    _0x732937.push({
      'buttonId': _0x321869 + ("hed " + _0x950096),
      'buttonText': {
        'displayText': "Details send"
      },
      'type': 0x1
    });
    _0x242a66.episodes.map(_0x3f0e27 => {
      _0x732937.push({
        'buttonId': _0x321869 + ("directdlanime " + _0x242a66.info.image + '±' + _0x3f0e27.link + '±' + _0x242a66.info.title),
        'buttonText': {
          'displayText': '' + _0x3f0e27.episode
        },
        'type': 0x1
      });
    });
    const _0x4cec38 = {
      'image': {
        'url': _0x242a66.info.image
      },
      'caption': _0x1e2e70,
      'footer': config.FOOTER,
      'buttons': _0x732937,
      'headerType': 0x4
    };
    const _0x12fdbf = _0x242a66.episodes.map((_0x2cdf1a, _0x4ca53d) => {
      const _0x5651b0 = ('' + _0x2cdf1a.episode).replace(/WEBDL|WEB DL|BluRay HD|BluRay SD|BluRay FHD|Telegram BluRay SD|Telegram BluRay HD|Direct BluRay SD|Direct BluRay HD|Direct BluRay FHD|FHD|HD|SD|Telegram BluRay FHD/gi, '').trim() || "No info";
      return {
        'title': _0x5651b0,
        'id': _0x321869 + ("directdlanime " + _0x242a66.info.image + '±' + _0x2cdf1a.link + '±' + _0x242a66.info.title)
      };
    });
    const _0x43cfdf = {
      'title': "🎬 Choose a download link:",
      'sections': [{
        'title': "Available Links",
        'rows': _0x12fdbf
      }]
    };
    if (config.BUTTON === "true") {
      await _0x1b8743.sendMessage(_0x206d43, {
        'image': {
          'url': _0x242a66.info.image
        },
        'caption': _0x1e2e70,
        'footer': config.FOOTER,
        'buttons': [{
          'buttonId': _0x321869 + "hed " + _0x950096,
          'buttonText': {
            'displayText': "Details Send"
          },
          'type': 0x1
        }, {
          'buttonId': "download_list",
          'buttonText': {
            'displayText': "🎥 Select Option"
          },
          'type': 0x4,
          'nativeFlowInfo': {
            'name': 'single_select',
            'paramsJson': JSON.stringify(_0x43cfdf)
          }
        }],
        'headerType': 0x1,
        'viewOnce': true
      }, {
        'quoted': _0x524446
      });
    } else {
      return await _0x1b8743.buttonMessage(_0x206d43, _0x4cec38, _0x524446);
    }
  } catch (_0x12156d) {
    console.log(_0x12156d);
    await _0x1b8743.sendMessage(_0x206d43, {
      'text': "🚩 *Error !!*"
    }, {
      'quoted': _0x524446
    });
  }
});
cmd({
  'pattern': "directdlanime",
  'react': '🍟',
  'alias': ['dn'],
  'desc': "Direct Downloader",
  'category': 'movie',
  'use': ".download < Direct Link >",
  'dontAddCommandList': false,
  'filename': __filename
}, async (_0x389c42, _0x1c0807, _0x4b3f4c, {
  from: _0x23b66a,
  q: _0x559a49,
  sender: _0x58c7e6,
  reply: _0x4615bb
}) => {
  try {
    const [_0x379faf, _0xb1e791, _0x16c6f8] = _0x559a49.split('±');
    if (!_0x379faf || !_0xb1e791 || !_0x16c6f8) {
      return _0x4615bb("❌ Format Error. Use: `image±link±title`");
    }
    const _0x2bf403 = _0xb1e791.split("id=")[0x1];
    if (!_0x2bf403) {
      return _0x4615bb("❗ Invalid link, missing ID.");
    }
    const _0x55d98f = await fetchJson("https://sadas-anime-dl.vercel.app/api/download-links?id=" + _0x2bf403);
    console.log(_0x55d98f);
    if (!_0x55d98f.downloadUrl || typeof _0x55d98f.downloadUrl !== 'string') {
      return _0x4615bb("❌ Download link not found or malformed from API.");
    }
    const _0x3bb7cc = _0x55d98f.downloadUrl.trim();
    const _0x55ab0e = /^(https?:\/\/[^\s]+)/;
    if (!_0x55ab0e.test(_0x3bb7cc)) {
      return _0x4615bb("❗ දීලා තියෙන URL එක වැරදි. කරුණාකර link එක හොඳින් බලන්න.");
    }
    await _0x389c42.sendMessage(_0x23b66a, {
      'react': {
        'text': '⬇️',
        'key': _0x1c0807.key
      }
    });
    const _0x44fd99 = await axios.get(_0x3bb7cc, {
      'headers': {
        'User-Agent': "Mozilla/5.0",
        'Accept': "*/*",
        'Referer': "https://animeheaven.me/",
        'Origin': 'https://animeheaven.me'
      }
    });
    await _0x389c42.sendMessage(config.JID || _0x23b66a, {
      'document': {
        'url': _0x44fd99.data
      },
      'fileName': _0x16c6f8 + ".mp4",
      'jpegThumbnail': await (await fetch(_0x379faf)).buffer(),
      'mimetype': 'video/mp4',
      'caption': "*🎬 Name :* " + _0x16c6f8 + "\n\n" + config.NAME
    });
    await _0x389c42.sendMessage(_0x23b66a, {
      'react': {
        'text': '✔️',
        'key': _0x1c0807.key
      }
    });
    await _0x389c42.sendMessage(_0x23b66a, {
      'text': "*Movie sent successfully to JID " + (config.JID || _0x23b66a) + " ✔*"
    }, {
      'quoted': _0x1c0807
    });
  } catch (_0x42bf17) {
    console.error(_0x42bf17);
    _0x4615bb("❗ Error downloading file: " + _0x42bf17.message);
  }
});
cmd({
  'pattern': "hed",
  'react': '🎥',
  'desc': "moive downloader",
  'filename': __filename
}, async (_0x68739b, _0x519008, _0x5936f9, {
  from: _0x2e2b99,
  q: _0x2731db,
  isMe: _0x184b2e,
  reply: _0x19414e
}) => {
  try {
    if (!_0x2731db) {
      return await _0x19414e("*please give me text !..*");
    }
    let _0x27fcdd = await getep(_0x2731db);
    const _0x5ef16f = (await axios.get("https://mv-visper-full-db.pages.dev/Main/main_var.json")).data;
    let _0x5720a3 = "*☘️ 𝗧ɪᴛʟᴇ ➮* *_" + (_0x27fcdd.result.title || "N/A") + "_*\n\n*📅 𝗥ᴇʟᴇꜱᴇᴅ ᴅᴀᴛᴇ ➮* _" + (_0x27fcdd.result.date || "N/A") + "_\n*💃 𝗥ᴀᴛɪɴɢ ➮* _" + (_0x27fcdd.result.imdb || "N/A") + "_\n\n> 🌟 Follow us : *" + _0x5ef16f.chlink + '*';
    await _0x68739b.sendMessage(config.JID || _0x2e2b99, {
      'image': {
        'url': _0x27fcdd.result.image
      },
      'caption': _0x5720a3
    });
    await _0x68739b.sendMessage(_0x2e2b99, {
      'react': {
        'text': '✔️',
        'key': _0x5936f9.key
      }
    });
  } catch (_0x3470d6) {
    console.error("Error fetching or sending", _0x3470d6);
    await _0x68739b.sendMessage(_0x2e2b99, "*Error fetching or sending *", {
      'quoted': _0x5936f9
    });
  }
});
cmd({
  'pattern': "slanimetv",
  'react': '🔎',
  'category': "movie",
  'alias': ["ctv"],
  'desc': "cinesubz.co tv shows search",
  'use': ".cinetv  2025",
  'filename': __filename
}, async (_0x285886, _0x2da7bd, _0x4a6b83, {
  from: _0x402893,
  q: _0xa6261e,
  prefix: _0x3dc581,
  isMe: _0x1c5f97,
  reply: _0x20790e
}) => {
  try {
    const _0x45a131 = (await axios.get('https://mv-visper-full-db.pages.dev/Main/main_var.json')).data;
    const _0x253e79 = _0x45a131.mvfree === "true";
    if (!_0x253e79 && !_0x1c5f97 && !isPre) {
      await _0x285886.sendMessage(_0x402893, {
        'react': {
          'text': '❌',
          'key': _0x4a6b83.key
        }
      });
      return await _0x285886.sendMessage(_0x402893, {
        'text': "*`You are not a premium user⚠️`*\n\n*Send a message to one of the 2 numbers below and buy Lifetime premium 🎉.*\n\n_Price : 200 LKR ✔️_\n\n*👨‍💻Contact us : 0778500326 , 0722617699*"
      }, {
        'quoted': _0x4a6b83
      });
    }
    if (config.MV_BLOCK == 'true' && !_0x1c5f97 && !isSudo && !isOwner) {
      await _0x285886.sendMessage(_0x402893, {
        'react': {
          'text': '❌',
          'key': _0x4a6b83.key
        }
      });
      return await _0x285886.sendMessage(_0x402893, {
        'text': "*This command currently only works for the Bot owner. To disable it for others, use the .settings command 👨‍🔧.*"
      }, {
        'quoted': _0x4a6b83
      });
    }
    if (!_0xa6261e) {
      return await _0x20790e("*please give me tv shows name !..*");
    }
    const _0x201019 = await slanimeclub_search(_0xa6261e);
    if (!_0x201019 || !_0x201019.data || _0x201019.data.length === 0x0) {
      await _0x285886.sendMessage(_0x402893, {
        'react': {
          'text': '❌',
          'key': _0x4a6b83.key
        }
      });
      return await _0x285886.sendMessage(_0x402893, {
        'text': "*No results found ❌*"
      }, {
        'quoted': _0x4a6b83
      });
    }
    var _0x31597b = [];
    for (var _0x50e430 = 0x0; _0x50e430 < _0x201019.data.length; _0x50e430++) {
      _0x31597b.push({
        'title': _0x201019.data[_0x50e430].title.replace("Sinhala Subtitles | සිංහල උපසිරැසි සමඟ", '').replace("Sinhala Subtitle | සිංහල උපසිරැසි සමඟ", '') || "Result not found",
        'description': '',
        'rowId': _0x3dc581 + "slanimeinfo " + _0x201019.data[_0x50e430].link
      });
    }
    const _0x1e87e3 = [{
      'title': "slanimeclub.co results",
      'rows': _0x31597b
    }];
    const _0x416c9e = {
      'text': "_*SLANIME TV SHOWS RESULTS 📺*_\n\n*`Input :`* " + _0xa6261e,
      'footer': config.FOOTER,
      'title': "slanimeclub.co results",
      'buttonText': "*Reply Below Number 🔢*",
      'sections': _0x1e87e3
    };
    const _0x3d00cd = "_*SLANIME TV SHOWS RESULTS 📺*_\n\n*`Input :` " + _0xa6261e;
    const _0x2bc4c7 = _0x201019.data.map((_0x51f4d5, _0x34fee9) => {
      const _0x3012ba = ('' + _0x201019.data[_0x34fee9].title).replace(/WEBDL|WEB DL|BluRay HD|BluRay SD|BluRay FHD|Telegram BluRay SD|Telegram BluRay HD|Direct BluRay SD|Direct BluRay HD|Direct BluRay FHD|FHD|HD|SD|Telegram BluRay FHD/gi, '').trim() || "No info";
      return {
        'title': _0x3012ba,
        'id': _0x3dc581 + ("slanimeinfo " + _0x201019.data[_0x34fee9].link)
      };
    });
    const _0x3491fb = {
      'title': "Choose a Movie :)",
      'sections': [{
        'title': "Available Links",
        'rows': _0x2bc4c7
      }]
    };
    if (config.BUTTON === "true") {
      await _0x285886.sendMessage(_0x402893, {
        'image': {
          'url': config.LOGO
        },
        'caption': _0x3d00cd,
        'footer': config.FOOTER,
        'buttons': [{
          'buttonId': "download_list",
          'buttonText': {
            'displayText': "🎥 Select Option"
          },
          'type': 0x4,
          'nativeFlowInfo': {
            'name': "single_select",
            'paramsJson': JSON.stringify(_0x3491fb)
          }
        }],
        'headerType': 0x1,
        'viewOnce': true
      }, {
        'quoted': _0x4a6b83
      });
    } else {
      await _0x285886.listMessage(_0x402893, _0x416c9e, _0x4a6b83);
    }
  } catch (_0x4a5da3) {
    console.log(_0x4a5da3);
    await _0x285886.sendMessage(_0x402893, {
      'text': "🚩 *Error !!*"
    }, {
      'quoted': _0x4a6b83
    });
  }
});
cmd({
  'pattern': "slanimeinfo",
  'react': '🎥',
  'desc': "moive downloader",
  'filename': __filename
}, async (_0x46c429, _0x1c804f, _0x258f3d, {
  from: _0x5b1c8c,
  q: _0x580174,
  isMe: _0x291dfe,
  prefix: _0x55bd3c,
  reply: _0x526de2
}) => {
  try {
    let _0x415277 = await slanimeclub_ep(_0x580174);
    console.log("Scraped Data:", _0x415277);
    let _0x17478b = "*🍟 Title :* _" + (_0x415277.title || "N/A") + "_\n\n*📅 First air date :* _" + (_0x415277.first_air_date || "N/A") + "_\n*📅 Last air date :* _" + (_0x415277.last_air_date || "N/A") + "_\n*🔢 Ep count :* _" + (_0x415277.episode_count || "N/A") + "_\n*🏆 Tmdb vote :* _" + (_0x415277.tmdbRate || "N/A") + "_\n*🥇Tmdb vote count :* _" + (_0x415277.tmdbVoteCount || "N/A") + "_\n*💁‍♂️ Director :* _" + (_0x415277.director || "N/A") + "_\n*🎭 Genres :* _" + (_0x415277.category || "N/A") + "_\n";
    if (_0x415277.length < 0x1) {
      return await _0x46c429.sendMessage(_0x5b1c8c, {
        'text': "erro !"
      }, {
        'quoted': _0x258f3d
      });
    }
    var _0x53c407 = [];
    _0x53c407.push({
      'buttonId': _0x55bd3c + "slanimedet " + _0x580174,
      'buttonText': {
        'displayText': "Send Details"
      },
      'type': 0x1
    });
    _0x415277.episodes.map(_0x317516 => {
      _0x53c407.push({
        'buttonId': _0x55bd3c + ("slanimedl " + _0x317516.link + '&' + _0x415277.title + '&' + _0x415277.mainImage + '&' + _0x317516.number),
        'buttonText': {
          'displayText': '' + _0x317516.number
        },
        'type': 0x1
      });
    });
    const _0x47fa7c = {
      'image': {
        'url': _0x415277.mainImage.replace("-200x300", '')
      },
      'caption': _0x17478b,
      'footer': config.FOOTER,
      'buttons': _0x53c407,
      'headerType': 0x4
    };
    const _0x228bc3 = _0x415277.episodes.map((_0x310915, _0x463d34) => {
      const _0x1c6c5e = ('' + _0x310915.number).replace(/WEBDL|WEB DL|BluRay HD|BluRay SD|BluRay FHD|Telegram BluRay SD|Telegram BluRay HD|Direct BluRay SD|Direct BluRay HD|Direct BluRay FHD|FHD|HD|SD|Telegram BluRay FHD/gi, '').trim() || "No info";
      return {
        'title': _0x1c6c5e,
        'id': _0x55bd3c + ("slanimedl " + _0x310915.link + '&' + _0x415277.title + '&' + _0x415277.mainImage + '&' + _0x310915.number)
      };
    });
    const _0x1ded87 = {
      'title': "🎬 Choose a epishodes",
      'sections': [{
        'title': "Available Links",
        'rows': _0x228bc3
      }]
    };
    if (config.BUTTON === "true") {
      await _0x46c429.sendMessage(_0x5b1c8c, {
        'image': {
          'url': _0x415277.mainImage.replace("-200x300", '')
        },
        'caption': _0x17478b,
        'footer': config.FOOTER,
        'buttons': [{
          'buttonId': _0x55bd3c + "slanimedet " + _0x580174,
          'buttonText': {
            'displayText': "Details Send"
          },
          'type': 0x1
        }, {
          'buttonId': "download_list",
          'buttonText': {
            'displayText': "🎥 Select Option"
          },
          'type': 0x4,
          'nativeFlowInfo': {
            'name': 'single_select',
            'paramsJson': JSON.stringify(_0x1ded87)
          }
        }],
        'headerType': 0x1,
        'viewOnce': true
      }, {
        'quoted': _0x258f3d
      });
    } else {
      return await _0x46c429.buttonMessage(_0x5b1c8c, _0x47fa7c, _0x258f3d);
    }
  } catch (_0x2ab1ee) {
    console.log(_0x2ab1ee);
    await _0x46c429.sendMessage(_0x5b1c8c, {
      'text': "🚩 *Error !!*"
    }, {
      'quoted': _0x258f3d
    });
  }
});
async function resizeImage(_0x341fe9, _0x3b5e69, _0x1fdbb6) {
  try {
    return await sharp(_0x341fe9).resize(_0x3b5e69, _0x1fdbb6).toBuffer();
  } catch (_0x4e9c22) {
    console.error("Error resizing image:", _0x4e9c22);
    return _0x341fe9;
  }
}
async function GDriveDl(_0x3bf549) {
  let _0x69dbe5;
  let _0x4f92ff = {
    'error': true
  };
  if (!(_0x3bf549 && _0x3bf549.match(/drive\.google/i))) {
    return _0x4f92ff;
  }
  const _0x3cba2a = sizeFormatter({
    'std': "JEDEC",
    'decimalPlaces': 0x2,
    'keepTrailingZeroes': false,
    'render': (_0x5b6db8, _0xfc23f4) => _0x5b6db8 + " " + _0xfc23f4 + 'B'
  });
  try {
    _0x69dbe5 = (_0x3bf549.match(/\/?id=(.+)/i) || _0x3bf549.match(/\/d\/(.*?)\//))[0x1];
    if (!_0x69dbe5) {
      throw "ID Not Found";
    }
    _0x4f92ff = await fetch("https://drive.google.com/uc?id=" + _0x69dbe5 + '&authuser=0&export=download', {
      'method': 'post',
      'headers': {
        'accept-encoding': "gzip, deflate, br",
        'content-length': 0x0,
        'Content-Type': "application/x-www-form-urlencoded;charset=UTF-8",
        'origin': 'https://drive.google.com',
        'user-agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36",
        'x-client-data': "CKG1yQEIkbbJAQiitskBCMS2yQEIqZ3KAQioo8oBGLeYygE=",
        'x-drive-first-party': "DriveWebUi",
        'x-json-requested': "true"
      }
    });
    let {
      fileName: _0x939035,
      sizeBytes: _0x3b0dbe,
      downloadUrl: _0x25d27c
    } = JSON.parse((await _0x4f92ff.text()).slice(0x4));
    if (!_0x25d27c) {
      throw "Link Download Limit!";
    }
    let _0x1a0309 = await fetch(_0x25d27c);
    if (_0x1a0309.status !== 0xc8) {
      return _0x1a0309.statusText;
    }
    return {
      'downloadUrl': _0x25d27c,
      'fileName': _0x939035,
      'fileSize': _0x3cba2a(_0x3b0dbe),
      'mimetype': _0x1a0309.headers.get("content-type")
    };
  } catch (_0x1b1745) {
    console.log(_0x1b1745);
    return _0x4f92ff;
  }
}
cmd({
  'pattern': "slanimedl",
  'react': '🎥',
  'desc': "Movie downloader",
  'filename': __filename
}, async (_0x431c79, _0x33351a, _0x51786d, {
  from: _0x3fbbd1,
  q: _0x2166ea,
  reply: _0x45e983
}) => {
  try {
    if (!_0x2166ea) {
      return _0x45e983("Error: Missing required parameters.");
    }
    const _0x4c8397 = _0x2166ea.split('&');
    if (_0x4c8397.length < 0x4) {
      return _0x45e983("Error: Incorrect command format. Ensure you provide all required details.");
    }
    const [_0x467ee0, _0x53e581, _0x19dae4, _0x32e04a] = _0x4c8397;
    const _0x29c2a1 = await (await fetch(_0x19dae4)).buffer();
    const _0x46286 = await resizeImage(_0x29c2a1, 0xc8, 0xc8);
    const _0x142e46 = await slanimeclub_dl(_0x467ee0);
    if (!_0x142e46?.[0x0]?.["detailLink"]) {
      return _0x45e983("No valid download link found. Please check the URL.");
    }
    const _0x2bb691 = _0x142e46[0x0].detailLink.trim();
    await _0x431c79.sendMessage(_0x3fbbd1, {
      'react': {
        'text': '⬆️',
        'key': _0x51786d.key
      }
    });
    await _0x431c79.sendMessage(_0x3fbbd1, {
      'text': "*Uploading your movie..⬆️*"
    });
    let _0x2bd51d;
    if (_0x2bb691.startsWith("https://slanimeclub.co/")) {
      _0x2bd51d = _0x2bb691;
    } else {
      if (_0x2bb691.startsWith("https://drive.google.com/")) {
        const _0x28a36a = await GDriveDl(_0x2bb691);
        if (_0x28a36a.error) {
          return _0x45e983(_0x28a36a.error);
        }
        _0x2bd51d = _0x28a36a.downloadUrl;
      } else {
        return _0x45e983("Unsupported link type.");
      }
    }
    await _0x431c79.sendMessage(config.JID || _0x3fbbd1, {
      'document': {
        'url': _0x2bd51d
      },
      'caption': "*🎬 Name:* " + _0x53e581 + "\n*EP -* " + _0x32e04a + "\n\n" + config.NAME,
      'mimetype': 'video/mp4',
      'jpegThumbnail': _0x46286,
      'fileName': _0x53e581 + '.mp4'
    });
  } catch (_0xe52396) {
    console.error("Error occurred:", _0xe52396);
    await _0x431c79.sendMessage(_0x3fbbd1, {
      'text': "🚩 *Error !!*"
    }, {
      'quoted': _0x51786d
    });
  }
});
cmd({
  'pattern': "slanimedet",
  'react': '🎥',
  'desc': "moive downloader",
  'filename': __filename
}, async (_0x5429ae, _0x570e52, _0x45fc7c, {
  from: _0x1cafcc,
  q: _0x4f9ef7,
  isMe: _0x4675a4,
  reply: _0x1ca296
}) => {
  try {
    if (!_0x4f9ef7) {
      return await _0x1ca296("*please give me text !..*");
    }
    let _0x130896 = await slanimeclub_ep(_0x4f9ef7);
    const _0x55def0 = (await axios.get("https://mv-visper-full-db.pages.dev/Main/main_var.json")).data;
    let _0x2db6f1 = "*☘️ 𝗧ɪᴛʟᴇ ➮* *_" + (_0x130896.title || "N/A") + "_*\n\n*💃 𝗥ᴀᴛɪɴɢ ➮* _" + (_0x130896.tmdbRate || 'N/A') + "_\n*🎭 𝗚ᴇɴᴀʀᴇꜱ ➮* _" + (_0x130896.category.join(", ") || "N/A") + "_\n\n> 🌟 Follow us : *" + _0x55def0.chlink + '*';
    await _0x5429ae.sendMessage(config.JID || _0x1cafcc, {
      'image': {
        'url': _0x130896.mainImage.replace("-200x300", '')
      },
      'caption': _0x2db6f1
    });
    await _0x5429ae.sendMessage(_0x1cafcc, {
      'react': {
        'text': '✔️',
        'key': _0x45fc7c.key
      }
    });
  } catch (_0x24575b) {
    console.error("Error fetching or sending", _0x24575b);
    await _0x5429ae.sendMessage(_0x1cafcc, "*Error fetching or sending *", {
      'quoted': _0x45fc7c
    });
  }
});
