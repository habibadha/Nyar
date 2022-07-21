let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Parameter'
  m.reply('*Wait Ngab*\nProses...')
  let res = `https://restapi-production-3d97.up.railway.app/api/textpro/neon-light?text=${response[0]}&apikey=APIKEY`
  conn.sendFile(m.chat, res, 'Hz22.jpg', `Sudah Jadi`, m, false)
}
handler.help = ['neonlight'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(neonlight)$/i

module.exports = handler
