/* 
 * Read a single digit number and write the number in word
 */
const prompt = require("prompt-sync")();
const NUMBER = prompt("Enter Single Digit Number : ");

if(NUMBER==0){
    console.log('Zero');
} else if(NUMBER==1){ 
    console.log('One');
}else if(NUMBER==2){ 
    console.log('Two');
}else if(NUMBER==3){ 
    console.log('Three');
}else if(NUMBER==4){ 
    console.log('Four');
}else if(NUMBER==5){ 
    console.log('Five');
}else if(NUMBER==6){ 
    console.log('Six');
}else if(NUMBER==7){ 
    console.log('Seven');
}else if(NUMBER==8){ 
    console.log('Eight');
}else if(NUMBER==9){ 
    console.log('Nine');
}else { 
    console.log('Invalid Number');
}