// js/main.js
import { courses } from "./courses.js";

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".courses__grid");

  courses.forEach(course => {
    const card = document.createElement("a");
    card.href = `course.html?id=${course.id}`;
    card.className = "course-card";

    card.innerHTML = `
      <img src="${course.img}" alt="${course.title}">
      <div class="course-card__info">
        <h4>${course.title}</h4>
        <p><strong>${course.price} руб.</strong> →</p>
      </div>
    `;
    grid.appendChild(card);

    // Пример интерактивности — клик по карточке
    card.addEventListener("click", e => {
      console.log(`Вы кликнули на курс: ${course.title}`);
    });
  });
});