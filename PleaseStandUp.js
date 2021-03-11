class PleaseStandUp 

 /*
    Have the function howOld(birthday) take the birthday parameter being passed and 
    return the age of a person with the date as their birthday.
    (ie. if birthday = June 22, 1996 then the output should be 24)
    */

   howOld(birthday){
    // Input date of birth
    // Subtract date of birth from current date
    // Date of birth must be later than current date
    // Return current age
     return -1;
 }

 /*
 Have the function timeConvert(numOfMins) take the numOfMins parameter being passed and 
 return the number of hours, minutes, and seconds the parameter converts to 
 (ie. if num = 63.5 then the output should be 1:3:30). Separate the number of hours,
 minutes, and seconds with colons.
 */

 timeConvert(numOfMins){
    // Divide numOfMins by 60 to calculate hours
    let hours = Math.floor(numOfMins/60);
    // Remainder is minutes. Multiply by 60
    let minutes = Math.trunc(numOfMin) % 60;
    // Remainder is seconds. Multiply by 60
    let seconds = (numOfMins % 60 % 1) * 60;
    // Return hours:minutes:seconds
    let results = hours + ":" + minutes + ":" + seconds;
    return results;
 }


module.exports = PleaseStandUp;
