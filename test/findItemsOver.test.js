const findItemsOver = require("../findItemsOver.js");
const assert = require('assert');



describe("unction called findItemsOver that takes a list of objects each with a name and qty attribute", function(){


    it("The function should return products that have quantity higher than the threshold set", function(){

        var itemList = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ];
        
        var results = [
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
        ];

        assert.deepEqual(results, findItemsOver(itemList, 20));

    })


    it("The function should return products that have quantity higher than the threshold set", function(){

        var itemList2 = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 19},
            {name : 'bananas', qty : 17},
            {name : 'apples', qty : 3},
        ];
        
        var results2 = [];

        assert.deepEqual(results2, findItemsOver(itemList2, 20));


    })


    it("The function should return products that have quantity higher than the threshold set", function(){

        var itemList3 = [
            {name : 'apples', qty : 40},
            {name : 'pears', qty : 20},
            {name : 'bananas', qty : 23},
            {name : 'apples', qty : 37}
        ];
        
        var results3 = [
            {name : 'apples', qty : 40},
            {name : 'bananas', qty : 23},
            {name : 'apples', qty : 37}
        ];

        assert.deepEqual(results3, findItemsOver(itemList3, 20));

    })

})