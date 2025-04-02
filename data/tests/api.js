// API test questions
window.APITests = [
    {
        question: "Что такое REST API?",
        options: [
            "Протокол передачи данных",
            "Архитектурный стиль для распределенных систем",
            "Язык программирования",
            "Формат данных"
        ],
        correctAnswer: 1
    },
    {
        question: "Какой метод HTTP обычно используется для получения данных?",
        options: [
            "POST",
            "PUT",
            "GET",
            "DELETE"
        ],
        correctAnswer: 2
    },
    {
        question: "Какой формат данных чаще всего используется в современных API?",
        options: [
            "XML",
            "CSV",
            "JSON",
            "HTML"
        ],
        correctAnswer: 2
    },
    {
        question: "Что такое API ключ?",
        options: [
            "Уникальный идентификатор для аутентификации",
            "Метод шифрования данных",
            "Протокол передачи данных",
            "Формат запроса"
        ],
        correctAnswer: 0
    },
    {
        question: "Какой код состояния HTTP означает успешный запрос?",
        options: [
            "404",
            "500",
            "200",
            "302"
        ],
        correctAnswer: 2
    },
    {
        question: "Для чего используется метод PUT?",
        options: [
            "Создание нового ресурса",
            "Полное обновление ресурса",
            "Частичное обновление",
            "Удаление ресурса"
        ],
        correctAnswer: 1
    },
    {
        question: "Какой метод используется для частичного обновления ресурса?",
        options: [
            "POST",
            "PUT",
            "PATCH",
            "UPDATE"
        ],
        correctAnswer: 2
    },
    {
        question: "Какой код ошибки означает 'Не авторизован'?",
        options: [
            "400",
            "401",
            "403",
            "404"
        ],
        correctAnswer: 1
    },
    {
        question: "Что означает код состояния 429?",
        options: [
            "Внутренняя ошибка сервера",
            "Слишком много запросов",
            "Сервис недоступен",
            "Доступ запрещен"
        ],
        correctAnswer: 1
    },
    {
        question: "Для чего предназначен метод DELETE?",
        options: [
            "Создание ресурса",
            "Обновление ресурса",
            "Удаление ресурса",
            "Получение метаданных"
        ],
        correctAnswer: 2
    },
    {
        question: "Какой метод используется для получения информации о ресурсе?",
        options: [
            "GET",
            "HEAD",
            "OPTIONS",
            "TRACE"
        ],
        correctAnswer: 2
    },
    {
        question: "Что означает код ошибки 403?",
        options: [
            "Не найдено",
            "Доступ запрещен",
            "Ошибка сервера",
            "Требуется аутентификация"
        ],
        correctAnswer: 1
    },
    {
        question: "Какой код состояния указывает на временную недоступность сервиса?",
        options: [
            "500",
            "503",
            "504",
            "502"
        ],
        correctAnswer: 1
    },
    {
        question: "Что означает принцип идемпотентности в REST?",
        options: [
            "Метод можно вызывать многократно с тем же результатом",
            "Сервер не хранит состояние клиента",
            "Ресурсы имеют уникальные идентификаторы",
            "Поддержка кэширования ответов"
        ],
        correctAnswer: 0
    },
    {
        question: "Какой код состояния означает 'I'm a teapot' (RFC 2324)?",
        options: [
            "418",
            "420",
            "503",
            "451"
        ],
        correctAnswer: 0
    },
    {
        question: "Что защищает OAuth 2.0?",
        options: [
            "Шифрование данных передачи",
            "Авторизацию без раскрытия пароля",
            "Проверку SSL сертификатов",
            "Подпись API запросов"
        ],
        correctAnswer: 1
    },
    {
        question: "Из каких частей состоит JWT?",
        options: [
            "Логин/Пароль/Хэш",
            "Заголовок/Полезная нагрузка/Подпись",
            "API ключ/Секрет/Соль",
            "Метод/Путь/Хэдеры"
        ],
        correctAnswer: 1
    },
    {
        question: "Что означает CORS?",
        options: [
            "Межсайтовая подделка запроса",
            "Общий доступ к ресурсам между источниками",
            "Кэширование ответов сервера",
            "Шифрование транспортного уровня"
        ],
        correctAnswer: 1
    },
    {
        question: "Какой заголовок обеспечивает безопасность Content-Type?",
        options: [
            "X-Content-Type-Options",
            "Content-Security-Policy",
            "Strict-Transport-Security",
            "Access-Control-Allow-Origin"
        ],
        correctAnswer: 0
    },
    {
        question: "Что означает код 451?",
        options: [
            "Недостаточно прав",
            "Незаконный контент",
            "Доступ запрещен по юридическим причинам",
            "Ошибка валидации данных"
        ],
        correctAnswer: 2
    },
    {
        question: "Какой метод НЕ является идемпотентным?",
        options: [
            "GET",
            "PUT",
            "POST",
            "DELETE"
        ],
        correctAnswer: 2
    },
    {
        question: "Для чего используется ETag?",
        options: [
            "Аутентификация пользователя",
            "Валидация кэшированных ресурсов",
            "Шифрование тела запроса",
            "Логирование ошибок API"
        ],
        correctAnswer: 1
    },
    {
        question: "Что такое HATEOAS?",
        options: [
            "Спецификация для гипермедиа API",
            "Протокол передачи бинарных данных",
            "Метод кэширования ответов",
            "Система типов для JSON схем"
        ],
        correctAnswer: 0
    },
    {
        question: "Какой срок жизни Access Token в OAuth 2.0?",
        options: [
            "1 час",
            "24 часа",
            "Неограничен",
            "Задается при выдаче"
        ],
        correctAnswer: 3
    },
    {
        question: "Что проверяет Content-Security-Policy?",
        options: [
            "Правила кэширования ресурсов",
            "Источники загружаемого контента",
            "Валидность SSL сертификатов",
            "Скорость ответа API"
        ],
        correctAnswer: 1
    },
    {
        question: "Какой метод использовать для поиска ресурсов?",
        options: [
            "GET",
            "SEARCH",
            "FIND",
            "QUERY"
        ],
        correctAnswer: 0
    },
    {
        question: "Что означает Keep-Alive в HTTP?",
        options: [
            "Постоянное соединение",
            "Механизм аутентификации",
            "Кэширование сессий",
            "Шифрование трафика"
        ],
        correctAnswer: 0
    },
    {
        question: "Какой код возвращает успешное создание ресурса?",
        options: [
            "200",
            "201",
            "202",
            "204"
        ],
        correctAnswer: 1
    },
    {
        question: "Для чего нужен заголовок Authorization?",
        options: [
            "Определение типа контента",
            "Передача учетных данных",
            "Управление кэшированием",
            "Настройка CORS"
        ],
        correctAnswer: 1
    },
    {
        question: "Что такое idempotency-key?",
        options: [
            "Уникальный идентификатор API ключа",
            "Ключ для повторной отправки запроса",
            "Хэш-ключ для подписи запросов",
            "Идентификатор для обеспечения идемпотентности"
        ],
        correctAnswer: 3
    },
    {
        question: "Какой протокол использует OAuth 2.0 для авторизации?",
        options: [
            "HTTP Basic Auth",
            "Bearer Token",
            "API Key",
            "Digest Auth"
        ],
        correctAnswer: 1
    },
    {
        question: "Что такое RESTful resource nesting?",
        options: [
            "Вложенные структуры данных в JSON",
            "Иерархическая организация эндпоинтов",
            "Шифрование вложенных объектов",
            "Кэширование связанных ресурсов"
        ],
        correctAnswer: 1
    },
    {
        question: "Какой код состояния использовать для валидации ошибок?",
        options: [
            "400",
            "422",
            "500",
            "503"
        ],
        correctAnswer: 1
    },
    {
        question: "Что такое Circuit Breaker в API?",
        options: [
            "Механизм защиты от перегрузки",
            "Способ шифрования трафика",
            "Метод валидации SSL",
            "Протокол аутентификации"
        ],
        correctAnswer: 0
    },
    {
        question: "Какой заголовок предотвращает XSS?",
        options: [
            "X-XSS-Protection",
            "Content-Type",
            "Access-Control-Allow-Origin",
            "ETag"
        ],
        correctAnswer: 0
    },
    {
        question: "Что такое API versioning?",
        options: [
            "Шифрование версии API",
            "Управление обратной совместимостью",
            "Кэширование разных версий",
            "Логирование изменений API"
        ],
        correctAnswer: 1
    },
    {
        question: "Какой метод использовать для проверки работоспособности API?",
        options: [
            "GET",
            "HEAD",
            "OPTIONS",
            "TRACE"
        ],
        correctAnswer: 2
    },
    {
        question: "Что такое HSTS?",
        options: [
            "Принудительное HTTPS соединение",
            "Механизм кэширования",
            "Протокол аутентификации",
            "Способ валидации JSON"
        ],
        correctAnswer: 0
    },
    {
        question: "Какой код состояния означает принятый запрос?",
        options: [
            "200",
            "201",
            "202",
            "204"
        ],
        correctAnswer: 2
    },
    {
        question: "Что такое Swagger/OpenAPI?",
        options: [
            "Фреймворк для тестирования API",
            "Спецификация для описания API",
            "Протокол передачи данных",
            "Система мониторинга API"
        ],
        correctAnswer: 1
    },
    {
        question: "Для чего нужен заголовок If-Modified-Since?",
        options: [
            "Кэширование ресурсов",
            "Аутентификация",
            "Валидация JSON схем",
            "Управление сессиями"
        ],
        correctAnswer: 0
    },
    {
        question: "Что такое REST maturity model?",
        options: [
            "Уровни зрелости REST API",
            "Система оценки производительности",
            "Модель безопасности API",
            "Схема валидации данных"
        ],
        correctAnswer: 0
    },
    {
        question: "Какой код состояния использовать для перенаправления?",
        options: [
            "301",
            "400",
            "500",
            "201"
        ],
        correctAnswer: 0
    },
    {
        question: "Что такое payload в API запросе?",
        options: [
            "Метаданные запроса",
            "Тело запроса с данными",
            "Часть URL",
            "Система заголовков"
        ],
        correctAnswer: 1
    },
    {
        question: "Какой метод использовать для частичных обновлений?",
        options: [
            "PUT",
            "PATCH",
            "POST",
            "UPDATE"
        ],
        correctAnswer: 1
    },
    {
        question: "Что такое idempotency в распределенных системах?",
        options: [
            "Гарантия однократного выполнения",
            "Поддержка транзакций",
            "Автоматическое восстановление после сбоев",
            "Согласованность данных между узлами"
        ],
        correctAnswer: 0
    },
    {
        question: "Какой код состояния означает конфликт?",
        options: [
            "400",
            "409",
            "404",
            "500"
        ],
        correctAnswer: 1
    },
    {
        question: "Что такое API gateway?",
        options: [
            "Система кэширования API",
            "Единая точка входа для API",
            "Протокол шифрования",
            "Инструмент документирования API"
        ],
        correctAnswer: 1
    },
    {
        question: "Для чего нужен заголовок Accept?",
        options: [
            "Указание формата ответа",
            "Аутентификация пользователя",
            "Кэширование ресурсов",
            "Управление сессиями"
        ],
        correctAnswer: 0
    },
    {
        question: "Что такое rate limiting?",
        options: [
            "Ограничение скорости запросов",
            "Шифрование трафика",
            "Валидация данных",
            "Кэширование ответов"
        ],
        correctAnswer: 0
    },
    {
        question: "Какой код состояния означает 'Not Implemented'?",
        options: [
            "501",
            "503",
            "500",
            "404"
        ],
        correctAnswer: 0
    },
    {
        question: "Что такое hypermedia-driven API?",
        options: [
            "API с встроенной навигацией",
            "Протокол передачи видео",
            "Система кэширования",
            "Метод сжатия данных"
        ],
        correctAnswer: 0
    },
    {
        question: "Какой заголовок отвечает за кэширование?",
        options: [
            "Cache-Control",
            "Content-Type",
            "Authorization",
            "Accept"
        ],
        correctAnswer: 0
    },
    {
        question: "Что такое CRUD в контексте API?",
        options: [
            "Create, Read, Update, Delete",
            "Стандарт безопасности",
            "Метод валидации данных",
            "Протокол передачи файлов"
        ],
        correctAnswer: 0
    },
    {
        question: "Какой код состояния означает 'Gateway Timeout'?",
        options: [
            "504",
            "500",
            "503",
            "502"
        ],
        correctAnswer: 0
    },
    {
        question: "Что такое idempotency token?",
        options: [
            "Уникальный идентификатор запроса",
            "Токен для аутентификации",
            "Ключ шифрования тела запроса",
            "Маркер безопасности сессии"
        ],
        correctAnswer: 0
    },
    {
        question: "Какой метод использовать для подписи запросов?",
        options: [
            "HMAC",
            "JWT",
            "OAuth",
            "Basic Auth"
        ],
        correctAnswer: 0
    },
    {
        question: "Что такое REST API pagination?",
        options: [
            "Разбиение больших наборов данных",
            "Система кэширования страниц",
            "Метод валидации параметров",
            "Протокол передачи изображений"
        ],
        correctAnswer: 0
    },
    {
        question: "Какой код состояния использовать для перенаправления на HTTPS?",
        options: [
            "301",
            "302",
            "307",
            "308"
        ],
        correctAnswer: 2
    },
    {
        question: "Что такое webhook?",
        options: [
            "Обратный вызов через HTTP",
            "Инструмент тестирования API",
            "Метод шифрования данных",
            "Система кэширования"
        ],
        correctAnswer: 0
    },
    {
        question: "Какой заголовок предотвращает MIME-sniffing?",
        options: [
            "X-Content-Type-Options",
            "Content-Security-Policy",
            "X-Frame-Options",
            "X-XSS-Protection"
        ],
        correctAnswer: 0
    }
];