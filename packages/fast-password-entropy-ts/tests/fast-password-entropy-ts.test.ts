'use strict';

const {passwordEntropy, STD_CHARSETS} = require("../lib/fast-password-entropy-ts");

describe("STD Charsets Tests", () => {

  test("Empty string test", () => {
    const result = passwordEntropy("", STD_CHARSETS)
    expect(result.entropy).toBe(0);
    expect(Array.isArray(result.charsets)).toBeTruthy();
    expect(result.charsets.length).toBe(0)
  })

  test("1 character type - Lowercase", () => {
    const result = passwordEntropy("badpassword", STD_CHARSETS)
    expect(result.entropy).toBe(52);
    expect(Array.isArray(result.charsets)).toBeTruthy();
    expect(result.charsets.length).toBe(1)
    expect(result.charsets[0].name).toBe("lowercase")
  })

  test("1 character type - Uppercase", () => {
    const result = passwordEntropy("BADPASSWORD", STD_CHARSETS)
    expect(result.entropy).toBe(52);
    expect(Array.isArray(result.charsets)).toBeTruthy();
    expect(result.charsets.length).toBe(1)
    expect(result.charsets[0].name).toBe("uppercase")
  })

  test("1 character type - Numbers", () => {
    const result = passwordEntropy("1234567890", STD_CHARSETS)
    expect(result.entropy).toBe(33);
    expect(Array.isArray(result.charsets)).toBeTruthy();
    expect(result.charsets.length).toBe(1)
    expect(result.charsets[0].name).toBe("digits")
  })

  test("1 character type - Symbols", () => {
    const result = passwordEntropy("~`!@#$%^&*()_-=+[{]}\\|:;\"',<.>/? ", STD_CHARSETS)
    expect(result.entropy).toBe(166);
    expect(Array.isArray(result.charsets)).toBeTruthy();
    expect(result.charsets.length).toBe(1)
    expect(result.charsets[0].name).toBe("symbols")
  })

  test("2 character types", () => {
    const result = passwordEntropy("bAdPaSsWoRd", STD_CHARSETS)
    expect(result.entropy).toBe(63);
    expect(Array.isArray(result.charsets)).toBeTruthy();
    expect(result.charsets.length).toBe(2)
  })

  test("3 character types", () => {
    const result = passwordEntropy("?b!AdPaS#sWo^Rd", STD_CHARSETS)
    expect(result.entropy).toBe(96);
    expect(Array.isArray(result.charsets)).toBeTruthy();
    expect(result.charsets.length).toBe(3)
  })

  test("4 character types", () => {
    const result = passwordEntropy("?b!A3dPaS5#sW4o^Rd", STD_CHARSETS)
    expect(result.entropy).toBe(118);
    expect(Array.isArray(result.charsets)).toBeTruthy();
    expect(result.charsets.length).toBe(4)
  })

})

describe("Nonstandard Charsets Tests", () => {

  let FRENCH_CHARSETS;

  beforeAll(() => {
    FRENCH_CHARSETS = [{
      name: 'french-lowercase',
      re: /[àâäèéêëîïôœùûüÿç]/,
      length: 16
    }, {
      name: 'french-uppercase',
      re: /[ÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ]/,
      length: 16
    }];
  })

  test("French charset lower", () => {
    const result = passwordEntropy("àūáòèÿçń",
        STD_CHARSETS.concat(FRENCH_CHARSETS))
    expect(result.entropy).toBe(32);
    expect(Array.isArray(result.charsets)).toBeTruthy();
    expect(result.charsets.length).toBe(1)
  })

  test("French charset upper", () => {
    const result = passwordEntropy("ÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ",
        STD_CHARSETS.concat(FRENCH_CHARSETS))
    expect(result.entropy).toBe(64);
    expect(Array.isArray(result.charsets)).toBeTruthy();
    expect(result.charsets.length).toBe(1)
  })

  test("French charset upper/lower", () => {
    const result = passwordEntropy("ÀÈàūçńÊÎÏáòèÿÔŒÙÜŸÇ",
        STD_CHARSETS.concat(FRENCH_CHARSETS))
    expect(result.entropy).toBe(95);
    expect(Array.isArray(result.charsets)).toBeTruthy();
    expect(result.charsets.length).toBe(2)
  })

  test("Standard and custom charsets", () => {
    const result = passwordEntropy("ÀÈàūçńÊÎÏáòèÿÔŒÙÜŸÇabcABC123!@#",
        STD_CHARSETS.concat(FRENCH_CHARSETS))
    expect(result.entropy).toBe(217);
    expect(Array.isArray(result.charsets)).toBeTruthy();
    expect(result.charsets.length).toBe(6)
  })

})