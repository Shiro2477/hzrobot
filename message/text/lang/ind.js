/* eslint-disable quotes */
const fs = require('fs-extra')
const { prefix } = JSON.parse(fs.readFileSync('config.json'))

exports.wait = () => {
    return `Mohon tunggu sebentar~`
}

exports.ok = () => {
    return `Ok desu~`
}

exports.wrongFormat = () => {
    return `Format salah! Silakan cek cara penggunaan di *${prefix}menu*.`
}

exports.emptyMess = () => {
    return `Harap masukkan pesan yang ingin disampaikan!`
}

exports.cmdNotFound = (cmd) => {
    return `Command *${prefix}${cmd}* tidak ditemukan!`
}

exports.blocked = (ownerNumber) => {
    return `Bot tidak menerima panggilan. Karena kamu telah melanggar rules, maka kamu telah diblok!\n\nHarap hubungi owner: wa.me/${ownerNumber.replace('@c.us', '')}`
}

exports.ownerOnly = () => {
    return `Command ini khusus Owner-sama!`
}

exports.doneOwner = () => {
    return `Sudah selesai, Owner-sama~`
}

exports.groupOnly = () => {
    return `Command ini hanya bisa digunakan di dalam grup!`
}

exports.adminOnly = () => {
    return `Command ini hanya bisa digunakan oleh admin grup!`
}

exports.notNsfw = () => {
    return `Command NSFW belum diaktifkan!`
}

exports.nsfwOn = () => {
    return `Command NSFW berhasil *diaktifkan*!`
}

exports.nsfwOff = () => {
    return `Command NSFW berhasil *dinonaktifkan*!`
}

exports.nsfwAlready = () => {
    return `Command NSFW sudah diaktifkan sebelumnya.`
}

exports.addedGroup = (chat) => {
    return `Terima kasih telah mengundangku, para member *${chat.contact.name}*!\n\nSilakan register dengan cara ketik:\n*${prefix}register* nama | umur`
}

exports.nhFalse = () => {
    return `Kode tidak valid!`
}

exports.listBlock = (blockNumber) => {
    return `------[ HALL OF SHAME ]------\n\nTotal diblokir: *${blockNumber.length}* user\n`
}

exports.notPremium = () => {
    return `Maaf! Command ini khusus untuk user premium saja\n Jiak ingin menjadi user premium silahkan hubungi owner : wa.me/6285156022091`
}

exports.notAdmin = () => {
    return `User bukan seorang admin!`
}

exports.adminAlready = () => {
    return `Tidak dapat mem-promote user yang merupakan admin!`
}

exports.botNotPremium = () => {
    return `Bot ini tidak mendukung command premium. Silakan hubungi pemilik bot ini.`
}

exports.botNotAdmin = () => {
    return `Jadikan bot sebagai admin terlebih dahulu!`
}

exports.ytFound = (result) => {
    return `*Video ditemukan!*\n\n➸ *Judul*: ${result.title}\n\nMedia sedang dikirim, mohon tunggu...`
}

exports.notRegistered = () => {
    return `Kamu belum terdaftar di database!\n\nSilakan register dengan format:\n*${prefix}register* nama | umur\n\nNote:\nHarap save nomor ku agar bisa mendapatkan serial!!`
}

exports.registered = (name, age, userId, time, serial) => {
    return `*「 REGISTRATION 」*\n\nAkun kamu telah terdaftar dengan data:\n\n➸ *Nama*: ${name}\n➸ *Umur*: ${age}\n➸ *ID*: ${userId}\n➸ *Waktu pendaftaran*: ${time}\n➸ *Serial*: ${serial}\n\nCatatan:\nJangan pernah menyebarkan data *serial* ke pada siapapun!\n\nKetik *${prefix}rules* terlebih dahulu ya~`
}

exports.registeredAlready = () => {
    return `Kamu sudah mendaftar sebelumnya.`
}

exports.received = (pushname) => {
    return `Halo ${pushname}!\nTerima kasih telah melapor, laporanmu akan kami segera terima.`
}

exports.daily = (time) => {
    return `Maaf, tetapi kamu telah mencapai limit menggunakan command ini.\nSilakan tunggu *${time.hours}* jam *${time.minutes}* menit *${time.seconds}* detik lagi.`
}

exports.videoLimit = () => {
    return `Ukuran video terlalu besar!`
}

exports.joox = (result) => {
    return `*Lagu ditemukan!*\n\n➸ Media sedang dikirim, mohon tunggu...`
}

exports.gsm = (result) => {
    return `➸ *Model HP*: ${result.title}\n➸ *Spesifikasi*: ${result.spec}`
}

exports.receipt = (result) => {
    return `${result.title}\n\n${result.desc}\n\n*Bahan*: ${result.bahan}\n\n*Cara membuat*:\n${result.cara}`
}

exports.ytResult = (urlyt, title, channel, duration, views) => {
    return `➸ *Judul*: ${title}\n➸ *Channel*: ${channel}\n➸ *Durasi*: ${duration}\n➸ *Views*: ${views}\n➸ *Link*: ${urlyt}`
}
exports.ytR = (url, title, author, duration, views) => {
    return `➸ *Judul*: ${title}\n➸ *Channel*: ${author}\n➸ *Durasi*: ${duration}\n➸ *Views*: ${views}\n➸ *Link*: ${url}`
}

exports.tiktokResult = (source, name, nickName, title, urlVideo) => {
    return `From : ${source}\n➸ *Name*: ${name}\n➸ *NickName*: ${nickName}\n➸ *Title*: ${title}\n➸ *Link*: ${urlVideo}`
}

exports.profile = (username, status, premi, benet, adm, level, requiredXp, xp) => {
    return `-----[ *USER INFO* ]-----\n\n➸ *Username*: ${username}\n➸ *Status*: ${status}\n➸ *Premium*: ${premi}\n➸ *Banned*: ${benet}\n➸ *Admin*: ${adm}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=\n\nYour progress:\n➸ *Level*: ${level}\n➸ *XP*: ${xp} / ${requiredXp}`
}

exports.detectorOn = (name, formattedTitle) => {
    return `*「 ANTI GROUP LINK 」*\n\nPerhatian untuk penghuni grup ${(name || formattedTitle)}\nGrup ini memiliki anti-group link detector, apabila ada salah satu member mengirim group link di sini maka dia akan ter-kick secara otomatis.\n\nSekian terima kasih.\n- Admin ${(name || formattedTitle)}`
}

exports.detectorOff = () => {
    return `Fitur anti-group link berhasil *dinonaktifkan*!`
}

exports.detectorOnAlready = () => {
    return `Fitur anti-group link telah diaktifkan sebelumnya.`
}

exports.antiNsfwOn = (name, formattedTitle) => {
    return `*「 ANTI NSFW LINK 」*\n\nPerhatian untuk penghuni grup ${(name || formattedTitle)}\nGrup ini memiliki anti-NSFW link detector, apabila ada salah satu member mengirim link NSFW/porn di sini maka dia akan ter-kick secara otomatis.\n\nSekian terima kasih.\n- Admin ${(name || formattedTitle)}`
}

exports.antiNsfwOff = () => {
    return `Fitur anti-NSFW link berhasil *dinonaktifkan*!`
}

exports.antiNsfwOnAlready = () => {
    return `Fitur anti-NSFW link telah diaktifkan sebelumnya.`
}

exports.linkDetected = () => {
    return `*「 ANTI GROUP LINK 」*\n\nKamu mengirim link group chat!\nMaaf tapi kami harus mengeluarkan mu...\nSelamat tinggal~`
}

exports.levelingOn = () => {
    return `Fitur leveling berhasil *diaktifkan*!`
}

exports.levelingOff = () => {
    return `Fitur leveling berhasil *dinonaktifkan*!`
}

exports.levelingOnAlready = () => {
    return `Fitur leveling telah diaktifkan sebelumnya.`
}

exports.levelingNotOn = () => {
    return `Fitur leveling belum diaktifkan!`
}

exports.levelNull = () => {
    return `Kamu belum memiliki level!`
}

exports.welcome = (event) => {
    return `Selamat datang @${event.who.replace('@c.us', '')}!\n\nSemoga betah terus di grup kami ya~`
}

exports.welcomeOn = () => {
    return `Fitur welcome berhasil *diaktifkan*!`
}

exports.welcomeOff = () => {
    return `Fitur welcome berhasil *dinonaktifkan*!`
}

exports.welcomeOnAlready = () => {
    return `Fitur welcome telah diaktifkan sebelumnya.`
}

exports.minimalDb = () => {
    return `Perlu setidaknya *10* user yang memiliki level di database!`
}

exports.autoStikOn = () => {
    return `Fitur auto-stiker berhasil *diaktifkan*!`
}

exports.autoStikOff = () => {
    return `Fitur auto-stiker berhasil *dinonaktifkan*!`
}

exports.autoStikOnAlready = () => {
    return `Fitur auto-stiker telah diaktifkan sebelumnya.`
}

exports.afkOn = (pushname, reason) => {
    return `Fitur AFK berhasil *diaktifkan*!\n\n➸ *Username*: ${pushname}\n➸ *Alasan*: ${reason}`
}

exports.afkOnAlready = () => {
    return `Fitur AFK telah diaktifkan sebelumnya.`
}

exports.afkMentioned = (getReason, getTime) => {
    return `*「 AFK MODE 」*\n\nSssttt! Orangnya lagi AFK, jangan diganggu!\n➸ *Alasan*: ${getReason}\n➸ *Sejak*: ${getTime}`
}

exports.afkDone = (pushname) => {
    return `*${pushname}* telah kembali dari AFK! Selamat datang kembali~`
}

exports.gcMute = () => {
    return `*「 MUTED 」*\n\nHanya admin yang dapat mengirim pesan ke grup ini.`
}

exports.gcUnmute = () => {
    return `*「 UNMUTED 」*\n\nSekarang semua anggota dapat mengirim chat di grup ini.`
}

exports.notNum = (q) => {
    return `"${q}", bukan angka!`
}

exports.playstore = (app_id, title, developer, description, price, free) => {
    return `➸ *Nama*: ${title}\n➸ *ID*: ${app_id}\n➸ *Developer*: ${developer}\n➸ *Gratis*: ${free}\n➸ *Harga*: ${price}\n➸ *Deskripsi*: ${description}`
}

exports.shopee = (nama, harga, terjual, shop_location, description, link_product) => {
    return `➸ *Nama*: ${nama}\n➸ *Harga*: ${harga}\n➸ *Terjual*: ${terjual}\n➸ *Lokasi*: ${shop_location}\n➸ *Link produk*: ${link_product}\n➸ *Deskripsi*: ${description}`
}

exports.pc = (pushname) => {
    return `*「 REGISTRATION 」*\n\nAkun kamu berhasil terdaftar! Silakan cek pesan ku di private chat mu ya ${pushname}~ :3\n\nNote:\nJika kamu tidak menerima pesan, artinya kamu belum save nomor bot.`
}

exports.registeredFound = (name, age, time, serial, userId) => {
    return `*「 REGISTERED 」*\n\nAkun ditemukan!\n\n➸ *Nama*: ${name}\n➸ *Umur*: ${age}\n➸ *ID*: ${userId}\n➸ *Waktu pendaftaran*: ${time}\n➸ *Serial*: ${serial}`
}

exports.registeredNotFound = (serial) => {
    return `Akun dengan serial: *${serial}* tidak ditemukan!`
}

exports.ytPlay = (result) => {
    return `*「 PLAY 」*\n\n➸ *Judul*: ${result.title}\n➸ *Durasi*: ${result.duration}\n➸ *Link*: ${result.url}\n\nMedia sedang dikirim, mohon tunggu...`
}

exports.music = (result) => {
    return `*「 PLAY 」*\n\n➸ *Judul*: ${result.title}\n➸ *Durasi*: ${result.duration}\n➸ *Channel*: *${result.channel}*\n\nMedia sedang dikirim, mohon tunggu...`
}

exports.pcOnly = () => {
    return `Command ini hanya bisa digunakan di dalam private chat saja!`
}

exports.linkNsfw = () => {
    return `*「 ANTI NSFW LINK 」*\n\nKamu telah mengirim link NSFW!\nMaaf, tapi aku harus mengeluarkan mu...`
}

exports.ageOld = () => {
    return `Kamu terlalu tua untuk menggunakan fitur ini! Mohon kembali ke masa muda anda agar bisa menggunakannya.`
}

exports.menuText = () => {
    return `
╔══❉ *𝐓𝐞𝐱𝐭 𝐌𝐚𝐤𝐞𝐫 (VF)* ❉═══
║
║ Untuk Spasi Teks menggunakan *+*
║ contoh : ${prefix}text1 neon kael+bot
║
╟⊱ *${prefix}text1 burnpaper* _teks_
╟⊱ *${prefix}text1 candlemug* _teks_
╟⊱ *${prefix}text1 lovemsg* _teks_
╟⊱ *${prefix}text1 mugflower* _teks_
╟⊱ *${prefix}text1 narutobanner* _teks_
╟⊱ *${prefix}text1 paperonglass* _teks_
╟⊱ *${prefix}text1 romancetext* _teks_
╟⊱ *${prefix}text1 shadowtext* _teks_
╟⊱ *${prefix}text1 tiktokeffect* _teks_
║
╚══❉ *Hzr-Bot* ❉════
    `
}

exports.fakeLink = () => {
    return `Ups, link ini terlihat mencurigakan. Demi keamanan grup, aku harus mengeluarkan mu...\n`
}

exports.muteChatOn = () => {
    return `Berhasil *mute* bot pada grup ini!`
}

exports.muteChatOff = () => {
    return `Berhasil *unmute* bot pada grup ini!`
}

exports.muteChatOnAlready = () => {
    return `Mute telah diaktifkan di grup ini sebelumnya!`
}

exports.randomQuran = (ranquran) => {
    return `
    بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
*Nama surah*: ${ranquran.data.result.nama} / ${ranquran.data.result.asma}
*Arti*: ${ranquran.data.result.arti}
*Surat ke*: ${ranquran.data.result.nomor}
*Keterangan*: ${ranquran.data.result.keterangan}
*Link audio*: ${ranquran.data.result.audio}
    `
}

exports.hadis = () => {
    return `
_*Assalamu'alaikum wr. wb.*_

*Daftar hadis*:
1. Hadis Bukhari ada 6638 hadis
    _usage_: ${prefix}hadis bukhari 1
2. Hadis Muslim ada 4930 hadis
    _usage_: ${prefix}hadis muslim 25
3. Hadis Tirmidzi ada 3625 hadis
    _usage_: ${prefix}hadis tirmidzi 10
4. Hadis nasai ada 5364 hadis
    _usage_: ${prefix}hadis nasai 6
5. Hadis Ahmad ada 4305 hadis
    _usage_: ${prefix}hadis ahmad 5
6. Hadis Abu Daud ada 4419 hadis
    _usage_: ${prefix}hadis abudaud 45
7. Hadis Malik ada 1587 hadis
    _usage_: ${prefix}hadis malik 45
8. Hadis Ibnu Majah ada 4285 hadis
    _usage_: ${prefix}hadis ibnumajah 8
9. Hadis Darimi ada 2949 hadis
    _usage_: ${prefix}hadis darimi 3

*Semoga bermanfaat*
_*Wassalam*_
    `
}

exports.limit = () => {
    return `
*── 「 LIMIT 」 ──*

Limit penggunaan kamu telah habis! Silakan lakukan hal berikut:
❏ *_Tunggu hingga jam 00:00 WIB_*
    `
}

exports.asmaulHusna = (assna) => {
    return `
───❉ 𝐀𝐬𝐦𝐚𝐮𝐥 𝐇𝐮𝐬𝐧𝐚 ❉──

*${assna.name}*
❏ *Asmaul husna ke*: ${assna.number}
❏ *Pelafalan*: ${assna.transliteration}
❏ *Inggris*: ${assna.en.meaning}
    `
}

exports.menu = (jumlahUser, level, xp, role, pushname, requiredXp, premium) => {
    return `
═════❉ *[ WELCOME ]* ❉═════

╔═════════❉
║➸ *Nama*: ${pushname}
║➸ *Level*: ${level}
║➸ *XP*: ${xp} / ${requiredXp}
║➸ *Premium*: ${premium}
╚═════════❉
║
║➸ *Total User* : *${jumlahUser}*
║
╚═════════❉
╔═════════❉ 
║          *MENU*
║
║ *[1]* Downloader
║ *[2]* Bot
║ *[3]* Misc
║ *[4]* Sticker
║ *[5]* Text Maker
║ *[6]* Weeaboo
║ *[7]* Fun
║ *[8]* Moderation
║ *[9]* NSFW (PREMIUM)
║ *[10]* Owner
║ *[11]* Leveling
║ *[12]* Premium Only
║
║          *HzrBot*
╚═════════❉ 
Ketik *${prefix}menu* angka_index untuk membuka menu page yang dipilih.

Catatan:
Perlakukan bot secara baik, dev akan bertindak tegas apabila user melanggar rules.
Bot ini terdapat anti-spam yang berupa cooldown command selama *5 detik* setiap kali pemakaian.

Jangan lupa Share BOT ini Supaya makin Ramai.
    `
}

exports.menuDownloader = () => {
    return `
╔═══❉ *DOWNLOADER* ❉════
║       ║PREMIUM║
╟⊱ *${prefix}igdl* link video IG
╟⊱ *${prefix}ytmp4* link video YT
╟⊱ *${prefix}tiktok* link video Tiktok
╟⊱ *${prefix}cocodl* link video Cocofun
║
╚═══❉ 
╔═══❉ *PLAY MUSIC*
║      
╟⊱ *${prefix}ytmp3* link
╟⊱ *${prefix}music* judul lagu
╟⊱ *${prefix}play* judul lagu 
║
╚═══❉
╔═══❉ *MODE TIKTOK*
║       ║FREE║
╟⊱ *${prefix}tiktokpic* username tiktok
╟⊱ *${prefix}tokhastag* hastag tiktok
╟⊱ *${prefix}tiktoknowm* link video
║
╚═══❉ 
╔═══❉ *APLIKASI MOD* 
║   
╟⊱ *${prefix}moddroid* Nama APK
╟⊱ *${prefix}happymod* nama APK
║
╚═══❉ 
╔═══❉ *FITUR LAINNYA* 
║
╟⊱ *${prefix}movie* Judul Film    
║   
╚═══❉ *_Index of [1]_* ❉════
    `
}

exports.menuBot = () => {
    return `
-----[ BOT ]-----

1. *${prefix}rules*
Wajib baca.
Aliases: *rule*
Usage: *${prefix}rules*

2. *${prefix}menu*
Menampilkan commands yang tersedia.
Aliases: *help*
Usage: *${prefix}menu* angka_index

3. *${prefix}status*
Menampilkan status bot.
Aliases: *stats*
Usage: *${prefix}status*

4. *${prefix}listblock*
Cek nomor yang diblokir.
Aliases: -
Usage: *${prefix}listblock*

5. *${prefix}ping*
Cek speed bot.
Aliases: *p*
Usage: *${prefix}ping*

6. *${prefix}delete*
Hapus pesan dari bot.
Aliases: *del*
Usage: Reply pesan yang dihapus dengan caption *${prefix}delete*.

7. *${prefix}report*
Laporkan bug ke dev.
Aliases: -
Usage: *${prefix}report* pesan

8. *${prefix}tos*
Syarat dan ketentuan. (TOS)
Aliases: -
Usage: *${prefix}tos*

9. *${prefix}join*
Join grup via link.
Aliases: -
Usage: *${prefix}join* link_group

10. *${prefix}ownerbot*
Mengirim kontak owner.
Aliases: -
Usage: *${prefix}ownerbot*

11. *${prefix}getpic*
Mengirim foto profil user.
Aliases: -
Usage: *${prefix}getpic* @user/62812xxxxxxxx

12. *${prefix}premiumcheck*
Cek masa aktif premium.
Aliases: *cekpremium*
Usage: *${prefix}premiumcheck*

13. *${prefix}premiumlist*
Cek list user premium.
Aliases: *listpremium*
Usage: *${prefix}premiumlist*

_Index of [2]_
    `
}

exports.menuMisc = () => {
    return `
-----[ MISC ]-----

1. *${prefix}say*
Bot akan mengulang pesan mu.
Aliases: -
Usage: *${prefix}say* teks

2. *${prefix}lirik*
Mencari lirik lagu.
Aliases: -
Usage: *${prefix}lirik* judul_lagu

3. *${prefix}shortlink*
Membuat shortlink.
Aliases: -
Usage: *${prefix}shortlink* link

4. *${prefix}wikipedia*
Mengirim Wikipedia dari teks yang diberikan.
Aliases: *wiki*
Usage: *${prefix}wikipedia* teks

5. *${prefix}kbbi*
Mengirim definisi kata dari KBBI.
Aliases: -
Usage: *${prefix}kbbi* teks

6. *${prefix}igstalk*
Stalk akun Instagram.
Aliases: -
Usage: *${prefix}igstalk* username

7. *${prefix}gsmarena*
Mengirim info spesifikasi HP dari GSMArena.
Aliases: -
Usage: *${prefix}gsmarena* model_hp

8. *${prefix}receipt*
Mengirim resep makanan.
Aliases: *resep*
Usage: *${prefix}receipt* nama_makanan

9. *${prefix}yts*
Mengirim hasil pencarian di YouTube.
Aliases: *yts*
Usage: *${prefix}yts* query

10. *${prefix}tts*
Membuat Text to Speech. Kalian perlu kode bahasa setiap menggunakan, cek di sini https://id.wikipedia.org/wiki/Daftar_bahasa_menurut_ISO_639-2
Aliases: -
Usage: *${prefix}tts* kode_bahasa | teks

11. *${prefix}afk*
Set akun kamu ke mode AFK, aku akan mengirim pesan ke orang yang me-mention kamu.
Aliases: -
Usage: *${prefix}afk* alasan. Kirim pesan ke grup untuk menonaktifkan mode AFK.

12. *${prefix}distance*
Untuk mengetahui jarak dari kotamu ke kota yang kamu tuju
Aliases: -
Usage: *${prefix}distance* kota_asal | kota_tujuan

14. *${prefix}math*
Kalkulator.
* = Perkalian
+ = Pertambahan
- = Pengurangan
/ = Pembagian
Aliases: -
Usage: *${prefix}math* 12*12

15. *${prefix}listsurah*
Melihat list surah Al-Qur'an.
Aliases: -
Usage: *${prefix}listsurah*

16. *${prefix}surah*
Mengirim surah Al-Qur'an.
Aliases: -
Usage: *${prefix}surah* nomor_surah

17. *${prefix}js*
Mengetahui jadwal shalat di daerah kalian
Aliases: - 
Usage: *${prefix}js* namadaerah

18. *${prefix}mutual*
Dapatkan kontak WA random.
Aliases: -
Usage: *${prefix}mutual*

19. *${prefix}whois*
IP look-up.
Aliases: -
Usage: *${prefix}whois* ip_address

21. *${prefix}sms*
Mengirim SMS secara anonymous. (SMS gateway)
Aliases: -
Usage: *${prefix}sms* pesan | nomor_penerima

22. *${prefix}toxic*
Random toxic.
Aliases: -
Usage: *${prefix}toxic*

23. *${prefix}tafsir*
Tafsir ayat surah Al-Qur'an.
Aliases: -
Usage: *${prefix}tafsir* nama_surah  ayat

24. *${prefix}motivasi*
Kata-kata motivasi.
Aliases: -
Usage: *${prefix}motivasi*

26. *${prefix}alkitab*
Al-Kitab search.
Aliases: -
Usage: *${prefix}* nama_injil

27. *${prefix}cekongkir*
Cek ongkos kirim.
Aliases: -
Usage: *${prefix}ongkir* kurir | asal | tujuanl

28. *${prefix}reminder*
Pengingat. 
*s* - detik
*m* - menit
*h* - jam
*d* - hari
Aliases: -
Usage: *${prefix}reminder* 10s | pesan_pengingat

29. *${prefix}imagetourl*
Image uploader.
Aliases: *imgtourl*
Usage: Kirim gambar dengan caption *${prefix}imagetourl* atau reply gambar dengan caption *${prefix}imagetourl*.

30. *${prefix}infohoax*
Cek update info hoax.
Aliases: -
Usage: *${prefix}infohoax*

31. *${prefix}trentwt*
Cek trending di Twitter.
Aliases: -
Usage: *${prefix}trentwt negara*

32. *${prefix}jobseek*
Mencari info lowongan kerja.
Aliases: -
Usage: *${prefix}jobseek*

33. *${prefix}spamcall*
Spam call.
Aliases: -
Usage: *${prefix}spamcall* 812xxxxxxxx

34. *${prefix}spamsms*
Spam SMS.
Aliases: -
Usage: *${prefix}spamsms* 0812xxxxxxxx jumlah_pesan

35. *${prefix}email*
Mengirim email secara anonymous.
Aliases: -
Usage: *${prefix}email* email_target | subjek | pesan_email

36. *${prefix}quotes*
Random quotes bahasa indonesia.
Aliases: -
Usage: *${prefix}quotes*

37. *${prefix}genshininfo*
Kirim info karakter Genshin Impact.
Aliases: *genshin*
Usage: *${prefix}genshininfo* nama_karakter

38. *${prefix}translate*
Terjemahkan teks.
Aliases: *trans*
Usage: *${prefix}translate* teks | kode_bahasa

39. *${prefix}hadis*
Info hadis.
Aliases: -
Usage: *${prefix}hadis* kitab_hadis | nomor_hadis

40. *${prefix}asmaulhusna*
Asmaul husna.
Aliases: -
Usage: *${prefix}asmaulhusna* nomor_asmaulhusna

41. *${prefix}randomquran*
Kirim surah Al-Qur'an secara random.
Aliases: -
Usage: *${prefix}randomquran*

42. *${prefix}coronavirus*
Cek kasus COVID-19.
Aliases: *corona*
Usage: *${prefix}coronavirus* negara

43. *${prefix}tomp3*
Format video ke MP3.
Aliases: -
Usage: Kirim video dengan caption *${prefix}tomp3* atau reply video dengan caption *${prefix}tomp3*.

45. *${prefix}pantun*
Random pantun bahasa indonesia.
Aliases: -
Usage: *${prefix}pantun*

46. *${prefix}chord*
Mencari chord guitar dan lirik lagu.
Aliases: -
Usage: *${prefix}chord* judul_lagu

47. *${prefix}qr*
Membuat qr dengan teks.
Aliases: -
Usage: *${prefix}qr* teks

46. *${prefix}puisi*
Mencari puisi secara random.
Aliases: -
Usage: *${prefix}puisi*

47. *${prefix}cerpen*
Mencari cerpen secara random.
Aliases: -
Usage: *${prefix}cerpen*

48. *${prefix}bucin*
Mencari kata kata bucin secara random.
Aliases: -
Usage: *${prefix}bucin*

_Index of [3]_
    `
}

exports.menuSticker = () => {
    return `
╔═══❉ *MENU STICKER* ❉════
║
╟⊱ *${prefix}sticker*
╟⊱ *${prefix}stickergif*
╟⊱ *${prefix}ttg* teks
╟⊱ *${prefix}ttp* teks
╟⊱ *${prefix}stickertoimg*
╟⊱ *${prefix}emojisticker* emoji
╟⊱ *${prefix}stickerwm* teks1 | teks2
╟⊱ *${prefix}stickermeme* teks1 | teks2
╟⊱ *${prefix}takestick* name | name
╟⊱ *${prefix}stickernobg*
╟⊱ *${prefix}triggered*
╟⊱ *${prefix}findsticker* teks
╟⊱ *${prefix}linesticker*
╟⊱ *${prefix}linedl* link sticker line
║
╚═══❉ *_Index of [4]_* ❉════
    `
}

exports.menutext = () => {
    return `
╔═══❉ *TEXT MAKER* ❉════
║
╟⊱ *${prefix}hartatahta* Nama
╟⊱ *${prefix}write* teks
╟⊱ *${prefix}ttg* teks
╟⊱ *${prefix}glitchtext* teks1 | teks2
╟⊱ *${prefix}blackpink* teks
╟⊱ *${prefix}phmaker* teks_kiri | teks_kanan
╟⊱ *${prefix}galaxy* teks
╟⊱ *${prefix}phcomment* username | teks
╟⊱ *${prefix}ffbanner* teks1 | teks2
╟⊱ *${prefix}fflogo* hero | nama
╟⊱ *${prefix}firemaker* teks
╟⊱ *${prefix}gamelogo* nama_team
╟⊱ *${prefix}balloonmaker* nama1 | nama2
╟⊱ *${prefix}8bit* teks1 | teks2
╟⊱ *${prefix}wblock* teks1 | teks2 
╟⊱ *${prefix}hpotter* teks1 | teks2
╟⊱ *${prefix}bnaruto* teks
║
╚═══❉ *_Index of [5]_* ❉════
    
    `}

exports.menuWeeaboo = () => {
    return `
-----[ WEEABOO ]-----

1. *${prefix}quotesnime*
Mengirim quotes anime.
Aliases: quotenime
Usage: *${prefix}quotesnime*

2. *${prefix}neko*
Mengirim foto neko girl.
Aliases: -
Usage: *${prefix}neko*

3. *${prefix}wallpaper*
Mengirim wallpaper anime.
Aliases: *wp*
Usage: *${prefix}wallpaper*

4. *${prefix}kemono*
Mengirim foto kemonomimi girl.
Aliases: -
Usage: *${prefix}kemono*

5. *${prefix}kusonime*
Mencari info anime dan link download batch di Kusonime.
Aliases: -
Usage: *${prefix}kusonime* judul_anime

6. *${prefix}komiku*
Mencari info manga dan link download di Komiku.
Aliases: -
Usage: *${prefix}komiku* judul_manga

7. *${prefix}wait*
Mencari source anime dari screenshot scene.
Aliases: -
Usage: Kirim screenshot dengan caption *${prefix}wait* atau reply screenshot dengan caption *${prefix}wait*.

8. *${prefix}source*
Mencari source dari panel doujin, ilustrasi, dan gambar yang berhubungan dengan anime.
Aliases: *sauce*
Usage: Kirim gambar dengan caption *${prefix}source* atau reply gambar dengan caption *${prefix}source*.

9. *${prefix}waifu*
Mengirim random foto waifu.
Aliases: -
Usage: *${prefix}waifu*

10. *${prefix}anitoki*
Cek update terbaru Anitoki.
Aliases: -
Usage: *${prefix}anitoki*

11. *${prefix}neonime*
Cek update terbaru Neonime.
Aliases: -
Usage: *${prefix}neonime*

12. *${prefix}anoboy*
Cek on-going anime dari Anoboy.
Aliases: -
Usage: *${prefix}anoboy*

13. *${prefix}jurnalotaku*
jurnal anime .
Aliases: -
Usage: *${prefix}jurnalotaku* judul anime

_Index of [6]_
    `
}

exports.menuFun = () => {
    return `
-----[ FUN ]-----

1. *${prefix}partner*
Weton jodoh.
Aliases: *pasangan* 
Usage: *${prefix}partner* nama | pasangan

2. *${prefix}zodiac*
Ramalan zodiak Mingguan.
Aliases: *zodiak*
Usage: *${prefix}zodiac* zodiak

3. *${prefix}simi*
Chat SimiSimi.
Aliases: -
Usage: *${prefix}simi* teks

4. *${prefix}tod*
Bermain truth or dare.
Aliases: -
Usage: *${prefix}tod*

5. *${prefix}weton*
Kirim ramalan weton.
Aliases: -
Usage: *${prefix}weton* tanggal | bulan | tahun

6. *${prefix}kiss*
Kiss someone ( ͡° ͜ʖ ͡°).
Aliases: -
Usage: Kirim gambar dengan caption *${prefix}kiss* atau reply gambar dengan *${prefix}kiss*.

7. *${prefix}asupan*
Asupan video cewek-cewek.
Aliases: -
Usage: *${prefix}asupan*

8. *${prefix}citacita*
Meme cita-cita.
Aliases: -
Usage: *${prefix}citacita*

9. *${prefix}sliding*
Membuat GIF sliding text.
Aliases: -
Usage: *${prefix}sliding* teks

10. *${prefix}hilih*
Replace beberapa huruf menjadi i.
Aliases: -
Usage: *${prefix}hilih* teks

11. *${prefix}tebakgambar*
Bermain kuis tebak gambar.
Aliases: -
Usage: *${prefix}tebakgambar*

12. *${prefix}caklontong*
Bermain kuis caklontong.
Aliases: -
Usage: *${prefix}caklontong*


_Index of [7]_
    `
}

exports.menuModeration = () => {
    return `
╔═══❉ *MODERATION* ❉════
║
╟⊱ *${prefix}add* 628xxxxx
╟⊱ *${prefix}kick* @member
╟⊱ *${prefix}promote* @member
╟⊱ *${prefix}demote* @member
╟⊱ *${prefix}tagall*
╟⊱ *${prefix}nsfw* enable/disable
╟⊱ *${prefix}groupicon*
╟⊱ *${prefix}antilink* enable/disable
╟⊱ *${prefix}antivirtext* enable/disable
╟⊱ *${prefix}levelling* enable/disable
╟⊱ *${prefix}welcome* enable/disable
╟⊱ *${prefix}autosticker* enable/disable
╟⊱ *${prefix}antinsfw* enable/disable
╟⊱ *${prefix}mutegc* enabled/disable
║
╚═══❉ *_Index of [8]_* ❉════
    `
}

exports.menuNsfw = () => {
    return `
-----[ NSFW ]-----

1. *${prefix}lewds*
Mengirim pict anime lewd.
Aliases: *lewd*
Usage: *${prefix}lewds*

2. *${prefix}multilewds*
Mengirim up to 5 anime lewd pics. (PREMIUM ONLY)
Aliases: *multilewds multilewd mlewd mlewds*
Usage: *${prefix}multilewds*

3. *${prefix}nhentai*
Mengirim info doujinshi dari nHentai.
Aliases: *nh*
Usage: *${prefix}nhentai* kode

4. *${prefix}nhdl*
Mendownload doujin dari nHentai sebagai file PDF. (PREMIUM ONLY)
Aliases: -
Usage: *${prefix}nhdl* kode

5. *${prefix}nekopoi*
Mengirim video link Nekopoi terbaru.
Aliases: -
Usage: *${prefix}nekopoi*

6. *${prefix}multifetish*
Mengirim up to 5 fetish pics. (PREMIUM ONLY)
Aliases: *mfetish*
Usage: *${prefix}multifetish* <armpits/feets/thighs/ass/boobs/belly/sideboobs/ahegao>

7. *${prefix}waifu18*
Mengirim random foto waifu NSFW.
Aliases: -
Usage: *${prefix}waifu18*

8. *${prefix}fetish*
Mengirim fetish pics.
Aliases: -
Usage: *${prefix}fetish* armpits/feets/thighs/ass/boobs/belly/sideboobs/ahegao

9. *${prefix}phdl*
Download video dari Pornhub.
Aliases: -
Usage *${prefix}phdl* link

10. *${prefix}yuri*
Mengirim random foto lewd yuri.
Aliases: -
Usage: *${prefix}yuri*

11. *${prefix}lewdavatar*
Mengirim random avatar lewd.
Aliases: -
Usage: *${prefix}lewdavatar*

12. *${prefix}femdom*
Mengirim random foto ero femdom.
Aliases: -
Usage: *${prefix}femdom*

13. *${prefix}nhsearch*
nHentai search.
Aliases: -
Usage: *${prefix}nhsearch* query

14. *${prefix}nekosearch*
Nekopoi search.
Aliases: -
Usage: *${prefix}nekosearch* query

15. *${prefix}cersex*
Random cerita sex.
Aliases: -
Usage: *${prefix}cersex*

_Index of [9]_
    `
}

exports.menuOwner = () => {
    return `
-----[ OWNER ]-----
Halo Owner-sama ヽ(・∀・)ﾉ!

1. *${prefix}bc*
Membuat broadcast.
Aliases: -
Usage: *${prefix}bc* <teks> 

2. *${prefix}clearall*
Menghapus semua chat di akun bot.
Aliases: -
Usage: *${prefix}clearall*

3. *${prefix}getses*
Mengambil screenshot sesi dari akun bot.
Aliases: -
Usage: *${prefix}getses*

4. *${prefix}ban*
Menambah/menghapus user yang diban.
Aliases: -
Usage: *${prefix}ban* add/del @user/62812xxxxxxxx

5. *${prefix}leaveall*
Keluar dari semua grup.
Aliases: -
Usage: *${prefix}leaveall*

6. *${prefix}eval*
Evaluate kode JavaScript.
Aliases: *ev*
Usage: *${prefix}eval*

7. *${prefix}shutdown*
Men-shutdown bot.
Aliases: -
Usage: *${prefix}shutdown*

8. *${prefix}premium*
Menambah/menghapus user premium.
*s* - detik
*m* - menit
*h* - jam
*d* - hari
Aliases: -
Usage: *${prefix}premium* add/del @user/62812xxxxxxxx 30d

9. *${prefix}setstatus*
Mengganti status about me.
Aliases: *setstats setstat*
Usage: *${prefix}status* teks

10. *${prefix}serial*
Cek pendaftaran akun via serial.
Aliases: -
Usage: *${prefix}serial* serial_user

11. *${prefix}exif*
Atur WM stiker bot.
Aliases: -
Usage: *${prefix}exif* pack_name | author_name

12. *${prefix}mute*
Mute semua user.
Aliases: -
Usage: Gunakan *${prefix}mute* untuk mute dan gunakan *${prefix}mute* kembali untuk unmute.

13. *${prefix}setname*
Mengganti username bot. Maksimal 25 huruf.
Aliases: -
Usage: *${prefix}name* username_baru

_Index of [10]_
    `
}

exports.menuLeveling = () => {
    return `
╔═══❉ *LEVELING* ❉════
║
╟⊱ *${prefix}level*
╟⊱ *${prefix}leaderboard*
║
╚═══❉ *_Index of [11]_* ❉════
    `
}

exports.menuPrem = () => {
    return `
╔═══❉ *PREMIUM ONLY* ❉════
║
╟⊱ *${prefix}ytmp3* link YT
╟⊱ *${prefix}ytmp4* link YT
╟⊱ *${prefix}music* judul lagu
╟⊱ *${prefix}joox* judul lagu
╟⊱ *${prefix}play* judul lagu 
╟⊱ *${prefix}xxx* keyword 
╟⊱ *${prefix}xtube* link xtube
╟⊱ *${prefix}fbdl* link fb video
╟⊱ *${prefix}igdl* link ig video
╟⊱ *${prefix}tiktok* link tiktok video
╟⊱ *${prefix}cocodl* link cocofun video 
╟⊱ *${prefix}asupan* 
║
╚═══❉ *_Index of [12]_* ❉════

    `}


exports.rules = () => {
    return `
-----[ RULES ]-----

1. Jangan spam bot. 
Sanksi: *WARN/SOFT BLOCK*

2. Jangan telepon bot.
Sanksi: *SOFT BLOCK*

3. Jangan mengeksploitasi bot.
Sanksi: *PERMANENT BLOCK*

Jika sudah dipahami rules-nya, silakan ketik *${prefix}menu* untuk memulai!
    `
}

exports.info = (juUser,ownerNumber) => {
    return `
    ═════❉ *INFO BOT* ❉════

    *NAMA*        : *HZR-BOT*
    *STATUS*      : *AKTIF*
    *PREFIX*      : *#*
    *JUMLAH USER* : *${juUser}*
    *SOURCE*      : *OPEN SOURCE*
    *PEMILIK*     : *hendi29_ (HZR-GROUP)*
    *WEBSITE*     : *https://hendizro.com
    *WHATSAPP*     : wa.me/${ownerNumber.replace('@c.us', '')}

    JOIN GROUP WHATSAPP 
    https://chat.whatsapp.com/HWq1oIzlkdfCK43F5LY7BU

    `}

// Dimohon untuk owner/hoster jangan mengedit ini, terima kasih.
exports.tos = (ownerNumber) => {
    return `
-----[ TERMS OF SERVICE ]-----

Bot ini merupakan source bot dengan nama Hzr-Bot.
Owner/hoster dari bot ini terlepas dari tanggung jawab dan pengawasan developer.
*tidak memperjualbelikannya* dalam bentuk apapun.
Apabila terjadi sebuah error, orang yang pertama yang harus kalian hubungi ialah owner/hoster.



Contact person:
wa.me/${ownerNumber.replace('@c.us', '')} (Owner/hoster)

Kalian juga bisa mendukung saya agar bot ini tetap up to date dengan:
082166937293 (OVO/DANA/GoPay)

Terima kasih!

*@hendy29_*.
    `
}
