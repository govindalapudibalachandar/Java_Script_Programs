const prompt = require("prompt-sync")();
const Check_Year = prompt("Enter Year : ");
let Leap_Year=Check_Year%4;

if((Leap_Year === 0) && (Leap_Year % 100 != 0) || (Leap_Year % 400 == 0)){
    console.log("This is a Leap Year");
}else{
    console.log("This is not a Leap Year");
}