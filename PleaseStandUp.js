class PleaseStandUp {

    /*
    Have the function howOld(birthday) take the birthday parameter being passed and 
    return the age of a person with the date as their birthday.
    (ie. if birthday = June 22, 1996 then the output should be 24)
    */
   //Create a function to calculate the age (calcAge)
   //Create a variable using the date of birth
   //Create in "if" statement using the date of birth and current date.


   howOld(birthday){
        return -1;
    }

    /*
    Have the function timeConvert(numOfMins) take the numOfMins parameter being passed and 
    return the number of hours, minutes, and seconds the parameter converts to 
    (ie. if num = 63.5 then the output should be 1:3:30). Separate the number of hours,
    minutes, and seconds with colons.
    */

    timeConvert(numOfMins){
    //Get hours by dividing num by 60 to get whole number of hours
    //use the Math.floor 
        var hours = Math.floor(num / 60); 
    
    // Use remainder after division
        var minutes = num % 60; 

    //Calculate remainder in seconds
        var seconds = minutes % 60
    
    //Combine hours, minutes, and seconds in required format (HH:MM:SS) and return as answer
        return hours + ":" + minutes + ":" + seconds;     
     
}

    }


 module.exports = PleaseStandUp;
