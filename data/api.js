// api.js
window.Api = {
  "API - REST - Основные концепции": {
    Определение: "REST — архитектурный стиль для веб-сервисов на базе HTTP",
    "GET /resource": "Получение ресурса",
    "POST /resource": "Создание ресурса",
    "PUT /resource/{id}": "Полное обновление ресурса",
    "PATCH /resource/{id}": "Частичное обновление ресурса",
    "DELETE /resource/{id}": "Удаление ресурса",
    "Status Codes": "HTTP коды ответа для результатов запроса",
    Authentication: "OAuth 2.0 или JWT для авторизации",
    HATEOAS: "Навигация по API через ссылки",
    Versioning: "Версионирование через URL или заголовки",
    "Rate Limiting": "Ограничение количества запросов",
    Caching: "Кэширование для оптимизации",
    "Content Negotiation": "Поддержка JSON и XML",
    "Error Handling": "Стандартизированные ответы об ошибках",
    "API Documentation": "Документация через Swagger/OpenAPI",
  },
  "API - SOAP - Основные концепции": {
    Определение: "SOAP — протокол обмена XML-сообщениями",
    WSDL: "Описание сервисов и методов",
    "SOAP Envelope": "Структура сообщений",
    "SOAP Header": "Метаданные и безопасность",
    "SOAP Body": "Данные запроса/ответа",
    "RPC vs Document Style": "Стили: RPC или Document",
    "Fault Handling": "Обработка ошибок",
    Authentication: "WS-Security для защиты",
    "Transport Protocols": "HTTP, SMTP и другие протоколы",
    "Stateful Operations": "Поддержка состояния",
    Interoperability: "Совместимость платформ",
    "Service Binding": "Привязка к протоколам",
    Extensibility: "Расширяемость спецификаций",
    "Message Routing": "Маршрутизация сообщений",
  },
  "API - gRPC - Основные концепции": {
    Определение: "gRPC — фреймворк для RPC на Protocol Buffers",
    "Protocol Buffers": "Сериализация данных",
    "Service Definition": "Описание в .proto файлах",
    "Unary RPC": "Обычный запрос-ответ",
    "Server Streaming": "Поток с сервера",
    "Client Streaming": "Поток от клиента",
    "Bidirectional Streaming": "Двусторонний поток",
    Authentication: "TLS для безопасности",
    "Load Balancing": "Балансировка нагрузки",
    "Error Handling": "Коды ошибок gRPC",
    Interceptors: "Обработчики для логирования",
    Reflection: "Упрощенное взаимодействие",
    "Deadline and Timeout": "Тайм-ауты запросов",
    Compression: "Сжатие сообщений",
    "Streaming Flow Control": "Управление потоком",
  },
  "API - ESB - Основные функции": {
    Определение: "ESB — шина для интеграции систем",
    "Service Orchestration": "Координация сервисов",
    "Message Routing": "Маршрутизация сообщений",
    Transformation: "Преобразование данных",
    "Protocol Mediation": "Совместимость протоколов",
    Security: "Защита сообщений",
    "Transaction Management": "Управление транзакциями",
    "Monitoring and Logging": "Мониторинг и логи",
    "Service Registry": "Реестр сервисов",
    "Error Handling": "Обработка ошибок",
    Scalability: "Масштабирование",
    "Integration Adapters": "Адаптеры для систем",
    "Event-Driven Architecture": "Событийность",
    "Policy Enforcement": "Политики доступа",
  },
  "API - Брокеры сообщений - Основные понятия": {
    Определение: "Брокеры — посредники для обмена сообщениями",
    "Publish/Subscribe": "Публикация и подписка",
    "Message Queuing": "Очереди сообщений",
    Routing: "Маршрутизация по темам",
    Durability: "Сохранность при сбоях",
    Scalability: "Масштабируемость",
    "High Availability": "Отказоустойчивость",
    "Message Filtering": "Фильтрация сообщений",
    "Dead Letter Queues": "Очереди ошибок",
    "Transactional Messaging": "Транзакционность",
    Security: "Безопасность сообщений",
    "Monitoring and Management": "Управление и мониторинг",
    Integration: "Интеграция через API",
    "Protocol Support": "AMQP, MQTT, STOMP",
    "Load Balancing": "Балансировка нагрузки",
  },
  "API - Вопросы и Ответы для Собеседований": {
    "Что такое REST и чем он отличается от SOAP?":
      "REST использует HTTP и легче в использовании, SOAP - XML-протокол с встроенной безопасностью",
    "Каковы преимущества gRPC?":
      "Высокая производительность, бинарный протокол, поддержка стриминга",
    "Что такое ESB?":
      "Шина для интеграции систем с маршрутизацией и преобразованием данных",
    "Функции брокера сообщений?":
      "Обмен сообщениями, очереди, маршрутизация, гарантированная доставка",
    "Безопасность в REST API?":
      "OAuth/JWT, HTTPS, CORS, валидация входных данных",
    "Что такое idempotency?": "Повторные запросы дают тот же результат",
    "Синхронная vs асинхронная коммуникация?":
      "Синхронная ждет ответа, асинхронная работает без ожидания",
    "Протоколы брокеров сообщений?": "AMQP для enterprise, MQTT для IoT",
    "Транзакционность в брокерах?":
      "Механизмы подтверждения и повторов для гарантированной доставки",
    "Service orchestration в ESB?":
      "Координация сервисов через маршрутизацию и преобразование",
    "Мониторинг ESB и брокеров?": "Prometheus, Grafana, встроенные инструменты",
    "Принципы REST?": "Клиент-сервер, stateless, кэширование, единый интерфейс",
    "HATEOAS?": "Навигация по API через гиперссылки",
    "Unary RPC vs Streaming?": "Одиночный запрос-ответ против потока сообщений",
    "Преимущества Protocol Buffers?":
      "Компактность, производительность, типизация",
    "ESB в интеграции?": "Стандартизирует обмен данными между системами",
    "Dead Letter Queue?": "Очередь для необработанных сообщений",
    "Высокая доступность брокера?":
      "Кластеризация, репликация, автопереключение",
    "Аутентификация в SOAP?": "WS-Security с токенами и подписями",
    "Версионирование REST API?": "Через URL или заголовки",
    "Типы сообщений ESB?": "Синхронные, асинхронные, события, команды",
    "Bidirectional streaming?": "Двусторонний обмен для real-time приложений",
  },
  "API - Примеры": {
    "Создание REST API с использованием Node.js и Express":
      "Пример: `const express = require('express'); const app = express(); app.get('/users', (req, res) => { res.send('User list'); }); app.listen(3000);`",
    "Отправка SOAP-запроса с использованием Python":
      "Пример: `import requests; from requests import Session; from requests.auth import HTTPBasicAuth; wsdl = 'http://example.com/service?wsdl'; response = requests.post(wsdl, data=soap_envelope, headers={'Content-Type': 'text/xml'})`",
    "Определение сервиса gRPC с использованием Protocol Buffers":
      "Пример:\n`syntax = 'proto3';\nservice Greeter {\n  rpc SayHello (HelloRequest) returns (HelloReply) {}\n}\nmessage HelloRequest { string name = 1; }\nmessage HelloReply { string message = 1; }`",
    "Настройка маршрутизации сообщений в ESB MuleSoft":
      "Пример: Создание flow с HTTP Listener, последующей обработкой данных и отправкой в очередь RabbitMQ через соответствующий connector.",
    "Использование RabbitMQ для обмена сообщениями между сервисами":
      "Пример: Отправка сообщения: `channel.basic_publish(exchange='', routing_key='queue_name', body='Hello World')`. Получение сообщения: `method, properties, body = channel.basic_get('queue_name')`",
    "Создание транзакционной очереди в Apache Kafka":
      "Пример: Настройка producer с `enable.idempotence=true` и использование `transactional.id`, а также управление транзакциями через `begin_transaction`, `send_offsets_to_transaction` и `commit_transaction`",
    "Пример аутентификации с использованием JWT в REST API":
      "Пример: Создание middleware в Express, который проверяет наличие и валидность JWT в заголовке Authorization перед обработкой запроса",
    "Интеграция REST API с ESB для обработки бизнес-логики":
      "Пример: REST API вызывает ESB, который маршрутизирует запрос к нескольким микросервисам, агрегирует результаты и возвращает ответ клиенту",
    "Использование gRPC для реализации микросервисной архитектуры":
      "Пример: Один микросервис предоставляет сервис Greeter через gRPC, а другой микросервис вызывает метод SayHello этого сервиса для получения приветствия",
    "Настройка мониторинга брокера сообщений RabbitMQ с помощью Prometheus и Grafana":
      "Пример: Экспорт метрик RabbitMQ через Prometheus Exporter и создание дашборда в Grafana для визуализации производительности и состояния очередей",
    "Создание SOAP-сервиса с использованием Java и Spring Boot":
      "Пример: Определение WSDL файла, создание классов сервисов и конфигурация Spring Boot для обработки SOAP-запросов",
    "Реализация bidirectional streaming в gRPC на Go":
      "Пример: Реализация сервера и клиента, которые обмениваются потоками сообщений через gRPC, используя Go библиотеку",
    "Настройка ESB с использованием Apache Camel для интеграции с Salesforce":
      "Пример: Создание маршрута Camel, который извлекает данные из Salesforce, преобразует их и отправляет в другую систему",
    "Использование Dead Letter Queue в RabbitMQ":
      "Пример: Конфигурация очереди с DLX (Dead Letter Exchange) и настройка обработки неуспешных сообщений",
    "Создание и публикация Protocol Buffer схемы для gRPC сервиса":
      "Пример: Определение .proto файла, генерация кода клиента и сервера с помощью protoc, и публикация схемы в репозитории",
  },
};
