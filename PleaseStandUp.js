class PleaseStandUp {

    /*
    Have the function howOld(birthday) take the birthday parameter being passed and 
    return the age of a person with the date as their birthday.
    (ie. if birthday = June 22, 1996 then the output should be 24)
    */

   howOld(birthday){
       // First begin with today's date (the only way to know age, is to know the current date)
       // Find the subject's birth date
       // Subtract the subject's date of birth from today's date
       // Display result
        return -1;
    }

    /*
    Have the function timeConvert(numOfMins) take the numOfMins parameter being passed and 
    return the number of hours, minutes, and seconds the parameter converts to 
    (ie. if num = 63.5 then the output should be 1:3:30). Separate the number of hours,
    minutes, and seconds with colons.
    */

    timeConvert(numOfMins){
        // Divide minutes by 60, to calculate the number of hours
       let hours = Math.floor(num/60);
       // The remaining minutes will serve as the remainder of the equation
       let minutes = num % 60;
       // Multiply the right side of decimal by 60, to calculate number of seconds
       // Return hours:minutes:seconds
       let results = hours + ":" + minutes + ":" + seconds;
       return results;
        return -1;
    }

}

 module.exports = PleaseStandUp;
