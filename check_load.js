// Функция для проверки загрузки скриптов
function checkFiles() {
    console.log('Начинаем проверку загрузки скриптов...');
    
    // Проверяем наличие массива files
    if (!window.files || !Array.isArray(window.files)) {
        console.error('window.files отсутствует или не является массивом:', window.files);
        return false;
    }
    
    console.log('Массив files загружен. Количество файлов:', window.files.length);
    
    // Проверяем загрузку каждой категории
    const categories = [
        "Linux", "Docker", "Git", "Kubernetes", "Network",
        "Other", "Postman", "SQL", "ABC", "QuestsAndAnswers",
        "Api", "Formats", "BD", "Architecture", "Grafana",
    ];
    
    console.log('Проверяем категории:');
    let loadedCategories = 0;
    
    categories.forEach(category => {
        if (typeof window[category] !== 'undefined') {
            console.log(`✅ Категория "${category}" загружена. Количество подкатегорий: ${Object.keys(window[category]).length}`);
            loadedCategories++;
        } else {
            console.error(`❌ Категория "${category}" НЕ загружена.`);
        }
    });
    
    console.log(`Загружено ${loadedCategories} из ${categories.length} категорий.`);
    
    // Проверяем DOM-элемент для блоков
    const blocksContainer = document.getElementById('blocks-container');
    if (blocksContainer) {
        console.log('✅ Элемент blocks-container найден в DOM.');
        console.log('Текущее содержимое:', blocksContainer.innerHTML);
    } else {
        console.error('❌ Элемент blocks-container НЕ найден в DOM!');
    }
    
    return loadedCategories > 0;
}

// Вызываем функцию проверки
checkFiles(); 