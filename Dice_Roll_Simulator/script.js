const max = 6;
const min = 1;
const dice = 3;
let i = 1;



for(i; i <= dice; i++){


    let guess = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(guess);

}



