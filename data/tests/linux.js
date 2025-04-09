// Linux test questions
window.LinuxTests = [
    {
        question: "Какая команда используется для просмотра содержимого файла?",
        options: ["cat", "ls", "cd", "mkdir"],
        correctAnswer: 0
    },
    {
        question: "Какая команда используется для изменения прав доступа к файлу?",
        options: ["chown", "chmod", "chgrp", "chaccess"],
        correctAnswer: 1
    },
    {
        question: "Какая команда показывает текущий рабочий каталог?",
        options: ["cd", "ls", "pwd", "dir"],
        correctAnswer: 2
    },
    {
        question: "Какая команда используется для поиска текста в файлах?",
        options: ["find", "locate", "grep", "search"],
        correctAnswer: 2
    },
    {
        question: "Какая команда используется для мониторинга процессов в реальном времени?",
        options: ["ps", "top", "proc", "monitor"],
        correctAnswer: 1
    },
    {
        question: "Какой командой создается новый пустой файл?",
        options: ["touch", "nano", "mkdir", "cp"],
        correctAnswer: 0
    },
    {
        question: "Какой командой копируют файлы?",
        options: ["mv", "cp", "copy", "clone"],
        correctAnswer: 1
    },
    {
        question: "Какой командой перемещают или переименовывают файлы?",
        options: ["mv", "cp", "rename", "move"],
        correctAnswer: 0
    },
    {
        question: "Какой командой удаляют файлы?",
        options: ["rm", "delete", "erase", "rmdir"],
        correctAnswer: 0
    },
    {
        question: "Какой командой создают новый каталог?",
        options: ["mkdir", "mkfile", "newdir", "dircreate"],
        correctAnswer: 0
    },
    {
        question: "Какой командой удаляют пустой каталог?",
        options: ["rmdir", "rm", "delete", "removedir"],
        correctAnswer: 0
    },
    {
        question: "Какой командой выводят содержимое каталога?",
        options: ["ls", "dir", "list", "show"],
        correctAnswer: 0
    },
    {
        question: "Какой командой выводят первые строки файла?",
        options: ["head", "top", "start", "begin"],
        correctAnswer: 0
    },
    {
        question: "Какой командой выводят последние строки файла?",
        options: ["tail", "end", "bottom", "last"],
        correctAnswer: 0
    },
    {
        question: "Какой командой выводят справку по команде?",
        options: ["help", "man", "info", "doc"],
        correctAnswer: 1
    },
    {
        question: "Какой командой меняют владельца файла?",
        options: ["chmod", "chown", "chgrp", "owner"],
        correctAnswer: 1
    },
    {
        question: "Какой командой меняют группу файла?",
        options: ["chmod", "chown", "chgrp", "groupmod"],
        correctAnswer: 2
    },
    {
        question: "Какой командой выводят список работающих процессов?",
        options: ["ps", "jobs", "proc", "list"],
        correctAnswer: 0
    },
    {
        question: "Какой командой завершают процесс по PID?",
        options: ["kill", "stop", "end", "terminate"],
        correctAnswer: 0
    },
    {
        question: "Какой командой выполняют поиск файлов по имени?",
        options: ["find", "grep", "locate", "search"],
        correctAnswer: 0
    },
    {
        question: "Какой командой быстро ищут файлы по базе данных?",
        options: ["locate", "find", "grep", "search"],
        correctAnswer: 0
    },
    {
        question: "Какой командой выводят сетевые интерфейсы?",
        options: ["ifconfig", "ipconfig", "netstat", "route"],
        correctAnswer: 0
    },
    {
        question: "Какой командой проверяют доступность хоста?",
        options: ["ping", "traceroute", "netstat", "check"],
        correctAnswer: 0
    },
    {
        question: "Какой командой показывают маршруты сети?",
        options: ["route", "netstat -r", "ip route", "all верны"],
        correctAnswer: 3
    },
    {
        question: "Какой командой выводят информацию о системе?",
        options: ["uname -a", "sysinfo", "system", "info"],
        correctAnswer: 0
    },
    {
        question: "Какой командой выводят дату и время?",
        options: ["date", "time", "clock", "datetime"],
        correctAnswer: 0
    },
    {
        question: "Какой командой выводят количество свободного места на дисках?",
        options: ["df", "du", "diskfree", "space"],
        correctAnswer: 0
    },
    {
        question: "Какой командой выводят размер каталогов и файлов?",
        options: ["du", "df", "size", "ls -s"],
        correctAnswer: 0
    },
    {
        question: "Какой командой выводят переменные окружения?",
        options: ["env", "set", "export", "vars"],
        correctAnswer: 0
    },
    {
        question: "Какой командой устанавливают пакет в Debian/Ubuntu?",
        options: ["apt-get install", "yum install", "dnf install", "pacman -S"],
        correctAnswer: 0
    },
    {
        question: "Какой командой обновляют список пакетов в Debian/Ubuntu?",
        options: ["apt-get update", "yum update", "dnf update", "pacman -Syu"],
        correctAnswer: 0
    },
    {
        question: "Какой командой удаляют пакет в Debian/Ubuntu?",
        options: ["apt-get remove", "yum remove", "dnf remove", "pacman -R"],
        correctAnswer: 0
    },
    {
        question: "Какой командой устанавливают пакет в CentOS?",
        options: ["yum install", "apt-get install", "dnf install", "pacman -S"],
        correctAnswer: 0
    },
    {
        question: "Какой командой обновляют систему в CentOS?",
        options: ["yum update", "apt-get update", "dnf update", "pacman -Syu"],
        correctAnswer: 0
    },
    {
        question: "Какой командой устанавливают пакет в Fedora?",
        options: ["dnf install", "yum install", "apt-get install", "pacman -S"],
        correctAnswer: 0
    },
    {
        question: "Какой командой обновляют систему в Fedora?",
        options: ["dnf update", "yum update", "apt-get update", "pacman -Syu"],
        correctAnswer: 0
    },
    {
        question: "Какой командой устанавливают пакет в Arch Linux?",
        options: ["pacman -S", "apt-get install", "yum install", "dnf install"],
        correctAnswer: 0
    },
    {
        question: "Какой командой обновляют систему в Arch Linux?",
        options: ["pacman -Syu", "apt-get update", "yum update", "dnf update"],
        correctAnswer: 0
    },
    {
        question: "Какой командой выводят историю команд?",
        options: ["history", "hist", "commands", "log"],
        correctAnswer: 0
    },
    {
        question: "Какой символ используется для перенаправления вывода в файл (перезапись)?",
        options: [">", ">>", "<", "|"],
        correctAnswer: 0
    },
    {
        question: "Какой символ используется для добавления вывода в конец файла?",
        options: [">>", ">", "<", "|"],
        correctAnswer: 0
    },
    {
        question: "Какой символ используется для перенаправления ввода из файла?",
        options: ["<", ">", ">>", "|"],
        correctAnswer: 0
    },
    {
        question: "Какой символ используется для передачи вывода одной команды в другую?",
        options: ["|", ">", "<", "&"],
        correctAnswer: 0
    },
    {
        question: "Какой командой ищут строки, содержащие определенный текст?",
        options: ["grep", "find", "locate", "search"],
        correctAnswer: 0
    },
    {
        question: "Какой командой сортируют строки в файле?",
        options: ["sort", "order", "arrange", "lineup"],
        correctAnswer: 0
    },
    {
        question: "Какой командой заменяют текст в файле по шаблону?",
        options: ["sed", "awk", "grep", "replace"],
        correctAnswer: 0
    },
    {
        question: "Какой командой выполняют обработку текстовых данных по шаблону?",
        options: ["awk", "sed", "grep", "cut"],
        correctAnswer: 0
    },
    {
        question: "Какой командой вырезают столбцы из текста?",
        options: ["cut", "awk", "sed", "grep"],
        correctAnswer: 0
    },
    {
        question: "Какой командой объединяют файлы?",
        options: ["cat", "join", "merge", "combine"],
        correctAnswer: 0
    },
    {
        question: "Какой командой создают архив tar?",
        options: ["tar -cvf", "zip", "gzip", "compress"],
        correctAnswer: 0
    },
    {
        question: "Какой командой распаковывают архив tar?",
        options: ["tar -xvf", "unzip", "gunzip", "extract"],
        correctAnswer: 0
    },
    {
        question: "Какой командой сжимают файл с помощью gzip?",
        options: ["gzip", "zip", "tar", "compress"],
        correctAnswer: 0
    },
    {
        question: "Какой командой распаковывают файл .gz?",
        options: ["gunzip", "unzip", "tar -xvf", "extract"],
        correctAnswer: 0
    },
    {
        question: "Какой командой сжимают файлы в zip-архив?",
        options: ["zip", "gzip", "tar", "compress"],
        correctAnswer: 0
    },
    {
        question: "Какой командой распаковывают zip-архив?",
        options: ["unzip", "gunzip", "tar -xvf", "extract"],
        correctAnswer: 0
    },
    {
        question: "Какой командой меняют пароль пользователя?",
        options: ["passwd", "password", "chpass", "usermod"],
        correctAnswer: 0
    },
    {
        question: "Какой командой добавляют нового пользователя?",
        options: ["useradd", "adduser", "newuser", "createuser"],
        correctAnswer: 0
    },
    {
        question: "Какой командой удаляют пользователя?",
        options: ["userdel", "deluser", "removeuser", "rmuser"],
        correctAnswer: 0
    },
    {
        question: "Какой командой изменяют пользователя?",
        options: ["usermod", "useredit", "changeuser", "moduser"],
        correctAnswer: 0
    },
    {
        question: "Какой командой добавляют новую группу?",
        options: ["groupadd", "addgroup", "newgroup", "creategroup"],
        correctAnswer: 0
    },
    {
        question: "Какой командой удаляют группу?",
        options: ["groupdel", "delgroup", "removegroup", "rmgroup"],
        correctAnswer: 0
    },
    {
        question: "Какой командой изменяют группу?",
        options: ["groupmod", "groupedit", "changegroup", "modgroup"],
        correctAnswer: 0
    },
    {
        question: "Какой командой выводят список пользователей?",
        options: ["cat /etc/passwd", "users", "listusers", "whoami"],
        correctAnswer: 0
    },
    {
        question: "Какой командой выводят текущего пользователя?",
        options: ["whoami", "who", "users", "me"],
        correctAnswer: 0
    },
    {
        question: "Какой командой выводят, кто вошел в систему?",
        options: ["who", "whoami", "users", "logged"],
        correctAnswer: 0
    },
    {
        question: "Какой командой выводят последние входы в систему?",
        options: ["last", "history", "login", "recent"],
        correctAnswer: 0
    },
    {
        question: "Какой командой выключают систему?",
        options: ["shutdown", "poweroff", "halt", "all верны"],
        correctAnswer: 3
    },
    {
        question: "Какой командой перезагружают систему?",
        options: ["reboot", "restart", "reload", "reset"],
        correctAnswer: 0
    },
    {
        question: "Какой командой синхронизируют данные на диске?",
        options: ["sync", "flush", "write", "save"],
        correctAnswer: 0
    },
    {
        question: "Какой командой монтируют файловую систему?",
        options: ["mount", "attach", "connect", "link"],
        correctAnswer: 0
    },
    {
        question: "Какой командой отмонтируют файловую систему?",
        options: ["umount", "unmount", "detach", "disconnect"],
        correctAnswer: 0
    },
    {
        question: "Какой командой выводят список подключенных файловых систем?",
        options: ["mount", "lsblk", "df", "all верны"],
        correctAnswer: 3
    },
    {
        question: "Какой командой выводят информацию о блоковых устройствах?",
        options: ["lsblk", "blkinfo", "blocklist", "devices"],
        correctAnswer: 0
    },
    {
        question: "Какой командой выводят информацию о CPU?",
        options: ["lscpu", "cpuinfo", "cat /proc/cpuinfo", "all верны"],
        correctAnswer: 3
    },
    {
        question: "Какой командой выводят информацию о памяти?",
        options: ["free", "vmstat", "cat /proc/meminfo", "all верны"],
        correctAnswer: 3
    },
    {
        question: "Какой командой выводят загрузку системы?",
        options: ["uptime", "top", "w", "all верны"],
        correctAnswer: 3
    },
    {
        question: "Какой командой выводят список открытых портов?",
        options: ["netstat -tuln", "ss -tuln", "lsof -i", "all верны"],
        correctAnswer: 3
    },
    {
        question: "Какой командой проверяют трассировку маршрута до хоста?",
        options: ["traceroute", "tracepath", "mtr", "all верны"],
        correctAnswer: 3
    },
    {
        question: "Какой командой выводят список подключенных USB-устройств?",
        options: ["lsusb", "usbinfo", "usb-devices", "usb-list"],
        correctAnswer: 0
    },
    {
        question: "Какой командой выводят список PCI-устройств?",
        options: ["lspci", "pciinfo", "pci-list", "pcidev"],
        correctAnswer: 0
    },
    {
        question: "Какой командой выводят список загруженных модулей ядра?",
        options: ["lsmod", "modlist", "modules", "kmodules"],
        correctAnswer: 0
    },
    {
        question: "Какой командой загружают модуль ядра?",
        options: ["modprobe", "insmod", "loadmod", "kload"],
        correctAnswer: 0
    },
    {
        question: "Какой командой выгружают модуль ядра?",
        options: ["rmmod", "modprobe -r", "unloadmod", "оба варианта"],
        correctAnswer: 3
    },
    {
        question: "Какой командой выводят список запущенных служб systemd?",
        options: ["systemctl list-units --type=service", "service --status-all", "systemctl status", "all верны"],
        correctAnswer: 0
    },
    {
        question: "Какой командой запускают службу systemd?",
        options: ["systemctl start", "service start", "startservice", "runservice"],
        correctAnswer: 0
    },
    {
        question: "Какой командой останавливают службу systemd?",
        options: ["systemctl stop", "service stop", "stopservice", "killservice"],
        correctAnswer: 0
    },
    {
        question: "Какой командой перезапускают службу systemd?",
        options: ["systemctl restart", "service restart", "restartservice", "reloadservice"],
        correctAnswer: 0
    },
    {
        question: "Какой командой включают автозапуск службы systemd?",
        options: ["systemctl enable", "service enable", "enable-service", "autostart"],
        correctAnswer: 0
    },
    {
        question: "Какой командой отключают автозапуск службы systemd?",
        options: ["systemctl disable", "service disable", "disable-service", "noautostart"],
        correctAnswer: 0
    }
];
