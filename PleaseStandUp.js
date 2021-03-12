class PleaseStandUp {

    /*
    Have the function howOld(birthday) take the birthday parameter being passed and 
    return the age of a person with the date as their birthday.
    (ie. if birthday = June 22, 1996 then the output should be 24)
    */

   howOld(birthday){
        var today = new Date();
        console.log(today)
        var birthDate = new Date(birthday);
        console.log(birthday)
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        //If the birth month hasn't passed yet, then subtract a year from the age
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        } 
        return age;
    }

    /*
    Have the function timeConvert(numOfMins) take the numOfMins parameter being passed and 
    return the number of hours, minutes, and seconds the parameter converts to 
    (ie. if num = 63.5 then the output should be 1:3:30). Separate the number of hours,
    minutes, and seconds with colons.
    */

    timeConvert(numOfMins){
        //divide time by 60, and round down to get hours
        let hours = Math.floor(numOfMins / 60);
        //get remainder of dividing time by 60 to get minutes
        let minutes = Math.floor(numOfMins % 60);
        //get remainder of dividing time by its rounded integer to get seconds
        let floor = Math.floor(numOfMins);
        let secondsDecimal = (numOfMins % floor).toFixed(2);
        let seconds = 60 * secondsDecimal;
        //concatenate variables        
        return `${hours}:${minutes}:${seconds}`;
    }

}

 module.exports = PleaseStandUp;
