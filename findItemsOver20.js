module.exports = function findItemsOver20(itemList){
    var results =[];
    
   // console.log(itemList);
    for(var i=0;i<itemList.length;i++){
      var listItem = itemList[i];
      var newQty = listItem.qty
      //console.log(newQty);
      if(newQty>20){
       results.push(listItem);
      } 
    }
    
    return results;
    //console.log(results)
  }