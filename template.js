//  console.log("external js")

// Single Comment

/*

 Multiple Comment
 Multiple Comment
 Multiple Comment

 */

// window.

// document.

//  console.log("console.log");

// Log
//  window.console.log("window.console.log");

//Warn - Warning
// console.warn("console.warn");

// Info - Information
//  console.info("console.info");

// Error
// console.error("console.error");

// Alert
//  alert("Alert")
//  window.alert("window.alert")

//  Variable

//  Common Rules
// var name="sunqfu";
// console.log(name);

// var companyName="sunqfu";
// console.log(companyName44);

// var $_companyName="thomyork";
// console.log($_companyName44);

//   Unwritable
//  var üğşçö~30$_companyName="thomyork"
//  console.log($30_companyName44)

//  Let
// let companyName2="sunqfu FrontEnd";
// console.warn(companyName2);
// companyName2="sunqfu FrontEnd Data"

// You Can't Use
//  let companyName="sunqfu FrontEnd";
//  console.warn(companyName2)

//  Const
// const companyName3="sunqfu FrontEnd JS HTML5";
// console.error(companyName3);

//////////////////////////////////////////////////////////////

// Operator (Operatörler)
let sunqfuData1 = 23;
let sunqfuData2 = 5;

// Arithmetic Operators (Aritmetik Operatörler)
console.log(sunqfuData1 + sunqfuData2); // Toplama: 23 + 5 = 28
console.log(sunqfuData1 * sunqfuData2); // Çarpma: 23 * 5 = 115
console.log(sunqfuData1 % sunqfuData2); // Modülüs (Bölümden kalan): 23 % 5 = 3
console.log(sunqfuData1 - sunqfuData2); // Çıkarma: 23 - 5 = 18

let result1 = sunqfuData1 - sunqfuData2;

// Comparison Operators (Karşılaştırma Operatörleri)
console.log(sunqfuData1 > sunqfuData2); // Büyük mü? true (23 > 5)
console.log(sunqfuData1 < sunqfuData2); // Küçük mü? false (23 < 5)
console.log(sunqfuData1 == sunqfuData2); // Değerler eşit mi? false (23 == 5)
console.log(sunqfuData1 === sunqfuData2); // Değerler ve türler eşit mi? false (23 === 5)
console.log(sunqfuData1 !== sunqfuData2); // Değerler veya türler eşit değil mi? true (23 !== 5)

// Assignment Operators (Atama Operatörleri)
const data1 = "10";
const data2 = "10";
console.log(data1 == data2); // Değerler eşit mi? (Tip kontrolü yapmaz) true (10 == "10")
console.log(data1 === data2); // Değerler ve türler eşit mi? false (10 !== "10")

// Logical Operators (Mantıksal Operatörler)
const data3 = true,
  data4 = false;
console.log(data3 && data4); // Mantıksal "VE" (Her iki değer de true olursa true döner): false (true && false)
console.log(data3 || data4); // Mantıksal "VEYA" (Bir tanesi bile true ise true döner): true (true || false)

// Prompt
// const userData=prompt("Please Enter Your Name");
// console.log(userData);

// Math
console.log(Math.PI); // Pi sayısı (Matematiksel sabit π): 3.141592653589793

console.log(Math.E); // Euler sayısı (Matematiksel sabit e): 2.718281828459045

console.log(Math.sqrt(25)); // Karekök fonksiyonu (Bir sayının karekökünü alır): 5

console.log(Math.pow(5, 2)); // Üs alma fonksiyonu (Bir sayının belirli bir kuvvetini alır): 25

console.log(5 ** 2); // Üs alma operatörü (Bir sayının belirli bir kuvvetini alır): 25

console.log(Math.abs(-5)); // Mutlak değer fonksiyonu (Bir sayının mutlak değerini alır): 5

console.log(Math.min(2, 5, 66, -100)); // Minimum değer fonksiyonu (Verilen sayılar arasından en küçük olanını döner): -100

console.log(Math.max(2, 5, 66, -100)); // Maksimum değer fonksiyonu (Verilen sayılar arasından en büyük olanını döner): 66

console.log(Math.floor(5.9)); // Aşağı yuvarlama fonksiyonu (Bir sayıyı en yakın alt tam sayıya yuvarlar): 5

console.log(Math.ceil(5.9)); // Yukarı yuvarlama fonksiyonu (Bir sayıyı en yakın üst tam sayıya yuvarlar): 6

console.log(Math.ceil(7.1)); // Yukarı yuvarlama fonksiyonu (Bir sayıyı en yakın üst tam sayıya yuvarlar): 8

console.log(Math.round(8.4)); // En yakın tam sayıya yuvarlama fonksiyonu (Bir sayıyı en yakın tam sayıya yuvarlar): 8

console.log(Math.round(8.5)); // En yakın tam sayıya yuvarlama fonksiyonu (Bir sayıyı en yakın tam sayıya yuvarlar): 9

console.log(Math.sin(8.5)); // Sinüs fonksiyonu (Radyan cinsinden sinüs değerini hesaplar)

console.log(Math.cos(8.5)); // Kosinüs fonksiyonu (Radyan cinsinden kosinüs değerini hesaplar)

console.log(Math.asin(-1)); // Arksinüs fonksiyonu (Verilen değerin ters sinüsünü hesaplar, sonucu radyan cinsindendir)

console.log(Math.acos(-1)); // Ark kosinüs fonksiyonu (Verilen değerin ters kosinüsünü hesaplar, sonucu radyan cinsindendir)

console.log(Math.tan(-1)); // Tanjant fonksiyonu (Radyan cinsinden tanjant değerini hesaplar)

console.log(1 / Math.tan(-1)); // Kotanjant hesaplama (Tanjantın tersini alarak kotanjant hesaplanır)

console.log(Math.random() * 1 + 10); // Rastgele sayı üretme (10 ile 11 arasında rastgele bir sayı üretir)

console.log(Math.random() * 10 + 1); // 1 ile 11 arasında rastgele bir sayı üretir.

console.log(Math.floor(Math.random() * 10 + 1));
// Rastgele tam sayı üretme (1 ile 10 arasında)
//
// Açıklama:
// 1. `Math.random()` → 0 ile 1 arasında rastgele bir ondalıklı sayı üretir.
// 2. `Math.random() * 10` → 0 ile 10 arasında rastgele bir sayı üretir.
// 3. `+1` → Sonuca 1 ekler ve sayıyı 1 ile 11 arasında bir değere taşır.
// 4. `Math.floor(...)` → Sayıyı aşağı yuvarlar ve tam sayı yapar.
//
// Örnek Çıktılar:
// - `Math.random()` → 0.45 üretirse:
//   - `0.45 * 10 + 1 = 5.5`
//   - `Math.floor(5.5) = 5`
// - `Math.random()` → 0.89 üretirse:
//   - `0.89 * 10 + 1 = 9.9`
//   - `Math.floor(9.9) = 9`
//
// Sonuç: Kod her çalıştırıldığında **1 ile 10** arasında rastgele bir **tam sayı** üretir.

//////////////////////////////////////////////
// Escape Characters
console.log('Hi "Sunqfu Frontend'); // Ekranda çift tırnak kullanma (Escape karakteri ile tırnak içinde tırnak işareti yazdırma)

console.log("Hi 'Sunqfu Frontend"); // Ekranda tek tırnak kullanma (Escape karakteri ile metin içinde tek tırnak işareti yazdırma)

console.log("Hi 'Sunqfu\n Frontend"); // Tek tırnak ve yeni satır karakteri kullanma (Escape karakterleri ile özel formatlama)

console.log("Hi 'Sunqfu\n\t Frontend"); // Tek tırnak, yeni satır ve tab boşluğu kullanımı (Escape karakterleri ile özel formatlama)

console.log("Hi 'Sunqfu\r Frontend"); // Tek tırnak ve Satır başı (Carriage Return - \r) kullanımı

console.log("Hi 'Sunqfu\n\r Frontend"); // Tek tırnak, yeni satır (\n) ve satır başı (\r) kullanımı

/////////////////////////////////////////////////////////

// Typeof

let data = 44;
console.log(typeof data); // Değişkenin veri türünü kontrol eder ("number" döndürür)

let name = "sunqfu";
console.log(typeof name); // Değişkenin veri türünü kontrol eder ("string" döndürür)

let isLogin = true;
console.log(typeof isLogin); // Değişkenin veri türünü kontrol eder ("boolean" döndürür)

// Instanceof

let objectInstance = new Number(44);
console.log(objectInstance instanceof Number); // Değişkenin Number nesnesi olup olmadığını kontrol eder (true döndürür)

// New - Null

let dataNew = new Number(44);
console.log(dataNew); // Number nesnesi olarak oluşturulan değeri yazdırır ([Number: 44], object türünde)

dataNew = null;
console.log(dataNew); // Değişkeni null yapar ve ekrana "null" yazdırır

//Undefined
let dataNumber;
console.log(dataNumber); // Değişken tanımlandı ama değer atanmamış, "undefined" döndürür çözüm için dataNumber=99; yazılmalı

// NaN

let result = 10 / 10;
console.log(result); // Bölme işlemini yapar ve ekrana "1" yazdırır

let result2 = 10 / "10";
console.log(result2); // "10" string'i sayıya dönüştürülüp 10'a bölünür // Sonuç: 1

let result3 = 10 / "abcdgf";
console.log(result3); // "abcdgf" sayıya dönüştürülemez, sonuç NaN olur // Sonuç: NaN

// If isNaN is True, it is not a Number
console.log(isNaN(result3)); // Sonuç: true (çünkü result3 NaN)

console.log(!isNaN(result3)); // Sonuç: false (çünkü result3 NaN)

// Hoisting
dataNumber2 = 55; // dataNumber2'ye 55 atanır
var dataNumber2; // Tanımlama yapılır (hoisting ile)
console.log(dataNumber2); // Sonuç: 55

// Numerical Operations (Sayısal İşlemler)
let numberSunqfu = 33; // numberSunqfu değişkenine 33 sayısı atanıyor
console.log(numberSunqfu); // numberSunqfu değerini yazdırır → 33
console.log(typeof numberSunqfu); // Değişkenin türünü yazdırır → "number"
console.log(isNaN(numberSunqfu)); // numberSunqfu bir sayı olduğu için false döner

let numberSunqfuFloat = 33.33; // numberSunqfuFloat değişkenine 33.33 atanıyor
console.log(numberSunqfuFloat); // Değişkenin değerini yazdırır → 33.33
console.log(typeof numberSunqfuFloat); // Değişkenin türünü yazdırır → "number"

let number2 = 4 / 0; // 4'ü 0'a bölmeye çalışıyoruz
console.log(number2); // Sonucu konsola yazdırıyoruz çıkış Infinity

let bilimselGosterim = 13e5; // 13 x 10^5 anlamına gelir
console.log(bilimselGosterim); //Çıktı 1300000

let bilimselGosterim2 = 1300000; // Normal sayı olarak tanımlandı
console.log(bilimselGosterim2); //Çıktı 1300000

let bilimselGosterim3 = 13e-5; // 13 x 10^(-5) anlamına gelir
console.log(bilimselGosterim3); //Çıktı 0.00013

// Numerical Operations (Decimal Base) Sayısal İşlemler (Ondalık Taban)

//Binary (ikili)
let binary = 0b00011100; // Binary (ikili) sistemde 28 sayısı
console.log(binary); // 28 çıktısını verir

// Octal (sekizlik)
let octal = 0o74101; // Octal (sekizlik) sistemde 30401 sayısı
console.log(octal); // 30401 çıktısını verir

//Hexadecimal (onaltılık)
let hexadecimal = 0x01fed; // Hexadecimal (onaltılık) sistemde 1,127 sayısı
console.log(hexadecimal); // 1,127 çıktısını verir

//toFixed , den sonra 4 hane gösterir
const sayı = 56.123456; // Sayı 56.123456
console.log(sayı.toFixed(4)); // Ondalık kısmı 4 basamağa yuvarlayarak "56.1235" döndürür

//toPrecision
console.log(sayı.toPrecision(4)); // Toplamda 4  basamakla gösterir yazdığın sayıya göre değişiklik gösterir: "56.12"

let data5 = "10"; // String "10"
let data6 = "30"; // String "30"
console.log(data5 + data6); // String birleştirme sonucu "1030"

console.log(Number(data5) + Number(data6)); // Her iki string de sayıya dönüştürülüp toplanır 40

console.log(parseInt(data5) + parseInt(data6)); // Her iki string tam sayıya çevrilip toplanır

console.log(parseFloat(data5) + parseFloat(data6)); // Ondalık olarak sayıya çevrilip toplanır

////////////////////////////////////////////////////////////////////
// Textual Operations (Metinsel İşlemler)

let sunqfuMetinsel = " javascript ÖğReniyoRum javascript  ";

let sunqfuMetinsel2 = " html5, css3, js";

console.log(sunqfuMetinsel); // Metni olduğu gibi ekrana yazdırır

console.log(sunqfuMetinsel.length); // Metnin karakter sayısını döndürür

console.log(sunqfuMetinsel.trim().length); // Baştaki ve sondaki boşlukları siler, kalan karakter sayısını döndürür

console.log(sunqfuMetinsel.toUpperCase()); // Metni tamamen büyük harfe çevirir

console.log(sunqfuMetinsel.toLowerCase()); // Metni tamamen küçük harfe çevirir

console.log(sunqfuMetinsel.indexOf("javascript")); // İlk "javascript" kelimesinin başladığı indexi döndürür

console.log(sunqfuMetinsel.lastIndexOf("javascript")); // Son "javascript" kelimesinin başladığı indexi döndürür

console.log(sunqfuMetinsel.includes("javascript")); // Metnin içinde "javascript" kelimesi olup olmadığını kontrol eder (true/false döner)

console.log(sunqfuMetinsel + " " + sunqfuMetinsel2); // İki metni birleştirerek ekrana yazdırır

console.log(sunqfuMetinsel.concat(sunqfuMetinsel2)); // İki metni birleştirerek ekrana yazdırır (concat() yöntemiyle)

console.log(sunqfuMetinsel.substring(3)); // `substring()` Metodu ile String'in Bir Bölümünü Alma

console.log(sunqfuMetinsel.substring(0, 4)); // `substring()` Metodu ile String'in Belirli Bir Bölümünü Alma

// Function Textual Operations
//1
function returnsuzParametresiz() {
  // Parametresiz ve Geri Dönüş Değeri Olmayan Fonksiyon
  console.log("Merhaba Sunqfu");
}
returnsuzParametresiz(); // Fonksiyon Çağrıldı

//2
function returnsuzParametreli(kelime, number) {
  // Parametreli ve Geri Dönüş Değeri Olmayan Fonksiyon
  console.log("Merhaba Sunqfu " + kelime + " " + number);
}
returnsuzParametreli("Javascript", 44); // Fonksiyon Çağrıldı

//3

function returnluParametreli() {
  // Parametresiz ve Geri Dönüş Değeri Olan Fonksiyon
  return "Merhaba Sunqfu";
}

let param3 = returnluParametreli(); // Fonksiyon çağrıldı ve dönen değer değişkene atandı
console.log(param3); // Değişkenin içeriği ekrana yazdırıldı

//4

function returnluParametreli(isLogin) {
  // Parametreli ve Geri Dönüş Değeri Olan Fonksiyon
  return isLogin;
}

let param4 = returnluParametreli(true); // Fonksiyon çağrıldı ve dönen değer değişkene atandı
console.log(param4); // Değişkenin içeriği ekrana yazdırıldı

// Funticon Types (Funtion Türleri)
// Inmedia Function

(function () {
  // Anonim (İsimsiz) ve Kendiliğinden Çağrılan Fonksiyon (IIFE)
  console.log("Inmedia Function - Anonymous Function");
})(); // Fonksiyon tanımlandıktan hemen sonra çalıştırıldı

(() => {
  // Kendiliğinden Çağrılan Arrow Function (IIFE)
  console.log("Inmedia Function - Arrow Function");
})(); // Fonksiyon tanımlandıktan hemen sonra çalıştırıldı

//Normal Function
function toplama(x, y) {
  return x + y;
} // İki parametre alan ve toplamlarını döndüren fonksiyon

console.log(toplama(5, 6)); // Fonksiyon çağrıldı ve sonucu ekrana yazdırıldı

//Anonymous Function
let toplama2 = function (x, y) {
  return x + y;
}; // Anonim fonksiyon ile değişkene atanmış toplama fonksiyonu
console.log(toplama2(5, 6)); // Doğru fonksiyon adıyla çağrıldı

//Arrow Function
const toplama3 = (x, y) => {
  return x + y;
}; // Arrow Function (Ok Fonksiyonu) ile toplama işlemi
console.log(toplama3(5, 6)); // Fonksiyon çağrıldı ve sonucu ekrana yazdırıldı

// Conditional (Koşullu)
const conditional = () => {
  // Koşullu (if-else) Kontrolü Yapan Arrow Function
  let isLogin = true;

  // Farklı koşulların nasıl çalıştığını görmek için açıklamalar eklendi
  if (isLogin) {
    // `isLogin` zaten boolean (true) olduğu için bu blok çalışır.
    //if(isLogin==="true"){
    //if(isLogin=="true"){
    //if(isLogin=true){

    console.log("Giriş Yapıldı");
  } else {
    console.log("Giriş Yapılmadı");
  }
};

conditional(); // Fonksiyon çağrıldı

//////////////////////////////////////////////

const conditional2 = () => {
  // Sayının pozitif veya negatif olduğunu kontrol eden fonksiyon
  let isSunqfu = -9; // Değer -9 olarak atanıyor

  if (isSunqfu > 0) {
    // Eğer sayı 0'dan büyükse
    console.log("Positive");
  } else {
    console.log("Negative"); // Aksi halde (0 veya negatifse)
  }
};

conditional2(); // Fonksiyon çağrılıyor

const conditional3 = () => {
  let isSunqfu = 0;
  if (isSunqfu > 0) {
    console.log("Pozitif Sayı");
  } else if (isSunqfu < 0) {
    console.log("Negatif Sayı");
  } else {
    console.log("Sıfır");
  }
};

conditional3();

//////////////////////////////////////////////
// Ternary Call
const conditionalTernary = () => {
  let isSunqfu = -9; // Değişkenin değeri -9 olarak atanıyor

  // Ternary Operator Kullanımı
  let result = isSunqfu > 0 ? "Pozitif Sayı" : "Negatif Sayı";

  console.log(result); // Sonucu ekrana yazdır
};

conditionalTernary(); // Fonksiyonu çağır

// Switch Case

const conditionalSwitch = () => {
  let isSunqfu = 0; // Değişken değeri 0 olarak atanıyor

  switch (
    isSunqfu // switch-case yapısı başlıyor
  ) {
    case 0: // Eğer isSunqfu 0 ise
      console.log("Sıfır"); // "Sıfır" yazdır
      break; // break ile switch'ten çık

    case 1: // Eğer isSunqfu 1 ise
      console.log("Bir"); // "Bir" yazdır
      break;

    case 2: // Eğer isSunqfu 2 ise
      console.log("İki"); // "İki" yazdır
      break;

    case 3: // Eğer isSunqfu 3 ise
      console.log("Üç"); // "Üç" yazdır
      break;

    default: // Eğer yukarıdaki case'lerin hiçbiri çalışmazsa
      console.log("Bilinmiyor"); // "Bilinmiyor" yazdır
  }
};

conditionalSwitch(); // Fonksiyonu çağır

//////////////////////////////////////////////////////////

//Loop

const forLoop = () => {
  let value = "Sunqfu for"; // value değişkenine "Sunqfu" atanıyor

  for (let i = 1; i <= 5; i++) {
    // Döngü 1’den 5’e kadar çalışacak
    console.log(value + i); // "Sunqfu" + i değeri ekrana yazdırılıyor
  }
};

forLoop(); // Fonksiyon çağrılıyor

console.log("********************");
// While

const whileLoop = () => {
  let value = "Kubrick while"; // value değişkenine "Kubrick" atanıyor
  let i = 1; // Sayaç değişkeni başlatılıyor

  while (i <= 5) {
    // i, 5'e eşit veya küçük olduğu sürece çalışır
    console.log(value + i); // Konsola "Kubrick" + i yazdırılır
    i += 1; // Sayaç her seferinde 1 artırılır (Artırma Olmazsa Sonsuz Döngü Olur)
  }
};

whileLoop(); // Fonksiyon çağrılıyor

console.log("********************");

// Do While

const doWhileLoop = () => {
  let value = "Sunqfu doWhile"; // value değişkenine "Sunqfu" atanıyor
  let i = 1; // Sayaç değişkeni başlatılıyor

  do {
    console.log(value + i); // Konsola "Sunqfu" + i yazdırılır
    i += 1; // Sayaç her seferinde 1 artırılır
  } while (i <= 5); // i, 5'e eşit veya küçük olduğu sürece çalışır
};

doWhileLoop();

///////////////////////////////////////////////////////////////////
//Exception Handling
const exceptionHandling = () => {
  // const result=10/0; // JavaScript'te 10/0 "Infinity" döndürür, hata vermez.

  try {
    alertx("alert"); // ❌ alertx fonksiyonu tanımlı değil, bu bir hata oluşturur.
  } catch (err) {
    console.error(err); // Hata yakalanır ve konsola yazdırılır.
  } finally {
    console.warn("Burası Mutlaka Çalışmalıdır"); // ✅ Hata olsa da olmasa da çalışır.
  }

  console.log("Hiiii-1"); // ✅ `finally` bloğundan sonra çalışmaya devam eder.
};

exceptionHandling(); // Fonksiyon çağrılır ve çalıştırılır.

//Throw Error
const exceptionHandling2 = () => {
  try {
    throw new Error("Hata Oluştu"); // 🚨 Manuel olarak bir hata fırlatıyoruz.
  } catch (err) {
    console.error("Yakalanan hata:", err.message); // ✅ Hata yakalanıyor ve mesaj yazdırılıyor.
  }

  console.log("Hiiii-2"); // ✅ Hata yakalandığı için fonksiyon durmaz, bu satır çalışmaya devam eder.
};

exceptionHandling2(); // ✅ Fonksiyon çağrılıyor ve çalıştırılıyor.

//////////////////////////////////////////////////////////
//Debug
const debugData = () => {
  let value = "Sunqfu Data"; // Değişken tanımlandı.

  for (let i = 1; i <= 5; i++) {
    // Döngü i = 1'den başlayarak 5'e kadar devam eder.
    console.log(value + i * 1); // "Sunqfu Data1", "Sunqfu Data2", ..., "Sunqfu Data5" olarak yazdırır.

    if (i === 4) {
      // Boş if bloğu var. Buraya bir işlem eklenmezse gereksiz.
    }

    //debugger; // Tarayıcı geliştirici konsolunda burada kod duraklatılır.
  }
};

debugData(); // Fonksiyon çağrılır ve çalıştırılır.

///////////////////////////////////////////////////////////////
//Set Time Out

const setTimeoutFunction = () => {
  setTimeout(() => {
    // 3 saniye sonra çalışacak fonksiyon
    console.log("3 saniye sonra çalıştı ve durdu");
  }, 3000);
};

setTimeoutFunction(); // ✅ Fonksiyon çağrılıyor, böylece çalışır.

console.log("********************");

//Anonymous Function
// 4 saniye sonra çalışan fonksiyon
setTimeout(function () {
  console.log("4 saniye sonra çalıştı ve durdu");
}, 4000);

// Eğer setTimeoutFunction adlı bir fonksiyon varsa, onu çağırabilirsiniz.
setTimeoutFunction(); // ✅ Doğru fonksiyon adı olmalı

//setinterval
// 5 saniyede bir çalışan fonksiyon
setInterval(function () {
  console.log("5 saniye aralıklarla çalıştı");
}, 5000);

//Clocktime
const setIntervalFunction2 = () => {
  let clockTime = () => {
    console.log("Saat çalışıyor: " + new Date().toLocaleTimeString());
  };

  let intervalID = setInterval(clockTime, 2500); // ✅ Doğru kullanım: Fonksiyon çağrısı yerine referans verildi.

  setTimeout(() => {
    clearInterval(intervalID); // ✅ 5 saniye sonra interval durduruluyor.
    console.log("5 Saniye sonra interval durduruldu!");
  }, 5000);
};

setIntervalFunction2(); // ✅ Fonksiyon çağrılıyor.

///////////////////////////////////////////////////////////////
//             Synchronous- Asynchronous //

//Monad
const monad = () => {
  // First Function
  const data1 = (number) => {
    return Math.sqrt(number); //Karekök alma işlemi
  };
  // Second Function
  const data2 = (number) => {
    return Math.pow(number, 3); //Üstünü bulma
  };
  let result = data2(data1(25)); //Sonuç
  console.log(result);
};
monad();

// Callback Function
const callbackFunction = () => {
  const data1 = (number, callback) => {
    setTimeout(() => {
      callback(number);
    }, 1000);
  };

  const data2 = (number, callback) => {
    setTimeout(() => {
      callback(number);
    }, 1000);
  };

  const data3 = (number, callback) => {
    setTimeout(() => {
      callback(number);
    }, 1000);
  };

  data1(44, (number1) => {
    console.log("data1 " + number1);
    data2(number1, (number2) => {
      console.log("data2 " + number2);
      data3(number2, (number3) => {
        console.log("data3 " + number3);
      });
    });
  });
};

callbackFunction();

//////////////////////////////////////////////////
//Promise
const promiseFunction = () => {
  function data1(number) {
    const isLogin = false; // Kullanıcının giriş yapıp yapmadığını kontrol eden değişken

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (isLogin) {
          console.log(number + " Promise Çağırıldı"); // Giriş başarılıysa mesaj yazdır
          resolve(number); // Promise başarılı şekilde tamamlanır ve number değeri döndürülür
        } else {
          reject("Promise Çağırılamadı"); // Giriş başarısızsa hata fırlat
        }
      }, 1000); // 1 saniye bekletme
    });
  }

  // data1 fonksiyonunu çağırırken .then() ve .catch() kullanmalıyız
  data1(12)
    .then((response) => {
      console.log("Response: " + response); // Eğer resolve olursa çalışır
    })
    .catch((err) => {
      console.error("Hata:", err); // Eğer reject olursa buraya düşer
    });
};

promiseFunction();

//////////////////////////////////////////////////////////////

// Async Await Function
const asyncAwaitFunction = () => {
  function promiseFunction(number) {
    const isLogin = true; // Kullanıcının giriş yapıp yapmadığını kontrol eden değişken
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (isLogin) {
          console.log(number + " Promise Çağırıldı"); // Eğer giriş yapılmışsa mesaj yazdırılır
          resolve(number); // Promise başarılı olursa verilen değer döndürülür
        } else {
          reject("Promise Çağırılamadı"); // Eğer giriş yapılmamışsa hata fırlatılır
        }
      }, 1000);
    });
  }

  let asyncAwaitData = async () => {
    try {
      let result = await promiseFunction(33); // `await` ile Promise sonucunu bekliyoruz
      console.log("Sonuç:", result); // resolve edilen değeri yazdırıyoruz
      console.log("AsyncData"); // Bu satır, Promise tamamlandıktan sonra çalışacak
    } catch (error) {
      console.error("Hata:", error); // Eğer `reject` olursa buraya düşer
    }
  };

  asyncAwaitData(); // Asenkron fonksiyonu çağırıyoruz
};

asyncAwaitFunction();

////////////////////////////////////////////////////////
//Array

const arrayFunction = () => {
  let array = [1, 2, 3, 4, 5, 6]; // 6 elemanlı bir dizi tanımlandı
  array[6] = 7; // 7. indeksine (7. elemanına) 7 değeri atandı
  array[7] = 8; // 8. indeksine (8. elemanına) 8 değeri atandı
  array[8] = 9; // 9. indeksine (9. elemanına) 9 değeri atandı

  console.log(array); // Konsola dizinin tamamı yazdırılır

  document.writeln(array); // Sayfaya dizinin tamamı yazdırılır
  document.writeln("<br/>");

  document.writeln(array[0]); // İlk elemanı yazdırır → 1
  document.writeln(array[8 - 1]); // 7. indeksteki elemanı yazdırır → 8
  document.writeln(array[8]); // 8. indeksteki elemanı yazdırır → 9

  document.writeln("<br/>");
  document.writeln("length: " + array.length); // Dizinin uzunluğunu yazdırır → 9
  document.writeln(array[array.length - 1]); // Son elemanı yazdırır → 9
};

arrayFunction();

///////////////////////////////////////////////////////////////

const arrayDataSet = () => {
  let array = [9, 1, 2, 6, 3, 5, 4];
  return array;
};
//Iterative For
const arrayLoop = () => {
  let array = arrayDataSet();
  for (let i = 0; i < array.length; i++) {
    document.writeln(array[i]);
  }

  document.writeln("<br/>****<br/>");

  // For In
  for (let data1 in array) {
    // document.writeln(data1);
    document.writeln(array[data1]);
  }
  document.writeln("<br/>****<br/>");
  // For Of
  for (let data2 of array) {
    // document.writeln(data1);
    document.writeln(data2);
  }
};
// arrayLoop();

//Dizile Push, Unshift, Pop, Shift, Delete
const arrayMethod1 = () => {
  let array = arrayDataSet();
  for (let data2 of array) {
    document.writeln(data2);
  }
  document.writeln("<br/>****<br/>");
  //Push (Sona Ekleme)
  array.push(33, 44, 16);
  for (let data2 of array) {
    document.writeln(data2);
  }
  document.writeln("<br/>****<br/>");
  //Unshift (Sona Ekleme)
  array.unshift(11, 22, 41);
  for (let data2 of array) {
    document.writeln(data2);
  }
  document.writeln("<br/>****<br/>");
  //Pop (Sondan Eleman Silme)
  array.pop();
  for (let data2 of array) {
    document.writeln(data2);
  }
  document.writeln("<br/>****<br/>");
  //Shift (Sondan Eleman Silme)
  array.shift();
  for (let data2 of array) {
    document.writeln(data2);
  }
  document.writeln("<br/>****<br/>");
  //delete (Belirtilen Eleman Silme Yerine undefined Atama Dizi Uzunluğunu Değiştirme)
  delete array[0];
  delete array[1];
  for (let data2 of array) {
    document.writeln(data2);
  }
};
arrayMethod1();
document.writeln("<br/>****<br/>");
////////////////////////////////////////////////////////
const arrayMethod2 = () => {
  let array = arrayDataSet();
  for (let data2 of array) {
    document.writeln(data2);
  }
  document.writeln("<br/>****<br/>");
  ///Sort
  array.sort();
  for (let data2 of array) {
    document.writeln(data2);
  }
  document.writeln("<br/>****<br/>");

  //Reverse
  array.reverse();
  for (let data2 of array) {
    document.writeln(data2);
  }
  document.writeln("<br/>****<br/>");
  Sort(), Reverse();

  // array.sort().reverse();
  // for (let data2 of array) {
  //   document.writeln(data2);
  // }
  // document.writeln("<br/>****<br/>");

  array
    .sort()
    .reverse()
    .forEach((response) => {
      document.writeln(response);
    });
};
// arrayMethod2();
/////////////////////////////////////////////////
// Diziler Splice and Slice
const arrayMethod3 = () => {
  let array = arrayDataSet(); // arrayDataSet() fonksiyonunun tanımlı olması gerekir.
  let cloneArray = array; // Bağımsız bir kopya oluştur

  cloneArray.forEach((response) => {
    document.writeln(response);
  });

  document.writeln("<br/>****<br/>");

  // Splice - 3. indeksten başlayarak 2 elemanı sil
  cloneArray.splice(3, 2);

  cloneArray.forEach((response) => {
    document.writeln(response);
  });

  document.writeln("<br/>****<br/>");

  // Splice - 1. indekse 44 ve 45 ekle
  cloneArray.splice(1, 0, 44, 45);

  cloneArray.forEach((response) => {
    document.writeln(response);
  });
  document.writeln("<br/>****<br/>");
  //Slice
  let cloneArray2 = array;
  cloneArray2.slice(1, 4).forEach((response) => {
    document.writeln(response);
  });
  document.writeln(response);
  cloneArray2.forEach((response) => {
    document.writeln(response);
  });
};

// arrayMethod3();

///////////////////////////////////////
// Map, Filter
const arrayMethod4 = () => {
  let array = arrayDataSet();
  let cloneArray = array;
  cloneArray.forEach((response) => {
    document.writeln(response);
  });
  document.writeln("<br/>***********************<br/>");
  //Filter
  let filterSunqfuNumbers = cloneArray
    .filter((response) => {
      return response > 5;
    })
    .forEach((response) => {
      document.writeln(response);
    });
  document.writeln("<br/>***********************<br/>");
  // Map
  let filterSunqfuNumbers2 = cloneArray
    .map((response) => {
      return response * 2;
    })
    .forEach((response) => {
      document.writeln(response);
    });

  document.writeln("<br/>***********************<br/>");
  let filterSunqfuNumbers3 = cloneArray
    .filter((response) => {
      return response > 5;
    })
    .map((response) => {
      return response * 2;
    })
    .forEach((response) => {
      document.writeln(response);
    });
};
arrayMethod4();
//////////////////////////////////////////////////
//Multiline
const data7 = () => {
  let multilineSunqfu = `1.Satır
  2.Satır
  3.satır
  `;
  console.log(multilineSunqfu);

  //Interpolation
  let sunqfuName = "Fullstack";
  let sunqfuTech1 = "Html5";
  let sunqfuTech2 = "Css3";
  let sunqfuTech3 = "JSS";
  console.log(
    sunqfuName + " " + sunqfuTech1 + " " + sunqfuTech2 + " " + sunqfuTech3
  );
  console.log(`${sunqfuName} ${sunqfuTech1} ${sunqfuTech2} ${sunqfuTech3}`);

  // Html5 Template
  let normSunqfu = "<ul>" + "<li>Merhaba</li>" + "<li>Merhaba-2</li>" + "</ul>";
  console.log(normSunqfu);

  let htmlTemplateSunqfu = `
  <ul>
  <li>Merhaba</li>
  <li>Merhaba-2</li>
  </ul>
  `;
  console.log(htmlTemplateSunqfu);
};
data7();

//////////////////////////////////////////////
// Object
const data8 = () => {
  const sunqfuFullstack = {
    brand: "Sunqfu",
    model: "Fullstack",
    year: "2025",
    isLogin: false,
    start: function () {
      // let data=this.brand+" "+"Fullstack Learning"
      let data = `${this.brand} Fullstack Learning`;
      console.log(data);
    },
    dizi: [0, 44, 2, 3],
  };
  console.log(sunqfuFullstack);
  console.log(sunqfuFullstack.brand);
  console.log(sunqfuFullstack.brand.toUpperCase());
  console.log(sunqfuFullstack.model);
  console.log(sunqfuFullstack.year);
  if (sunqfuFullstack.isLogin) console.log("Giriş Yapıldı");
  else console.log("Giriş Yapılmadı");
  sunqfuFullstack.start();
  sunqfuFullstack.fullstack = {
    name: "Html5",
    year: "2025",
  };
  console.log(sunqfuFullstack.fullstack.name);
  console.log(sunqfuFullstack["fullstack"]["name"]);
  console.log(sunqfuFullstack.dizi[1]);
};
data8();
