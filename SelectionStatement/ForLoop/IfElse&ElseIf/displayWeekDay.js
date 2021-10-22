/* 
 * Read a Number and Display the week day (Sunday, Monday,...)
 */

const prompt = require("prompt-sync")();
const NUMBER = prompt("Enter Number Between 0-6 : ");

if(NUMBER==0){
    console.log('Sunday');
} else if(NUMBER==1){ 
    console.log('Monday');
}else if(NUMBER==2){ 
    console.log('Tuesday');
}else if(NUMBER==3){ 
    console.log('Wednesday');
}else if(NUMBER==4){ 
    console.log('Thursday');
}else if(NUMBER==5){ 
    console.log('Friday');
}else if(NUMBER==6){ 
    console.log('Saturday');
}else { 
    console.log('Invalid');
}