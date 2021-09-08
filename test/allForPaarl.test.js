
const allPaarl = require("../allFromPaarl.js");
const assert = require('assert');

describe("should should take in a series of regNumbers and return the ones from Paarl", function(){


    it("should return all registration numbers from Paarl", function(){
        var regNumbers = 'CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864';

        var regNumbersForPaarl = allPaarl(regNumbers);
        assert.equal(2, regNumbersForPaarl.length, 'There are 2 Paarl reg numbers.');

    })

    it("should return all registration numbers from Paarl", function(){
        var regNumbers = 'CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864';

        var regNumbersForPaarl = allPaarl(regNumbers);
        assert.equal('CJ 678 543', regNumbersForPaarl[0]);

    })

    it("should return all registration numbers from Paarl", function(){
        var regNumbers = 'CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864';

        var regNumbersForPaarl = allPaarl(regNumbers);
        assert.equal('CJ 67890', regNumbersForPaarl[1]);

    })

})