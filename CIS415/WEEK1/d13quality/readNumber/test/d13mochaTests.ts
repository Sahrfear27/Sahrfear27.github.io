
// import { assert } from "chai"
// // import { isVowel } from "../src/app.js"
// import { readNumber } from "../src/app.js"


// describe("Should return a valid number from the array", function(){
//     it("tests $100 for 1 year at 10% monthly compound", function(){
//         const input =['abc', '123a', 'ab123', '123.3', '123'];
//         const result = [123.3, 123];
//         const outPut = readNumber(input);
//         assert.strictEqual(outPut, result);
//     });
 
// });

import { assert } from "chai"
import { readNumber } from "../src/app.js"

describe("Should return a valid number from the array", function(){
    it("tests $100 for 1 year at 10% monthly compound", function(){
        const input =['abc', '123a', 'ab123', '123.3', '123'];
        const result = [123.3, 123];
        const outPut = readNumber(input);
        assert.deepEqual(outPut, result); // Use assert.deepEqual
    });
});
