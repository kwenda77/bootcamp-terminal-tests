module.exports = function totalPhoneBill(stringIn){
    var newList = stringIn.split(",");
    var countCalls = 0;
    var countSms = 0;
    var bill = 0;
   for(var i=0;i<newList.length;i++){
     var newS = newList[i].trim();
     //console.log(newS);
     if(newS.includes("call")){
      countCalls++;
       
       //console.log(countCalls);
     } else if(newS.includes("sms")){
       countSms++;
    // console.log(countSms);
     }
   }
    bill = countCalls*2.75 + countSms*0.65;
    console.log("R"+bill);
    return "R"+bill.toFixed(2);
  }