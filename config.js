/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': 'GuaAbuzz17',
}

// Other
global.namabot = 'AsunaChan'
global.namaowner = 'GuaAbuzz'
global.owner = ['6289636827082']
global.premium = ['6289636827082']
global.myweb = 'https://tiktok.com/@guaabuzz'
global.footer = 'GuaAbuzz | © 2022'
global.sc = 'Bikin Sendiri Bang :)'
global.packname = 'GuaAbuzz'
global.author = 'WhatsApp Bot'
global.sessionName = 'GuaAbuzz'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '*Jepang*\n_seikō shimashita_\n*Indonesia*\n_Berhasil_',
    admin: '*Jepang*\n_kono kinō wa , gurūpu kanrisha nomi ga shiyō dekimasu_\n*Indonesia*\n_FITUR INI HANYA BISA DIGUNAKAN OLEH ADMIN GROUP!!!_',
    botAdmin: '*Jepang*\n_kono kinō wa , botto ga kanrisha ni natta toki ni nomi shiyō dekimasu_\n*Indonesia*\n_FITUR INI HANYA BISA DIGUNAKAN JIKA BOT MENJADI ADMIN!!!_',
    owner: '*Jepang*\n_kono kinō wa , shoyūsha gurūpu nomi ga shiyō dekimasu_\n*Indonesia*\n_FITUR INI HANYA BISA DIGUNAKAN OLEH PEMILIK BOT!!!_',
    group: '*Jepang*\n_kono kinō wa gurūpu ni nomi shiyō dekimasu_\n*Indonesia*\n_FITUR INI HANYA BISA DIGUNAKAN UNTUK GRUP!!!_',
    private: '*Jepang*\n_kono kinō wa , puraibēto chatto de nomi shiyō dekimasu_\n*Indonesia*\n_FITUR INI HANYA BISA DIGUNAKAN UNTUK PRIVATE CHAT!!!_',
    bot: '*Jepang*\n_kono kinō wa , yūzā koyū no botto bangō nomidesu_\n*Indonesia*\n_FITUR INI HANYA KHUSUS PENGGUNA NOMOR BOT!!!_',
    wait: '*Jepang*\n_chotto matte_\n*Indonesia*\n_Tunggu Sebentar_',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
    error: 'Fitur sedang error!',
    example1: 'Welcome @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @subject (Group Name)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)'
,
    example2: 'Good Bye @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @subject (Group Name)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)'    
    
}
    global.limitawal = {
    premium: "Infinity",
    free: 20,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./lib/hisoka.jpg')

//Ambil dr chika
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
