let headCount = 0;
let tailCount = 0;

while (headCount != 11 && tailCount != 11) {
    const COIN_FLIP = Math.floor(Math.random() * 10) % 2;
    if(COIN_FLIP==1)
        headCount++;
    else
        tailCount++;
}

console.log("Total Count of Head " + headCount);
console.log("Total Count of Tail " + tailCount);