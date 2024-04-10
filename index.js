const slides = document.querySelectorAll(".slide");
let index = 0;

slides.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`
    }
)

function reset() {
	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = "block";
        
	}
}
const goPrev = () => {
    console.log("hello")
    index--;
    slideImage()
}

const goNext = () => {
    index++;
    slideImage()

}
const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${index * 100}%)`;
            reset()
            

        }
    )    
}