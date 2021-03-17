class PleaseStandUp {

    /*
    Have the function howOld(birthday) take the birthday parameter being passed and 
    return the age of a person with the date as their birthday.
    (ie. if birthday = June 22, 1996 then the output should be 24)
    */

   howOld(birthday){
        return -1;

    function getAge(dateString) {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
    //find out the birthday of said person
    //calculate month...12 months in a year
    //calculate day...365 days in a year
    //calculate year
    // return age of said person using birthdate...month day year
    //

    /*
    Have the function timeConvert(numOfMins) take the numOfMins parameter being passed and 
    return the number of hours, minutes, and seconds the parameter converts to 
    (ie. if num = 63.5 then the output should be 1:3:30). Separate the number of hours,
    minutes, and seconds with colons.
    */

    timeConvert(numOfMins){
        return -1;
    }
    


//calculate the number of hours
//let hours = Math.floor(numOfMins/60);
//calculate the number of minutes
//let minutes = Math.floor(numOfMins%60);
//calculate the number of seconds
//let seconds = numOfMins - hours * 3600 - minutes
//seperate hours minutes and seconds by colon
//get remainder of dividing time by its rounded integer to get seconds

let floor = Math.floor(numOfMins);
let secondsDecimal = (numOfMins % floor).toFixed(2);
let seconds = 60 * secondsDecimal;

// module.exports = PleaseStandUp;//
