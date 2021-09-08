module.exports = function isWeekday(dayName){
  
    if(dayName.startsWith("Tues")){

        return true
    }

    if(dayName.startsWith("Wed")){

        return true
    }

    if(dayName.startsWith("Thur")){

        return true
    }

    if(dayName.startsWith("Fri")){

        return true
    }

    if(dayName.startsWith("Sart")){

        return false
    }

    if(dayName.startsWith("Sun")){

        return false
    }
    return dayName.includes("Mon", "Tues", "Wed", "Thurs", "Fri");
  }