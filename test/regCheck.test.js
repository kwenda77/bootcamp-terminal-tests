const regCheck = require("../regCheck.js");
const assert = require('assert');

describe("a function called regCheck that can check if a registration number is for GP, L, EC, MP registration plates", function(){


    it("returns true or false if is for the provinces mentioned above", function(){

        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);

    })


    it("returns true or false if is for the provinces mentioned above", function(){

        assert.equal(regCheck('DC 55 YU GP', 'EC'), false);

    })


    it("returns true or false if is for the provinces mentioned above", function(){

        assert.equal(regCheck('5566 L', 'L'), true);

    })


    
    it("returns true or false if is for the provinces mentioned above", function(){

        assert.equal(regCheck('5566 L', 'M'), false);

    })


    it("returns true or false if is for the provinces mentioned above", function(){

        assert.equal(regCheck('ERT 123 EC', 'EC'), true);

    })
})