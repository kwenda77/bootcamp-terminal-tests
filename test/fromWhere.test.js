const fromWhere = require("../fromWhere.js");
const assert = require('assert');


describe("function called fromWhere that takes a car registration number as a parameter", function(){


    it("returns the town the car is from", function(){

        assert.equal(fromWhere('CY'), 'Bellville');

    })


    it("Creturns the town the car is from", function(){

        assert.equal(fromWhere('CJ'), 'Paarl');

    })


    it("returns the town the car is from", function(){

        assert.equal(fromWhere('CA'), 'Cape Town');

    })


    
    it("returns the town the car is from", function(){

        assert.equal(fromWhere('CC'), 'Some other place!');

    })
})