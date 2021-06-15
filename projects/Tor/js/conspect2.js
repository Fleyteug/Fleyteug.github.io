//////Передача или по значению. Spread оператор

let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
};

const copy = obj; //в переменную кладется ссылка на объект

copy.a = 10; //модифицируя копию мы модифицируем объект. это передача по ссылке

console.log(copy);
console.log(obj);

//создание копии объекта

function copys(mainObj) {
    let objCopys = {};

    let key;
    for (key in mainObj) {
        objCopys[key] = mainObj[key];
    }
    
    return objCopys;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copys(numbers);

newNumbers.a = 10;

console.log(newNumbers);
//это создает копию которую можно модифицировать без изменения оригинала
//мы работаем с поверхностными копиями пока что


//метод позв соединить несколько объектов object assign

const add = {
    d: 17,
    e: 20
};

/* console.log(Object.assign(numbers, add)); */ //соединяет предыдущ кусок кода и этот.

const clone = Object.assign({}, add);

clone.d = 20;

console.log(add);
console.log(clone); //создаем клон объекта и при этом модифицируем сам клон


//spread оператор (оператор разворота)

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

//оператор разворота используется для того, чтобы положить в др. массив другие данные. вызывается троеточием
