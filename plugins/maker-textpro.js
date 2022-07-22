let handler = async (m, { conn, command, text }) => {
if (!text) throw 'Masukkan Text... '
let nyenye = `https://api.lolhuman.xyz/api/textprome/${command}?apikey=ff6e31baacb07e58c260d893&text=${text}`
conn.sendFile(m.chat, Buffer.concat(bufs), 'hasil.jpg', 'nih', m) 
}
handler.help = ['blackpink', 'neon', 'greenneon', 'futureneon', 'sandwriting', 'sandsummer', 'sandengraved', 'metaldark', 'neonlight', 'holographic', 'text1917', 'minion', 'deluxesilver', 'newyearcard', 'bloodfrosted', 'hallowen', 'fireworksparkle', 'natureleaves', 'bokeh', 'toxic', 'strawberry', 'box3d', 'roadwarning', 'breakwall', 'icecold', 'luxury', 'cloud', 'summersand', 'horrorblood', 'thunder', 'magma', 'impressiveglitch', 'harrypotter', 'foggywindow', 'watercolor', 'wonderfulgrafitti'] 
handler.tags = ['maker']
handler.command = /^(blackpink|neon|greenneon|futureneon|sandwriting|sandsummer|sandengraved|metaldark|neonlight|holographic|text1917|minion|deluxesilver|newyearcard|bloodfrosted|hallowen|fireworksparkle|natureleaves|bokeh|toxic|strawberry|box3d|roadwarning|breakwall|icecold|luxury|cloud|summersand|horrorblood|thunder|magma|impressiveglitch|harrypotter|foggywindow|watercolor|wonderfulgrafitti)$/i
//buatan hyzer, jgn hapus atuh ðŸ˜Š
module.exports = handler
