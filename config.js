/**
 * Base By Dika Ardnt.
 * Recode By Hendra
 * Sc Ya Gua Enc
 * Harga Sc No Enc 20k
 * Kalau Mau Recode, Edit Aja Di confiq.js
 * Contact Me On http://Wa.me/436507000206999
 * Follow 
 */

//gausah di apa² in!
const fs = require('fs')
const chalk = require('chalk')

//—————「 Website Apikey 」—————//
global.APIs = {
    //gausah di apa² in!
    zenz: '',
}

//—————「 Website Apikey 」—————//
global.APIKeys = {
    //gausah di apa² in, udah free apikey :)
    '': 'GuaAbuzz17',
}

//—————「 Set Nama Bot & Own & Agama 」—————//
//kok pake agama bang? fitur toleransi bang
global.namabot = 'HendraBotz'
global.namaowner = 'Hendra'
global.agama = 'Islam'

//—————「 Setting Owner 」—————//
global.owner = ['436507000206', '436507000206']
global.premium = ['436507000206']

//—————「 Setting Nomor Donasi 」—————//
//ubah aja kalau ada yg gapunya kasih tanda -
global.telkomsel = ['6283181085070']
global.telkomsel = ['6283181085070']
global.indosat = ['-']
global.tri = ['-']
global.smartfren = ['-']
global.gopay = ['-']
global.dana = ['-']
global.ovo = ['-']
global.saweria = ['-']

//—————「 Set Kebutuhan Button 」—————//
//ubah aja kalau ada yang gapunya gsh di hps anggap aja credits :)
global.github = ''
global.scbot = ''
global.myweb = '-'

//—————「 Set Wm 」—————//
global.packname = 'Hendra'
global.author = 'Hendra '

//—————「 Set Nama Session 」—————//
//gausah di apa² in!
global.sessionName = 'session'

//—————「 Set Prefix 」—————//
//gausah di apa² in!
global.prefa = ['', '!', '.', '🐦', '🐤', '🗿']

//—————「 Set Simbol 」—————//
//terserah mau ubah atau nggak
global.sp = '☆'

//—————「 Set Message 」—————//
//terserah mau ubah apa nggak
global.mess = {
    success: 'Done Ngab..!',
    admin: 'Perintah Ini Hanya Bisa Digunakan Oleh Admin !',
    botAdmin: 'Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin !',
    owner: 'Perintah Ini Hanya Bisa Digunakan Oleh Owner !',
    group: 'Perintah Ini Hanya Bisa Digunakan Di Group Chat !',
    private: 'Perintah Ini Hanya Bisa Digunakan Di Private Chat !',
    bot: 'Fitur Khusus Pengguna Nomor Bot !',
    wait: '⏳ Sedang Di Proses !',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12 !',
    error: 'Fitur Sedang Error !',
}

//—————「 Set Limit 」—————//
//terserah mau ubah atau nggak
global.limitawal = {
    premium: "Infinity",
    free: 100,
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

//—————「 Set Image 」—————//
//terserah mau ubah apa nggak, menurut gua jangan di ubah!
global.thumb = fs.readFileSync('./storage/menu/IMG-20220530-WA0018.jpg')
global.visoka = {
    url: 'https://telegra.ph/file/de381b0caeb315a99c68a.mp4'
}

//—————「 Set Random Image Menu 」—————//
//gausah di apa² in!
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//—————「 Batas Akhir 」—————//
//gausah si apa² in!
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
