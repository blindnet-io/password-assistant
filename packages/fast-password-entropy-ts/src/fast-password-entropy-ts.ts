'use strict';

/**
 * Result of an entropy calculation containing the determined entropy and
 * included charsets.
 *
 * @interface EntropyResult
 * @property {number} entropy Integer indicating the calculated entropy
 * @property {Charset[]} charsets Charsets included in the entropy calculation.
 */
interface EntropyResult {
    entropy: number,
    charsets: Charset[]
}

/**
 * Describes a set of characters and corresponding regex, for use in entropy
 * calculation.
 *
 * @interface Charset
 * @property {string} name Name describing the charset, e.g. "arabic"
 * @property {RegExp} re Regex to match any character from the set
 * @property {number} length Number of characters in the set
 */
export interface Charset {
    name: string,
    re: RegExp,
    length: number
}

/**
 * Standard character sets list.
 *
 * The `uppercase` and `lowercase` charsets include all 26 characters from the
 * English alphabet. The digits set contains all 10 possible digits (0-9).
 * The symbols set contains the 33 remaining chars in the 7-bit ASCII table, as
 * found on a standard english keyboard.
 *
 * @type {Charset[]}
 */
export const STD_CHARSETS: Charset[] = [{
    name: 'lowercase',
    re: /[a-z]/,
    length: 26
}, {
    name: 'uppercase',
    re: /[A-Z]/,
    length: 26
}, {
    name: 'digits',
    re: /[0-9]/,
    length: 10
}, {
    name: 'symbols',
    re: /[~`!@#$%^&*()_\-+={\[}\]|\\:;"'<,>.?\/ ]/,
    length: 33
}];

/**
 * Calculate the entropy of a password and the characters sets it matches
 * based on a provided list of character sets.
 *
 * @param {string} password String to calculate the entropy of
 * @param {Charset[]} charSets List of Charset's to use in entropy calculation
 * @returns {EntropyResult} Object with entropy value and included charsets
 */
export function passwordEntropy(password: string,
                                charSets: Charset[]): EntropyResult {

    // Validate inputs
    if (password === undefined) {
        throw new TypeError("Expected a password argument.")
    }
    if (charSets == undefined || charSets.length == 0) {
        throw new TypeError("Expected a non-empty charset argument.")
    }

    // Calculate entropy and included charsets
    const inclCharsets = calcIncludedCharsets(charSets, password)
    const inclCharsetsLength = calcCharsetsLength(inclCharsets)
    return {
        entropy: calcEntropy(inclCharsetsLength, password.length),
        charsets: inclCharsets
    }
}

/**
 * Calculate the entropy of a string based on the size of the charset used and
 * the length of the string.
 *
 * Based on:
 * http://resources.infosecinstitute.com/password-security-complexity-vs-length/
 *
 * @param   {number} charsetLength is the size of the string charset.
 * @param   {number} stringLength  is the length of the string.
 * @returns {number}               the calculated entropy.
 */
function calcEntropy(charsetLength: number, stringLength: number): number {
    return charsetLength == 0 || stringLength == 0 ?
        0 : Math.round(stringLength * Math.log(charsetLength) / Math.LN2)
}

/**
 * Calculate which character sets match a test string.
 *
 * @param {Charset[]} charsets Character sets with regular expressions for
 * matching a test string.
 * @param {string} testStr String to test against the provided character sets.
 */
function calcIncludedCharsets(charsets: Charset[], testStr: string): Charset[] {
    return charsets.filter((charset) => charset.re.test(testStr))
}

/**
 * Calculate the combined length of an array of character sets.
 *
 * @param {Charset[]} charsets Array of character sets for which we sum the
 * length property.
 */
function calcCharsetsLength(charsets: Charset[]): number {
    return charsets.reduce((length, charset) =>
        length + charset.length, 0)
}