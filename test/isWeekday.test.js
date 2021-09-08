const isWeekday = require("../isWeekday.js");
const assert = require('assert');


describe("function takes a string parameter - to find out if the parameter passed in is a day of the week", function(){


    it("Determines if its a weekday not a weekend", function(){

        assert.equal(isWeekday('Saturday'), false);

    })

    it("Determines if its a weekday not a weekend", function(){

        assert.equal(isWeekday('Sunday'), false);

    })


    it("Determines if its a weekday not a weekend", function(){

        assert.equal(isWeekday('Monday'), true);

    })


    it("Determines if its a weekday not a weekend", function(){

        assert.equal(isWeekday('Tuesday'), true);

    })


    it("Determines if its a weekday not a weekend", function(){

        assert.equal(isWeekday('Wednesday'), true);

    })


})