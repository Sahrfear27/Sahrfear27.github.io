
import { assert } from "chai"
import { convertFahrenheit } from "../src/app.js";


it("The temperature in celcius is  ", function () {
    const exact = convertFahrenheit(12);
    assert.strictEqual(+exact.toFixed(2) ,-11.11);
});
it("The temperature in celcius is  ", function(){
    const exact = convertFahrenheit(32);
    assert.strictEqual(+exact, 0);
})
it("The temperature in celcius is  ", function(){
    const exact = convertFahrenheit(70);
    assert.strictEqual(+exact.toFixed(2), 21.11);
})


