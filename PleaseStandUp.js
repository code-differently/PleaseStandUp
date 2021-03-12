class PleaseStandUp {

    /*
    Have the function howOld(birthday) take the birthday parameter being passed and 
    return the age of a person with the date as their birthday.
    (ie. if birthday = June 22, 1996 then the output should be 24)
    */

    howOld(birthday) {
        //get the birthday
        //get today's date
        //subtract birthday from today's date
        //return the age of the person
        return -1;
      }
    
      /*
        Have the function timeConvert(numOfMins) take the numOfMins parameter being passed and 
        return the number of hours, minutes, and seconds the parameter converts to 
        (ie. if num = 63.5 then the output should be 1:3:30). Separate the number of hours,
        minutes, and seconds with colons.
        */
    
      timeConvert(numOfMins) {
        //calculate the number of hours
        //Divide by 60 to get amount of hours
        //Round down
        let hours = Math.floor(numOfMins / 60);
        //calculate the number of minutes
        //get the remainder using % 60
        //Round down
        let minutes = Math.floor(numOfMins % 60);
        //calculate the number of seconds
        //multiply the fraction by 60 to get the seconds
        let seconds = Math.floor(((numOfMins % 60) - minutes) * 60);
        //craft the output
        //return the output
    
        return `${hours}:${minutes}:${seconds}`;
      }

}

 module.exports = PleaseStandUp;
