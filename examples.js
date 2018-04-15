const locale_en = require('./locales/en');
const locale_az = require('./locales/az');
const DigitToWord = require('./index');

const dtw = new DigitToWord(124377575452);

console.log(dtw.toWords()); // یکصد و بیست و یک میلیارد و سیصد و هفتاد و سه میلیون و پانصد و هفتاد و پنج هزار و چهارصد و پنجاه و چهار
console.log(DigitToWord.fromDigits(12234343454)); // دوازده میلیارد و دویست و سی و دو میلیون و سیصد و چهل و سه هزار و چهارصد و پنجاه و چهار
console.log(DigitToWord.fromDigits(23434000, locale_en)); // twenty three million, four-hundred thirty four tousands
console.log(DigitToWord.fromDigits(23434000, locale_az)); // iyirmi üç milyon, dörd-yüz otuz dörd min