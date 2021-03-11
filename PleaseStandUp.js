class PleaseStandUp {

    /*
    Have the function howOld(birthday) take the birthday parameter being passed and return the age of a person with the date as their birthday. (ie. if birthday = June 22, 1996 then the output should be 24)
    */

   howOld(birthday){
    // if month, day, and year are same as birth month, birth day and birth year, then happy birthday
    // if year is less than birth year, then you haven't been born yet    
    // if year is greater than birth year and month is greater than birth month, then subtract birth year from year

       return -1;
    }

    /*
    Have the function timeConvert(numOfMins) take the numOfMins parameter being passed and 
    return the number of hours, minutes, and seconds the parameter converts to 
    (ie. if num = 63.5 then the output should be 1:3:30). Separate the number of hours,
    minutes, and seconds with colons.
    */

    timeConvert(numOfMins){
    // divide the numOfMins by 60 (60 min in 1 hour) and round down to make hours a whole number
        let hours = Math.floor(numOfMin / 60);
    // use numOfMins modulus 60 (modulus returns only the remainder which is minutes) round down to make it a whole number
        let minutes = Math.floor(num % 60);
        //console.log(63.5 % 60); = 3.5 so added math.floor
    // 
        
    
    //Position hours variable on left of ':', minutes variable between two colons and seconds variable to far right of colon.
        return `${hours}:${minutes}:${seconds}`;
    }

}

module.exports = PleaseStandUp;