module.exports = function yearsAgo(year){

    if(year == ''){

        return "Please enter a year e.g 1999"
    }
  
    var theDate = new Date();
    console.log(theDate.getFullYear());
    
    return theDate.getFullYear()-year;
  }