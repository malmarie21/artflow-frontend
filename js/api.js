// js/api.js
const API_URL = 'https://jsonplaceholder.typicode.com';

// Получаем список курсов (GET)
export async function fetchCourses() {
  try {
    const response = await fetch(`${API_URL}/posts?_limit=6`); // имитация курсов
    if (!response.ok) throw new Error('Ошибка при загрузке курсов');
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    return [];
  }
}

// Отправка заявки на курс (POST)
export async function enrollCourse(courseId, userName) {
  try {
    const response = await fetch(`${API_URL}/posts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ courseId, userName })
    });
    if (!response.ok) throw new Error('Ошибка при записи на курс');
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
}