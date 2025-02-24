window.Git = {
  "Git - Настройка": {
    "git config --global user.name '[name]'": "Задать имя пользователя",
    "git config --global user.email '[email]'": "Задать email",
    "git config --global alias.[alias] [command]": "Создать сокращение команды",
    "git config --global core.editor [editor]": "Задать редактор для сообщений",
    "git config --global --edit": "Открыть настройки Git",
    "git config --global color.ui auto": "Включить подсветку",
    "git config --global merge.tool [tool]": "Задать инструмент для слияния",
    "git config --global diff.tool [tool]": "Задать инструмент сравнения",
    "git config --global pull.rebase true": "Включить rebase при pull",
    "git config --global push.default simple": "Задать режим push",
  },
  "Git - Инициализация и клонирование": {
    "git init": "Создать новый репозиторий",
    "git clone [url]": "Скопировать удаленный репозиторий",
    "git clone [url] [directory]": "Скопировать в указанную папку",
    "git clone --depth 1 [url]": "Быстрое копирование без истории",
    "git remote -v": "Список удаленных репозиториев",
    "git remote add origin [url]": "Добавить главный репозиторий",
    "git remote set-url origin [new_url]": "Сменить адрес репозитория",
  },
  "Git - Работа с ветками": {
    "git branch": "Список веток",
    "git branch [branch-name]": "Создать ветку",
    "git branch -d [branch-name]": "Удалить ветку",
    "git checkout [branch-name]": "Перейти на ветку",
    "git checkout -b [branch-name]": "Создать и перейти на ветку",
    "git switch [branch-name]": "Перейти на ветку (новый способ)",
    "git switch -c [branch-name]": "Создать и перейти (новый способ)",
    "git merge [branch-name]": "Слить ветки",
    "git branch -m [old-name] [new-name]": "Переименовать",
    "git branch -a": "Все ветки",
    "git fetch origin": "Обновить данные о ветках",
  },
  "Git - Работа с изменениями": {
    "git status": "Состояние репозитория",
    "git add [file]": "Добавить файл",
    "git add .": "Добавить все файлы",
    "git reset [file]": "Убрать файл",
    "git reset --hard": "Отменить все изменения",
    "git diff": "Показать изменения",
    "git diff --staged": "Показать добавленные изменения",
    "git commit -m '[message]'": "Сохранить изменения",
    "git commit --amend": "Изменить последнее сохранение",
    "git stash": "Отложить изменения",
    "git stash pop": "Вернуть отложенные изменения",
    "git stash list": "Список отложенных изменений",
  },
  "Git - Работа с удалёнными репозиториями": {
    "git remote add [name] [url]": "Добавить репозиторий",
    "git fetch [name]": "Получить изменения",
    "git pull [name] [branch]": "Получить и слить изменения",
    "git push [name] [branch]": "Отправить изменения",
    "git push --set-upstream [name] [branch]": "Связать с удаленной веткой",
    "git remote remove [name]": "Удалить репозиторий",
    "git remote rename [old-name] [new-name]": "Переименовать репозиторий",
    "git push origin --delete [branch]": "Удалить удаленную ветку",
  },
  "Git - Просмотр истории": {
    "git log": "История изменений",
    "git log --oneline": "Краткая история",
    "git log --graph --oneline": "История в виде графа",
    "git blame [file]": "Кто менял файл",
    "git show [commit]": "Детали коммита",
    "git shortlog": "История по авторам",
    "git reflog": "Журнал всех действий",
    "git log --since='2 weeks ago'": "История за 2 недели",
    "git log --author='Author Name'": "История автора",
  },
  "Git - Работа с тегами": {
    "git tag": "Список тегов",
    "git tag [tag-name]": "Создать тег",
    "git tag -d [tag-name]": "Удалить тег",
    "git push [name] [tag-name]": "Отправить тег",
    "git push origin --tags": "Отправить все теги",
    "git show [tag-name]": "Информация о теге",
    "git tag -a [tag-name] -m '[message]'": "Создать тег с описанием",
    "git tag -s [tag-name] -m '[message]'": "Создать подписанный тег",
  },
  "Git - Примеры": {
    "Новый репозиторий":
      "Команды:\n`git init`\n`git add .`\n`git commit -m 'Start'`",
    Клонирование:
      "Команды:\n`git clone https://github.com/user/repo.git`\n`cd repo`",
    "Работа с ветками":
      "Команды:\n`git checkout -b feature`\n[правки]\n`git commit -m 'New'\n`git checkout main`\n`git merge feature`",
    "Отправка изменений":
      "Команды:\n`git add .`\n`git commit -m 'Update'\n`git push origin main`",
    "Восстановление коммита":
      "Команды:\n`git reflog`\n`git checkout <hash>`\n`git checkout -b new`",
    "Временное сохранение":
      "Команды:\n`git stash`\n[смена ветки]\n`git stash pop`",
    "Работа с тегами":
      "Команды:\n`git tag -a v1.0 -m 'Release'`\n`git push origin v1.0`",
    "Отмена изменений":
      "Команды:\n`git reset --soft HEAD~1`\n`git reset --hard HEAD~1`",
    "Сравнение веток": "Команда: `git diff main feature`",
    "Сокращения команд":
      "Команды:\n`git config --global alias.co checkout`\n`git config --global alias.br branch`",
  },
  "Git - Вопросы и Ответы для Собеседований": {
    "Что такое Git?":
      "Система контроля версий для отслеживания изменений в коде и совместной работы",
    "Особенности Git":
      "Распределенная система с полной историей у каждого, работает офлайн, быстрая",
    "Что такое ветка?":
      "Отдельная линия разработки для изолированной работы над функционалом",
    "Merge vs Rebase":
      "Merge сохраняет историю веток, Rebase делает линейную историю. Используются для разных задач",
    "Решение конфликтов":
      "Вручную исправить конфликтные файлы, добавить и закоммитить",
    "Для чего stash?": "Временное сохранение изменений при переключении веток",
    "Восстановление коммита": "Найти хеш через reflog и переключиться на него",
    "Git Hooks": "Скрипты для автоматизации действий при событиях Git",
    "Большие файлы":
      "Использовать Git LFS для хранения вне основного репозитория",
    "Fork и PR": "Fork для копии проекта, PR для предложения изменений",
    "Оптимизация Git": "Чистить ветки, использовать .gitignore и LFS",
    "Восстановление файла":
      "git checkout/restore для возврата к последней версии",
    "Зачем rebase?": "Для линейной истории перед слиянием в основную ветку",
    "Несколько репозиториев":
      "Добавлять через remote add и управлять push/pull",
    "Cherry-pick": "Копирование отдельных коммитов между ветками",
  },
};
