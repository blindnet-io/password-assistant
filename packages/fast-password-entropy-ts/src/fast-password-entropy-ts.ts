'use strict';

import * as Console from "console";
import * as console from "console";

interface EntropyResult {
    entropy: number,
    charsets: Charset[]
}

interface Charset {
    name: string,
    re: RegExp,
    length: number
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
const calcEntropy = (charsetLength: number, stringLength: number): number => {
    return Math.round(stringLength * Math.log(charsetLength) / Math.LN2);
};

/**
 * Standard character sets list.
 *
 * It assumes the `uppercase` and `lowercase` charsets to have 26 chars as in
 * the English alphabet. Numbers are 10 characters long. Symbols are the rest
 * of the 33 remaining chars in the 7-bit ASCII table.
 *
 * @type {Array}
 */
const stdCharsets: Charset[] = [{
    name: 'lowercase',
    re: /[a-z]/,
    length: 26
}, {
    name: 'uppercase',
    re: /[A-Z]/,
    length: 26
}, {
    name: 'numbers',
    re: /[0-9]/,
    length: 10
}, {
    name: 'symbols',
    re: /[^a-zA-Z0-9]/,
    length: 33
}];

const calcIncludedCharsets =
    (charsets: Charset[], testString: string): Charset[] =>
        charsets.filter((charset) => charset.re.test(testString))

const calcIncludedCharsetsLength = (charsets: Charset[]): number =>
    charsets.reduce((length, charset) =>
        length + charset.length, 0)


/**
 * Calculate the given password entropy.
 *
 * @returns {number}        [the calculated entropy.
 * @param password
 */
export const passwordEntropy = (password: string): EntropyResult => {

    if (password) {
        // Determine the included charsets and their total length
        const inclCharsets = calcIncludedCharsets(stdCharsets, password)
        const inclCharsetsLength = calcIncludedCharsetsLength(inclCharsets)
        return {
            entropy: calcEntropy(inclCharsetsLength, password.length),
            charsets: inclCharsets
        }
    } else {
        return {entropy: 0, charsets: []}
    }
};