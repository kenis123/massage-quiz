# Квіз масажного салону

Інтерактивний квіз для підбору масажу з інтеграцією Facebook Pixel та Telegram.

## 🚀 Швидкий старт

### 1. Клонування репозиторію
```bash
git clone https://github.com/YOUR_USERNAME/massage-quiz.git
cd massage-quiz
```

### 2. Налаштування токенів
```bash
# Скопіюйте приклад конфігурації
cp config.example.js config.js

# Відредагуйте config.js з вашими токенами
```

### 3. Запуск локально
```bash
# Відкрийте index.html в браузері
start index.html
```

## 🔒 Безпека токенів

### ⚠️ ВАЖЛИВО: Не публікуйте токени!

1. **Файл `config.js` додано в `.gitignore`**
2. **Тільки `config.example.js` публікується в GitHub**
3. **Ваші токени залишаються локально**

### Налаштування токенів:

1. **Скопіюйте `config.example.js` як `config.js`**
2. **Замініть placeholder на ваші токени:**
   ```javascript
       window.TELEGRAM_BOT_TOKEN = 'YOUR_BOT_TOKEN_HERE';
    window.TELEGRAM_CHAT_ID = 'YOUR_CHAT_ID_HERE';
   ```

## 📊 Facebook Pixel

### Налаштування:
1. Зайдіть в [Facebook Business Manager](https://business.facebook.com/)
2. Створіть Pixel або використайте існуючий
3. Замініть `YOUR_PIXEL_ID` в `index.html`

### Відстежувані події:
- **StartQuiz** - початок квізу
- **AnswerQuestion** - відповідь на питання
- **CompleteQuiz** - завершення квізу
- **Lead** - відправка форми

## 📱 Telegram Bot

### Створення бота:
1. Знайдіть [@BotFather](https://t.me/botfather)
2. Відправте `/newbot`
3. Отримайте Bot Token

### Отримання Chat ID:
1. Додайте бота в групу
2. Відправте повідомлення
3. Відкрийте: `https://api.telegram.org/botYOUR_TOKEN/getUpdates`
4. Знайдіть `chat_id`

## 🖼️ Фото масажів

Додайте фото в папку `assets/`:
- `1.png` - Класичний масаж
- `2.png` - Спортивний масаж
- `3.png` - Антицелюлітний масаж
- `4.png` - Лімфодренажний масаж

## 🚀 Розгортання

### Cloudflare Pages:
1. Створіть репозиторій на GitHub
2. Підключіть до Cloudflare Pages
3. Налаштуйте змінні середовища в Cloudflare

### Змінні середовища в Cloudflare:
```
TELEGRAM_BOT_TOKEN=YOUR_BOT_TOKEN_HERE
TELEGRAM_CHAT_ID=YOUR_CHAT_ID_HERE
```

## 📁 Структура проекту

```
massage-quiz/
├── index.html          # Основний файл
├── config.js           # Токени (НЕ публікувати!)
├── config.example.js   # Приклад конфігурації
├── .gitignore          # Виключення файлів
├── _redirects          # Cloudflare redirects
├── assets/             # Фото масажів
│   ├── 1.png
│   ├── 2.png
│   ├── 3.png
│   └── 4.png
├── SETUP.md            # Налаштування
└── TRACKING.md         # Документація відстеження
```

## 🔧 Налаштування

### Локальна розробка:
1. Відредагуйте `config.js`
2. Відкрийте `index.html`
3. Тестуйте функціональність

### Продакшен:
1. Налаштуйте змінні середовища
2. Завантажте на Cloudflare Pages
3. Перевірте роботу інтеграцій

## 📞 Підтримка

При проблемах перевірте:
1. Правильність токенів
2. Дозволи бота в Telegram
3. Консоль браузера
4. Логи Facebook Pixel Helper

## 📄 Ліцензія

MIT License - використовуйте вільно!
