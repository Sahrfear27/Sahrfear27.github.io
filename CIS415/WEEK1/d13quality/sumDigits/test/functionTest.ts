
import { assert } from "chai"
import { sumDigits } from "../src/app.js";


it("The sum of 123", function () {
    const exact = sumDigits(124);
    assert.strictEqual(+exact ,7);
});
it("The sum of 102", function(){
    const exact = sumDigits(102);
    assert.strictEqual(+exact, 3);
})
it("The sum of 8", function(){
    const exact = sumDigits(8);
    assert.strictEqual(+exact, 8);
})


