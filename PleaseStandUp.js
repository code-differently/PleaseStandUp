class PleaseStandUp {

    /*
    Have the function howOld(birthday) take the birthday parameter being passed and 
    return the age of a person with the date as their birthday.
    (ie. if birthday = June 22, 1996 then the output should be 24)
    */

    //take current year minus 1 and subtract that by the input year  1996 - 2020 = 24
    //associate months with numerical values.
    //if current month is less than input month return  value from first step
    //if current month is greater then input month return value from first step and add 1




   howOld(birthday){
        return -1;
    }



    /*
    Have the function timeConvert(numOfMins) take the numOfMins parameter being passed and 
    return the number of hours, minutes, and seconds the parameter converts to 
    (ie. if num = 63.5 then the output should be 1:3:30). Separate the number of hours,
    minutes, and seconds with colons.
    */

    timeConvert(num){
        let h = Math.floor(num/60);
        let m = num - (h * 60);
        let numOfMins = h * 60 + m;
        let s = numOfMins - num * 60;

        return (h + ":" + m) + (":" + s);
    }

}

 module.exports = PleaseStandUp;
