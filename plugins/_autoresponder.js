import { sticker } from '../lib/sticker.js'
let handler = m => m

handler.all = async function (m, {conn}) {
let chat = global.db.data.chats[m.chat]
    
if (m.mentionedJid.includes(this.user.jid) && m.isGroup && !chat.isBanned) {
let stiker = await sticker(imagen4, false, global.packname, global.author)  
this.sendFile(m.chat, stiker, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: '𝘼𝙇𝙀𝙓-𝘽𝙊𝙏 ', body: '𝘼𝙇𝙀𝙓𝙄𝙎 -𝙍𝙓𝙏', sourceUrl: `https://github.com/Alexis-RXT`, thumbnail: imagen1}}})}
    
return !0 }
export default handler
