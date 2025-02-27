// JavaScript для управления тестами
document.addEventListener('DOMContentLoaded', () => {
    // Элементы интерфейса
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const prevButton = document.getElementById('prev-btn');
    const nextButton = document.getElementById('next-btn');
    const resultElement = document.getElementById('result');
    const topicButtons = document.querySelectorAll('.topic-btn');
    
    // Кнопки изменения размера шрифта
    const increaseFontBtn = document.getElementById('increase-font');
    const decreaseFontBtn = document.getElementById('decrease-font');
    
    // Переменные для отслеживания состояния
    let currentTopic = 'linux';
    let currentQuestionIndex = 0;
    let userAnswers = {};
    let tests = {};
    let questionOrder = {}; // Для хранения случайного порядка вопросов
    
    // Загрузка тестов из глобальных переменных
    function loadTests() {
        if (window.LinuxTests) tests.linux = window.LinuxTests;
        if (window.SQLTests) tests.sql = window.SQLTests;
        if (window.APITests) tests.api = window.APITests;
        if (window.BDTests) tests.bd = window.BDTests;
        
        // Проверка наличия тестов
        if (!tests[currentTopic]) {
            questionElement.textContent = 'Тесты не найдены';
            return false;
        }
        return true;
    }
    
    // Функция для перемешивания массива (алгоритм Фишера-Йейтса)
    function shuffleArray(array) {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }
    
    // Создание случайного порядка вопросов
    function randomizeQuestions(topic) {
        const testLength = tests[topic].length;
        const indices = Array.from({ length: testLength }, (_, i) => i);
        questionOrder[topic] = shuffleArray(indices);
    }
    
    // Получение текущего вопроса с учетом случайного порядка
    function getCurrentQuestion() {
        const randomIndex = questionOrder[currentTopic][currentQuestionIndex];
        return tests[currentTopic][randomIndex];
    }
    
    // Получение индекса правильного ответа для текущего вопроса
    function getCurrentQuestionOriginalIndex() {
        return questionOrder[currentTopic][currentQuestionIndex];
    }
    
    // Инициализация тестов
    function initTests() {
        if (!loadTests()) return;
        
        // Инициализация массива ответов пользователя и случайного порядка вопросов
        Object.keys(tests).forEach(topic => {
            userAnswers[topic] = new Array(tests[topic].length).fill(null);
            randomizeQuestions(topic);
        });
        
        // Отображение первого вопроса
        showQuestion();
        
        // Обработчики событий для кнопок навигации
        prevButton.addEventListener('click', showPreviousQuestion);
        nextButton.addEventListener('click', showNextQuestion);
        
        // Обработчики для кнопок выбора темы
        topicButtons.forEach(button => {
            button.addEventListener('click', () => {
                const topic = button.getAttribute('data-topic');
                if (topic !== currentTopic) {
                    currentTopic = topic;
                    currentQuestionIndex = 0;
                    
                    // Обновление активной кнопки
                    topicButtons.forEach(btn => btn.classList.remove('active'));
                    button.classList.add('active');
                    
                    showQuestion();
                }
            });
        });
    }
    
    // Показать сообщение о правильности ответа
    function showFeedback(isCorrect, correctOptionIndex) {
        // Показываем результат
        resultElement.textContent = isCorrect ? 'Правильно!' : 'Неправильно!';
        resultElement.style.display = 'block';
        resultElement.style.color = isCorrect ? '#00ff00' : '#ff6347';
        
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
            if (currentQuestionIndex < tests[currentTopic].length - 1) {
                currentQuestionIndex++;
                showQuestion();
            } else {
                showResults();
            }
        }, 1500);
    }
    
    // Отображение текущего вопроса
    function showQuestion() {
        if (!tests[currentTopic]) return;
        
        const question = getCurrentQuestion();
        
        // Обновление текста вопроса
        questionElement.textContent = question.question;
        
        // Очистка вариантов ответов
        optionsElement.innerHTML = '';
        
        // Добавление вариантов ответов
        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.classList.add('option');
            optionElement.textContent = option;
            
            const originalQuestionIndex = getCurrentQuestionOriginalIndex();
            
            // Если пользователь уже выбрал этот вариант
            if (userAnswers[currentTopic][originalQuestionIndex] === index) {
                optionElement.classList.add('selected');
            }
            
            // Обработчик клика по варианту ответа
            optionElement.addEventListener('click', () => {
                // Если ответ уже выбран, не реагируем на повторные клики
                if (document.querySelector('.option.correct') || document.querySelector('.option.incorrect')) {
                    return;
                }
                
                // Сохранение ответа пользователя
                userAnswers[currentTopic][originalQuestionIndex] = index;
                
                // Обновление стилей
                document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
                optionElement.classList.add('selected');
                
                // Проверка правильности ответа и показ обратной связи
                const isCorrect = index === question.correctAnswer;
                showFeedback(isCorrect, question.correctAnswer);
            });
            
            optionsElement.appendChild(optionElement);
        });
        
        // Обновление состояния кнопок навигации
        prevButton.disabled = currentQuestionIndex === 0;
        nextButton.textContent = currentQuestionIndex === tests[currentTopic].length - 1 ? 'Завершить' : 'Следующий';
        
        // Скрытие результата
        resultElement.style.display = 'none';
    }
    
    // Показать предыдущий вопрос
    function showPreviousQuestion() {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            showQuestion();
        }
    }
    
    // Показать следующий вопрос или результаты
    function showNextQuestion() {
        const test = tests[currentTopic];
        
        if (currentQuestionIndex < test.length - 1) {
            currentQuestionIndex++;
            showQuestion();
        } else {
            showResults();
        }
    }
    
    // Показать результаты теста
    function showResults() {
        const test = tests[currentTopic];
        let correctCount = 0;
        
        // Подсчет правильных ответов
        Object.keys(userAnswers[currentTopic]).forEach(index => {
            const originalIndex = questionOrder[currentTopic][index];
            const userAnswer = userAnswers[currentTopic][originalIndex];
            if (userAnswer === test[originalIndex].correctAnswer) {
                correctCount++;
            }
        });
        
        // Отображение результата
        const percentage = Math.round((correctCount / test.length) * 100);
        resultElement.textContent = `Результат: ${correctCount} из ${test.length} правильных ответов (${percentage}%)`;
        resultElement.style.display = 'block';
        resultElement.style.color = percentage >= 70 ? '#00ff00' : '#ff6347';
    }
    
    // Функции для изменения размера шрифта
    increaseFontBtn.addEventListener('click', () => {
        let currentSize = parseFloat(
            getComputedStyle(
                document.documentElement
            ).getPropertyValue('--font-size')
        );
        if (currentSize < 200) { // Максимальный размер 200%
            currentSize += 10;
            document.documentElement.style.setProperty('--font-size', `${currentSize}%`);
        }
    });
    
    decreaseFontBtn.addEventListener('click', () => {
        let currentSize = parseFloat(
            getComputedStyle(
                document.documentElement
            ).getPropertyValue('--font-size')
        );
        if (currentSize > 50) { // Минимальный размер 50%
            currentSize -= 10;
            document.documentElement.style.setProperty('--font-size', `${currentSize}%`);
        }
    });
    
    // Инициализация
    initTests();
});