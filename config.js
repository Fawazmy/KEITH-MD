//GIFTED-MD//

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "https://telegra.ph/file/204481823350f368c1826.mp4";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kkeizzah@gmail.com";
global.location = "Migori,Kenya";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://wasitech10:WASImd##12@cluster0.eclhxiz.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github = process.env.GITHUB || "https://github.com/Keithkeizzah/KEITH-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/ad00848dda6847a67ffb0.jpg";
global.devs = "254748387615";
global.sudo = process.env.SUDO || "254748387615";
global.owner = process.env.OWNER_NUMBER || "2348050938994";
global.style = process.env.STYLE || "5";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 5;
global.disablepm = process.env.DISABLE_PM || "true";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/ad00848dda6847a67ffb0.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "254748387615";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "254748387615";

global.api_smd = "https://api-smd.onrender.com";
global.scan = "https://web.giftedtechnexus.co.ke";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0Q2Q1dEaCsyRU8wckRUWEw1RnZTaFljTWJYWGF4NjF4OHp0a05EZk5Xbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM0Y3TGNFbmtGcXdLeVpVN2hMV0JReFJEaFUxc2NZVGxRNHNHQnk2SXUyWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTRDVFZ1MyKy92d2svVkJoR1h4RmhKN2I5WURVaVg2NDFMbEpnMjBaUjJZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsdUdHRkxQTTBYZVNMOFowWUNHbWRYYVdtQ0xSZ0NYc3l6S1ZDMWhmN1Z3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlDSk4xa3Jmbi9ZeGJlWGFwelpxdFFpY3l0VHBvQUtqdEN2R2I4bU5DV3c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkY2ZXB5MkwyNDJKUjJCdk9FQ2FYOTV4UmUwRlhPSWlOaVpna1E2V0pRVEU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0lYWVFiNGhTd3ptKzNhZ2RzSU55aG9Xcjl0OG5kOWFLSTZGNWNyTUxIZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUzRyNzZVUUY2bERIU0JEN3h6Nm90QmovRThYakRoa0JXMUFyaFRmVW5WTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBCYk5KdzVwdnEzSFNkU3VWcmU0YUs3ZTdQMzdOSHlmUTQza3RudXNwWm04VzhZWXZRZjI0YkkwUXJzekQ4VkZheFlpYUxhbTBmbldiRVdjZGcrRGlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMwLCJhZHZTZWNyZXRLZXkiOiJPZ2FqU244dE1NSm51NDNVTytLb0QvMEhuMUsrNk9zRHBnQ1Rnd1Z1K2c0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI4Z1hHS2xLV1J5aWF3UmtsZ0FaSGVBIiwicGhvbmVJZCI6IjY0Y2Y5YzcxLWVlMTEtNGIxNy1hZDEzLWEyYTBhYTJmYTE4YiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWZzJTc3lrL3BiczNrckpSM3JjQUU1TXZCUXc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieFFiRXhrUjdSRExxa3NHVnlKRXlQSjZqSVk0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik5TRlJURURDIiwibWUiOnsiaWQiOiIyMzQ4MDUwOTM4OTk0OjM4QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IklOVkVTVE9SIEZBV0FaIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQZk8ySThHRUpHUjByVUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI4bE51UDBoR2pFMUIwclozT2F1dlV6K1VienlEaU0wS2FwbmUzY0o4cFJjPSIsImFjY291bnRTaWduYXR1cmUiOiJlR24xUDU3dU1rUmlRZEdRcUFkYmVUQ0FWS1R5WUtEbXlOOHJXUDJyWk90TGRvSXNuWFJsMUJJZ2VzSmMxNnZzQnpWKzdzYnBsTjVzUTM3aHFIajNBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNXk2NFpycENCYTlENGQwWlM4djhIY0UxU09BVDYxWFJQdVJ1M3o3eXdrOWRpQ1JCRC9IcTdQY1l4RXk0ZWRJNlFBaHlZUkR6a0hZQThSbk9ENFZqaHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MDUwOTM4OTk0OjM4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmZKVGJqOUlSb3hOUWRLMmR6bXJyMU0vbEc4OGc0ak5DbXFaM3QzQ2ZLVVgifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjMxMDc0ODcsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRU43In0="
module.exports = {
  menu: process.env.MENU || "2", /*Leave it in Default else bot will Crash*/
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "3.0.0",
  caption: process.env.CAPTION || "𝐌𝐈𝐆𝐇𝐓𝐘 𝐊𝐄𝐈𝐓𝐇-𝐌𝐃",
  author: process.env.PACK_AUTHER || "Keith Tech",
  packname: process.env.PACK_NAME || "Keith-Md♥️",
  botname: process.env.BOT_NAME || "𝐊𝐄𝐈𝐓𝐇-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "𝐊𝐄𝐈𝐓𝐇𝐊𝐄𝐈𝐙𝐙𝐀𝐇",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "KEITH").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
