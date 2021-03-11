class PleaseStandUp {

    /*
    Have the function howOld(birthday) take the birthday parameter being passed and 
    return the age of a person with the date as their birthday.
    (ie. if birthday = June 22, 1996 then the output should be 24)
    */

   howOld(birthday) {
    // ask user to provide the date they were born

    // take the bithdate the user provided and calculate how old they are based on the current date

    // output result
       
    }

    /*
    Have the function timeConvert(numOfMins) take the numOfMins parameter being passed and 
    return the number of hours, minutes, and seconds the parameter converts to 
    (ie. if num = 63.5 then the output should be 1:3:30). Separate the number of hours,
    minutes, and seconds with colons.
    */

    timeConvert(numOfMins){
    // create a placeholder to capture end result
    let timeConversion;
    
    // calculate hours
    let hours = Math.floor(numOfMins / 60);

    // calculate mins
    let mins = Math.floor(numOfMins % 60);

    // capture secs in a decimal form
    let secDec = numOfMins % 1;

    // convert secs from a decimal to an integer
    let secInt = Math.floor(60 * secDec);

    // output result
    timeConversion = `${hours}:${mins}:${secInt}`;

    //console.log(secInt);
    return timeConversion;
    }

}

module.exports = PleaseStandUp;