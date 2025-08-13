addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  // Дозволяємо тільки POST запити
  if (request.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 })
  }

  try {
    // Отримуємо дані з запиту
    const data = await request.json()
    
    // Отримуємо токени з змінних середовища
    const botToken = TELEGRAM_BOT_TOKEN
    const chatId = TELEGRAM_CHAT_ID
    
    if (!botToken || !chatId) {
      return new Response('Telegram tokens not configured', { status: 500 })
    }

    // Формуємо повідомлення
    const message = `
🆕 Новий лід з квізу масажу!

👤 Ім'я: ${data.name}
📞 Телефон: ${data.phone}

💆‍♀️ Рекомендований масаж: ${data.massage}
⏱ Тривалість: ${data.duration}
💰 Ціна: ${data.oldPrice} → ${data.newPrice}

📊 Відповіді клієнта:
• Вік: ${data.answers.question1}
• Дискомфорт: ${data.answers.question2}
• Мета: ${data.answers.question3}
• Тривалість: ${data.answers.question4}

⏰ ${new Date().toLocaleString('uk-UA')}
    `

    // Відправляємо в Telegram
    const telegramResponse = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'HTML'
      })
    })

    if (!telegramResponse.ok) {
      throw new Error('Telegram API error')
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type'
      }
    })

  } catch (error) {
    return new Response(JSON.stringify({ 
      success: false, 
      error: error.message 
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type'
      }
    })
  }
}
