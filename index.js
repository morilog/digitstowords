class DigitToWord {
    constructor(value, locale) {
        this.value = parseInt(value);
        this.locale = locale || require('./locales/fa');
    }

    toWords() {
        return (this._splitTrilateral(this._splitDigits(this.value)))
            .map(i => {
                return this._printTrilateral(i);
            })
            .reduce((carry, v, k) => {
                if (v.length === 0) {
                    return carry;
                }

                if (k < 1) {
                    carry.push(v);
                    return carry;
                }

                const position = k >= 10 ? this.locale.POSITIONS[10] : this.locale.POSITIONS[k];
                carry.push(`${v} ${position}`);

                return carry;
            }, [])
            .reverse()
            .join(this.locale.SEPARATORS.trilateral);
    }

    _splitTrilateral(value) {
        const out = [];
        let part = '';
        let i = value.length - 1;
        let temp = 1;

        for (i; i >= 0; i-- , temp++) {
            part = value[i] + part;
            if (temp % 3 === 0) {
                out.push(part);
                part = '';
                temp = 0;
            }
        }

        if (part.length > 0) {
            out.push(part);
        }

        return out;
    }

    _splitDigits(value) {
        return value.toString().split('');
    }

    _printTrilateral(digits) {
        let parts = [];
        if (digits.length === 3) {
            parts.push(parseInt(digits[0]) === 0 ? '' : this.locale.THIRD[parseInt(digits[0] * 100)]);
            parts.push(this._printTrilateral(this._joinDigits(digits[1], digits[0])));
        } else if (digits.length === 2) {
            if (parseInt(digits[0]) === 0) {
                parts.push(this._printTrilateral(digits[1]));
            } else {
                if (parseInt(digits) < 20) {
                    parts.push(this.locale.SECOND[this._joinDigits(digits[0], digits[1])]);
                } else {
                    parts.push(this.locale.SECOND[parseInt(digits[0] * 10)]);
                    parts.push(this._printTrilateral(digits[1]));
                }
            }
        } else {
            parts.push(parseInt(digits[0]) === 0 ? '' : this.locale.FIRST[digits[0]]);
        }

        parts = parts.filter(i => {
            return i.length > 0;
        })

        return parts.length ? parts.join(this.locale.SEPARATORS.words) : '';
    }

    _joinDigits() {
        return Array.from(arguments).join('');
    }

    static fromDigits(digits, locale) {
        return (new DigitToWord(digits, locale)).toWords();
    }
}

module.exports = DigitToWord;