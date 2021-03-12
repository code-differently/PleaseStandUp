class PleaseStandUp {

    /*
    Have the function howOld(birthday) take the birthday parameter being passed and 
    return the age of a person with the date as their birthday.
    (ie. if birthday = June 22, 1996 then the output should be 24)
    */

   howOld(birthday){

        
        //current date
        //getFullYear()	Get the year as a four digit number (yyyy)  
        // getMonth() Get the month as a number (0-11)
        //getMonth()	Get the month as a number (0-11)

        //map months in words as a number

        //format input with current date format 

        //calculate difference between year, 
        
        //compare difference between months, date for precission

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
        const seconds =  Math.floor((numOfMins % 1) *60);
        //print result

        return `${hour}:${minutes}:${seconds}`;
    }

}

 module.exports = PleaseStandUp;

