
import { assert } from "chai"
import { coordinateXY } from "../src/app.js";

describe("test to calculate distance", function () {
    it("The cordinate is ", function () {
        const exact = coordinateXY(0, 0, 5, 5);
        assert.strictEqual(+exact.toFixed(2) ,7.07);
    });
    it("The cordinate is ", function(){
        const exact = coordinateXY(5, 7, 12, 10);
        assert.strictEqual(+exact.toFixed(2), 7.62);
    })
    it("The cordinate is ", function(){
        const exact = coordinateXY(5, 7, 10, 10);
        assert.strictEqual(+exact.toFixed(2), 5.83);
    })
})


console.log("expect 7.07 : ", coordinateXY (0, 0, 5, 5))
console.log("expect 7.62 : ", coordinateXY (5, 7, 12, 10))
console.log("expect 5.83: ", coordinateXY (5, 7, 10, 10))


