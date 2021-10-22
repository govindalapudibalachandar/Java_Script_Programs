const prompt = require("prompt-sync")();
let number = Number(prompt("Enter a number : "));
let flag=0
for(i=2;i<number;i++)
{
    if((number%2)==0){
        flag=1;
        break;
    }
}
if(flag==0)
    console.log(number+" is prime");
else 
    console.log(number +" is not prime");