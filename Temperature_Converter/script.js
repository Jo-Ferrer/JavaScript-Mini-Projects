const button = document.getElementById("button");

button.onclick = function(){

    let current = document.getElementById("current").value;
    const currentTemp = Number(current);

    const prevTemp = document.getElementById("prevTemp").value;

    const afterTemp = document.getElementById("afterTemp").value;

    console.log(currentTemp);
    console.log(prevTemp);
    console.log(afterTemp);
    
    if(!currentTemp){

        document.getElementById("result").textContent = `NO VALUE DETECTED`;

    }
    else if(prevTemp == "c" && afterTemp == "c"){

        document.getElementById("result").textContent = `${currentTemp}°C`;

    }
    else if(prevTemp == "c" && afterTemp == "f"){

        const cF = (currentTemp * 1.8) + 32;
        document.getElementById("result").textContent = `${cF.toFixed(2)}°F`;

    }
    else if(prevTemp == "c" && afterTemp == "k"){
        
        const cK = currentTemp + 273.15;
        document.getElementById("result").textContent = `${cK.toFixed(3)}°K`;

    }
    else if(prevTemp == "f" && afterTemp == "f"){

        document.getElementById("result").textContent = `${currentTemp}°F`;

    }
    else if(prevTemp == "f" && afterTemp == "c"){

        const fC = (currentTemp - 32) * 0.55555555555;
        document.getElementById("result").textContent = `${fC.toFixed(2)}°C`;

    }
    else if(prevTemp == "f" && afterTemp == "k"){

        const fK = (currentTemp - 32) * 0.55555555555 + 273.15;
        document.getElementById("result").textContent = `${fK.toFixed(3)}°K`;

    }
    else if(prevTemp == "k" && afterTemp == "k"){

        document.getElementById("result").textContent = `${currentTemp}°K`;

    }
    else if(prevTemp == "k" && afterTemp == "f"){

        const kF = (currentTemp - 273.15) * 1.8 + 32;
        document.getElementById("result").textContent = `${kF.toFixed(3)}°K`;

    }
    else if(prevTemp == "k" && afterTemp == "c"){

        const kC = currentTemp - 273.15;
        document.getElementById("result").textContent = `${kC.toFixed(3)}°K`;

    }



}