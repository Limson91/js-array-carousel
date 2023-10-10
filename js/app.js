// stampa img su dom html
const images = [
    "./consegna/img/01.webp",
    "./consegna/img/02.webp"
];//utilizzare array per immagini o correto richiamarle da html?

//richiamare div="gallery" da html
const galleryDOMElement = document.querySelector('.gallery');
console.log(galleryDOMElement);

console.log(images);

//ciclo for per utilizzare array
for (let i = 0; i <images.length; i++) {
    console.log[i];
    const currentSRC = images[i];
    console.log(currentSRC);

    const htmlString = `
        <img class="active img" src="${currentSRC}">`

    console.log(htmlString);
    galleryDOMElement.innerHTML += htmlString;
}

const imageDOMElements = document.getElementsByClassName('.img')
// const imageDOMElements = document.querySelectorAll('.img');
console.log(imageDOMElements);