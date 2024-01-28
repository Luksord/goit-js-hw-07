import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");

const galleryItem = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
      </a>
    </li>`
  )
  .join("");
/*
  .map(
    ({ preview, original, description }) =>
      `<li><div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
      </a></div></li>`
  )
  .join("");
*/

galleryList.insertAdjacentHTML("beforeend", galleryItem);

galleryList.addEventListener("click", showImage);

const lightbox = basicLightbox.create(`<img src="" />`, {
  onShow: () => {
    document.addEventListener("keydown", escape);
  },
  onClose: () => {
    document.removeEventListener("keydown", escape);
  },
});

function escape() {
  if (event.key === "Escape") {
    return lightbox.close();
  }
}

function showImage(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  lightbox.element().querySelector("IMG").src = event.target.dataset.source;
  lightbox.show();
}

console.log(galleryItems);

/* Zadanie 1

Utwórz galerię z możliwością kliknięcia w jej elementy i przeglądania pełnego obrazu w oknie modalnym.

Wykonaj to zadanie w plikach 01-gallery.html i 01-gallery.js. Działanie strony możemy “rozbić” na kilka zadań:
1. Tworzenie i renderowanie znacznika zgodnie z tablicą danych galleryItems i dostarczonym szablonem elementu galerii.
2. Implementacja oddelegowania do div.gallery i otrzymania url większego obrazu.
3. Połączenie skryptu i stylów biblioteki okna modalnego basicLightbox https://basiclightbox.electerious.com/. 
Użyj CDN serwisu jsdelivr https://www.jsdelivr.com/package/npm/basiclightbox?path=dist i dodaj do projektu linki 
do zminimalizowanych (.min) plików biblioteki.
4. Otworzenie okna modalnego po kliknięciu w element galerii. Aby to zrobić, zapoznaj się z 
dokumentacją https://github.com/electerious/basicLightbox#readme i przykładami https://basiclightbox.electerious.com/.
5. Zmiana wartości atrybutu src elementu <img> w oknie modalnym przed otworzeniem. Użyj gotowego znacznika okna modalnego 
z obrazem z przykładów biblioteki basicLightbox https://basiclightbox.electerious.com/.

Znacznik elementu galerii:
Link do oryginalnego obrazka powinien być przechowywany w atrybucie data source w elemencie <img>, oraz w href linku. 
Nie dodawaj innych tagów HTML lub klas CSS oprócz tych, które znajdują się w tym szablonie.

<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div>

Zwróć uwagę na to, że obrazek zamieniono w link, a więc po domyślnym kliknięciu użytkownik zostanie przekierowany na inną stronę. 
Zablokuj to zachowanie.

Zamknięcie z klawiatury:
Dodaj zamknięcie okna modalnego po naciśnięciu klawiszy Escape. Zrób tak, aby nasłuchiwanie klawiatury było aktywne tylko wtedy, 
gdy otwarte jest okno modalne. W bibliotece basicLightbox https://basiclightbox.electerious.com/ istnieje metoda na programowe zamknięcie okna modalnego.

*/
