
import { assert } from "chai"
// import { isVowel } from "../src/app.js"
import { compoundInterest } from "../src/app.js"


describe("test of compoundInterest", function(){
    it("tests $100 for 1 year at 10% monthly compound", function(){
        const exact = compoundInterest(100, 10, 1);
        assert.strictEqual(+exact.toFixed(2), 110.47 );
    });
    it("tests $10000 for 5 years at 10% monthly compound", function(){
        const exact = compoundInterest(10000, 5, 10);
        assert.strictEqual(+exact.toFixed(2), 16470.09 );
    });
    it("tests 35000 for 2 years at 35% monthly compound", function(){
        const exact = compoundInterest(35000, 2, 35);
        assert.strictEqual(+exact.toFixed(2),70440.29);
    });
});