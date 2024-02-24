
//javascript for slider 

const initSlider = () => {
    const imageList = document.querySelector(".slider .slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider .slider-wrapper .slide-button");

    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({left: scrollAmount, behavior: "smooth"});
        });
    });
}

window.addEventListener("load", initSlider);


//javascript for incrementing and decrementing the number of items

let plus = document.querySelector(".plus"),
 minus = document.querySelector(".minus"),
 num = document.querySelector(".num");

let a = 1;

plus.addEventListener("click", ()=>{
    a++;
    a = ( a < 10 ) ? "0" + a : a;
    num.innerHTML = a;
    console.log(a);
})

minus.addEventListener("click", ()=>{
    if(a<10){
        a--;
        a = (a < 10) ? "0" + a : a;
        num.innerHTML = a;
    }
})