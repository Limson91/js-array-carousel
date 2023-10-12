console.log('prova test');

const imagesSrc = [
    './consegna/img/01.webp',
    './consegna/img/02.webp',
    './consegna/img/03.webp',
    './consegna/img/04.webp',
    './consegna/img/05.webp'
]

const carouselDOMElement = document.querySelector('.carousel'); 
console.log(carouselDOMElement, imagesSrc);

for (let i = 0; i < imagesSrc.length; i++) {
    console.log(imagesSrc[i]); //stampa elementi array in base a indice
    const src = imagesSrc[i];

    const html = `<img class="carousel__item" src="${src}" alt="">`

    carouselDOMElement.innerHTML += html;
}

//recupero dal DOM tutte le immagini stampate nel ciclo for
const itemsDOMElements = document.querySelectorAll('.carousel__item');
console.log(itemsDOMElements);

//memorizzare stato carosello (indice della slide attive)
let currentIndex = 0;
// = Math.floor(Math.random() * imagesSrc.length) per scegliere indice random

//aggiungere classe active alla slide attiva
let currentSlide = itemsDOMElements[currentIndex];
currentSlide.classList.add('active');

// click su elemento arrow
const arrowTop = document.querySelector('.carousel .arrow--top');
const arrowBottom = document.querySelector('.carousel .arrow--bottom');
console.log(arrowTop, arrowBottom);

arrowBottom.addEventListener('click', function () {
	console.log('click bottom');

    // prendere la img successiva
    const NextSlideElement = itemsDOMElements[currentIndex + 1];

    if (NextSlideElement) {
        // selezionare la img attiva
    const activeSlideElement = itemsDOMElements[currentIndex];
    console.log(activeSlideElement);
	// toglierle la class="active"
    activeSlideElement.classList.remove('active');

	// aggiungere alla slide successiva la class="active"
    NextSlideElement.classList.add('active')
	// incremento currentIndex
    currentIndex++
    }
})

arrowTop.addEventListener('click', function () {
	console.log('click top')

    //prendo la img precedente
	const prevSlideElement = itemsDOMElements[currentIndex - 1];

    //se esiste una img precedente, rimuovi la classe attiva dalla img attiva.
    if (prevSlideElement) {
        const activeSlideElement = itemsDOMElements[currentIndex];
        activeSlideElement.classList.remove('active');

        //aggiungo la class='active' alla img precedente
        prevSlideElement.classList.add('active');
        //decremento currentIndex
        currentIndex--
    }
})
