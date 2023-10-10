// stampa img su dom html
const images = [];//utilizzare array per immagini o correto richiamarle da html?

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
    <div class="image">
        <img src="${currentSRC}"
    </div>`

    console.log(htmlString);
    galleryDOMElement.innerHTML += htmlString;
}

const imageDOMElements = document.getElementsByClassName('.image')
// const imageDOMElements = document.querySelectorAll('.image');
console.log(imageDOMElements);