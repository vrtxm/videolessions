var date = new Date();

console.log(date.getFullYear());
console.log(date.getMonth() + 1);
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());

console.log("время: " + date.getHours() + ":" + date.getMinutes());

var arr = [8, 90, 5, 7, 0, 8, 9];
console.log(arr.length); //вывод количества значений в массиве
console.log(arr.join(", ")); //вывод значений строкой

console.log(arr.sort((a, b) => a - b));
console.log(arr.sort());    //сортировка массива
console.log(arr.reverse()); //обратная сортировка массива
console.log(arr.reverse().join(", ")); //обратная сортировка + объединение в строку

var stroka = (arr.reverse().join(", "));
console.log(stroka.split(", "));


// создание классов и характеристик
class Person {
    constructor(name, age, happiness) {
        this.name = name;
        this.age = age;
        this.happiness = happiness;
    }

    info() { //функция для класса
        console.log("Человек " + this.name + " " + this.age + " лет.");
    }
}

var artem = new Person('Artem', 22, true); // создание объекта в классе
var ira = new Person('Ira', 21, true);
console.log(artem.name);    //вывод инфы об объекте
console.log(artem.age);
console.log(artem.happiness);
console.log(ira.name);
console.log(ira.age);
console.log(ira.happiness);

artem.happiness = false;    //изменение параметров объекта
console.log(artem.happiness);

artem.info();   //обращение к функции класса
ira.info();