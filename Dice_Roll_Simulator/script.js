let rolls = [];
let times = [];
const max = 6;
const min = 1;
const button = document.getElementById("button");
const trashButton = document.getElementById("trashButton");

function put() {

    if (rolls[0]){
        document.getElementById("picResult1").src = `img/${rolls[0][0]}.png`;
        document.getElementById("picResult1").style.display = "block";
        document.getElementById("numResult1").textContent = rolls[0][0];
        document.getElementById("time1").textContent = `Just now`;


    }
    else{
        document.getElementById("picResult1").removeAttribute("src");
        document.getElementById("picResult1").style.display = "none";
        document.getElementById("numResult1").textContent = "";
        document.getElementById("time1").textContent = "";
    }

    if (rolls[1]){
        document.getElementById("picResult2").src = `img/${rolls[1][0]}.png`;
        document.getElementById("picResult2").style.display = "block";
        document.getElementById("numResult2").textContent = rolls[1][0];
        
        const rolltime = `${rolls[1][1]}:${rolls[1][2]}:${rolls[1][3]}`;

        document.getElementById("time2").textContent = `${rolltime}`;
    }
    else{
        document.getElementById("picResult2").removeAttribute("src");
        document.getElementById("picResult2").style.display = "none";
        document.getElementById("numResult2").textContent = "";
        document.getElementById("time2").textContent = "";
    }
    
    if (rolls[2]){
        document.getElementById("picResult3").src = `img/${rolls[2][0]}.png`;
        document.getElementById("picResult3").style.display = "block";
        document.getElementById("numResult3").textContent = rolls[2][0];
        
        const rolltime = `${rolls[2][1]}:${rolls[2][2]}:${rolls[2][3]}`;

        document.getElementById("time3").textContent = `${rolltime}`;
    }
    else{
        document.getElementById("picResult3").removeAttribute("src");
        document.getElementById("picResult3").style.display = "none";
        document.getElementById("numResult3").textContent = "";
        document.getElementById("time3").textContent = "";
    }

    if (rolls[3]){
        document.getElementById("picResult4").src = `img/${rolls[3][0]}.png`;
        document.getElementById("picResult4").style.display = "block";
        document.getElementById("numResult4").textContent = rolls[3][0];
        
        const rolltime = `${rolls[3][1]}:${rolls[3][2]}:${rolls[3][3]}`;

        document.getElementById("time4").textContent = `${rolltime}`;
    }
    else{
        document.getElementById("picResult4").removeAttribute("src");
        document.getElementById("picResult4").style.display = "none";
        document.getElementById("numResult4").textContent = "";
        document.getElementById("time4").textContent = "";
    }

    if (rolls[4]){
        document.getElementById("picResult5").src = `img/${rolls[4][0]}.png`;
        document.getElementById("picResult5").style.display = "block";
        document.getElementById("numResult5").textContent = rolls[4][0];
        
        const rolltime = `${rolls[4][1]}:${rolls[4][2]}:${rolls[4][3]}`;

        document.getElementById("time5").textContent = `${rolltime}`;
    }
    else{
        document.getElementById("picResult5").removeAttribute("src");
        document.getElementById("picResult5").style.display = "none";
        document.getElementById("numResult5").textContent = "";
        document.getElementById("time5").textContent = "";
    }

    

    
}

function createTime(){

    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const sec = now.getSeconds();
    const prevtime = [hour,minute,sec];
    times.unshift(prevtime)
    

    console.log(now);
    console.log(hour);
    console.log(minute);
    console.log(sec);
    console.log(times);

}


button.onclick = function(){

    let guess = Math.floor(Math.random() * (max - min + 1)) + min;

    if (guess == 1){

        document.getElementById("currectDie");
        currectDie.classList.add("rolling");
        
        setTimeout(function() {

            currectDie.src = "img/1.png";

            const now = new Date();
            const hour = now.getHours();
            const minute = now.getMinutes();
            const sec = now.getSeconds();
            const roll = [guess,hour,minute,sec];
            rolls.unshift(roll)
            console.log(rolls);

            currectDie.classList.remove("rolling");
            console.log(`Guess: ${guess}`);
            console.log(rolls);

            put();

            if (rolls.length > 5){

                rolls.pop();

            }

    }, 500); // Wait 500ms

    }
    else if (guess == 2){

        document.getElementById("currectDie");
        currectDie.classList.add("rolling");
        
        setTimeout(function() {

            currectDie.src = "img/2.png";

            const now = new Date();
            const hour = now.getHours();
            const minute = now.getMinutes();
            const sec = now.getSeconds();
            const roll = [guess,hour,minute,sec];
            rolls.unshift(roll)
            console.log(rolls);

            currectDie.classList.remove("rolling");
            console.log(`Guess: ${guess}`);
            console.log(rolls);

            put();

            if (rolls.length > 5){

                rolls.pop();

            }

    }, 500); // Wait 500ms;

    }
    else if (guess == 3){

        document.getElementById("currectDie");
        currectDie.classList.add("rolling");
        
        setTimeout(function() {

            currectDie.src = "img/3.png";
            
            const now = new Date();
            const hour = now.getHours();
            const minute = now.getMinutes();
            const sec = now.getSeconds();
            const roll = [guess,hour,minute,sec];
            rolls.unshift(roll)
            console.log(rolls);

            currectDie.classList.remove("rolling");
            console.log(`Guess: ${guess}`);
            console.log(rolls);

            put();

            if (rolls.length > 5){

                rolls.pop();

            }
            
    }, 500); // Wait 500ms

    }
    else if (guess == 4){

        document.getElementById("currectDie");
        currectDie.classList.add("rolling");
        
        setTimeout(function() {

            currectDie.src = "img/4.png";

            const now = new Date();
            const hour = now.getHours();
            const minute = now.getMinutes();
            const sec = now.getSeconds();
            const roll = [guess,hour,minute,sec];
            rolls.unshift(roll)
            console.log(rolls);

            currectDie.classList.remove("rolling");
            console.log(`Guess: ${guess}`);
            console.log(rolls);

            put();

            if (rolls.length > 5){

                rolls.pop();

            }

    }, 500); // Wait 500ms

    }
    else if (guess == 5){

        document.getElementById("currectDie");
        currectDie.classList.add("rolling");
        
        setTimeout(function() {

            currectDie.src = "img/5.png";

            const now = new Date();
            const hour = now.getHours();
            const minute = now.getMinutes();
            const sec = now.getSeconds();
            const roll = [guess,hour,minute,sec];
            rolls.unshift(roll)
            console.log(rolls);

            currectDie.classList.remove("rolling");
            console.log(`Guess: ${guess}`);
            console.log(rolls);

            put();

            if (rolls.length > 5){

                rolls.pop();

            }

    }, 500); // Wait 500ms

    }
    else if (guess == 6){

        document.getElementById("currectDie");
        currectDie.classList.add("rolling");
        
        setTimeout(function() {

            currectDie.src = "img/6.png";
            
            const now = new Date();
            const hour = now.getHours();
            const minute = now.getMinutes();
            const sec = now.getSeconds();
            const roll = [guess,hour,minute,sec];
            rolls.unshift(roll)
            console.log(rolls);

            currectDie.classList.remove("rolling");
            console.log(`Guess: ${guess}`);
            console.log(rolls);

            put();

            if (rolls.length > 5){

                rolls.pop();

            }

    }, 500); // Wait 500ms

    }
    else{

        console.log(`INVALID`);

    }

    
}

trashButton.onclick = function(){

    rolls = [];
    put();
    console.log(rolls);

}





