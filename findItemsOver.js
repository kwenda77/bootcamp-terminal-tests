module.exports = function findItemsOver(itemList1, quantity){
    var results =[];
    
    for (var j=0;j<itemList1.length;j++){
      var item = itemList1[j];
      var qty1 = item.qty;
      
      if(qty1 > quantity){
        results.push(item);
      }
    }
      return results;
    //console.log(results)
    }