class PleaseStandUp {

    /*
    Have the function howOld(birthday) take the birthday parameter being passed and 
    return the age of a person with the date as their birthday.
    (ie. if birthday = June 22, 1996 then the output should be 24)
    */

   howOld(birthday){
    // subtract the difference between the year inseterted and todays year get A
    // if the month inserted is > then todays month plus 1
    // if the month inserted is = to todays month then 
    // if the day inserted is greater the todays day + 1 if not add 0.
    // add A + B = year old
    // return year old


        return -1;
    }

    /*
    Have the function timeConvert(numOfMins) take the numOfMins parameter being passed and 
    return the number of hours, minutes, and seconds the parameter converts to 
    (ie. if num = 63.5 then the output should be 1:3:30). Separate the number of hours,
    minutes, and seconds with colons.
    */

    timeConvert(numOfMins){
        // divide number by 60 get A
        // divide number by 60, remainder round down, get B
        // divide number by 60, remainder minus whole number? remainder multiplied by .6, get C
        // A + : + B + : + C

        let hours = Math.floor(numOfMins/60);
        // console.log(hours);

        let minutes = Math.floor(numOfMins%60);
        // console.log(B);
        
        
        
        
        
        
        let C = numOfMins % 1;
        // console.log(C);
        let D = C * .6;
        // console.log(D);
        let seconds = Math.floor(D * 100);

        return hours + ":" + minutes + ":" + seconds;
        
    

    }

}
module.exports = PleaseStandUp;