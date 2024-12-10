  //project_name : XPLOADER
// @author : TYLOR
// @youtube : https://www.youtube.com/@heyits_tylor
// @instagram : heyits_tylor
// @telegram : t.me/heyits_tylor
// @github : heyit-tylor
// @tiktok : heyits_tylor
// @whatsapp : +254754783972
//*
//* 
//=================================================//
const fs = require('fs')
const { color } = require('./lib/color')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })
//=================================================//
global.SESSION_ID = process.env.SESSION_ID || 'XPLOADER~23YA2KLa#gIL53W2dUeIPmbj0tVObdlezO4oPsh7ScQNatezMxiU' 
//Enter your Xploader session id here; must start with XPLOADER~

//=================================================//
global.botname = process.env.BOT_NAME || '𝐗𝐩𝐥𝐨𝐚𝐝𝐞𝐫𝐁𝐨𝐭' 
//Your desired bot name

//=================================================//
global.ownernumber = process.env.OWNER_NUMBER || '23276619734' 
//Type your number here

//=================================================//
global.ownername = process.env.OWNER_NAME || 'Take Tee'
//Type your name here

//=================================================//
global.wagc = process.env.GL_PUSH || "https://whatsapp.com/channel/0029VamSWUx77qVNJDy1Jf11"

//=================================================//
global.themeemoji = process.env.GL_EMOJI || ''

//=================================================//
global.wm = process.env.GL_WM || "©𝐗𝐩𝐥𝐨𝐚𝐝𝐞𝐫𝐁𝐨𝐭"

//=================================================//
global.packname = process.env.STICKER_PACK_NAME || "Xploader" 
//The sticker pack name

//=================================================//
global.author = process.env.STICKER_AUTHOR_NAME || "Bot" 
//The sticker author name

//=================================================//
global.creator = process.env.GL_DEVS || "254754783972@s.whatsapp.net"

//=================================================//
global.xprefix = process.env.PREFIX || '.' 
//Set your desired prefix

//=================================================//
global.premium = process.env.PREMIUM_VIP || ["254796180105"] 
//Premium User

//=================================================//
global.hituet = 0 
//=================================================//
global.autoswview = process.env.AUTO_STATUS_SEEN === 'true'
global.autoreact = process.env.AUTO_STATUS_REACT === 'true'
global.anticall = process.env.ANTI_CALL === 'false'
global.adminevent = process.env.ANNOUNCE_MSG === 'false'
global.groupevent = process.env.GROUP_ANNOUNCE_MSG === 'false'
global.welcome = process.env.WELCOME_MSG === 'false'
//=================================================//
global.statusemoji = process.env.STATUS_EMOJI || '🧡'
//Set the emoji that you want to be reacted to status

//=================================================//
global.timezones = process.env.TIMEZONE || "Africa/Nairobi" 
//Don't edit this if you don't know!

//=================================================//
// 
//=================================================//
global.autoblocknumber = process.env.AUTO_BAN || '' 
//set autoblock country code

//=================================================//
global.antiforeignnumber = process.env.AUTO_BLOCK || '' 
//set anti foreign number country code

//=================================================//
//Replies
global.mess = { 
  limit: '*Your limit is used up!*', 
  nsfw: '*Tell the admin to enable NSFW first!*', 
  done: '*Done*', 
  error: '*Sorry, I cannot perform that action!*', 
  success: '*©𝐗𝐩𝐥𝐨𝐚𝐝𝐞𝐫𝐁𝐨𝐭*', 
  premium: '*Only premium users can use this command!*', 
  owner: '*Apologies, only my owner can use this command!*', 
  group: '*This feature becomes available when you use it in a group!*', 
  admin: '*You’ll unlock this feature with me as an admin!*', 
  notadmin: '*This feature will work once you become an admin. A way of ensuring order!*' 
}
//=================================================//
//thumbnail
global.thumb = fs.readFileSync('./XploaderMedia/theme/Xploader.jpg')
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Updated '${__filename}'`, 'red'))
  delete require.cache[file]
  require(file)
})
//=================================================//
