const yearsAgo = require("../yearsAgo.js");
const assert = require('assert');


describe("function takes a year in and determines how many years ago from the current year", function(){


    it("Calculate the difference between the current year and the year provided", function(){

        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976))

    })


    it("Calculate the difference between the current year and the year provided", function(){

        assert.equal((new Date().getFullYear() - 2010), yearsAgo(2010))

    })

})