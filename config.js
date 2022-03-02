let fs = require('fs')
global.owner = ['60164492583']
global.mods = ['60164492583']
global.prems = JSON.parse(fs.readFileSync('./src/premium.json'))
global.APIs = {
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  xteam: 'https://api.xteam.xyz',
  melcanz: 'httpa://melcanz.com',
  lol: 'https://api.lolhuman.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = {
  'https://api.xteam.xyz': 'apivproject',
  'https://melcanz.com': 'elaina',
  'https://api.lolhuman.xyz': 'pkebgk8248jskrkfm',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}
global.stiker_wait = 'Stiker sedang dibuat...'
global.packname = 'Bot WhatsApp'
global.author = 'Sticker'
global.email = ''
global.fla = ''
global.wm = ''
global.media = ''
global.wait = ''
global.eror = ''
global.multiplier = 69
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '',
      money: '',
      potion: '',
      diamond: '',
      common: '',
      uncommon: '',
      mythic: '',
      legendary: '',
      pet: '',
      sampah: '',
      armor: '',
      sword: '',
      kayu: '',
      batu: '',
      string: '',
      kuda: '',
      kucing: '',
      anjing: '',
      petFood: '',
      gold: '',
      emerald: ''
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})