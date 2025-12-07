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