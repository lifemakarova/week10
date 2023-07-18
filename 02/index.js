const images = ["assets/images/01.jpeg", "assets/images/02.jpeg"]; // Обновите список изображений, добавив или изменяя их имена

let currentImageIndex = 0;
const imageElement = document.getElementById("image");

// Функция для отображения текущего изображения
function showCurrentImage() {
  imageElement.src = images[currentImageIndex];
}

// Функция для переключения на предыдущее изображение
function previousImage() {
  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  }
  showCurrentImage();
}

// Функция для переключения на следующее изображение
function nextImage() {
  currentImageIndex++;
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  showCurrentImage();
}

showCurrentImage();