let number = 5; //let означает что пременная изменяема, можем достать 5 и поменять

//пременная let под названием number, знак равно - знак присваивания

const leftBorderWidth = 1; //константа. инфу внутри переменной менять нельзя. Прямых констант в js не бывает!!!

// Имя переменной может иметь в себе буквы, цифры, $, но имя не должно начинаться с цифры

var name = 'Ivan'; //Устаревший вариант записания переменных.

"use strict" //говорим скриптовому файлу, что мы работает в современном, строгом режиме. Использование желательно всегда. Это помогает избавляться от некоторых неточностей кода допущенных при разработке.


//####### Точку с запятой ставим после объявления переменной; а также после окончания логической последовательности.



///////////УРОК 2////////// ТИПЫ ИНФЫ


Типы данных JS 

1) Простые Типы

-Числа 1,2,3 

    let number = 4.6; (если делим на ноль - бесконечность)

    Если мы умножим строку (набор букв) на цифру то получим NaN -not a number

-Строки 'string', 'name' --- любой набор данных, напр имена, города и тд. Строки всегда записываются в ковычки

    const person = "alex"; Всегда используются ковычки, одинарные или нет - поебать, есть еще косые на тильде ``.

    Строки также могут содержать внутри себя цифры. если они в ковычках - все равно строка.

-true/false --- Логический тип данных (boolean). Либо правда, либо ложь. Болиновый тип данных (запомнить!!!)

    const bool = true;
    const bool = false;

-null --- чего-то не существует

    console.log(something); ==Получим ошибку т.к. нет такой переменной. Мы не можем сослаться на объект, которого нет. В чистом виде null получается очень редко.

-undefined --- что-то существует но значения его нет.

    Переменная есть, но у нее не задано значение, в коробке ничего нет!

    let und;
    console.log(und); ==получаем ошибку undefined

-symbol 

    На практике почти не используется.

-BigInt --- тип данных для отображения больших чисел

2) Объекты

    создается обозначается фигурными скобками.

    const obj = {
        //именно содержимое и есть объект
    }

    данные содержащиеся в нем - свойства объекта. действия это методы.

    const obj = {
        name: 'Johng',
        age: 75,
        isMarried: true
    };

    Чтобы добраться до одного из значений объекта мы можем использовать ЛИБО ТОЧКУ, ЛИБО КВАДРАТНЫЕ скобки 

    console.log(obj.name); -- в этой строчке мы обратились к name, который лежит в obj и консоль выведет name: Johng

    console.log(obj ["name"]); -- тоже самое что и выше.

    Объекты это ключевая единица JS и там хранится много инфы.

    записывали мы наш объект в формате ключ - значение а именно
    name: 'John'
    name это ключ
    'John' это значение


2.1) Спец Объекты
-Массивы [] -- Массив не является отдельным типом данных. это частный случай объекта

    let arr = ['plum.png', 'orange.jpg', 'apple.bmp', 6, {}]

    arr сокращение от array - массив)

    Это комплексный тип данных и может вмещать в себя другие типы данных.

    Массив предназначен для размещения типов данных внутри СТРОГО ПО ПОРЯДКУ и ключ массива всегда фиксирован. Они заданы по умолчанию и мы на них влиять не можем (0,1,2,3)

    можем также обратиться к содержимому. например второй элемент, пишем
    console.log(arr[1]); --нумерация начинается с 0

-функции function 
-Объект Даты
-Регулярные выражения
-Ошибки

2.2) Обычные Объекты


////////УРОК 3 ВЗАИМОДЕЙСТВИЕ С ПОЛЬЗОВАТЕЛЕМ/////////

3.1 alert('Hello'); ---встроенное модальное окно для оповещения пользователя.


3.2 const result = confirm("Are you here?"); --- выводит пользователю модальное окно с двумя вариантами ответа (true/false) (булиновое значение)


3.3 const answer = prompt("Вам есть 18?", "") ---- модальное окно, куда юзер может ввести ответ. пустые скобки это для плейсхолдера(образца),  можно туда что-то вписать и оно будет в поле по дефолту.

Всё, что юзер туда вобьет (даже цифры) всё будет строкой.

для проверки типа данных вводим

console.log(typeof(answer));    --- выведит нам какой тип данных у answer



#Пример задачи вопросов юзеру с записью результата по порядку в массив# 

const answers = [];

answers[0] = prompt('как ваше имя?', '');
answers[1] = prompt('как ваше фамилия?', '');
answers[2] = prompt('сколько вам лет??', '');

document.write(answers); --- тестовая команда для выведения, например, ответов на промпты прямо на страницу. используется редко, она устарела. кроме того, она замещает весь контент страницы на себя.




//////////УРОК 4 ИНТЕРПОЛЯЦИЯ////////

Интерполяция - внутрь строки можно вставлять значения переменной.

const category = 'toys';

console.log(`https://url.com/${category}/5`)

в общем и целом интерполяция упрощает формирование строки url в новом стандарте. обязательно использовать ``, и далее как в примере выше. Сначала переходим в категорию, затем на 5 игрушку.

также в ту же степь:

const user = "Ivan";

alert(`Привет, ${user}`);



////////УРОК 5 ОПЕРАТОРЫ////////

конкотинация - это сложение строки и числа:

####+

console.log(4 + "object"); но мы получим строку.

console.log(4 + +("5")); Тут уже сложатся цифры. Второй плюс перед скобкой называется унарным.


####incr/decr

let incr = 10,
    decr = 10;

incr++;
decr--;

console.log(incr);
console.log(decr);

Таким образом, оператор инкр увеличивать на один, декр уменьшает.

incr++; это постфиксный вариант
++incr; это префиксный вариант



#####%

% это знак деления, в ответ будет выводиться остаток.





##### равенство

console.log(2*4 == 8);

одинарный - присваивание
Двойной знак это знак сравнения.
тройной - строгое сравнение.


####&& и ||

&& и это правда и это правда
|| или это правда или это правда

const isChecked = true,
      isClose = true;

console.log(isChecked && isClose); если оба подопечных верны - то и это мы получим как тру

console.log(isChecked || isClose); Тут даже если кто-то будет фолс, то всё равно выйдет тру


#### оператор отрицания !

console.log(isChecked || !isClose); - если изначально isClose было тру, то знак отрицания меняет его значение наоборот




///////УРОК 7 УСЛОВИЯ///////


if (4 == 9) { //если что-то хотим проверить пишем if и помещаем в  круглые скобки то, что необходимо проверить
    console.log('ok');
} else {
    console.log('Error');
}

если мы хотим пойти от обратного, что если что-то не выполнилось и мы хотим сделать с этим что-то еще - пишем else





вложенность условий.. разветляем условия на много

const num = 50;

if (num < 49) {
    console.log('Error')
} else if (num > 100) {
    console.log('Много');
} else {
    console.log('Ok!');
}




Написание условия при помощи тернарного оператора

(num === 50) ? console.log('ok!') : console.log('Error');

тоесть, проверяем равна ли переменная num 50, вопросительный знак это и есть тернарный оператор, тоесть если (?) верно, то выполняем условие, если не верно (:) то выполняем другое.

Он называется тернарным потому, что в его работе участвует три аргумента. если подробно то (num === 50) это первый аргумент, вывод сообщения ОК - это второй, и вывод ошибки - третий

Но указанную выше схему с if не всегда удобно использовать в больших проектах, поэтому существует спец конструкция switch;

const num = 50;

switch (num) { 
    case 49:
        console.log('Неверно');
        break; //после каждого действия обязательна эта команда
    case 100:
        console.log('Неверно');
        break;
    case 50:
        console.log('Верно');
        break; 
    default:  //в случае сли ни одно действие не выполнено ставим дефолт
        console.log('Невыполнено');
        break;
}

Конструкция switch ВСЕГДА идет на строгое сравнение в отличие от обычных условий



////////УРОК 8 ЦИКЛЫ///////

let num = 50;

while (num <= 55) {    //Пока нам меньше 55 - будет выполняться действия
    console.log(num);
    num++;
}


//Вариант 2
do {  //Сначала заставляем цикл что-то сделать а затем проверить условие и выйти из цикла.
    console.log(num);
    num++;
}
while (num < 55);


//Вариант 3 самый популярный
for (let i = 1; i < 8; i++){ //3 аргумента в цикле. Сначала задаем переменную, затем задаем условие когда лолжен цикл остановиться и затем указываем шаг цикла (у нас инкримент)
    console.log(i);
}

НУЖНО ВНИМАТЕЛЬНО задавать условия для цикла, чтобы не допустить бесконечного цикла





/////УРОК 9 ФУНКЦИИ///////


Функции это наши действия в js. они исп различ типы данных и изм инфу так как мы укажем

function showFirstMessage() { //функция имя(аргумент) {действия}
    const.log("hello world!");
}

showFirstMessage(); //Вызываем функцию. обязательно ставим круглые скобки!!!

Одна из самых важ вещей функции - ее имя. негласное правило: должно быть глаголом с препиской того, над чем выполняется действие

Когда функция вызывается, мы можем ей дать какие-либо данные, которые она будет использовать внутри себя (аргумент)

function showFirstMessage(text) {
    console.log(text);
}

showFirstMessage("hello world!");

Аргументов может быть много


№№№  Существуют глобальные и локальные переменные. локальные переменные это let и const помещенные в функцию и при попытке вызвать ее вне функции мы получим писю к носу пахнет резко.

Но если мы закажем ее глобально а затем воткнуть ее локально то никакой ошибки не будет. Переменная локальная перезапишет глобальную. например:

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    num = 10;
}

showFirstMessage("Hello World");
console.log(num);

Как результат лог покажет нам num = 10

Но если мы поставим let num в функцию... ничего не выйдет и покажет глобальную

Замыкание на примере:

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    console.log(num);
}

Т.к. мы просим вывести переменную num, но ее нет на локальном уровне, функция начинает искать ее на уровень выше. как только найдет глобальную переменную - она ее использует. это и есть замыкание.



Функция может вернуть какое-либо значение при помощи return 
пример на калькуляторе

function calc(a, b) { 
    return (a + b); //когда запустится функция, она вернет нам значение суммы первого и второго аргумента
}

console.log(calc(4, 10));
console.log(calc(187, 235));

Тоесть функцию с return можно много раз переиспользовать
Но!! если после return в функции будет какой либо код - он больше не выполнится т.к. ретёрн заканчивает функцию.



тип функции когда она задается в переменную

const logger = function() {
    console.log("hello");
};

logger(); //это чтобы вывести ее

Это выражение функции. она будет существовать только по порядку.



/////УРОК 10 МЕТОДЫ И СВОЙСТВА СТРОК И ЧИСЕЛ///////

Методы это вспомогательные функции, когда мы его записываем - всегда ставим круглые скобки в конце как и в функции!!

Свойства это вспомогательные значения 

свойство не вызывается а пишется через точку.
пример:

const str = "test";

console.log(str.length); //length это свойство и оно посчитает сколько символов в строке


Методы для изменения строки
###########################
1 метод slice

const logg = "hello world";

console.log(logg.slice(6, 11)); //вырезаем например слово world из строки. в скобках пишем позицию: сначала начало, затем конец.
//можно также оставить только начало, и строка вырежется до конца.


2 метод substring

console.log(logg.substring(6, 11)); //похож на предыдущий но он не поддерживает отрицательные числа.


3 метод substr

console.log(logg.substr(6, 5)); //тут мы указываем сколько нам нужно вырезать, сначала позицию начала, затем сколько символов нужно вырезать



Числа
##########

округление

concst num = 12.2;
console.log(Math.round(num)); //самое популярное в Вебе это округление.




////////CALLBACK функции///////

CB функция должна быть выполнена после выполнения предыдущей (если есть задержка)

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}


learnJS('JavaScript', function() {
    console.log('Я прошел этот урок')
}); 

например, если первая часть функции обрабатывается долго (много данных) то в момент ее обработки может сработать вторая часть. и чтобы этого не произошло используется callback для того, чтобы вторая часть функции дождалась ту, которая еще обрабатывается



////////////ОБЪЕКТЫ И ИХ ДЕСТРУКТУРИЗАЦИЯ////////

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
};

console.log(options.name);

//Уже немного его касались. тоесть переменная раскрывается и в нее сваливается много всего. Кроме того внутри объекта может быть еще объект

delete options.name; //удаление чего-либо из объекта

//для перебора свойств объекта используем

for (let key in options) {
    console.log(`Свойство ${key} имеет значение ${options [key]}`);
}


//задаем переменную key и говорим, что будем копаться в options
//${options [key]} говорим, что мы будем перебирать ключи и выводить их значения. именно подобная команда и показывает значение

№№№№№ Object.keys метод берет наш объект и на его основании создает массив в котором все его элементы это ключи объектов. эксперимент для запоминания. 

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
};

console.log(Object.keys(options).length);

///

const types = {
    name: 'turbo',
    capacity: 800,
    weight: 1765,
    wheels: 12,
    seats: 7,
    availableModifications: {
        seats: 3,
        colors: 'black'
    }
};

console.log(Object.keys(types).length);

const wheels = {
    name: 'michellen',
    size: 47,
    type: 'winter',
    year: 2012,
    hellyeah: 'test',
    country: 'Germany',
    hello: {
        hi: 1,
        bye: 2,
        farewell: 'ok'
    }
};

console.log(Object.keys(wheels).length);


////
МЕТОДЫ - это действия, которые умеет совершать наш ОБЪЕКТ!!!!!

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() { //это и есть созданный вручную метод
        console.log("Test");
    }
};

options.makeTest();

console.log(Object.keys(options).length);


///Деструктуризация массивов

когда нам надо достучаться до вложенных свойств, мы применяем деструктуризацию. тоесть вытаскиваем ключи из вложенного объекта в объект и работаем с ней.

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() { //это и есть созданный вручную метод
        console.log("Test");
    }
};

options.makeTest();

const {border, bg} = options.colors; //это и есть деструктуризация
console.log(border);

////////Массивы и псевдо массивы//////

const arr = [1, 2, 3, 6, 8];

arr.pop(); //pop удаляет последний элемент из массива
-----
arr.push(10); // push добавляет элемент в массив 
console.log(arr);

//перебрать массив можно обычным циклом.
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// также для перебора можно исп for of конструкция

for (let value of arr) {
    console.log(value);
}

//МЫ НЕ МОЖЕМ ПЕРЕБРАТЬ ОБЪЕКТЫ С ПОМОЩЗЬЮ FOR OF

//соотношение свойства length и порядковых номеров массива состоит в том, что length состоит из последнего индекса который есть в массиве +1 (тк нумерация идет ведь с 0) ВОЗМОЖНЫЙ КОВАРНЫЙ ВОПРОС НА СОБЕСЕДОВАНИИ

///////метод перебора .forEach()
//метод forEach проходит по каждому элементу массива и применяет к каждому элементу функцию (функция может принимать в себя 3 аргумента)
//аргументы: item название, i номер по порядку, arr - ссылка на перебираемый массив)
const arr = [1, 2, 3, 6, 8];

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
});


/* Сортировка  */

const arr = [2, 13, 26, 8, 10];
arr.sort();
console.log(arr);

//далее шаблон который частенько повторяется при сортировке

function compareNum(a, b) {
    return a - b;
}


/* ПСЕВДОМАССИВЫ */

это объект структура которого совпадает со структурой массива. но у псевдомассива не будет никаких методов. 
