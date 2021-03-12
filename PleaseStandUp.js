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
            
       // 
        // return -1

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
        console.log("MINUTESS/ SECONDS = " + minutesSeconds);
        // Take last remainder and remove decimal
        let minutes = Math.floor(minutesSeconds);
        console.log("MINUTES = " + minutes);
        // Take remainder of hours, subtract minutes and multiply decimal portion by 60
        let seconds = Math.floor((minutesSeconds - minutes) * 60);
        console.log("SECOnDS = " + seconds);
        return `${hours}:${minutes}:${seconds}`;
    }

}

 module.exports = PleaseStandUp;

        //Input is in the form June 22, 1996 / Output would be 24 
        // Divide up Month, Day, and Year
        // Set a placholder to equal this year - year person was born
        // Set a placeholder to equal this month - month person was born
            // make a structure that holds months as numbers
            // If this month - month born is < 0, person is ("this year" - "year born" - 1 )years old
            // Else go onto day born
        // Set a placeholder to equal this day - day person was born
            // If this day - day born is < 0, person is ("this year" - "year born" -1 ) years old
            // Else this person is "this year" - "year born" years old



            // howOld(birthday){
            //     const months =  {
            //         january: 1,
            //         february: 2,
            //         march: 3,
            //         april: 4,
            //         may: 5,
            //         june: 6,
            //         july: 7,
            //         august: 8,
            //         septmber: 9,
            //         october: 10,
            //         november: 11,
            //         december: 12
            //     }
         
            //     let birthDate = birthday.split(" ");
            //     let bMonth = bDay[0].toLowerCase();
            //     let bDay = bDay[1].slice(0, -1);
            //     let bYear = bDay[2];
            //     let todayMonth = "March";
            //     let todayDay = 11;
            //     let todayYear = 2021;
         
            //     if ()