const slider = document.getElementById("length");
const output = document.getElementById("lengthValue");
const butt = document.getElementById("button");

output.textContent = slider.value;


slider.addEventListener("input", () => {
    output.textContent = slider.value;
    
});

button.onclick = function(){

    console.log(slider.value)

}