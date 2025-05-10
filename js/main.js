// Кэш для DOM-элементов
const domCache = {};

// Функция для получения DOM-элементов с кэшированием
function getElement(selector) {
    if (!domCache[selector]) {
        domCache[selector] = document.querySelector(selector);
    }
    return domCache[selector];
}

// Функция для получения нескольких DOM-элементов с кэшированием
function getElements(selector) {
    if (!domCache[selector]) {
        domCache[selector] = document.querySelectorAll(selector);
    }
    return domCache[selector];
}

// Функция debounce для оптимизации частых вызовов
function debounce(func, wait = 300) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Функция для экранирования специальных символов в RegExp
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// Функция для подсветки слов (оптимизированная)
function highlight(text, words) {
    if (!words || words.length === 0 || !text) return text;
    
    // Фильтруем пустые слова и создаём шаблон поиска один раз
    const filteredWords = words.filter(word => word !== "");
    if (filteredWords.length === 0) return text;
    
    const regex = new RegExp(
        `(${filteredWords.map(word => escapeRegExp(word)).join("|")})`,
        "gi"
    );
    
    return text.replace(regex, "<mark>$1</mark>");
}

// Функции для работы с localStorage
const storageKeys = {
    FONT_SIZE: 'shpargalka_fontSize',
    COLUMN_COUNT: 'shpargalka_columnCount'
};

function saveSettings(key, value) {
    try {
        localStorage.setItem(key, value);
    } catch (e) {
        console.warn('Не удалось сохранить настройки:', e);
    }
}

function loadSettings(key, defaultValue) {
    try {
        const value = localStorage.getItem(key);
        return value !== null ? value : defaultValue;
    } catch (e) {
        console.warn('Не удалось загрузить настройки:', e);
        return defaultValue;
    }
}

// Главная функция инициализации приложения
function initApp() {
    console.log('Инициализация приложения...');
    
    // Получаем ссылки на основные DOM элементы
    const blocksContainer = document.getElementById("blocks-container");
    const searchInput = document.getElementById("search");
    const increaseFontBtn = document.getElementById("increase-font");
    const decreaseFontBtn = document.getElementById("decrease-font");
    const testsButton = document.getElementById("tests-button");
    const increaseColumnsBtn = document.getElementById("increase-columns");
    const decreaseColumnsBtn = document.getElementById("decrease-columns");
    
    // Проверяем наличие контейнера
    if (!blocksContainer) {
        console.error('Контейнер блоков не найден в DOM!');
        return;
    }
    
    console.log('Основные элементы интерфейса получены');
    
    // Загружаем настройки размера шрифта (это можно сделать независимо)
    const fontSize = loadSettings(storageKeys.FONT_SIZE, 90);
    document.documentElement.style.setProperty("--font-size", `${fontSize}%`);
    
    // Добавляем обработчик для кнопки Tests
    if (testsButton) {
        testsButton.addEventListener('click', () => {
            window.location.href = 'tests.html';
        });
    }

    // Проверяем, есть ли уже загруженные блоки (от fix_loader.js)
    if (document.querySelector('.block')) {
        console.log('Блоки уже отображены, настраиваем только обработчики событий');
        setupEventHandlers();
        return;
    }
    
    // Проверяем, доступны ли данные (категории)
    console.log('Проверяем наличие категорий...');
    const categories = [
        "Linux", "Docker", "Git", "Kubernetes", "Network",
        "Other", "Postman", "SQL", "ABC", "QuestsAndAnswers",
        "Api", "Formats", "BD", "Architecture", "Grafana",
    ];
    
    const ItCommands = {};
    let hasAnyCategory = false;
    
    categories.forEach((category) => {
        if (window[category] && typeof window[category] === "object" && Object.keys(window[category]).length > 0) {
            ItCommands[category] = window[category];
            hasAnyCategory = true;
            console.log(`Категория "${category}" добавлена. Количество подкатегорий: ${Object.keys(window[category]).length}`);
        } else {
            console.warn(`Категория "${category}" отсутствует или пуста`);
        }
    });
    
    // Если данных нет, показываем сообщение об ошибке
    if (!hasAnyCategory) {
        console.error('Нет доступных категорий для отображения');
        blocksContainer.innerHTML = '<p style="color: red;">Нет доступных команд для отображения. Возможно, файлы данных не были загружены.</p>';
        return;
    }
    
    // Отображаем блоки с данными
    console.log('Отображаем блоки на основе доступных данных');
    displayBlocks(ItCommands);
    
    // Загружаем количество колонок после отображения блоков
    setTimeout(() => {
        const columnCount = loadSettings(storageKeys.COLUMN_COUNT, 3);
        blocksContainer.style.columnCount = columnCount;
        console.log(`Установлено количество колонок: ${columnCount}`);
    }, 0);
    
    // Настраиваем обработчики событий
    setupEventHandlers();

    // Функция для создания блока
    function createBlock(title, commands) {
        const block = document.createElement("div");
        block.classList.add("block");
        block.id = title.replace(/\s+/g, "-").toLowerCase();

        const header = document.createElement("h2");
        header.textContent = title;
        block.appendChild(header);

        // Создаем фрагмент документа для оптимизации DOM-операций
        const fragment = document.createDocumentFragment();

        for (const [cmd, desc] of Object.entries(commands)) {
            const cmdDiv = document.createElement("div");
            cmdDiv.classList.add("command");
            cmdDiv.setAttribute('data-cmd', cmd.toLowerCase());
            cmdDiv.setAttribute('data-desc', desc.toLowerCase());

            const cmdSpan = document.createElement("span");
            cmdSpan.classList.add("cmd");
            cmdSpan.textContent = cmd;

            const colonSpan = document.createElement("span");
            colonSpan.classList.add("colon");
            colonSpan.textContent = ": ";

            const descSpan = document.createElement("span");
            descSpan.classList.add("description");
            descSpan.textContent = desc;

            cmdDiv.appendChild(cmdSpan);
            cmdDiv.appendChild(colonSpan);
            cmdDiv.appendChild(descSpan);
            fragment.appendChild(cmdDiv);
        }

        block.appendChild(fragment);
        return block;
    }

    // Функция для отображения всех блоков
    function displayBlocks(data) {
        console.log('Начинаем создание блоков');
        
        // Создаем фрагмент документа для оптимизации DOM-операций
        const fragment = document.createDocumentFragment();
        let totalBlocks = 0;
        
        for (const [category, subCategories] of Object.entries(data)) {
            console.log(`Обработка категории ${category} с ${Object.keys(subCategories).length} подкатегориями`);
            
            for (const [subCategory, subCommands] of Object.entries(subCategories)) {
                const block = createBlock(subCategory, subCommands);
                fragment.appendChild(block);
                totalBlocks++;
            }
        }
        
        console.log(`Создано блоков: ${totalBlocks}`);
        
        // Отчищаем контейнер и добавляем все блоки за одну операцию
        blocksContainer.innerHTML = '';
        blocksContainer.appendChild(fragment);
        console.log('Блоки добавлены в DOM');
    }
    
    function setupEventHandlers() {
        // Обработчик ввода в поиск (с дебаунсингом)
        if (searchInput) {
            searchInput.addEventListener("input", debounce((e) => {
                const query = e.target.value;
                filterBlocks(query);
            }, 200));
            console.log('Установлен обработчик для поиска');
        }

        // Обработчики для кнопок изменения размера шрифта
        if (increaseFontBtn) {
            increaseFontBtn.addEventListener("click", () => updateFontSize(10));
            console.log('Установлен обработчик для увеличения шрифта');
        }
        
        if (decreaseFontBtn) {
            decreaseFontBtn.addEventListener("click", () => updateFontSize(-10));
            console.log('Установлен обработчик для уменьшения шрифта');
        }

        // Обработчики для управления колонками
        if (increaseColumnsBtn) {
            increaseColumnsBtn.addEventListener("click", () => updateColumns(1));
            console.log('Установлен обработчик для увеличения колонок');
        }
        
        if (decreaseColumnsBtn) {
            decreaseColumnsBtn.addEventListener("click", () => updateColumns(-1));
            console.log('Установлен обработчик для уменьшения колонок');
        }
    }

    // Функция для фильтрации блоков и команд с подсветкой (оптимизированная)
    function filterBlocks(query) {
        const words = query
            .toLowerCase()
            .split(" ")
            .filter((word) => word.trim() !== "");
            
        const blocks = document.querySelectorAll(".block");
        
        // Если поисковый запрос пустой, показываем все блоки
        if (words.length === 0) {
            blocks.forEach((block) => {
                block.classList.remove("hidden");
                block.querySelectorAll(".command").forEach(cmd => {
                    cmd.classList.remove("hidden-command");
                    cmd.querySelector(".cmd").textContent = cmd.querySelector(".cmd").textContent;
                    cmd.querySelector(".description").textContent = cmd.querySelector(".description").textContent;
                });
            });
            return;
        }
        
        blocks.forEach((block) => {
            const commands = block.querySelectorAll(".command");
            const header = block.querySelector("h2");
            const headerText = header.textContent.toLowerCase();
            
            let blockMatchesHeader = words.some(word => headerText.includes(word));
            let wordsToMatchCommands = words.filter(word => !headerText.includes(word));

            // Подсветка заголовка, если есть совпадения
            header.innerHTML = blockMatchesHeader ? 
                highlight(header.textContent, words) : 
                header.textContent;

            let anyCommandVisible = false;

            commands.forEach((command) => {
                const cmdElement = command.querySelector(".cmd");
                const descElement = command.querySelector(".description");
                const cmdText = command.getAttribute('data-cmd') || cmdElement.textContent.toLowerCase();
                const descText = command.getAttribute('data-desc') || descElement.textContent.toLowerCase();
                const combinedText = cmdText + " " + descText;

                let matches = false;

                if (blockMatchesHeader && wordsToMatchCommands.length > 0) {
                    // Проверка, соответствует ли команда всем дополнительным словам
                    matches = wordsToMatchCommands.every(word => combinedText.includes(word));
                } else if (!blockMatchesHeader) {
                    // Проверка, соответствует ли команда всем словам
                    matches = words.every(word => combinedText.includes(word));
                } else {
                    // Если блок соответствует заголовку и нет дополнительных слов
                    matches = true;
                }

                if (matches) {
                    // Подсветка найденных слов
                    if (blockMatchesHeader && wordsToMatchCommands.length > 0) {
                        cmdElement.innerHTML = highlight(cmdElement.textContent, wordsToMatchCommands);
                        descElement.innerHTML = highlight(descElement.textContent, wordsToMatchCommands);
                    } else {
                        cmdElement.innerHTML = highlight(cmdElement.textContent, words);
                        descElement.innerHTML = highlight(descElement.textContent, words);
                    }
                    command.classList.remove("hidden-command");
                    anyCommandVisible = true;
                } else {
                    cmdElement.textContent = cmdElement.textContent;
                    descElement.textContent = descElement.textContent;
                    command.classList.add("hidden-command");
                }
            });

            // Определяем, должен ли блок быть видимым
            const blockShouldBeVisible = 
                (blockMatchesHeader && wordsToMatchCommands.length === 0) || anyCommandVisible;
            
            if (blockShouldBeVisible) {
                block.classList.remove("hidden");
            } else {
                block.classList.add("hidden");
            }
        });
    }

    // Функция для изменения размера шрифта
    function updateFontSize(change) {
        let currentSize = parseFloat(
            getComputedStyle(document.documentElement).getPropertyValue("--font-size")
        );
        
        currentSize += change;
        
        // Ограничиваем размер шрифта в пределах 50-200%
        currentSize = Math.max(50, Math.min(200, currentSize));
        
        document.documentElement.style.setProperty("--font-size", `${currentSize}%`);
        saveSettings(storageKeys.FONT_SIZE, currentSize);
    }

    // Функция для обновления количества колонок
    function updateColumns(change) {
        const container = blocksContainer;
        let currentColumns = getComputedStyle(container).getPropertyValue("column-count");
        currentColumns = parseInt(currentColumns) || 3;

        let newColumns = currentColumns + change;
        // Ограничиваем количество колонок от 1 до 4
        newColumns = Math.max(1, Math.min(4, newColumns));

        container.style.columnCount = newColumns;
        saveSettings(storageKeys.COLUMN_COUNT, newColumns);
    }
}

// Запускаем инициализацию при загрузке страницы
window.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded сработало, запускаем инициализацию...');
    setTimeout(initApp, 0); // Запускаем initApp с легкой задержкой
});

// Если DOMContentLoaded уже сработало, запускаем инициализацию напрямую
if (document.readyState === 'interactive' || document.readyState === 'complete') {
    console.log(`Документ уже в состоянии ${document.readyState}, запускаем инициализацию...`);
    setTimeout(initApp, 0);
}