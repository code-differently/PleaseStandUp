class PleaseStandUp {

    /*
    Have the function howOld(birthday) take the birthday parameter being passed and 
    return the age of a person with the date as their birthday.
    (ie. if birthday = June 22, 1996 then the output should be 24)
    */

    howOld(birthday) {
        // store the birthday parameter in a variable
        // convert string to number
        // if today's month and day is after given birth month and day
        // subtract birth year from today's year
        // return integer
        // or else if today's month and day is before given birth month and day,
        // subtract birth year from today's year
        // subtract 1
        // return integer  

        //or 

        // convert to milliseconds & subtract
        return -1;
    }

    /*
    Have the function timeConvert(numOfMins) take the numOfMins parameter being passed and 
    return the number of hours, minutes, and seconds the parameter converts to 
    (ie. if num = 63.5 then the output should be 1:3:30). Separate the number of hours,
    minutes, and seconds with colons.
    */

    timeConvert(numOfMins) {
        // store numOfMins in a variable
        // minutes equals seconds  by 60 
        // dividing by 60 counts hours before decimal or remainder
        // what's left as a whole integer counts minutes
        // the remainder counts seconds
        // return results 

        let hours = Math.floor(numOfMins / 60);
        let minutes = Math.trunc(numOfMins) % 60;
        let seconds = (numOfMins % 60 % 1);
        seconds = Math.floor(seconds * 60);
        let results = `${hours}:${minutes}:${seconds}`;
        return results;
        // also return `${parseInt{num / 60}, 10)}:${num % 60}`

    }

}

module.exports = PleaseStandUp;