class PleaseStandUp {

    /*
    Have the function howOld(birthday) take the birthday parameter being passed and 
    return the age of a person with the date as their birthday.
    (ie. if birthday = June 22, 1996 then the output should be 24)
    */

   howOld(birthday){
       //subtract today's date with date of birthday to get age in munber of years
            //define today's date
            //convert today's date in to a number that can be subtracted from (2021/3/11)
            //convert given birthday in to the same format as today's date (1996/6/22)
            //subtract today's date by birthday
            //return total
        return -1;
    }

    /*
    Have the function timeConvert(numOfMins) take the numOfMins parameter being passed and 
    return the number of hours, minutes, and seconds the parameter converts to 
    (ie. if num = 63.5 then the output should be 1:3:30). Separate the number of hours,
    minutes, and seconds with colons.
    */

    timeConvert(numOfMins){
        //calculate number of hours by divinding input by 60 then rounding down
        var hours = Math.floor(numOfMins/60);
        //calculate number of mins subtracting input by hours converted into minutes then rounding down
        var minutes = Math.floor(numOfMins - (hours*60));
        //calculate number of secs by subtracting input by hours converted into minutes plus minutes then multiplying by 60 then rounding down
        var seconds = Math.floor((numOfMins - ( (hours*60) + minutes ) ) * 60);
        //return hours, minutes, and secs into a combined output separated by semicolons
        return hours + ":" + minutes + ":" + seconds;
    }

}

 module.exports = PleaseStandUp;
