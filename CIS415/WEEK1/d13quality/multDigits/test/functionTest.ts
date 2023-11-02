
import { assert } from "chai"
import { multDigits } from "../src/app.js"



it("The product of 1234", function () {
    const exact = multDigits(1234);
    assert.strictEqual(+exact ,24);
});
it("The product of 102", function(){
    const exact = multDigits(102);
    assert.strictEqual(+exact, 0);
})
it("The product of 8", function(){
    const exact = multDigits(8);
    assert.strictEqual(+exact, 8);
})


