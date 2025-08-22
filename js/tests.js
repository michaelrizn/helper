// JavaScript для управления тестами
class TestManager {
    constructor() {
        this.questionElement = document.getElementById('current-question');
        this.optionsElement = document.getElementById('options');
        this.prevButton = document.getElementById('prev-btn');
        this.nextButton = document.getElementById('next-btn');
        this.resultElement = document.getElementById('result');
        this.topicButtons = document.querySelectorAll('.topic-selector .topic-btn');
        
        this.decreaseFontBtn = document.getElementById('decrease-font');
        this.increaseFontBtn = document.getElementById('increase-font');
        
        this.currentTopic = 'linux';
        this.currentQuestionIndex = 0;
        this.userAnswers = {};
        this.tests = {};
        this.questionOrder = {};
        this.autoAdvanceTimeoutId = null;
        this.isAwaitingFeedback = false;
        
        this.showPreviousQuestion = this.showPreviousQuestion.bind(this);
        this.showNextQuestion = this.showNextQuestion.bind(this);
        this.showQuestion = this.showQuestion.bind(this);
    }
    
    init() {
        console.log('Инициализация TestManager');
        if (!this.loadTests()) return;
        
        Object.keys(this.tests).forEach(topic => {
            this.userAnswers[topic] = new Array(this.tests[topic].length).fill(null);
            this.randomizeQuestions(topic);
        });
        
        this.topicButtons.forEach(btn => {
            if (btn.getAttribute('data-topic') === this.currentTopic) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        
        this.showQuestion();
        
        this.prevButton.addEventListener('click', this.showPreviousQuestion);
        this.nextButton.addEventListener('click', this.showNextQuestion);
        
        this.topicButtons.forEach(button => {
            button.addEventListener('click', () => {
                const topic = button.getAttribute('data-topic');
                if (topic && topic !== this.currentTopic) {
                    this.clearAutoAdvance();
                    this.currentTopic = topic;
                    this.currentQuestionIndex = 0;
                    this.topicButtons.forEach(btn => btn.classList.remove('active'));
                    button.classList.add('active');
                    this.showQuestion();
                }
            });
        });
        
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
        
        const savedSize = localStorage.getItem('fontSize');
        if (savedSize) {
            fontSize = parseFloat(savedSize);
            updateFontSize();
        }
    }
    
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
        
        if (!this.tests[this.currentTopic] || this.tests[this.currentTopic].length === 0) {
            console.error(`Тесты для темы "${this.currentTopic}" не найдены`);
            this.questionElement.textContent = `Тесты для темы "${this.currentTopic}" не найдены`;
            return false;
        }
        
        console.log(`Тесты для темы "${this.currentTopic}" успешно загружены (${this.tests[this.currentTopic].length} вопросов)`);
        return true;
    }
    
    shuffleArray(array) {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }
    
    randomizeQuestions(topic) {
        const testLength = this.tests[topic].length;
        const indices = Array.from({ length: testLength }, (_, i) => i);
        this.questionOrder[topic] = this.shuffleArray(indices);
    }
    
    clearAutoAdvance() {
        if (this.autoAdvanceTimeoutId !== null) {
            clearTimeout(this.autoAdvanceTimeoutId);
            this.autoAdvanceTimeoutId = null;
        }
        this.isAwaitingFeedback = false;
    }
    
    getCurrentQuestion() {
        if (!this.questionOrder[this.currentTopic] || 
            this.currentQuestionIndex >= this.tests[this.currentTopic].length) {
            return null;
        }
        
        const randomIndex = this.questionOrder[this.currentTopic][this.currentQuestionIndex];
        return this.tests[this.currentTopic][randomIndex];
    }
    
    getCurrentQuestionOriginalIndex() {
        return this.questionOrder[this.currentTopic][this.currentQuestionIndex];
    }
    
    showFeedback(isCorrect, correctOptionIndex) {
        this.isAwaitingFeedback = true;
        this.prevButton.disabled = true;
        this.nextButton.disabled = true;
        this.resultElement.textContent = isCorrect ? 'Правильно!' : 'Неправильно!';
        this.resultElement.style.display = 'block';
        this.resultElement.style.color = isCorrect ? '#a0e0a0' : '#e0a0a0';
        
        const options = document.querySelectorAll('.option');
        
        options.forEach((option, index) => {
            if (index === correctOptionIndex) {
                option.classList.add('correct');
            } else if (!isCorrect && option.classList.contains('selected')) {
                option.classList.add('incorrect');
            }
        });
        
        this.clearAutoAdvance();
        this.autoAdvanceTimeoutId = setTimeout(() => {
            this.autoAdvanceTimeoutId = null;
            this.isAwaitingFeedback = false;
            if (this.currentQuestionIndex < this.tests[this.currentTopic].length - 1) {
                this.currentQuestionIndex++;
                this.showQuestion();
            } else {
                this.showResults();
            }
        }, 1500);
    }
    
    generateSecureRandom(max) {
        const array = new Uint32Array(1);
        crypto.getRandomValues(array);
        return array[0] % max;
    }
    
    shuffleOptionsWithCorrectAnswer(options, correctAnswerIndex) {
        const shuffledOptions = [...options];
        const indices = Array.from({length: options.length}, (_, i) => i);
        
        for (let i = indices.length - 1; i > 0; i--) {
            const j = this.generateSecureRandom(i + 1);
            [indices[i], indices[j]] = [indices[j], indices[i]];
        }
        
        const newCorrectAnswerIndex = indices.indexOf(correctAnswerIndex);
        const reorderedOptions = indices.map(index => options[index]);
        
        return {
            options: reorderedOptions,
            correctAnswerIndex: newCorrectAnswerIndex
        };
    }
    
    showQuestion() {
        this.clearAutoAdvance();
        if (!this.tests[this.currentTopic] || !this.tests[this.currentTopic].length) {
            console.error(`Тесты для темы "${this.currentTopic}" не найдены или пустые`);
            this.questionElement.textContent = `Тесты для темы "${this.currentTopic}" не найдены`;
            return;
        }
        
        if (!this.questionOrder[this.currentTopic]) {
            console.error(`Порядок вопросов для темы "${this.currentTopic}" не был инициализирован`);
            this.randomizeQuestions(this.currentTopic);
        }
        
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
        
        this.questionElement.textContent = `Вопрос ${this.currentQuestionIndex + 1} из ${this.tests[this.currentTopic].length}: ${question.question}`;
        
        this.optionsElement.innerHTML = '';
        
        const shuffledData = this.shuffleOptionsWithCorrectAnswer(question.options, question.correctAnswer);
        const shuffledOptions = shuffledData.options;
        const newCorrectAnswerIndex = shuffledData.correctAnswerIndex;
        
        const originalQuestionIndex = this.getCurrentQuestionOriginalIndex();
        const userAnswerText = this.userAnswers[this.currentTopic][originalQuestionIndex];
        const isQuestionAnswered = userAnswerText !== null;
        
        const userAnswerIndex = isQuestionAnswered ? shuffledOptions.indexOf(userAnswerText) : -1;
        
        shuffledOptions.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.classList.add('option');
            optionElement.textContent = option;
            
            if (isQuestionAnswered) {
                if (index === userAnswerIndex) {
                    optionElement.classList.add('selected');
                    if (index === newCorrectAnswerIndex) {
                        optionElement.classList.add('correct');
                    } else {
                        optionElement.classList.add('incorrect');
                    }
                } else if (index === newCorrectAnswerIndex) {
                    optionElement.classList.add('correct');
                }
            } else {
                optionElement.addEventListener('click', () => {
                    if (this.isAwaitingFeedback) {
                        return;
                    }
                    
                    this.userAnswers[this.currentTopic][originalQuestionIndex] = option;
                    
                    document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
                    optionElement.classList.add('selected');
                    
                    const isCorrect = index === newCorrectAnswerIndex;
                    this.showFeedback(isCorrect, newCorrectAnswerIndex);
                });
            }
            
            this.optionsElement.appendChild(optionElement);
         });
        
        this.prevButton.disabled = this.currentQuestionIndex === 0;
        this.nextButton.disabled = false;
        this.nextButton.textContent = this.currentQuestionIndex === this.tests[this.currentTopic].length - 1 ? 'Завершить' : 'Следующий';
        
        this.resultElement.style.display = 'none';
    }
    
    showPreviousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.clearAutoAdvance();
            this.currentQuestionIndex--;
            this.showQuestion();
        }
    }
    
    showNextQuestion() {
        const test = this.tests[this.currentTopic];
        this.clearAutoAdvance();
        if (this.currentQuestionIndex < test.length - 1) {
            this.currentQuestionIndex++;
            this.showQuestion();
        } else {
            this.showResults();
        }
    }
    
    showResults() {
        this.clearAutoAdvance();
        const test = this.tests[this.currentTopic];
        let correctCount = 0;
        
        Object.keys(this.userAnswers[this.currentTopic]).forEach(index => {
            const originalIndex = this.questionOrder[this.currentTopic][index];
            const userAnswer = this.userAnswers[this.currentTopic][originalIndex];
            if (userAnswer === test[originalIndex].correctAnswer) {
                correctCount++;
            }
        });
        
        const percentage = Math.round((correctCount / test.length) * 100);
        this.resultElement.textContent = `Результат: ${correctCount} из ${test.length} правильных ответов (${percentage}%)`;
        this.resultElement.style.display = 'block';
        this.resultElement.style.color = percentage >= 70 ? '#a0e0a0' : '#e0a0a0';
    }
}

// Это важно - не инициализируем тесты здесь,
// инициализация будет вызвана из tests.html после загрузки всех файлов
