class PleaseStandUp {

    /*
    Have the function howOld(birthday) take the birthday parameter being passed and 
    return the age of a person with the date as their birthday.
    (ie. if birthday = June 22, 1996 then the output should be 24)
    */

       howOld(birthday){
      // Enter today's day fomratted in month, day and year
       // Ask user to provide their birthdate in the correct format
       // subtract user's input from today's date
       //Return current age
       
        return -1;
    }

    /*
    Have the function timeConvert(numOfMins) take the numOfMins parameter being passed and 
    return the number of hours, minutes, and seconds the parameter converts to 
    (ie. if num = 63.5 then the output should be 1:3:30). Separate the number of hours,
    minutes, and seconds with colons.
    */

    timeConvert(numOfMins){
        // create variable to return time
        let time;
            
        // divide numOfMins by 60 and round down to calculate number of hours
        let hours = Math.floor(numOfMins/60);
    
        // calculate the number of minutes from remainder value and round down once again
        let minutes = Math.floor(numOfMins % 60);
    
        // calculate seconds in a decimal format
        let secD = numOfMins % 1;
    
        // convert seconds result from a decimal to an integer value
        let secI = Math.floor(60 * secD);
    
        // concatenate time in hours, minutes and sec format separated by colon
        time = hours + ":" + minutes + ":" + secI;
    
        // callback the function time
        return time;
    
        }
    
    }
    

 module.exports = PleaseStandUp;
