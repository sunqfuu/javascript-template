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
const data1 = 10,
  data2 = "10";
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
