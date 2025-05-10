// JavaScript для управления тестами
class TestManager {
    constructor() {
        // Элементы интерфейса
        this.questionElement = document.getElementById('current-question');
        this.optionsElement = document.getElementById('options');
        this.prevButton = document.getElementById('prev-btn');
        this.nextButton = document.getElementById('next-btn');
        this.resultElement = document.getElementById('result');
        this.topicButtons = document.querySelectorAll('.topic-btn');
        
        // Кнопки изменения размера шрифта
        this.decreaseFontBtn = document.getElementById('decrease-font');
        this.increaseFontBtn = document.getElementById('increase-font');
        
        // Переменные для отслеживания состояния
        this.currentTopic = 'linux';
        this.currentQuestionIndex = 0;
        this.userAnswers = {};
        this.tests = {};
        this.questionOrder = {}; // Для хранения случайного порядка вопросов
        
        // Привязка методов к текущему экземпляру
        this.showPreviousQuestion = this.showPreviousQuestion.bind(this);
        this.showNextQuestion = this.showNextQuestion.bind(this);
        this.showQuestion = this.showQuestion.bind(this);
    }
    
    // Инициализация и настройка тестов
    init() {
        console.log('Инициализация TestManager');
        if (!this.loadTests()) return;
        
        // Инициализация массива ответов пользователя и случайного порядка вопросов
        Object.keys(this.tests).forEach(topic => {
            this.userAnswers[topic] = new Array(this.tests[topic].length).fill(null);
            this.randomizeQuestions(topic);
        });
        
        // Убедимся, что начальная кнопка темы активна
        this.topicButtons.forEach(btn => {
            if (btn.getAttribute('data-topic') === this.currentTopic) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        
        // Отображение первого вопроса
        this.showQuestion();
        
        // Обработчики событий для кнопок навигации
        this.prevButton.addEventListener('click', this.showPreviousQuestion);
        this.nextButton.addEventListener('click', this.showNextQuestion);
        
        // Обработчики для кнопок выбора темы
        this.topicButtons.forEach(button => {
            button.addEventListener('click', () => {
                const topic = button.getAttribute('data-topic');
                if (topic !== this.currentTopic) {
                    this.currentTopic = topic;
                    this.currentQuestionIndex = 0;
                    
                    // Обновление активной кнопки
                    this.topicButtons.forEach(btn => btn.classList.remove('active'));
                    button.classList.add('active');
                    
                    this.showQuestion();
                }
            });
        });
        
        // Обработчики изменения размера шрифта
        let fontSize = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--font-size')) || 1.0;
        const minSize = 0.8;
        const maxSize = 2.5;
        
        const updateFontSize = () => {
            document.documentElement.style.setProperty('--font-size', `${fontSize}em`);
            localStorage.setItem('fontSize', fontSize);
        };
        
        this.decreaseFontBtn.addEventListener('click', () => {
            if (fontSize > minSize) {
                fontSize = Math.round((fontSize - 0.1) * 10) / 10;
                updateFontSize();
            }
        });
        
        this.increaseFontBtn.addEventListener('click', () => {
            if (fontSize < maxSize) {
                fontSize = Math.round((fontSize + 0.1) * 10) / 10;
                updateFontSize();
            }
        });
        
        // Восстановление размера при загрузке
        const savedSize = localStorage.getItem('fontSize');
        if (savedSize) {
            fontSize = parseFloat(savedSize);
            updateFontSize();
        }
    }
    
    // Загрузка тестов из глобальных переменных
    loadTests() {
        console.log('Загрузка тестов из глобальных переменных');
        if (window.LinuxTests && window.LinuxTests.length > 0) {
            console.log('Загружены LinuxTests:', window.LinuxTests.length);
            this.tests.linux = window.LinuxTests;
        }
        
        if (window.SQLTests && window.SQLTests.length > 0) {
            console.log('Загружены SQLTests:', window.SQLTests.length);
            this.tests.sql = window.SQLTests;
        }
        
        if (window.APITests && window.APITests.length > 0) {
            console.log('Загружены APITests:', window.APITests.length);
            this.tests.api = window.APITests;
        }
        
        if (window.BDTests && window.BDTests.length > 0) {
            console.log('Загружены BDTests:', window.BDTests.length);
            this.tests.bd = window.BDTests;
        }
        
        if (window.GrafanaTests && window.GrafanaTests.length > 0) {
            console.log('Загружены GrafanaTests:', window.GrafanaTests.length);
            this.tests.grafana = window.GrafanaTests;
        }
        
        // Проверка наличия тестов
        if (!this.tests[this.currentTopic] || this.tests[this.currentTopic].length === 0) {
            console.error(`Тесты для темы "${this.currentTopic}" не найдены`);
            this.questionElement.textContent = `Тесты для темы "${this.currentTopic}" не найдены`;
            return false;
        }
        
        console.log(`Тесты для темы "${this.currentTopic}" успешно загружены (${this.tests[this.currentTopic].length} вопросов)`);
        return true;
    }
    
    // Функция для перемешивания массива (алгоритм Фишера-Йейтса)
    shuffleArray(array) {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }
    
    // Создание случайного порядка вопросов
    randomizeQuestions(topic) {
        const testLength = this.tests[topic].length;
        const indices = Array.from({ length: testLength }, (_, i) => i);
        this.questionOrder[topic] = this.shuffleArray(indices);
    }
    
    // Получение текущего вопроса с учетом случайного порядка
    getCurrentQuestion() {
        if (!this.questionOrder[this.currentTopic] || 
            this.currentQuestionIndex >= this.tests[this.currentTopic].length) {
            return null;
        }
        
        const randomIndex = this.questionOrder[this.currentTopic][this.currentQuestionIndex];
        return this.tests[this.currentTopic][randomIndex];
    }
    
    // Получение индекса правильного ответа для текущего вопроса
    getCurrentQuestionOriginalIndex() {
        return this.questionOrder[this.currentTopic][this.currentQuestionIndex];
    }
    
    // Показать сообщение о правильности ответа
    showFeedback(isCorrect, correctOptionIndex) {
        // Показываем результат
        this.resultElement.textContent = isCorrect ? 'Правильно!' : 'Неправильно!';
        this.resultElement.style.display = 'block';
        this.resultElement.style.color = isCorrect ? '#a0e0a0' : '#e0a0a0';
        
        // Подсвечиваем правильный и неправильный ответы
        const options = document.querySelectorAll('.option');
        
        options.forEach((option, index) => {
            if (index === correctOptionIndex) {
                option.classList.add('correct');
            } else if (!isCorrect && option.classList.contains('selected')) {
                option.classList.add('incorrect');
            }
        });
        
        // Переходим к следующему вопросу через 1.5 секунды
        setTimeout(() => {
            if (this.currentQuestionIndex < this.tests[this.currentTopic].length - 1) {
                this.currentQuestionIndex++;
                this.showQuestion();
            } else {
                this.showResults();
            }
        }, 1500);
    }
    
    // Отображение текущего вопроса
    showQuestion() {
        if (!this.tests[this.currentTopic] || !this.tests[this.currentTopic].length) {
            console.error(`Тесты для темы "${this.currentTopic}" не найдены или пустые`);
            this.questionElement.textContent = `Тесты для темы "${this.currentTopic}" не найдены`;
            return;
        }
        
        // Проверим порядок вопросов
        if (!this.questionOrder[this.currentTopic]) {
            console.error(`Порядок вопросов для темы "${this.currentTopic}" не был инициализирован`);
            this.randomizeQuestions(this.currentTopic);
        }
        
        // Проверим индекс вопроса
        if (this.currentQuestionIndex >= this.tests[this.currentTopic].length) {
            console.error(`Индекс вопроса ${this.currentQuestionIndex} выходит за пределы массива (длина: ${this.tests[this.currentTopic].length})`);
            this.currentQuestionIndex = 0;
        }
        
        const question = this.getCurrentQuestion();
        if (!question) {
            console.error('Не удалось получить текущий вопрос');
            this.questionElement.textContent = 'Ошибка при загрузке вопроса';
            return;
        }
        
        console.log('Отображение вопроса:', question);
        
        // Обновление текста вопроса с прогрессом
        this.questionElement.textContent = `Вопрос ${this.currentQuestionIndex + 1} из ${this.tests[this.currentTopic].length}: ${question.question}`;
        
        // Очистка вариантов ответов
        this.optionsElement.innerHTML = '';
        
        // Добавление вариантов ответов
        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.classList.add('option');
            optionElement.textContent = option;
            
            const originalQuestionIndex = this.getCurrentQuestionOriginalIndex();
            
            // Если пользователь уже выбрал этот вариант
            if (this.userAnswers[this.currentTopic][originalQuestionIndex] === index) {
                optionElement.classList.add('selected');
            }
            
            // Обработчик клика по варианту ответа
            optionElement.addEventListener('click', () => {
                // Если ответ уже выбран, не реагируем на повторные клики
                if (document.querySelector('.option.correct') || document.querySelector('.option.incorrect')) {
                    return;
                }
                
                // Сохранение ответа пользователя
                this.userAnswers[this.currentTopic][originalQuestionIndex] = index;
                
                // Обновление стилей
                document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
                optionElement.classList.add('selected');
                
                // Проверка правильности ответа и показ обратной связи
                const isCorrect = index === question.correctAnswer;
                this.showFeedback(isCorrect, question.correctAnswer);
            });
            
            this.optionsElement.appendChild(optionElement);
        });
        
        // Обновление состояния кнопок навигации
        this.prevButton.disabled = this.currentQuestionIndex === 0;
        this.nextButton.textContent = this.currentQuestionIndex === this.tests[this.currentTopic].length - 1 ? 'Завершить' : 'Следующий';
        
        // Скрытие результата
        this.resultElement.style.display = 'none';
    }
    
    // Показать предыдущий вопрос
    showPreviousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.showQuestion();
        }
    }
    
    // Показать следующий вопрос или результаты
    showNextQuestion() {
        const test = this.tests[this.currentTopic];
        
        if (this.currentQuestionIndex < test.length - 1) {
            this.currentQuestionIndex++;
            this.showQuestion();
        } else {
            this.showResults();
        }
    }
    
    // Показать результаты теста
    showResults() {
        const test = this.tests[this.currentTopic];
        let correctCount = 0;
        
        // Подсчет правильных ответов
        Object.keys(this.userAnswers[this.currentTopic]).forEach(index => {
            const originalIndex = this.questionOrder[this.currentTopic][index];
            const userAnswer = this.userAnswers[this.currentTopic][originalIndex];
            if (userAnswer === test[originalIndex].correctAnswer) {
                correctCount++;
            }
        });
        
        // Отображение результата
        const percentage = Math.round((correctCount / test.length) * 100);
        this.resultElement.textContent = `Результат: ${correctCount} из ${test.length} правильных ответов (${percentage}%)`;
        this.resultElement.style.display = 'block';
        this.resultElement.style.color = percentage >= 70 ? '#a0e0a0' : '#e0a0a0';
    }
}

// Это важно - не инициализируем тесты здесь,
// инициализация будет вызвана из tests.html после загрузки всех файлов
