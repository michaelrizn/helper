// Функция для динамической загрузки скриптов
function loadScripts(files) {
    return Promise.all(
        files.map((file) => {
            return new Promise((resolve, reject) => {
                const script = document.createElement("script");
                script.src = `data/${file}`;
                script.onload = () => resolve();
                script.onerror = () => {
                    console.error(
                        `Не удалось загрузить скрипт: ${file}`,
                    );
                    resolve(); // Продолжаем даже если загрузка скрипта не удалась
                };
                document.head.appendChild(script);
            });
        }),
    );
}

// Функция для экранирования специальных символов в RegExp
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// Функция для подсветки слов
function highlight(text, words) {
    let highlightedText = text;
    words.forEach((word) => {
        if (word === "") return;
        const regex = new RegExp(`(${escapeRegExp(word)})`, "gi");
        highlightedText = highlightedText.replace(regex, "<mark>$1</mark>");
    });
    return highlightedText;
}

// Инициализация приложения после загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
    // Добавляем обработчик для кнопки Tests
    const testsButton = document.getElementById('tests-button');
    if (testsButton) {
        testsButton.addEventListener('click', () => {
            window.location.href = 'tests.html';
        });
    }
    
    // Проверяем, что data/files.js загрузился и window.files доступен
    if (window.files && Array.isArray(window.files)) {
        loadScripts(window.files)
            .then(() => {
                // Список категорий, соответствующих вашим файлам данных
                const categories = [
                    "Linux",
                    "Docker",
                    "Git",
                    "Kubernetes",
                    "Network",
                    "Other",
                    "Postman",
                    "SQL",
                    "ABC",
                    "QuestsAndAnswers",
                    "Api",
                    "Formats",
                    "BD",
                    "Architecture",
                    "Grafana",
                ];
                const ItCommands = {};

                categories.forEach((category) => {
                    if (typeof window[category] !== "undefined") {
                        // Если переменная определена, добавляем её в ItCommands
                        ItCommands[category] = window[category];
                    } else {
                        console.warn(
                            `Категория "${category}" не определена в соответствующем JS-файле.`,
                        );
                    }
                });

                // Для отладки: выводим ItCommands в консоль
                console.log("ItCommands:", ItCommands);

                // Проверка наличия данных
                const blocksContainer = document.getElementById("blocks-container");
                const searchInput = document.getElementById("search");
                const increaseFontBtn = document.getElementById("increase-font");
                const decreaseFontBtn = document.getElementById("decrease-font");

                if (!ItCommands || Object.keys(ItCommands).length === 0) {
                    blocksContainer.innerHTML = '<p style="color: red;">Нет доступных команд для отображения.</p>';
                } else {
                    displayBlocks(ItCommands);
                }

                // Функция для создания блока
                function createBlock(title, commands) {
                    const block = document.createElement("div");
                    block.classList.add("block");
                    block.id = title.replace(/\s+/g, "-").toLowerCase(); // ID для оглавления

                    const header = document.createElement("h2");
                    header.textContent = title;
                    block.appendChild(header);

                    for (const [cmd, desc] of Object.entries(commands)) {
                        const cmdDiv = document.createElement("div");
                        cmdDiv.classList.add("command");

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
                        block.appendChild(cmdDiv);
                    }

                    return block;
                }

                // Функция для отображения всех блоков
                function displayBlocks(data) {
                    blocksContainer.innerHTML = "";
                    for (const [category, subCategories] of Object.entries(data)) {
                        for (const [subCategory, subCommands] of Object.entries(subCategories)) {
                            const block = createBlock(subCategory, subCommands);
                            blocksContainer.appendChild(block);
                        }
                    }
                }

                // TOC functionality has been removed

                // Функция для фильтрации блоков и команд с подсветкой
                function filterBlocks(query) {
                    const words = query
                        .toLowerCase()
                        .split(" ")
                        .filter((word) => word.trim() !== "");
                        
                    // Если поисковый запрос пустой, показываем все блоки
                    if (words.length === 0) {
                        document.querySelectorAll(".block").forEach((block) => {
                            block.classList.remove("hidden");
                            // Показываем все команды в блоке
                            block.querySelectorAll(".command").forEach(cmd => {
                                cmd.classList.remove("hidden-command");
                                // Сбрасываем подсветку
                                cmd.querySelector(".cmd").innerHTML = cmd.querySelector(".cmd").textContent;
                                cmd.querySelector(".description").innerHTML = cmd.querySelector(".description").textContent;
                            });
                        });
                        return;
                    }
                    
                    const blocks = document.querySelectorAll(".block");

                    blocks.forEach((block) => {
                        const commands = block.querySelectorAll(".command");
                        const header = block.querySelector("h2");
                        const headerText = header.textContent.toLowerCase();
                        let blockMatchesHeader = false;
                        let wordsToMatchCommands = [];

                        // Разделение слов на те, что совпадают с заголовком, и остальные
                        words.forEach((word) => {
                            if (headerText.includes(word)) {
                                blockMatchesHeader = true;
                            } else {
                                wordsToMatchCommands.push(word);
                            }
                        });

                        if (blockMatchesHeader) {
                            // Подсветка слов в заголовке
                            header.innerHTML = highlight(
                                header.textContent,
                                words.filter((word) =>
                                    headerText.includes(word),
                                ),
                            );
                        } else {
                            // Удаление подсветки из заголовка
                            header.innerHTML = header.textContent;
                        }

                        let blockShouldBeVisible = blockMatchesHeader;
                        let anyCommandVisible = false;

                        commands.forEach((command) => {
                            const cmdElement = command.querySelector(".cmd");
                            const descElement = command.querySelector(".description");

                            const cmdText = cmdElement.textContent.toLowerCase();
                            const descText = descElement.textContent.toLowerCase();
                            const combinedText = cmdText + " " + descText;

                            let matches = false;

                            if (blockMatchesHeader && wordsToMatchCommands.length > 0) {
                                // Проверка, соответствует ли команда всем дополнительным словам
                                matches = wordsToMatchCommands.every(
                                    (word) => combinedText.includes(word),
                                );
                            } else if (!blockMatchesHeader) {
                                // Проверка, соответствует ли команда всем словам
                                matches = words.every((word) =>
                                    combinedText.includes(word),
                                );
                            } else {
                                // Если блок соответствует заголовку и нет дополнительных слов
                                matches = true;
                            }

                            if (matches) {
                                // Подсветка найденных слов в командах
                                if (blockMatchesHeader && wordsToMatchCommands.length > 0) {
                                    cmdElement.innerHTML = highlight(
                                        cmdElement.textContent,
                                        wordsToMatchCommands,
                                    );
                                    descElement.innerHTML = highlight(
                                        descElement.textContent,
                                        wordsToMatchCommands,
                                    );
                                } else {
                                    cmdElement.innerHTML = highlight(
                                        cmdElement.textContent,
                                        words,
                                    );
                                    descElement.innerHTML = highlight(
                                        descElement.textContent,
                                        words,
                                    );
                                }
                                command.classList.remove("hidden-command");
                                anyCommandVisible = true;
                            } else {
                                // Удаление подсветки из команд
                                cmdElement.innerHTML = cmdElement.textContent;
                                descElement.innerHTML = descElement.textContent;
                                command.classList.add("hidden-command");
                            }
                        });

                        if (blockMatchesHeader && wordsToMatchCommands.length > 0) {
                            // Если блок соответствует заголовку и есть дополнительные слова,
                            // отображаем блок, если есть хотя бы одна видимая команда
                            blockShouldBeVisible = anyCommandVisible;
                        } else if (blockMatchesHeader) {
                            // Если блок соответствует только заголовку и нет дополнительных слов,
                            // отображаем весь блок
                            blockShouldBeVisible = true;
                        } else {
                            // Если блок не соответствует заголовку,
                            // отображаем его только если есть видимые команды
                            blockShouldBeVisible = anyCommandVisible;
                        }

                        if (blockShouldBeVisible) {
                            block.classList.remove("hidden");
                        } else {
                            block.classList.add("hidden");
                        }
                    });
                }

                // TOC-related functions have been removed

                // Обработчик ввода в поиск
                searchInput.addEventListener("input", (e) => {
                    const query = e.target.value;
                    filterBlocks(query);
                });

                // Функции для изменения размера шрифта
                increaseFontBtn.addEventListener("click", () => {
                    let currentSize = parseFloat(
                        getComputedStyle(
                            document.documentElement,
                        ).getPropertyValue("--font-size"),
                    );
                    if (currentSize < 200) {
                        // Максимальный размер 200%
                        currentSize += 10;
                        document.documentElement.style.setProperty(
                            "--font-size",
                            `${currentSize}%`,
                        );
                    }
                });

                // Обработчики для управления колонками
                const increaseColumnsBtn = document.getElementById("increase-columns");
                const decreaseColumnsBtn = document.getElementById("decrease-columns");

                // Функция для обновления количества колонок
                function updateColumns(change) {
                    const container = document.getElementById("blocks-container");
                    let currentColumns = getComputedStyle(container).getPropertyValue("column-count");
                    currentColumns = parseInt(currentColumns) || 3; // По умолчанию 3 колонки

                    let newColumns = currentColumns + change;
                    // Ограничиваем количество колонок от 1 до 4
                    newColumns = Math.max(1, Math.min(4, newColumns));

                    container.style.columnCount = newColumns;
                }

                increaseColumnsBtn.addEventListener("click", () => {
                    updateColumns(1);
                });

                decreaseColumnsBtn.addEventListener("click", () => {
                    updateColumns(-1);
                });

                decreaseFontBtn.addEventListener("click", () => {
                    let currentSize = parseFloat(
                        getComputedStyle(
                            document.documentElement,
                        ).getPropertyValue("--font-size"),
                    );
                    if (currentSize > 50) {
                        // Минимальный размер 50%
                        currentSize -= 10;
                        document.documentElement.style.setProperty(
                            "--font-size",
                            `${currentSize}%`,
                        );
                    }
                });
            })
            .catch((error) => {
                console.error(
                    "Ошибка при загрузке скриптов данных:",
                    error,
                );
                document.getElementById("blocks-container").innerHTML =
                    '<p style="color: red;">Не удалось загрузить файлы данных.</p>';
            });
    } else {
        console.error(
            'Файл data/files.js не загружен или не содержит корректного массива "files".',
        );
        document.getElementById("blocks-container").innerHTML =
            '<p style="color: red;">Не удалось загрузить файлы данных.</p>';
    }
});