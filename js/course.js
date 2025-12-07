// js/course.js
import { courses } from "./courses.js";

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const courseId = parseInt(params.get("id"));
  const course = courses.find(c => c.id === courseId);

  if (course) {
    document.querySelector(".course-hero__overlay h2").textContent = course.title;
    const infoSection = document.querySelector(".course-info");
    infoSection.querySelector("p").textContent = course.description;

    const btn = infoSection.querySelector(".btn--full");
    btn.addEventListener("click", () => {
      alert(`Вы записались на курс "${course.title}"!`);
    });
  }
});

// course.js
import { notifyUser } from './notifications.js';

const enrollButton = document.querySelector('.btn--full');

enrollButton.addEventListener('click', () => {
  const courseName = document.querySelector('.course-hero__overlay h2').textContent;
  
  // Обычное уведомление через alert
  alert(`Вы записались на курс: ${courseName}`);

  // Браузерное уведомление
  notifyUser(`Вы записались на курс: ${courseName}`);
});

// js/course.js
import { fetchCourses, enrollCourse } from './api.js';

const coursesGrid = document.querySelector('.courses__grid');
const enrollButtons = document.querySelectorAll('.btn--full');

async function loadCourses() {
  const courses = await fetchCourses();
  coursesGrid.innerHTML = ''; // очищаем сетку

  courses.forEach(course => {
    const card = document.createElement('article');
    card.className = 'course-card';
    card.innerHTML = `
      <img src="img/venus.jpg" alt="${course.title}" />
      <div class="course-card__info">
        <h4>${course.title}</h4>
        <p><strong>4500 руб.</strong> →</p>
      </div>
    `;
    coursesGrid.appendChild(card);
  });
}

loadCourses();

// Обработка кнопки «Записаться» на странице course.html
enrollButtons.forEach(btn => {
  btn.addEventListener('click', async () => {
    const courseId = 1; // для примера, можно брать из data-атрибута
    const userName = prompt('Введите ваше имя:');
    if (!userName) return;

    const result = await enrollCourse(courseId, userName);
    if (result) {
      alert(`Вы успешно записались на курс, ${userName}!`);
    } else {
      alert('Ошибка при записи. Попробуйте позже.');
    }
  });
});