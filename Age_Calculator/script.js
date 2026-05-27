const button = document.getElementById("button");

const date = new Date();

button.onclick = function(){

    let birth = document.getElementById("date").value;

    birth = birth.split("-");

    const birth_year = birth[0];   
    const birth_month = birth[1];
    const birth_day = birth[2];

    console.log("--BIRTHDATE--");
    console.log(birth_year);
    console.log(birth_month);
    console.log(birth_day);
    
    const current_year = date.getFullYear();
    const current_month = date.getMonth();
    const current_day = date.getDate();

    console.log("--CURRENTDATE--");
    console.log(current_year);
    console.log(current_month);
    console.log(current_day);

    let age = current_year - birth_year;

    console.log("--AGEDATE--");

    if(birth == ""){

        document.getElementById("age").textContent = "INPUT A DATE";


    }
    else if(birth_month > current_month && birth_day > current_day){

        age -= 1;

        console.log(`My age is ${age}`);
        document.getElementById("age").textContent = `${age} years old`;


    }
    else{

        console.log(`My age is ${age}`);
        document.getElementById("age").textContent = `${age} years old`;

    }


    







}