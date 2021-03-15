class PleaseStandUp {

    /*
    Have the function howOld(birthday) take the birthday parameter being passed and 
    return the age of a person with the date as their birthday.
    (ie. if birthday = June 22, 1996 then the output should be 24)
    */
       
       // Split up the input to a month, day, year
       // Set up placeholders for today's month, day, and year
       // Set a placholder to equal this year - year person was born
       // Set a placeholder to equal this month - month person was born
            // make a structure that holds months as numbers
            // If this month - month born is < 0, person is ("this year" - "year born" - 1 )years old
            // Else go onto day born
       // Set a placeholder to equal this day - day person was born
            // If this day - day born is < 0, person is ("this year" - "year born" -1 ) years old
            // Else this person is "this year" - "year born" years old
            
       

    /*
    Have the function timeConvert(numOfMins) take the numOfMins parameter being passed and 
    return the number of hours, minutes, and seconds the parameter converts to 
    (ie. if num = 63.5 then the output should be 1:3:30). Separate the number of hours,
    minutes, and seconds with colons.
    */

    // Input is number of minutes
    // Design output with colons
    // Output is number of hours:minutes:seconds

    timeConvert(numOfMins){
        // Divide number of minutes by 60 to get number of hours, take off remainder 
        let hours = Math.floor(numOfMins/60);
        // Get remainder minutes/seconds by using mod 60 and set that to minutes/seconds
        let minutesSeconds = numOfMins % 60;
        // Take last remainder and remove decimal
        let minutes = Math.floor(minutesSeconds);
        // To get seconds Take remainder of hours, subtract minutes and multiply decimal portion by 60
        let seconds = Math.floor((minutesSeconds - minutes) * 60);
        // Craft return with semicolons
        return `${hours}:${minutes}:${seconds}`;
    }

}

 module.exports = PleaseStandUp;


