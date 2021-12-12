const alarm = new Date('13:09:00')
        const sekarang = new Date().getTime();
        const selisih = alarm - sekarang;
        const ohayou = fs.readFileSync('./ohayou.mp3')
        anu = await pebz.chats.all()
        if ( selisih < 0 ) {
        for (let _ of anu) {
         sendMess(form, ohayou, audio,{quoted: mek})
        }
