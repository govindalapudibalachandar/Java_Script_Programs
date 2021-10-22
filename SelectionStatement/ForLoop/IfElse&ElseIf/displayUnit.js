/* 
 * Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...
 */
const prompt = require("prompt-sync")();
const NUMBER = prompt("Enter Number : ");

if(NUMBER==10){
    console.log('Ten');
} else if(NUMBER==100){ 
    console.log('Hundread');
}else if(NUMBER==1000){ 
    console.log('Thousand');
}else if(NUMBER==10000){ 
    console.log('Ten Thousand');
}else if(NUMBER==100000){ 
    console.log('One Hundred Thousand');
}else if(NUMBER==1000000){ 
    console.log('One Million');
}else if(NUMBER==10000000){ 
    console.log('Ten Million');
}else { 
    console.log('Invalid');
}