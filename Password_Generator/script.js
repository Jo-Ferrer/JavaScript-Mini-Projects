//#region Variables

const slider = document.getElementById("slider");
const output = document.getElementById("value");
const button = document.getElementById("button");
const copyButt = document.getElementById("copyButt");
const upper = document.getElementById("uppercase");
const lower = document.getElementById("lowercase");
const number = document.getElementById("numbers");
const symbol = document.getElementById("symbols");
const passwordText = document.getElementById("passwordText");
const bars = document.querySelectorAll(".bar");
const strengthText = document.getElementById("strengthText");
const strengthDescription = document.getElementById("strengthDescription");


//#endregion

//#region Arrays

let ABC = ["A", "B", "C", "D", "E", "F", "G",
    "H", "I", "J", "K", "L", "M", "N",
    "O", "P", "Q", "R", "S", "T", "U",
    "V", "W", "X", "Y", "Z"];
let abc = ["a", "b", "c", "d", "e", "f", "g",
    "h", "i", "j", "k", "l", "m", "n",
    "o", "p", "q", "r", "s", "t", "u",
    "v", "w", "x", "y", "z"];
let num = ["0", "1", "2", "3", "4",
    "5", "6", "7", "8", "9"];
let sym = ["!", "@", "#", "$", "%",
    "^", "&", "*", "(", ")",
    "-", "_", "=", "+", "[",
    "]", "{", "}", ";", ":",
    "'", ",", ".", "<",
    ">", "/", "?", "|",
    "`", "~"];

let picks = [];

let password = "";

let strength = 0;

//#endregion

//#region Slider Function

function updateSlider() {
    const percent =
        ((slider.value - slider.min) / (slider.max - slider.min)) * 100;

    slider.style.background =
        `linear-gradient(to right,
        #359aff ${percent}%,
        #c8c8c894 ${percent}%)`;

        output.textContent = slider.value;
}



slider.addEventListener("input", updateSlider);
updateSlider();

//#endregion

button.onclick = function(){

    //#region Checkbox & Strength function
    if(upper.checked){

        picks.push(...ABC);
        strength += 1;

    }

    if(lower.checked){

        picks.push(...abc);
        strength += 1;

    }

    if(number.checked){

        picks.push(...num);
        strength += 1;

    }

    if(symbol.checked){

        picks.push(...sym);
        strength += 1;

    }

    if (slider.value >= 16) {
        strength += 1;
    } 

    //#endregion

    console.log(slider.value)

    //#region Random function
    for (let i = 0; i < slider.value; i++) {
    let random = Math.floor(Math.random() * picks.length);

    password = password + picks[random]

    }
    //#endregion
    
    //#region Responsive fontSize function

    if (slider.value < 14) {
        passwordText.style.fontSize = "1.2rem";
    }
    else if (slider.value < 20) {
        passwordText.style.fontSize = "0.9rem";
    }
    else if (slider.value > 28) {
        passwordText.style.fontSize = "0.6rem";
    }
    else if (slider.value > 25) {
        passwordText.style.fontSize = "0.7rem";
    }
    else if (slider.value > 20) {
        passwordText.style.fontSize = "0.8rem";
    }
    else{
        console.log("enkkk!")
    }

    //#endregion

    for (let i = 0; i < bars.length; i++) {
        bars[i].classList.remove(
            "weak",
            "medium",
            "strong",
            "veryStrong",
            "max"
        );
    }

    if (picks[0] === undefined) {

        console.log("First element doesn't exist");
        passwordText.textContent = "";
        strengthText.textContent = "";
        strengthDescription.textContent = "";
        strength = 0;

    }else{

        passwordText.textContent = password;
        


    }


    if(strength == 1){

        strengthText.textContent = "Weak";
        strengthDescription.textContent = "Easy to guess.";

        for (let i = 0; i < strength; i++) {
            bars[i].classList.add("weak");
        }   
        
    }
    else if(strength == 2){

        strengthText.textContent = "Medium";
        strengthDescription.textContent = "Could be stronger.";

        for (let i = 0; i < strength; i++) {
            bars[i].classList.add("medium");
        }   
        
    }
    else if(strength == 3){

        strengthText.textContent = "Strong";
        strengthDescription.textContent = "Great! Your password is strong.";

        for (let i = 0; i < strength; i++) {
            bars[i].classList.add("strong");
        }   
        
    }
    else if(strength == 4){

        strengthText.textContent = "Very Strong";
        strengthDescription.textContent = "Highly secure.";

        for (let i = 0; i < strength; i++) {
            bars[i].classList.add("veryStrong");
        }   
        
    }
    else if(strength == 5){

        strengthText.textContent = "Excellent";
        strengthDescription.textContent = "Maximum protection.";

        for (let i = 0; i < strength; i++) {
            bars[i].classList.add("max");
        }   
        
    }

    copyButt.addEventListener("click", () => {

        navigator.clipboard.writeText(passwordText.textContent);

        copyButt.textContent = "Copied!";

        setTimeout(() => {
            copyButt.textContent = "Copy";
        }, 2000);

    });


    console.log(password);
    console.log(strength);

    password = "";
    strength = 0;

    picks.length = 0;

}




