class PleaseStandUp {

    /*
    Have the function howOld(birthday) take the birthday parameter being passed and 
    return the age of a person with the date as their birthday.
    (ie. if birthday = June 22, 1996 then the output should be 24)
    */

   howOld(birthday){
       //receive the parameter and then calculate the age as follows
    //split the input into 
       //subract the current year from the given year
       
        let age = 2021 
       //account for the month and round down if month is less than 6 and round up if month is more than 6 months

       //return year and month
        return -1;
    }

    /*
    Have the function timeConvert(numOfMins) take the numOfMins parameter being passed and 
    return the number of hours, minutes, and seconds the parameter converts to 
    (ie. if num = 63.5 then the output should be 1:3:30). Separate the number of hours,
    minutes, and seconds with colons.
    */

    timeConvert(numOfMins){
        //calculate the number of hours
        let hours = Math.floor(numOfMins/60);
        //calculate the number of nminutes
        let mins = Math.floor(numOfMins%60);
        // calculate the number of seconds
        //first calcate the modular to 2 decimal places
        let seconds = (numOfMins % 60).toFixed(2) ;
        // then split result by dot
        let newArray = seconds.split('.');
        //find the index after the dot and multiply that by .6
       let second  = newArray[1]* .6;
            
    //return hour minute and seconds
        return `${hours}:${mins}:${second}`;
    }

}

module.exports = PleaseStandUp;