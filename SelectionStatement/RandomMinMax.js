
let RANDOM1 = Math.floor(100 + Math.random() *900);
let RANDOM2 = Math.floor(100 + Math.random() *900);
let RANDOM3 = Math.floor(100 + Math.random() *900);
let RANDOM4 = Math.floor(100 + Math.random() *900);
let RANDOM5 = Math.floor(100 + Math.random() *900);
let max;
let min;

console.log("Numbers are "+RANDOM1+", "+RANDOM2+", "+RANDOM3+", "+RANDOM4+", "+RANDOM5);

//For Maximum Number
if ((RANDOM1 > RANDOM2) && (RANDOM1 > RANDOM3) && (RANDOM1 > RANDOM4) && (RANDOM1 > RANDOM5)) {
        max = RANDOM1;
         }
else if ((RANDOM2 > RANDOM1) && (RANDOM2 > RANDOM3) && (RANDOM2 > RANDOM4) && (RANDOM2 > RANDOM5)) {
        max = RANDOM2;
      }
else if((RANDOM3 > RANDOM1) && (RANDOM3 > RANDOM2) && (RANDOM3 > RANDOM4) && (RANDOM3 > RANDOM5)) {
          max = RANDOM3;  
  }
else if ((RANDOM4 > RANDOM1) && (RANDOM4 > RANDOM2) && (RANDOM4 > RANDOM3) && (RANDOM4 > RANDOM5)) {
          max = RANDOM4;
  }
else if((RANDOM5 > RANDOM1) && (RANDOM5 > RANDOM2) && (RANDOM5 > RANDOM3) && (RANDOM5 > RANDOM4) ) {
          max = RANDOM5;
        }

  
//For Minimum Number
  if ((RANDOM1 < RANDOM2) && (RANDOM1 < RANDOM3) && (RANDOM1 < RANDOM4) && (RANDOM1 < RANDOM5)) {
          min = RANDOM1;
        }
  else if ((RANDOM2 < RANDOM1) && (RANDOM2 < RANDOM3) && (RANDOM2 < RANDOM4) && (RANDOM2 < RANDOM5)) {
          min = RANDOM2;
  }
  else if ((RANDOM3 < RANDOM1) && (RANDOM3 < RANDOM2) && (RANDOM3 < RANDOM4) && (RANDOM3 < RANDOM5)) {
            min = RANDOM3;
    }
  else if ((RANDOM4 < RANDOM1) && (RANDOM4 < RANDOM2) && (RANDOM4 < RANDOM3) && (RANDOM4 < RANDOM5)) {
            min = RANDOM4;
    }
  else if ((RANDOM5 < RANDOM1) && (RANDOM5 < RANDOM2) && (RANDOM5 < RANDOM3) && (RANDOM5 < RANDOM4)) {
            min = RANDOM5;
    }

console.log("MAXIMUM NO IS = "+ max);
console.log("MINIMUM NO IS = "+ min);
