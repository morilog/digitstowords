const locale_en = require('./locales/en');
const locale_az = require('./locales/az');
const DigitToWord = require('./index');

const dtw = new DigitToWord(124377575452);

console.log(dtw.toWords());
console.log(DigitToWord.fromDigits(12234343454));
console.log(DigitToWord.fromDigits(23434000, locale_en));
console.log(DigitToWord.fromDigits(23434000, locale_az));