# Discord.js v14 welcome botu

**Discord sunucunuzda bom boş seste duran ve oynuyor kısımları olan botları bu tek altyapıda açık tutabilirsiniz, config kısmına farklı tokenler ekleyerek daha çok bot çalıştırmasını ve sese sokmasını sağlayabilirsiniz.**

# Bu bot özel istek üzerine yapılmıştır.
[![Discord Istek](https://cdn.discordapp.com/attachments/1173319481599213639/1253628750138970112/image.png?ex=66768c41&is=66753ac1&hm=32cba3cfb9a807ebd27dbfde0f47ae88aff05057fa087c5cd61f449e96c93977&)](https://discord.gg/bdfd)

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