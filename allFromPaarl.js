module.exports = function allPaarl(regNumbers){
    var regFromPaarl = [];
     var regNo = regNumbers.split(",");
     for(var i=0;i<regNo.length;i++){
       var regNum = regNo[i].trim();
       //console.log(regNum);
     if (regNum.includes("CJ")){
       //console.log(regNum.startsWith("CJ"))
     regFromPaarl.push(regNum);
       //console.log(regFromPaarl);
     }
     }
     return regFromPaarl;

    }