// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

const header = document.querySelector('.header');

window.addEventListener('scroll', function() {
  if (window.scrollY > 0) { /* если страница прокручена хотя бы на 1 пиксель */
    header.classList.add('scrolled'); /* добавляем класс, задающий новый фон */
  } else {
    header.classList.remove('scrolled'); /* удаляем класс, возвращающий прозрачный фон */
  }
});