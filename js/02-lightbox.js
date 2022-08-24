import { galleryItems } from './gallery-items.js';
// Change code below this line

const boxGallery = document.querySelector('.gallery')
const createGalleryItems = galleryItems.map(({original, description, preview}) => `
    <div class="gallery__item">        
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" 
            alt="${description}" />
        </a>
    </div>`
).join('')


boxGallery.insertAdjacentHTML('afterbegin', createGalleryItems)



let gallery = new SimpleLightbox('.gallery a', {
    captions: true,
    captionType: 'img',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});

