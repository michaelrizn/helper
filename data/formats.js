// formats.js
window.Formats = {
  "Formats - JSON - Основные концепции": {
    Определение:
      "JSON - простой текстовый формат для обмена данными на базе JavaScript.",
    Синтаксис: "Ключ-значение и массивы.",
    "Типы данных": "Строки, числа, объекты, массивы, булевы значения, null.",
    Преимущества: "Читаемый, популярный, идеален для веба.",
    Недостатки: "Нет схем, неэффективен для больших данных.",
    Парсинг: "JSON.parse() и JSON.stringify() в JavaScript.",
    Использование: "Обмен данными клиент-сервер.",
  },
  "Formats - XML - Основные концепции": {
    Определение: "XML - расширяемый язык разметки на основе тегов.",
    Синтаксис: "Теги для структурирования данных.",
    "Типы данных": "Строки, числа, вложенные элементы, атрибуты.",
    Преимущества: "Гибкость, валидация, широкая поддержка.",
    Недостатки: "Сложный синтаксис, избыточность.",
    Парсинг: "DOM/SAX парсеры.",
    Использование: "SOAP, конфигурации, документы.",
  },
  "Formats - AVRO - Основные концепции": {
    Определение: "AVRO - компактный бинарный формат для Hadoop.",
    Синтаксис: "JSON-схемы для структуры.",
    "Типы данных": "Примитивы, сложные типы, массивы.",
    Преимущества: "Эффективность, версионность, интеграция.",
    Недостатки: "Нужны схемы, менее популярен.",
    Парсинг: "Библиотека Avro.",
    Использование: "Big Data, Kafka.",
  },
  "Formats - YAML - Основные концепции": {
    Определение: "YAML - человекочитаемый формат конфигураций.",
    Синтаксис: "Отступы для структуры.",
    "Типы данных": "Строки, числа, массивы, ссылки.",
    Преимущества: "Читаемость, гибкость.",
    Недостатки: "Чувствителен к пробелам.",
    Парсинг: "js-yaml, PyYAML.",
    Использование: "Docker, Kubernetes.",
  },
  "Formats - MessagePack - Основные концепции": {
    Определение: "MessagePack - быстрый бинарный формат.",
    Синтаксис: "Бинарное представление JSON-структур.",
    "Типы данных": "Как в JSON.",
    Преимущества: "Компактность, скорость.",
    Недостатки: "Нечитаемый, нужны библиотеки.",
    Парсинг: "msgpack библиотеки.",
    Использование: "IoT, мобильные приложения.",
  },
  "Formats - Protocol Buffers - Основные концепции": {
    Определение: "Protobuf - бинарный формат от Google.",
    Синтаксис: ".proto файлы.",
    "Типы данных": "Примитивы, сообщения, enum.",
    Преимущества: "Производительность, типизация.",
    Недостатки: "Компиляция схем.",
    Парсинг: "protoc компилятор.",
    Использование: "gRPC, микросервисы.",
  },
  "Formats - Вопросы и Ответы для Собеседований": {
    "Чем JSON отличается от XML?": "JSON проще и легче, XML гибче и строже.",
    "Когда использовать AVRO?": "Для эффективной работы с большими данными.",
    "Что такое схема AVRO?":
      "Описание структуры для валидации и совместимости.",
    "Структура JSON?": "Объекты и массивы.",
    "Преимущества схем AVRO?": "Контроль структуры и версионность.",
    "Компоненты XML?": "Теги, атрибуты, текст.",
    "JSON в JavaScript?": "parse() и stringify().",
    "Минусы XML?": "Сложный, избыточный.",
    "Версионность в AVRO?": "Через опциональные поля в схемах.",
    "XML Schema?": "Определяет структуру XML.",
    "Типы в JSON?": "Строки, числа, объекты, массивы, boolean, null.",
    "JSON в API?": "Простота использования, широкая поддержка.",
    "JSON сериализация?": "stringify()",
    "JSON десериализация?": "parse()",
    "JSON Schema?": "Валидация JSON структур.",
    "Альтернативы JSON?": "XML, AVRO, Protobuf, YAML.",
    "YAML vs JSON?": "YAML читаемее, JSON проще.",
    "Когда MessagePack?": "Для оптимизации размера и скорости.",
    "Protobuf в gRPC?": "Эффективная передача данных между сервисами.",
    "Безопасность YAML?": "Валидация, ограничение парсеров.",
  },
  "Formats - Примеры": {
    "Пример JSON объекта":
      'Пример: `{\n  "name": "John Doe",\n  "age": 30,\n  "isStudent": false,\n  "courses": ["Math", "Science"]\n}`',
    "Пример XML документа":
      'Пример:\n`<?xml version="1.0" encoding="UTF-8"?>\n<person>\n  <name>John Doe</name>\n  <age>30</age>\n  <isStudent>false</isStudent>\n  <courses>\n    <course>Math</course>\n    <course>Science</course>\n  </courses>\n</person>`',
    "Пример AVRO схемы":
      'Пример:\n`{\n  "type": "record",\n  "name": "Person",\n  "fields": [\n    {"name": "name", "type": "string"},\n    {"name": "age", "type": "int"},\n    {"name": "isStudent", "type": "boolean"},\n    {"name": "courses", "type": {"type": "array", "items": "string"}}\n  ]\n}`',
    "Пример YAML документа":
      "Пример:\n`name: John Doe\nage: 30\nisStudent: false\ncourses:\n  - Math\n  - Science`",
    "Пример MessagePack данных":
      "Пример: Использование библиотеки msgpack для сериализации объекта `{ name: 'John', age: 30 }` в бинарный формат и обратно.",
    "Пример Protocol Buffers схемы":
      'Пример:\n`syntax = "proto3";\nmessage Person {\n  string name = 1;\n  int32 age = 2;\n  bool isStudent = 3;\n  repeated string courses = 4;\n}`',
    "Парсинг JSON в JavaScript":
      'Пример: `const jsonString = \'{ "name": "John", "age": 30 }\'; const obj = JSON.parse(jsonString); console.log(obj.name);`',
    "Создание XML документа с использованием Python":
      "Пример: `import xml.etree.ElementTree as ET\nperson = ET.Element('person')\nname = ET.SubElement(person, 'name')\nname.text = 'John Doe'\nage = ET.SubElement(person, 'age')\nage.text = '30'\nisStudent = ET.SubElement(person, 'isStudent')\nisStudent.text = 'false'\ncourses = ET.SubElement(person, 'courses')\ncourse1 = ET.SubElement(courses, 'course')\ncourse1.text = 'Math'\ncourse2 = ET.SubElement(courses, 'course')\ncourse2.text = 'Science'\nET.dump(person)`",
    "Сериализация данных с использованием AVRO в Java":
      "Пример: Использование Avro API для записи данных в файл с использованием предварительно определенной схемы.",
    "Конвертация JSON в XML с помощью онлайн-инструмента":
      "Пример: Использовать сервисы, такие как https://www.json2xml.com/, для преобразования JSON строки в XML формат.",
    "Использование AVRO для сериализации данных в Apache Kafka":
      "Пример: Настройка Kafka producer и consumer с использованием AVRO serializer/deserializer и Schema Registry для управления схемами.",
    "Валидация XML документа с использованием XSD схемы":
      "Пример: Использовать библиотеку lxml в Python для валидации XML документа против XSD схемы.",
    "Пример bidirectional streaming в gRPC с использованием JSON":
      "Пример: Реализовать клиент и сервер, которые обмениваются потоками JSON сообщений через gRPC bidirectional streaming.",
    "Создание REST API с использованием JSON и Express.js":
      "Пример: `const express = require('express'); const app = express(); app.use(express.json()); app.post('/users', (req, res) => { const user = req.body; // обработка пользователя res.status(201).send(user); }); app.listen(3000);`",
    "Создание SOAP-сервиса с использованием Java и Spring Boot":
      "Пример: Определение WSDL файла, создание классов сервисов и конфигурация Spring Boot для обработки SOAP-запросов.",
    "Реализация bidirectional streaming в gRPC на Go":
      "Пример: Реализация сервера и клиента, которые обмениваются потоками сообщений через gRPC, используя Go библиотеку.",
    "Настройка ESB с использованием Apache Camel для интеграции с Salesforce":
      "Пример: Создание маршрута Camel, который извлекает данные из Salesforce, преобразует их и отправляет в другую систему.",
    "Использование Dead Letter Queue в RabbitMQ":
      "Пример: Конфигурация очереди с DLX (Dead Letter Exchange) и настройка обработки неуспешных сообщений.",
    "Создание и публикация Protocol Buffer схемы для gRPC сервиса":
      "Пример: Определение .proto файла, генерация кода клиента и сервера с помощью protoc, и публикация схемы в репозитории.",
  },
};
