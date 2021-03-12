class PleaseStandUp {

    /*
    Have the function howOld(birthday) take the birthday parameter being passed and 
    return the age of a person with the date as their birthday.
    (ie. if birthday = June 22, 1996 then the output should be 24)
    */

   howOld(birthday){
       // enter the date of birth yy/mm/dd and assign it to a const
       // get todays date and assign it to a const
       // take the difference of the two and assign it to a const
       // divid the const of the diff with milliday using Math.floor function
       
        return -1;
    }

    /*
    Have the function timeConvert(numOfMins) take the numOfMins parameter being passed and 
    return the number of hours, minutes, and seconds the parameter converts to 
    (ie. if num = 63.5 then the output should be 1:3:30). Separate the number of hours,
    minutes, and seconds with colons.
    */

    timeConvert(num){
        //num dived by 60
        //minutes will be rem of the first division
        //the reminder of that divide by 60
        //the hr in decimal two places are added to make the seconds 
            var h = Math.floor(num/ 60);
            var m = (num % 60 );
            var s = (num/60).toFixed(2);
         return  ( h+":"+ m) +(":"+ s);
    

}

 module.exports = PleaseStandUp;
