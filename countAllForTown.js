module.exports = function countAllFromTown(regNum, startString){
  //var newReg = [];
  
  var regs = regNum.split(",");
  //console.log(regs);
  let count = 0;
 for(var i=0;i<regs.length;i++){
   var regNo = regs[i].trim();
    if(regNo.includes(startString)){
       //console.log(regNo);
      count++;
       }

 }
  return count;
  
  //return newReg;
  
}