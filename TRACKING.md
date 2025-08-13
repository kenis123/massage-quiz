# Документація по відстеженню подій

## 📊 Facebook Pixel Events

### 1. StartQuiz - Початок квізу
**Коли:** Користувач натискає "Пройти тест"

**Дані:**
```javascript
{
    content_name: 'Massage Quiz',
    content_category: 'Quiz',
    value: 0,
    currency: 'UAH',
    custom_parameters: {
        quiz_type: 'Massage Recommendation',
        total_questions: 4,
        quiz_version: '1.0',
        start_time: '2025-08-13T19:30:45.123Z'
    }
}
```

### 2. AnswerQuestion - Відповідь на питання
**Коли:** Користувач обирає варіант відповіді

**Дані:**
```javascript
{
    content_name: 'Вік' | 'Дискомфорт' | 'Мета' | 'Тривалість',
    content_category: 'Quiz',
    value: '31–40' | 'Спина' | 'Релакс' | '60 хв',
    question_number: 1-4,
    total_questions: 4,
    custom_parameters: {
        question_type: 'Вік' | 'Дискомфорт' | 'Мета' | 'Тривалість',
        selected_answer: '31–40' | 'Спина' | 'Релакс' | '60 хв',
        progress: '1/4' | '2/4' | '3/4' | '4/4'
    }
}
```

### 3. CompleteQuiz - Завершення квізу
**Коли:** Показується результат

**Дані:**
```javascript
{
    content_name: 'Класичний масаж' | 'Спортивний масаж' | 'Антицелюлітний масаж' | 'Лімфодренажний масаж',
    content_category: 'Quiz',
    value: '500' | '600' | '550',
    currency: 'UAH',
    custom_parameters: {
        massage_type: 'Класичний масаж',
        duration: '60 хв',
        old_price: '1000 грн',
        new_price: '500 грн',
        user_age: '31–40',
        user_discomfort: 'Спина',
        user_goal: 'Релакс',
        user_duration: '60 хв',
        all_answers: '{"question1":"31–40","question2":"Спина","question3":"Релакс","question4":"60 хв"}'
    }
}
```

### 4. Lead - Відправка форми
**Коли:** Користувач заповнює і відправляє форму

**Дані:**
```javascript
{
    content_name: 'Класичний масаж',
    content_category: 'Quiz',
    value: '500',
    currency: 'UAH',
    custom_parameters: {
        massage_type: 'Класичний масаж',
        duration: '60 хв',
        old_price: '1000 грн',
        new_price: '500 грн',
        user_age: '31–40',
        user_discomfort: 'Спина',
        user_goal: 'Релакс',
        user_duration: '60 хв',
        all_answers: '{"question1":"31–40","question2":"Спина","question3":"Релакс","question4":"60 хв"}',
        lead_name: 'Іван',
        lead_phone: '+380991234567'
    }
}
```

## 📱 Telegram Notifications

### Формат повідомлення:
```
🆕 Новий лід з квізу масажу!

👤 Ім'я: Іван
📞 Телефон: +380991234567

💆‍♀️ Рекомендований масаж: Класичний масаж
⏱ Тривалість: 60 хв
💰 Ціна: 1000 грн → 500 грн

📊 Відповіді клієнта:
• Вік: 31–40
• Дискомфорт: Спина
• Мета: Релакс
• Тривалість: 60 хв

⏰ 13.08.2025, 19:30:45
```

## 📈 Аналітика

### Відстежувані метрики:

#### **Конверсія:**
- StartQuiz → AnswerQuestion (1-4): Відсоток тих, хто почав і відповів на питання
- AnswerQuestion → CompleteQuiz: Відсоток тих, хто завершив квіз
- CompleteQuiz → Lead: Відсоток тих, хто заповнив форму

#### **Поведінка:**
- Найпопулярніші відповіді на кожне питання
- Де користувачі залишають квіз
- Час проходження квізу

#### **Результати:**
- Найпопулярніші типи масажів
- Середня ціна замовлення
- Конверсія по типах масажів

## 🔧 Налаштування в Facebook Ads

### 1. Створення аудиторій:
- **Quiz Starters:** Всі, хто почав квіз
- **Quiz Completers:** Всі, хто завершив квіз
- **Lead Submitters:** Всі, хто заповнив форму

### 2. Lookalike аудиторії:
- Створіть Lookalike на основі Lead Submitters
- Рекомендується 1-3% для кращої якості

### 3. Ретаргетинг:
- Показуйте рекламу тим, хто почав, але не завершив квіз
- Пропонуйте додаткові знижки тим, хто завершив, але не заповнив форму

## 📊 Приклади звітів

### 1. Конверсійна воронка:
```
StartQuiz: 1000
├── AnswerQuestion 1: 850 (85%)
├── AnswerQuestion 2: 720 (72%)
├── AnswerQuestion 3: 680 (68%)
├── AnswerQuestion 4: 650 (65%)
├── CompleteQuiz: 620 (62%)
└── Lead: 150 (15%)
```

### 2. Популярність масажів:
```
Класичний масаж: 45%
Спортивний масаж: 25%
Антицелюлітний масаж: 20%
Лімфодренажний масаж: 10%
```

### 3. Сегментація по віку:
```
20–30: 30%
31–40: 35%
41–50: 25%
51–65: 10%
```
