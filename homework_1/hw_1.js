const galleryItems = [
{
  preview:
    'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
  original:
    'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
  description: 'Hokkaido Flower',
},
{
  preview:
    'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
  original:
    'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
  description: 'Container Haulage Freight',
},
{
  preview:
    'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
  original:
    'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
  description: 'Aerial Beach View',
},
{
  preview:
    'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
  original:
    'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
  description: 'Flower Blooms',
},
{
  preview:
    'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
  original:
    'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
  description: 'Alpine Mountains',
},
{
  preview:
    'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
  original:
    'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
  description: 'Mountain Lake Sailing',
},
{
  preview:
    'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
  original:
    'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
  description: 'Alpine Spring Meadows',
},
{
  preview:
    'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
  original:
    'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
  description: 'Nature Landscape',
},
{
  preview:
    'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
  original:
    'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
  description: 'Lighthouse Coast Sea',
},
];

const elements = {
  galleryEl: document.querySelector(".js-gallery"),
  lightBoxEl: document.querySelector(".js-lightbox"),
  imageEl: document.querySelector(".lightbox__image"),
  closeButtonEl: document.querySelector('button[data-action="close-lightbox"]'),
}

console.log(elements.button)

function createGalleryItems(galleryItems) {
  return galleryItems.map((image) => {
  return `
  <li class="gallery__item">
    <a
      class="gallery__link"
      href="${image.original}"
      >
      <img
        class="gallery__image"
        src="${image.preview}"
        data-source="${image.original}"
        alt="${image.description}"
      />
    </a>
  </li>
  `;
  }).join("");
}

elements.galleryEl.innerHTML = createGalleryItems(galleryItems);


elements.galleryEl.addEventListener("click", openPictureFunction);

function openPictureFunction(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return
  }
  elements.lightBoxEl.classList.add("is-open");
  elements.imageEl.src = event.target.dataset.source;
  elements.closeButtonEl.addEventListener("click", closeImageFunction);
}

function closeImageFunction() {
  elements.lightBoxEl.classList.remove("is-open");
  elements.imageEl.src = "";
  elements.closeButtonEl.removeEventListener("click", closeImageFunction);
}