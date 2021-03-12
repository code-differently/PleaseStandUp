class PleaseStandUp {

    /*
    Have the function howOld(birthday) take the birthday parameter being passed and 
    return the age of a person with the date as their birthday.
    (ie. if birthday = June 22, 1996 then the output should be 24)
    */

   howOld(birthday){
    moment().diff(moment('20120507', 'YYYYMMDD'), 'years')
        return birthday;
    }

    // DEFINE BIRTHDAY
    // DEFINE TODAYS DATE
    // SUBTRACT BIRTHDAY FROM TODAYS DATE
    // RETURN DIFFERENCE

    /*
    Have the function timeConvert(numOfMins) take the numOfMins parameter being passed and 
    return the number of hours, minutes, and seconds the parameter converts to 
    (ie. if num = 63.5 then the output should be 1:3:30). Separate the number of hours,
    minutes, and seconds with colons.
    */

    timeConvert(numOfMins){
            // calculate number of hours 
            // divide number by 60
            // round the answer down
           let hours = Math.floor(numOfMins / 60);
           //calculate minutes
           let minutes = numOfMins % 60;
           //calculate seconds
            let seconds = minutes % 60 / 60;
    
        // craft our output
           return `${hours}:${minutes}:${seconds}`; // hour ":" min ":" seconds
        
    }

   

}

 module.exports = PleaseStandUp;
