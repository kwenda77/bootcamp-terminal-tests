
module.exports = function regCheck(regNo, regPlace){
    if(!regNo && !regPlace){

        return "Please enter correct registration number"
    }
    return regNo.endsWith(regPlace); 
     
   }