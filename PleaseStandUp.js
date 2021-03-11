class PleaseStandUp {

    /*
    Have the function howOld(birthday) take the birthday parameter being passed and 
    return the age of a person with the date as their birthday.
    (ie. if birthday = June 22, 1996 then the output should be 24)
    */

   howOld(birthday){

         // Enter today's date
       // Enter your age in the format of month, day and year
       // calculate the difference of age from today's date
       // convert difference in desired date format
       // pick year from the whole value of difference

       // return -1;
    }

    /*
    Have the function timeConvert(numOfMins) take the numOfMins parameter being passed and 
    return the number of hours, minutes, and seconds the parameter converts to 
    (ie. if num = 63.5 then the output should be 1:3:30). Separate the number of hours,
    minutes, and seconds with colons.
    */

    timeConvert(value){
        // create variable to get output of time
        let time;
        
        // calculate hours and round down the value 
    let hours = Math.floor(value / 60);

    // calculate minutes from remainder value and round down
    let minutes = Math.floor(value % 60);

    // calculate seconds in a decimal format
    let secD = value % 1;

    // convert seconds result from a decimal to an integer value
    let secI = Math.floor(60 * secD);

    // find time in hours, minutes and sec format separated by colon
    time = hours + ":" + minutes + ":" + secI;

    // bring the result of time
    return time;

    }

}

 module.exports = PleaseStandUp;
