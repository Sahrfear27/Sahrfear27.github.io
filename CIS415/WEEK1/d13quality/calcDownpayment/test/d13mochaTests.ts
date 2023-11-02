
import { assert } from "chai"
// import { isVowel } from "../src/app.js"
import { calcDownpayment } from "../src/app.js"

describe("test for calcDownpayment", function () {
    it("tests 40000 as initial down payment", function () {
        const exact = calcDownpayment(40000);
        assert.strictEqual(+exact.toFixed(2), 2000);
    })
    it("tests 50000 as initial down payment", function () {
        const exact = calcDownpayment(50000);
        assert.strictEqual(+exact.toFixed(2), 2500);
    })
    it("tests 100000 as initial down payment", function () {
        const exact = calcDownpayment(100000);
        assert.strictEqual(+exact.toFixed(2), 7500);
    })
    it("tests 250000 as initial down payment", function () {
        const exact = calcDownpayment(250000);
        assert.strictEqual(+exact.toFixed(2), 25000);
    })
})
// console.log("expect 2500: ", calcDownpayment(50000));
// console.log("expect 7500: ", calcDownpayment(100000));
// console.log("expect 25000: ", calcDownpayment(250000));