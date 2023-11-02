

/* comment out the import assert line (in /dist/test js mocha file) when running in the browser */
import { assert } from "chai"
// import { isVowel } from "../src/vowel"
import {  computeSalesCommission, compoundInterest } from "../src/app.js"



describe("test of ComputSalesCommission", function(){
    it("tests salaried and 200 sales", function(){
        assert.strictEqual(computeSalesCommission(200, true), 0);
    });
    it("tests not salaried and 200 sales", function(){
        assert.strictEqual(computeSalesCommission(200, false), 0);
    });
    it("tests salaried and 300 sales", function(){
        assert.strictEqual(computeSalesCommission(300, true), 3);
    });
    it("tests not salaried and 300 sales", function(){
        assert.strictEqual(computeSalesCommission(300, false), 6);
    });
    it("tests salaried and 3500 sales", function(){
        assert.strictEqual(computeSalesCommission(3500, true), 65);
    });
    it("tests not salaried and 3500 sales", function(){
        assert.strictEqual(computeSalesCommission(3500, false), 100);
    });
});

describe("test of compoundInterest", function(){
    it("tests $100 for 1 year at 10% monthly compound", function(){
        const exact = compoundInterest(100, 10, 1);
        assert.strictEqual(+exact.toFixed(2), 110.47 );
    });
    it("tests $10000 for 5 years at 10% monthly compound", function(){
        const exact = compoundInterest(10000, 5, 10);
        assert.strictEqual(+exact.toFixed(2), 16470.09 );
    });
});
