# Налаштування Facebook Pixel та Telegram

## 📊 Facebook Pixel

### 1. Отримання Pixel ID
1. Зайдіть в [Facebook Business Manager](https://business.facebook.com/)
2. Перейдіть в **Events Manager**
3. Створіть новий Pixel або використайте існуючий
4. Скопіюйте **Pixel ID** (наприклад: 123456789012345)

### 2. Заміна в коді
В файлі `index.html` замініть `YOUR_PIXEL_ID` на ваш Pixel ID:

```javascript
fbq('init', '123456789012345'); // Ваш Pixel ID
```

### 3. Відстежувані події
- **StartQuiz** - початок квізу
- **AnswerQuestion** - відповідь на питання
- **CompleteQuiz** - завершення квізу
- **Lead** - відправка форми

## 📱 Telegram Bot

### 1. Створення бота
1. Знайдіть [@BotFather](https://t.me/botfather) в Telegram
2. Відправте команду `/newbot`
3. Вкажіть назву бота та username
4. Отримайте **Bot Token** (наприклад: `123456789:ABCdefGHIjklMNOpqrsTUVwxyz`)

### 2. Отримання Chat ID
1. Додайте бота в вашу групу
2. Відправте повідомлення в групу
3. Відкрийте: `https://api.telegram.org/botYOUR_BOT_TOKEN/getUpdates`
4. Знайдіть `chat_id` в відповіді

### 3. Заміна в коді
В файлі `index.html` замініть:

```javascript
const botToken = '123456789:ABCdefGHIjklMNOpqrsTUVwxyz'; // Ваш Bot Token
const chatId = '-1001234567890'; // ID вашої групи
```

## 🔧 Налаштування групи Telegram

### 1. Дозволи для бота
- Додайте бота в групу як адміністратора
- Дозвольте відправляти повідомлення

### 2. Формат повідомлення
Бот буде відправляти повідомлення з такою інформацією:
- Ім'я клієнта
- Номер телефону
- Рекомендований масаж
- Тривалість та ціна
- Всі відповіді з квізу
- Дата та час

## 🚀 Тестування

### 1. Facebook Pixel
1. Відкрийте [Facebook Pixel Helper](https://chrome.google.com/webstore/detail/facebook-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc)
2. Пройдіть квіз
3. Перевірте, чи відстежуються події

### 2. Telegram
1. Пройдіть квіз до кінця
2. Заповніть форму
3. Перевірте, чи прийшло повідомлення в групу

## ⚠️ Важливо

- **Не публікуйте** токени публічно
- **Використовуйте HTTPS** для продакшену
- **Тестуйте** на реальних користувачах
- **Моніторте** логи на помилки

## 📞 Підтримка

При проблемах перевірте:
1. Правильність токенів
2. Дозволи бота в групі
3. Консоль браузера на помилки
4. Логи Facebook Pixel Helper
