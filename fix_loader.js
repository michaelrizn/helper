// Скрипт для исправления проблем с загрузкой данных

// Определяем категории по умолчанию
window.Linux = window.Linux || {};
window.Docker = window.Docker || {};
window.Git = window.Git || {};
window.Kubernetes = window.Kubernetes || {};
window.Network = window.Network || {};
window.Other = window.Other || {};
window.Postman = window.Postman || {};
window.SQL = window.SQL || {};
window.ABC = window.ABC || {};
window.QuestsAndAnswers = window.QuestsAndAnswers || {};
window.Api = window.Api || {};
window.Formats = window.Formats || {};
window.BD = window.BD || {};
window.Architecture = window.Architecture || {};
window.Grafana = window.Grafana || {};

// Служебные функции
function debounce(func, wait = 300) {
    let timeout;
    return function(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

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

// Работа с localStorage
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

// Функция для проверки загрузки данных
function checkDataLoad() {
    console.log("Диагностика проблем с загрузкой данных...");
    
    // Проверяем определение files
    if (!window.files) {
        console.error("Массив files не определен!");
        window.files = [
            "linux.js", "docker.js", "git.js", "kubernetes.js", "network.js",
            "other.js", "postman.js", "sql.js", "questsandanswers.js", "abc.js",
            "api.js", "formats.js", "bd.js", "architecture.js", "grafana.js"
        ];
        console.log("Восстановлен массив files по умолчанию");
    }
    
    // Проверяем категории (переменные в window)
    const categories = [
        "Linux", "Docker", "Git", "Kubernetes", "Network",
        "Other", "Postman", "SQL", "ABC", "QuestsAndAnswers",
        "Api", "Formats", "BD", "Architecture", "Grafana"
    ];
    
    let missingCategories = [];
    categories.forEach(category => {
        if (!window[category] || Object.keys(window[category]).length === 0) {
            missingCategories.push(category);
        }
    });
    
    if (missingCategories.length > 0) {
        console.warn(`Отсутствуют данные для категорий: ${missingCategories.join(", ")}`);
        
        // Пробуем загрузить данные напрямую
        missingCategories.forEach(category => {
            const script = document.createElement("script");
            script.src = `data/${category.toLowerCase()}.js`;
            document.head.appendChild(script);
            console.log(`Попытка загрузки ${category.toLowerCase()}.js`);
        });
    }
    
    // Создаем базовый пример данных для Linux если он пустой
    if (!window.Linux || Object.keys(window.Linux).length === 0) {
        window.Linux = {
            "Linux - Основные команды": {
                "ls": "Вывести список файлов",
                "cd": "Сменить директорию",
                "pwd": "Показать текущий путь",
                "mkdir": "Создать директорию"
            }
        };
        console.log("Создан минимальный набор данных для Linux");
    }
    
    // Проверяем DOM-элементы
    const blocksContainer = document.getElementById("blocks-container");
    if (!blocksContainer) {
        console.error("Контейнер блоков не найден!");
        return false;
    }
    
    // Ручное отображение блоков
    displayBlocks();
    
    // Настраиваем обработчики событий
    setupEventHandlers();
    
    return true;
}

// Функция для отображения блоков
function displayBlocks() {
    console.log("Ручное отображение блоков...");
    
    const blocksContainer = document.getElementById("blocks-container");
    if (!blocksContainer) return;
    
    // Создаем фрагмент документа для оптимизации DOM-операций
    const fragment = document.createDocumentFragment();
    const categories = [
        "Linux", "Docker", "Git", "Kubernetes", "Network",
        "Other", "Postman", "SQL", "ABC", "QuestsAndAnswers",
        "Api", "Formats", "BD", "Architecture", "Grafana"
    ];
    
    let totalBlocks = 0;
    
    categories.forEach(category => {
        if (window[category] && typeof window[category] === "object") {
            console.log(`Обработка категории ${category}`);
            
            for (const [subCategory, commands] of Object.entries(window[category])) {
                const block = createBlock(subCategory, commands);
                fragment.appendChild(block);
                totalBlocks++;
            }
        }
    });
    
    // Если не удалось создать ни одного блока, создаем временный блок
    if (totalBlocks === 0) {
        const block = document.createElement("div");
        block.classList.add("block");
        
        const header = document.createElement("h2");
        header.textContent = "Ошибка загрузки данных";
        block.appendChild(header);
        
        const message = document.createElement("div");
        message.classList.add("command");
        message.innerHTML = `
            <span class="cmd">Ошибка:</span>
            <span class="colon">: </span>
            <span class="description">Данные не были загружены. Пожалуйста, перезагрузите страницу.</span>
        `;
        block.appendChild(message);
        
        fragment.appendChild(block);
    } else {
        console.log(`Создано блоков: ${totalBlocks}`);
    }
    
    // Очищаем контейнер и добавляем блоки
    blocksContainer.innerHTML = '';
    blocksContainer.appendChild(fragment);
    console.log("Блоки добавлены в DOM");
    
    // Загружаем сохраненные настройки колонок
    const columnCount = loadSettings(storageKeys.COLUMN_COUNT, 3);
    blocksContainer.style.columnCount = columnCount;
    console.log(`Установлено количество колонок: ${columnCount}`);
}

// Функция настройки всех обработчиков событий
function setupEventHandlers() {
    console.log("Настройка обработчиков событий...");
    
    // Подготовка элементов управления
    const searchInput = document.getElementById("search");
    const increaseFontBtn = document.getElementById("increase-font");
    const decreaseFontBtn = document.getElementById("decrease-font");
    const increaseColumnsBtn = document.getElementById("increase-columns");
    const decreaseColumnsBtn = document.getElementById("decrease-columns");
    const testsButton = document.getElementById("tests-button");
    
    // Загружаем размер шрифта из сохраненных настроек
    const fontSize = loadSettings(storageKeys.FONT_SIZE, 90);
    document.documentElement.style.setProperty("--font-size", `${fontSize}%`);
    
    // Поиск
    if (searchInput) {
        searchInput.addEventListener("input", debounce(function(e) {
            const query = e.target.value;
            filterBlocks(query);
        }, 200));
        console.log("✓ Настроен обработчик поиска");
    } else {
        console.error("× Элемент поиска не найден");
    }
    
    // Размер шрифта
    if (increaseFontBtn) {
        increaseFontBtn.addEventListener("click", function() {
            updateFontSize(10);
        });
        console.log("✓ Настроен обработчик увеличения шрифта");
    }
    
    if (decreaseFontBtn) {
        decreaseFontBtn.addEventListener("click", function() {
            updateFontSize(-10);
        });
        console.log("✓ Настроен обработчик уменьшения шрифта");
    }
    
    // Управление колонками
    if (increaseColumnsBtn) {
        increaseColumnsBtn.addEventListener("click", function() {
            updateColumns(1);
        });
        console.log("✓ Настроен обработчик увеличения колонок");
    }
    
    if (decreaseColumnsBtn) {
        decreaseColumnsBtn.addEventListener("click", function() {
            updateColumns(-1);
        });
        console.log("✓ Настроен обработчик уменьшения колонок");
    }
    
    // Кнопка Tests
    if (testsButton) {
        testsButton.addEventListener("click", function() {
            window.location.href = 'tests.html';
        });
        console.log("✓ Настроен обработчик кнопки Tests");
    }
    
    console.log("Все обработчики событий настроены");
}

// Функция для фильтрации блоков
function filterBlocks(query) {
    console.log("Поиск:", query);
    
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

// Функция изменения размера шрифта
function updateFontSize(change) {
    let currentSize = parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue("--font-size")
    );
    
    currentSize += change;
    
    // Ограничиваем размер шрифта в пределах 50-200%
    currentSize = Math.max(50, Math.min(200, currentSize));
    
    document.documentElement.style.setProperty("--font-size", `${currentSize}%`);
    saveSettings(storageKeys.FONT_SIZE, currentSize);
    console.log(`Размер шрифта изменен на ${currentSize}%`);
}

// Функция изменения количества колонок
function updateColumns(change) {
    const container = document.getElementById("blocks-container");
    let currentColumns = getComputedStyle(container).getPropertyValue("column-count");
    currentColumns = parseInt(currentColumns) || 3;

    let newColumns = currentColumns + change;
    // Ограничиваем количество колонок от 1 до 4
    newColumns = Math.max(1, Math.min(4, newColumns));

    container.style.columnCount = newColumns;
    saveSettings(storageKeys.COLUMN_COUNT, newColumns);
    console.log(`Количество колонок изменено на ${newColumns}`);
}

// Запускаем проверку и исправление проблем
checkDataLoad(); 