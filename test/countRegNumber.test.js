const countRegNumber = require("../countRegNumber.js");
const assert = require('assert');

describe("a function called countRegNumber that counts registration numbers from a string", function(){


    it("returns the number of registration numbers in the string", function(){

        var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
        assert.equal(regCount, 3);

    })


    it("returns the number of registration numbers in the string", function(){

        var regCount = countRegNumber('CA 182736')
        assert.equal(regCount, 1);

    })

})