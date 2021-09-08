const countAllFromTown = require("../countAllForTown.js");
const assert = require('assert');

describe("function called allFromTown that takes a string parameter with registration numbers separated with commas and the registration number start string", function(){


    it("should return count of the registration numbers in the string that is for that town", function(){

        var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
        //fromStellies should contains
        assert.equal(fromStellies, 3)

    })

    it("should return count of the registration numbers in the string that is for that town", function(){

        var fromKuilsriver = countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF');
      //fromStellies should contains
      assert.equal(fromKuilsriver, 1)

    })

})