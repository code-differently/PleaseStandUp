class PleaseStandUp {

    /*
    Have the function howOld(birthday) take the birthday parameter being passed and 
    return the age of a person with the date as their birthday.
    (ie. if birthday = June 22, 1996 then the output should be 24)
    */

   howOld(birthday){
    // convert string into date format 
    
    // put today's date in a variable
    
    // subtract today's date from the date enterted
        
    // convert to years/integer
        
    }

    /*
    Have the function timeConvert(numOfMins) take the numOfMins parameter being passed and 
    return the number of hours, minutes, and seconds the parameter converts to 
    (ie. if num = 63.5 then the output should be 1:3:30). Separate the number of hours,
    minutes, and seconds with colons.
    */

    timeConvert(numOfMins){
    // get the hours
    let hours =  Math.floor(numOfMins / 60);
    // get the minutes using modulus
    let minutes = Math.floor(numOfMins % 60);
    // get the number of seconds 
    let seconds = (numOfMins % 1) * 60;
    // use Math.floor to remove decimal
    seconds = Math.floor(seconds);
    // return everything added together for output
    return `${hours}:${minutes}:${seconds}`;
}
        
    }



 module.exports = PleaseStandUp;
