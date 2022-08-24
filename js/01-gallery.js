import { galleryItems } from './gallery-items.js';

// Change code below this line
const boxGallery = document.querySelector('.gallery')
const createGalleryItems = galleryItems.map(({original, description, preview}) => `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="large-image.jpg"
            alt="${description}"
            />
        </a>
    </div>`
).join('')


boxGallery.insertAdjacentHTML('afterbegin', createGalleryItems)
boxGallery.addEventListener('click', selectPicture)
let instance = '';


function selectPicture(event) {
    event.preventDefault()

    if (event.target.nodeName !== "IMG") {
     return;
    }
    
    const linkOriginalPicture = event.target.parentNode.href
    instance = basicLightbox.create(`
		<img  width="1400" height="900" src="${linkOriginalPicture}">
	`, {
        onShow: () => {
            window.addEventListener('keydown', onKeyModalClose)
        },
        onClose: () => {
            window.removeEventListener('keydown', onKeyModalClose)
        }
    })
        
    instance.show()    
}


function onKeyModalClose(event) {
    const KEY_CODE_ESC = 'Escape'
    console.log(event.code);
    
    if (event.code === KEY_CODE_ESC) {
        instance.close()
    }
}

