class PleaseStandUp {

    /*
    Have the function howOld(birthday) take the birthday parameter being passed and 
    return the age of a person with the date as their birthday.
    (ie. if birthday = June 22, 1996 then the output should be 24)
    */

   howOld(birthday){
  
    // convert birthday into a numeric value

    // convert current date into a numeric value

    // subtract birthday numeric value from current date value to get the numeric value of time elapsed

    // convert the time elapsed value into years

    // round down the converted years value

    // return the rounded years value


        return -1;
    }

    /*
    Have the function timeConvert(numOfMins) take the numOfMins parameter being passed and 
    return the number of hours, minutes, and seconds the parameter converts to 
    (ie. if num = 63.5 then the output should be 1:3:30). Separate the number of hours,
    minutes, and seconds with colons.
    */

    timeConvert(numOfMins){
    // Divide the entered by 60 to return the value for hours
        let hours = numOfMins/60;
        let hoursRounded = Math.floor(hours);

        let mins = hours%60;
        let minsRounded = Math.floor(mins);

    //  Save the whole number(hours) and remainder returned into two separate variables
        let seconds = mins*60;
        let secondsRemainder = seconds%60;
        
    // Return all three values with a colon between each 
        return hoursRounded + ":" + minsRounded + ":" + secondsRemainder;
    }

}

 module.exports = PleaseStandUp;
