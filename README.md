# DigitToWord
Multilingual digits to words convertor

### Installation
```bash
npm install --save digitstowords
```

### Usage
```js
const DigitToWord = require('digitstowords');

// Default locale is farsi(persian)
console.log(DigitToWord.fromDigits(12234343454)); // Or 
let dtw = new DigitToWord(12234343454);
console.log(dtw.toWords());
 // دوازده میلیارد و دویست و سی و دو میلیون و سیصد و چهل و سه هزار و چهارصد و پنجاه و چهار


// load azeri locale
const locale_az = require('digitstowords/locales/az');
console.log(DigitToWord.fromDigits(23434000, locale_az)); // Or 
dtw = new DigitToWord(23434000);
console.log(dtw.toWords());

// iyirmi üç milyon, dörd-yüz otuz dörd min

```

### Available languages
- Fa (persian)
- English
- Azeri (Azerbaijan)
- ... add more
