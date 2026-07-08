const slider = document.getElementById("slider");
const output = document.getElementById("value");
const butt = document.getElementById("button");




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



