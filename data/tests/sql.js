// SQL test questions
window.SQLTests = [
    {
        question: "Какая команда используется для выборки данных из таблицы?",
        options: ["SELECT", "EXTRACT", "FETCH", "GET"],
        correctAnswer: 0
    },
    {
        question: "Какое ключевое слово используется для фильтрации результатов запроса?",
        options: ["FILTER", "WHERE", "HAVING", "CONDITION"],
        correctAnswer: 1
    },
    {
        question: "Какая команда используется для добавления новых записей в таблицу?",
        options: ["ADD", "CREATE", "INSERT", "APPEND"],
        correctAnswer: 2
    },
    {
        question: "Какой оператор используется для объединения таблиц?",
        options: ["COMBINE", "MERGE", "JOIN", "CONNECT"],
        correctAnswer: 2
    },
    {
        question: "Какая функция используется для подсчета количества строк?",
        options: ["SUM", "COUNT", "TOTAL", "NUMBER"],
        correctAnswer: 1
    },
    {
        question: "Как выбрать все столбцы из таблицы employees?",
        options: [
            "SELECT * FROM employees;",
            "GET ALL FROM employees;",
            "FETCH * FROM employees;",
            "EXTRACT * FROM employees;"
        ],
        correctAnswer: 0
    },
    {
        question: "Как выбрать имена и зарплаты из таблицы employees?",
        options: [
            "SELECT name, salary FROM employees;",
            "GET name salary FROM employees;",
            "FETCH name, salary employees;",
            "EXTRACT name salary FROM employees;"
        ],
        correctAnswer: 0
    },
    {
        question: "Как выбрать уникальные значения из столбца department_id?",
        options: [
            "SELECT DISTINCT department_id FROM employees;",
            "SELECT UNIQUE department_id FROM employees;",
            "SELECT department_id UNIQUE FROM employees;",
            "SELECT department_id FROM employees UNIQUE;"
        ],
        correctAnswer: 0
    },
    {
        question: "Как отсортировать сотрудников по зарплате по убыванию?",
        options: [
            "SELECT * FROM employees ORDER BY salary DESC;",
            "SELECT * FROM employees SORT BY salary DESC;",
            "SELECT * FROM employees ORDER salary DESC;",
            "SELECT * FROM employees SORT salary DESC;"
        ],
        correctAnswer: 0
    },
    {
        question: "Как выбрать сотрудников с зарплатой больше 50000?",
        options: [
            "SELECT * FROM employees WHERE salary > 50000;",
            "SELECT * FROM employees HAVING salary > 50000;",
            "SELECT * FROM employees WITH salary > 50000;",
            "SELECT * FROM employees FILTER salary > 50000;"
        ],
        correctAnswer: 0
    },
    {
        question: "Как выбрать сотрудников из отдела 'HR' или 'IT'?",
        options: [
            "SELECT * FROM employees WHERE department = 'HR' OR department = 'IT';",
            "SELECT * FROM employees WHERE department IN ('HR', 'IT');",
            "SELECT * FROM employees WHERE department LIKE 'HR' AND 'IT';",
            "SELECT * FROM employees WHERE department BETWEEN 'HR' AND 'IT';"
        ],
        correctAnswer: 1
    },
    {
        question: "Как выбрать сотрудников, у которых имя начинается с буквы 'A'?",
        options: [
            "SELECT * FROM employees WHERE name LIKE 'A%';",
            "SELECT * FROM employees WHERE name = 'A*';",
            "SELECT * FROM employees WHERE name STARTS WITH 'A';",
            "SELECT * FROM employees WHERE name = '^A';"
        ],
        correctAnswer: 0
    },
    {
        question: "Как посчитать среднюю зарплату сотрудников?",
        options: [
            "SELECT AVG(salary) FROM employees;",
            "SELECT MEAN(salary) FROM employees;",
            "SELECT AVERAGE(salary) FROM employees;",
            "SELECT MID(salary) FROM employees;"
        ],
        correctAnswer: 0
    },
    {
        question: "Как посчитать количество сотрудников в каждом отделе?",
        options: [
            "SELECT department, COUNT(*) FROM employees GROUP BY department;",
            "SELECT department, COUNT(*) FROM employees ORDER BY department;",
            "SELECT department, COUNT(*) FROM employees HAVING department;",
            "SELECT department, COUNT(*) FROM employees WHERE department;"
        ],
        correctAnswer: 0
    },
    {
        question: "Как выбрать отделы, в которых больше 10 сотрудников?",
        options: [
            "SELECT department, COUNT(*) FROM employees GROUP BY department HAVING COUNT(*) > 10;",
            "SELECT department, COUNT(*) FROM employees WHERE COUNT(*) > 10;",
            "SELECT department, COUNT(*) FROM employees HAVING COUNT(*) > 10;",
            "SELECT department, COUNT(*) FROM employees GROUP BY department WHERE COUNT(*) > 10;"
        ],
        correctAnswer: 0
    },
    {
        question: "Как добавить новую таблицу departments с полями id и name?",
        options: [
            "CREATE TABLE departments (id INT, name VARCHAR(100));",
            "INSERT TABLE departments (id INT, name VARCHAR(100));",
            "ADD TABLE departments (id INT, name VARCHAR(100));",
            "MAKE TABLE departments (id INT, name VARCHAR(100));"
        ],
        correctAnswer: 0
    },
    {
        question: "Как добавить новую колонку age в таблицу employees?",
        options: [
            "ALTER TABLE employees ADD age INT;",
            "UPDATE TABLE employees ADD age INT;",
            "MODIFY TABLE employees ADD age INT;",
            "CHANGE TABLE employees ADD age INT;"
        ],
        correctAnswer: 0
    },
    {
        question: "Как удалить колонку age из таблицы employees?",
        options: [
            "ALTER TABLE employees DROP COLUMN age;",
            "DELETE COLUMN age FROM employees;",
            "REMOVE age FROM employees;",
            "ALTER TABLE employees REMOVE COLUMN age;"
        ],
        correctAnswer: 0
    },
    {
        question: "Как удалить таблицу departments?",
        options: [
            "DROP TABLE departments;",
            "DELETE TABLE departments;",
            "REMOVE TABLE departments;",
            "DESTROY TABLE departments;"
        ],
        correctAnswer: 0
    },
    {
        question: "Как вставить новую запись в таблицу employees?",
        options: [
            "INSERT INTO employees (name, salary) VALUES ('Ivan', 60000);",
            "ADD INTO employees (name, salary) VALUES ('Ivan', 60000);",
            "PUT INTO employees (name, salary) VALUES ('Ivan', 60000);",
            "CREATE INTO employees (name, salary) VALUES ('Ivan', 60000);"
        ],
        correctAnswer: 0
    },
    {
        question: "Как обновить зарплату сотрудника с id=5 на 70000?",
        options: [
            "UPDATE employees SET salary = 70000 WHERE id = 5;",
            "MODIFY employees SET salary = 70000 WHERE id = 5;",
            "CHANGE employees SET salary = 70000 WHERE id = 5;",
            "SET employees salary = 70000 WHERE id = 5;"
        ],
        correctAnswer: 0
    },
    {
        question: "Как удалить всех сотрудников из отдела 'HR'?",
        options: [
            "DELETE FROM employees WHERE department = 'HR';",
            "REMOVE FROM employees WHERE department = 'HR';",
            "DROP FROM employees WHERE department = 'HR';",
            "ERASE FROM employees WHERE department = 'HR';"
        ],
        correctAnswer: 0
    },
    {
        question: "Как выбрать сотрудников с зарплатой между 40000 и 60000?",
        options: [
            "SELECT * FROM employees WHERE salary BETWEEN 40000 AND 60000;",
            "SELECT * FROM employees WHERE salary >= 40000 AND <= 60000;",
            "SELECT * FROM employees WHERE salary IN RANGE 40000 TO 60000;",
            "SELECT * FROM employees WHERE salary FROM 40000 TO 60000;"
        ],
        correctAnswer: 0
    },
    {
        question: "Как выбрать сотрудников, у которых нет менеджера (manager_id IS NULL)?",
        options: [
            "SELECT * FROM employees WHERE manager_id IS NULL;",
            "SELECT * FROM employees WHERE manager_id = NULL;",
            "SELECT * FROM employees WHERE manager_id == NULL;",
            "SELECT * FROM employees WHERE manager_id IS EMPTY;"
        ],
        correctAnswer: 0
    },
    {
        question: "Как выбрать сотрудников, у которых есть менеджер (manager_id NOT NULL)?",
        options: [
            "SELECT * FROM employees WHERE manager_id IS NOT NULL;",
            "SELECT * FROM employees WHERE manager_id != NULL;",
            "SELECT * FROM employees WHERE manager_id NOT NULL;",
            "SELECT * FROM employees WHERE manager_id ISN'T NULL;"
        ],
        correctAnswer: 0
    },
    {
        question: "Как объединить таблицы employees и departments по department_id?",
        options: [
            "SELECT * FROM employees JOIN departments ON employees.department_id = departments.id;",
            "SELECT * FROM employees MERGE departments ON employees.department_id = departments.id;",
            "SELECT * FROM employees COMBINE departments ON employees.department_id = departments.id;",
            "SELECT * FROM employees CONNECT departments ON employees.department_id = departments.id;"
        ],
        correctAnswer: 0
    },
    {
        question: "Как выполнить левое соединение (LEFT JOIN) таблиц employees и departments?",
        options: [
            "SELECT * FROM employees LEFT JOIN departments ON employees.department_id = departments.id;",
            "SELECT * FROM employees LEFT CONNECT departments ON employees.department_id = departments.id;",
            "SELECT * FROM employees LEFT MERGE departments ON employees.department_id = departments.id;",
            "SELECT * FROM employees LEFT COMBINE departments ON employees.department_id = departments.id;"
        ],
        correctAnswer: 0
    },
    {
        question: "Как выполнить правое соединение (RIGHT JOIN) таблиц employees и departments?",
        options: [
            "SELECT * FROM employees RIGHT JOIN departments ON employees.department_id = departments.id;",
            "SELECT * FROM employees RIGHT CONNECT departments ON employees.department_id = departments.id;",
            "SELECT * FROM employees RIGHT MERGE departments ON employees.department_id = departments.id;",
            "SELECT * FROM employees RIGHT COMBINE departments ON employees.department_id = departments.id;"
        ],
        correctAnswer: 0
    },
    {
        question: "Как выбрать максимальную зарплату среди сотрудников?",
        options: [
            "SELECT MAX(salary) FROM employees;",
            "SELECT TOP(salary) FROM employees;",
            "SELECT HIGHEST(salary) FROM employees;",
            "SELECT MAXIMUM(salary) FROM employees;"
        ],
        correctAnswer: 0
    },
    {
        question: "Как выбрать минимальную зарплату среди сотрудников?",
        options: [
            "SELECT MIN(salary) FROM employees;",
            "SELECT LOWEST(salary) FROM employees;",
            "SELECT MINIMUM(salary) FROM employees;",
            "SELECT BOTTOM(salary) FROM employees;"
        ],
        correctAnswer: 0
    },
    {
        question: "Как выбрать сумму всех зарплат?",
        options: [
            "SELECT SUM(salary) FROM employees;",
            "SELECT TOTAL(salary) FROM employees;",
            "SELECT ADD(salary) FROM employees;",
            "SELECT SUMM(salary) FROM employees;"
        ],
        correctAnswer: 0
    },
    {
        question: "Как выбрать первые 5 сотрудников из таблицы employees?",
        options: [
            "SELECT * FROM employees LIMIT 5;",
            "SELECT * FROM employees TOP 5;",
            "SELECT FIRST 5 FROM employees;",
            "SELECT * FROM employees FIRST 5;"
        ],
        correctAnswer: 0
    },
    {
        question: "Как выбрать сотрудников, у которых зарплата больше средней?",
        options: [
            "SELECT * FROM employees WHERE salary > (SELECT AVG(salary) FROM employees);",
            "SELECT * FROM employees WHERE salary > AVG(salary);",
            "SELECT * FROM employees HAVING salary > AVG(salary);",
            "SELECT * FROM employees WHERE salary > AVERAGE(salary);"
        ],
        correctAnswer: 0
    },
    {
        question: "Как выбрать сотрудников, у которых имя содержит 'an'?",
        options: [
            "SELECT * FROM employees WHERE name LIKE '%an%';",
            "SELECT * FROM employees WHERE name = '*an*';",
            "SELECT * FROM employees WHERE name CONTAINS 'an';",
            "SELECT * FROM employees WHERE name HAS 'an';"
        ],
        correctAnswer: 0
    },
    {
        question: "Как выбрать количество сотрудников в каждом отделе и отсортировать по убыванию?",
        options: [
            "SELECT department, COUNT(*) FROM employees GROUP BY department ORDER BY COUNT(*) DESC;",
            "SELECT department, COUNT(*) FROM employees ORDER BY COUNT(*) DESC GROUP BY department;",
            "SELECT department, COUNT(*) FROM employees HAVING COUNT(*) DESC;",
            "SELECT department, COUNT(*) FROM employees GROUP BY department SORT BY COUNT(*) DESC;"
        ],
        correctAnswer: 0
    },
    {
        question: "Как выбрать сотрудников, у которых зарплата не равна 50000?",
        options: [
            "SELECT * FROM employees WHERE salary <> 50000;",
            "SELECT * FROM employees WHERE salary != 50000;",
            "SELECT * FROM employees WHERE salary NOT 50000;",
            "SELECT * FROM employees WHERE salary DIFFERENT 50000;"
        ],
        correctAnswer: 0
    },
    {
        question: "Как выбрать сотрудников, у которых зарплата равна 50000 или 60000?",
        options: [
            "SELECT * FROM employees WHERE salary IN (50000, 60000);",
            "SELECT * FROM employees WHERE salary = 50000 OR 60000;",
            "SELECT * FROM employees WHERE salary EQUALS (50000, 60000);",
            "SELECT * FROM employees WHERE salary == (50000, 60000);"
        ],
        correctAnswer: 0
    },
    {
        question: "Как выбрать сотрудников, у которых зарплата меньше 40000 или больше 80000?",
        options: [
            "SELECT * FROM employees WHERE salary < 40000 OR salary > 80000;",
            "SELECT * FROM employees WHERE salary BETWEEN 40000 AND 80000;",
            "SELECT * FROM employees WHERE salary <= 40000 AND salary >= 80000;",
            "SELECT * FROM employees WHERE salary OUTSIDE 40000 AND 80000;"
        ],
        correctAnswer: 0
    },
    {
        question: "Как выбрать сотрудников, у которых имя не начинается с 'A'?",
        options: [
            "SELECT * FROM employees WHERE name NOT LIKE 'A%';",
            "SELECT * FROM employees WHERE name != 'A%';",
            "SELECT * FROM employees WHERE name <> 'A%';",
            "SELECT * FROM employees WHERE name DOES NOT START WITH 'A';"
        ],
        correctAnswer: 0
    },
    {
        question: "Как выбрать сотрудников, у которых зарплата равна 50000 и отдел 'IT'?",
        options: [
            "SELECT * FROM employees WHERE salary = 50000 AND department = 'IT';",
            "SELECT * FROM employees WHERE salary = 50000 OR department = 'IT';",
            "SELECT * FROM employees WHERE salary == 50000 && department == 'IT';",
            "SELECT * FROM employees WHERE salary EQUALS 50000 AND department EQUALS 'IT';"
        ],
        correctAnswer: 0
    },
    {
        question: "Как выбрать сотрудников, у которых зарплата больше 50000 и меньше 80000?",
        options: [
            "SELECT * FROM employees WHERE salary > 50000 AND salary < 80000;",
            "SELECT * FROM employees WHERE salary BETWEEN 50000 AND 80000;",
            "SELECT * FROM employees WHERE salary > 50000 OR salary < 80000;",
            "SELECT * FROM employees WHERE salary >= 50000 AND salary <= 80000;"
        ],
        correctAnswer: 0
    },
    {
        question: "Как выбрать сотрудников, у которых имя заканчивается на 'n'?",
        options: [
            "SELECT * FROM employees WHERE name LIKE '%n';",
            "SELECT * FROM employees WHERE name = '*n';",
            "SELECT * FROM employees WHERE name ENDS WITH 'n';",
            "SELECT * FROM employees WHERE name LIKE 'n%';"
        ],
        correctAnswer: 0
    },
    {
        question: "Как выбрать сотрудников, у которых имя состоит из 4 букв?",
        options: [
            "SELECT * FROM employees WHERE LENGTH(name) = 4;",
            "SELECT * FROM employees WHERE SIZE(name) = 4;",
            "SELECT * FROM employees WHERE LEN(name) = 4;",
            "SELECT * FROM employees WHERE CHARCOUNT(name) = 4;"
        ],
        correctAnswer: 0
    },
    {
        question: "Как выбрать сотрудников, у которых зарплата равна 50000, и отсортировать их по имени?",
        options: [
            "SELECT * FROM employees WHERE salary = 50000 ORDER BY name;",
            "SELECT * FROM employees ORDER BY name WHERE salary = 50000;",
            "SELECT * FROM employees SORT BY name WHERE salary = 50000;",
            "SELECT * FROM employees WHERE salary = 50000 SORT BY name;"
        ],
        correctAnswer: 0
    },
    {
        question: "Как выбрать сотрудников, у которых зарплата равна 50000, и отсортировать их по имени в обратном порядке?",
        options: [
            "SELECT * FROM employees WHERE salary = 50000 ORDER BY name DESC;",
            "SELECT * FROM employees WHERE salary = 50000 ORDER name DESC;",
            "SELECT * FROM employees ORDER BY name DESC WHERE salary = 50000;",
            "SELECT * FROM employees SORT BY name DESC WHERE salary = 50000;"
        ],
        correctAnswer: 0
    },
    {
        question: "Как выбрать сотрудников, у которых зарплата больше 50000, и отсортировать по зарплате по возрастанию?",
        options: [
            "SELECT * FROM employees WHERE salary > 50000 ORDER BY salary ASC;",
            "SELECT * FROM employees WHERE salary > 50000 ORDER salary ASC;",
            "SELECT * FROM employees ORDER BY salary ASC WHERE salary > 50000;",
            "SELECT * FROM employees SORT BY salary ASC WHERE salary > 50000;"
        ],
        correctAnswer: 0
    },
    {
        question: "Как выбрать сотрудников, у которых зарплата больше 50000, и отсортировать по зарплате по убыванию?",
        options: [
            "SELECT * FROM employees WHERE salary > 50000 ORDER BY salary DESC;",
            "SELECT * FROM employees WHERE salary > 50000 ORDER salary DESC;",
            "SELECT * FROM employees ORDER BY salary DESC WHERE salary > 50000;",
            "SELECT * FROM employees SORT BY salary DESC WHERE salary > 50000;"
        ],
        correctAnswer: 0
    },
    {
        question: "Как выбрать сотрудников, у которых зарплата больше 50000, и отдел 'IT', отсортировать по имени?",
        options: [
            "SELECT * FROM employees WHERE salary > 50000 AND department = 'IT' ORDER BY name;",
            "SELECT * FROM employees WHERE salary > 50000 OR department = 'IT' ORDER BY name;",
            "SELECT * FROM employees ORDER BY name WHERE salary > 50000 AND department = 'IT';",
            "SELECT * FROM employees WHERE salary > 50000 AND department = 'IT' SORT BY name;"
        ],
        correctAnswer: 0
    },
    {
        question: "Как выбрать сотрудников, у которых зарплата больше 50000, отдел 'IT', и имя начинается с 'A'?",
        options: [
            "SELECT * FROM employees WHERE salary > 50000 AND department = 'IT' AND name LIKE 'A%';",
            "SELECT * FROM employees WHERE salary > 50000 OR department = 'IT' AND name LIKE 'A%';",
            "SELECT * FROM employees WHERE salary > 50000 AND department = 'IT' OR name LIKE 'A%';",
            "SELECT * FROM employees WHERE salary > 50000 AND department = 'IT' AND name = 'A%';"
        ],
        correctAnswer: 0
    },
    {
        question: "Как выбрать сотрудников, у которых зарплата больше 50000, отдел 'IT', имя начинается с 'A', и отсортировать по зарплате?",
        options: [
            "SELECT * FROM employees WHERE salary > 50000 AND department = 'IT' AND name LIKE 'A%' ORDER BY salary;",
            "SELECT * FROM employees WHERE salary > 50000 OR department = 'IT' AND name LIKE 'A%' ORDER BY salary;",
            "SELECT * FROM employees ORDER BY salary WHERE salary > 50000 AND department = 'IT' AND name LIKE 'A%';",
            "SELECT * FROM employees WHERE salary > 50000 AND department = 'IT' AND name LIKE 'A%' SORT BY salary;"
        ],
        correctAnswer: 0
    },
    {
        question: "Как выбрать сотрудников, у которых зарплата больше 50000, отдел 'IT', имя начинается с 'A', и отсортировать по зарплате по убыванию?",
        options: [
            "SELECT * FROM employees WHERE salary > 50000 AND department = 'IT' AND name LIKE 'A%' ORDER BY salary DESC;",
            "SELECT * FROM employees WHERE salary > 50000 OR department = 'IT' AND name LIKE 'A%' ORDER BY salary DESC;",
            "SELECT * FROM employees ORDER BY salary DESC WHERE salary > 50000 AND department = 'IT' AND name LIKE 'A%';",
            "SELECT * FROM employees WHERE salary > 50000 AND department = 'IT' AND name LIKE 'A%' SORT BY salary DESC;"
        ],
        correctAnswer: 0
    },
    {
        question: "Как выбрать сотрудников, у которых зарплата больше 50000, отдел 'IT', имя начинается с 'A', и зарплата меньше 80000?",
        options: [
            "SELECT * FROM employees WHERE salary > 50000 AND salary < 80000 AND department = 'IT' AND name LIKE 'A%';",
            "SELECT * FROM employees WHERE salary BETWEEN 50000 AND 80000 AND department = 'IT' AND name LIKE 'A%';",
            "SELECT * FROM employees WHERE salary > 50000 OR salary < 80000 AND department = 'IT' AND name LIKE 'A%';",
            "SELECT * FROM employees WHERE salary >= 50000 AND salary <= 80000 AND department = 'IT' AND name LIKE 'A%';"
        ],
        correctAnswer: 0
    },
    {
        question: "Как выбрать сотрудников, у которых зарплата больше средней по отделу?",
        options: [
            "SELECT * FROM employees e WHERE salary > (SELECT AVG(salary) FROM employees WHERE department = e.department);",
            "SELECT * FROM employees WHERE salary > AVG(salary) GROUP BY department;",
            "SELECT * FROM employees WHERE salary > AVERAGE(salary) GROUP BY department;",
            "SELECT * FROM employees WHERE salary > (SELECT MEAN(salary) FROM employees WHERE department = department);"
        ],
        correctAnswer: 0
    },
    {
        question: "Как выбрать сотрудников, у которых зарплата равна максимальной в отделе?",
        options: [
            "SELECT * FROM employees e WHERE salary = (SELECT MAX(salary) FROM employees WHERE department = e.department);",
            "SELECT * FROM employees WHERE salary = MAX(salary) GROUP BY department;",
            "SELECT * FROM employees WHERE salary = (SELECT TOP(salary) FROM employees WHERE department = department);",
            "SELECT * FROM employees WHERE salary = (SELECT HIGHEST(salary) FROM employees WHERE department = department);"
        ],
        correctAnswer: 0
    },
    {
        question: "Как выбрать сотрудников, у которых зарплата больше, чем у их менеджера?",
        options: [
            "SELECT e1.* FROM employees e1 JOIN employees e2 ON e1.manager_id = e2.id WHERE e1.salary > e2.salary;",
            "SELECT * FROM employees WHERE salary > (SELECT salary FROM employees WHERE id = manager_id);",
            "SELECT * FROM employees WHERE salary > salary;",
            "SELECT * FROM employees WHERE salary > (SELECT MAX(salary) FROM employees WHERE id = manager_id);"
        ],
        correctAnswer: 0
    },
    {
        question: "Как выбрать сотрудников, у которых зарплата равна 50000, и если таких нет, то выбрать всех сотрудников?",
        options: [
            "SELECT * FROM employees WHERE salary = 50000 UNION SELECT * FROM employees;",
            "SELECT * FROM employees WHERE salary = 50000 ELSE SELECT * FROM employees;",
            "SELECT * FROM employees WHERE salary = 50000 OR SELECT * FROM employees;",
            "SELECT * FROM employees WHERE salary = 50000 IF NOT SELECT * FROM employees;"
        ],
        correctAnswer: 0
    },
    {
        question: "Как выбрать сотрудников, у которых зарплата больше 50000, и отдел 'IT', и имя начинается с 'A', и зарплата меньше 80000, и отсортировать по имени?",
        options: [
            "SELECT * FROM employees WHERE salary > 50000 AND salary < 80000 AND department = 'IT' AND name LIKE 'A%' ORDER BY name;",
            "SELECT * FROM employees WHERE salary BETWEEN 50000 AND 80000 AND department = 'IT' AND name LIKE 'A%' ORDER BY name;",
            "SELECT * FROM employees WHERE salary > 50000 OR salary < 80000 AND department = 'IT' AND name LIKE 'A%' ORDER BY name;",
            "SELECT * FROM employees WHERE salary >= 50000 AND salary <= 80000 AND department = 'IT' AND name LIKE 'A%' ORDER BY name;"
        ],
        correctAnswer: 0
    },
    {
        question: "Как выбрать сотрудников, у которых зарплата больше 50000, отдел 'IT', имя начинается с 'A', зарплата меньше 80000, и отсортировать по зарплате по убыванию?",
        options: [
            "SELECT * FROM employees WHERE salary > 50000 AND salary < 80000 AND department = 'IT' AND name LIKE 'A%' ORDER BY salary DESC;",
            "SELECT * FROM employees WHERE salary BETWEEN 50000 AND 80000 AND department = 'IT' AND name LIKE 'A%' ORDER BY salary DESC;",
            "SELECT * FROM employees WHERE salary > 50000 OR salary < 80000 AND department = 'IT' AND name LIKE 'A%' ORDER BY salary DESC;",
            "SELECT * FROM employees WHERE salary >= 50000 AND salary <= 80000 AND department = 'IT' AND name LIKE 'A%' ORDER BY salary DESC;"
        ],
        correctAnswer: 0
    },
    {
        question: "Как выбрать сотрудников, у которых зарплата больше 50000, отдел 'IT', имя начинается с 'A', зарплата меньше 80000, и отсортировать по имени в обратном порядке?",
        options: [
            "SELECT * FROM employees WHERE salary > 50000 AND salary < 80000 AND department = 'IT' AND name LIKE 'A%' ORDER BY name DESC;",
            "SELECT * FROM employees WHERE salary BETWEEN 50000 AND 80000 AND department = 'IT' AND name LIKE 'A%' ORDER BY name DESC;",
            "SELECT * FROM employees WHERE salary > 50000 OR salary < 80000 AND department = 'IT' AND name LIKE 'A%' ORDER BY name DESC;",
            "SELECT * FROM employees WHERE salary >= 50000 AND salary <= 80000 AND department = 'IT' AND name LIKE 'A%' ORDER BY name DESC;"
        ],
        correctAnswer: 0
    },
    {
        question: "Как выбрать сотрудников, у которых зарплата больше 50000, отдел 'IT', имя начинается с 'A', зарплата меньше 80000, и отсортировать по зарплате по возрастанию?",
        options: [
            "SELECT * FROM employees WHERE salary > 50000 AND salary < 80000 AND department = 'IT' AND name LIKE 'A%' ORDER BY salary ASC;",
            "SELECT * FROM employees WHERE salary BETWEEN 50000 AND 80000 AND department = 'IT' AND name LIKE 'A%' ORDER BY salary ASC;",
            "SELECT * FROM employees WHERE salary > 50000 OR salary < 80000 AND department = 'IT' AND name LIKE 'A%' ORDER BY salary ASC;",
            "SELECT * FROM employees WHERE salary >= 50000 AND salary <= 80000 AND department = 'IT' AND name LIKE 'A%' ORDER BY salary ASC;"
        ],
        correctAnswer: 0
    }
];
