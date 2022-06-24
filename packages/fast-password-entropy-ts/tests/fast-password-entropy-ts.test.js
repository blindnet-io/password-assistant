'use strict';
const {passwordEntropy} = require("../lib/fast-password-entropy-ts");

describe("Entropy Value Tests", () => {

  test("", () => {
    const result = passwordEntropy("")
    expect(result.entropy).toBe(0);
    expect(Array.isArray(result.charsets)).toBeTruthy();
    expect(result.charsets.length).toBe(0)
  })

  test("badpassword", () => {
    expect(passwordEntropy("badpassword").entropy).toBe(52);
  })

  test("", () => {
    expect(passwordEntropy("bAdPaSsWoRd").entropy).toBe(63);
  })

})

// describe("Included/Not Included Charset Tests", () => {
//
//   test("", () => {
//     expect().toBe();
//   })
//
//   test("", () => {
//     expect().toBe();
//   })
//
//   test("", () => {
//     expect().toBe();
//   })
//
// })
//
// describe("Custom Charset Tests", () => {
//
//   test("", () => {
//     expect().toBe();
//   })
//
//   test("", () => {
//     expect().toBe();
//   })
//
//   test("", () => {
//     expect().toBe();
//   })
//
// })
//
// describe("", () => {
//
//   test("", () => {
//     expect().toBe();
//   })
//
//   test("", () => {
//     expect().toBe();
//   })
//
//   test("", () => {
//     expect().toBe();
//   })
//
// })