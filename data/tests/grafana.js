// Grafana, Prometheus, Loki, PromQL test questions
window.GrafanaTests = [
  {
    question: "Что такое Prometheus?",
    options: [
      "Система для логирования",
      "Система мониторинга и сбора метрик",
      "Платформа для CI/CD",
      "Инструмент для тестирования"
    ],
    correctAnswer: 1
  },
  {
    question: "Что такое Loki?",
    options: [
      "Система для хранения метрик",
      "Система для сбора и поиска логов",
      "Инструмент для CI/CD",
      "Платформа для управления пользователями"
    ],
    correctAnswer: 1
  },
  {
    question: "Что такое PromQL?",
    options: [
      "Язык запросов к метрикам Prometheus",
      "Язык программирования",
      "Язык для настройки оповещений",
      "Язык для описания API"
    ],
    correctAnswer: 0
  },
  {
    question: "Какой оператор PromQL используется для вычисления скорости изменения счетчика?",
    options: [
      "sum()",
      "rate()",
      "avg()",
      "count()"
    ],
    correctAnswer: 1
  },
  {
    question: "Как получить количество ошибок за последние 5 минут в PromQL?",
    options: [
      "sum(errors_total)",
      "sum(rate(errors_total[5m]))",
      "count(errors_total)",
      "avg(errors_total)"
    ],
    correctAnswer: 1
  },
  {
    question: "Какой язык запросов используется в Loki?",
    options: [
      "SQL",
      "LogQL",
      "PromQL",
      "GraphQL"
    ],
    correctAnswer: 1
  },
  {
    question: "Что такое экспортер в Prometheus?",
    options: [
      "Инструмент для визуализации данных",
      "Компонент для сбора метрик с сервисов",
      "Плагин для Grafana",
      "Система оповещений"
    ],
    correctAnswer: 1
  },
  {
    question: "Как в PromQL выбрать метрику с определённым лейблом job=\"api\"?",
    options: [
      "metric_name.job=\"api\"",
      "metric_name{job=\"api\"}",
      "metric_name(job=\"api\")",
      "metric_name[api]"
    ],
    correctAnswer: 1
  },
  {
    question: "Какой компонент отвечает за оповещения в Prometheus?",
    options: [
      "Alertmanager",
      "Loki",
      "Grafana",
      "Exporter"
    ],
    correctAnswer: 0
  },
  {
    question: "Что позволяет делать функция histogram_quantile() в PromQL?",
    options: [
      "Вычислять сумму",
      "Вычислять квантиль по гистограмме",
      "Вычислять среднее",
      "Вычислять скорость изменения"
    ],
    correctAnswer: 1
  },
  {
    question: "В чем преимущество Loki по сравнению с Elasticsearch?",
    options: [
      "Более сложная настройка",
      "Более эффективное хранение логов и интеграция с Prometheus",
      "Меньше поддерживаемых источников",
      "Отсутствие масштабируемости"
    ],
    correctAnswer: 1
  },
  {
    question: "Какой язык запросов используется для агрегации и фильтрации метрик в Grafana с Prometheus?",
    options: [
      "SQL",
      "PromQL",
      "LogQL",
      "XPath"
    ],
    correctAnswer: 1
  },
  {
    question: "Как в Loki фильтровать логи по уровню error?",
    options: [
      "{job=\"logs\"} |= \"error\"",
      "{job=\"logs\"} |~ \"error\"",
      "{job=\"logs\"} != \"error\"",
      "{job=\"logs\"} == \"error\""
    ],
    correctAnswer: 0
  },
  {
    question: "Какой тип данных хранит Prometheus?",
    options: [
      "Логи",
      "Метрики (временные ряды)",
      "Файлы",
      "SQL таблицы"
    ],
    correctAnswer: 1
  },
  {
    question: "Что такое LogQL?",
    options: [
      "Язык запросов к логам в Loki",
      "Язык программирования",
      "Язык для настройки оповещений",
      "Язык для описания API"
    ],
    correctAnswer: 0
  },
  {
    question: "Как в LogQL отфильтровать логи, содержащие слово 'error'?",
    options: [
      "{job=\"app\"} != \"error\"",
      "{job=\"app\"} |= \"error\"",
      "{job=\"app\"} |~ \"error\"",
      "{job=\"app\"} !~ \"error\""
    ],
    correctAnswer: 1
  },
  {
    question: "Как исключить из выборки строки, содержащие 'debug'?",
    options: [
      "{job=\"app\"} |= \"debug\"",
      "{job=\"app\"} != \"debug\"",
      "{job=\"app\"} |~ \"debug\"",
      "{job=\"app\"} !~ \"debug\""
    ],
    correctAnswer: 1
  },
  {
    question: "Как в LogQL искать по регулярному выражению 'timeout|fail'?",
    options: [
      "{job=\"app\"} |= \"timeout|fail\"",
      "{job=\"app\"} != \"timeout|fail\"",
      "{job=\"app\"} |~ \"timeout|fail\"",
      "{job=\"app\"} !~ \"timeout|fail\""
    ],
    correctAnswer: 2
  },
  {
    question: "Как посчитать количество логов за 5 минут?",
    options: [
      "count_over_time({job=\"app\"}[5m])",
      "sum({job=\"app\"}[5m])",
      "avg({job=\"app\"}[5m])",
      "rate({job=\"app\"}[5m])"
    ],
    correctAnswer: 0
  },
  {
    question: "Как сгруппировать количество ошибок по сервисам?",
    options: [
      "sum(count_over_time({job=\"app\"} |= \"error\"[5m])) by (service)",
      "count_over_time({job=\"app\"} |= \"error\"[5m]) by (service)",
      "sum by (service) (count_over_time({job=\"app\"} |= \"error\"[5m]))",
      "avg by (service) (count_over_time({job=\"app\"} |= \"error\"[5m]))"
    ],
    correctAnswer: 2
  }
];
