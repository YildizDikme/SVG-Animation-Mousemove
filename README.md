# SVG-Animation-Mousemove
TweenMax

Bu proje, bir SVG animasyonu oluşturmak için JavaScript ve TweenMax kütüphanesini kullanmaktadır.

## Proje Açıklaması

Bu proje, fare konumuna bağlı olarak iki gözün dönme animasyonu gerçekleştirilmiştir. Fare hareketi takip edilerek, gözlerin birbirine doğru dönmesi sağlanmıştır.

![image](https://github.com/YildizDikme/SVG-Animation-Mousemove/assets/103577317/dde61078-aedd-4389-be16-43c12e88bd86)



## Kütüphaneler

- **TweenMax**: Animasyon işlemlerini kolaylaştıran ve daha hızlı gerçekleştiren bir JavaScript kütüphanesidir. Bu projede, gözlerin dönme animasyonunu gerçekleştirmek için TweenMax kullanılmıştır. TweenMax, GSAP (GreenSock Animation Platform) tarafından geliştirilmiş bir kütüphanedir.

- **GSAP (GreenSock Animation Platform)**: Web tabanlı animasyonlar oluşturmak için kullanılan popüler bir JavaScript animasyon kütüphanesidir. GSAP, zengin animasyon özellikleri ve performans avantajıyla tanınır. TweenMax, GSAP'in bir parçasıdır ve daha yüksek seviye bir arayüz sağlayarak animasyon işlemlerini kolaylaştırır.

    - **GSAP Nasıl Yüklenir**: TweenMax'i kullanabilmek için GSAP'i projenize dahil etmeniz gerekmektedir. GSAP'in resmi web sitesinden indirilebilir. Aşağıdaki bağlantıyı kullanarak GSAP'in son sürümünü indirebilirsiniz:

        [GSAP İndirme Sayfası](https://greensock.com/gsap/)

## Nasıl Çalışır

1. Projenin çalışabilmesi için, TweenMax kütüphanesinin projeye dahil edilmesi gerekmektedir. GSAP kütüphanesini indirdikten sonra, projenizin kök dizinine yerleştirin ve aşağıdaki kodu HTML dosyanıza ekleyin:

    ```html
    <script src="path/to/gsap.min.js"></script>
    ```

    `path/to/gsap.min.js` bölümünü, GSAP dosyasının gerçek yolunu belirtmek için düzenleyin.
   
     İkinci bir seçenek olarak cdn.js ile projenize ekleyebilirsiniz. Bu projede de cdn.js ile TweenMax kütüphanesi projeye dahil edilmiştir.

3. `index.js` dosyası, projenin ana dosyasıdır ve SVG animasyonunun oluşturulduğu yerdir. Bu dosya, HTML dosyasındaki SVG elemanını seçer ve fare hareketlerini dinler.

4. `createEye(selector)` işlevi, göz elemanlarını seçer ve dönme animasyonunu gerçekleştirir. Bu işlev, `selector` parametresi aracılığıyla göz elemanını seçer. Seçilen göze dönme orijini ayarlanır ve fare konumuna bağlı olarak gözün dönme açısı hesaplanır.

5. `onMouseMove(event)` işlevi, fare hareketini dinleyerek fare konumunu günceller ve dönme animasyonunun tetiklenmesini sağlar. Her fare hareketinde bu işlev çağrılır.

6. `onFrame()` işlevi, animasyon çerçevesidir. Fare hareketlerini takip ederek gözlerin dönme animasyonunu gerçekleştirir. Bu işlev, `requestAnimationFrame` kullanılarak çağrılır.



## UI/UX Önemi

Bu projede, frontend geliştiricileri UI/UX prensipleriyle ilgili bilgilendirmeyi ve kullanıcı odaklı bir yaklaşım benimsemelerini teşvik etme amaçlanıldı. Kullanıcı Arayüzü (UI) ve Kullanıcı Deneyimi (UX), web sitenizin veya uygulamanızın başarısı için kritik bir role sahiptir.

Bir web sitesi veya uygulama geliştirirken, kullanıcıları odak noktasına almak büyük önem taşır. Kullanıcıları anlamak, ihtiyaçlarını ve beklentilerini belirlemek için araştırma yapmak, tasarım kararlarınızı destekleyecektir.

Bu projede, dünyanın en değerli markalarının web sitelerine göz atıldı ve 2023'ün en iyi kullanıcı arayüzü trendlerini yakalamaya çalışıldı. Özellikle, Apple, Microsoft, Toyota, Tesla, McDonald's ve Louis Vuitton gibi markaların web sitelerinde sürükleyici bir deneyim sunan ana sayfaların genel eğilimleri gözlenildi. Bu gözlem, temiz ve minimalist bir tasarımın ön planda olduğunu ortaya koydu.

Web siteleri, sade ve etkileyici bir tasarım anlayışını benimsemişlerdir. Öncelikli olarak, bilgileri ve kategorileri sadece en önemli olanlarla göstermeye odaklanırlar. Bu, kullanıcıların istedikleri bilgilere hızlıca ulaşmalarını sağlar ve kullanıcı deneyimini iyileştirir.

Büyük yazı tipi boyutları da dikkat çeken bir trenddir. Bu, sadece başlık (H1) değil, aynı zamanda alt başlıklar (H2, H3) ve metinler için de geçerlidir. Büyük yazı tipi boyutları, önemli bilgilerin görsel olarak vurgulanmasını sağlar ve kullanıcılara daha iyi bir okuma deneyimi sunar.

![image](https://github.com/YildizDikme/SVG-Animation-Mousemove/assets/103577317/db5efbf1-7ee0-4558-9fa8-2e3b2a01ae58)


Projede, bu trendi temel alarak büyük yazı tipi boyutlarıyla temiz bir tasarım öne çıkarılmaya çalışıldı. Ayrıca, minimalist bir yaklaşım benimsenildi ve sadece gerekli olan bilgiler vurgulanıldı. Bu, kullanıcıların odaklanmasını kolaylaştırır ve karmaşık detaylardan arındırılmış bir deneyim sunar.

## Animasyonlar ve UI/UX

Bu projede, kullanıcı arayüzü (UI) ve kullanıcı deneyimi (UX) prensiplerine büyük önem verildi. Animasyonlar, kullanıcı deneyimini geliştirmek ve kullanıcıların web sitemizi daha etkileyici ve akıcı bulmalarını sağlamak için değerli bir araçtır.

Animasyonlar, UI/UX'e katkı sağlar ve aşağıdaki faydaları sunar:

1. **İlgililik ve Odaklanma**: Animasyonlar, kullanıcıların dikkatini çekmek ve belirli bir öğeye odaklanmalarını sağlamak için kullanılabilir. Kullanıcıların butonlara tıkladıklarında veya form alanlarına odaklandıklarında hafif animasyonlarla etkileşime girdiklerini hissetmelerini sağlayabiliriz.

2. **Geçiş ve İletişim**: Sayfa geçişlerinde ve içerik yüklenirken animasyonlar, kullanıcı deneyimini daha akıcı hale getirir. Yumuşak geçişler ve akış hissi, kullanıcıların web sitemizde gezinirken rahat bir deneyim yaşamalarını sağlar.

3. **Kullanıcı Etkileşimi ve Geri Bildirim**: Animasyonlar, kullanıcıların eylemleriyle etkileşime geçtiklerini hissetmelerini sağlar. Örneğin, bir butona tıkladıklarında veya bir formu gönderdiklerinde animasyonlarla geri bildirim vererek kullanıcılara işlemin tamamlandığını gösteririz.

Bu projede, animasyonları etkili bir şekilde kullanarak kullanıcı deneyimi iyileştirildi. Lottie animasyonları da kullanıldı. Lottie, Adobe After Effects veya Adobe Illustrator gibi tasarım araçlarında oluşturulan kompleks animasyonları web sitelerine kolayca entegre etmemizi sağlayan bir JSON formatıdır.

![image](https://github.com/YildizDikme/SVG-Animation-Mousemove/assets/103577317/d737a92e-fdb8-4c7b-966a-3bb91b42594c)

Lottie animasyonlarını kullanmak, web sitemize hareket, canlılık ve görsel çekicilik katmamıza olanak sağlar. Animasyonları hızlı ve sorunsuz bir şekilde yükler ve kullanıcı deneyimini artırır.







