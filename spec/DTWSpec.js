describe('DigitToWord', () => {
    const DigitToWord = require('../index');
    const locale_az = require('../locales/az');
    const locale_en = require('../locales/en');

    it("it shoud init from cunstructor", () => {
        const dtw = new DigitToWord(34545);

        expect(typeof dtw).toBe('object');
        expect(dtw.locale.FIRST[1]).toBe('یک');
    });

    it("it should convert digits to Persian words", () => {
        expect(DigitToWord.fromDigits(124377575452)).toBe('یکصد و بیست و یک میلیارد و سیصد و هفتاد و سه میلیون و پانصد و هفتاد و پنج هزار و چهارصد و پنجاه و چهار');
    });

    it("it should convert digits to English words", () => {
       expect(DigitToWord.fromDigits(23434000, locale_en)).toBe('twenty three million, four-hundred thirty four tousands'); 
    });

    it("it should convert digits to Azeri words", () => {
        expect(DigitToWord.fromDigits(23434000, locale_az)).toBe('iyirmi üç milyon, dörd-yüz otuz dörd min'); 
     });
});