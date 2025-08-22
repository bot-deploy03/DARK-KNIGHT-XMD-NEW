const config = require("../config");
const axios = require("axios");
const apkdl = require("../lib/apkdl");
const cheerio = require('cheerio');
const {
  phsearch,
  phdl
} = require("darksadas-yt-pornhub-scrape");
const {
  File
} = require("megajs");
const {
  sizeFormatter
} = require("human-readable");
;
const {
  getBuffer,
  getGroupAdmins,
  getRandom,
  getsize,
  h2k,
  isUrl,
  Json,
  runtime,
  sleep,
  fetchJson
} = require('../lib/functions');
const {
  cmd,
  commands
} = require("../command");
const yts = require("ytsearch-venom");
const g_i_s = require("g-i-s");
const fetch = (..._0x51f612) => import("node-fetch").then(({
  default: _0x55fe04
}) => _0x55fe04(..._0x51f612));
const sharp = require('sharp');
async function resizeImage(_0x4abe1e, _0x1b5a3a, _0x42f639) {
  try {
    return await sharp(_0x4abe1e).resize(_0x1b5a3a, _0x42f639).toBuffer();
  } catch (_0x2b2906) {
    console.error("Error resizing image:", _0x2b2906);
    return _0x4abe1e;
  }
}
let wm = config.FOOTER;
async function ytmp3(_0x47aa6) {
  try {
    const _0x1aae57 = await axios.get("https://p.oceansaver.in/ajax/download.php?format=mp3&url=" + _0x47aa6);
    const _0x14375f = await axios.get("https://p.oceansaver.in/api/progress?id=" + _0x1aae57.data.id);
    return _0x14375f.data;
  } catch (_0x4e4b32) {
    console.error("Error fetching data:", _0x4e4b32);
    throw _0x4e4b32;
  }
}
async function GDriveDl(_0x48d212) {
  let _0x5b37f3;
  let _0x48d7f0 = {
    'error': true
  };
  if (!(_0x48d212 && _0x48d212.match(/drive\.google/i))) {
    return _0x48d7f0;
  }
  const _0x5b3522 = sizeFormatter({
    'std': "JEDEC",
    'decimalPlaces': 0x2,
    'keepTrailingZeroes': false,
    'render': (_0x278032, _0x2ef0c6) => _0x278032 + " " + _0x2ef0c6 + 'B'
  });
  try {
    _0x5b37f3 = (_0x48d212.match(/\/?id=(.+)/i) || _0x48d212.match(/\/d\/(.*?)\//))[0x1];
    if (!_0x5b37f3) {
      throw "ID Not Found";
    }
    _0x48d7f0 = await fetch("https://drive.google.com/uc?id=" + _0x5b37f3 + '&authuser=0&export=download', {
      'method': "post",
      'headers': {
        'accept-encoding': "gzip, deflate, br",
        'content-length': 0x0,
        'Content-Type': "application/x-www-form-urlencoded;charset=UTF-8",
        'origin': "https://drive.google.com",
        'user-agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36",
        'x-client-data': "CKG1yQEIkbbJAQiitskBCMS2yQEIqZ3KAQioo8oBGLeYygE=",
        'x-drive-first-party': "DriveWebUi",
        'x-json-requested': 'true'
      }
    });
    let {
      fileName: _0x1fcf2a,
      sizeBytes: _0x498c77,
      downloadUrl: _0x27a681
    } = JSON.parse((await _0x48d7f0.text()).slice(0x4));
    if (!_0x27a681) {
      throw "Link Download Limit!";
    }
    let _0x127946 = await fetch(_0x27a681);
    if (_0x127946.status !== 0xc8) {
      return _0x127946.statusText;
    }
    return {
      'downloadUrl': _0x27a681,
      'fileName': _0x1fcf2a,
      'fileSize': _0x5b3522(_0x498c77),
      'mimetype': _0x127946.headers.get('content-type')
    };
  } catch (_0x4d5052) {
    console.log(_0x4d5052);
    return _0x48d7f0;
  }
}
cmd({
  'pattern': "gdrive",
  'alias': ["googledrive'"],
  'react': "🗃️",
  'desc': "Download googledrive files.",
  'category': 'download',
  'use': ".gdrive <googledrive link>",
  'filename': __filename
}, async (_0xe91fdc, _0x11cfb5, _0xf7ed64, {
  from: _0x1c3fcd,
  l: _0x572e5c,
  quoted: _0xd3a91e,
  body: _0x5a0071,
  isCmd: _0x46cdfb,
  command: _0x3d563b,
  args: _0x5ad6de,
  q: _0x4f50da,
  isGroup: _0x2d66f2,
  sender: _0x2affa9,
  senderNumber: _0x59d9ed,
  botNumber2: _0x5635a9,
  botNumber: _0x66ce16,
  pushname: _0x4843cb,
  isMe: _0x1ccf4b,
  isOwner: _0xd7d02,
  groupMetadata: _0x4eecc3,
  groupName: _0x59dbea,
  participants: _0x3efa15,
  groupAdmins: _0x2011c5,
  isBotAdmins: _0x396e3e,
  isAdmins: _0x176c6d,
  reply: _0x48f9de
}) => {
  try {
    if (!_0x4f50da) {
      return await _0x48f9de("*Please give me googledrive url !!*");
    }
    let _0x252606 = await GDriveDl(_0x4f50da);
    let _0xd40659 = "*`🗃️ DARK-KNIGHT MD GDRIVE DOWNLODER 🗃️`*\n\n*┌────────────────*\n*├ 🗃️ Name :* " + _0x252606.fileName + "\n*├ ⏩ Type :* " + _0x252606.fileSize + "\n*├ 📁 Size :* " + _0x252606.mimetype + "\n*└────────────────*";
    await _0x48f9de(_0xd40659);
    _0xe91fdc.sendMessage(_0x1c3fcd, {
      'document': {
        'url': _0x252606.downloadUrl
      },
      'fileName': _0x252606.fileName,
      'mimetype': _0x252606.mimetype
    }, {
      'quoted': _0x11cfb5
    });
  } catch (_0x3e1b76) {
    _0x48f9de("*Error !!*");
    console.log(_0x3e1b76);
  }
});
cmd({
  'pattern': 'mega',
  'react': '📄',
  'alias': ["megadl", "meganz"],
  'desc': "Mega.nz files download",
  'category': 'download',
  'use': ".mega url",
  'filename': __filename
}, async (_0x39ad0e, _0x14d8a5, _0x3f14cb, {
  from: _0x3df2f2,
  q: _0x3722cb,
  reply: _0x1481cc
}) => {
  if (!_0x3722cb) {
    return await _0x1481cc("*Please provide a mega.nz URL!*");
  }
  try {
    const _0x883ca4 = File.fromURL(_0x3722cb);
    await _0x883ca4.loadAttributes();
    const _0x3b7278 = await _0x883ca4.downloadBuffer();
    let _0x152438 = 'application/octet-stream';
    if (/mp4$/i.test(_0x883ca4.name)) {
      _0x152438 = "video/mp4";
    } else {
      if (/pdf$/i.test(_0x883ca4.name)) {
        _0x152438 = "application/pdf";
      } else {
        if (/zip$/i.test(_0x883ca4.name)) {
          _0x152438 = "application/zip";
        } else {
          if (/rar$/i.test(_0x883ca4.name)) {
            _0x152438 = "application/x-rar-compressed";
          } else {
            if (/7z$/i.test(_0x883ca4.name)) {
              _0x152438 = "application/x-7z-compressed";
            } else {
              if (/jpe?g$/i.test(_0x883ca4.name)) {
                _0x152438 = "image/jpeg";
              } else if (/png$/i.test(_0x883ca4.name)) {
                _0x152438 = 'image/png';
              }
            }
          }
        }
      }
    }
    await _0x1481cc("*⏩ Downloaded file:* " + _0x883ca4.name);
    await _0x39ad0e.sendMessage(_0x3df2f2, {
      'document': _0x3b7278,
      'mimetype': _0x152438,
      'filename': '' + _0x883ca4.name
    }, {
      'quoted': _0x14d8a5
    });
    await _0x39ad0e.sendMessage(_0x3df2f2, {
      'react': {
        'text': '✔️',
        'key': _0x14d8a5.key
      }
    });
  } catch (_0x54d0f2) {
    console.error(_0x54d0f2);
    await _0x1481cc("❌ *Error:* " + (_0x54d0f2.message || _0x54d0f2));
  }
});
function ytreg(_0x160ba3) {
  const _0x3dc161 = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/;
  return _0x3dc161.test(_0x160ba3);
}
cmd({
  'pattern': "yts",
  'alias': ["ytsearch"],
  'use': ".yts lelena",
  'react': '🔎',
  'desc': "Search songs",
  'category': "download",
  'filename': __filename
}, async (_0x1b690e, _0xf8f41d, _0x2cafd2, {
  from: _0xca449c,
  l: _0x5ad657,
  quoted: _0x1208e8,
  body: _0x3c7698,
  isCmd: _0x12896e,
  command: _0x184b57,
  args: _0x3df54c,
  q: _0x2d5841,
  isGroup: _0x2bf159,
  sender: _0x55d79d,
  senderNumber: _0x25be22,
  botNumber2: _0xedf6ea,
  botNumber: _0x192548,
  pushname: _0x2ae33d,
  isMe: _0x5d9a5a,
  isOwner: _0x23ad48,
  groupMetadata: _0x597db7,
  groupName: _0x36f40f,
  participants: _0x4a05ad,
  groupAdmins: _0x569e97,
  isBotAdmins: _0x190329,
  isAdmins: _0x5b6ce6,
  reply: _0x2150f2
}) => {
  try {
    if (!_0x2d5841) {
      return await _0x2150f2(imgmsg);
    }
    if (isUrl(_0x2d5841) && !ytreg(_0x2d5841)) {
      return await _0x2150f2(imgmsg);
    }
    try {
      let _0x5ce6a7 = require("ytsearch-venom");
      var _0x1335ce = await _0x5ce6a7(_0x2d5841);
    } catch (_0x30f585) {
      _0x5ad657(_0x30f585);
      return await _0x1b690e.sendMessage(_0xca449c, {
        'text': "*Error !!*"
      }, {
        'quoted': _0xf8f41d
      });
    }
    var _0x1c3ee8 = '';
    _0x1335ce.all.map(_0x369d73 => {
      _0x1c3ee8 += " *🖲️" + _0x369d73.title + "*\n🔗 " + _0x369d73.url + "\n\n";
    });
    await _0x1b690e.sendMessage(_0xca449c, {
      'text': _0x1c3ee8
    }, {
      'quoted': _0xf8f41d
    });
  } catch (_0x579912) {
    _0x5ad657(_0x579912);
    _0x2150f2("*Error !!*");
  }
});
cmd({
  'pattern': 'song',
  'alias': ["ytsong"],
  'use': ".song <query or url>",
  'react': '🎧',
  'desc': "Download high-quality songs from YouTube",
  'category': "Download",
  'filename': __filename
}, async (_0x229510, _0x12bae0, _0x2b3915, {
  from: _0x417f98,
  prefix: _0x2723d0,
  q: _0x1643d8,
  reply: _0x2b0550
}) => {
  try {
    if (!_0x1643d8) {
      return await _0x2b0550("🔎 *Please provide a song name or YouTube link!*");
    }
    const _0x408e94 = _0x1643d8.replace(/\?si=[^&]*/, '');
    const _0x2b2783 = await yts(_0x408e94);
    const _0x50b0e3 = _0x2b2783.videos[0x0];
    const _0x1f2f20 = config.FOOTER;
    let _0xc24ba = "*🎶 DARK-KNIGHT MD SONG DOWNLODER 🎶*\n\n*┌─────────────────────┐*\n*├ 🎶 Title : " + _0x50b0e3.title + "* \n*├ 🐼 Views : " + _0x50b0e3.views + "*\n*├ ⌛ Duration : " + _0x50b0e3.duration + "*\n*├ 📎 URL : " + _0x50b0e3.url + "*\n*└─────────────────────┘*";
    const _0x216331 = [{
      'buttonId': _0x2723d0 + "ytaa " + _0x50b0e3.url,
      'buttonText': {
        'displayText': "```AUDIO FORMAT 🎶```"
      },
      'type': 0x1
    }, {
      'buttonId': _0x2723d0 + "ytad " + _0x50b0e3.url + '&' + _0x50b0e3.thumbnail + '&' + _0x50b0e3.title,
      'buttonText': {
        'displayText': "```DOCUMENT FORMAT 📂```"
      },
      'type': 0x1
    }];
    const _0x132128 = {
      'image': {
        'url': _0x50b0e3.thumbnail
      },
      'caption': _0xc24ba,
      'footer': _0x1f2f20,
      'buttons': _0x216331,
      'headerType': 0x4
    };
    const _0xc6e234 = {
      'title': "𝐂𝐥𝐢𝐜𝐤 𝐇𝐞𝐫𝐞 ⎙",
      'sections': [{
        'title': "Audio Formats 🎶",
        'rows': [{
          'title': "Audio Format",
          'description': "Send as audio (music)",
          'id': _0x2723d0 + "ytaa " + _0x50b0e3.url
        }, {
          'title': "Document Format",
          'description': "Send as document file",
          'id': _0x2723d0 + "ytad " + _0x50b0e3.url + '&' + _0x50b0e3.thumbnail + '&' + _0x50b0e3.title
        }, {
          'title': "Voice Note",
          'description': "Send as voice message",
          'id': _0x2723d0 + "ytaap " + _0x50b0e3.url
        }]
      }]
    };
    if (config.BUTTON === "true") {
      return await _0x229510.sendMessage(_0x417f98, {
        'image': {
          'url': _0x50b0e3.thumbnail
        },
        'caption': _0xc24ba,
        'footer': config.FOOTER,
        'buttons': [{
          'buttonId': "Song formats list",
          'buttonText': {
            'displayText': "🎥 Select Option"
          },
          'type': 0x4,
          'nativeFlowInfo': {
            'name': "single_select",
            'paramsJson': JSON.stringify(_0xc6e234)
          }
        }],
        'headerType': 0x1,
        'viewOnce': true
      }, {
        'quoted': _0x12bae0
      });
    } else if (config.BUTTON === "false") {
      await _0x229510.buttonMessage(_0x417f98, _0x132128, _0x12bae0);
    }
  } catch (_0x50f8d6) {
    console.error(_0x50f8d6);
    _0x2b0550("❌ *Song not found or an error occurred.*");
  }
});
cmd({
  'pattern': "song2",
  'alias': ["ytsong2"],
  'use': ".song2 <query/url>",
  'react': '🎧',
  'desc': "Download songs",
  'category': "download",
  'filename': __filename
}, async (_0x13555f, _0x2a6d, _0x411a8f, {
  from: _0x20ce62,
  prefix: _0x141e3c,
  quoted: _0x2ce051,
  body: _0x42aeab,
  isCmd: _0x1372e7,
  command: _0x54b4ac,
  args: _0x5c4770,
  q: _0x245237,
  isGroup: _0x159539,
  sender: _0x5bb970,
  senderNumber: _0x57f5c3,
  botNumber2: _0x36ca08,
  botNumber: _0x1754bc,
  pushname: _0x5d76e5,
  isMe: _0x66a037,
  isOwner: _0xd5048e,
  groupMetadata: _0x32d28d,
  groupName: _0x5a7a39,
  participants: _0x2df660,
  groupAdmins: _0x168724,
  isBotAdmins: _0x3b81a5,
  isAdmins: _0x1394cc,
  reply: _0xcdfcb6
}) => {
  try {
    if (!_0x245237) {
      return await _0xcdfcb6("*Please enter a query or a URL!*");
    }
    const _0x5db991 = _0x245237.replace(/\?si=[^&]*/, '');
    const _0x5a058d = await yts(_0x5db991);
    const _0x4c416d = _0x5a058d.videos[0x0];
    const _0xcebc53 = config.FOOTER;
    let _0x56ea4f = "🎶 *DARK-KNIGHT MD SONG DOWNLOADER* 🎶\n\n┌────────────────────┐\n│ 🎵 *Title:* " + _0x4c416d.title + "\n│ 👁️ *Views:* " + _0x4c416d.views + "\n│ ⏱️ *Duration:* " + _0x4c416d.duration + "\n│ 🔗 *URL:* " + _0x4c416d.url + "\n└────────────────────┘";
    await _0x13555f.sendMessage(_0x20ce62, {
      'image': {
        'url': _0x4c416d.thumbnail
      },
      'caption': _0x56ea4f
    });
    const _0x5f04a2 = await fetchJson("https://sadas-ytmp3-5.vercel.app/convert?link=" + _0x4c416d.url);
    const _0xa48e21 = _0x5f04a2?.["url"];
    if (!_0xa48e21) {
      return await _0xcdfcb6("*Failed to get audio link.*");
    }
    await _0x13555f.sendMessage(_0x20ce62, {
      'audio': {
        'url': _0xa48e21
      },
      'mimetype': "audio/mpeg"
    }, {
      'quoted': _0x2a6d
    });
    const _0x36c39f = await fetch(_0x4c416d.thumbnail);
    const _0x5c604c = await _0x36c39f.buffer();
    const _0x3eaade = await resizeImage(_0x5c604c, 0xc8, 0xc8);
    await _0x13555f.sendMessage(_0x20ce62, {
      'document': {
        'url': _0xa48e21
      },
      'jpegThumbnail': _0x3eaade,
      'caption': _0xcebc53,
      'mimetype': "audio/mpeg",
      'fileName': _0x4c416d.title + ".mp3"
    }, {
      'quoted': _0x2a6d
    });
  } catch (_0x13e606) {
    console.error(_0x13e606);
    await _0xcdfcb6("❌ Error: Could not process the request.");
  }
});
cmd({
  'pattern': "ytaa",
  'react': '⬇️',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x211dce, _0x23e11c, _0x2dc950, {
  from: _0x19c307,
  q: _0x179bbf,
  reply: _0x268f74
}) => {
  if (!_0x179bbf) {
    return await _0x268f74("*Need a youtube url!*");
  }
  try {
    const _0x43c362 = await fetchJson("https://sadas-ytmp3-5.vercel.app/convert?link=" + _0x179bbf);
    await _0x211dce.sendMessage(_0x19c307, {
      'react': {
        'text': '⬆️',
        'key': _0x23e11c.key
      }
    });
    await _0x211dce.sendMessage(_0x19c307, {
      'audio': {
        'url': _0x43c362.url
      },
      'mimetype': 'audio/mpeg'
    }, {
      'quoted': _0x23e11c
    });
    await _0x211dce.sendMessage(_0x19c307, {
      'react': {
        'text': '✔️',
        'key': _0x23e11c.key
      }
    });
  } catch (_0x49fb5b) {
    _0x268f74(N_FOUND);
    console.log(_0x49fb5b);
  }
});
cmd({
  'pattern': "ytaap",
  'react': '⬇️',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x3ce063, _0x38ce6a, _0x49d350, {
  from: _0x41c808,
  q: _0x6df8ce,
  reply: _0x12f59e
}) => {
  if (!_0x6df8ce) {
    return await _0x12f59e("*Need a youtube url!*");
  }
  try {
    const _0x20fa63 = await fetchJson('https://sadas-ytmp3-5.vercel.app/convert?link=' + _0x6df8ce);
    await _0x3ce063.sendMessage(_0x41c808, {
      'react': {
        'text': '⬆️',
        'key': _0x38ce6a.key
      }
    });
    await _0x3ce063.sendMessage(_0x41c808, {
      'audio': {
        'url': _0x20fa63.url
      },
      'mimetype': "audio/mpeg",
      'ptt': true
    }, {
      'quoted': _0x38ce6a
    });
    await _0x3ce063.sendMessage(_0x41c808, {
      'react': {
        'text': '✔️',
        'key': _0x38ce6a.key
      }
    });
  } catch (_0x3d9e62) {
    _0x12f59e(N_FOUND);
    console.log(_0x3d9e62);
  }
});
cmd({
  'pattern': "ytad",
  'react': '⬇️',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x21686d, _0x116c28, _0x5cbb50, {
  from: _0x1170b1,
  q: _0xca9030,
  reply: _0x5e2d30
}) => {
  try {
    if (!_0xca9030) {
      return await _0x5e2d30("*Need a youtube url!*");
    }
    const _0x117a81 = _0xca9030.split('&')[0x0];
    const _0xc335d7 = _0xca9030.split('&')[0x1];
    const _0x4e96f0 = _0xca9030.split('&')[0x2];
    const _0x5dcb6f = await fetch(_0xc335d7);
    const _0x3b578e = await _0x5dcb6f.buffer();
    const _0x50e9cf = await resizeImage(_0x3b578e, 0xc8, 0xc8);
    const _0x4f85b0 = await fetchJson("https://sadas-ytmp3-5.vercel.app/convert?link=" + _0x117a81);
    await _0x21686d.sendMessage(_0x1170b1, {
      'react': {
        'text': '⬆️',
        'key': _0x116c28.key
      }
    });
    await _0x21686d.sendMessage(_0x1170b1, {
      'document': {
        'url': _0x4f85b0.url
      },
      'jpegThumbnail': _0x50e9cf,
      'caption': config.FOOTER,
      'mimetype': "audio/mpeg",
      'caption': wm,
      'fileName': '' + _0x4e96f0
    }, {
      'quoted': _0x116c28
    });
    await _0x21686d.sendMessage(_0x1170b1, {
      'react': {
        'text': '✔️',
        'key': _0x116c28.key
      }
    });
  } catch (_0x29c86d) {
    console.log(_0x29c86d);
  }
});
cmd({
  'pattern': "directmp3",
  'react': '⬇️',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x5aabc6, _0x51f797, _0x3ce4bf, {
  from: _0x17fc50,
  q: _0x47d5b2,
  reply: _0x56cb50
}) => {
  try {
    if (!_0x47d5b2) {
      return await _0x56cb50("*Need a youtube url!*");
    }
    await _0x5aabc6.sendMessage(_0x17fc50, {
      'react': {
        'text': '⬆️',
        'key': _0x51f797.key
      }
    });
    const _0x1500fa = await _0x5aabc6.sendMessage(_0x17fc50, {
      'text': "*Uploading request ..⬆️*"
    }, {
      'quoted': _0x51f797
    });
    await _0x5aabc6.sendMessage(_0x17fc50, {
      'audio': {
        'url': _0x47d5b2
      },
      'caption': config.FOOTER,
      'mimetype': 'audio/mpeg',
      'caption': wm,
      'fileName': 'test.mp3'
    });
    await _0x5aabc6.sendMessage(_0x17fc50, {
      'delete': _0x1500fa.key
    });
    await _0x5aabc6.sendMessage(_0x17fc50, {
      'react': {
        'text': '✔️',
        'key': _0x51f797.key
      }
    });
  } catch (_0x1a7842) {
    console.log(_0x1a7842);
  }
});
cmd({
  'pattern': "tiktok",
  'alias': ['tt', "ttdl", "tiktokdl"],
  'react': '🎩',
  'desc': "Download tiktok videos",
  'category': 'download',
  'use': ".tiktok < tiktok url >",
  'filename': __filename
}, async (_0x3d7817, _0x370ab6, _0x43c5bc, {
  from: _0x1f59d8,
  l: _0x3477d4,
  prefix: _0x599c19,
  quoted: _0x1f161b,
  body: _0x466854,
  isCmd: _0xe904d3,
  command: _0x2e525d,
  args: _0x3e94ec,
  q: _0x245190,
  isGroup: _0x5683e5,
  sender: _0x26d481,
  senderNumber: _0x4f88cf,
  botNumber2: _0x38a1a2,
  botNumber: _0x5700fa,
  pushname: _0xb25750,
  isMe: _0x20af2e,
  isOwner: _0x4de358,
  groupMetadata: _0x385f1e,
  groupName: _0x36b23,
  participants: _0x52dfaa,
  groupAdmins: _0x46b4e5,
  isBotAdmins: _0x54cb61,
  isAdmins: _0x2082b0,
  reply: _0x366254
}) => {
  try {
    if (!_0x245190) {
      return await _0x366254('TEXT');
    }
    if (!_0x245190.includes("tiktok")) {
      return await _0x366254("valid_url");
    }
    const _0x3bb64f = await fetchJson("https://darksadasyt-tiktokdl.vercel.app/api/tiktok?q=" + _0x245190);
    let _0x540355 = "*`🪺 DARK-KNIGHT MD TIK TOK DOWNLODER 🪺`*\n\n*┌──────────────────*\n*├ 🎩 Title :* " + _0x3bb64f.title + "\n*├ 🎃 Region :* " + _0x3bb64f.regions + "\n*├ ⏰ Duration :* " + _0x3bb64f.runtime + "\n*├ 🔗 Url:* " + _0x245190 + "\n*└──────────────────*\n";
    const _0x17cdc8 = [{
      'buttonId': _0x599c19 + "ttdl1 " + _0x3bb64f.no_watermark,
      'buttonText': {
        'displayText': "_Video No Watermark 📼_"
      },
      'type': 0x1
    }, {
      'buttonId': _0x599c19 + "ttdl2 " + _0x3bb64f.watermark,
      'buttonText': {
        'displayText': "_Video Watermark 📼_"
      },
      'type': 0x1
    }, {
      'buttonId': _0x599c19 + "ttdl3 " + _0x3bb64f.music,
      'buttonText': {
        'displayText': "_Audio 🎶_"
      },
      'type': 0x1
    }];
    const _0x5f2124 = {
      'image': {
        'url': _0x3bb64f.thumbnail
      },
      'caption': _0x540355,
      'footer': config.FOOTER,
      'buttons': _0x17cdc8,
      'headerType': 0x4
    };
    const _0x43d3c9 = {
      'title': "𝐂𝐥𝐢𝐜𝐤 𝐇𝐞𝐫𝐞 ⎙",
      'sections': [{
        'title': "Tiktok Video Type 📽️",
        'rows': [{
          'title': "Video No Watermark",
          'description': "No Watermark",
          'id': _0x599c19 + "ttdl1 " + _0x3bb64f.no_watermark
        }, {
          'title': "Video Watermark",
          'description': "With Watermark",
          'id': _0x599c19 + "ttdl2 " + _0x3bb64f.watermark
        }, {
          'title': 'Audio',
          'description': "Only Mp3",
          'id': _0x599c19 + "ttdl3 " + _0x3bb64f.music
        }]
      }]
    };
    if (config.BUTTON === "true") {
      return await _0x3d7817.sendMessage(_0x1f59d8, {
        'image': {
          'url': _0x3bb64f.thumbnail
        },
        'caption': _0x540355,
        'footer': config.FOOTER,
        'buttons': [{
          'buttonId': "Video quality list",
          'buttonText': {
            'displayText': "🎥 Select Option"
          },
          'type': 0x4,
          'nativeFlowInfo': {
            'name': "single_select",
            'paramsJson': JSON.stringify(_0x43d3c9)
          }
        }],
        'headerType': 0x1,
        'viewOnce': true
      }, {
        'quoted': _0x370ab6
      });
    } else if (config.BUTTON === "false") {
      await _0x3d7817.buttonMessage(_0x1f59d8, _0x5f2124, _0x370ab6);
    }
  } catch (_0x5870ea) {
    _0x366254("Error !!\n\n*" + _0x5870ea + '*');
    console.log(_0x5870ea);
  }
});
cmd({
  'pattern': "ttdl1",
  'react': '⬇️',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x1e528d, _0x1d03bf, _0x3be92c, {
  from: _0x1dc2d9,
  l: _0x424368,
  quoted: _0x333610,
  body: _0xc2e8aa,
  isCmd: _0x2662ed,
  command: _0x2b745b,
  args: _0x50b9a4,
  q: _0x559b8f,
  isGroup: _0x285518,
  sender: _0x3b100a,
  senderNumber: _0x5730f3,
  botNumber2: _0x395610,
  botNumber: _0x28850b,
  pushname: _0x4eb116,
  isMe: _0x41f0f1,
  isOwner: _0x223c48,
  groupMetadata: _0x46d669,
  groupName: _0x414cb5,
  participants: _0x4625d9,
  groupAdmins: _0x3e3a4f,
  isBotAdmins: _0x4e2c97,
  isAdmins: _0x5ed4a6,
  reply: _0x3b004c
}) => {
  try {
    await _0x1e528d.sendMessage(_0x1dc2d9, {
      'react': {
        'text': '⬆️',
        'key': _0x1d03bf.key
      }
    });
    _0x1e528d.sendMessage(_0x1dc2d9, {
      'video': {
        'url': _0x559b8f
      },
      'mimetype': "video/mp4",
      'caption': '' + config.FOOTER
    }, {
      'quoted': _0x1d03bf
    });
    await _0x1e528d.sendMessage(_0x1dc2d9, {
      'react': {
        'text': '✔️',
        'key': _0x1d03bf.key
      }
    });
  } catch (_0x47ccf2) {
    console.log(_0x47ccf2);
    _0x3b004c("Error !!\n\n*" + _0x47ccf2 + '*');
  }
});
cmd({
  'pattern': "ttdl2",
  'react': '⬇️',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x189a22, _0x3a967f, _0x5cdb9b, {
  from: _0x178f0f,
  l: _0x2e22fb,
  quoted: _0x190261,
  body: _0x1ff5ec,
  isCmd: _0x6802b7,
  command: _0x27c33f,
  args: _0x273b1a,
  q: _0x4771a2,
  isGroup: _0x2b97da,
  sender: _0x34b2f3,
  senderNumber: _0x3900aa,
  botNumber2: _0x3b9555,
  botNumber: _0xd374a3,
  pushname: _0x2fb607,
  isMe: _0x486138,
  isOwner: _0x57dc9a,
  groupMetadata: _0xf4971b,
  groupName: _0x251700,
  participants: _0x59c867,
  groupAdmins: _0xa843f7,
  isBotAdmins: _0x58a519,
  isAdmins: _0xb67d0e,
  reply: _0x408dcc
}) => {
  try {
    await _0x189a22.sendMessage(_0x178f0f, {
      'react': {
        'text': '⬆️',
        'key': _0x3a967f.key
      }
    });
    _0x189a22.sendMessage(_0x178f0f, {
      'video': {
        'url': _0x4771a2
      },
      'mimetype': 'video/mp4',
      'caption': '' + config.FOOTER
    }, {
      'quoted': _0x3a967f
    });
    await _0x189a22.sendMessage(_0x178f0f, {
      'react': {
        'text': '✔️',
        'key': _0x3a967f.key
      }
    });
  } catch (_0x34955e) {
    console.log(_0x34955e);
    _0x408dcc("Error !!\n\n*" + _0x34955e + '*');
  }
});
cmd({
  'pattern': "ttdl3",
  'react': '⬇️',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x374459, _0x428000, _0x2b1346, {
  from: _0x33870d,
  l: _0x54ed89,
  quoted: _0x6f94bf,
  body: _0x573eb6,
  isCmd: _0x458092,
  command: _0x2bfe27,
  args: _0x81739e,
  q: _0xc05955,
  isGroup: _0x2df92a,
  sender: _0x387482,
  senderNumber: _0x477291,
  botNumber2: _0x18d38f,
  botNumber: _0x4a08ce,
  pushname: _0x36da51,
  isMe: _0x29db34,
  isOwner: _0x19e942,
  groupMetadata: _0x51c717,
  groupName: _0x29faf4,
  participants: _0x36963d,
  groupAdmins: _0x7aacda,
  isBotAdmins: _0x113f13,
  isAdmins: _0x1da4d6,
  reply: _0x446e22
}) => {
  try {
    await _0x374459.sendMessage(_0x33870d, {
      'react': {
        'text': '⬆️',
        'key': _0x428000.key
      }
    });
    _0x374459.sendMessage(_0x33870d, {
      'audio': {
        'url': _0xc05955
      },
      'mimetype': "audio/mpeg",
      'caption': '' + config.FOOTER
    }, {
      'quoted': _0x428000
    });
    await _0x374459.sendMessage(_0x33870d, {
      'react': {
        'text': '✔️',
        'key': _0x428000.key
      }
    });
  } catch (_0x21f4b7) {
    console.log(_0x21f4b7);
    _0x446e22("Error !!\n\n*" + _0x21f4b7 + '*');
  }
});
cmd({
  'pattern': "ttdl4",
  'react': '⬇️',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x512788, _0x88ac18, _0x1ec2a7, {
  from: _0x4bb5b9,
  l: _0x213b33,
  quoted: _0x48daaf,
  body: _0x21a4be,
  isCmd: _0x486c6d,
  command: _0x4038cf,
  args: _0x5e0add,
  q: _0xa5ffac,
  isGroup: _0x3cb9b3,
  sender: _0x124286,
  senderNumber: _0x35e0d0,
  botNumber2: _0x3e5471,
  botNumber: _0x489493,
  pushname: _0x10a6d0,
  isMe: _0x4d1632,
  isOwner: _0x2b6023,
  groupMetadata: _0x256534,
  groupName: _0x3fd572,
  participants: _0xabecf6,
  groupAdmins: _0x1b5a9c,
  isBotAdmins: _0x3df827,
  isAdmins: _0x606296,
  reply: _0x9cf1ed
}) => {
  try {
    await _0x512788.sendMessage(_0x4bb5b9, {
      'react': {
        'text': '⬆️',
        'key': _0x88ac18.key
      }
    });
    _0x512788.sendMessage(_0x4bb5b9, {
      'audio': {
        'url': _0xa5ffac
      },
      'mimetype': "audio/mpeg",
      'caption': '' + config.FOOTER
    }, {
      'quoted': _0x88ac18
    });
    await _0x512788.sendMessage(_0x4bb5b9, {
      'react': {
        'text': '✔️',
        'key': _0x88ac18.key
      }
    });
  } catch (_0x409181) {
    console.log(_0x409181);
    _0x9cf1ed("Error !!\n\n*" + _0x409181 + '*');
  }
});
cmd({
  'pattern': 'fb',
  'alias': ["facebook"],
  'use': ".fb <facebook url>",
  'react': '🏮',
  'desc': "Download videos from Facebook",
  'category': "download",
  'filename': __filename
}, async (_0x2cb506, _0x3c8dbc, _0x2aadda, {
  from: _0x109bed,
  prefix: _0x13ed49,
  q: _0x13cd1c,
  reply: _0x2405a2
}) => {
  try {
    if (!_0x13cd1c || !_0x13cd1c.includes("facebook.com")) {
      return await _0x2405a2("*❌ Please enter a valid Facebook URL!*");
    }
    const _0x2c6298 = "https://darksadasyt-fbdl.vercel.app/api/fb-download?q=" + encodeURIComponent(_0x13cd1c);
    console.log("🌐 FB API URL:", _0x2c6298);
    let _0x405200;
    try {
      const _0x132f47 = await axios.get(_0x2c6298);
      _0x405200 = _0x132f47.data;
      console.log("📦 API DATA:", JSON.stringify(_0x405200, null, 0x2));
    } catch (_0x29e667) {
      console.error("❌ AXIOS ERROR:", _0x29e667.response?.["data"] || _0x29e667.message);
      return _0x2405a2("*⚠️ Failed to fetch data from Facebook API.*");
    }
    if (!_0x405200?.["result"]?.["videoFormats"] || _0x405200.result.videoFormats.length === 0x0) {
      return _0x2405a2("*❌ No downloadable formats found. Try another video.*");
    }
    const _0x5e13b5 = _0x405200.result.videoFormats;
    let _0xaf4c37 = _0x405200.result.thumbnailUrl;
    if (!_0xaf4c37 || !_0xaf4c37.startsWith('http')) {
      _0xaf4c37 = "https://i.imgur.com/qNQv8Ru.jpeg";
    } else {
      _0xaf4c37 = 'https://images.weserv.nl/?url=' + encodeURIComponent(_0xaf4c37.replace(/^https?:\/\//, ''));
    }
    const _0x15d799 = _0x405200.result.duration || "Unknown";
    const _0x572edb = "*🏮 DARK-KNIGHT MD FB DOWNLOADER 🏮*\n\n*┌──────────────────*\n*├ 🐼 Title:* Facebook video\n" + ("*├ ⏱️ Duration:* " + _0x15d799 + "\n") + ("*├ 🔗 Url:* " + _0x13cd1c + "\n") + "*└──────────────────*";
    const _0x2ab787 = [];
    if (_0x5e13b5[0x0]?.["url"]) {
      _0x2ab787.push({
        'buttonId': _0x13ed49 + "downfb " + _0x5e13b5[0x0].url,
        'buttonText': {
          'displayText': "HD Quality"
        },
        'type': 0x1
      });
    }
    if (_0x5e13b5[0x1]?.["url"]) {
      _0x2ab787.push({
        'buttonId': _0x13ed49 + "downfb " + _0x5e13b5[0x1].url,
        'buttonText': {
          'displayText': "SD Quality"
        },
        'type': 0x1
      });
    }
    if (_0x2ab787.length === 0x0) {
      return _0x2405a2("*❌ No video formats found.*");
    }
    const _0x2df9ec = {
      'image': {
        'url': _0xaf4c37
      },
      'caption': _0x572edb,
      'footer': config.FOOTER,
      'buttons': _0x2ab787,
      'headerType': 0x4
    };
    const _0x20e7db = {
      'title': "𝐂𝐥𝐢𝐜𝐤 𝐇𝐞𝐫𝐞 ⎙",
      'sections': [{
        'title': "Facebook Video Type 📽️",
        'rows': [{
          'title': "SD Quality",
          'description': "Download sd quality",
          'id': _0x13ed49 + "downfb " + _0x5e13b5[0x1].url
        }, {
          'title': "HD Quality",
          'description': "Download hd quality",
          'id': _0x13ed49 + "downfb " + _0x5e13b5[0x0].url
        }]
      }]
    };
    if (config.BUTTON === "true") {
      return await _0x2cb506.sendMessage(_0x109bed, {
        'image': {
          'url': _0xaf4c37
        },
        'caption': _0x572edb,
        'footer': config.FOOTER,
        'buttons': [{
          'buttonId': "Video quality list",
          'buttonText': {
            'displayText': "🎥 Select Option"
          },
          'type': 0x4,
          'nativeFlowInfo': {
            'name': "single_select",
            'paramsJson': JSON.stringify(_0x20e7db)
          }
        }],
        'headerType': 0x1,
        'viewOnce': true
      }, {
        'quoted': _0x2aadda
      });
    } else if (config.BUTTON === "false") {
      await _0x2cb506.buttonMessage(_0x109bed, _0x2df9ec, _0x2aadda);
    }
  } catch (_0x52ba9c) {
    console.error("❌ Unexpected Error:", _0x52ba9c);
    return _0x2405a2("*⚠️ An unexpected error occurred. Try again later.*");
  }
});
cmd({
  'pattern': "downfb",
  'react': '🎥',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x4f3ff0, _0x11a43c, _0x794c4d, {
  from: _0x1d3e29,
  q: _0x36edd8,
  reply: _0x1d6294
}) => {
  try {
    if (!_0x36edd8 || !_0x36edd8.includes("fbcdn")) {
      return await _0x1d6294("*❌ Invalid Facebook CDN video URL!*");
    }
    _0x1d6294("⏳ *Downloading Facebook video...*");
    const _0x3701d7 = await axios.get(_0x36edd8, {
      'responseType': "arraybuffer",
      'headers': {
        'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
        'Accept': "*/*",
        'Accept-Encoding': "identity",
        'Referer': 'https://fdown.net/',
        'Origin': "https://fdown.net"
      }
    });
    const _0x4e0db0 = Buffer.from(_0x3701d7.data, "binary");
    await _0x4f3ff0.sendMessage(_0x1d3e29, {
      'video': _0x4e0db0,
      'mimetype': "video/mp4",
      'caption': "✅ *Facebook video downloaded successfully!*"
    }, {
      'quoted': _0x11a43c
    });
    await _0x4f3ff0.sendMessage(_0x1d3e29, {
      'react': {
        'text': '✔️',
        'key': _0x11a43c.key
      }
    });
  } catch (_0x3cd332) {
    console.log("❌ Facebook video download error:", _0x3cd332);
    _0x1d6294("*❌ Failed to download. The video might be geo-blocked or expired.*");
  }
});
cmd({
  'pattern': "img",
  'alias': ['googleimg'],
  'desc': "Search for images on Google",
  'category': "download",
  'use': ".imgsearch <query>",
  'filename': __filename
}, async (_0x2af3e5, _0x1af5bd, _0x2bdf23, {
  from: _0x2b3aaf,
  l: _0x1eaa33,
  quoted: _0x3726be,
  body: _0x5292c8,
  isCmd: _0x1ba812,
  command: _0x334151,
  args: _0xe04982,
  q: _0x19b8b2,
  isGroup: _0x5cdbd2,
  prefix: _0x4bb8bd,
  sender: _0x443c2d,
  senderNumber: _0x33f375,
  botNumber2: _0x1eb070,
  botNumber: _0x1cfa8a,
  pushname: _0xfd464d,
  isMe: _0x1639e8,
  isOwner: _0x22ac85,
  groupMetadata: _0x3e3507,
  groupName: _0x32adbe,
  participants: _0x7f1cf8,
  groupAdmins: _0x31e807,
  isBotAdmins: _0x519f2d,
  isAdmins: _0x246023,
  reply: _0x2957c1
}) => {
  try {
    if (!_0x19b8b2) {
      return _0x2957c1("*Please provide a search query!*");
    }
    var _0x50db76 = [];
    _0x50db76.push({
      'buttonId': _0x4bb8bd + "imgdlm " + _0x19b8b2,
      'buttonText': {
        'displayText': "_Normal Type 🎑_"
      },
      'type': 0x1
    }, {
      'buttonId': _0x4bb8bd + "imgdld " + _0x19b8b2,
      'buttonText': {
        'displayText': "_Document Type 🎑_"
      },
      'type': 0x1
    });
    const _0x200113 = {
      'caption': "*🦊 Choose Image Download Type..*",
      'footer': config.FOOTER,
      'buttons': _0x50db76,
      'headerType': 0x1
    };
    if (config.BUTTON === "true") {
      _0x2af3e5.sendMessage(_0x2b3aaf, {
        'text': "*🦊 Choose Image Download Type..*",
        'footer': config.FOOTER,
        'buttons': [{
          'buttonId': _0x4bb8bd + "imgdlm " + _0x19b8b2,
          'buttonText': {
            'displayText': "Normal Type"
          },
          'type': 0x1
        }, {
          'buttonId': _0x4bb8bd + "imgdld " + _0x19b8b2,
          'buttonText': {
            'displayText': "Document Type"
          },
          'type': 0x1
        }],
        'headerType': 0x1,
        'viewOnce': true
      }, {
        'quoted': _0x1af5bd
      });
    } else {
      if (config.BUTTON === 'false') {
        return await _0x2af3e5.buttonMessage(_0x2b3aaf, _0x200113, _0x1af5bd);
      }
    }
  } catch (_0x49a55f) {
    _0x2957c1("🚫 *Error Accurated !!*\n\n" + _0x49a55f);
    console.log(_0x49a55f);
  }
});
cmd({
  'pattern': "imgdlm",
  'react': '🌅',
  'use': ".imgsearch <query>",
  'filename': __filename
}, async (_0x3bcc0f, _0x2b5165, _0x464aa4, {
  from: _0xbb7321,
  reply: _0x17cc93,
  q: _0x12d6d2
}) => {
  try {
    if (!_0x12d6d2) {
      return await _0x17cc93("Please provide a search query!");
    }
    g_i_s(_0x12d6d2, (_0x3d525e, _0x13b1ac) => {
      if (_0x3d525e || !_0x13b1ac.length) {
        return _0x17cc93("No images found!");
      }
      const _0x5b4413 = _0x13b1ac.slice(0x0, 0x5).map(_0x15116a => _0x15116a.url);
      _0x5b4413.forEach(async _0x4c8fb2 => {
        await _0x3bcc0f.sendMessage(_0xbb7321, {
          'image': {
            'url': _0x4c8fb2
          },
          'caption': config.FOOTER
        }, {
          'quoted': _0x2b5165
        });
      });
    });
  } catch (_0x385c01) {
    console.error(_0x385c01);
    _0x17cc93("An error occurred while processing your request. Please try again later.");
  }
});
cmd({
  'pattern': "imgdld",
  'react': '🌅',
  'use': ".imgsearch <query>",
  'filename': __filename
}, async (_0x551815, _0x412409, _0x3accd5, {
  from: _0x4a7b62,
  reply: _0x1e9ba7,
  q: _0x536352
}) => {
  try {
    if (!_0x536352) {
      return await _0x1e9ba7("Please provide a search query!");
    }
    g_i_s(_0x536352, (_0x192e27, _0x1a2678) => {
      if (_0x192e27 || !_0x1a2678.length) {
        return _0x1e9ba7("No images found!");
      }
      const _0x18bd84 = _0x1a2678.slice(0x0, 0x5).map(_0x2b0f50 => _0x2b0f50.url);
      _0x18bd84.forEach(async _0x4ade9f => {
        await _0x551815.sendMessage(_0x4a7b62, {
          'document': {
            'url': _0x4ade9f
          },
          'caption': config.FOOTER,
          'mimetype': "image/jpeg",
          'fileName': _0x536352 + ".jpeg"
        });
      });
    });
  } catch (_0x27f223) {
    console.error(_0x27f223);
    _0x1e9ba7("An error occurred while processing your request. Please try again later.");
  }
});
cmd({
  'pattern': 'ig',
  'desc': "To get the instragram.",
  'react': '🎀',
  'use': ".ig < Link >",
  'category': "download",
  'filename': __filename
}, async (_0x3404e7, _0x3d6b6d, _0x3862e6, {
  from: _0x4c7da1,
  quoted: _0x196cfc,
  body: _0x25c3d5,
  isCmd: _0x1bcab4,
  command: _0x502169,
  args: _0x16b0df,
  q: _0x5ef5b9,
  isGroup: _0x2dcd7c,
  sender: _0x4efc23,
  senderNumber: _0x840370,
  botNumber2: _0x2d310f,
  botNumber: _0x32791c,
  pushname: _0x428750,
  isMe: _0x20a2b5,
  isOwner: _0x5e7233,
  groupMetadata: _0x521bbd,
  groupName: _0x39174b,
  participants: _0x1595da,
  groupAdmins: _0x5dd95e,
  isBotAdmins: _0x14b9be,
  isAdmins: _0x236442,
  reply: _0x15e0e0
}) => {
  try {
    if (!_0x5ef5b9) {
      return _0x3862e6.reply("Please Give Me a vaild Link...");
    }
    _0x3862e6.react('⬇️');
    let _0x49e46a = await fetchJson("https://darksadasyt-igdl.vercel.app/api/download?q=" + _0x5ef5b9);
    _0x3862e6.react('⬆️');
    await _0x3404e7.sendMessage(_0x4c7da1, {
      'video': {
        'url': _0x49e46a.result.data[0x0].downloadUrl
      },
      'mimetype': "video/mp4",
      'caption': config.FOOTER
    }, {
      'quoted': _0x3d6b6d
    });
    _0x3862e6.react('✔️');
  } catch (_0x59d3b9) {
    console.log(_0x59d3b9);
  }
});
cmd({
  'pattern': 'twitter',
  'alias': ['tw'],
  'desc': "To get the instragram.",
  'react': '❄️',
  'use': ".twitter < Link >",
  'category': "download",
  'filename': __filename
}, async (_0x165d36, _0x58f48a, _0x203296, {
  from: _0x3512e2,
  quoted: _0x3eabf6,
  body: _0x574a67,
  isCmd: _0xc98887,
  command: _0x7c1f8a,
  args: _0x1003a4,
  q: _0x243d50,
  isGroup: _0x229664,
  sender: _0x5a6739,
  senderNumber: _0x4bfff0,
  botNumber2: _0xb900ca,
  botNumber: _0x12e50e,
  pushname: _0x43b2e1,
  isMe: _0x394afb,
  isOwner: _0x5be7be,
  groupMetadata: _0x1366c4,
  groupName: _0x515986,
  participants: _0x3ed9e9,
  groupAdmins: _0x2fed7f,
  isBotAdmins: _0x38ec4a,
  isAdmins: _0xf328dc,
  reply: _0x3e7266
}) => {
  try {
    if (!_0x243d50) {
      return _0x203296.reply("Please Give Me a vaild Link...");
    }
    _0x203296.react('⬇️');
    let _0x3e74ad = await fetchJson("https://darksadasyt-twiterdl.vercel.app/api/download?url=" + _0x243d50);
    _0x203296.react('⬆️');
    await _0x165d36.sendMessage(_0x3512e2, {
      'video': {
        'url': _0x3e74ad.videos[0x0].url
      },
      'mimetype': "video/mp4",
      'caption': config.FOOTER
    }, {
      'quoted': _0x58f48a
    });
    _0x203296.react('✔️');
  } catch (_0x22441e) {
    console.log(_0x22441e);
  }
});
cmd({
  'pattern': "apk",
  'react': "🗃️",
  'alias': ["findapk", "playstore"],
  'category': "download",
  'use': ".apk whatsapp",
  'filename': __filename
}, async (_0x271dfe, _0x4f5f87, _0x2e10b5, {
  from: _0x5b01f9,
  l: _0x5b3a37,
  quoted: _0x12772b,
  body: _0x1c0195,
  isCmd: _0x2804c7,
  command: _0x5c7b68,
  args: _0x3b11a4,
  q: _0x4ad3c6,
  isGroup: _0x29eaeb,
  sender: _0xe66b70,
  senderNumber: _0x44acc9,
  botNumber2: _0x2e8ad0,
  botNumber: _0x47613e,
  pushname: _0x5b9a33,
  isMe: _0x392abb,
  isOwner: _0x8f7ec7,
  groupMetadata: _0x36f358,
  groupName: _0x23edc5,
  participants: _0xbca718,
  groupAdmins: _0x3dfc90,
  isBotAdmins: _0x3120ac,
  isAdmins: _0x3368b5,
  reply: _0x253223
}) => {
  try {
    await _0x271dfe.sendMessage(_0x5b01f9, {
      'react': {
        'text': '⬇️',
        'key': _0x4f5f87.key
      }
    });
    if (!_0x4ad3c6) {
      return await _0x271dfe.sendMessage(_0x5b01f9, {
        'text': "*🗃️ Enter apk name...*"
      }, {
        'quoted': _0x4f5f87
      });
    }
    const _0x43eb30 = await apkdl.download(_0x4ad3c6);
    let _0x231153 = "*`🗃️ DARK-KNIGHT MD APK DOWNLODER 🗃️`*\n\n*┌──────────────────╮*\n*├ 📚 Name :* " + _0x43eb30.name + "\n*├ 📦 Developer :* " + _0x43eb30["package"] + "\n*├ ⬆️ Last update :* " + _0x43eb30.lastup + "\n*├ 📥 Size :* " + _0x43eb30.size + "\n*└──────────────────╯*";
    await _0x271dfe.sendMessage(_0x5b01f9, {
      'image': {
        'url': _0x43eb30.icon
      },
      'caption': _0x231153
    }, {
      'quoted': _0x4f5f87
    });
    let _0x6c3f61 = await _0x271dfe.sendMessage(_0x5b01f9, {
      'document': {
        'url': _0x43eb30.dllink
      },
      'mimetype': "application/vnd.android.package-archive",
      'fileName': _0x43eb30.name + '.' + 'apk',
      'caption': ''
    }, {
      'quoted': _0x4f5f87
    });
    await _0x271dfe.sendMessage(_0x5b01f9, {
      'react': {
        'text': '📁',
        'key': _0x6c3f61.key
      }
    });
    await _0x271dfe.sendMessage(_0x5b01f9, {
      'react': {
        'text': '✔',
        'key': _0x4f5f87.key
      }
    });
  } catch (_0x2f5ea0) {
    _0x253223("ERROR !!");
    console.log(_0x2f5ea0);
  }
});
cmd({
  'pattern': "video",
  'alias': ['ytvideo'],
  'use': ".video lelena",
  'react': "📽️",
  'desc': "Download videoss",
  'category': "download",
  'filename': __filename
}, async (_0xa8d555, _0x2f0245, _0x4b0484, {
  from: _0x4fdadb,
  prefix: _0x21fa01,
  l: _0x3578d2,
  quoted: _0x14989c,
  body: _0x4ca235,
  isCmd: _0x348fe7,
  command: _0x48d427,
  args: _0x3267d7,
  q: _0x2aac79,
  isGroup: _0x55b91a,
  sender: _0x2af8ea,
  senderNumber: _0x13f3c9,
  botNumber2: _0x49bc28,
  botNumber: _0x4eac09,
  pushname: _0x5eaefb,
  isMe: _0x279ab5,
  isOwner: _0x2ae5eb,
  groupMetadata: _0x1ae2d4,
  groupName: _0x2c0fb0,
  participants: _0x4af285,
  groupAdmins: _0x282857,
  isBotAdmins: _0x59c57a,
  isAdmins: _0x3aedcd,
  reply: _0x27dc69
}) => {
  try {
    if (!_0x2aac79) {
      return await _0x27dc69("*Please enter a query or a url!*");
    }
    const _0x3f8f46 = _0x2aac79.replace(/\?si=[^&]*/, '');
    var _0x26a664 = await yts(_0x3f8f46);
    var _0x40d212 = _0x26a664.videos[0x0];
    let _0x1cf846 = "*📹 DARK-KNIGHT MD VIDEO DOWNLODER 📹*\n\n*┌─────────────────────┐*\n*├ 📹 Title : " + _0x40d212.title + "* \n*├ 🐼 Views : " + _0x40d212.views + "*\n*├ ⌛Duration : " + _0x40d212.duration + "*\n*├ 📎 URL : " + _0x40d212.url + "*\n*└─────────────────────┘*";
    const _0x192320 = [{
      'title': "`Video type 📽️`",
      'rows': [{
        'title': "```144p Video```",
        'rowId': _0x21fa01 + ("videodl144 " + _0x40d212.url)
      }, {
        'title': "```240p Video```",
        'rowId': _0x21fa01 + ("videodl240 " + _0x40d212.url)
      }, {
        'title': "```360p Video```",
        'rowId': _0x21fa01 + ("videodl360 " + _0x40d212.url)
      }, {
        'title': "```720p Video```",
        'rowId': _0x21fa01 + ("videodl720 " + _0x40d212.url)
      }, {
        'title': "```1080p Video```",
        'rowId': _0x21fa01 + ("videodl1080 " + _0x40d212.url)
      }]
    }, {
      'title': "`Document type 📁`",
      'rows': [{
        'title': "```144p Document```",
        'rowId': _0x21fa01 + ("docdl144 " + _0x40d212.url + '&' + _0x40d212.thumbnail + '&' + _0x40d212.title)
      }, {
        'title': "```240p Document```",
        'rowId': _0x21fa01 + ("docdl240 " + _0x40d212.url + '&' + _0x40d212.thumbnail + '&' + _0x40d212.title)
      }, {
        'title': "```360p Document```",
        'rowId': _0x21fa01 + ("docdl360 " + _0x40d212.url + '&' + _0x40d212.thumbnail + '&' + _0x40d212.title)
      }, {
        'title': "```720p Document```",
        'rowId': _0x21fa01 + ("docdl720 " + _0x40d212.url + '&' + _0x40d212.thumbnail + '&' + _0x40d212.title)
      }, {
        'title': "```1080p Document```",
        'rowId': _0x21fa01 + ("docdl1080 " + _0x40d212.url + '&' + _0x40d212.thumbnail + '&' + _0x40d212.title)
      }]
    }];
    const _0x1064fe = {
      'text': _0x1cf846,
      'image': {
        'url': _0x40d212.thumbnail
      },
      'footer': config.FOOTER,
      'title': '',
      'buttonText': "*🔢 Reply below number*\n",
      'sections': _0x192320
    };
    const _0x2d80fe = {
      'title': "𝐂𝐥𝐢𝐜𝐤 𝐇𝐞𝐫𝐞 ⎙",
      'sections': [{
        'title': "Video Type 📽️",
        'rows': [{
          'title': "144p Video",
          'description': "144p quality download",
          'id': _0x21fa01 + ("videodl144 " + _0x40d212.url)
        }, {
          'title': "240p Video",
          'description': "240p quality download",
          'id': _0x21fa01 + ("videodl240 " + _0x40d212.url)
        }, {
          'title': "360p Video",
          'description': "360p quality download",
          'id': _0x21fa01 + ("videodl360 " + _0x40d212.url)
        }, {
          'title': "720p Video",
          'description': "720p quality download",
          'id': _0x21fa01 + ("videodl720 " + _0x40d212.url)
        }, {
          'title': "1080p Video",
          'description': "1080p quality download",
          'id': _0x21fa01 + ("videodl1080 " + _0x40d212.url)
        }]
      }, {
        'title': "Document Type 📁",
        'rows': [{
          'title': "144p Document",
          'description': "144p quality download",
          'id': _0x21fa01 + ("docdl144 " + _0x40d212.url + '&' + _0x40d212.thumbnail + '&' + _0x40d212.title)
        }, {
          'title': "240p Document",
          'description': "240p quality download",
          'id': _0x21fa01 + ("docdl240 " + _0x40d212.url + '&' + _0x40d212.thumbnail + '&' + _0x40d212.title)
        }, {
          'title': "360p Document",
          'description': "360p quality download",
          'id': _0x21fa01 + ("docdl360 " + _0x40d212.url + '&' + _0x40d212.thumbnail + '&' + _0x40d212.title)
        }, {
          'title': "720p Document",
          'description': "720p quality download",
          'id': _0x21fa01 + ("docdl720 " + _0x40d212.url + '&' + _0x40d212.thumbnail + '&' + _0x40d212.title)
        }, {
          'title': "1080p Document",
          'description': "1080p quality download",
          'id': _0x21fa01 + ("docdl1080 " + _0x40d212.url + '&' + _0x40d212.thumbnail + '&' + _0x40d212.title)
        }]
      }]
    };
    if (config.BUTTON === 'true') {
      return await _0xa8d555.sendMessage(_0x4fdadb, {
        'image': {
          'url': _0x40d212.thumbnail
        },
        'caption': _0x1cf846,
        'footer': config.FOOTER,
        'buttons': [{
          'buttonId': "Video quality list",
          'buttonText': {
            'displayText': "🎥 Select Option"
          },
          'type': 0x4,
          'nativeFlowInfo': {
            'name': "single_select",
            'paramsJson': JSON.stringify(_0x2d80fe)
          }
        }],
        'headerType': 0x1,
        'viewOnce': true
      }, {
        'quoted': _0x2f0245
      });
    } else if (config.BUTTON === "false") {
      await _0xa8d555.listMessage4(_0x4fdadb, _0x1064fe, _0x2f0245);
    }
  } catch (_0x7f2b42) {
    _0x27dc69("*Error !!*");
    _0x3578d2(_0x7f2b42);
  }
});
cmd({
  'pattern': 'docdl144',
  'react': '⬇️',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x5564e3, _0x4e55b4, _0x7706b, {
  from: _0x5988eb,
  q: _0x127689,
  reply: _0x153742
}) => {
  try {
    if (!_0x127689) {
      return await _0x153742("*Need a YouTube URL!*");
    }
    const _0x3c19e0 = _0x127689.split('&');
    const _0x1313be = _0x3c19e0[0x0];
    const _0xf59938 = _0x3c19e0[0x1];
    const _0x58b71d = _0x3c19e0[0x2] || "video";
    const _0x104202 = await fetch(_0xf59938);
    const _0x413d17 = await _0x104202.buffer();
    const _0x50d71c = await resizeImage(_0x413d17, 0xc8, 0xc8);
    const _0x1c13bc = await fetchJson("https://sadas-ytmp4-5.vercel.app/convert?link=" + _0x1313be + '&format=mp4&audioBitrate=128&videoQuality=144&filenameStyle=pretty&vCodec=h264');
    const _0x388476 = _0x1c13bc.url;
    await _0x5564e3.sendMessage(_0x5988eb, {
      'react': {
        'text': '⬆️',
        'key': _0x4e55b4.key
      }
    });
    await _0x5564e3.sendMessage(_0x5988eb, {
      'document': {
        'url': _0x388476
      },
      'jpegThumbnail': _0x50d71c,
      'caption': config?.['FOOTER'] || '',
      'mimetype': 'video/mp4',
      'fileName': (_0x1c13bc.filename || _0x58b71d) + ".mp4"
    }, {
      'quoted': _0x4e55b4
    });
    await _0x5564e3.sendMessage(_0x5988eb, {
      'react': {
        'text': '✔️',
        'key': _0x4e55b4.key
      }
    });
  } catch (_0x53b41c) {
    console.error(_0x53b41c);
    await _0x153742("*An error occurred while processing your request.*");
  }
});
cmd({
  'pattern': "docdl240",
  'react': '⬇️',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x1ef3d2, _0x129aef, _0x4ab777, {
  from: _0x31d730,
  q: _0x52e12d,
  reply: _0x296102
}) => {
  try {
    if (!_0x52e12d) {
      return await _0x296102("*Need a YouTube URL!*");
    }
    const _0x4889d6 = _0x52e12d.split('&');
    const _0x30a51e = _0x4889d6[0x0];
    const _0x27c2c8 = _0x4889d6[0x1];
    const _0x61da9f = _0x4889d6[0x2] || "video";
    const _0x52497b = await fetch(_0x27c2c8);
    const _0x42ea77 = await _0x52497b.buffer();
    const _0x5d4499 = await resizeImage(_0x42ea77, 0xc8, 0xc8);
    const _0x4b0e1c = await fetchJson('https://sadas-ytmp4-5.vercel.app/convert?link=' + _0x30a51e + "&format=mp4&audioBitrate=128&videoQuality=240&filenameStyle=pretty&vCodec=h264");
    const _0x2c3a1f = _0x4b0e1c.url;
    await _0x1ef3d2.sendMessage(_0x31d730, {
      'react': {
        'text': '⬆️',
        'key': _0x129aef.key
      }
    });
    await _0x1ef3d2.sendMessage(_0x31d730, {
      'document': {
        'url': _0x2c3a1f
      },
      'jpegThumbnail': _0x5d4499,
      'caption': config?.["FOOTER"] || '',
      'mimetype': "video/mp4",
      'fileName': (_0x4b0e1c.filename || _0x61da9f) + ".mp4"
    }, {
      'quoted': _0x129aef
    });
    await _0x1ef3d2.sendMessage(_0x31d730, {
      'react': {
        'text': '✔️',
        'key': _0x129aef.key
      }
    });
  } catch (_0xef7027) {
    console.error(_0xef7027);
    await _0x296102("*An error occurred while processing your request.*");
  }
});
cmd({
  'pattern': "docdl360",
  'react': '⬇️',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x5a97c0, _0x31faef, _0x1c2e8d, {
  from: _0x34d68d,
  q: _0x15a283,
  reply: _0x11a879
}) => {
  try {
    if (!_0x15a283) {
      return await _0x11a879("*Need a YouTube URL!*");
    }
    const _0x3d9958 = _0x15a283.split('&');
    const _0x57fb11 = _0x3d9958[0x0];
    const _0xad43bd = _0x3d9958[0x1];
    const _0x3859bf = _0x3d9958[0x2] || "video";
    const _0x501d54 = await fetch(_0xad43bd);
    const _0x2fcfdb = await _0x501d54.buffer();
    const _0x25dd30 = await resizeImage(_0x2fcfdb, 0xc8, 0xc8);
    const _0x228cdc = await fetchJson("https://sadas-ytmp4-5.vercel.app/convert?link=" + _0x57fb11 + "&format=mp4&audioBitrate=128&videoQuality=360&filenameStyle=pretty&vCodec=h264");
    const _0x358c6b = _0x228cdc.url;
    await _0x5a97c0.sendMessage(_0x34d68d, {
      'react': {
        'text': '⬆️',
        'key': _0x31faef.key
      }
    });
    await _0x5a97c0.sendMessage(_0x34d68d, {
      'document': {
        'url': _0x358c6b
      },
      'jpegThumbnail': _0x25dd30,
      'caption': config?.['FOOTER'] || '',
      'mimetype': "video/mp4",
      'fileName': (_0x228cdc.filename || _0x3859bf) + ".mp4"
    }, {
      'quoted': _0x31faef
    });
    await _0x5a97c0.sendMessage(_0x34d68d, {
      'react': {
        'text': '✔️',
        'key': _0x31faef.key
      }
    });
  } catch (_0xc412a3) {
    console.error(_0xc412a3);
    await _0x11a879("*An error occurred while processing your request.*");
  }
});
cmd({
  'pattern': "docdl720",
  'react': '⬇️',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x41ff1a, _0x281a59, _0xc50c2e, {
  from: _0x513aa4,
  q: _0x2fdd8b,
  reply: _0x16fc44
}) => {
  try {
    if (!_0x2fdd8b) {
      return await _0x16fc44("*Need a youtube url!*");
    }
    const _0x4a571c = _0x2fdd8b.split('&');
    const _0xd0641 = _0x4a571c[0x0];
    const _0x7baf6c = _0x4a571c[0x1];
    const _0x3928de = _0x4a571c[0x2] || "video";
    const _0x181e1b = await fetch(_0x7baf6c);
    const _0x32945 = await _0x181e1b.buffer();
    const _0x2379bd = await resizeImage(_0x32945, 0xc8, 0xc8);
    const _0x1bb850 = await fetchJson("https://sadas-ytmp4-5.vercel.app/convert?link=" + _0xd0641 + "&format=mp4&audioBitrate=128&videoQuality=720&filenameStyle=pretty&vCodec=h264");
    const _0x5f03b4 = _0x1bb850.url;
    await _0x41ff1a.sendMessage(_0x513aa4, {
      'react': {
        'text': '⬆️',
        'key': _0x281a59.key
      }
    });
    await _0x41ff1a.sendMessage(_0x513aa4, {
      'document': {
        'url': _0x5f03b4
      },
      'jpegThumbnail': _0x2379bd,
      'caption': config?.["FOOTER"] || '',
      'mimetype': 'video/mp4',
      'fileName': (_0x1bb850.filename || _0x3928de) + '.mp4'
    }, {
      'quoted': _0x281a59
    });
    await _0x41ff1a.sendMessage(_0x513aa4, {
      'react': {
        'text': '✔️',
        'key': _0x281a59.key
      }
    });
  } catch (_0x2dbac1) {
    console.log(_0x2dbac1);
  }
});
cmd({
  'pattern': "docdl1080",
  'react': '⬇️',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x2ca5cf, _0x569179, _0x118d41, {
  from: _0x319722,
  q: _0x10cd92,
  reply: _0x193fdc
}) => {
  try {
    if (!_0x10cd92) {
      return await _0x193fdc("*Need a youtube url!*");
    }
    const _0x4e2a84 = _0x10cd92.split('&');
    const _0x1fcd48 = _0x4e2a84[0x0];
    const _0x55a868 = _0x4e2a84[0x1];
    const _0x2ea109 = _0x4e2a84[0x2] || "video";
    const _0x4c7d57 = await fetch(_0x55a868);
    const _0x5cc672 = await _0x4c7d57.buffer();
    const _0x2fa58c = await resizeImage(_0x5cc672, 0xc8, 0xc8);
    const _0x38038e = await fetchJson("https://sadas-ytmp4-5.vercel.app/convert?link=" + _0x1fcd48 + "&format=mp4&audioBitrate=128&videoQuality=1080&filenameStyle=pretty&vCodec=h264");
    const _0x18c5cf = _0x38038e.url;
    await _0x2ca5cf.sendMessage(_0x319722, {
      'react': {
        'text': '⬆️',
        'key': _0x569179.key
      }
    });
    await _0x2ca5cf.sendMessage(_0x319722, {
      'document': {
        'url': _0x18c5cf
      },
      'jpegThumbnail': _0x2fa58c,
      'caption': config?.["FOOTER"] || '',
      'mimetype': "video/mp4",
      'fileName': (_0x38038e.filename || _0x2ea109) + ".mp4"
    }, {
      'quoted': _0x569179
    });
    await _0x2ca5cf.sendMessage(_0x319722, {
      'react': {
        'text': '✔️',
        'key': _0x569179.key
      }
    });
  } catch (_0x668f85) {
    console.log(_0x668f85);
  }
});
cmd({
  'pattern': "videodl144",
  'react': '⬇️',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x524d2e, _0x5625f1, _0x27b265, {
  from: _0x2fab03,
  q: _0x1a8095,
  reply: _0x9b27b2
}) => {
  try {
    if (!_0x1a8095) {
      return await _0x9b27b2("*You must provide a YouTube URL!*");
    }
    const _0x145b8f = await fetchJson('https://sadas-ytmp4-5.vercel.app/convert?link=' + _0x1a8095 + "&format=mp4&audioBitrate=128&videoQuality=144&filenameStyle=pretty&vCodec=h264");
    const _0x14c9ed = _0x145b8f.url;
    await _0x524d2e.sendMessage(_0x2fab03, {
      'react': {
        'text': '⬆️',
        'key': _0x5625f1.key
      }
    });
    await _0x524d2e.sendMessage(_0x2fab03, {
      'video': {
        'url': _0x14c9ed
      },
      'caption': _0x145b8f.filename || "Downloaded Video"
    }, {
      'quoted': _0x5625f1
    });
    await _0x524d2e.sendMessage(_0x2fab03, {
      'react': {
        'text': '✔️',
        'key': _0x5625f1.key
      }
    });
  } catch (_0x570cb1) {
    console.error(_0x570cb1);
    await _0x9b27b2("*An error occurred while downloading the video.*");
  }
});
cmd({
  'pattern': "videodl240",
  'react': '⬇️',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x27aa91, _0x27f704, _0x1cf64f, {
  from: _0x3a99be,
  q: _0x4b89ed,
  reply: _0x1d195b
}) => {
  try {
    const _0x625252 = await fetchJson("https://sadas-ytmp4-5.vercel.app/convert?link=" + _0x4b89ed + "&format=mp4&audioBitrate=240&videoQuality=144&filenameStyle=pretty&vCodec=h264");
    const _0x9b47ff = _0x625252.url;
    await _0x27aa91.sendMessage(_0x3a99be, {
      'react': {
        'text': '⬆️',
        'key': _0x27f704.key
      }
    });
    await _0x27aa91.sendMessage(_0x3a99be, {
      'video': {
        'url': _0x9b47ff
      },
      'caption': _0x625252.filename || "Downloaded Video"
    }, {
      'quoted': _0x27f704
    });
    await _0x27aa91.sendMessage(_0x3a99be, {
      'react': {
        'text': '✔️',
        'key': _0x27f704.key
      }
    });
  } catch (_0x4d5a7c) {
    _0x1d195b("*Error !!*");
    console.log(_0x4d5a7c);
  }
});
cmd({
  'pattern': "videodl360",
  'react': '⬇️',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x37fb23, _0x4c2ecd, _0x2f0147, {
  from: _0x1c729a,
  q: _0xc1ead5,
  reply: _0x533ece
}) => {
  try {
    const _0x3072c0 = await fetchJson("https://sadas-ytmp4-5.vercel.app/convert?link=" + _0xc1ead5 + "&format=mp4&audioBitrate=360&videoQuality=144&filenameStyle=pretty&vCodec=h264");
    const _0xdf5a1a = _0x3072c0.url;
    await _0x37fb23.sendMessage(_0x1c729a, {
      'react': {
        'text': '⬆️',
        'key': _0x4c2ecd.key
      }
    });
    await _0x37fb23.sendMessage(_0x1c729a, {
      'video': {
        'url': _0xdf5a1a
      },
      'caption': _0x3072c0.filename || "Downloaded Video"
    }, {
      'quoted': _0x4c2ecd
    });
    await _0x37fb23.sendMessage(_0x1c729a, {
      'react': {
        'text': '✔️',
        'key': _0x4c2ecd.key
      }
    });
  } catch (_0x544c67) {
    _0x533ece("*Error !!*");
    console.log(_0x544c67);
  }
});
cmd({
  'pattern': 'videodl720',
  'react': '⬇️',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0xc7859e, _0x1f26f2, _0x17d8f8, {
  from: _0xf25871,
  q: _0x1be922,
  reply: _0x376f65
}) => {
  try {
    const _0x1169a4 = await fetchJson("https://sadas-ytmp4-5.vercel.app/convert?link=" + _0x1be922 + "&format=mp4&audioBitrate=128&videoQuality=720&filenameStyle=pretty&vCodec=h264");
    const _0xe9cd5b = _0x1169a4.url;
    await _0xc7859e.sendMessage(_0xf25871, {
      'react': {
        'text': '⬆️',
        'key': _0x1f26f2.key
      }
    });
    await _0xc7859e.sendMessage(_0xf25871, {
      'video': {
        'url': _0xe9cd5b
      },
      'caption': _0x1169a4.filename || "Downloaded Video"
    }, {
      'quoted': _0x1f26f2
    });
    await _0xc7859e.sendMessage(_0xf25871, {
      'react': {
        'text': '✔️',
        'key': _0x1f26f2.key
      }
    });
  } catch (_0x57f47b) {
    _0x376f65("*Error !!*");
    console.log(_0x57f47b);
  }
});
cmd({
  'pattern': "videodl1080",
  'react': '⬇️',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x4a0b59, _0x5b3ef6, _0x383b0d, {
  from: _0x49028e,
  q: _0x15f1ff,
  reply: _0x34661a
}) => {
  try {
    const _0x1faad9 = await fetchJson("https://sadas-ytmp4-5.vercel.app/convert?link=" + _0x15f1ff + "&format=mp4&audioBitrate=128&videoQuality=1080&filenameStyle=pretty&vCodec=h264");
    const _0x4b3542 = _0x1faad9.url;
    await _0x4a0b59.sendMessage(_0x49028e, {
      'react': {
        'text': '⬆️',
        'key': _0x5b3ef6.key
      }
    });
    await _0x4a0b59.sendMessage(_0x49028e, {
      'video': {
        'url': _0x4b3542
      },
      'caption': _0x1faad9.filename || "Downloaded Video"
    }, {
      'quoted': _0x5b3ef6
    });
    await _0x4a0b59.sendMessage(_0x49028e, {
      'react': {
        'text': '✔️',
        'key': _0x5b3ef6.key
      }
    });
  } catch (_0x57e154) {
    _0x34661a("*Error !!*");
    console.log(_0x57e154);
  }
});
cmd({
  'pattern': 'mediafire',
  'react': '🔥',
  'alias': ["mfire", 'mfdl'],
  'category': 'download',
  'use': ".mediafire < link >",
  'filename': __filename
}, async (_0xa7984d, _0x415e33, _0x5a873c, {
  from: _0x5412f2,
  l: _0x30fc39,
  quoted: _0x53056b,
  body: _0x5b5f94,
  isCmd: _0x4dd7b9,
  command: _0x4af55e,
  args: _0x21fcbd,
  q: _0x4bd374,
  isGroup: _0x5cea78,
  sender: _0x16ec2d,
  senderNumber: _0x545519,
  botNumber2: _0x139e2b,
  botNumber: _0xd2e52d,
  pushname: _0x1c973f,
  isMe: _0x4e95f7,
  isOwner: _0x54ee29,
  groupMetadata: _0x34ad15,
  groupName: _0x3045a9,
  participants: _0x223055,
  groupAdmins: _0x58df66,
  isBotAdmins: _0x212ca6,
  isAdmins: _0x5f2892,
  reply: _0x3e0d38
}) => {
  try {
    await _0xa7984d.sendMessage(_0x5412f2, {
      'react': {
        'text': '⬇️',
        'key': _0x415e33.key
      }
    });
    if (!_0x4bd374) {
      return await _0xa7984d.sendMessage(_0x5412f2, {
        'text': "*🔥 Enter mediafire link...*"
      }, {
        'quoted': _0x415e33
      });
    }
    const _0x53caa6 = await fetchJson("https://mfire-dl.vercel.app/mfire?url=" + _0x4bd374);
    let _0x312b64 = "*`🔥 DARK-KNIGHT MD MEDIAFIRE DOWNLODER 🔥`*\n\n*┌──────────────────╮*\n*├ 🔥 Name :* " + _0x53caa6.fileName + "\n*├ ⏩ Type :* " + _0x53caa6.fileType + "\n*├ 📁 Size :* " + _0x53caa6.size + "\n*├ 📅 Date :* " + _0x53caa6.date + "\n*└──────────────────╯*";
    _0x3e0d38(_0x312b64);
    let _0x5110b4 = await _0xa7984d.sendMessage(_0x5412f2, {
      'document': {
        'url': _0x53caa6.dl_link
      },
      'mimetype': '' + _0x53caa6.type,
      'fileName': '' + _0x53caa6.fileName,
      'caption': ''
    }, {
      'quoted': _0x415e33
    });
    await _0xa7984d.sendMessage(_0x5412f2, {
      'react': {
        'text': '📁',
        'key': _0x5110b4.key
      }
    });
    await _0xa7984d.sendMessage(_0x5412f2, {
      'react': {
        'text': '✔',
        'key': _0x415e33.key
      }
    });
  } catch (_0x6490b0) {
    _0x3e0d38("ERROR !!");
    console.log(_0x6490b0);
  }
});
async function xnxxs(_0x20e3bf) {
  return new Promise((_0x469643, _0x43f8e4) => {
    fetch("https://www.xnxx.com/search/" + _0x20e3bf + '/' + (Math.floor(Math.random() * 0x3) + 0x1), {
      'method': 'get'
    }).then(_0x4a7a4e => _0x4a7a4e.text()).then(_0x4d6434 => {
      const _0x2dfccb = cheerio.load(_0x4d6434, {
        'xmlMode': false
      });
      const _0x321bbb = [];
      const _0x269bfa = [];
      const _0x189f5d = [];
      const _0x3c2af2 = [];
      _0x2dfccb("div.mozaique").each(function (_0x5237b0, _0x3e2ebb) {
        _0x2dfccb(_0x3e2ebb).find('div.thumb').each(function (_0x4a1d58, _0x54656d) {
          _0x269bfa.push("https://www.xnxx.com" + _0x2dfccb(_0x54656d).find('a').attr("href").replace('/THUMBNUM/', '/'));
        });
      });
      _0x2dfccb("div.mozaique").each(function (_0x2af4ce, _0x35800e) {
        _0x2dfccb(_0x35800e).find("div.thumb-under").each(function (_0x367eba, _0x47beea) {
          _0x189f5d.push(_0x2dfccb(_0x47beea).find("p.metadata").text());
          _0x2dfccb(_0x47beea).find('a').each(function (_0x51818b, _0x1f3e25) {
            _0x321bbb.push(_0x2dfccb(_0x1f3e25).attr("title"));
          });
        });
      });
      for (let _0x4b9300 = 0x0; _0x4b9300 < _0x321bbb.length; _0x4b9300++) {
        _0x3c2af2.push({
          'title': _0x321bbb[_0x4b9300],
          'info': _0x189f5d[_0x4b9300],
          'link': _0x269bfa[_0x4b9300]
        });
      }
      _0x469643({
        'status': true,
        'result': _0x3c2af2
      });
    })["catch"](_0x344fa8 => _0x43f8e4({
      'status': false,
      'result': _0x344fa8
    }));
  });
}
cmd({
  'pattern': 'xnxx',
  'react': '🔎',
  'category': "download",
  'desc': "xnxx download",
  'use': ".xnxx new",
  'filename': __filename
}, async (_0x360d47, _0x517304, _0x36ff8f, {
  from: _0x2a90a3,
  q: _0x37c939,
  isSudo: _0x31ba6f,
  isOwner: _0x54e987,
  prefix: _0x464d59,
  isMe: _0x13d866,
  reply: _0x205abe
}) => {
  try {
    if (config.XNXX_BLOCK == "true" && !_0x13d866 && !_0x31ba6f && !_0x54e987) {
      await _0x360d47.sendMessage(_0x2a90a3, {
        'react': {
          'text': '❌',
          'key': _0x36ff8f.key
        }
      });
      return await _0x360d47.sendMessage(_0x2a90a3, {
        'text': "*This command currently only works for the Bot owner.*"
      }, {
        'quoted': _0x36ff8f
      });
    }
    if (!_0x37c939) {
      return _0x205abe("🚩 *Please give me words to search*");
    }
    let _0x166f00 = await xnxxs(_0x37c939);
    var _0x313e41 = [];
    for (var _0x2de2ac = 0x0; _0x2de2ac < _0x166f00.result.length; _0x2de2ac++) {
      _0x313e41.push({
        'title': _0x166f00.result[_0x2de2ac].title,
        'description': '',
        'rowId': _0x464d59 + ("xnxxdown " + _0x166f00.result[_0x2de2ac].link + '}')
      });
    }
    const _0x56e826 = [{
      'title': "xnxx results",
      'rows': _0x313e41
    }];
    const _0x5eee46 = {
      'text': "*_XNXX SEARCH RESULT 🔞_*\n\n*`Input :`* " + _0x37c939,
      'footer': config.FOOTER,
      'title': "xnxx results",
      'buttonText': "*Reply Below Number 🔢*",
      'sections': _0x56e826
    };
    const _0x2f22b3 = "*_XNXX SEARCH RESULT 🔞_*\n\n*`Input :`* " + _0x37c939;
    const _0x28e350 = {
      'title': "𝐂𝐥𝐢𝐜𝐤 𝐇𝐞𝐫𝐞 ⎙",
      'sections': [{
        'title': "🔍 Search Results",
        'rows': _0x166f00.result.map(_0x5ab5d9 => ({
          'title': _0x5ab5d9.title,
          'description': '',
          'id': _0x464d59 + ("xnxxdown " + _0x5ab5d9.link)
        }))
      }]
    };
    if (config.BUTTON === "true") {
      return await _0x360d47.sendMessage(_0x2a90a3, {
        'image': {
          'url': "https://files.catbox.moe/brlkte.jpg"
        },
        'caption': _0x2f22b3,
        'footer': config.FOOTER,
        'buttons': [{
          'buttonId': "Video quality list",
          'buttonText': {
            'displayText': "🎥 Select Option"
          },
          'type': 0x4,
          'nativeFlowInfo': {
            'name': "single_select",
            'paramsJson': JSON.stringify(_0x28e350)
          }
        }],
        'headerType': 0x1,
        'viewOnce': true
      }, {
        'quoted': _0x36ff8f
      });
    } else if (config.BUTTON === "false") {
      await _0x360d47.listMessage(_0x2a90a3, _0x5eee46, _0x36ff8f);
    }
  } catch (_0x495806) {
    console.log(_0x495806);
    await _0x360d47.sendMessage(_0x2a90a3, {
      'text': "🚩 *Error !!*"
    }, {
      'quoted': _0x36ff8f
    });
  }
});
async function xdl(_0x9003d0) {
  return new Promise((_0x47b43e, _0x149c3d) => {
    fetch('' + _0x9003d0, {
      'method': "get"
    }).then(_0x1fda56 => _0x1fda56.text()).then(_0x5b9a7d => {
      const _0x488d1f = cheerio.load(_0x5b9a7d, {
        'xmlMode': false
      });
      const _0x4834aa = _0x488d1f("meta[property=\"og:title\"]").attr("content");
      const _0x43e485 = _0x488d1f("meta[property=\"og:duration\"]").attr('content');
      const _0x15c393 = _0x488d1f("meta[property=\"og:image\"]").attr("content");
      const _0x68cf11 = _0x488d1f("meta[property=\"og:video:type\"]").attr("content");
      const _0x148c25 = _0x488d1f("meta[property=\"og:video:width\"]").attr('content');
      const _0x3d9d37 = _0x488d1f("meta[property=\"og:video:height\"]").attr('content');
      const _0x102729 = _0x488d1f("span.metadata").text();
      const _0x7132b7 = _0x488d1f("#video-player-bg > script:nth-child(6)").html();
      const _0x2e1483 = {
        'low': (_0x7132b7.match("html5player.setVideoUrlLow\\('(.*?)'\\);") || [])[0x1],
        'high': _0x7132b7.match("html5player.setVideoUrlHigh\\('(.*?)'\\);" || [])[0x1],
        'HLS': _0x7132b7.match("html5player.setVideoHLS\\('(.*?)'\\);" || [])[0x1],
        'thumb': _0x7132b7.match("html5player.setThumbUrl\\('(.*?)'\\);" || [])[0x1],
        'thumb69': _0x7132b7.match("html5player.setThumbUrl169\\('(.*?)'\\);" || [])[0x1],
        'thumbSlide': _0x7132b7.match("html5player.setThumbSlide\\('(.*?)'\\);" || [])[0x1],
        'thumbSlideBig': _0x7132b7.match("html5player.setThumbSlideBig\\('(.*?)'\\);" || [])[0x1]
      };
      _0x47b43e({
        'status': true,
        'result': {
          'title': _0x4834aa,
          'URL': _0x9003d0,
          'duration': _0x43e485,
          'image': _0x15c393,
          'videoType': _0x68cf11,
          'videoWidth': _0x148c25,
          'videoHeight': _0x3d9d37,
          'info': _0x102729,
          'files': _0x2e1483
        }
      });
    })["catch"](_0x464c4d => _0x149c3d({
      'status': false,
      'result': _0x464c4d
    }));
  });
}
cmd({
  'pattern': "xnxxdown",
  'alias': ["dlxnxx", "xnxxdl"],
  'react': '🔞',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x3c4e6e, _0x16f80f, _0x19a0a6, {
  from: _0x12d709,
  l: _0x4ec167,
  quoted: _0x4d99a0,
  body: _0x57f2d2,
  isCmd: _0x9479de,
  command: _0xa7e0a3,
  args: _0x5d195f,
  q: _0x55408f,
  isGroup: _0x19cfcd,
  sender: _0x398f37,
  senderNumber: _0x581a96,
  botNumber2: _0x1a28cd,
  botNumber: _0x4cb0e1,
  pushname: _0x365599,
  isMe: _0xd2ce8b,
  isOwner: _0x2a8a9b,
  groupMetadata: _0x4af37f,
  groupName: _0x100b4c,
  participants: _0x9d1c3d,
  groupAdmins: _0x3e9a95,
  isBotAdmins: _0x23613f,
  isAdmins: _0x13e748,
  reply: _0x1e5b93
}) => {
  try {
    if (!_0x55408f) {
      return _0x1e5b93("*Please give me instagram url !!*");
    }
    let _0x241107 = await xdl(_0x55408f);
    let _0x299534 = _0x241107.result.title;
    await _0x3c4e6e.sendMessage(_0x12d709, {
      'video': {
        'url': _0x241107.result.files.high
      },
      'caption': _0x299534
    }, {
      'quoted': _0x16f80f
    });
  } catch (_0x3cc280) {
    _0x1e5b93("*Error !!*");
    console.log(_0x3cc280);
  }
});
cmd({
  'pattern': "automp3",
  'react': '🎵',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x45f868, _0x402dd0, _0xc6f568, {
  from: _0x447a92,
  q: _0x25645c,
  reply: _0x3cb07b
}) => {
  if (!_0x25645c) {
    return await _0x3cb07b("🔍 Please enter a search keyword.");
  }
  try {
    const _0x347514 = await yts(_0x25645c);
    const _0x4557eb = _0x347514.videos;
    if (!_0x4557eb || _0x4557eb.length === 0x0) {
      return await _0x3cb07b("❌ No songs found.");
    }
    await _0x3cb07b("🎶 Search complete. Found " + _0x4557eb.length + " songs. Sending the first now. Others will follow every 40 seconds.");
    let _0x5c1cde = true;
    for (const _0x20b1e5 of _0x4557eb) {
      const _0x567217 = "🎵 *Now Playing:* " + _0x20b1e5.title + "\n👁️ *Views:* " + _0x20b1e5.views + "\n⏱️ *Duration:* " + _0x20b1e5.duration + "\n\n_🎧 Powered by DARK-KNIGHT MD Music_";
      try {
        const _0x135dbe = await (await fetch(_0x20b1e5.thumbnail)).buffer();
        await safeSend(_0x45f868, _0x447a92, {
          'image': _0x135dbe,
          'caption': _0x567217
        });
      } catch (_0x197ae8) {
        console.error("❌ Error sending thumbnail:", _0x197ae8);
      }
      try {
        const _0x53ddfd = await fetchWithRetry("https://yt-five-tau.vercel.app/download?q=" + encodeURIComponent(_0x20b1e5.url) + "&format=mp3");
        const _0x5019a5 = _0x53ddfd.result.download;
        const _0x5cc805 = await getFileSizeInMB(_0x5019a5);
        if (_0x5cc805 > 0x10) {
          await _0x45f868.sendMessage(_0x447a92, {
            'text': "⚠️ Skipping \"" + _0x20b1e5.title + "\" — file size " + _0x5cc805.toFixed(0x2) + " MB exceeds limit."
          });
          continue;
        }
        const _0xd79eba = await (await fetch(_0x5019a5)).buffer();
        await safeSend(_0x45f868, _0x447a92, {
          'audio': _0xd79eba,
          'mimetype': "audio/mpeg",
          'ptt': true
        }, {
          'quoted': _0x402dd0
        });
      } catch (_0xffc6a5) {
        console.error("❌ MP3 fetch/send failed: " + _0x20b1e5.title, _0xffc6a5);
        await _0x45f868.sendMessage(_0x447a92, {
          'text': "⚠️ Could not download \"" + _0x20b1e5.title + "\"."
        });
      }
      if (_0x5c1cde) {
        _0x5c1cde = false;
        continue;
      }
      await _0x45f868.sendMessage(_0x447a92, {
        'text': "⏳ Waiting 40 seconds for the next song..."
      });
      await new Promise(_0x214153 => setTimeout(_0x214153, 40000));
    }
    await _0x45f868.sendMessage(_0x447a92, {
      'text': "✅ Done! Sent " + _0x4557eb.length + " songs."
    });
  } catch (_0x18bf5a) {
    console.error("🛑 Error in automp3 command:", _0x18bf5a);
    await _0x3cb07b("⚠️ Something went wrong. Try again later.");
  }
});
async function fetchWithRetry(_0x367a98, _0x372b37 = 0x3, _0x2ed141 = 0xbb8) {
  for (let _0x4df581 = 0x1; _0x4df581 <= _0x372b37; _0x4df581++) {
    try {
      const _0x1f8a54 = await fetch(_0x367a98);
      if (!_0x1f8a54.ok) {
        throw new Error("Fetch failed with status " + _0x1f8a54.status);
      }
      return await _0x1f8a54.json();
    } catch (_0x380783) {
      console.log("⚠️ Retry " + _0x4df581 + '/' + _0x372b37 + " failed:", _0x380783.message || _0x380783);
      if (_0x4df581 < _0x372b37) {
        await new Promise(_0x374cc4 => setTimeout(_0x374cc4, _0x2ed141));
      }
    }
  }
  throw new Error("🚫 All retries failed for URL: " + _0x367a98);
}
async function getFileSizeInMB(_0x29f171) {
  try {
    const _0x4e819c = await axios.head(_0x29f171);
    const _0x5c679a = _0x4e819c.headers["content-length"];
    return _0x5c679a ? parseFloat(_0x5c679a) / 1048576 : 0x0;
  } catch {
    return 0x0;
  }
}
async function safeSend(_0x53d566, _0x2ca9b9, _0x2286e9, _0x2a0ee3 = {}, _0x274d17 = 0x2) {
  for (let _0x190955 = 0x0; _0x190955 < _0x274d17; _0x190955++) {
    try {
      return await _0x53d566.sendMessage(_0x2ca9b9, _0x2286e9, _0x2a0ee3);
    } catch (_0x1e3399) {
      console.log("📤 Upload try " + (_0x190955 + 0x1) + " failed", _0x1e3399.message || _0x1e3399);
      if (_0x190955 === _0x274d17 - 0x1) {
        throw _0x1e3399;
      }
    }
  }
}
