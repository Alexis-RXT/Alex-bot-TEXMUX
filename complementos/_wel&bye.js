let handler = async (m, { conn, text, usedPrefix, command, customPrefix }) => {
let stikerwelgc = "./galeria/welgc.webp"
let stikerbyegc = "./galeria/byegc.webp"
if (command == 'welcomegc') {
conn.sendFile(m.chat, stikerwelgc, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: 'α΄Κα΄ π³πΎπππ°π-π±πΎπ-πΌπ³', body: 'Β©π³πππππΎππ', sourceUrl: `https://github.com/Alexis-RXT`, thumbnail: imagen1}}})  
}
if (command == 'byegc') {
conn.sendFile(m.chat, stikerbyegc, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: 'α΄Κα΄ π³πΎπππ°π-π±πΎπ-πΌπ³', body: 'Β©π³πππππΎππ', sourceUrl: `https://github.com/Alexis-RXT`, thumbnail: imagen1}}})
}}
handler.command = ['welcomegc', 'byegc']
export default handler
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]}
