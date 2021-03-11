class PleaseStandUp {

    /*
    Have the function howOld(birthday) take the birthday parameter being passed and 
    return the age of a person with the date as their birthday.
    (ie. if birthday = June 22, 1996 then the output should be 24)
    */

   howOld(birthday){
        // Step 1: create function that holds the birthdate
        // Step 2: create function that holds todays date
        // Step 3: create a for loop that will subtract todays date from birthdate
        // Step 4: return age

        return -1;
    }

    /*
    Have the function timeConvert(numOfMins) take the numOfMins parameter being passed and 
    return the number of hours, minutes, and seconds the parameter converts to 
    (ie. if num = 63.5 then the output should be 1:3:30). Separate the number of hours,
    minutes, and seconds with colons.
    */

    timeConvert(numOfMins){
        // Step 1: Round down the amount of hours(math.floor)
            let hrs = math.floor(num/60);

        // Step 2: Round down the amount of minutes(math.floor)
            let mins = math.floor(num/60);
        
        // Step 3: Whatever is remaining returns the seconds
            let secs = num % 60;


        // Step 4: return number hours, minutes, and seconds
            return hrs + ":" + mins + ":" + secs;

    }

}


module.exports = PleaseStandUp;