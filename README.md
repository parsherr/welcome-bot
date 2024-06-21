# Discord.js v12 backup botu

**Discord sunucularınızı save alıp aldığınız saveleri istediğiniz sunucuya tekrar yükleyebilirsiniz.**


## Kurulum
1. **Ayarlar Dosyasını Düzenleyin:**
    - `config.js` dosyasını açın ve aşağıdaki alanları kendi bilgilerinizle doldurun:
    ```js
    {
        TOKEN: 'bot-token',
        PREFIX: '!',
        ID: 'bot1',
        VOICE_CHANNEL_ID: "ses-kanal-id"
    }
    ```
    daha fazlasını eklemek için, ilk botun configlerinin sonundaki süslü parantezin sonuna virgül atıp, bot id sayısını 1 arttırarak bir tane daha aynı configden yazsın. 
    Örnek :
    ```js
    {
        TOKEN: 'bot-token',
        PREFIX: '!',
        ID: 'bot1',
        VOICE_CHANNEL_ID: "ses-kanal-id"
    },
        {
        TOKEN: 'bot-token',
        PREFIX: '!',
        ID: 'bot2',
        VOICE_CHANNEL_ID: "ses-kanal-id"
    }
    ```
    
2. **Gerekli Paketleri Yükleyin:**
    - Proje dizininde terminali açın ve aşağıdaki komutu çalıştırın:
    ```bash
    npm i
    pnpm i
    ```
3. **Botu Başlatın:**
    - `node .` ve ya `node index.js` ile dosyasını çalıştırın.


## Destek

Herhangi bir sorunla karşılaşırsanız veya yardım almak isterseniz:

[![Discord Banner](https://api.weblutions.com/discord/invite/bdfd/)](https://discord.gg/bdfd)

---

# Başlat.bat yapımı :
- aşağadaki kodu kopyalayıp "start.bat" isimli bi dosya açın, kopyaladığınız metni bat dosyasına girin.
    ```bash
    echo off
    color 0f
    cls
    :a
    node index.js
    goto a
    ```

    iyi kullanımlar