// notifications.js
export function notifyUser(message) {
    // Проверяем поддержку Notification API
    if (!("Notification" in window)) {
      console.error("Этот браузер не поддерживает уведомления.");
      return;
    }
  
    // Проверяем разрешение
    if (Notification.permission === "granted") {
      new Notification(message);
    } else if (Notification.permission !== "denied") {
      // Запрос разрешения у пользователя
      Notification.requestPermission().then(permission => {
        if (permission === "granted") {
          new Notification(message);
        }
      }).catch(err => console.error("Ошибка запроса разрешения на уведомления:", err));
    }
  }