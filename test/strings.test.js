
const greet = require("../strings.js");
const assert = require('assert');

describe("should greet the person when a name is enterd", function(){


    it("should greet the name of the person entered", function(){

        assert.equal(greet('Bob'), 'Hello, Bob');

    })


    it("should greet the name of the person entered", function(){

        assert.equal(greet('Sam'), 'Hello, Sam');

    })
})