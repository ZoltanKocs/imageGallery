const containerEl = document.querySelector(".container");
const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");

let x = 0;
prevEl.addEventListener("click", ()=>{
    x = x + 45;
    updateGallery();
})

function updateGallery() {
    containerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
};