class PleaseStandUp {

    /*
    Have the function howOld(birthday) take the birthday parameter being passed and 
    return the age of a person with the date as their birthday.
    (ie. if birthday = June 22, 1996 then the output should be 24)
    */

   howOld(birthday){
    //    you want to take the birthday & put it in a string
    // make a variable called age
    // you want to make a for loop  with a possible if statement 
    // return age
        return -1;
    }

    /*
    Have the function timeConvert(numOfMins) take the numOfMins parameter being passed and 
    return the number of hours, minutes, and seconds the parameter converts to 
    (ie. if num = 63.5 then the output should be 1:3:30). Separate the number of hours,
    minutes, and seconds with colons.
    */

    timeConvert(numOfMins){
        //  use math.floor to get the hour and round down to the nearest hour
        let hours = Math.floor(numOfMins / 60);
        // use the modulo operator to get the remainder of the number or integer
        let mins = numOfMins % 60;

        let sec = numOfMins % 60;

        
        return hours + ":" + mins + ":" + sec;
    }

}