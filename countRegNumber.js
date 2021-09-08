module.exports = function countRegNumber(stringName){

    if(!stringName){

        return "Enter at least one registration number!";
    }

    if(stringName === ''){

        return "Enter at least one registration number!"
    }
  
    return stringName.split(' ').length-1;
  }

