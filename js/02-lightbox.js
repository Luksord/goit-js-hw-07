import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");

const galleryItem = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
<a href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`
  )
  .join("");
/*
  .map(
    ({ preview, original, description }) =>
      `<li><a class="gallery__item" href=${original}>
       <img class="gallery__image" src=${preview} alt="${description}" />
       </a></li>`
  )
  .join("");
*/

galleryList.insertAdjacentHTML("beforeend", galleryItem);

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "bottom",
});

console.log(galleryItems);

/* Zadanie 2

Utwórz taką samą galerię jak w zadaniu pierwszym, używając jednak biblioteki SimpleLightbox https://simplelightbox.com/, 
która zajmie się opracowaniem kliknięć w obrazki, otwieraniem i zamykaniem okna modalnego oraz przewijaniem obrazków za pomocą klawiatury.

Konieczna jest nieznaczna zmiana znacznika galerii, użyj tego szablonu (pamiętaj też o odpowiednim użyciu znacznika li).

<a class="gallery__item" href="large-image.jpg">
  <img class="gallery__image" src="small-image.jpg" alt="Image description" />
</a>

Wykonuj to zadanie w plikach 02-lightbox.html i 02-lightbox.js. Możemy je rozbić na kilka mniejszych zadań:
1. Tworzenie i renderowanie znacznika zgodnie z tablicą danych galleryItems i dostarczonym szablonem elementu galerii. 
Użyj gotowego kodu z zadania pierwszego (modyfikując element zgodnie z zaleceniem powyżej).
2. Połączenie skryptu i stylów biblioteki poprzez użycie CDN serwisu cdnjs https://cdnjs.com/libraries/simplelightbox. 
Koniecznym jest dodanie linków do dwóch plików: simple-lightbox.min.js i simple-lightbox.min.css.
3. Inicjalizacja biblioteki po utworzeniu elementów galerii i dodaniu ich do ul.gallery. Aby to zrobić, zapoznaj się z 
dokumentacją SimpleLightbox https://simplelightbox.com/ - najpierw sekcje «Usage» i «Markup».
4. W dokumentacji zwróć uwagę na sekcję «Options» i dodaj wyświetlanie podpisów do obrazków z atrybutu alt. Niech podpis będzie 
pod spodem i pojawia się po 250 milisekundach po otwarciu obrazka.

*/
