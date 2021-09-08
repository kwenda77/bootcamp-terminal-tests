const transportFee = require("../transportFee.js");
const assert = require('assert');


describe("a function called transportFee that returns the right price based on the shift you are working", function(){


    it("Calculate the transport fee based on the shift provided", function(){

        assert.equal(transportFee('morning'), 'R20');

    })


    it("Calculate the transport fee based on the shift provided", function(){

        assert.equal(transportFee('afternoon'), 'R10');

    })


    it("Calculate the transport fee based on the shift provided", function(){

        assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');

    })
})