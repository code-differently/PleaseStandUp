class PleaseStandUp {

    /*
    Have the function howOld(birthday) take the birthday parameter being passed and 
    return the age of a person with the date as their birthday.
    (ie. if birthday = June 22, 1996 then the output should be 24)
    */

   howOld(birthday){

        
        //get current date check if it's a leap year

        //getFullYear()	Get the year as a four digit number (yyyy)  

        // getMonth() Get the month as a number (0-11)

        //getDay()	Get the day as a number (1-31)

        //map months in words as a number (0-11)

        //calculate difference between year, 
        
        //compare difference between months if result is less than 0 subract from year if equal to 0 move to next condition

        //if difference between months is equal to 0 compare dates if less than or  to 0 subtract from year

        //print result

        const date = new Date().toString();
        return date;
    }

    /*
    Have the function timeConvert(numOfMins) take the numOfMins parameter being passed and 
    return the number of hours, minutes, and seconds the parameter converts to 
    (ie. if num = 63.5 then the output should be 1:3:30). Separate the number of hours,
    minutes, and seconds with colons.
    */

    timeConvert(numOfMins){

        //convert to hour
        const hour = Math.floor(numOfMins / 60);
        //convert to mins
        const minutes = Math.floor(numOfMins % 60);
        //convert to seconds
        const seconds =  Math.trunc((numOfMins % 1) *60);
        //print result
        return `${hour}:${minutes}:${seconds}`;
    }

}

 module.exports = PleaseStandUp;

